(function() {
  'use strict';

  angular.module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['Todo', 'User'];

  function MainController(Todo, User) {
    var vm = this;
    vm.selUserId = '1';

    // Retrieve all users
    vm.users = User.query(function() {
      var user = new User({name: 'Jim Clark', email: 'jim@email.com'});
      user.$save(function(u) {
        vm.users.push(u);
      });
    });

    // Edit the clicked todo
    vm.selectTodo = function(todo) {
      vm.todoEditing = todo;
    };

    vm.doneEditing = function(todo) {
      todo.$update(function(){
        vm.todoEditing = null;
      });
    };

    // Add todo click handler
    vm.addTodo = function() {
      var todo = new Todo({userId: parseInt(vm.selUserId), title: vm.newTodo, completed: false});
      todo.$save(function() {
        vm.todos.push(todo);
        vm.newTodo = '';
      });
    };

    // Delete todo click handler
    vm.deleteTodo = function(todo) {
      vm.todos = vm.todos.filter(function(t) { return (t.id != todo.id); });
      todo.$delete();
    };

    vm.userChanged = function() {
      vm.todos = Todo.forUser({userId: vm.selUserId});
    };
    // must invoke to initialize because userChange will only trigger when the user changes the select
    vm.userChanged();

  }

})();
