let express = require('express');
let router = express.Router();
const db = require('../db/db');

router.get('/', function (req, res, next) {
    let err = req.query.err;

    if(req.user)
        res.redirect('/library');

    else {
        if(err)
            res.render('register', {err:err});
        else
            res.render('register', {err:null});
    }
});


router.post('/', (req, res, next) => {
    if (req.body.active === 0)
        res.redirect('/register?err=yes');

    else {
        let user = {
            "admin": 0,
            "active": 1,
            "email": req.body.email,
            "pass": req.body.password,
            "fullName": req.body.name
        };

        db.query(`INSERT into users SET ?`, user, function (err) {
            if (err) {
                console.log("An error ocurred: ", err);
                res.redirect('/register?err=no');
            }
        });

        db.query(`SELECT * FROM users WHERE email="${user.email}";`, function (err, result) {
            if (err) {
                console.log("An error ocurred: ", err);
                res.redirect('/register?err=no');

            } else {
                req.login(result[0], function (err) {
                    if (err)
                        return next(err);

                    return res.redirect('/library');
                });
            }
        })
    }
});

module.exports = router;