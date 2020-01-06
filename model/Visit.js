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

Visit.findUniqueSites = function(callback){
  var sql = "SELECT DISTINCT site_id FROM visits";

  con.query(sql, function(err, result){
    if(err) return callback(err);
    if(result[0] == undefined) callback(404);
    else {
      var ids = [];

      result.forEach(id => {
        ids.push(id.site_id);
      });
      console.log(ids);
      console.log("Visit.findUniqueSites: " + ids.length + " unique sites visited!");

      callback(err, ids);
    }
  });
}

module.exports = Visit;
