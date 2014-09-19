'use strict';

var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	title   : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	content : {
		type  : String,
		match : /^[\w-.\s]+$/
	}
});

module.exports = mongoose.model('News', newsSchema);
