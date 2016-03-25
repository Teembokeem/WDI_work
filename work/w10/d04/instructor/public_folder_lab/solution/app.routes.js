(function() {
  "use strict";

  angular
    .module("rokoApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "/templates/home.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("aboutPage", {
        url: "/about",
        templateUrl:  "/templates/about.html"
      })
      .state("pledges", {
        url: "/pledges",
        templateUrl: "/templates/pledges.html",
        controller: "PledgesController",
        controllerAs: "vm"
      });

    $urlRouterProvider.otherwise("/");
  }

})();
