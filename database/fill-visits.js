var con = require('./db');

sql = "INSERT INTO visits (date, img, comment, site_id) VALUES ?";
val = [
  ['10-15-2019','https://seanland.ca', 'This is a comment about the place I went, or some details max 1000 characters.  They are not supposed to be super long - but you can write a bit.' ,'203'],
  ['10-17-2019','https://seanland.ca', 'This is a comment about the place I went, or some details max 1000 characters.  They are not supposed to be super long - but you can write a bit.' ,'169'],
  ['01-17-2020','https://seanland.ca', 'This is a comment about the place I went, or some details max 1000 characters.  They are not supposed to be super long - but you can write a bit.' ,'520'],
  ['11-23-2019','https://seanland.ca', 'This is a comment about the place I went, or some details max 1000 characters.  They are not supposed to be super long - but you can write a bit.' ,'520']
];

con.query(sql, [val], function(err, res){
  if (err) throw err;
  console.log("visit records inserted: " + res.affectedRows);
  process.exit();
});
