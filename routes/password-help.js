let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    if(req.user)
        res.redirect('/library');

    else {
        //res.send('Reset password!');
        res.render('password-help');
    }
});

module.exports = router;