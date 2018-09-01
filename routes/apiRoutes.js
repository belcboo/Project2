var db = require("../models");

module.exports = function(app) {

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

  app.post("/api/inventory/new", function(req, res) {
    var inventory = req.body;

    db.Inventory.create({
      product_name: inventory.product_name,
      inventory_qty: inventory.inventory_qty,
      available_inventory: inventory.available_inventory,
      product_image: inventory.product_image,
      rentalPrice_day: inventory.rentalPrice_day
    }).then(function(dbInventory) {
      res.json(dbInventory);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  //This Rout will work to display an item details nor create a new rental order.
  app.get("api/inventory:id", function(req, res){
    db.Inventory.findOne({
      product_id: req.params.id
    }).then(function(result){
      return res.json(result);
    });
  });  

    //This Rout will work to display an client details nor create a new rental order.
    app.get("api/client:id", function(req, res){
      db.Inventory.findOne({
        client_id: req.params.id
      }).then(function(result){
        return res.json(result);
      });


  });

};
