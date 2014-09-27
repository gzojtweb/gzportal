var utils = require( '../utils' );
var mongoose = require( 'mongoose' );
var Strategy = mongoose.model( 'Strategy' );

exports.strategy = function( req, res, next ){
  Strategy.
    find({}, function(err, strategy) {
	  res.setHeader('content-type', 'application/json');
	  res.statusCode = 200;
	  if(err) {
	    res.statusCode = 400;
		return res.send(JSON.stringify(err));
	  }
	  res.send(JSON.stringify(strategy));
    });
};