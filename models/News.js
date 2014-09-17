'use strict';

var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	title   : String,
	content : String
});

module.exports = mongoose.model('News', newsSchema);
