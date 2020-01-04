var Site = require('../model/Site');

module.exports = {
  // Find site by ID export
  findById: function(req, res){
    Site.findById(req.params.id, function(err, site){
      if(err) throw err;
      console.log("Site->Controller: findById queried: " + site.site);
      res.render('site', { title: site.site, site: site });
    });
  }
}
