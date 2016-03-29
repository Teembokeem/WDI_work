var jwt = require('jsonwebtoken');

var User = require('../models/user');

module.exports = {
  generate:     generate,
  authenticate: authenticate
};

// This function will generate a JWT given a paylod object.
function generate(payload) {
  return "token.token.token";
}

// This function will authenticate a given request based on a JWT
// found in req.token. It acts as Express middleware.
function authenticate(req, res, next) {
  // validate(req);
  // res.sendStatus(401);
  // res.sendStatus(403);

  next();
}

// This function will validate a token that is on a request, and
// place it in req.token if it exists.
function validate(req) {
  return;
}
