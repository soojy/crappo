$(document).ready(function(){
    var supercarObject = [
        {
            "name" : "Litecoin",
            "shortName" : "LTC",
            "description" : "Cryptocurrency that enables instant payments to anyone in the world.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/ltc.png"
        }
        {
            "name" : "Bitcoin",
            "shortName" : "BTC",
            "description" : "Digital currency in which a record of transactions is maintained.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/btc.png"
        }
        {
            "name" : "Ethereum",
            "shortName" : "ETH",
            "description" : "Blockchain technology to create and run decentralized digital applications.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/eth.png"
        }
    ]
    $.each(supercarObject, function(key, value){
        $("#result").append(key + ": " + value + '<br>');
    });
});