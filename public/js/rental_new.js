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
  var totalDays = $("#totalDays");
  var grandTotal = $("#grandTotal");
  var rowCounter = 0;
  var orderTotal = 0;



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

    var startDate = $("#startDate").val().trim();
    var endDate = $("#endDate").val().trim();

    var a = moment(startDate, 'YYYY/MM/DD');
    var b = moment(endDate, 'YYYY/MM/DD');
    var diffDays = b.diff(a, 'days');
    console.log(startDate, endDate, diffDays);
    if(diffDays <= 0){
      alert("Days can't be equals or lower than 0. Please check the dates.");
    }
    totalDays.val(diffDays);
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

  //On Click event to add client to order's form.
  $(document.body).on('click', "#productSelect", function(event){
    event.preventDefault();


    //The button has an id that coincides with the number of row.
    var idBtn = $(this).attr("product-id");

    //Gets the values of the colums.
    var productQty = $("#inventoryModal #test"+idBtn).val().trim();
    var product = document.getElementById("inventoryTbl").rows[idBtn].cells[1].innerHTML;
    var price = document.getElementById("inventoryTbl").rows[idBtn].cells[2].innerHTML;
    var total = totalDays.val() * price * productQty;

    //Creating new row to display item selected.
    var tbody = $("#tbody");
    var tr = $("<tr>");
    var td1 = $("<td>");
    var td2 = $("<td>");
    var td3 = $("<td>");
    var td4 = $("<td>");

    td1.append(productQty);
    td2.append(product);
    td2.attr("product_id", idBtn);
    td3.append(price);
    td4.append(total);
    td4.attr("value",total);
    tr.append(td1, td2, td3, td4);
    tbody.append(tr);

    // Updates Order Total
    orderTotal += total;
    grandTotal.text("ORDER TOTAL: USD$" + orderTotal);


  });

});
