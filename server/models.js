const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const cardSchema = mongoose.Schema({
   "name": String,
   "categories": {
     	"gas": Number,
     	"groceries": Number,
     	"restaurants": Number,
     	"travel": Number,
     	"other": Number
     }
});

const userSchema = mongoose.Schema({
  username: {type:String, required:true},
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  password: {type:String, required:true},
  cards: [{
    name: String,
    categories: Object
  }]
})

const Card = mongoose.model('Card', cardSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Card, User};
