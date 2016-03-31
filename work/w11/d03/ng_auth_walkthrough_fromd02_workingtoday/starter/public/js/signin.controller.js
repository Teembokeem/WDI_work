(function() {
  'use strict'

  angular
    .module('app')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['$log', '$http', 'authService', 'userService', '$state'];

  function SignInController($log, $http, authService, userService, $state) {
    //VARS
    var vm = this;
    vm.toggleValue = true;



    //BINDINGS
    vm.initiateUser = initiateUser;
    vm.logIn = logIn;

    //FUNCTIONS
    function initiateUser() {
      userService
      .create(UserTemplate(vm.newUser.email, vm.newUser.name, vm.newUser.password, vm.newUser.passwordConfirmation))
      .then(function(decodedToken) {
        $state.go('Welcome')
      }, function(err) {
        $log.debug(err)
        vm.conflict = true;
      })
    }

    function logIn() {
      authService
      .logIn(UserTemplate(vm.user.email, null, vm.user.password, null))
      .then(function(decodedToken) {
        $state.go('Welcome')
      }, function(err) {
        $log.debug(err)
        if (err.status === 409) vm.conflict = true;
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
