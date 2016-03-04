var mongoose = require("mongoose");

var puppySchema = new mongoose.Schema({
  name:      String,
  breed:     String,
  age:       Number,
  owner:     {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Owner"
             },
  ownerName: String
});

puppySchema.virtual("formalName").get(function() {
  return `${this.name} the ${this.breed}`;
});

var Puppy = mongoose.model("Puppy", puppySchema);

module.exports = Puppy;
