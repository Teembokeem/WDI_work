(function() {
  "use strict";

  angular
      .module("app")
      .controller("NavController", NavController);

  NavController.$inject = ["$log", "messageDataService"];

  function NavController($log, messageDataService) {
    var vm = this;

    // BINDINGS
    vm.data = messageDataService;

    // CONTROLLER SETUP (RUN WHEN LOADED)
    $log.debug("NavController loaded!");
  }

})();
