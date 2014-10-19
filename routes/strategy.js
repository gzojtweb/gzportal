var mongoose = require( 'mongoose' );
var Strategy     = mongoose.model( 'Strategy' );

exports.api = function( req, res, next ){
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

exports.index = function ( req, res, next ){
  Strategy.
    find({}).
    sort( '-updated_at' ).
    exec( function ( err, strategy ){
      if( err ) return next( err );

      res.render( 'index-strategy', {
          title    : 'Strategy of the Week',
		  page_id  : 2,
          strategy : strategy
      });
    });
};

exports.add = function ( req, res, next ){
  if(req.body.title != '') {
    new Strategy({
        title      : req.body.title,
        content    : req.body.content
    }).save( function ( err, strategy, count ){
      if( err ) return next( err );

      res.redirect( '/admin/strategy' );
    });
  } else {
    res.redirect('/admin/strategy');
  }
};

exports.destroy = function ( req, res, next ){
  Strategy.findById( req.params.id, function ( err, strategy ){
    strategy.remove( function ( err, strategy ){
      if( err ) return next( err );

      res.redirect( '/admin/strategy' );
    });
  });
};

exports.edit = function( req, res, next ){
  Strategy.find({}).sort( '-updated_at' ).
    exec( function ( err, strategy ){
      if( err ) return next( err );

      res.render( 'edit-strategy', {
        title    : 'Strategy of the Week',
		page_id  : 2,
        strategy : strategy,
        current  : req.params.id
      });
    });
};

exports.update = function( req, res, next ){
  if(req.body.title != '') {
    Strategy.findById( req.params.id, function ( err, strategy ){
      strategy.title      = req.body.title;
      strategy.content    = req.body.content;
      strategy.updated_at = Date.now();
      strategy.save( function ( err, strategy, count ){
        if( err ) return next( err );

        res.redirect( '/admin/strategy' );
      });
    });
  } else {
    res.redirect('/admin/strategy');
  }
};