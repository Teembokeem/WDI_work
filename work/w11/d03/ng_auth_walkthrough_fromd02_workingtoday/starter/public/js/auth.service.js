(function() {
  'use strict'

  angular
    .module('app')
    .factory('authService', authService);

  authService.$inject = ['$log', '$http', 'tokenService'];

  function authService($log, $http, token) {
    $log.info("Authentication Services initiated..");

    var service = {
      logIn: logIn
    };

    return service;

    function logIn(user, newUser) {
      var promise = $http({
        method: 'POST',
        url: 'http://localhost:3000/api/token',
        headers: {
          "Content-Type": "application/json"
        },
        data: user || newUser
      })
      .then(function(res) {
        $log.debug(res.data)
        token.store(res.data.token)
        // $log.info("success", token.decode());
        // token.destroy();
        // $log.info("destroy", token.retrieve());
        return token.decode();
      })

      return promise;
    }


  }

})();
