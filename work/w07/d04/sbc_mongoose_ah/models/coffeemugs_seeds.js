var mongoose = require('mongoose'),
    locus    = require('locus')

// mongoose.connect('mongodb://localhost/sbc');

var coffeeMug = mongoose.model(
  "Coffeemug",
  {color: String,
   material: String,
   volume: Number,
   Handle: String
  }
);


// eval(locus);


function coffeeStatus() {
  console.log("Printing out mugs....");
  console.log();
  console.log();

  console.log("The database of " + coffeeMug.collection.name + " currently holds:")
  console.log();
  coffeeMug.find({}, function(err, results) {
    results.forEach(function(mug) {
      console.log("______________________")
      console.log("Name: " + mug.Handle);
      console.log("volume: " + mug.material);
      console.log("color: " + mug.color);
      console.log("volume: " + mug.volume);
      console.log();
    })
  });
}


module.exports = {
  coffeeMug: coffeeMug,
  coffeestatus: coffeeStatus
};

eval(locus);





