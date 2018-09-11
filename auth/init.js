let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let authenticationMiddleware = require('./middleware');
const db = require('../db/db');

passport.serializeUser(function(user, done){
    done(null, user.idUser);
});

passport.deserializeUser(function(idUser, done){
    db.query(`SELECT idUser, fullName, email, admin, active FROM users WHERE idUser="${idUser}";`, function (err, result){
        done(err, result[0]);
    });
});

function initPassport() {
    passport.use('local', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, username, password, done) {
            const sql = `
                SELECT * FROM users 
                    WHERE email="${req.body.email}" 
                        AND pass="${req.body.password}" 
                        AND active>0;`;

            db.query(sql, function (err, result) {

                if (err)
                    return done(null, false, {message:err});

                if (!result.length)
                    return done(null, false);


                let encPassword = req.body.password;
                let dbPassword = result[0].pass;

                if (!(encPassword === dbPassword))
                    return done(null, false);


                //console.log(result[0]);
                console.log('n: '+result[0].fullName +' e: '+ result[0].email);
                return done(null, result[0]);
            });
        }
    ));

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;