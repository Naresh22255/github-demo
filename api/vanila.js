// JS2 CA Vanila JavaScript API

let xhr = new XMLHttpRequest();

xhr.open(`GET`, ` https://www.amiiboapi.com/api/amiibo/?name=mario`, true);

xhr.onload = function() {
  if (this.status === 200) {
    let res = JSON.parse(this.responseText);
    console.log(res);
  }
};

xhr.send();
