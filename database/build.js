var con = require('./db');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE unesco CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;", function (err, res) {
    if (err) throw err;
    console.log('"unesco" Database created.');
  });

  con.query("USE unesco", function (err, res) {
    if (err) throw err;
    console.log('"unesco" Database selected.');
  });

  con.query("CREATE TABLE sites(\
    id int NOT NULL AUTO_INCREMENT,\
    category varchar(255),\
    in_danger bool,\
    date_inscribed int,\
    unesco_url varchar(255),\
    latitude varchar(255),\
    longitude varchar(255),\
    description varchar(5000),\
    site varchar(255),\
    unesco_unique int UNIQUE,\
    PRIMARY KEY (id)\
  )", function(err, res){
    if (err) throw err;
    console.log("sites Table Created.");
  });

  con.query("CREATE TABLE visits(\
    id int NOT NULL AUTO_INCREMENT,\
    date varchar(255),\
    img varchar(255),\
    site_id int,\
    FOREIGN KEY (site_id) REFERENCES sites(id),\
    PRIMARY KEY (id)\
  )", function(err, res){
    if (err) throw err;
    console.log("visits Table Created.");
    process.exit();
  });
});
