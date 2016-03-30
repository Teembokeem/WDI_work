(function() {
  'use strict';

  angular.module('app')
  
  .controller('MainController', ['$scope', function($scope) {
    $scope.wdi = 'WDI!';
  }]);

})();