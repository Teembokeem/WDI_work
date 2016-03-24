(function() {
'use strict';

angular.module('app')
  .controller('MainController', MainController);

MainController.$inject = ['$resource', 'Todo', 'User'];

function MainController($resource, Todo, User) {
  var vm = this;


  //instantiated variables from $resource with json placeholder



  vm.todos = Todo.query();

  User.query(users => {
    vm.users = users;
    vm.selUserId = vm.users[0].id.toString();
    vm.selectUser();
  });

  vm.selectUser = function() {
    vm.todos = Todo.forUser({userId: vm.selUserId})
  }

  vm.selectTodo = function(todo) {
    vm.selectedTodo = Todo.get({id: todo.id});
  };

  vm.addTodo = function() {
    var todo = new Todo({
      userId: parseInt(vm.selUserId),
      title: vm.newTodo,
      completed: false
    });
    todo.$save(function(todo) {
      vm.todos.push(todo);
      vm.newTodo = '';
    })

    // Todo.save({
    //   userId: parseInt(vm.selUserId),
    //   title: vm.newTodo,
    //   completed: false
    // }, todo => {
    //   vm.todos.push(todo);
    //   vm.newTodo = '';
    // });
  };

  vm.me = {
    name: "Tim",
    email: "Tim@email.com"
  };

  vm.addUser = function() {
    var user = new User(vm.me);
    user.$save(function(user) {
      vm.users.push(user);
    })
  };

  vm.deleteTodo = function(todo) {
    vm.todos = vm.todos.filter(function(t) {
      return (t.id !== todo.id)
    })
    todo.$delete();
  }

  vm.test = "Hello";
}

})();
