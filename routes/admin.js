const router = require('express').Router(),
  db = require('../db/db');

router.get('/', (req, res) => {
  if (!req.user) return res.redirect('/');
  if (!req.user.admin) return res.redirect('/library/');

  db.query(`SELECT * FROM cars;`, (err, result) => {
  db.query(`SELECT * FROM reservations
    JOIN cars ON reservations.idCar=cars.idCar
    WHERE DATE(reservations.dateOut)>=CURDATE();`, (err1, result1) => {
    db.query(`SELECT idUser, fullName, email, admin, active FROM users;`, (err2, result2) => {
      res.render('admin', {
        car: null,
        carsArr: result,
        res: req.query.res,
        resv: null,
        resArr: result1,
        userArr: result2,
        userData: null,
        user: req.user
      });
    });
  });
  });
});

router.get('/car/:car_id', (req, res) => {
  if (!req.user) return res.redirect('/');
  if (!req.user.admin) return res.redirect('/library/');

  db.query(`SELECT * FROM cars WHERE idCar="${req.params.car_id}";`, (err, result) => {
  db.query(`SELECT name FROM brand;`, (err1, result1) => {
  db.query(`SELECT DISTINCT type FROM cars;`, (err2, result2) => {
    return res.render('admin', {
      car: result[0],
      slctArr: result1,
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
});

router.get('/resv/:res_id', (req, res) => {
  if (!req.user) return res.redirect('/');
  if (!req.user.admin) return res.redirect('/library/');

  db.query(`SELECT * FROM ((reservations JOIN cars ON reservations.idCar=cars.idCar)
    JOIN users ON reservations.idUser=users.idUser)
    WHERE idReservation="${req.params.res_id}"
    AND DATE(dateOut)>=CURDATE();`, (err, result) => {
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
});

router.get('/user/:user_id', (req, res) => {
  if (!req.user) return res.redirect('/');
  if (!req.user.admin) return res.redirect('/library/');

  db.query(`SELECT idUser, fullName, email, admin, active FROM users
    WHERE idUser="${req.params.user_id}";`, (err, result) => {
    return res.render('admin', {
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
});

router.post('/editCar/:car_id', (req, res) => {
  db.query(`UPDATE cars
    SET model="${req.body.model}",
      year="${req.body.year}",
      type="${req.body.type}",
      brand="${req.body.brand}",
      price="${req.body.price}",
      active="${req.body.active}"
    WHERE idCar="${req.params.car_id}";`, (err) => {
    if (err) return res.send({ code: 400, failed: __print('change', err)});
    return res.redirect('/admin?res=editCar');
  });
});

router.post('/editRes/:res_id', (req, res) => {
  db.query(`UPDATE reservations
    SET fullPrice="${req.body.numbers}",
      active="${req.body.active}",
      dateIn="${req.body.dateIn}",
      dateOut="${req.body.dateOut}"
    WHERE idReservation="${req.params.res_id}";`, (err) => {
    if (err) return res.send({ code: 400, failed: __print('change', err)});
    return res.redirect('/admin?res=editRes');
  });
});

router.post('/rem/:res_id/', (req, res) => {
  db.query(`DELETE FROM reservations
    WHERE idReservation="${req.params.res_id}";`, (err) => {
    if (err) return res.send({ code: 400, failed: __print('delete', err)});
    return res.redirect('/admin?res=rem');
  });
});

router.post('/editUse/:user_id', (req, res) => {
  db.query(`UPDATE users
    SET fullName="${req.body.name}",
      email="${req.body.email}",
      admin="${req.body.admin}",
      active="${req.body.active}"
    WHERE idUser="${req.params.user_id}";`, (err) => {
    if (err) return res.send({ code: 400, failed: __print('change', err)});
    return res.redirect('/admin?res=editUse');
  });
});

function __print(str, err){
  return "It wasn't possible to " + str + " the data! Due to " + err;
}

module.exports = router;
