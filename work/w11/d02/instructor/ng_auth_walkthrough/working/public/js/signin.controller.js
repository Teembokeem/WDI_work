(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log"];

  function SignInController($log) {
    var vm = this;

    // BINDINGS
    vm.signUp = {
      email:    "pj@ga.co",
      name:     "Philip Hughes",
      password: "12345",
      passwordConfirmation: "12345"
    };
    vm.submitSignUp = submitSignUp;

    // FUNCTIONS
    function submitSignUp() {
      $log.info(vm.signUp);
    }

    $log.info("SignInController loaded!");
  }
})();
