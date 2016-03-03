// load NPM libs
var mongoose = require("mongoose");

var Student = mongoose.model(
  "Student",      // model name
  {
    short_id: String,
    name:     String,
    sex:      String
  }  // model struture (ie, schema)!
);

// define export
module.exports = Student;
