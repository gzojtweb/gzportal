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
app.use(favicon(__dirname + '/public/favicon.ico'));
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

// include Strategy model
require('./models/Strategy');

require('./models/ContentUpdates');
require('./models/TrainingAndEvents');
require('./models/Conferences');

// include routes
var routes            = require('./routes/index');
var news              = require('./routes/news');
var admin             = require('./routes/admin');
var contentUpdates    = require('./routes/content-updates');
var trainingAndEvents = require('./routes/training-and-events');
var addNews           = require ('./routes/addNews');
var siis              = require('./routes/siis');
var strategy          = require('./routes/strategy');
var addSiis           = require('./routes/addSiis');
var conferences       = require('./routes/conferences');
var addConferences    = require('./routes/addConferences');

app.use('/', routes);
app.use('/api', routes);
app.use('/api/news', news);
app.use('/api/siis', siis);
app.use('/api/content-updates',contentUpdates);
app.use('/api/training-and-events',trainingAndEvents);
app.use('/admin', admin);
app.use('/admin/news/add', addNews);
app.use('/addSiis', addSiis);
app.use('/api/conferences', conferences);
app.use('/admin/addConferences', addConferences);

app.get('/api/strategy', strategy.api);
app.get('/admin/strategy', strategy.index);
app.post('/admin/strategy/add', strategy.add);
app.get('/admin/strategy/edit/:id', strategy.edit);
app.get('/admin/strategy/destroy/:id', strategy.destroy);
app.post('/admin/strategy/update/:id', strategy.update);

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
