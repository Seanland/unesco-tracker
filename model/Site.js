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
  this.img_url = data.img_url
  this.states = data.states;
};

// Finding the site by ID.
Site.findById = function(id, callback){
  var sql = "SELECT * FROM sites WHERE id=? limit 1";

  con.query(sql, id, function(err, result){
    if (err) return callback(err);
    // if not site is found.
    if (result[0] == undefined) callback(404);
    else {
      console.log("Site.findById: " + result[0].site + " retrieved!");
      callback(err, new Site(result[0]));
    }
  });
};

// Finding all sites by IDs.
Site.findAllById = function(ids, callback){
  var sql = "SELECT * FROM sites WHERE id in (?)";
  var arr = [];

  con.query(sql, [ids], function(err, result){
    if (err) return callback(err);
    // if not site is found.
    if (result[0] == undefined) callback(404);
    else {
      console.log("Site.findAllById: " + result.length + "sites retrieved!");
      result.forEach(site => {
        arr.push(new Site(site));
      });
      callback(err, arr);
    }
  });
};

// get a listing of all sites
Site.getAll = function(callback){
  var sql = "SELECT * FROM sites";

  con.query(sql, function(err, result){
    if (err) return callback(err);
    console.log("Site.getAll retrieved: " + result.length + "records.");
    callback(err, result);
  });
}

module.exports = Site;
