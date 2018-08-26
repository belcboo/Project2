$(function() {

$.ajax("/api/inventory", {
    type: "GET",
    data: inventory
  }).then(
    function() {
        console.log(inventory)
    }
  );
});
