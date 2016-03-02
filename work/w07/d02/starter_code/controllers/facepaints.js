var facepaints = require('../data/facepaint_data.js');

module.exports = {
  index:  index,
  show:   show,
  create: create,
  update: update,
  destroy: destroy
};

function index(req, res, next) {
  if (facepaints) {
    res.json(facepaints);
  } else {
    res.json({err: "Where dem boys at?"});
  }
};

function show(req, res, next) {
  var id = parseInt(req.params.id);

  var chosenFacepaints = facepaints.find(function(facepaints) {
    return facepaints.id === id;
  });
  if (chosenFacepaints) {
    res.json(chosenFacepaints);
  } else {
    res.json({err: "This one don't exist doe."})
  }
};

function create(req, res, next) {
  var facepaint = req.body;
  var preCount = facepaints.length;
  facepaint.id = facepaints.id;
  facepaints.id++;
  facepaints.push(facepaint);
  if (facepaints.length > preCount) {
    res.json({msg: "Facepaint added!"});
  } else {
    res.json({err: "wtf man. that one sucks."})
  }
};

function update(req, res, next) {
  var updateFacepaint = req.body;
  var id = parseInt(req.params.id);
  var facepaint = facepaints.find(function(facepaint) {
    return facepaint.id === id;
  });

  if (updateFacepaint !== facepaint && !!updateFacepaint) {
    if (updateFacepaint.title) facepaint.title = updateFacepaint.title;
    if (updateFacepaint.safe4Skin) facepaint.safe4Skin = updateFacepaint.safe4Skin;
    if (updateFacepaint.price) facepaint.price = updateFacepaint.price;
    if (updateFacepaint.endorsedBy) facepaint.endorsedBy = updateFacepaint.endorsedBy;
    res.json({msg: "Facepaint updated!"});
  } else if (updateFacepaint === facepaint) {
    res.json({msg: "THAT FACEPAINT IS JUST FINE. BRO. STAHP."});
  } else {
    res.json({err: "WTF ARE YOU TALKING ABOUT"})
  }
};

function destroy(req, res, next) {
  var id = parseInt(req.params.id);
  var chosenFacepaint = facepaints.find(function(facepaint) {
    return facepaint.id === id;
  });
  var cFacepaintId = facepaints.indexOf(chosenFacepaint);
  if (chosenFacepaint) {
    facepaints.splice(cFacepaintId, 1)
    res.json({msg: "DEUCES YOU BEAUTIFUL FACEPAINT YOU"});
  } else {
    res.json({err: "WTF NO."});
  }
};
