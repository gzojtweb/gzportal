'use strict';

var mongoose = require('mongoose');

var conferencesSchema = new mongoose.Schema({
	title   : String,
	date : String,
	location : String
});

module.exports = mongoose.model('Conferences', conferencesSchema);
