let passport = require('passport');
let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    if(req.user)
        res.redirect('/library');

    res.render('login', {err:req.query.err, user:req.user});
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/library',
    failureRedirect: '/login?err=yes',
    session: true
}));

module.exports = router;
