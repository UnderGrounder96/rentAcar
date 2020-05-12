const express = require('express'),
  router = express.Router();

router.get('/', function (req, res, next) {
  if (req.user) return res.redirect('/library');

  // res.send('Reset password!');
  res.render('password-help', { user: null })
})

module.exports = router
