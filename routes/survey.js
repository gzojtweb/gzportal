'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var Survey   = mongoose.model('Survey');

/* GET users listing. */
router.get('/', function(req, res) {
	Survey.find({}, function(err, survey) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		res.send(JSON.stringify(survey));
	});
});

/* Creates survey*/
router.post('/', function(req, res) {
	// init new survey object
	var survey= new Survey(req.body);

	// save to db
	survey.save(function(error, survey) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

		res.end(JSON.stringify(survey));
	});

});

module.exports = router;