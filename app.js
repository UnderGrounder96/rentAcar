const path = require('path'),
  logger = require('morgan'),
  express = require('express'),
  passport = require('passport'),
  session = require('express-session'),
  createError = require('http-errors'),
  cookieParser = require('cookie-parser'),

  data = require('./routes/data'),
  data1 = require('./routes/data1'),
  index = require('./routes/index'),
  admin = require('./routes/admin'),
  logout = require('./routes/logout'),
  vehicle = require('./routes/vehicle'),
  vehicle1 = require('./routes/vehicle1'),
  contact = require('./routes/contact'),
  catalog = require('./routes/catalog'),
  userRouter = require('./routes/user'),
  loginRouter = require('./routes/login'),
  libraryRouter = require('./routes/library'),
  termsOfUse = require('./routes/terms-of-use'),
  registerRouter = require('./routes/register'),
  passwordHelpRouter = require('./routes/password-help'),
  app = express();

require('./auth').init(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: 'secret',
  name: 'session_id',
  saveUninitialized: false,
  resave: true,
  cookie: { maxAge: Date.now() + (60 * 1000 * 30 * 2) }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', index)
app.use('/data', data)
app.use('/data1', data1)
app.use('/admin', admin)
app.use('/logout', logout)
app.use('/vehicle', vehicle)
app.use('/vehicle1', vehicle1)
app.use('/user', userRouter)
app.use('/contact', contact)
app.use('/catalog', catalog)
app.use('/login', loginRouter)
app.use('/library', libraryRouter)
app.use('/terms-of-use', termsOfUse)
app.use('/register', registerRouter)
app.use('/password-help', passwordHelpRouter)

// page not found
app.get('*', (req, res) => {
  res.render('page_not_found', { user: req.user })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
