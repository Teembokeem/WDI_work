var burgers = require('../data/burger_data');

module.exports = {
  index: index,
  show:  show,
  create: create,
  update: update,
  destroy: destroy
};

function index(req, res, next) {
  if (burgers) {
    res.json(burgers);
  } else {
    res.json({err: "Where did all the burgers go?!?"})
  }
};

// burger show page
function show(req, res, next) {
  // grab the id from the params in the request object
  // You'll need to convert it to a number since it will come in as a string
  var id           = parseInt(req.params.id);
  // find the chosen burger using es6' Array.prototype.find() method
  var chosenBurger = burgers.find(function(burger) {
    return burger.id === id;
  })
  // If found, respond with the resource as JSON
  // otherwise send an error
  if (chosenBurger) {
    res.json(chosenBurger);
  } else {
    res.json({err: "That burger must have escaped this island!"})
  }
};

//burger post
function create(req, res, next) {
  //#1
  var burger = req.body;
  var preCount = burgers.length;
  //#2
  burger.id = burgers.id;
  burgers.id++;
  burgers.push(burger);
  if (burgers.length > preCount) {
    res.json({msg: "Burger added!"});
  } else {
    res.json({err: "Ya burned the bacon!!"});
  }
};


function update(req, res, next) {
  var updateBurger = req.body;
  var id = parseInt(req.params.id);
  var burger = burgers.find(function(burger) {
    return burger.id === id;
  });

  if (updateBurger !== burger && !!updateBurger) {
    if (updateBurger.title)       burger.title = updateBurger.title;
    if (updateBurger.ingredients) burger.ingredients = updateBurger.ingredients;
    if (updateBurger.price)       burger.price = updateBurger.price;
    res.json({msg: "Burger updated!"});
  } else if (updateBurger === burger) {
    res.json({msg: "That burger is perfect the way it is!"});
  } else {
    res.json({err: "That burger doesn't exist!"});
  }
};

function destroy(req, res, next) {
  var id = parseInt(req.params.id);
  var chosenBurger = burgers.find(function(burger) {
    return burger.id === id;
  });
  var cBurgerId = burgers.indexOf(chosenBurger);
  if (chosenBurger) {
    burgers.splice(cBurgerId, 1)
    res.json({msg: "Always sad to see a burger go..."})
  } else {
    res.json({err: "Why you gotta be so ruuuuuude?"})
  }
};
