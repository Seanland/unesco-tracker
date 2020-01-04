var con = require('../database/db');

var Site = function(data){
  this.id = data.id;
  this.category = data.category;
  this.in_danger = data.in_danger;
  this.date_inscribed = data.date_inscribed;
  this.unesco_url = data.unesco_url;
  this.latitude = data.latitude;
  this.longitude = data.longitude;
  this.description = data.description;
  this.site = data.site;
  this.unesco_unique = data.unesco_unique;
};

// Finding the site by ID.
Site.findById = function(id, callback){
  var sql = "SELECT * FROM sites WHERE id=? limit 1";

  con.query(sql, id, function(err, result){
    if (err) return callback(err);
    console.log("Site.findById: " + result[0].site + " retrieved!");
    callback(err, new Site(result[0]));
  });
};

module.exports = Site;
