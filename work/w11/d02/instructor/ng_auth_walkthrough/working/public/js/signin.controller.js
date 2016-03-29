(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log"];

  function SignInController($log) {
    var vm = this;

    // BINDINGS
    vm.toggleSignInForm = toggleSignInForm;
    vm.toggleValue      = true;

    // FUNCTIONS
    function toggleSignInForm() {
      $log.info("Every day I'm toggalin");
      vm.toggleValue = !vm.toggleValue;
    }

    $log.info("SignInController loaded!");
  }
})();
