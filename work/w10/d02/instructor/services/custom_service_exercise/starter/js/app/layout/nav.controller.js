(function() {
  "use strict";

  angular
      .module("app")
      .controller("NavController", NavController);

  NavController.$inject = ["$log"];

  function NavController($log) {
    var vm = this;

    vm.message = "ng rules.";

    $log.debug(vm.message);
  }

})();
