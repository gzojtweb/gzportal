'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var Strategy = mongoose.model('Strategy');

/* GET users listing. */
router.get('/', function(req, res) {
	Strategy.find({}, function(err, strategy) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		res.send(JSON.stringify(strategy));
	});
});

/* Creates strategy */
router.post('/', function(req, res) {
	// init new news object
	var strategy = new Strategy(req.body);

	// save to db
	strategy.save(function(error, strategy) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

		res.end(JSON.stringify(strategy));
	});

});

module.exports = router;