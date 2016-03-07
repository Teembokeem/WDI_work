var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/charmz');


var charmSchema = new mongoose.Schema( {
    purchaser: {type: String,
                required: true,
                match: /(sophia|grammy|uncle colin)/i },
    theme: {type: String, default: "Lyfe Expurienz."},
    material: {type:     String,
               required: true,
               enum:     ["silver", "nickel-plated", "gold", "ceramic", "shell"]},
    cost: {type: Number, default: 10, min: 10, max: 50},
    description: String
  });

var Charm = mongoose.model("Charm", charmSchema);


Charm.remove({}, function(err, results) {

  console.log("Creating charmzzzzzz");
  console.log();
  Charm.create([
    // {purchaser: "Mammy",
    //  material: "nickel-plated",
    //  description: "from when I got an A in biology."
    // },
    {purchaser: "Sophia",
     theme: "bear",
     material: "ceramic",
     cost: 15,
     description: "from when Sophia went to the San Diego Zoo."
    },
    {purchaser: "Sophia",
     theme: "shell",
     material: "shell",
     description: "from Sophia's scout trip."
    },
    {purchaser: "Grammy",
     theme: "cross",
     material: "nickel-plated",
     description: "from when I hurt my legz."
    },
    {purchaser: "Grammy",
     theme: "cross with a heart",
     material: "silver",
     description: "from when Grammy visited the Pope."
    },
    // {purchaser: "Uncle Colin",
    //  theme: "tennis racket",
    //  material: "wooden",
    //  description: "from when I made my first poop."
    // },
    ], function(err, charms) {
      if (err) {
        console.log(err);
      } else {
      console.log("here dat list doe:");
      console.log();
      console.log();
      console.log(charms);
      mongoose.connection.close();
      }
    });
});
