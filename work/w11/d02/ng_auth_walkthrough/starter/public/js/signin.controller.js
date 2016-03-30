(function() {
  'use strict'

  angular
    .module('app')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['$log', '$http', '$window'];

  function SignInController($log, $http, $window) {
    //VARS
    var vm = this;
    vm.toggleValue = true;

    //BINDINGS
    vm.createUser = createUser;
    vm.generateToken = generateToken;

    //FUNCTIONS
    function createUser() {
        $log.debug("creating user...")
      $log.debug("here he is!", newUser)
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/users',
        headers: {
          "Content-Type": "application/json"
        },
        data: newUserTemplate(vm.newUser.email, vm.newUser.name, vm.newUser.password, vm.newUser.passwordConfirmation)
      })
      .then(function(res) {
        $log.debug(res.data)
        generateToken(newUser);
      }, function(err) {
        $log.debug(err)
      })
    }

    //HELPERS
    function generateToken(user) {
      $http({
        method: 'POST',
        url: 'http://localhost:3000/api/token',
        headers: {
          "Content-Type": "application/json"
        },
        data: newUserTemplate(vm.user.email, null, vm.user.password, null)
      })
      .then(function(res) {
        $log.debug(res.data)
        $window.localStorage.setItem("token", res.data.token)
      }, function(err) {
        $log.debug(err)
      })
    }

    function newUserTemplate(a, b, c, d) {
      return { email: a, name: b, password: c, confirmation: d}
    }

    // SETUP
    $log.debug("SignInController Locked In.")
  }
})();
