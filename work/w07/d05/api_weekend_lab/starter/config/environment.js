var _ = require('lodash');

var localEnvVars = {
  TITLE:      '▦▨▧▩\'in it!',
  SAFE_TITLE: 'foursquare_api_app',
  CLIENT_ID: 'VY4ZPJK3KO2QTFJVPTQSLDSXCJJI0KYLEDSUJJHJKBFD1TUZ',
  CLIENT_SECRET: 'QSNYCQ03QPKQQOET4B24Y0KQEOIARMAASC1CC35URYDHANK3'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
