
  //Updates the title to match the actual page.
  $("#title").text("Clients | RubykIO");

  var API = {
    getExamples: function() {
      return $.ajax({
        url: "api/clients",
        type: "GET"
      });
    }
  };
  //Add your code here.
  var data;
  API.getExamples().then(function(data) {
    console.log(data);
  });
