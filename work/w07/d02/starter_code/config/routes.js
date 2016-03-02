var express = require('express'),
    router  = new express.Router(),
    endorsementsRouter = express.Router({mergeParams: true});
// Require controllers.
var facepaintsController = require('../controllers/facepaints');
var endorsementsController = require('../controllers/endorsements')



// root path:
router.get('/facepaints', facepaintsController.index);
router.get('/facepaints/:id', facepaintsController.show);
router.post('/facepaints/', facepaintsController.create);
router.put('/facepaints/:id', facepaintsController.update);
router.delete('/facepaints/:id', facepaintsController.destroy);


router.use('/facepaints/:id/', endorsementsRouter);

//endorsements:
endorsementsRouter.get('/endorsements', endorsementsController.index);
endorsementsRouter.get('/endorsements/:endo_id', endorsementsController.show);


module.exports = router;
