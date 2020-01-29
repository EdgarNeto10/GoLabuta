
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');

/*Está a fazer a requisição do router criado */

var commentsRouter = require('./routes/comentsRoutes');
var treinosRouter = require('./routes/treinosRoutes');
var materiaisRouter = require('./routes/materiaisRoutes');
var atletasRouter = require('./routes/atletasRoutes');
var calendariosRouter = require('./routes/calendariosRoutes');
var feedbacksRouter = require('./routes/feedbacksRoutes');
var plan_treinosRouter = require('./routes/plan_treinosRoutes');
var staffRouter = require('./routes/staffRoutes');
var eq_epocas = require('./routes/equipa_epocaRoutes');



// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* A montar o router com um determinado caminho  */

app.use('/api/treinos/comentarios/', commentsRouter);
app.use('/api/atletas/treinos/', treinosRouter);
app.use('/api/materiais/', materiaisRouter);
app.use('/api/atletas/', atletasRouter);
app.use('/api/equipas/calendarios/', calendariosRouter);
app.use('/api/atletas/feedBacks/', feedbacksRouter);
app.use('/api/treinos/plan_treinos/', plan_treinosRouter);
app.use('/api/staff/', staffRouter);
app.use('/api/equipas/epocas/', eq_epocas);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
