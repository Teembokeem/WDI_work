var Todo = require('../models/todo');

module.exports = {
  create: create,
  index: index
}

function index(req, res, next) {
  console.log("Bootsy's on a roll, bebe!!");

  Todo.find({}, function(err, todos) {
    if (err) next(err);

    res.json(todos);
  })
}

function create(req, res, next) {
  console.log("Brand new Bootsy todo, Bobble", req.body);

  var newTodo = new Todo(req.body);
  newTodo.save(function(err, savedTodo) {
    if (err) next(err);
    console.log(savedTodo);
    res.json(savedTodo);
  })
}
