// $.ajax({
//   type: "GET",
//   url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD",
//   Headers: {
//     "X-CMC_PRO_API_KEY": "dd3e3af6-1d43-4fbc-81f8-82d1e3205481",
//   },
//   success: function (data) {
//     alert(data);
//   },
//   error: function (request, error) {
//     console.log(arguments);
//     alert(" Can't do because: " + error);
// },
// });

$(document).ready(function () {
  $.each(array, function (key, value) {
    $("#result").append(`
        <div class="item">
        <img src="${value.iconUrl}" alt="btc" class="icon" />
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
