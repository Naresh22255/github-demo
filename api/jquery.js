// JS2 CA Jquery API

$(document).ready(function() {
  let url = "https://www.amiiboapi.com/api/amiibo/?name=mario";
  $.ajax({
    type: "GET",
    url: "https://www.amiiboapi.com/api/amiibo/?name=mario",
    success: function(data) {
      console.log("success", data);
    }
  });
});
