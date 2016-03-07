var express = require('express'),
    router  = new express.Router();

var searchController = require("../controllers/search");

router.get( '/',             searchController.new);
router.post('/searches',     searchController.create);
router.get( '/searches/:id', searchController.show);

module.exports = router;
