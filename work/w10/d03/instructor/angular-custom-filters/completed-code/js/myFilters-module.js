(function() {
  'use strict';

  angular.module('myFilters', [])

    .filter('firstName', function() {

      return function(fullName) {
        var firstName;

        firstName = fullName.slice(0, fullName.indexOf(' '));

        return firstName;
      };

    })

    .filter('ellipsis', function() {

      return function(text, trimSize) {
        var trimmed;
        var ellipsisCharCode = '\u2026';

        trimmed = text.slice(0, trimSize) + ellipsisCharCode;

        return trimmed;
      };

    });

})();
