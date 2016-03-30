(function() {
  "use strict";

  angular
    .module("app")
    .controller("SignInController", SignInController);

  SignInController.$inject = ["$log", "$http", "tokenService"];

  function SignInController($log, $http, token) {
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
          function(res) {
            $log.info("Success:", res);
            generateToken();
          },
          function(err) { $log.info("Error:", err); }
        );
    }

    function generateToken() {
      $http
        .post('/api/token', vm.signUp, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(
          function(res) {
            token.store(res.data.token);
            $log.info("Success:", token.decode());
          },
          function(err) { $log.info("Error:", err); }
        );
    }

    $log.info("SignInController loaded!");
  }
})();
