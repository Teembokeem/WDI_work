var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sbc_db");

var CoffeeMug = mongoose.model(
  "CoffeeMug",
  {
    color:    String,
    material: String,
    volume:   Number, // in cups!
    handle:   Boolean
  }
);

console.log("Creating mugs...");

// First: clean out the DB!
CoffeeMug.remove({}, function(err) {

  // Second: create the mugs!
  CoffeeMug.create([
      {color: "Blue",    material: "Ceramic",    volume: 3,   handle: true},
      {color: "White",   material: "Ceramic",    volume: 2.5, handle: false},
      {color: "Orange",  material: "Mostly BPH", volume: 5,   handle: true},
      {color: "Rainbow", material: "Ceramic",    volume: 2.5, handle: true}
    ], function(err, mugs) {

      // finally, print out completion!
      if (err) console.log(err);
      console.log("The database now has the mugs:", mugs);

      // … and close the door!
      mongoose.connection.close();
  });
});

