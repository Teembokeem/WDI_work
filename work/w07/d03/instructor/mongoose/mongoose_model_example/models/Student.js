// load NPM libs
var mongoose = require("mongoose");

var Student = mongoose.model(
  "Student",      // model name
  {name: String}  // model struture (ie, schema)!
);

// define export
module.exports = Student;
