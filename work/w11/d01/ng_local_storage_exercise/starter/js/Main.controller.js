(function() {
  'use strict'

  angular
    .module('pensieve')
    .controller("MainController", MainController);

  MainController.$inject = ['$log', 'localStorageService'];

  function MainController($log, localStorageService) {
    //setup
    var vm = this;
    vm.message = "Lay your troubles down"
    vm.currentMessage = "";
    vm.data = {
      memories: localStorageService.loadData("pensieve") || []
    };

    vm.submit = function() {
      $log.log("Submitting", vm.currentMemory);
      vm.data.memories.push(vm.currentMemory);
      localStorageService.saveData("pensieve", vm.currentMemory)
      vm.currentMemory = "";
    }

    vm.clear = function() {
      vm.data.memories = [];
      localStorageService.saveData("pensieve", vm.data.memories);
    }

    vm.remove = function(removedMemory) {
      vm.data.memories = vm.data.memories.filter(memory => {
        return memory !== removedMemory;
      })
      localStorageService.saveData("pensieve", vm.data.memories);
    }
    //functions


    //lockin
    // console.log($window.localStorage);
    vm.hello = "hello";
  }

})();
