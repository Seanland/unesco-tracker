var con = require('../database/db');

var Visit = function(data){
  this.id = data.id;
  this.date = data.date;
  this.img = data.img;
  this.site_id = data.site_id;
};

Visit.findBySite = function(id, callback){
  var sql = "SELECT * FROM visits WHERE site_id=?";

  con.query(sql, id, function(err, result){
    if (err) return callback(err);
    // if not site is found.
    if (result[0] == undefined) callback(404);
    else {
      console.log("Visit.findBySite: " + result.length + "visits retrieved!");
      callback(err, result);
    }
  });
};
