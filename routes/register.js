let express = require('express');
let router = express.Router();
let auth = require('passport-local-authenticate');
const db = require('../db/db');

router.get('/', function (req, res, next) {
    if(req.user)
        return res.redirect('/library');

    res.render('register', {user: null, err:req.query.err});
});

router.post('/', function (req, res, next) {
    if (req.body.active === 0)
        return res.redirect('/register?err=yes');

    auth.hash(req.body.password, function(err, passHashed) {
        let user = {
            "admin": 0,
            "active": 1,
            "email": req.body.email,
            "pass": passHashed.salt,
            "fullName": req.body.name
        };/*
        console.log("pass: "+req.body.password)
        console.log("\npassHash: "+passHashed.hash); // Hashed password
        console.log("\npassSalt: "+passHashed.salt); // Salt
        console.log("user: "+user)
*/
        db.query(`INSERT INTO users SET ?`, user,
            function (err) {
                if (err)
                    return res.redirect('/register?err=no');

                req.login(user, function (err) {
                    if (err)
                        return next(err);

                    return res.redirect('/library');
                });
            }
        );

    });
});

module.exports = router;
