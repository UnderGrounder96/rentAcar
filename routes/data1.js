let express = require('express');
let router = express.Router();
const db = require('../db/db');

router.get('/:data', function (req, res, next) {
    let data = req.params.data;

    if(req.user){
        if (req.user.admin === 1) {

            db.query(`SELECT name, details FROM brand WHERE name LIKE "%${data}%" LIMIT 1`, (error, result) => {
                if (typeof result !== undefined && result.length > 0) {

                    db.query(`SELECT * FROM cars WHERE brand LIKE "%${data}%"`, (error1, result1) => {
                        db.query(`SELECT name FROM brand WHERE name<>"${data}"`, (error2, result2) => {

                            if (typeof result1 !== undefined && result1.length > 0)
                                res.render('data', {
                                    brand: result[0],
                                    carsArr: result1,
                                    type: result2,
                                    user: req.user
                                });

                            else
                                res.render('data', {
                                    brand: result[0],
                                    carsArr: undefined,
                                    type: result2,
                                    user: req.user
                                });

                        })
                    })

                } else {
                    sql_condition = `model LIKE "%${data}%" OR year LIKE "%${data}%" OR type LIKE "%${data}%"`;
                    sql_query = `SELECT * FROM cars WHERE ${sql_condition}`;
                    sql_query1 = `SELECT idCar, photo FROM cars ORDER BY RAND() LIMIT 10; `;

                    db.query(sql_query, (error1, result1) => {
                        db.query(sql_query1, (error2, result2) => {
                            if (typeof result1 !== undefined && result1.length > 0)
                                res.render('data', {
                                    brand: undefined,
                                    carsArr: result1,
                                    data: data,
                                    type:result2,
                                    user: req.user
                                });

                            else
                                res.render('page_not_found', {user: req.user});
                        });
                    });
                }
            });

        } else
            res.redirect('/library');
    } else
        res.redirect('/library');
});

module.exports = router;