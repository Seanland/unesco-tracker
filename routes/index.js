var express = require('express');
var router = express.Router();

var sitesController = require('../controllers/sites')

router.get('/', sitesController.getHome);
router.get('/sites', sitesController.getAll);
router.get('/reference', sitesController.getReference);
router.get('/visits', sitesController.UniqueSiteVisits);

module.exports = router;
