
$(document).ready(function() {

  //Updates the title to match the actual page.
  $("#title").text("New Item | Rubyk.IO");

$("#newInventorySubmit").on("click", function(event) {
  event.preventDefault();

  var newItem = {
    product_name: $("#product_name").val().trim(),
    inventory_qty: $("#inventory_qty").val().trim(),
    available_inventory: $("#available_inventory").val().trim(),
    product_image: $("#product_image").val().trim(),
    rentalPrice_day: $("#rentalPrice_day").val().trim(),
  };

  // if (!(newInventoryItem.product_name ||
  //   newInventoryItem.product_name ||
  //   newInventoryItem.inventory_qty ||
  //   newInventoryItem.available_inventory ||
  //   newInventoryItem.product_image ||
  //   newInventoryItem.rentalPrice_day)) {
  //   alert("You must enter values for all data fields!");
  //   console.log("Inside if");
  //   return;
  // }
  $.post("/api/inventory/new", newItem).then(
    function(data) {
      console.log("added new inventory item");
    }
  );
});
});
