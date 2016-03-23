(function(){
  "use strict";

  angular
    .module("app")
    .controller("KittiesController", KittiesController);

  KittiesController.$inject = ["kittiesDataService"];

  function KittiesController(kittiesDataService){
    var vm = this;

    vm.data = kittiesDataService;
  };

})();
