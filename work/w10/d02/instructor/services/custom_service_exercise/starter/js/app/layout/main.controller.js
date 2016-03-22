(function() {
  "use strict";

  angular
      .module("app")
      .controller("MainController", MainController);

  MainController.$inject = ["$log"];

  function MainController($log) {
    var vm = this;

    vm.message = "The app has been loaded. Rock and roll kitties.";

    $log.debug(vm.message);
  }

})();
