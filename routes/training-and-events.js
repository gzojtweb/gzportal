'use strict';
var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var trainingAndEvents= mongoose.model('TrainingAndEvents');

/* GET users listing. */
router.get('/', function(req, res) {
	trainingAndEvents.find({}, function(err, training_and_events) {
		res.setHeader('content-type', 'application/json');
		res.statusCode = 200;
		if(err) {
			res.statusCode = 400;
			return res.send(JSON.stringify(err));
		}
		res.send(JSON.stringify(training_and_events));
	});
});

/* Creates news */
router.post('/', function(req, res) {
	// init new news object
	var training_and_events = new trainingAndEvents(req.body);

	// save to db
	training_and_events.save(function(error, trainingandevents) {
		if (error) {
			return res.end(JSON.stringify(error));
		}

		res.end(JSON.stringify(trainingandevents));
	});

});

module.exports = router;
