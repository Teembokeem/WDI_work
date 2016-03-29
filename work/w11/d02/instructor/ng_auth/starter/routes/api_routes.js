var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersCtrl = require('../controllers/users'),
    tokenCtrl = require('../controllers/token');

// Require authentication.
var token = require('../config/token_auth');

// users resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);

router.post('/token',    tokenCtrl.create);

module.exports = router;
