(function() {
  "use strict";

  angular
      .module("app")
      .controller("MainController", MainController);

  MainController.$inject = ["$log", "messageDataService"];

  function MainController($log, messageDataService) {
    var vm = this;
    vm.data = messageDataService;




    vm.debug = debug;

    function debug() {
      $log.warn(vm.data.message)
    }

    $log.debug(vm.data.message);
  }

})();
