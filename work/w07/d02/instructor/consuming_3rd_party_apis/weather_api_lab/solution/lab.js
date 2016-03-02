var weatherApi = require('./weatherApi');

weatherApi.printTemperatures();

// BONUS

// console.log(weatherApi.baseUri);

// console.log(weatherApi.buildUri('Los Angeles, CA'));

// weatherApi.getObservation('Los Angeles, CA', function(err, currentObservation) {
//   console.log(currentObservation);
// });

// weatherApi.tempF('New York, NY', function(err, tempF) {
//   console.log(tempF);
// });

// weatherApi.tempC('Toronto, Canada', function(err, tempC) {
//   console.log(tempC);
// });

// weatherApi.temp('Toronto, Canada', function(err, temp) {
//   console.log(temp);
// });

// weatherApi.temperature('Los Angeles, CA', function(err, temp_desc) {
//   console.log(temp_desc);
// });
