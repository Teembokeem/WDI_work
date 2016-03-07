var express = require('express'),
    router  = new express.Router();


var searchesController = require('../controllers/searches');


/* GET home page. */
router.get('/', searchesController.index);

/* POST to search */
// router.post('/search', function(req, res, next) {
//   // Printing out the content of the request!
//   console.log(req.body);

//   res.send({venuesSearch: 'Not implemented!'}); // return some JSON
// });

router.post('/search', searchesController.venuesSearch);


module.exports = router;
