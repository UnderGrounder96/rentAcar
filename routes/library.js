let express = require('express');
let router = express.Router();
let auth = require('../auth/middleware');
const db = require('../db/db');

router.get('/', auth(), function (req, res) {
    let rs = req.query.res;

    if(req.user)
        db.query(`SELECT * FROM reservations
                    JOIN cars ON reservations.idCar=cars.idCar
                    WHERE reservations.idUser="${req.user.idUser}"
                        AND DATE(dateOut)>=CURDATE()
                        AND reservations.active>0
                        AND cars.active>0;`,

            function (error, result) {
                if (result === null || result === undefined || result.length === 0)
                    res.render('library', {res:rs, carsArr:null, user:req.user});
                else
                    res.render('library', {res:rs, carsArr:result, user:req.user});
            }
        );

    else
        res.redirect('/');
});

module.exports = router;
