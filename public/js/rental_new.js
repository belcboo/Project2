$(document).ready(function() {
  var dashboardMenu = $("#dashboardMenu");
  var rentalDrop = $("#rentalDrop");
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
  var clientID;


  function search() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("itemSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("inventoryTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  //Updates the title to match the actual page.
  $("#title").text("New Order | Rubyk.IO");

  //Updates Menu Colors:
  dashboardMenu.addClass('btn-outline-secondary');
  rentalDrop.addClass('btn-outline-danger');
  clientDrop.addClass('btn-outline-secondary');
  inventoryDrop.addClass('btn-outline-secondary');

  //Calculate days of rent
  submitDates.on('click', function(event) {
    event.preventDefault();

    //Pulls values from fields.
    var startDate = $("#startDate").val().trim();
    var endDate = $("#endDate").val().trim();

    //Use moment.js to calculate the difference of days between the two dates.
    var a = moment(startDate, 'YYYY/MM/DD');
    var b = moment(endDate, 'YYYY/MM/DD');
    var diffDays = b.diff(a, 'days');
    console.log(startDate, endDate, diffDays);
    if (diffDays <= 0) {
      alert("Please correct the dates. Days for rent needs to be more than 0");
    }
    totalDays.val(diffDays);
  })


  //On Click event to add client to order's form.
  $(document.body).on('click', "#clientSelect", function(event) {
    event.preventDefault();

    //The button has an id that coincides with the number of row.
    var idBtn = $(this).attr("client-id");
    clientID = idBtn;

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
  $(document.body).on('click', "#productSelect", function(event) {
    event.preventDefault();


    //The button has an id that coincides with the number of row.
    var idBtn = $(this).attr("product-id");

    //Gets the values of the colums.
    var productQty = $("#inventoryModal #test" + idBtn).val().trim();
    var product = document.getElementById("inventoryTbl").rows[idBtn].cells[1].innerHTML;
    var price = document.getElementById("inventoryTbl").rows[idBtn].cells[3].innerHTML;
    var total = totalDays.val() * price * productQty;

    //Validates Quantity > 0
    if (productQty <= 0) {
      alert("Please correct the Quantity. Needs to be more than 0");
      return;
    }


    // Updates Order Total
    orderTotal += total;

    var priceFixed = (parseFloat(price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    var totalFixed = (parseFloat(total)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    var orderTotalFixed = (parseFloat(orderTotal)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
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
    td3.append("US$" + priceFixed);
    td3.attr("product_price", price)
    td4.append("US$" + totalFixed);
    td4.attr("product_total", total)
    tr.append(td1, td2, td3, td4);
    tbody.append(tr);

    grandTotal.text("ORDER TOTAL: USD$" + orderTotalFixed);
    grandTotal.attr("orderTotal", orderTotal)


    //Addes object to array that holds products.


  });

  $("#submitOrder").on('click', function(event) {
    event.preventDefault();

    console.log(user);

    var newOrder = {
      client: clientID,
      date_start: $("#startDate").val().trim(),
      date_finish: $("#endDate").val().trim(),
      rental_days: $("#totalDays").val().trim(),
      orderTotal: orderTotal,
      user: user,
      type: "order"
    };




    if (!(newOrder.client || newOrder.date_finish || newOrder.date_start || newOrder.rental_days)) {
      alert("All fields are necesary");
      return;
    }

    console.log(newOrder);


    $.post("/api/rental/new", newOrder).then(function(data) {
      console.log("1st");
      var lastID = data.rental_id;
      sendDetails(lastID);
    });




  });

  function sendDetails(lastID) {
    var rowCounter = $("#prodtucsOrder tr").length;

    for (var i = 1; i < rowCounter; i++) {
      var rowQty = document.getElementById("prodtucsOrder").rows[i].cells[0].innerHTML;
      var rowProductId = document.getElementById("prodtucsOrder").rows[i].cells[1].getAttribute("product_id");
      var rowProductName = document.getElementById("prodtucsOrder").rows[i].cells[1].innerHTML;
      var rowPrideDay = document.getElementById("prodtucsOrder").rows[i].cells[2].getAttribute("product_price");
      var rowPriceTotal = document.getElementById("prodtucsOrder").rows[i].cells[3].getAttribute("product_total");

      var orderDetail = {
        rentalId: lastID,
        qty: rowQty,
        productId: rowProductId,
        productName: rowProductName,
        productPrice: rowPrideDay,
        priceTotal: rowPriceTotal,
        user: user
      }

      $.post("/api/rental/newDetail", orderDetail).then(function(data2) {
        console.log(orderDetail);
        console.log("2nd");
      });
    };
  }



});
