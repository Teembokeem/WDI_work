(function() {
  'use strict'

  angular
    .module('app')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['$log', '$http', 'authService'];

  function SignInController($log, $http, auth) {
    //VARS
    var vm = this;
    vm.toggleValue = true;



    //BINDINGS
    vm.initiateUser = initiateUser;
    vm.logIn = function() {
      auth.logIn(null, UserTemplate(vm.user.email, null, vm.user.password, null))
    }

    //FUNCTIONS
    function initiateUser() {
      $log.debug("creating user...")
      var newUser = UserTemplate(vm.newUser.email, vm.newUser.name, vm.newUser.password, vm.newUser.passwordConfirmation)
      $log.debug("here he is!", newUser)
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        headers: {
          "Content-Type": "application/json"
        },
        data: newUser
      })
      .then(function(res) {
        $log.debug(res.data)
        auth.logIn(newUser);
      }, function(err) {
        $log.debug(err)
      })
    }

    //HELPERS

    function UserTemplate(a, b, c, d) {
      return { email: a, name: b, password: c, confirmation: d}
    }

    // SETUP
    $log.debug("SignInController Locked In.")
  }
})();
