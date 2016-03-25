(function() {
  'use strict';

  angular
    .module('rokoApp')
    .controller('LoginController', LoginController);

  LoginController.$inject = ["userDataService", "$log", "$state"];

  function LoginController(userDataService, $log, $state) {
    var vm = this;

    $log.info("Login Controller Loaded!")
    vm.user  = userDataService;
    vm.logIn = logIn;

    vm.userHold = {
      name: '',
      century: ''
    };

    function logIn(name) {
      $log.debug("Logging in: ", vm.userHold.name);

      // Log in the user by updating the service's .name
      vm.user.name        = vm.userHold.name;
      vm.user.century     = vm.userHold.century;
      vm.userHold.name    = '';
      vm.userHold.century = '';

      $state.go('pledges');
    }
  }
})();
