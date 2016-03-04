// This file adds localEnvVars to the process object's env object.
// It also exports the env object (exists on the process object), so we
// have an shorter name to access the env object.
var _ = require('lodash');

var localEnvVars = {
  TITLE:      'applanation',
  SAFE_TITLE: 'applanation'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
