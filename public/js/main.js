var menu = {
  modules: function(button) {
    switch (button) {
      case "rental":
        $("#rentalBtn").attr('class', 'moduleBtn nav-link active btn-dark');
        $("#clientsBtn").attr('class', 'moduleBtn nav-link disabled');
        $("#inventoryBtn").attr('class', 'moduleBtn nav-link disabled');
        break;
      case "client":
        $("#rentalBtn").attr('class', 'moduleBtn nav-link disabled');
        $("#clientsBtn").attr('class', 'moduleBtn nav-link active btn-dark');
        $("#inventoryBtn").attr('class', 'moduleBtn nav-link disabled');
        break;
      case "inventory":
        $("#rentalBtn").attr('class', 'moduleBtn nav-link disabled');
        $("#clientsBtn").attr('class', 'moduleBtn nav-link disabled');
        $("#inventoryBtn").attr('class', 'moduleBtn nav-link active btn-dark');
        break;
    };
  }
};

$(".moduleBtn").on("click", function() {


  var button = this.name;
  console.log(button);
  menu.modules(button);
});
