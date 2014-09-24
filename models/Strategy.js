'use strict';

var mongoose = require('mongoose');

var strategySchema = new mongoose.Schema({
	title   : {
		type  : String
	},
	content : {
		type  : String
	},
	date : {
		type : String
	},
	createdAt : {
		type    : Date,
		default : Date.now()
	},
	updatedAt : {
		type    : Date,
		default : Date.now()
	}
});

module.exports = mongoose.model('Strategy', strategySchema);