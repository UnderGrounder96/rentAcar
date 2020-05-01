let path = require('path');
let logger = require('morgan');
let express = require('express');
let passport = require('passport');
let createError = require('http-errors');
let session = require('express-session');
let cookieParser = require('cookie-parser');


let data = require('./routes/data');
let data1 = require('./routes/data1');
let index = require('./routes/index');
let admin = require('./routes/admin');
let logout = require('./routes/logout');
let vehicle = require('./routes/vehicle');
let vehicle1 = require('./routes/vehicle1');
let contact = require('./routes/contact');
let catalog = require('./routes/catalog');
let userRouter = require('./routes/user');
let loginRouter = require('./routes/login');
let libraryRouter = require('./routes/library');
let termsOfUse = require('./routes/terms-of-use');
let registerRouter = require('./routes/register');
let passwordHelpRouter = require('./routes/password-help');


let app = express();
require('./auth').init(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  name: 'session_id',
  saveUninitialized: false,
  resave: true,
  cookie: { maxAge: new Date(Date.now() + (60 * 1000 * 30 * 2)) }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/data', data);
app.use('/data1', data1);
app.use('/admin', admin);
app.use('/logout', logout);
app.use('/vehicle', vehicle);
app.use('/vehicle1', vehicle1);
app.use('/user', userRouter);
app.use('/contact', contact);
app.use('/catalog', catalog);
app.use('/login', loginRouter);
app.use('/library', libraryRouter);
app.use('/terms-of-use', termsOfUse);
app.use('/register', registerRouter);
app.use('/password-help', passwordHelpRouter);


// page not found
app.get('*', function (req, res) {
  res.render('page_not_found', { user: req.user })
});

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