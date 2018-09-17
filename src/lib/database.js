let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "itzainab"
});

console.log("Connecting to database in port 3306");
connection.query("use suratkontrol", err => {
  if (err) {
    console.log("Database not exists, creating database...");
    connection.query("create database if not exists suratkontrol");
    connection.query("use suratkontrol");
  }
  console.log("Connected to database");
});

module.exports = connection;
