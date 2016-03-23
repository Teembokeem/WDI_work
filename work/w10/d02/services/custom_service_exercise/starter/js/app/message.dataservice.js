(function() {
  'use strict'

  angular
      .module("app")
      .factory("messageDataService", messageDataService);

  messageDataService.$inject = ["$log"];

  function messageDataService($log) {
    $log.info("Loading message data service!")

    var service = {
      message: "The app has been loaded. Rock and roll kitties."
    };

    return service;
  };

})();
