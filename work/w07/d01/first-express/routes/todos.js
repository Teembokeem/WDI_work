var express = require('express');
var router = express.Router();

var todos = require('../data/todos');


//INDEX
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: todos
  })
});

//NEW CREATE
router.post('/', function(req, res) {
    todos.push({
    todo: req.body.newTodo,
    done: false
  });
  res.render('todos/index', {
    todos: todos
  });
});

//SHOW
router.get('/:id', function(req, res) {
  res.render('todos/show', {
    todo: todos[req.params.id],
    id: req.params.id
  });
});

//UPDATE
router.put('/:id', function(req, res) {
  todos[req.params.id] = {
    todo: req.body.updateTodo,
    done: false};
  res.render('todos/show', {
    todo: todos[req.params.id],
    id : req.params.id});
});

//DELETE
router.delete('/:id', function(req, res) {
  todos.splice(req.params.id, 1)
  res.render('todos/index', {todos:todos});
});


module.exports = router;
