const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const cardSchema = mongoose.Schema({
  "name": String,
  "categories": {
    "gas": Number,
   	"groceries": Number,
   	"restaurants": Number,
   	"travel": Number,
   	"other": Number,
   }
});

const userSchema = mongoose.Schema({
  username: {type:String, required:true},
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  password: {type:String, required:true},
  email: {type:String, required:true},
  cards: [{
    name: String,
    categories: Object,
  }],
});

userSchema.methods.apiRepr = function() {
  return {
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || '',
    cards: this.cards || '',
    email: this.email || '',
  };
};

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
}

const Card = mongoose.model('Card', cardSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Card, User};
