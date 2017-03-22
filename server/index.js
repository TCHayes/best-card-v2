const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const {Card, User} = require('./models');
const DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL || 'mongodb://localhost/ccRecommendDb';

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

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

app.get('/api/users', (req, res) => {
  //console.log(req.query.token);
  // what if there is no token?
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
