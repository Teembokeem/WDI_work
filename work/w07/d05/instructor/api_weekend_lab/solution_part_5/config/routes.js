var express = require('express'),
    router  = new express.Router();

var searchController = require("../controllers/search");

router.get( '/',       searchController.new);
router.post('/search', searchController.create);

module.exports = router;
