'use strict';

var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Strategy = new Schema({
    title      : String,
    content    : String,
	created_at : {
		type    : Date,
		default : Date.now()
	},
    updated_at : {
		type    : Date,
		default : Date.now()
	},
});

module.exports = mongoose.model( 'Strategy', Strategy );
