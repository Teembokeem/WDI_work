(function() {
  'use strict';

  angular.module('app')
    .factory('User', User);

  User.$inject = ['$resource'];

  function User($resource) {

    return $resource(
      'http://jsonplaceholder.typicode.com/users/:id',
      {id: '@id'},
      {'update': { method: 'PUT'}}
    );

  }

})();
