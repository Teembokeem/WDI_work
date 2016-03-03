var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/necronomicon");

var charmSchema = new mongoose.Schema({
  purchaser:   String,
  theme:       String,
  material:    String,
  cost:        Number,
  description: String
});

var Charm = mongoose.model("Charm", charmSchema);

Charm.remove({}, function(err, results) {
  Charm.create([
    {material: "nickel-plated", theme: "tennis racket", purchaser: "Mom"},
    {material: "nickel-plated", theme: "cross",         purchaser: "Grammy"},
    {material: "wooden",        theme: "tennis racket", purchaser: "Uncle Colin"},
    {
      material: "ceramic",
      theme: "bear",
      purchaser: "Sophia",
      cost: 15,
      description: "from a trip to the San Diego Zoo"
    },
    {
      material: "silver",
      theme: "cross",
      purchaser: "Grammy",
      description: "has a heart; bought when the Pope visited"
    },
    {
      material: "shell",
      purchaser: "Sophia",
      description: "found and glued to a clasp during a Scout trip"
    }
    ], function(err, results) {
      console.log(results);
      mongoose.connection.close();
  });
});

