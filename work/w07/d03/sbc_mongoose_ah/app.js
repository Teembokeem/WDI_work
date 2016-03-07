var mongoose = require('mongoose'),
    locus    = require('locus');
    prompt   = require('cli-prompt');

mongoose.connect('mongodb://localhost/sbc');

var coffeemugs = require('./models/coffeemugs_seeds');
var printers = require('./models/printers_seeds');

printMenu();

function printMenu() {
  console.log();
  console.log("THE MENU DOE:");
  console.log("_____________________");
  console.log("1. List printers doe.");
  console.log("_____________________");
  console.log("2. List coffee mugs doe.");
  console.log("_____________________");
  console.log("3. add a coffee mug.");
  console.log("_____________________");
  console.log("4. edit a coffee mug doe.");
  console.log("_____________________");
  console.log("5. delete stuff :(.");
  console.log("_____________________");
  prompt("Enter a number from above, or 'q' to quit: ", function(input) {
    if (input === "q") process.exit(0);
    input = parseInt(input);
    switch (input) {
      case 1:
        printers.printerStatus();
        break;
      case 2:
        coffeemugs.coffeestatus();
        break;
      case 3:
        console.log("You chose to edit student…");
        // showRoster();
        // console.log("Choose student by id:");
        break;
      case 4:
        console.log("You chose to give student a grade…");
        // console.log("Class roster:");
        // console.log("Choose student by id:");
        break;
      case 5:
        console.log("You chose to remove a student…");
        break;
      default:
        console.log("Input not understood…");
    }
    console.log();
    printMenu(); // do it again!
  });
}



