var weatherApi = require('./weatherApi');

// weatherApi.fetchweather("CA", "Los angeles");
// weatherApi.fetchweather("OH", "Cleveland");
// weatherApi.fetchweather("TX", "San Antonio");
// weatherApi.fetchweather("Canada", "Toronto");
// weatherApi.fetchweather("HA", "Honolulu");

// console.log(weatherApi.baseuri());

// console.log(weatherApi.builduri('Los Angeles, CA'));

// weatherApi.getObservation('Los Angeles, CA', function(err, currentObservation) {
//   console.log(currentObservation);
// });

// weatherApi.tempF('Toronto, Canada', function(err, tempF) {
//   console.log("tempf is " +  tempF);
// });

// weatherApi.tempC('Toronto, Canada', function(err, tempC) {
//   console.log(tempC);
// });

weatherApi.temp('Toronto, Canada', function(err, temp) {
  console.log(temp);
});

// weatherApi.temperature('Los Angeles, CA', function(err, temp_desc) {
//   console.log(temp_desc);
// });
