(function() {
  'use strict';

  angular.module('app')
    .factory('User', User);

    User.$inject = ['$resource'];

    function User($resource) {
      var UserResource = $resource('http://jsonplaceholder.typicode.com/users/:id', {id: '@id'});
      Object.defineProperty(UserResource.prototype, 'firstName', {
        get: function() { return this.name.split(' ')[0]; }
      });
      return UserResource;
    }

})();
