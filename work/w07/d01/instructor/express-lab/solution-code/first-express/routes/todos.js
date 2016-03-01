var express = require('express');
var router = express.Router();
var todos = require('../data/todos');

module.exports = function(app) {

  // get '/todos'
  router.get('/', function(req, res) {
    res.render('todos/index');
  });

  // get a single todo
  router.get('/:id', function(req, res) {
    var todo = todos[req.params.id];
    res.render('todos/show', {id: req.params.id, todo: todo})
  });

  // post '/todos'
  router.post('/', function(req, res) {
    todos.push({
      todo: req.body.newTodo,
      done: false
    });
    res.render('todos/index');
  });

  router.delete('/:id', function(req, res) {
    todos.splice(req.params.id, 1);
    res.render('todos/index');
  });

  router.put('/:id', function(req, res) {
    var todo = todos[req.params.id];
    if (req.body.todo !== todo.todo) {
      console.log('hi from the if statement');
      todo.todo = req.body.todo;
    }
    res.render('todos/index');
  })

  return router;
};
