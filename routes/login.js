const express = require('express'),
  passport = require('passport'),
  router = express.Router();

router.get('/', function (req, res) {
  if (req.user) { return res.redirect('/library') }

  res.render('login', { user: null, err: req.query.err })
})

router.post('/', passport.authenticate('local', {
  successRedirect: '/library',
  failureRedirect: '/login?err=yes',
  session: true
}))

module.exports = router
