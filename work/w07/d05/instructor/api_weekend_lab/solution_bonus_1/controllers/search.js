var request = require("request"),
    util    = require("util");

var env    = require("../config/environment"),
    Search = require("../models/search");

function create(req, res, next) {
  var place = req.body.search.place,
      term  = req.body.search.term;

  var foursquareApiUri = generateApiUri(
    env.FOURSQUARE_CLIENT_ID,
    env.FOURSQUARE_CLIENT_SECRET,
    { near: place, query: term }
  );

  request.get(foursquareApiUri, function(err, response, body) {
    var venues = scrubVenueData(JSON.parse(body).response.venues);

    Search.create(
      { place: place, term: term, venues: venues },
      function(err, search) {
        if (err) {
          console.log(err);
          next(err);
        } else {
          res.redirect(`/searches/${search._id}`);
        }
      }
    );
  });
}

function newForm(req, res, next) {
  Search.find({}, function(err, searches) {
    res.render("searches/new", {searches: searches});
  });
}

function show(req, res, next) {
  Search.findById(req.params.id, function(err, search) {
    res.render("searches/show", {search: search});
  });
}

/*
 * "Privates" - functions that don't handle requests...
 */

function generateApiUri(id, secret, params) {
  var baseUri = "https://api.foursquare.com/v2/venues/search";
  var reqUri  = `${baseUri}?client_id=${id}&client_secret=${secret}&v=20151001`;
  for (var key in params) {
    if (params.hasOwnProperty(key))
      reqUri += `&${key}=${encodeURIComponent(params[key])}`;
  }

  return reqUri;
}

function scrubVenueData(venues) {
  return venues.map(function(venue) {
    return {
      name:             venue.name,
      url:              venue.url,
      formattedAddress: venue.location.formattedAddress.join("<br>")
    };
  });
}

module.exports = {
  new:    newForm,
  create: create,
  show:   show
};
