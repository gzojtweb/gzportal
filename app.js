'use strict';
var express      = require('express');
var path         = require('path');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var mongoUrl = process.env.MONGOHQ_URL || 'mongodb://localhost/gzojt';
mongoose.connect(mongoUrl);

// include news model
require('./models/News');
require('./models/Siis');
require('./models/ContentUpdates');
require('./models/TrainingAndEvents');
require('./models/Conferences');

// include routes
var routes = require('./routes/index');
var news   = require('./routes/news');
var admin  = require('./routes/admin');
var content_updates = require('./routes/content-updates');
var training_and_events = require('./routes/training-and-events');
var addNews = require ('./routes/addNews');
var siis   = require('./routes/siis');
var addSiis = require('./routes/addSiis');
var conferences  = require('./routes/conferences');
<<<<<<< HEAD
app.use('/', routes);
=======
var addConferences = require('./routes/addConferences');

>>>>>>> added conferences for admin side
app.use('/api', routes);
app.use('/api/news', news);
app.use('/api/siis', siis);
app.use('/api/content-updates',content_updates);
app.use('/api/training-and-events',training_and_events);
app.use('/admin', admin);
app.use('/admin/news/add', addNews);
app.use('/addSiis', addSiis);
app.use('/api/conferences', conferences);
app.use('/admin/addConferences', addConferences);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
