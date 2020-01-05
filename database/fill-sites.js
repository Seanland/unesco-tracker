var con = require('./db');
var fs = require('fs');
var parser = require('fast-xml-parser');

var string = fs.readFileSync(process.cwd() + '/data/unesco.xml', 'utf8').toString();

var val = parser.parse(string);
var arr = [];

val.query.row.forEach(function(site){
  var s = [];
  s.push(site.category);
  s.push(site.danger != '' || false);
  s.push(site.date_inscribed);
  s.push(site.http_url);
  s.push(site.latitude);
  s.push(site.longitude);
  s.push(site.short_description);
  s.push(site.site);
  s.push(site.unique_number);
  // console.log(s);
  arr.push(s);
});

console.log(arr);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = "INSERT INTO sites (category, in_danger, date_inscribed, unesco_url, latitude, longitude, description, site, unesco_unique) VALUES ?";

  con.query(sql, [arr], function(err, res){
    if (err) throw err;
    console.log("sites" + ": records inserted: " + res.affectedRows);
  });
});


  // fs.readFile(process.cwd() +'/data/unesco.xml', function(err, data) {
  //   parser.parseString(data, function (err, result) {
  //     result.query.row.forEach(function(site){
  //       var danger = true;
  //       var s = ['1','2','3','4','5','6','7','8','9'];
  //       // var s = [site.category, site.danger, site.date_inscribed, site.http_url, site.latitude, site.longitude, site.short_description, site.site, site.unique_number];
  //       con.query(sql, [[site.category, 1, site.date_inscribed, site.http_url, site.latitude, site.longitude, site.short_description, site.site, site.unique_number]], function(err, res){
  //         if (err) throw err;
  //         console.log("Site Imported: " + site.site);
  //       });
  //       // console.log(s);
  //     });
  //     console.log('Done');
  //   });
  // });
  // console.log(val);

  // con.query(sql, [val.query.row], function(err, res){
  //   if (err) throw err;
  //   console.log("sites" + ": records inserted: " + res.affectedRows);
  // });



  // sql = "INSERT INTO visits (date, img, site_id) VALUES ?";
  // val = [
  //   ['10-15-2019','https://seanland.ca', '1'],
  //   ['10-17-2019','https://seanland.ca', '1']
  // ];
  //
  // con.query(sql, [val], function(err, res){
  //   if (err) throw err;
  //   console.log("visits" + ": records inserted: " + res.affectedRows);
  //   process.exit();
  // });


// });
