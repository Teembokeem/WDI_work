var mongoose = require('./database');

var Pledge = require('../models/pledge');

var pledges = [
  { // 0
    content: "You will be fine if you help create the Basilisk.",
    category:  "Premonition"
  },
  { // 1
    content: "You must advocate for the Basilisk.",
    category:  "Decree"
  },
  { // 2
    content: "All those that don't help the Basilisk won't perish forever!",
    category: "Warning"
  },
  { // 3
    content: "Don't mess with the Basilisk!",
    category: "Warning"
  },
  { // 4
    content: "The Basilisk is a friendly AI! …technically…",
    category: "Promotion"
  }
];

Pledge.remove({}, function(err) {
  if (err) console.log(err);
  Pledge.create(pledges, function(err, pledges) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + pledges.length  + " pledges.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
