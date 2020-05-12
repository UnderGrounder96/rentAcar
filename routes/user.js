const express = require('express'),
  router = express.Router(),
  auth = require('../auth/middleware'),
  db = require('../db/db');

router.get('/', auth(), (req, res, next) => {
  if (req.user) {
    db.query(`SELECT idUser, fullName, email FROM users
        WHERE email="${req.user.email}"; `, (err, result) => {
      if (!result.length) { res.render('No such user found!') } else { res.render('user', { userData: result[0], user: req.user }) }
    })
  } else { res.redirect('/') }
})

module.exports = router
