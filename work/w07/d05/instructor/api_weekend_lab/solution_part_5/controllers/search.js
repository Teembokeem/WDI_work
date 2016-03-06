var request = require("request"),
    util    = require("util");

var env    = require("../config/environment"),
    Search = require("../models/search"); // load the search model!

function create(req, res, next) {
  console.log(req.body);

  var uri = generateApiUri(
    env.FOURSQUARE_CLIENT_ID,
    env.FOURSQUARE_CLIENT_SECRET,
    {
      near:  req.body.search.place,
      query: req.body.search.term
    }
  );

  console.log("Attempting to connect to: ", uri);
  request.get(uri, function(err, response, body) {
    var body = JSON.parse(body),
        venues;

    // take the value body.response.venues list and map it to a
    // subset of its attributes: name and url. the formatted address
    // is from the location section of the API's venue, and is an
    // array.
    venues = body.response.venues.map(function(venue) {
      return {
        name: venue.name,
        url:  venue.url,
        formattedAddress: venue.location.formattedAddress.join("\n")
      };
    });

    Search.create(
      {
        place:  req.body.search.place, // save the search place and term
        term:   req.body.search.term,  // from the form
        venues: venues                 // apply the scrubbed venues
      },
      function(err, search) {
        if (err) {
          console.log(err);
          next(err); // pass the error along to the user!
        } else {
          console.log(
            "Search saved:",
            util.inspect(search, false, null) // print the WHOLE search object
          );
          res.send(body.response.venues);
        }
      }
    );

  });
}

// must use the title *newForm* instead of new, b/c new is a JS keyword.
function newForm(req, res, next) {
  Search.find({}, function(err, searches) {
    // passing in the outcome of finding all searches as a variable
    res.render('index', {searches: searches});
  });
}

/*
 * "Privates" - functions that don't handle requests...
 */
function generateApiUri(id, secret, params) {
  var baseUri = "https://api.foursquare.com/v2/venues/search";
  var reqUri  = `${baseUri}?client_id=${id}&client_secret=${secret}&v=20151001`;
  // you can iterate over an object using the below method:
  // (we are using it to build key-values as queries from the input object)
  for (var key in params) {
    if (params.hasOwnProperty(key))
      reqUri += `&${key}=${encodeURIComponent(params[key])}`;
  }

  return reqUri;
}

module.exports = {
  new:    newForm,
  create: create
};
