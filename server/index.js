const {BasicStrategy} = require('passport-http');
const passport = require('passport');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const {Card, User} = require('./models');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://localhost/ccRecommendDb';

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

const strategy = new BasicStrategy(function(username, password, callback) {

  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
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
    .find({username: req.query.token})
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

  if (!('username' in req.body)) {
    return res.status(422).json({message: 'Missing field: username'});
  }

  let {username, password, firstName, lastName} = req.body;

  if (typeof username !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: username'});
  }

  username = username.trim();

  if (username === '') {
    return res.status(422).json({message: 'Incorrect field length: username'});
  }

  if (!(password)) {
    return res.status(422).json({message: 'Missing field: password'});
  }

  if (typeof password !== 'string') {
    return res.status(422).json({message: 'Incorrect field type: password'});
  }

  password = password.trim();

  if (password === '') {
    return res.status(422).json({message: 'Incorrect field length: password'});
  }

  // check for existing user
  return User
    .find({username})
    .count()
    .exec()
    .then(count => {
      if (count > 0) {
        return res.status(422).json({message: 'username already taken'});
      }
      // if no existing user, hash password
      return User.hashPassword(password)
    })
    .then(hash => {
      return User
        .create({
          username: username,
          password: hash,
          firstName: firstName,
          lastName: lastName,
          cards: []
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

  if (!('username' in req.body)) {
    return res.status(422).json({message: 'Missing field: username'});
  }

  let {username, cards} = req.body;

  return User
    .update({ username: username }, { cards: cards }, function(error, feedback) {
      if (error) return res.send(error);
      return res.send(feedback);
    })
});

//-----------------END PUT method for editing user's cards--------------------->

app.delete('/api/users', (req, res) => {
  if (!req.body) return res.status(400).json({message: 'No Request Body'});
  if (!('username' in req.body)) return res.status(422).json({message: 'Missing field: username'});

  return User
    .find({username: req.body.username})
    .count()
    .exec()
    .then(count => {
      if (count === 0) return res.status(422).json({message: 'username not found'});
      User.remove({username: req.body.username}, function (err) {
        if (err) return console.error(err);
      });
      return res.status(204).json({message: 'User has been deleted.'});
    })
    .catch(err => res.status(500).json({message: 'Something went wrong'}));
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
