(function() {
  "use strict";

  angular
    .module("pensieve")
    .controller("PensievesController", PensievesController);

  PensievesController.$inject = ["$log", "localStorageService"];

  function PensievesController($log, localStorageService) {
    var vm = this;

    vm.message       = "Lay down your troubles, friend.";
    vm.currentMemory = "";
    vm.data          = {
      memories: localStorageService.loadData("pensieve") || [] // use an array the first time
    };

    vm.submit = function() {
      $log.log("Submitting", vm.currentMemory);
      vm.data.memories.push(vm.currentMemory);
      localStorageService.saveData("pensieve", vm.data.memories);
      vm.currentMemory = "";
    }

    vm.clear = function() {
      vm.data.memories = [];
      localStorageService.saveData("pensieve", vm.data.memories);
    }

    vm.remove = function(removedMemory) {
      vm.data.memories = vm.data.memories.filter(memory => {
        return memory !== removedMemory;
      });
      localStorageService.saveData("pensieve", vm.data.memories);
    }

  }
})();








