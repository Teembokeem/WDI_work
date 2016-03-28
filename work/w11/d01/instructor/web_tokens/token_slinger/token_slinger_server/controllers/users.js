var jwt     = require('jsonwebtoken'),
    moment  = require('moment');

var User = require('../models/user');

module.exports = {
  create: create,
  me:     me,
  user: {
    checkForFields:       checkForFields,
    validatePassword:     validatePassword,
    validateDob:          validateDob,
    checkIfAlreadyExists: checkIfAlreadyExists
  },
  auth: {
    checkForTokenInHeader: checkForTokenInHeader,
    validateToken:         validateToken
  }
};

function create(req, res, next) {
  console.log();
  console.log('  >>> Creating user!'.red);

  req.body.dob = Date.parse(req.body.dob);
  User
    .create(req.body)
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          id:    user._id
        }
      });
    }).catch(function(err) {
      next(err);
    });
}

// Essentially, a "me" route is a show route, for the current user.
function me(req, res, next) {
  console.log();
  console.log('  >>> Retrieving user!'.red);

  User
    .findOne({email: req.decoded.email}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
}

// ************************* USER VALIDATIONS *************************

function checkForFields(req, res, next) {
  if (
    !req.body.email    ||
    !req.body.name     ||
    !req.body.password ||
    !req.body.dob
  ) {
    next({
      code: 422,
      message: 'Missing required field: one of email, name, password, or dob'
    });
  } else {
    console.log("    All fields present…".green);
    next();
  }
}

function validatePassword(req, res, next) {
  if (req.body.password.length < 5) {
    next({
      code: 422,
      message: 'Password field must have minimum of 5 characters'
    });
  } else {
    console.log("    Password validated:".green, req.body.password);
    next();
  }
}

function validateDob(req, res, next) {
  var date = moment(req.body.dob, moment.ISO_8601);
  var eighteen_years_ago =
    moment().subtract(18, 'years').startOf('day');

  var valid = date.isValid();
  var flags = date.parsingFlags();

  if (!valid && !flags.iso) {
    next({
      code: 422,
      message: 'dob invalid format: not in ISO 8601. ' +
      'See https://en.wikipedia.org/wiki/ISO_8601#Dates.',
    });
  } else
  if (!valid && (flags.overflow !== -1)) {
    next({
      code: 422,
      message: 'dob invalid date part: year, month, or date.',
    });
  } else
  if (date.isAfter(eighteen_years_ago)) {
    next({
      code: 422,
      message: 'dob invalid: you must be 18 to enter.',
    });
  } else {
    console.log("    Date of birth validated:".green, req.body.dob);
    next();
  }
}

function checkIfAlreadyExists(req, res, next) {
  User
    .find({email: req.body.email}).exec()
    .catch(function(err) {
      next(err);
    })
    .then(function(users) {
      console.log(users)
      if (users.length > 0) {
        next({
          code: 422,
          messge: 'User email already exists.',
        });
      } else {
        console.log("    User doesn't exist yet…".green, req.body.email);
        next();
      }
    });
}

// ************************* AUTH VALIDATIONS *************************

function checkForTokenInHeader(req, res, next) {
  var authorizationHeader = req.get('Authorization'),
      method,
      token;

  // conditionally set all the variables...
  if (authorizationHeader) authorizationHeader = authorizationHeader.split(' ');
  if (authorizationHeader && authorizationHeader.length > 0) {
    method = authorizationHeader[0];
  }
  if (authorizationHeader && authorizationHeader.length > 1) {
    token = authorizationHeader[1];
  }

  if (!authorizationHeader) {
    next({
      code:    400,
      message: 'Authorization failed (invalid_request): missing necessary header. ' +
      'See https://tools.ietf.org/html/rfc6750#section-2.1'
    });
  } else
  if (method.toLowerCase() !== 'bearer' && method.toLowerCase() !== 'token') {
    next({
      code:    400,
      message: 'Authorization failed (invalid_request): Authorization method ' +
      'must be \'Bearer\' or \'Token\''
    });
  } else
  if (!token) {
    next({
      code:    401,
      message: 'Authorization failed (invalid_token): token missing.'
    });
  } else {
    // add the token to the request
    console.log("    Token found in header:".green, token);
    req.token = token;
    next();
  }
}

function validateToken(req, res, next) {
  jwt.verify(req.token, process.env.SECRET_KEY, function(err, decoded) {
    if (err && err.name === 'TokenExpiredError') {
      next({
        code:    401,
        message: 'Authorization failed (invalid_token): token epired at ' + err.expiredAt + '.'
      });
    } else
    if (err) {
      next({
        code:    401,
        message: 'Authorization failed (invalid_token): token malformed.'
      });
    } else {
      // add the decoded token to the request
      console.log("    Token validated and decoded…".green, decoded);
      req.decoded = decoded;
      next();
    }
  });
}
