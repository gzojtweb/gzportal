'use strict';

var mongoose = require('mongoose');

var siisSchema = new mongoose.Schema({
	eventTitle   : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	eventDate :{
		type  : Date,
		default : Date.now()
	},
	eventLoc : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	eventDetails : {
		type  : String,
		match : /^[\w-.\s]+$/
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

module.exports = mongoose.model('Siis', siisSchema);
