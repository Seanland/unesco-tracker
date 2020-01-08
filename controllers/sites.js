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
  findBySlug: function(req, res){
    Site.findBySlug(req.params.slug, function(err, site){
      // if(err) throw err;
      if(err) res.render('index', { title: 'Site is not found!'});
      else {
        Visit.findBySite(site.id, function(err, visits){
          if(err) res.render('index', { title: 'Site:Visits has caused an error!'});
          console.log("Site->Controller: findBySlug queried: " + site.site);
          res.render('site', { title: site.site, site: site, visits: visits });
        });
      }
    });
  },
  getHome: function(req, res){
    Site.getAll(function(err, sites){
      Visit.findUniqueSites(function(err, uniqueSites){
        if(err) throw err;
        Site.findAllById(uniqueSites, function(err, uniqueSiteVisits){
          if(err) throw err;
          res.render('index', { title: "UNESCO Tracker", visits: uniqueSiteVisits, sites: sites, totalSites: sites.length });
        });
      });
    });
  },
  getAll: function(req, res){
    Site.getAll(function(err, sites){
      if(err) throw err;
      res.render('site-listing', { title: "All Sites", sites: sites });
    });
  },
  getReference: function(req, res){
    Site.getAll(function(err, sites){
      if(err) throw err;
      res.render('reference', { title: "Reference", sites: sites });
    });
  },
  UniqueSiteVisits: function(req, res){
    Visit.findUniqueSites(function(err, uniqueSites){
      if(err) throw err;
      Site.findAllById(uniqueSites, function(err, uniqueSiteVisits){
        if(err) throw err;
        res.render('site-listing', { title: "UniqueSiteVisits", sites: uniqueSiteVisits });
      });
    });
  }
}
