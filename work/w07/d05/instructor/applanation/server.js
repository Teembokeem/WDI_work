// Node is a cross-platform runtime environment that can be used for developing
// server-side web applications.

// RENAME THIS FILE TO SERVER.JS for best practice!

// Express.js is a Node.js web application server framework, designed for
// building single-page, multi-page, and hybrid web applications. It is the de
// facto standard server framework for node.js.
var express = require('express');

// path is from Node. It makes path manipulation easier. Here's more information
// on the module: https://docs.nodejitsu.com/articles/file-system/how-to-use-the-path-module
var path = require('path');

// a node package made by the express team to work with express. serve-favicon
// is a Node.js middleware for serving a favicon. A favicon is a visual cue that
// client software, like browsers, use to identify a site (the little logo in
// the tab)
var favicon = require('serve-favicon');

// a node package made by the express team to work with express as middleware.
// It logs out HTTP requests to the console for us. Named after Dexter Morgan.
var logger = require('morgan');

// a node package made by the express team to work with express as middleware.
// parses the HTTP Cookie header and populates req.cookies with an object keyed
// by the cookie names. The session is stored in a cookie, so we use this to
// parse it. Another way of saying it: It parses request cookies, populating
// req.cookies and req.signedCookies when the secret is passed, used for signing
// the cookies.
var cookieParser = require('cookie-parser');

// a node package made by the express team to work with express as middleware.
// a middleware used for going over POST request data, parse it into json and
// put it on req.body. Another way of saying it: for reading POSTed form data
// into req.body
var bodyParser = require('body-parser');

// require your database! This is the only way to get data from your db!
var mongoose = require('./config/database');

// requiring  routes for our views and our API. Recall the routes file
// in Rails - these are essentially the same. We'll connect them to our
// server further down AFTER the middleware.
var routes = require('./config/routes');

// Instantiating our express application. This should only be done once per
// project!
var app = express();

// Grab the environment object - remember that we're extending the
// process.env object in our environment file!
var env = require('./config/environment');

// Configure the application (and set it's title!).
app.set('title', env.TITLE);
app.set('safe-title', env.SAFE_TITLE);

// view engine setup
// __dirname is from node's path module, it's always the directory in which the
// currently executing script resides. More info here:
// http://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
app.set('views', path.join(__dirname, 'views'));

// 'view engine' is from express. We're setting what kind of views it expects to
// ejs.
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public - places your favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// While in the development environment, log out HTTP requests to the terminal
app.use(logger('dev'));

// parse the JSON text in the request body
app.use(bodyParser.json());

// to decode a form POST, the content-type must be specified as
// application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));

// applying to cookie parser to the express app as middleware.
app.use(cookieParser());

// Serving files, such as images, CSS, JS and other static files is accomplished
// with the help of a built-in middleware in Express: express.static
app.use(express.static(path.join(__dirname, 'public')));

// we're now using the routes we defined earlier.
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// exports the app for use in other places in our project
module.exports = app;
