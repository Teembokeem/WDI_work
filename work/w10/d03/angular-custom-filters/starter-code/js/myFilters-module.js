(function() {
  'use strict'

  angular.module('myFilters', [])

    .filter('firstName', function() {
      var output;

      return function(fullName) {
        return fullName.split(' ')[0];
      };
    })

    .filter('ellipsis', function() {

      return function(text, trimSize) {
        var trimmed;
        var ellipsisCharCode = '\u2026';

        trimmed = text.slice(0, trimSize) + ellipsisCharCode

        return trimmed;
      };
    })
})();
