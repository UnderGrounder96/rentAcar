const express = require('express'),
  router = express.Router(),
  db = require('../db/db');

router.get('/', function (req, res, next) {
  if (req.user) {
    db.query('SELECT DISTINCT type FROM cars WHERE active>0;',
      (error, result) => {
        if (!result.length) {
          res.send('No brands found!')
        } else {
          db.query('SELECT * FROM cars WHERE active>0 ORDER BY model, type;',
            (error1, result1) => {
              if (!result1.length) {
                res.send('No brands found!')
              } else {
                res.render('catalog', {
                  carArr: result1,
                  carsArr: result,
                  user: req.user
                })
              }
            })
        }
      })
  } else {
    res.redirect('/')
  }
})

module.exports = router
