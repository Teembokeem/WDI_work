// load NPM and standard libs
var colors   = require("colors"),
    mongoose = require("mongoose"),
    util     = require("util"),
    locus    = require("locus");

// connect to db
mongoose.connect('mongodb://localhost/charm_bracelet_app');

eval(locus);
