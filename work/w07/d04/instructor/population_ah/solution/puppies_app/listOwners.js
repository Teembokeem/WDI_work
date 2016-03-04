var mongoose = require("mongoose");

var Owner = require("./models/Owner");
var Puppy = require("./models/Puppy");

mongoose.connect("mongodb://localhost/puppies_app");

Owner.find({}, function(err, owners) {
  if (err) console.log(err);

  // for each owner
  owners.forEach(function(owner, i) {

    // get the list of puppies for that owner (written on their schema)
    owner.fetchPuppies(function(err, puppies) {
      if (err) console.log(err);

      // print the owners name, and all the puppies!
      console.log(`${owner.name} owns:`);
      puppies.forEach(function(puppy) {
        console.log(`  ${puppy.formalName}`);
      });

      // if this is the last owner, close the connection
      if (i == owners.length-1) mongoose.connection.close();
    });
  });


});
