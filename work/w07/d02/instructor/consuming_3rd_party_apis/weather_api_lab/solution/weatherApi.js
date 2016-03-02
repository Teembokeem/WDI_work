var request = require('request');

require('dotenv').load();

// BEFORE THE BONUS:
var baseUri = 'http://api.wunderground.com/api/' +
              process.env.WUNDERGROUND_API_KEY   +
              '/conditions/q/';

var buildUri = function(location) {
  var place = location
                .split(",")
                .map(function(str) {
                  return encodeURIComponent(str.trim());
                });
  return baseUri + place[1] + '/' + place[0] + '.json';
};

var parseTemp = function(body) {
  return JSON.parse(body).current_observation.temp_f;
};

var weatherApi = {};

weatherApi.printTemperatures = function() {
  request.get(buildUri('Los Angeles, CA'), function(err, res, body) {
    var temp = parseTemp(body);
    console.log('THE CURRENT TEMPERATURE IN LOS ANGELES IS: ' + temp + '° F');
  });
  request.get(buildUri('Cleveland, OH'), function(err, res, body) {
    var temp = parseTemp(body);
    console.log('THE CURRENT TEMPERATURE IN CLEVELAND IS: ' + temp + '° F');
  });
  request.get(buildUri('San Antonio, TX'), function(err, res, body) {
    var temp = parseTemp(body);
    console.log('THE CURRENT TEMPERATURE IN SAN ANTONIO IS: ' + temp + '° F');
  });
  request.get(buildUri('Toronto, Canada'), function(err, res, body) {
    var temp = parseTemp(body);
    console.log('THE CURRENT TEMPERATURE IN TORONTO IS: ' + temp + '° F');
  });
  request.get(buildUri('Honolulu, HA'), function(err, res, body) {
    var temp = parseTemp(body);
    console.log('THE CURRENT TEMPERATURE IN HONOLULU IS: ' + temp + '° F');
  });
};

// BONUS
// weatherApi = {
//   baseUri: 'http://api.wunderground.com/api/' + process.env.WUNDERGROUND_API_KEY + '/conditions/q/',

//   buildUri: function(location) {
//     var place = location
//                   .split(",")
//                   .map(function(str) {
//                     return encodeURIComponent(str.trim());
//                   });
//     return this.baseUri + place[1] + '/' + place[0] + '.json';
//   },

//   getObservation: function(location, cb) {
//     request.get(this.buildUri(location), function(err, res, body) {
//       var results = JSON.parse(body);
//       cb(err, results.current_observation); // THIS IS THE KICKER!
//                                             // CALL THE CALLBACK *GIVEN*
//                                             // TO THE METHOD AT THE END
//                                             // OF THE CALLBACK *INSIDE*
//                                             // OF THE METHOD!
//     });
//   },

//   tempF: function(location, cb) {
//     this.getObservation(location, function(err, observation) {
//       cb(err, observation.temp_f);
//     });
//   },

//   tempC: function(location, cb) {
//     this.getObservation(location, function(err, observation) {
//       cb(err, observation.temp_c);
//     });
//   },

//   temperature: function(location, cb) {
//     this.temp(location, function(err, temp) {
//       var formattedTemp =
//           'THE CURRENT TEMPERATURE IN ' +
//           location.split(",")[0].toUpperCase() +
//           ' IS: ' + temp + '° F';
//       cb(err, formattedTemp);
//     });
//   }
// };

// weatherApi.temp = weatherApi.tempF;

module.exports = weatherApi;
