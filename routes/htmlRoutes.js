var db = require("../models");

var isAuthenticated = require('../helpers/isAuthenticated');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("rental_dashboard")
    };
    res.render("index2");
  });

  // Loads Client > New Client
  app.get("/client/new", isAuthenticated, (req, res) => {
    res.render("clients_new");
  });

  app.get("/client/dashboard", isAuthenticated, (req, res) => {
    res.render("clients_dashboard");
  });

  app.get("/rental/dashboard", isAuthenticated, (req, res) => {
    res.render("rental_dashboard");
  });

  app.get("/inventory/dashboard", isAuthenticated, (req, res) => {
    res.render("inventory_dashboard");
  });

  app.get("/login", (req, res) => {
    if (req.user) {
      res.redirect("rental_dashboard")
    };
    res.render("index2");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
