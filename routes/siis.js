'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var Siis     = mongoose.model('Siis');

/* GET users listing. */
router.get('/', function(req, res) {
	Siis.find({}, function(err, siis) {
		//res.setHeader('content-type', 'application/json');
		//res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		//res.send(JSON.stringify(siis));
		//var s = JSON.stringify(siis);
		res.render('list',{title:"List" ,data: siis});
	});
});

/* Creates news */
router.post('/', function(req, res) {
	// init new news object
	var siis = new Siis(req.body);

	// save to db
	siis.save(function(error, siis) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

	//	res.end(JSON.stringify(siis));
		res.render('success',{title: "Success!"});
	});

});


module.exports = router;
