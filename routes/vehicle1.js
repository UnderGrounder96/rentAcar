const express = require('express'),
  router = express.Router(),
  db = require('../db/db');

router.get('/', (req, res, next) => {
  return res.redirect('/')
})

router.get('/:vehicle_id', (req, res, next) => {
  if (req.user) {
    if (req.user.admin === 1) {
      const sql = `
                SELECT * FROM cars
                    WHERE idCar="${req.params.vehicle_id}";`

      const sql1 = `
                SELECT idCar, photo FROM cars
                    WHERE idCar<>"${req.params.vehicle_id}"
                    ORDER BY RAND()
                        LIMIT 10;`

      const sql2 = `
                SELECT * FROM reservations
                    WHERE idCar="${req.params.vehicle_id}"
                        AND idUser="${req.user.idUser}"
                        AND DATE(reservations.dateOut)>=CURDATE();`

      db.query(sql, (error, result) => {
        if (result === null || result === undefined || result.length === 0) { res.render('page_not_found', { user: req.user }) } else {
          db.query(sql1, (error1, result1) => {
            db.query(sql2, (error2, result2) => {
              if (result2 === null || result2 === undefined || result2.length === 0) {
                res.render('vehicle', {
                  car: result[0],
                  carsArr: result1,
                  resv: null,
                  user: req.user
                })
              } else {
                res.render('vehicle', {
                  car: result[0],
                  carsArr: result1,
                  resv: result2[0],
                  user: req.user
                })
              }
            })
          })
        }
      })
    } else { res.redirect('/library') }
  } else { res.redirect('/library') }
})

module.exports = router
