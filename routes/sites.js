var express = require('express');
var router = express.Router();

var siteController = require('../controllers/sites');

router.get('/', siteController.getAll);
// router.get('/:id', siteController.findById);
router.get('/:slug', siteController.findBySlug);

module.exports = router;
