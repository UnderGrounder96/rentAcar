const router = require('express').Router(),
  db = require('../db/db');

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:data', (req, res) => {
  db.query(`SELECT name, details FROM brand
    WHERE name LIKE CONCAT('%', ?, '%');`, req.params.data, (err, result) => {
    if (result.length) {
      db.query(`SELECT * FROM cars
        WHERE brand LIKE ?
        AND active NOT LIKE 0;`, result[0].name, (err1, result1) => {
        db.query(`SELECT name FROM brand
          WHERE name NOT LIKE ?;`, result[0].name,(err2, result2) => {
          return res.render('data', {
            brand: result[0],
            carsArr: result1,
            type: result2,
            user: req.user
          });
        });
      });
    } else {
      db.query(`SELECT * FROM cars
        WHERE model LIKE CONCAT('%', ?, '%')
        OR year LIKE CONCAT('%', ?, '%')
        OR type LIKE CONCAT('%', ?, '%')
        OR price LIKE CONCAT('%', ?, '%')
        AND active NOT LIKE 0;`, [req.params.data, req.params.data,
          req.params.data, req.params.data], (err1, result1) => {
        if (!result1.length)
          return res.render('page_not_found', { user: req.user });

        db.query(`SELECT idCar, photo FROM cars
          WHERE active NOT LIKE 0
          ORDER BY RAND()
          LIMIT 10;`, (err2, result2) => {
          return res.render('data', {
            brand: undefined,
            carsArr: result1,
            data: req.params.data,
            type: result2,
            user: req.user
          });
        });
      });
    }
  });
});

module.exports = router;
