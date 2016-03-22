(function() {
  "use strict";

  angular
    .module("app")
    .factory("messageDataService", messageDataService);

  messageDataService.$inject = ["$log"];

  function messageDataService($log) {
    // DEFINE THE "SERVICE OBJECT"
    var data = {
      newMessage: "CONSOLE LOG HELLO WORLD?"
    };

    // SERVICE SETUP (RUN WHEN LOADED)
    $log.info("Loading message data service!");

    // RETURN THE SERVICE OBJECT
    return data;
  }

})();
