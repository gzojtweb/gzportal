'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var News     = mongoose.model('News');


/* GET users listing. */
router.get('/', function(req, res, next) {
	News.find({}, function(err, news) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		res.send(JSON.stringify(news));
	});
});
/* Creates news */
router.post('/', function(req, res, next) {
	// init new news object
	var news = new News(req.body);

	// save to db
	news.save(function(error, news) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

		res.end(JSON.stringify(news));
	});
});

module.exports = router;
