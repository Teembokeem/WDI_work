var _ = require('lodash');

// Load the vars in .env into the process.env (Node's "environment")
require("dotenv").load();

var localEnvVars = {
  TITLE:      '▦▨▧▩\'in it!',
  SAFE_TITLE: 'foursquare_api_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
