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
  app.get("/client/new", isAuthenticated, function(req, res) {
    res.render("clients_new");
  });

  app.get("/client/dashboard", isAuthenticated, function(req, res) {
    res.render("clients_dashboard");
  });

  app.get("/rental/dashboard", isAuthenticated, function(req, res) {
    res.render("rental_dashboard");
  });

  app.get("/inventory/dashboard", isAuthenticated, function(req, res) {
    res.render("inventory_dashboard");
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
