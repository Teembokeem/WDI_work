var mongoose = require('mongoose'),
    debug    = require('debug')('app:db');

var env = require('./environment');

// Use different database URIs based on whether an env var exists.
var dbUri = env.MONGOLAB_URI ||
            'mongodb://localhost/' + env.SAFE_TITLE;

if (!env.MONGOLAB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

if (!mongoose.connection._hasOpened) mongoose.connect(dbUri);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  debug('Mongoose default connection open to ' + dbUri);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  debug('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  debug('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    debug('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;
