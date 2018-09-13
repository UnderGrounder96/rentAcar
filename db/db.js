const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '', // set "" if you don't have password
    database: 'app'
});

db.connect(function (err) {
    if (!err)
        console.log("Database is connected.\n");
    else
        console.log("Error connecting database!\n\n"+ err);
});

module.exports = db;
