(function() {
  'use strict';

  angular
    .module('todoApp')
    .config(MainRouter);

  MainRouter.$inject = ["$stateProvider", "$urlRouterProvider"];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('todoHome', {
        url: '/',
        templateUrl:  'templates/todo_home.html',
        controller:   'TodosController',
        controllerAs: 'vm'
      })
      .state('todoArchive', {
        url: '/archive',
        templateUrl: 'templates/todo_archive.html',
        controller: 'TodosController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
