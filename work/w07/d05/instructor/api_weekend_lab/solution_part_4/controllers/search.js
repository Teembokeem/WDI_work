var request = require("request");

var env = require("../config/environment");

var baseUri = "https://api.foursquare.com/v2/venues/search",
    clientIdParam     = "?client_id="     + process.env.FOURSQUARE_CLIENT_ID,
    clientSecretParam = "&client_secret=" + process.env.FOURSQUARE_CLIENT_SECRET;

var authParams = clientIdParam + clientSecretParam + "&v=20151001"

function search(req, res, next) {
  console.log(req.body);

  var uri = baseUri + authParams;
  uri += "&near=" + encodeURIComponent(req.body.search.place);
  uri += "&query=" + encodeURIComponent(req.body.search.term);

  console.log("Attempting to connect to: ", uri);
  request.get(uri, function(err, response, body) {
    var body = JSON.parse(body);

    res.send(body.response.venues);
  });
}

module.exports = {
  search: search
};
