var mongoose = require("mongoose");

var ownerSchema = new mongoose.Schema({
  first: String,
  last:  String,
  city:  String
});

ownerSchema.virtual("name").get(function() {
  return `${this.first} ${this.last}`;
});

ownerSchema.methods.fetchPuppies = function(cb) {
  mongoose.model("Puppy").find({owner: this._id}, cb);
};

var Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
