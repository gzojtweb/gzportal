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

/* Creates conferences */
router.post('/', function(req, res) {

	// init new news object
	var conferences = new Conferences(req.body);

	// save to db
	conferences.save(function(error, conferences) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

		res.end(JSON.stringify(conferences));
	});
});


module.exports = router;
