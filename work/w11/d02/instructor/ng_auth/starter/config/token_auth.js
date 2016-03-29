var jwt = require('jsonwebtoken');

var User = require('../models/user');

module.exports = {
  generate:     generate,
  validate:     validate,
  authenticate: authenticate
};

// This function will generate a JWT given a paylod object.
function generate(payload) {
  return "token.token.token";
}

// This function will validate a token that is on a request, and
// place it in req.token if it exists. It acts as Express middleware.
function validate(req, res, next) {
  // res.sendStatus(401);
  next();
}

// This function will authenticate a given request based on a JWT
// found in req.token. It acts as Express middleware.
function authenticate(req, res, next) {
  // res.sendStatus(403);
  next();
}
