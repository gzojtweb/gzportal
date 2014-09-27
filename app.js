/**
 * Module dependencies.
 */

// mongoose setup
require( './models/Strategy' );

var express        = require( 'express' );
var http           = require( 'http' );
var path           = require( 'path' );
var engine         = require( 'ejs-locals' );
var favicon        = require( 'serve-favicon' );
var cookieParser   = require( 'cookie-parser' );
var bodyParser     = require( 'body-parser' );
var methodOverride = require( 'method-override' );
var logger         = require( 'morgan' );
var errorHandler   = require( 'errorhandler' );
var static         = require( 'serve-static' );

var app    = express();
var strat  = require( './routes/strategy' );
var api    = require( './routes/api' );

// all environments
app.set( 'port', process.env.PORT || 3002 );
app.engine( 'ejs', engine );
app.set( 'views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'ejs' );
app.use( favicon( __dirname + '/public/favicon.ico' ));
app.use( logger( 'dev' ));
app.use( methodOverride());
app.use( cookieParser());
app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));

// API Routes
app.get( '/api/strategy', api.strategy );

// Admin Routes
app.use( strat.current_user );
app.get(  '/admin/strategy', strat.index );
app.post( '/admin/strategy/add', strat.add );
app.get(  '/admin/strategy/destroy/:id', strat.destroy );
app.get(  '/admin/strategy/edit/:id', strat.edit );
app.post( '/admin/strategy/update/:id', strat.update );

app.use( static( path.join( __dirname, 'public' )));

// development only
if( 'development' == app.get( 'env' )){
  app.use( errorHandler());
}

http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});
