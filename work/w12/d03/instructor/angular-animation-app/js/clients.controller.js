(function() {
  'use strict';

  angular.module('app')
    .controller('ClientsController', ClientsController);

  ClientsController.$inject = ['clientData'];

  function ClientsController(clientData) {
    var vm = this;

    vm.clients = clientData.clients;
    vm.cities = clientData.cities;
    vm.selectedCity = vm.cities[0];
  }

})();
