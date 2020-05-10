const mysql = require('mysql');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
    connectionLimit: process.env.DB_CONLIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(function(err) {
    if (err)
        console.log("Error connecting database!\n" + err);
});

module.exports = db;
