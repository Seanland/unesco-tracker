var con = require('./db');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("DROP DATABASE unesco", function (err, result) {
    if (err) throw err;
    console.log('"unesco" Database dropped');
    process.exit();
  });
});
