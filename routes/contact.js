const express = require('express'),
  router = express.Router();

router.get('/', (req, res) => {
  return res.render('contact', { user: req.user })
})

module.exports = router
