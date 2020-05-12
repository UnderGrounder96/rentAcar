const crypto = require('crypto'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  authenticationMiddleware = require('./middleware'),
  db = require('../db/db');

passport.serializeUser((user, done) => {
  return done(null, user.idUser);
})

passport.deserializeUser((idUser, done) => {
  db.query(`SELECT idUser, fullName, email, admin, active FROM users
    WHERE idUser="${idUser}";`, (err, result) => {
    return done(err, result[0]);
  })
})

function initPassport () {
  passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, username, password, done) => {
    db.query(`SELECT * FROM users
              WHERE email="${req.body.email}"
              AND active>0;`, (err, result) => {
      if (!result.length) {
        return done(null, false)
      }

      crypto.scrypt(password, 'salt', 32, (err, passDecrypted) => {
        if (passDecrypted.toString('hex') !== result[0].pass) {
          return done(null, false)
        }

        return done(null, result[0])
      })
    })
  }))

  passport.authenticationMiddleware = authenticationMiddleware
}

module.exports = initPassport
