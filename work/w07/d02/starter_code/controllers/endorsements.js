var facepaints = require('../data/facepaint_bonus_data');

module.exports = {
  index: index,
  show: show
}

function index(req, res, next) {
    var id = parseInt(req.params.id);

  var chosenFacepaints = facepaints.find(function(facepaints) {
    return facepaints.id === id;
  });
  if (chosenFacepaints) {
    res.json(chosenFacepaints.endorsements);
  } else {
    res.json({err: "This one don't exist doe."})
  }
};


function show(req, res, next) {
  var id = parseInt(req.params.id);

  var chosenFacepaints = facepaints.find(function(facepaints) {
    return facepaints.id === id;
  });
  if (chosenFacepaints) {
    var endoid = parseInt(req.params.endo_id);
    var chosenEndorsement = chosenFacepaints.endorsements.find(function(endorsement) {
      return endorsement.id === endoid;
    });
    if (chosenEndorsement) {
      res.json(chosenEndorsement);
    } else {
      res.json({err: "This one don't exist doe."})
    }
  }
};

