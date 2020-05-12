const express = require('express'),
  router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('terms-of-use', { user: req.user })
})

module.exports = router
