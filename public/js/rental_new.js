$(document).ready(function() {
  var dashboardMenu = $("#dashboardMenu");
  var rentalDrop =   $("#rentalDrop");
  var clientDrop = $("#clientDrop");
  var inventoryDrop = $("#inventoryDrop");
  var selectBtn = $("#selectBtn");
  var formCompany = $("#clientCompany");
  var formContact = $("#clientContac");
  var formEmail = $("#clientEmail");
  var formPhone = $("#clientPhone");
  var clientsModal = $("#clientsModal");
  var submitDates = $("#submitDates");
  var startDate = $("#startDate").val().trim();
  var endDate = $("#endDate").val().trim();


  //Updates the title to match the actual page.
  $("#title").text("New Order | Rubyk.IO");

  //Updates Menu Colors:
  dashboardMenu.addClass('btn-outline-secondary');
  rentalDrop.addClass('btn-outline-danger');
  clientDrop.addClass('btn-outline-secondary');
  inventoryDrop.addClass('btn-outline-secondary');

  //Calculate days of rent
  submitDates.on('click', function(event){
    event.preventDefault();
    var a = moment(startDate, 'YYYY/M/D');
    var b = moment(endDate, 'YYYY/M/D');
    var diffDays = b.diff(a, 'days');
  })


  //On Click event to add client to order's form.
  $(document.body).on('click', "#clientSelect", function(event){
    event.preventDefault();

    //The button has an id that coincides with the number of row.
    var idBtn = $(this).attr("client-id");

    //Gets the values of the colums.
    var company = document.getElementById("clientsTbl").rows[idBtn].cells[0].innerHTML;
    var contact = document.getElementById("clientsTbl").rows[idBtn].cells[1].innerHTML;
    var email = document.getElementById("clientsTbl").rows[idBtn].cells[2].innerHTML;
    var phone = document.getElementById("clientsTbl").rows[idBtn].cells[3].innerHTML;

    //Populate the fields.
    formCompany.val(company);
    formContact.val(contact);
    formEmail.val(email);
    formPhone.val(phone);

    formCompany.attr('client_id', idBtn);

    //Closes modal.
    clientsModal.modal('toggle');

  });

  //On click evento to add products to the order.
  $(document.body).on('')
});
