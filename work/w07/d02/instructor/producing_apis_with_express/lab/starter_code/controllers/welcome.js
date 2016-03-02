module.exports = {
  index: index
};

function index(req, res, next) {
  res.json({msg: "Welcome to the Juggalo Facepaint and Faygo API Woot Woot!"});
};
