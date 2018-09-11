let express = require('express');
let router = express.Router();
const db = require('../db/db');

router.get('/', function (req, res, next) {
    let rs = req.query.res;

    if(req.user) {
        if (req.user.admin === 1) {
            const sql = `SELECT * FROM cars;`;

            const sql1 =`
                SELECT * FROM reservations 
                  JOIN cars ON reservations.idCar=cars.idCar 
                    WHERE DATE(reservations.dateOut)>=CURDATE();`;

            const sql2 = `
                SELECT idUser, fullName, email, admin, active FROM users;`;

            db.query(sql, (error, result) => {
                db.query(sql1, (error1, result1) => {
                    db.query(sql2, (error2, result2) => {
                        res.render('admin', {
                            car: null,
                            carsArr: result,
                            res: rs,
                            resv: null,
                            resArr: result1,
                            userArr: result2,
                            userData: null,
                            user: req.user
                        });
                    });
                });
            });

        } else
            res.redirect('/library/');
    } else
        res.redirect('/');
});

router.get('/car/:car_id', function (req, res, next) {
    if(req.user) {
        if (req.user.admin === 1) {
            const sql = `SELECT * FROM cars WHERE idCar="${req.params.car_id}";`;
            const sql1 = `SELECT name FROM brand;`;
            const sql2 = `SELECT DISTINCT type FROM cars;`;

            db.query(sql, (error, result) => {
                db.query(sql1, (error1, result1) => {
                    db.query(sql2, (error2, result2) => {
                          res.render('admin', {
                              car: result[0],
                              slctArr:result1,
                              slct1Arr: result2,
                              carsArr: null,
                              res: null,
                              resv: null,
                              resArr: null,
                              userArr: null,
                              userData: null,
                              user: req.user
                          });
                    });
                });
            });
        } else
            res.redirect('/library/');
    } else
        res.redirect('/');
});

router.get('/resv/:res_id', function (req, res, next) {
    if(req.user) {
        if (req.user.admin === 1) {
            const sql =`
                SELECT * FROM ((reservations JOIN cars ON reservations.idCar=cars.idCar) 
                  JOIN users ON reservations.idUser=users.idUser) 
                    WHERE idReservation="${req.params.res_id}" 
                        AND DATE(dateOut)>=CURDATE();`;

            db.query(sql, (error, result) => {
                res.render('admin', {
                    car: null,
                    carsArr: null,
                    resv: result[0],
                    res: null,
                    resArr: null,
                    userArr: null,
                    userData: null,
                    user: req.user
                });
            });
        } else
            res.redirect('/library/');
    } else
        res.redirect('/');
});

router.get('/user/:user_id', function (req, res, next) {
    if(req.user) {
        if (req.user.admin === 1) {
            const sql =`
                SELECT idUser, fullName, email, admin, active FROM users 
                    WHERE idUser="${req.params.user_id}";`;

            db.query(sql, (error, result) => {
                res.render('admin', {
                    car: null,
                    carsArr: null,
                    res: null,
                    resv: null,
                    resArr: null,
                    userArr: null,
                    userData: result[0],
                    user: req.user
                });
            });
        } else
            res.redirect('/library/');
    } else
        res.redirect('/');
});


router.post('/editCar/:car_id', function (req,res,next) {
    let car = {
        "year": req.body.year,
        "type": req.body.type,
        "model": req.body.model,
        "price": req.body.price,
        "brand": req.body.brand,
        "active": req.body.active,
        "idCar": req.params.car_id
    };

    const query =`
        UPDATE cars
            SET model="${car.model}", 
                year="${car.year}",
                type="${car.type}",      
                brand="${car.brand}",
                price="${car.price}",
                active="${car.active}"            
            WHERE idCar="${car.idCar}";`;

    db.query(query, function (err) {
        if (err)
            res.send({
                "code": 400,
                "failed": "could not change data"
            });
        else
            res.redirect(`/admin?res=editCar`);
    });
});


router.post('/editRes/:res_id', function (req,res,next) {
    let resv = {
        "active": req.body.active,
        "dateIn": req.body.dateIn,
        "dateOut": req.body.dateOut,
        "fullPrice": req.body.numbers,
        "idReservation": req.params.res_id,
    };

    const sql =`
        UPDATE reservations
            SET fullPrice="${resv.fullPrice}", 
                active="${resv.active}",
                dateIn="${resv.dateIn}", 
                dateOut="${resv.dateOut}" 
            WHERE idReservation="${resv.idReservation}";`;

    db.query(sql, function (err) {
        if (err)
            res.send({
                "code": 400,
                "failed": "could not change data"
            });
        else
            res.redirect(`/admin?res=editRes`);
    });
});

router.post('/rem/:res_id/', function (req, res, next) {
    const sql =`
        DELETE FROM reservations 
            WHERE idReservation="${req.params.res_id}";`;

    db.query(sql, function (err) {
        if (err)
            res.send({
                "code": 400,
                "failed": "could not delete data"
            });
        else
            res.redirect(`/admin?res=rem`);
    });
});


router.post('/editUse/:user_id', function (req,res,next) {
    let userData = {
        "admin": req.body.admin,
        "email": req.body.email,
        "active": req.body.active,
        "fullName": req.body.name,
        "idUser": req.params.user_id,
    };

    const sql = `
        UPDATE users
            SET fullName="${userData.fullName}", 
                email="${userData.email}", 
                admin="${userData.admin}", 
                active="${userData.active}"
            WHERE idUser="${userData.idUser}";`;

    db.query(sql, function (err) {
        if (err)
            res.send({
                "code": 400,
                "failed": "could not change data"
            });
        else
            res.redirect(`/admin?res=editUse`);
    });
});

module.exports = router;