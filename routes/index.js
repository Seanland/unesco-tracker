var express = require('express');
var router = express.Router();

var sitesController = require('../controllers/sites')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'UNESCO Tracker - Sean Clarke' });
// });

router.get('/', sitesController.getAll);

module.exports = router;
