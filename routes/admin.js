'use strict';
var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('admin', { title: 'Admin Page' });
});

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> Added admin add news module.
