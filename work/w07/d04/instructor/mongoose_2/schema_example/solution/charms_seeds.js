var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/necronomicon");

var charmSchema = new mongoose.Schema({
  purchaser:   {
                 type: String,
                 required: true,
                 match: /(sophia|grammy|uncle colin)/i
               },
  theme:       { type: String, default: "Life Experience" },
  material:    {
                 type: String,
                 required: true,
                 enum: ["silver", "gold", "ceramic", "shell"]
               },
  cost:        { type: Number, default: 10, min: 10, max: 50 },
  description: { type: String, maxlength: 50 }
});

var Charm = mongoose.model("Charm", charmSchema);

Charm.remove({}, function(err, results) {
  Charm.create([
    // {material: "silver", theme: "tennis racket", purchaser: "Mom"},
    // {material: "nickel-plated", theme: "cross",         purchaser: "Grammy"},
    // {material: "wooden",        theme: "tennis racket", purchaser: "Uncle Colin"},
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
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
      mongoose.connection.close();
  });
});
