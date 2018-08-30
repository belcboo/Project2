var db = require("../models");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // if (req.user) {
    //   res.render("rental_dashboard")
    // };
    res.render("index2");
  });


  // IMPORTANT!!
  // If you want to work on any route withouth having to login, just delete
  // the "isAuthenticated,". Make sure to enable it after you finish!

  // Loads Client > New Client
  app.get("/client/new", function(req, res) {
    res.render("clients_new");
  });

  app.get("/client/dashboard", function(req, res) {
    db.Clients.findAll({}).then(function(data){
      var hbsObject = {
        client:data
      };
      console.log(hbsObject);
      res.render("inventory_dashboard", hbsObject);
    })
  });


  app.get("/inventory/dashboard", function(req, res) {
    db.Inventory.findAll({}).then(function(data) {
      var hbsObject = {
        inventory: data
      };
      console.log(hbsObject);
      res.render("inventory_dashboard", hbsObject);
    });
  });

  app.get("/rental/dashboard", isAuthenticated, function(req, res) {
    res.render("rental_dashboard");
  });

  app.get("/rental/new", function(req, res) {
    db.Clients.findAll({}).then(function(data) {
      var hbsObject = {
        clients: data
      };
      console.log(hbsObject);
      res.render("rental_new", hbsObject);
    });
  });

  app.get("/inventory/dashboard", isAuthenticated, function(req, res) {
    res.render("inventory_dashboard");

  app.get("/rental/dashboard", function(req, res) {
    res.render("rental_dashboard");
  });

  app.get("/inventory/new", function(req, res) {
    res.render("inventory_new.handlebars");
  });

  app.get("/inventory/dashboard", function(req, res) {
    db.Inventory.findAll({}).then(function(data){
      var hbsObject = {
        inventory:data
      };
      console.log(hbsObject);
      res.render("inventory_dashboard", hbsObject);
    })
    
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.render("rental_dashboard")
    };
    res.render("index2");
  });

  app.get("/signup_testBootCampLoL", (req, res) => {
    if (req.user) {
      res.render("rental_dashboard")
    };
    res.render("signup");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
