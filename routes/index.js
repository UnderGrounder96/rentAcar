let express = require('express');
let router = express.Router();
const db = require('../db/db');

router.get('/', function (req, res, next) {
    db.query(`SELECT * FROM cars WHERE active>0 ORDER BY RAND() LIMIT 4;`, (error, result) => {
        // console.log("result output to JSON: \n"+JSON.stringify(result, null, 2))

        if (result === null || result === undefined || result.length === 0)
            res.send("No vehicles were found in the database!");

        res.render('index', {carsArr:result, user:req.user});
    })
});

router.post('/find', (req, res) => {
    res.redirect('/data/'+req.body.item);
});

module.exports = router;
