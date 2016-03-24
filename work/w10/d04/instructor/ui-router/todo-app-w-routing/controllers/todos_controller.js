(function() {
	'use strict';

	angular
		.module("todoApp")
		.controller("TodosController", TodosController);

	TodosController.$inject = [];

	function TodosController() {
		var vm = this;

		vm.todoId = 5;
		vm.todoList = [
			{id: 1, task: "Build an awesome todo app.", complete: false},
			{id: 2, task: "Get super good at Angular.", complete: true},
			{id: 3, task: "Party on code.",             complete: false},
			{id: 4, task: "Take a nap.",                complete: false}
		];

		vm.addTodo        = addTodo;
		vm.deleteTodo     = deleteTodo;
		vm.completedTodos = completedTodos;
		vm.remainingTodos = remainingTodos;
		vm.s = s; // add an s to plural words!

		function addTodo() {
			vm.todoList.push({id: vm.todoId, task: vm.text, done: false});
			vm.todoId++;
			vm.text = null;
		}

		function deleteTodo(todo) {
			vm.todoList = vm.todoList.filter(function(td) { return td != todo; });
		}

		function completedTodos() {
			return vm.todoList.filter(function(todo){ return todo.complete; })
		}

		function remainingTodos() {
			return vm.todoList.filter(function(todo){ return !todo.complete; })
		}

		function s(vals, capital) {
			var letter = vals.length === 1 ? '' : 's';
			return capital ? letter.toUpperCase() : letter;
		}
	}

})();
