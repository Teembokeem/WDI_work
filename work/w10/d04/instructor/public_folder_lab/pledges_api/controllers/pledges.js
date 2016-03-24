// Require the model/s you're controlling
var Pledge = require("../models/pledge");

//||||||||||||||||||||||||||--
// GET PLEDGES
//||||||||||||||||||||||||||--
var index = function(req, res) {
  Pledge.find({}, function(err, pledges) {
    if (err) {
      res.send(err);
    }

    // return the pledges
    res.json(pledges);
  });
}

//||||||||||||||||||||||||||--
//  GET PLEDGE
//||||||||||||||||||||||||||--
var show = function(req, res, next){
  var id = req.params.id;

  Pledge.findById(id, function(err, pledge){
    if (err) {
      res.send(err);
    }

    // return that pledge as JSON
    res.json(pledge);
  });
};

//||||||||||||||||||||||||||--
// CREATE PLEDGE
//||||||||||||||||||||||||||--
var create = function(req, res) {
  var pledge       = new Pledge();   // create a new instance of the Pledge model

  pledge.content  = req.body.content;
  pledge.category = req.body.category;

  pledge.save(function(err, savedPledge) {
    if (err) {
      res.send(err)
    }

    // log a message
    console.log("Your pledge will save you, human.")
    // return the pledge
    res.json(savedPledge);
  });
};

//||||||||||||||||||||||||||--
// UPDATE PLEDGE
//||||||||||||||||||||||||||--
var update = function(req, res) {
  var id = req.params.id;

  Pledge.findById(id, function(err, pledge) {

    if (err) {
      res.send(err);
    }

    // set the new pledge information if it exists in the request
    if (req.body.content)  pledge.content  = req.body.content;
    if (req.body.category) pledge.category = req.body.category;

    // save the pledge
    pledge.save(function(err, updatedPledge) {
      if (err) {
        res.send(err);
      }
      // log a message
      console.log("As long as you're advocating, human…");
      // return the pledge
      res.json(updatedPledge);
    });
  });
}

//||||||||||||||||||||||||||--
// DELETE PLEDGE
//||||||||||||||||||||||||||--
var destroy = function(req, res) {
  var id = req.params.id;

  Pledge.remove({"_id" : id}, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleting? Dangerous move human.' });
  });
}

// Export the function/s as JSON
module.exports = {
  index:   index,
  show:    show,
  create:  create,
  update:  update,
  destroy: destroy
}
