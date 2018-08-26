var db = require("../models");

module.exports = function(app) {

  app.get("/api/clients/new"),
    function(req, res) {
      db.Clients.findAll({}).then(function(dbClients) {
        res.json(dbClients);
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      });
    };

  app.post("/api/clients/new", function(req, res) {
    var client = req.body;

    db.Clients.create({
      client_name: client.name,
      client_company: client.company,
      client_email: client.email,
      client_phone: client.phone,
      client_address1: client.address1,
      client_address2: client.address2,
      client_city: client.city,
      client_state: client.state,
      client_zip: client.zip
    }).then(function(dbClient) {
      res.json(dbClient);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
};
