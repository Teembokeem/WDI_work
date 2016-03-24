var mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/basilisk_pledge_api');

// export the connection
module.exports = mongoose;
