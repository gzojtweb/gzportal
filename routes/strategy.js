var utils    = require( '../utils' );
var mongoose = require( 'mongoose' );
var Strategy     = mongoose.model( 'Strategy' );

exports.index = function ( req, res, next ){
  var strat_id = req.cookies ?
    req.cookies.strat_id : undefined;

  Strategy.
    find({ strat_id : strat_id }).
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
  new Strategy({
      strat_id   : req.cookies.strat_id,
      title      : req.body.title,
      content    : req.body.content,
      created_at : Date.now(),
      updated_at : Date.now()
  }).save( function ( err, strategy, count ){
    if( err ) return next( err );

    res.redirect( '/admin/strategy' );
  });
};

exports.destroy = function ( req, res, next ){
  Strategy.findById( req.params.id, function ( err, strategy ){
    var strat_id = req.cookies ?
      req.cookies.strat_id : undefined;

    if( strategy.strat_id !== req.cookies.strat_id ){
      return utils.forbidden( res );
    }

    strategy.remove( function ( err, strategy ){
      if( err ) return next( err );

      res.redirect( '/admin/strategy' );
    });
  });
};

exports.edit = function( req, res, next ){
  var strat_id = req.cookies ?
      req.cookies.strat_id : undefined;

  Strategy.
    find({ strat_id : strat_id }).
    sort( '-updated_at' ).
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
  Strategy.findById( req.params.id, function ( err, strategy ){
    var strat_id = req.cookies ?
      req.cookies.strat_id : undefined;

    if( strategy.strat_id !== strat_id ){
      return utils.forbidden( res );
    }

    strategy.title      = req.body.title;
    strategy.content    = req.body.content;
    strategy.updated_at = Date.now();
    strategy.save( function ( err, strategy, count ){
      if( err ) return next( err );

      res.redirect( '/admin/strategy' );
    });
  });
};

// ** express turns the cookie key to lowercase **
exports.current_user = function ( req, res, next ){
  var strat_id = req.cookies ?
      req.cookies.strat_id : undefined;

  if( !strat_id ){
    res.cookie( 'strat_id', utils.uid( 32 ));
  }

  next();
};
