(function() {
  "use strict";

  angular
    .module("rokoApp")
    .controller("LoginController", LoginController);

  LoginController.$inject = ["$state", "userDataService", "$log"];

  function LoginController($state, userDataService, $log) {
    var vm = this;

    vm.user   = userDataService;
    vm.logIn  = logIn;

    vm.userHold = {
      name: "",
      century: ""
    };

    function logIn(name) {
      $log.debug("Logging in:", vm.userHold.name);

      // Log in the user by updating the service's .name:
      vm.user.name        = vm.userHold.name;
      vm.user.century     = vm.userHold.century;
      vm.userHold.name    = "";

      $state.go("pledges");
    }
  }

})();
