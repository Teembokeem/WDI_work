var mongoose = require("mongoose");

var venueSchema = mongoose.Schema({
  name: { type: String, require: true },
  url:  { type: String, default: "" },
  formattedAddress: {
    type: String, default: ""
  }
});

var searchSchema = mongoose.Schema({
  place:  { type: String, required: true },
  term:   String,
  venues: [venueSchema]
});

var Search = mongoose.model("Search", searchSchema);

module.exports = Search;
