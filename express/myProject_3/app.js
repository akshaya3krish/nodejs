var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter = require('./routes/mobiles');
const mongoOperations = require('./routes/mongoOperations');
const addData = require('./routes/addData');
const updateData = require('./routes/updateData');
const deleteData = require('./routes/deleteData');
const registrationForm = require('./routes/registrationForm');
const loginPage = require('./routes/loginPage');

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
app.get('/mobiles',mobileRouter);
app.get('/getData', mongoOperations);
app.get('/getSpecificData', mongoOperations);
app.get('/getDataByParam/:param', mongoOperations);
app.post('/addData', mongoOperations);
app.put('/updateData', mongoOperations);
app.get('/openForm', addData);
app.post('/addNewData', addData);
app.get('/getDataToBeUpdated', updateData);
app.post('/updateNewData', updateData);
app.get('/deleteData', deleteData);
app.get('/registrationForm', registrationForm);
app.post('/registrationForm', registrationForm);
app.get('/loginPage', loginPage);
app.post('/loginPage', loginPage);


app.use('/', function(req, res){
  res.cookie(name, 'cookies sample', {maxAge: 100000});
});


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
