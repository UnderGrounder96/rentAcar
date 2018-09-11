let passport = require('passport');
let express = require('express');
let router = express.Router();

router.get('/', function (req, res, next) {
    let err = req.query.err;

    if(req.user)
        res.redirect('/library');

    else {
        if(err === "yes")
            res.render('login', {err:err, user:req.user});
        else
            res.render('login', {err:null, user:req.user});
    }
});


router.post('/', passport.authenticate('local', {
    successRedirect: '/library',
    failureRedirect: '/login?err=yes',
    session: true
}));

module.exports = router;