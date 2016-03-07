var mongoose = require('mongoose');


var searchSchema = new mongoose.Schema({
  place: {type: String, required: true},
  term: {type:String},
});

var Search = mongoose.model("Search", searchSchema)

module.exports = Search;
