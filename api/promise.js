// JS2 CA Promise API

function promoApi() {
  fetch("https://www.amiiboapi.com/api/amiibo/?name=mario")
    .then(function(re) {
      console.log(re);
      return re.json();
    })
    .then(function (json1) {
     console.log(json1.amiibo)
    .catch(function(error) {
      console.log(error);
    });
}


