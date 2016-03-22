(function() {
  'use strict';

  angular.module('myApp', []);

  angular
    .module('myApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$http'];


  function MainController($scope, $http) {
    $scope.title = 'Angular JS, the SuperHeroic MVW Framework';
    $scope.getRandom = function(num) {
      return Math.floor(Math.random() * num);
    };
    $scope.crazyColor = "lemonchiffon";
    $scope.names = ['Nicole', 'Layne', 'Winford', 'Mattie', 'Lawanda'];

    $scope.extraNames = ['Diane', 'Santos', 'Liz', 'Gwyn'];

    $scope.showNames = true;

    $scope.show = "Show Names";
    $scope.hide = "Hide Names";
    $scope.addName = function() {
      if ($scope.extraNames.length) $scope.names.push($scope.extraNames.shift());
      };
  };


})();
