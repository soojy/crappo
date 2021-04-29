
let array
$.ajax({
  type: "GET",
  url: "http://localhost:3060/list",
  success: function (data) {
    array = data
  },
  error: function (request, error) {
    console.log(arguments);
    alert(" Can't do because: " + error);
},
});
$(document).ready(function () {
 
  $.each(array, function (key, value) {
    $("#result").append(`
        <div class="item">
        <img src="http://localhost:3060/img/${value.iconUrl}" alt="btc" class="icon" />
        <h3 class="item-title">${value.name}<span>${value.shortName}</span></h3>
          <h4 class="item-subtitle">
          ${value.description}
          </h4>
          <a href="#" class="crypto-btn">
            <div class="text"><div class="btn-text">Start mining</div></div>
            <div class="arrow">
              <img src="./assets/img/arrow_right.svg" alt="arrow_right" />
            </div>
          </a>
        </div>
        `);
  });
});
