var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Strategy = new Schema({
    strat_id   : String,
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

mongoose.model( 'Strategy', Strategy );
mongoose.connect( 'mongodb://localhost/gzojt' );
