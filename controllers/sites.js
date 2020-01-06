var Site = require('../model/Site');
var Visit = require('../model/Visit');

module.exports = {
  // Find site by ID export
  findById: function(req, res){
    Site.findById(req.params.id, function(err, site){
      // if(err) throw err;
      if(err) res.render('index', { title: 'Site is not found!'});
      else {
        console.log("Site->Controller: findById queried: " + site.site);
        res.render('site', { title: site.site, site: site });
      }
    });
  },
  getAll: function(req, res){
    Site.getAll(function(err, sites){
      if(err) throw err;
      res.render('index', { title: "Home", sites: sites });
    });
  },
  UniqueSiteVisits: function(req, res){
    Visit.findUniqueSites(function(err, uniqueSites){
      if(err) throw err;
      Site.findAllById(uniqueSites, function(err, uniqueSiteVisits){
        if(err) throw err;
        res.render('index', { title: "UniqueSiteVisits", sites: uniqueSiteVisits });
      });
    });
  }
}
