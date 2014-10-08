'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var Conferences  = mongoose.model('Conferences');

/* GET users listing. */
router.get('/', function(req, res) {
	Conferences.find({}, function(err, conferences) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		res.send(JSON.stringify(conferences));
	});
});

/* Creates news */
router.post('/', function(req, res) {
	Conferences.create(req.body, function(err, conferences) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}

		res.send(JSON.stringify(conferences));
	});
});

module.exports = router;
