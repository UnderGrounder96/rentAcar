const express = require('express'),
  router = express.Router(),
  db = require('../db/db');

router.get('/', (req, res, next) => {
  return res.redirect('/')
})

router.get('/:vehicle_id', (req, res, next) => {
  if (req.user) {
    if (req.user.admin === 1) {
      res.redirect('/vehicle1/' + req.params.vehicle_id)
    } else {
      const sql = `
            SELECT * FROM cars
                WHERE idCar="${req.params.vehicle_id}"
                    AND active>0; `

      const sql1 = `
            SELECT idCar, photo FROM cars
                WHERE idCar<>"${req.params.vehicle_id}"
                    AND active>0
                ORDER BY RAND()
                    LIMIT 10;`

      const sql2 = `
            SELECT * FROM reservations
                WHERE idCar="${req.params.vehicle_id}"
                    AND idUser="${req.user.idUser}"
                    AND DATE(dateOut)>=CURDATE()
                    AND active>0;`

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
    }
  } else {
    const sql = `
            SELECT * FROM cars
                WHERE idCar="${req.params.vehicle_id}"
                    AND active>0;`

    const sql1 = `
            SELECT idCar, photo FROM cars
                WHERE idCar<>"${req.params.vehicle_id}"
                    AND active>0
                ORDER BY RAND()
                    LIMIT 10;`

    db.query(sql, (error, result) => {
      if (result === null || result === undefined || result.length === 0) {
        // console.log(JSON.stringify(result[0], null, 2));
        // const message = "No such vehicle found!";
        // res.render('resource_not_found', { message: message })
        res.render('page_not_found', { user: req.user })
      } else {
        db.query(sql1, (error1, result1) => {
          res.render('vehicle', {
            car: result[0],
            carsArr: result1,
            resv: undefined,
            user: req.user
          })
        })
      }
    })
  }
})

router.post('/add/:car_id', function (req, res, next) {
  const resv = {
    active: 1,
    idUser: req.user.idUser,
    dateIn: req.body.dateIn,
    idCar: req.params.car_id,
    dateOut: req.body.dateOut,
    fullPrice: req.body.numbers
  }

  db.query('INSERT into reservations SET ?', resv, function (err) {
    if (err) {
      res.send({
        code: 400,
        failed: 'could not add data'
      })
    } else { res.redirect('/library?res=add') }
  })
})

router.post('/edit/:res_id/', function (req, res, next) {
  const resv = {
    dateIn: req.body.dateIn,
    dateOut: req.body.dateOut,
    fullPrice: req.body.numbers,
    idReservation: req.params.res_id
  }

  const sql = `
        UPDATE reservations
            SET fullPrice="${resv.fullPrice}",
                dateIn="${resv.dateIn}",
                dateOut="${resv.dateOut}"
            WHERE idReservation="${resv.idReservation}";`

  db.query(sql, function (err) {
    if (err) {
      res.send({
        code: 400,
        failed: 'could not change data'
      })
    } else { res.redirect('/library?res=edit') }
  })
})

router.post('/rem/:res_id/', function (req, res, next) {
  const sql = `
        DELETE FROM reservations
            WHERE idReservation="${req.params.res_id}";`

  db.query(sql, function (err) {
    if (err) {
      res.send({
        code: 400,
        failed: 'could not delete data'
      })
    } else { res.redirect('/library?res=del') }
  })
})

module.exports = router
