(function() {
  'use strict'

  angular
    .module('app')
    .controller('SignInController', SignInController);

  SignInController.$inject = ['$log', '$http', 'tokenService'];

  function SignInController($log, $http, token) {
    //VARS
    var vm = this;
    vm.toggleValue = true;


    //BINDINGS
    vm.createUser = createUser;
    vm.generateToken = generateToken;

    //FUNCTIONS
    function createUser() {
      $log.debug("creating user...")
      var newUser = newUserTemplate(vm.newUser.email, vm.newUser.name, vm.newUser.password, vm.newUser.passwordConfirmation)
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
        data: user || newUserTemplate(vm.user.email, null, vm.user.password, null)
      })
      .then(function(res) {
        $log.debug(res.data)
        token.store(res.data.token)
        $log.info("success", token.decode());
        // token.destroy();
        // $log.info("destroy", token.retrieve());

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
