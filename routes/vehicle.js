const router = require('express').Router(),
  db = require('../db/db');

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:vehicle_id', (req, res) => {
  db.query(`SELECT * FROM cars
    WHERE idCar="${req.params.vehicle_id}"
    AND active>0;`, (err, result) => {
    if (!result.length)  return res.render('page_not_found', { user: req.user });
    else {
      db.query(`SELECT idCar, photo FROM cars
        WHERE idCar NOT LIKE "${req.params.vehicle_id}"
        AND active>0
        ORDER BY RAND()
        LIMIT 10;`, (err1, result1) => {
        if (req.user) {
          db.query(`SELECT * FROM reservations
            WHERE idCar="${req.params.vehicle_id}"
            AND idUser="${req.user.idUser}"
            AND DATE(dateOut)>=CURDATE()
            AND active>0;`, (err2, result2) => {
            return res.render('vehicle', {
              car: result[0],
              carsArr: result1,
              resv: result2[0],
              user: req.user
            });
          });
        } else return res.render('vehicle', {
          car: result[0],
          carsArr: result1,
          resv: null,
          user: req.user
        });
      });
    }
  });
});

router.post('/add/:car_id', (req, res) => {
  const resv = {
    active: 1,
    idUser: req.user.idUser,
    dateIn: req.body.dateIn,
    idCar: req.params.car_id,
    dateOut: req.body.dateOut,
    fullPrice: req.body.numbers
  };

  db.query('INSERT into reservations SET ?', resv, (err) => {
    if (err) return res.send({ code: 400, failed: __print('add', err)});
    return res.redirect('/library?res=add');
  });
});

router.post('/edit/:res_id/', (req, res) => {
  db.query(`UPDATE reservations
    SET fullPrice="${req.body.numbers}",
      dateIn="${req.body.dateIn}",
      dateOut="${req.body.dateOut}"
    WHERE idReservation="${req.params.res_id}";`, (err) => {
    if (err) return res.send({ code: 400, failed: __print('edit', err)});
    return res.redirect('/library?res=edit');
  });
});

router.post('/rem/:res_id/', (req, res) => {
  db.query(`DELETE FROM reservations
    WHERE idReservation="${req.params.res_id}";`, (err) => {
    if (err) return res.send({ code: 400, failed: __print('delete', err)});
    return res.redirect('/library?res=del');
  });
});

function __print(str, err){
  return "It wasn't possible to " + str + " the data! Due to " + err;
}

module.exports = router;
