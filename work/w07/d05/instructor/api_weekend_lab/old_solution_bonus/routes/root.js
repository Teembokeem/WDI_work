var express = require('express');
var router = express.Router();

var request = require('request');
require('dotenv').load();

var baseUri = 'https://api.foursquare.com/v2/venues/'

var clientIdParam     = "?client_id="     + process.env.FOURSQUARE_CLIENT_ID;
var clientSecretParam = "&client_secret=" + process.env.FOURSQUARE_CLIENT_SECRET;

var authParams = clientIdParam + clientSecretParam + "&v=20151001"


/* GET home page (ROOT) */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET /venues?place[name]&place[query] (INDEX) */
router.get('/venues', function(req, res, next) {
  var uri = baseUri + '/search' + authParams;
  uri += "&near=" + encodeURIComponent(req.query.place.name);
  uri += "&query=" + encodeURIComponent(req.query.place.query);

  request.get({uri: uri, json: true}, function(err, response, body) {
    res.render(
      'venues/index',
      { venues: body.response.venues }
    );
  });
});

/* GET /venues/:id (SHOW) */
router.get('/venues/:id', function(req, res, next) {
  var uri = baseUri + req.params.id +  authParams;

  request.get({uri: uri, json: true}, function(err, response, body) {
    res.render(
      'venues/show',
      { venue: body.response.venue }
    );
  });
});

module.exports = router;
