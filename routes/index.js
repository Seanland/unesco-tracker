var express = require('express');
var router = express.Router();

var sitesController = require('../controllers/sites')

router.get('/', sitesController.getAll);

module.exports = router;
