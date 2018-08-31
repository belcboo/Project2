$(document).ready(function() {

  //Updates the title to match the actual page.
  $("#title").text("Dashboard | Rubyk.IO");

  //Updates Menu Colors:
  //Just change from "danger" to "secondaty" or viceversa
  //Depending if you want to have a red or gray menu.
  $("#dashboardMenu").addClass('btn-outline-danger');
  $("#rentalDrop").addClass('btn-outline-secondary');
  $("#clientDrop").addClass('btn-outline-secondary');
  $("#inventoryDrop").addClass('btn-outline-secondary');


  //Contact for Modal Support.

  var contactBtn = $("#contactBtn");
  var subject = $("#subject");
  var message = $("#message");
  var contact = $("#contact");

  contactBtn.on("click", function(event) {
    event.preventDefault();
    var newMessage = {
      subject: subject.val().trim(),
      message: message.val().trim(),
      contact: contact.val().trim()
    }
    if (!newMessage.subject || !newMessage.message) {
      $("#contactMsg").addClass("text-danger");
      $("#contactMsg").text("Please check the fields and try again.");
      return;
    }
    sendContact(newMessage.subject, newMessage.message, newMessage.contact);
    subject.val("");
    message.val("");
    contact.val("");
    $("#contactMsg").addClass("text-success");
    $("#contactMsg").text("Thank you, one of our customer representatives will be in touch with you shortly.");
  });

  function sendContact(subject, message, contact) {
    $.post("/api/contact", {
      subject: subject,
      message: message,
      contact: contact
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  };

});
