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
      client_email: client.email,
      client_phone: client.phone,
      payment_info: client.payment
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
};
