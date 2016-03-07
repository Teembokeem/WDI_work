// load NPM libs
var mongoose = require("mongoose");

var Student = mongoose.model(
  "Student",      // model name
  {name: String}  // model struture (ie, schema)!
);

var studentschema = Student.schema;
// define export
module.exports = {
  student: Student,
  studentSchema: studentschema
};
