let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "sddaassddasad"
});

console.log("Connecting to database in port 3306");
connection.query("use suratKontrol", err => {
  if (err) {
    console.log("Database not exists, creating database...");
    connection.query("create database if not exists suratKontrol");
    connection.query("use suratKontrol");
  }
  console.log("Connected to database");
});

module.exports = connection;
