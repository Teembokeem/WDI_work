var express = require('express');
var router = express.Router();

// require the new npm modules in package.json, including
// loading dotenv immediately...
var request = require('request');
require('dotenv').load();

// Creating the basic "endpoint" for a places search:
// - https://developer.foursquare.com/start/search
// - https://developer.foursquare.com/docs/venues/search

var baseUri = 'https://api.foursquare.com/v2/venues/search'

// Creating the param string necessary to authenticate the request,
// described in the docs here:
// - https://developer.foursquare.com/overview/auth#authentication
//
// Loading the API keys ("client ID" and "client secret") from the
// file .env in to the current process, using
// `require('dotenv').load()` above.

var clientIdParam     = "?client_id="     + process.env.FOURSQUARE_CLIENT_ID;
var clientSecretParam = "&client_secret=" + process.env.FOURSQUARE_CLIENT_SECRET;

// Adding the auth params together with the "versioning" param:
// - https://developer.foursquare.com/overview/versioning
// - (the beginning of…) https://developer.foursquare.com/start/search

var authParams = clientIdParam + clientSecretParam + "&v=20151001"


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '▦▨▧▩\'in it!' });
});

/* GET /venues?place[name]&place[query] */
router.get('/venues', function(req, res, next) {
  console.log(req.query);

  // Build the entire URI from the static parts above, and the user
  // input, encoded for URIs.
  var uri = baseUri + authParams;
  uri += "&near=" + encodeURIComponent(req.query.place.name)
  uri += "&query=" + encodeURIComponent(req.query.place.query)

  console.log("Attempting to connect to: ", uri);

  // Use request to contact the API…
  request.get(uri, function(err, response, body) { // note, do not call the middle argument here 'res'!!!
    var body = JSON.parse(body);

    res.render(
      'venues/index',
      {
        title:  '▦▨▧▩\'in it!',
        venues: body.response.venues
      }
    );
  });
});

module.exports = router;
