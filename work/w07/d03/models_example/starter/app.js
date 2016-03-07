// load NPM and standard libs
var colors   = require("colors"),
    mongoose = require("mongoose"),
    prompt   = require("cli-prompt"),
    util     = require("util");
// connect to db
mongoose.connect('mongodb://localhost/student_example_app');
// import model
var Student = require("./models/Student.js");
// run application
console.log("Welcome to the Student Database!\n".green);
printMenu();
function printMenu() {
  console.log(`What would you like to do?`.red);
  console.log(`
    1. See the class roster.
    2. Add a new student.
    3. Edit a student's information.
    4. Give a student a new grade.
    5. Remove a student.
  `);
  prompt("Enter a number from above, or 'q' to quit: ".red, function(input) {
    if (input === "q") process.exit(0);
    input = parseInt(input);
    switch (input) {
      case 1:
        console.log("You chose to show the class roster…".red);
        showRoster(function() {
          printMenu();
        });
        break;
      case 2:
        console.log("You chose to add student…".red);
        addStudent(function() {
          printMenu();
        })
        break;
      case 3:
        console.log("You chose to edit student…".red);
        // showRoster();
        // console.log("Choose student by id:");
        break;
      case 4:
        console.log("You chose to give student a grade…".red);
        // console.log("Class roster:");
        // console.log("Choose student by id:");
        break;
      case 5:
        console.log("You chose to remove a student…".red);
        break;
      default:
        console.log("Input not understood…".red);
    }
    console.log();
    // printMenu(); // do it again!
  });
}
function showRoster(cb) {
  Student.find({}, function(err, results){
    console.log("Class roster:".green);
    results.forEach(function (students) {
      console.log(students.name);
    })
    console.log();
    cb();
  });
}
function addStudent(cb) {
  prompt("Enter a student name: ".yellow, function(name) {
    Student.create({name: name}, function(err, results) {
      console.log("Hello " + results.name);
      console.log();
      cb();
    });
  });
}
