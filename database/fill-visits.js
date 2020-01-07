var con = require('./db');

sql = "INSERT INTO visits (date, img, site_id) VALUES ?";
val = [
  ['10-15-2019','https://seanland.ca', '203'],
  ['10-17-2019','https://seanland.ca', '169'],
  ['01-17-2020','https://seanland.ca', '520'],
  ['11-23-2019','https://seanland.ca', '520']
];

con.query(sql, [val], function(err, res){
  if (err) throw err;
  console.log("visit records inserted: " + res.affectedRows);
  process.exit();
});
