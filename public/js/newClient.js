$(document).ready(function() {

  $("#newClientSubmit").on("click", function(event) {
    event.preventDefault();

    var newClient = {
      name: $("#client_name").val().trim(),
      email: $("#client_email").val().trim(),
      phone: $("#client_phone").val().trim(),
      payment: $("#payment_info").val().trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/api/clients/new", newClient)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });


    // Clearing fields.
    $("#client_name").val("");
    $("#client_email").val("");
    $("#client_phone").val("");
    $("#payment_info").val("");

  });

});
