const router = require('express').Router(),
  db = require('../db/db');

router.get('/', (req, res) => {
  if (!req.user) return res.redirect('/');

  db.query(`SELECT * FROM cars
    WHERE active NOT LIKE 0 ORDER BY model, type;`, (err, result) => {
    if (!result.length) throw "No brand vehicles found!";

    db.query(`SELECT DISTINCT type FROM cars`, (err1, result1) => {
      return res.render('catalog', {
        carArr: result,
        carsArr: result1,
        user: req.user
      });
    });
  });
});

module.exports = router;
