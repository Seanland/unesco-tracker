var con = require('./db');
var fs = require('fs');
var parser = require('fast-xml-parser');
var htmlToText = require('html-to-text');

var string = fs.readFileSync(process.cwd() + '/data/unesco.xml', 'utf8').toString();

var val = parser.parse(string);
var arr = [];

val.query.row.forEach(function(site){
  var s = [];
  // Changed ID to the UNESCO unique number.
  // This is done in order to associate a visit to a site.
  s.push(site.unique_number);
  s.push(site.category);
  s.push(site.danger != '' || false);
  s.push(site.date_inscribed);
  s.push(site.http_url);
  s.push(site.latitude);
  s.push(site.longitude);
  // Crazy that this works, but it does..
  s.push(htmlToText.fromString(htmlToText.fromString(site.short_description), { wordwrap: false }));
  s.push(htmlToText.fromString(htmlToText.fromString(site.site), { wordwrap: false }));
  s.push(site.unique_number);
  s.push(site.image_url);
  s.push(site.states);
  // Generating a slug.
  var slug = htmlToText.fromString(htmlToText.fromString(site.site), { wordwrap: false });
  var punctuationless = slug.replace(/[.',\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var finalString = punctuationless.replace(/\s{2,}/g," ");
  slug = finalString.toLowerCase().split(" ").join("-");
  s.push(slug);
  console.log(slug);
  arr.push(s);
});

// console.log(arr);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  sql = "INSERT INTO sites (id, category, in_danger, date_inscribed, unesco_url, latitude, longitude, description, site, unesco_unique, img_url, states, slug) VALUES ?";

  con.query(sql, [arr], function(err, res){
    if (err) throw err;
    console.log("sites" + ": records inserted: " + res.affectedRows);
    process.exit();
  });
});
