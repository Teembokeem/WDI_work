(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "$http"];

  function SignInController($log, $http) {
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
      // $log.info(vm.signUp);

      $http
        .post('/api/users', vm.signUp, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(
          function(res) { $log.info("Succes:", res); },
          function(err) { $log.info("Error:", err); }
        );
    }

    $log.info("SignInController loaded!");
  }
})();
