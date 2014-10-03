'use strict';

var mongoose = require('mongoose');

var surveySchema = new mongoose.Schema({
	title    : {
		type   : String,
		match  : /^[\w-.\s]+$/
	},
	data     : {
		type   : Object
	}
});

module.exports = mongoose.model('Survey', surveySchema);
