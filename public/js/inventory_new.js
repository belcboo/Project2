$(function() {
 
$("#newInventorySubmit").on("submit", function(event) {
  event.preventDefault();

  var newInventoryItem = {
    product_name: $("#product_name").val().trim(),
    inventory_qty: $("#client_phone").val().trim(),
    available_inventory: $("#available_inventory").val().trim(),
    product_image: $("product_image").val().trim(),
    rentalPrice_day: $("rentalPrice_day").val().trim(),
  };

  if (!(newInventoryItem.product_name && 
    newInventoryItem.product_name && 
    newInventoryItem.inventory_qty && 
    newInventoryItem.available_inventory &&
    newInventoryItem.product_image &&
    newInventoryItem.rentalPrice_day)) {
    alert("You must enter values for all data fields!");
    return;
  }
  $.ajax("/api/inventory", {
    type: "POST",
    data: newInventoryItem
  }).then(
    function() {
      console.log("added new inventory item");
      location.reload();
    }
  );
});
});