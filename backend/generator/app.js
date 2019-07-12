var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let seed = require('./seed');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let passport = require('passport');
let session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
let db = require('./databases/database');
let User = require('./databases/users');

let LocalStrategy = require('passport-local').Strategy

const port = 4000 || process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// connect to the database
db();

// seed the data
if(mongoose.connection.collection('books').count == 0) {
  seed();
}

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, foundUser) {
    done(err, foundUser);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUserName(username, function(err, foundUser) {
      if(err) {
        return console.error(err);
      }
      if(!foundUser) {
        return done(null, false, { message: 'Invalid User' });
      }
      
      User.comparePassword(password, foundUser.password, function(err, rightPassword) {
        if(err) {
          return console.error(err);
        }
        if(rightPassword) {
          return done(null, foundUser);
        }

        return done(null, false, { message: 'Incorrect Password' });
      });
    });
  }
));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(require('cors')());

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

app.listen(port, function(req, res) {
  console.log(`Backend Server running of Port ${port}`)
});

module.exports = app;