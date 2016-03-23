(function() {
  "use strict";

  angular
      .module("app")
      .controller("NavController", NavController);

  NavController.$inject = ["$log", "messageDataService"];

  function NavController($log, messageDataService) {
    var vm = this;

    // vm.message = "ng rules.";
    vm.data = messageDataService;


    $log.debug(vm.message);
  }

})();
