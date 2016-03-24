var express = require('express');
var router = express.Router();

// Require fishes controller
var PledgesCtrl = require('../controllers/pledges')

//||||||||||||||||||||||||||--
// FISHES CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/pledges',        PledgesCtrl.index);
router.get('/pledges/:id',    PledgesCtrl.show);
router.post('/pledges',       PledgesCtrl.create);
router.put('/pledges/:id',    PledgesCtrl.update);
router.delete('/pledges/:id', PledgesCtrl.destroy);

module.exports = router;
