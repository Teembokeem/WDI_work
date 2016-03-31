(function() {
  'use strict'

  angular
    .module('app')
    .controller('NavBarController', NavBarController);

  NavBarController.$inject = ['$log', 'authService'];

  function NavBarController($log, authService ) {
    var vm = this;
    vm.auth = authService;



    $log.debug("NavBarController controls are hot.");


  }


})();
