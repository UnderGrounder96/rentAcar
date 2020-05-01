const mysql = require('mysql');

const db = mysql.createConnection({
    connectionLimit: process.env.DB_CONLIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect(function(err) {
    if (!err)
        console.log("Database is connected.\n");
    else
        console.log("Error connecting database!\n");
});

module.exports = db;