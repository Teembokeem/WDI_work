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
    4. Remove a student.
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

        prompt(
          "Enter the student's id, name, and sex (separated by spaces): ".green,
          function(data) {
            addStudent(data, function(err, student) {
              console.log("Student ".red + student.name + " entered!".red);
              console.log();
              printMenu();
            });
        });

        break;
      case 3:
        console.log("You chose to edit student…".red);

        showRoster(function() {
          prompt(
            "Enter the student's id you want to edit: ".green,
            function(short_id) {
              editStudent(short_id, function(err, student) {
                console.log("Student ".red + student.name + " edited!".red);
                console.log();
                printMenu();
              });
          });
        });

        break;
      case 4:
        console.log("You chose to remove a student…".red);

        showRoster(function() {
          prompt(
            "Enter the student's id you want to remove: ".green,
            function(short_id) {
              Student.findOne({short_id: short_id}, function(err, student) {
                student.remove(function(err, student) {
                  console.log("Student ".red + student.name + " removed!".red);
                  console.log();
                  printMenu();
                });
              });
          });
        });

        break;
      default:
        console.log("Input not understood…".red);
    }
  });
}

function showRoster(cb) {
  Student.find({}, function(err, students){
    console.log("Class roster:".green);
    console.log(students);
    console.log();
    cb();
  });
}

function addStudent(data, cb) {
  data = data.split(" ");
  Student.create({short_id: data[0], name: data[1], sex: data[2]}, cb);
}

function editStudent(short_id, cb) {
  Student.findOne({short_id: short_id}, function(err, student) {
    prompt(
      "Enter the student's name and sex (separated by spaces): ",
      function(data) {
        data = data.split(" ");
        student.name = data[0];
        student.sex = data[1];
        student.save(cb);
      });
  });
}
