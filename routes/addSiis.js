'use strict';
var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('addSiis', { title: 'Add SIIS' });
});

module.exports = router;
