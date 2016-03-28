var express    = require('express');
var path       = require('path');
var favicon    = require('serve-favicon');
var logger     = require('morgan');
var bodyParser = require('body-parser')
var debug      = require('debug')('app:http');
var colors     = require('colors');

// *** SETUP ***

var env    = require('./config/environment');
var routes = require('./routes/routes.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + env.SAFE_TITLE);

var app = express();

app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);

app.set('secret-key', env.SECRET_KEY);

app.locals.title = app.get('title');

// *** MIDDLEWARE ***

// CORS (allows the separate client to send requests)…
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(logger('dev'));

app.use(favicon(path.join(__dirname, 'public', 'ga-favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

// *** API ROUTES ***

// Root path: returns a list of possible requests.
app.get('/api', function(req, res, next) {
  console.log();
  console.log('Request made to API root.'.blue);
  var baseUri = `${req.protocol}:\/\/${req.get('host')}\/api`;
  res.json({
    token_url: `POST ${baseUri}/token`,
    user_urls: [
      `POST ${baseUri}/users`,
      `GET  ${baseUri}/me`
    ]
  });
});

// Validation: check for correctly formed requests (content type).
app.use(['/api/users', '/api/token'], function(req, res, next) {
  if (req.get('Content-Type') !== 'application/json') {
    console.log();
    console.log('Request made without correct content type.'.blue);
    next({
      code: 400,
      message: 'Request body must be JSON. Set your headers; see ' +
      'http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17'
    });
  } else {
    next();
  }
});

// Parsing and validation (replies with good errors for JSON parsing).
app.use('/api', bodyParser.json());
app.use(debugReq);

// Send all requests to our API router.
app.use('/api', routes);

// *** ERROR ROUTES ***

// Catches all 404 routes, either for non-existing routes
// or routes that have passed to it.
app.use(function(req, res, next) {
  next({code: 404});
});

// Error-handling layer.
app.use(function(err, req, res, next) {
  switch(err.code) {
    case 400: err.title = '400 Bad Request';  break;
    case 401: err.title = '401 Unauthorized'; break;
    case 403: err.title = '403 Forbidden';    break;
    case 404: err.title = '404 Not Found';    break;
    case 422: err.title = '422 Unprocessable Entity'; break;
    default:
      err.code  = 500;
      err.title = '500 Internal Server Error';
  }

  console.log('  >>> Error!'.red);
  console.log(err);
  res.status(err.code).json(err);
});

function debugReq(req, res, next) {
  debug('Debugging request data:'.red);
  debug('headers:'.yellow);
  debug(req.headers);
  debug('params:'.yellow);
  debug(req.params);
  debug('query:'.yellow);
  debug(req.query);
  debug('body:'.yellow);
  debug(req.body);
  next();
}

module.exports = app;
