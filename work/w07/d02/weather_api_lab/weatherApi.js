require('dotenv').config();
var request = require('request'),
    locus   = require('locus'),
    opener  = require('opener');



var weatherfuncs = {
  // fetchweather: fetchweather,
  baseuri: baseURI,
  builduri: buildURI,
  getObservation: getObservation,
  tempF: tempF,
  tempC: tempC,
  temp: temp,
  // temperature: temperature
};


function baseURI() {
  return 'http://api.wunderground.com/api/' + process.env.APIKEY + '/conditions/q/';
};

function buildURI(a) {
  var parseLocation = a.split(", ");
  return baseURI() + parseLocation[1] + "/" + parseLocation[0].replace(" ", "%20") + ".json";
};

function getObservation(a, b, c, d) {
  request(buildURI(a), function(err, res, body) {
    if (c === undefined) {
      var currentObservation = JSON.parse(body).current_observation;
      b(err, currentObservation);
    } else {
      var current = JSON.parse(body).current_observation[c];

      function currentObservation() {
        var parseLocation = a.split(", ");
        return "THE CURRENT TEMPERATURE IN " + parseLocation[0] + ", " + parseLocation[1] + " IS " + current + "\u00b0" + d;
      };
      b(err, currentObservation());
    }
  });
};

function tempF(a,b,c) {
  getObservation(a , b , "temp_f", c)
};

function tempC(a,b,c) {
  getObservation(a , b , "temp_c",c )
};

function temp(a,b,c) {
  if (!c) {
    tempC(a,b, "C");
  } else if (scale === "F") {
    tempF(a,b, scale)
  } else if (scale === "C") {
    tempC(a,b, scale)
  }
};



// function tempC(a,b) {
//   request(buildURI(a), function(err, res, body) {
//     var currentObservation = JSON.parse(body).current_observation.temp_c;
//     b(err, currentObservation);
//   });
// };


// test("CA", "Los angeles");
// test("OH", "Cleveland");
// test("TX", "San Antonio");
// test("Canada", "Toronto");
// test("HA", "Honolulu");

module.exports = weatherfuncs;

//testing
// fetchweather("CA", "Los Angeles");
