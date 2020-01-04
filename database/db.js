var mysql = require('mysql');

// This information is only used for testing - change to production before deploying
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
  // database: "unesco"
});

module.exports = con;
