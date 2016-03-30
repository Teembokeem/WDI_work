(function() {
  'use strict'

  angular
    .module('app')
    .factory('userService', userService);

  userService.$inject = ['$log', '$http', 'authService'];

  function userService($log, $http, auth) {
    $log.info("Packaged User Service operational.")

    var service = {
      create: create
    }

    return service;

    function create(data) {
      $log.debug("creating user...")
      var newUser = data
      $log.debug("here he is!", newUser)
      var promise = $http({
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
      })

      return promise;
    }

  }

})();
