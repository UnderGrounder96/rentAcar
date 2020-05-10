let passport = require('passport');
let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    if(req.user)
        res.redirect('/library');

    res.render('login', {user:null, err:req.query.err});
});

router.post('/', passport.authenticate('local', {
    successRedirect: '/library',
    failureRedirect: '/login?err=yes',
    session: true
}));

module.exports = router;
