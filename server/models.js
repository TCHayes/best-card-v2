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

const categorySchema = mongoose.Schema({
  "name": String
});

const Card = mongoose.model('Card', cardSchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = {Card, Category};
