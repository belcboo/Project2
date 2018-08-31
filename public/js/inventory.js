var db = require("../models");


module.exports = function(app) {

  app.post("/api/inventory/new", function(req, res) {
    var inventory = req.body;

    db.Inventory.create({
      product_name: inventory.name,
      inventory_qty: inventory.inventory_qty,
      available_qty: inventory.available_qty,
      product_image: inventory.product_image,
      rentalPrice_day: inventory.rentalPrice_day
    }).then(function(dbInventory) {
      res.json(dbInventory);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
};
