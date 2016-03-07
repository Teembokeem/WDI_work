var request = require('request');
var env = require('../config/environment');
var routes = require('../config/routes');
var mongoose = require('mongoose');

//Importing search model
var Search = require('../models/Search');
var database = require('../config/database');

module.exports = {
  venuesSearch: venuesSearch,
  index: index
};

function index(req, res, next) {
  Search.find({}, function(err, searches) {
    if (err) console.log(err)
    res.render('index', {searches: searches});
  })
};



function venuesSearch(req, res) {
  request('https://api.foursquare.com/v2/venues/search?client_id=' + env.CLIENT_ID + '&client_secret=' + env.CLIENT_SECRET + '&v=20130815&near='+ req.body.search.place +'&query=' + req.body.search.food,
    function(err, response, results) {
      if (err) console.log(err);
      var result = JSON.parse(results).response.venues;
      res.render('venues', {venuelist: result});

  });
  Search.remove({}, function(err, results) {
    console.log('Creating Search...');
    console.log();
    Search.create({
      place: req.body.search.place,
      term: req.body.search.food
      }, function(err, search) {
        if (err) console.log(err);
        console.log(search[0]);
        database.connection.close();
      });
  })
};


