var express = require('express');
var router = express.Router();

var siteController = require('../controllers/sites');

router.get('/:id', siteController.findById);

module.exports = router;
