
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var con= require('./models/MysqlConn')
var app = express();

var indexRouter = require('./routes/index');
/*Está a fazer a requisição do router criado */
var  commentsRouter = require('./routes/comentsRoutes');  
var  treinosRouter = require('./routes/treinosRoutes'); 
var  materiaisRouter =  require('./routes/materiaisRoutes'); 
var atletasRouter = require('./routes/atletasRoutes'); 
var calendariosRouter = require('./routes/calendariosRoutes'); 
var feedbacksRouter = require('./routes/feedbacksRoutes'); 


/*
app.use(function(req, res , next){
req.con=con;
next();

})
*/



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* A montar o router com um determinado caminho  */

/* Ou seja quando quando qualquer pedido chegar no meu servidor com o caminho criado (ex:/treinos) 
  ele  é direcionado para router ligado ao mesmo (ex:treinosRouter)
*/
app.use('/api/comentarios/', commentsRouter);
app.use('/api/treinos/', treinosRouter);
app.use('/api/materiais/', materiaisRouter);
app.use('/api/atletas/', atletasRouter);
app.use('/api/calendarios/', calendariosRouter);
app.use('/api/feedBacks/', feedbacksRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
