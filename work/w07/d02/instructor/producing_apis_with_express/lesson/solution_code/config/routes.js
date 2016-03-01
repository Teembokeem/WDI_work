var express = require('express'),
    router  = new express.Router();

// Require controllers.
var welcomeController = require('../controllers/welcome');
var burgersController = require('../controllers/burgers');

// root path:
router.get('/', welcomeController.index);

// burgers resource paths:
router.get('/burgers',        burgersController.index);
router.get('/burgers/:id',    burgersController.show);
router.post('/burgers',       burgersController.create);
router.put('/burgers/:id',    burgersController.update);
router.delete('/burgers/:id', burgersController.destroy);

module.exports = router;
