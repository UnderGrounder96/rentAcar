let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let authenticationMiddleware = require('./middleware');
const db = require('../db/db');
const crypto = require('crypto');

passport.serializeUser(function(user, done){
    return done(null, user.idUser);
});

passport.deserializeUser(function(idUser, done){
    db.query(`SELECT idUser, fullName, email, admin, active FROM users
                WHERE idUser="${idUser}";`, function(err, result){
        return done(err, result[0]);
    });
});

function initPassport() {
    passport.use('local', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            db.query(`SELECT * FROM users
                        WHERE email="${req.body.email}"
                        AND active>0;`, function (err, result) {
                if (err)
                    return done(null, false, {message:err});

                if (!result.length)
                    return done(null, false);

                crypto.scrypt(req.body.password, 'salt', 32,
                    function (err, passDecrypted) {
                        if (passDecrypted.toString('hex') != result[0].pass)
                            return done(null, false);

                        return done(null, result[0]);
                    }
                );
            });
        }
    ));

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;
