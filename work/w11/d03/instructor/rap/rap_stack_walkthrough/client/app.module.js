(function() {
  angular.module('fishinApp', ["ui.router"])

    .config(function($httpProvider) {

      // attach our auth interceptor to the http requests
      $httpProvider.interceptors.push('authInterceptor');
    })

    .run(['authService', '$rootScope', '$state', function(authService, $rootScope, $state){
      if (authService.isLoggedIn()) authService.setUser();
      $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
        if(toState.requireAuth && !authService.isLoggedIn()) {
          e.preventDefault();
          $state.go('homePage');
        }
      });
    }]);

})();
