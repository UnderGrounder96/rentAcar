let express = require('express');
let router = express.Router();
const db = require('../db/db');

router.get('/', function (req, res, next) {
    db.query(`SELECT * FROM cars WHERE active>0 ORDER BY RAND() LIMIT 4;`, (error, result) => {

        if (result === null || result === undefined || result.length === 0)
            res.send("No vehicles were found in the database!");

        else {
            if (req.user)
                console.log("\nLogged in\n");

            // console.log(JSON.stringify(result, null, 2))
            res.render('index', {carsArr:result, user:req.user})
        }
    })
});


router.post('/find', (req, res) => {
    res.redirect('/data/'+req.body.item);
});

module.exports = router;