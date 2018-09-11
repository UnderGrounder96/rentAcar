let express = require('express');
let router = express.Router();
const db = require('../db/db');

router.get('/', function (req, res, next) {

    if(req.user){
        const sql = `SELECT DISTINCT type FROM cars WHERE active>0;`;
        const sql1 = `SELECT * FROM cars WHERE active>0 ORDER BY model, type;`;

        db.query(sql, (error, result) => {
            if (result === null || result === undefined || result.length === 0)
                res.send("No brands found!");

            else {
                db.query(sql1, (error1, result1) => {
                    if (result1 === null || result1 === undefined || result1.length === 0)
                        res.send("No brands found!");
                    else
                        res.render('catalog', {carArr:result1, carsArr:result, user:req.user});
                });
            }
        });

    } else
        res.redirect('/');
});

module.exports = router;