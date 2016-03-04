var express = require('express');
var router = express.Router();

// Require controllers
var UsersController = require("../controllers/users");
var APIUsersController = require("../controllers/api_users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Applanation' });
});

/* GET users listing for views. */
router.get('/users',    UsersController.index);
router.get('/users/:id', UsersController.show);

/* GET users listing for API. */
router.get('/api/users',    APIUsersController.index)
router.get('/api/users/:id', APIUsersController.show)

module.exports = router;
