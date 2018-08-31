
$(document).ready(function() {

  $.get("/api/userData").then(function(data) {
    console.log(data);
    $("#loginID").text("Logged in as: " + data.email);
  });

});
