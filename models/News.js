'use strict';

var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	Title   : {
		type  : String,
		match : /^[\w-.\s]+$/
	},
	Content :{
		type  : Date,
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

module.exports = mongoose.model('News', newsSchema);
