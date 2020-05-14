const router = require('express').Router();

router.get('/', (req, res) => {
  if (!req.user) return res.redirect('/');
  res.render('user', { user: req.user });
});

module.exports = router;
