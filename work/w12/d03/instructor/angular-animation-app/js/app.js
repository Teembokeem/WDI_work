(function() {
  'use strict';

  angular
    .module('app', ['ui.router', 'ngAnimate'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

      $stateProvider

        .state('clients', {
          url: '/clients',
          templateUrl: 'templates/clients.html',
          controller: 'ClientsController as vm'
        })

        .state('help', {
          url: '/help',
          templateUrl: 'templates/help.html'
        });

      $urlRouterProvider.otherwise('/clients');

    }]);

})();
