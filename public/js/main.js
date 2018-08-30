
$(document).ready(function() {

  $.get("/api/userData").then(function(data) {
    console.log(data);
    $("#navbarDropdownMenuLink").text("Logged in as: "data.email);
  });

});
