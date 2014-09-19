'use strict';

var mongoose = require('mongoose');

var content_updatesSchema = new mongoose.Schema({
	title   : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	author   : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	content : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	date : {
		type  : Date,
		default: Date.now
	}

});

module.exports = mongoose.model('ContentUpdates', content_updatesSchema);
