const crypto = require('crypto'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  authenticationMiddleware = require('./middleware'),
  db = require('../db/db');

passport.serializeUser((user, done) => {
  done(null, user.idUser);
});

passport.deserializeUser((idUser, done) => {
  db.query(`SELECT idUser, fullName, email, admin, active FROM users
    WHERE idUser="${idUser}";`, (err, result) => {
    done(err, result[0]);
  });
});

function initPassport() {
  passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true}, (req, username, password, next) => {
    db.query(`SELECT * FROM users
      WHERE email="${username}"
      AND active>0;`, (err, result) => {
      if (!result.length) return next(null, false);
      crypto.scrypt(password, 'salt', 32, (err, passEncrypted) => {
        if (result[0].pass !== passEncrypted.toString('hex'))
          return next(null, false);
        return next(null, result[0]);
      });
    });
  }));
  passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;
