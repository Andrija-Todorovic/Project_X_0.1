require('dotenv').config();
const mysql = require('mysql');

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME;
const db_port = process.env.DB_PORT;

// Konekcija sa bazom
var con = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_password,
  database: db_name,
  port: db_port
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Konekcija sa bazom je uspostavljena");
});

module.exports = con;