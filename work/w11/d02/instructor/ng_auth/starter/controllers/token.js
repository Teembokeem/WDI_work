var token_auth = require('../config/token_auth');
var User       = require('../models/user');

module.exports = {
  create: create
};

function create(req, res, next) {
  if (!req.body.email || !req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  User
    .findOne({email: req.body.email}).exec()
    .then(function(user) {
      if (!user || !user.verifyPasswordSync(req.body.password)) {
        res.sendStatus(403);
      } else {
        var token = token_auth.generate({
            email: user.email,
            name:  user.name,
            use:   'public_api'
        });
        res.json({
          message: 'Successfully generated token',
          token:   token
        });
      }
    });
}
