var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res){
    res.render("index2");
  });

  // Loads Client > New Client
  app.get("/client/new", function(req, res){
    res.render("clients_new");
  });

  // Loads Client List
  app.get("/client/new", function(req, res){
    res.render("clients");
  });

  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });
  //
  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
