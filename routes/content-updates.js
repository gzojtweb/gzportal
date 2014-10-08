'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var ContentUpdates     = mongoose.model('ContentUpdates');

/* GET users listing. */
router.get('/', function(req, res) {
	ContentUpdates.find({}, function(err, content_updates) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		res.send(JSON.stringify(content_updates));
	});
});

/* Creates news */
router.post('/', function(req, res) {
	// init new news object
	var contentupdates = new ContentUpdates(req.body);

	// save to db
	contentupdates.save(function(error, content_updates) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

		res.end(JSON.stringify(content_updates));
	});

});

module.exports = router;
