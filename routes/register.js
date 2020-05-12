let express = require('express');
let router = express.Router();
const db = require('../db/db');
const crypto = require('crypto');

router.get('/', function (req, res, next) {
    if(req.user)
        return res.redirect('/library');

    res.render('register', {user: null, err:req.query.err});
});

router.post('/', function (req, res, next) {
    if (req.body.active === 0)
        return res.redirect('/register?err=yes');

    crypto.scrypt(req.body.password, 'salt', 32, function (err, passEncrypted) {
        let user = {
            "admin": 0,
            "active": 1,
            "email": req.body.email,
            "pass": passEncrypted.toString('hex'),
            "fullName": req.body.name
        };

        db.query(`INSERT INTO users SET ?`, user, function (err) {
            if (err)
                return res.redirect('/register?err=no');
        });

        db.query(`SELECT * FROM users WHERE email="${user.email}";`,
            function (err, result) {
                if (err)
                    return res.redirect('/register?err=no');

                req.login(result[0], function (err) {
                    if (err)
                        return next(err);

                    return res.redirect('/library');
                })
            }
        )
    });
});

module.exports = router;
