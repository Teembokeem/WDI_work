var mongoose = require("mongoose");

var Owner = require("./models/Owner");
var Puppy = require("./models/Puppy");

mongoose.connect("mongodb://localhost/puppies_app");

Puppy.find({}, function(err, puppies) {
  if (err) console.log(err);

  puppies.forEach(function(puppy) {
    console.log(`${puppy.formalName} is owned by ${puppy.ownerName}.`);
  });

  mongoose.connection.close();
});
