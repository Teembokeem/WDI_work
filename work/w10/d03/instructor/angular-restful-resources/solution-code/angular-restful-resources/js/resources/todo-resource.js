(function() {
  'use strict';

  angular.module('app')
    .factory('Todo', Todo);

    Todo.$inject = ['$resource'];

    function Todo($resource) {

      return $resource('http://jsonplaceholder.typicode.com/todos/:id', {id: '@id'}, {
        'update': { method: 'PUT'},
        'forUser': {
          method: 'GET',
          url: 'http://jsonplaceholder.typicode.com/users/:userId/todos',
          isArray: true
        }
      });

    }

})();
