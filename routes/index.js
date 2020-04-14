var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("stats");
});

router.get('/updatestats', function(req, res, next) {
  res.render("updatestats");
});

module.exports = router;
