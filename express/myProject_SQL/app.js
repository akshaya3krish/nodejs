var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const { JsonWebTokenError } = require('jsonwebtoken');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const showData = require('./routes/showData');
const addData = require('./routes/addData');
const loginPage = require('./routes/loginPage');
const logoutPage = require('./routes/logoutPage');
const searchPage = require('./routes/searchPage');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/showData', showData);
app.get('/openAddDataForm', addData);
app.post('/addNewData', addData);
app.get('/loginPage', loginPage);
app.post('/loginPage', loginPage);
app.get('/logoutPage', logoutPage);
app.get('/showSearchPage', searchPage);
app.post('/showSearchPage', searchPage);


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
