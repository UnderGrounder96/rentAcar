let express = require('express');
let router = express.Router();
let auth = require('../auth/middleware');
const db = require('../db/db');

router.get('/', auth(), function (req, res, next) {
    if(req.user){
        const queryStatement = `SELECT idUser, fullName, email FROM users WHERE email="${req.user.email}"; `;

        db.query(queryStatement, (error, result) => {
            if (result === null || result === undefined)
                res.render("No such user found!");
            else
                res.render('user', {userData:result[0], user:req.user});
        });

    } else
        res.redirect('/');
});

module.exports = router;