// Require the model/s you're controlling
var User = require("../models/user");

// Export the function/s as JSON
module.exports = {
  index: index,
  show:  show
}

//||||||||||||||||||||||||||--
//  USERS INDEX PAGE - Response with JSON!
//||||||||||||||||||||||||||--
function index(req, res, next) {
  User.find({}, function(error, users) {
    if (error) res.json({message: "Could not find users because " + error});
    // LOOK - IT'S JUST JSON!!
    res.json(users);
  });
};

//||||||||||||||||||||||||||--
//  USER SHOW PAGE - Response with JSON!
//||||||||||||||||||||||||||--
function show(req, res, next){
  var id = req.params.id;

  User.findById(id, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    // LOOK - IT'S JUST JSON!!
    res.json(user);
  });
};
