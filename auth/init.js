let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let authenticationMiddleware = require('./middleware');
let auth = require('passport-local-authenticate');
const db = require('../db/db');

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
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
                AND active>0;`,
                function (err, result) {
                    if (err)
                        return done(null, false, {message:err});

                    if (!result.length)
                        return done(null, false);

                    let dbPass = result[0].pass;

                    auth.hash(req.body.password, function(err, dbPass) {
                        auth.verify(req.body.password, dbPass, function(err, verified) {
                            if (!verified)
                                return done(null, false);

                            return done(null, result[0]);
                        });
                    });
                }
            );
        }
    ));

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;
