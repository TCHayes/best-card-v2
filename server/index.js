const {BasicStrategy} = require('passport-http');
const passport = require('passport');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const {Card, User} = require('./models');
const {sendEmail} = require('./emailer');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://localhost/ccRecommendDb';
const APP_URL_BASE = process.env.APP_URL_BASE || 'http://localhost:8080';

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

const strategy = new BasicStrategy(function(email, password, callback) {

  let user;
  User
    .findOne({ email: email })
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect email'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, {message: 'Incorrect password'});
      }
      else {
        return callback(null, user);
      }
    });
});

passport.use(strategy);

app.get('/api/cards', (req, res) => {
 Card
   .find()
   .exec()
   .then(cards => {
     res.json(cards);
   })
   .catch(err => {
     console.error(err);
     res.status(500).json({error: 'something went terribly wrong'});
   });
});

app.get('/api/users', passport.authenticate('basic', {session: false}), (req, res) => {

  // TODO what if there is no token?
  User
    .find({ email: req.query.token})
    .exec()
    .then(userInfo => {
      res.json(userInfo[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({error: 'something went terribly wrong'});
    });
});

//----START POST method for adding users to the users collection in our DB----->
app.post('/api/users', (req, res) => {
  if (!req.body) {
    return res.status(400).json({message: 'No request body'});
  }
  if (!('email' in req.body)) {
    return res.status(422).json({message: 'Missing field: email'});
  }

  let { email, password } = req.body;

  email = email.trim().toLowerCase();
  password = password.trim();

  if (!(password)) {
    return res.status(422).json({message: 'Missing field: password'});
  }

  if (typeof password !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: password'});
  }

  if (password === '') {
    return res.status(422).json({message: 'Incorrect field length: password'});
  }

  if (!(email)) {
    return res.status(422).json({message: 'Missing field: email'});
  }
  if (email === '') {
    return res.status(422).json({message: 'Incorrect field length: email'});
  }

  // check for existing user
  return User
    .find({ email })
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'an account with this email already exists'});
      }
      // if no existing user, hash password
      return User.hashPassword(password)
    })
    .then(hash => {
      return User
        .create({
          email: email,
          password: hash,
          cards: [],
        })
    })
    .then(user => {
      return res.status(201).json(user.apiRepr());
    })
    .catch(err => {
      res.status(500).json({message: 'Internal server error'})
    });
});

//---------------------------------END of POST method for adding new users----->

//------------START PUT method for editing user's cards------------------------>

app.put('/api/users', (req, res) => {
  if (!req.body) {
    return res.status(400).json({message: 'No request body'});
  }

  if (!('email' in req.body)) {
    return res.status(422).json({message: 'Missing field: email'});
  }

  let { email, cards } = req.body;

  return User
    .update({ email: email }, { cards: cards }, function(error, feedback) {
      if (error) return res.send(error);
      return res.send(feedback);
    })
});

//-----------------END PUT method for editing user's cards--------------------->

app.delete('/api/users', (req, res) => {
  if (!req.body) return res.status(400).json({message: 'No Request Body'});
  if (!('email' in req.body)) return res.status(422).json({message: 'Missing field: email'});

  return User
    .find({ email: req.body.email})
    .count()
    .exec()
    .then(count => {
      if (count === 0) return res.status(422).json({message: 'email not found'});
      User.remove({ email: req.body.email}, function (err) {
        if (err) return console.error(err);
      });
      return res.status(204).json({message: 'User has been deleted.'});
    })
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
})


//--------------Password Reset Endpoints -------------------------------------->

const randomString = length => {
  let text = "";
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789_-.";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

app.put('/api/forgotpass', (req, res) => {
  if (!req.body) return res.status(400).json({message: 'No Request Body'});
  if (!req.body.email) return res.status(400).json({message: 'No Email in Request Body'});

  const token = randomString(40); //TODO THIS GENERATES A RANDOM, BUT NOT NECESSARILY UNIQUE STRING
  const emailData = {
    to: req.body.email,
    subject: "BestCard Password Reset Instructions",
    text: `Please use the following link for instructions to reset your password: ${APP_URL_BASE}/resetpass/${token}`,
    html: `<p>Please use the link below for instructions to reset your password.</p><p>${APP_URL_BASE}/resetpass/${token}</p>`
  };

  return User
  .update({ email: req.body.email }, { $set: { resetPassLink: token }}, function(error, feedback) {
    //TODO Nothing currently in place to expire token after set time
    if (error) return res.send(error);
    else {
      sendEmail(emailData);
      return res.status(200).json({message: `Email has been sent to ${req.body.email}`});
    }
  })
})

app.put('/api/resetpass', (req, res) => {
  const {resetPassLink, newPassword} = req.body;
  User.hashPassword(newPassword)
  .then(hashedPass => {
    return User
    .update({resetPassLink}, { $set: { password: hashedPass, resetPassLink: '' }}, function(error, feedback) {
      if (error) return res.send(error);
      return res.send(feedback);
    })
  })
})

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

let server;
function runServer(port=3001) {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if(err) {
        return reject(err);
      }
      console.log('Db connected');

      server = app.listen(port, () => {
        resolve();
      }).on('error', reject);
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
