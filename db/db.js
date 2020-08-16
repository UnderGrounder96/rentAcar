const dotenv = require("dotenv").config(),
  db = require("mysql").createConnection({
    connectionLimit: process.env.DB_CONLIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

db.connect((err) => {
  if (err) throw "Database error: \n" + err;
});

module.exports = db;
