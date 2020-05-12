const express = require('express'),
  router = express.Router(),
  auth = require('../auth/middleware'),
  db = require('../db/db');

router.get('/', auth(), function (req, res) {
  const rs = req.query.res

  if (req.user) {
    db.query(`SELECT * FROM reservations
      JOIN cars ON reservations.idCar=cars.idCar
      WHERE reservations.idUser="${req.user.idUser}"
      AND DATE(dateOut)>=CURDATE()
      AND reservations.active>0
      AND cars.active>0;`, (err, result) => {
      if (!result.length) {
        res.render('library', { res: rs, carsArr: null, user: req.user });
      } else {
        res.render('library', { res: rs, carsArr: result, user: req.user });
      }
    })
  } else {
    res.redirect('/')
  }
})

module.exports = router
