(function() {
  "use strict";

  angular
      .module("app")
      .controller("MainController", MainController);

  MainController.$inject = ["$log", "messageDataService"];

  function MainController($log, messageDataService) {
    var vm = this;

    // BINDINGS
    vm.data       = messageDataService;
    vm.logMessage = logMessage;

    // FUNCTIONS / HELPERS
    function logMessage() {
      $log.debug(vm.data.newMessage);
    }

    // CONTROLLER SETUP (RUN WHEN LOADED)
    $log.debug("MainController loaded!");
    $log.debug("vm (bound object):", vm);
  }

})();
