var mongoose = require('./config/database');

var Search = require("./models/search");

Search.remove({}, function(err, results) {
  if (err) {
    console.log(err);
  } else {
    console.log("Searches cleared...");
    mongoose.connection.close(function() {
      process.exit(0);
    });
  }
});


