var con = require('./db');

sql = "INSERT INTO visits (date, img, comment, site_id) VALUES ?";
val = [
  ['08-06-2018','/images/20180806_141233.png', 'The one picture featuring a guest appearance.  Please welcome Diana!' ,'1475'],
  ['10-17-2016','/images/20161017_111122.png', 'No Comment.' ,'917'],
  ['10-17-2016','/images/20161017_150044.png', 'No Comment.' ,'918'],
  ['11-23-2019','https://seanland.ca', 'This is a comment about the place I went, or some details max 1000 characters.  They are not supposed to be super long - but you can write a bit.' ,'520']
];

con.query(sql, [val], function(err, res){
  if (err) throw err;
  console.log("visit records inserted: " + res.affectedRows);
  process.exit();
});
