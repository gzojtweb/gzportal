'use strict';

var mongoose = require('mongoose');

var conferencesSchema = new mongoose.Schema({
	title   : {
		type: String,
		},
	date : {
		type: String,

	},
	location : {
		type: String,

	}

});

module.exports = mongoose.model('Conferences', conferencesSchema);
