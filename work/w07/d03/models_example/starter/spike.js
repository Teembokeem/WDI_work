// load NPM and standard libs
var colors   = require("colors"),
    mongoose = require("mongoose"),
    prompt   = require("cli-prompt"),
    util     = require("util"),
    locus    = require("locus");

// connect to db
mongoose.connect('mongodb://localhost/student_example_app');

// import model
var Student = require("./models/Student.js");

eval(locus);

