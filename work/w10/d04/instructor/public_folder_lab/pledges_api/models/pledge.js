// Require mongoose to create a model.
var mongoose = require('mongoose');

// Create a schema of your model
var pledgeSchema = new mongoose.Schema({
  content:  String,
  category: String
});

// Create the model using your schema.
var Pledge = mongoose.model('Pledge', pledgeSchema);

// Export the model of the Pledge.
module.exports = Pledge;
