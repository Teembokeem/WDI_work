(function() {
  'use strict'

  angular
    .module("app")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("Welcome", {
        url: "/",
        templateUrl: "/js/welcome.html"
      })
      .state("Signin", {
        url: "/signin",
        templateUrl: "/js/signin.html",
        controller: "SignInController",
        controllerAs: "vm"
      }).state("Profile", {
        url: "/profile",
        templateUrl: "/js/profile.html"
      })

    $urlRouterProvider.otherwise("/");
  }
})();
