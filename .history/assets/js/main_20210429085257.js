$(document).ready(function(){
    var array = [
        {
            "name" : "Litecoin",
            "shortName" : "LTC",
            "description" : "Cryptocurrency that enables instant payments to anyone in the world.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/ltc.png"
        },
        {
            "name" : "Bitcoin",
            "shortName" : "BTC",
            "description" : "Digital currency in which a record of transactions is maintained.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/btc.png"
        },
        {
            "name" : "Ethereum",
            "shortName" : "ETH",
            "description" : "Blockchain technology to create and run decentralized digital applications.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/eth.png"
        }
    ]
    $.each(array, function(key, value){
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