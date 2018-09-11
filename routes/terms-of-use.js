let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    res.render('terms-of-use', {user:req.user});
});

module.exports = router;