var con = require('./db');

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("USE unesco", function (err, res) {
    if (err) throw err;
    console.log('"unesco" Database selected.');
  });

  sql = "INSERT INTO sites (category, date_inscribed, unesco_url, latitude, longitude, description, site, unesco_unique) VALUES ?";
  val = [
    ['Natural','2007','https://whc.unesco.org/en/list/1133','49.0097222222', '22.3388888889', '&lt;p&gt;&lt;span&gt;This transboundary property stretches over 12 countries. Since the end of the last Ice Age, European Beech spread from a few isolated refuge areas in the Alps, Carpathians&lt;/span&gt;&lt;span&gt;, Dinarides&lt;/span&gt;&lt;span&gt;, Mediterranean and Pyrenees over a short period of a few thousand years in a process that is still ongoing. The successful expansion across a whole continent is related to the tree’s &lt;/span&gt;&lt;span&gt;adaptability and tolerance of different climatic, geographical and physical conditions. &lt;/span&gt;&lt;/p&gt;', 'Ancient and Primeval Beech Forests of the Carpathians and Other Regions of Europe', '2152'],
    ['Cultural','2014','https://whc.unesco.org/en/list/1459','-18.2500000000', '-69.5916666667', '&lt;p&gt;This site is an extensive Inca communication, trade and defence network of roads covering 30,000 km. Constructed by the Incas over several centuries and partly based on pre-Inca infrastructure, this extraordinary network through one of the world’s most extreme geographical terrains linked the snow-capped peaks of the Andes – at an altitude of more than 6,000 m – to the coast, running through hot rainforests, fertile valleys and absolute deserts. It reached its maximum expansion in the 15th century, when it spread across the length a significance', 'Qhapaq Ñan, Andean Road System', '2003']
  ];

  con.query(sql, [val], function(err, res){
    if (err) throw err;
    console.log("sites" + ": records inserted: " + res.affectedRows);
  });

  sql = "INSERT INTO visits (date, img, site_id) VALUES ?";
  val = [
    ['10-15-2019','https://seanland.ca', '1'],
    ['10-17-2019','https://seanland.ca', '1']
  ];

  con.query(sql, [val], function(err, res){
    if (err) throw err;
    console.log("visits" + ": records inserted: " + res.affectedRows);
    process.exit();
  });

});
