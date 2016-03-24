(function() {
  'use strict';

  angular
    .module('todoApp')
    .factory('DataService', DataService);

  function DataService() {

    // remove `vm.` and change them to variables.
    var todoId   = 5;
  	var todoList = [
  		{id: 1, task: "Build an awesome todo app.", complete: false},
  		{id: 2, task: "Get super good at Angular.", complete: true},
  		{id: 3, task: "Party on code.",             complete: false},
  		{id: 4, task: "Take a nap.",                complete: false}
  	];

    // return the data!!
    return {
    	todoId:   todoId,
    	todoList: todoList
    };
  }

})();
