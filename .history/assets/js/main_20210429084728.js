$(document).ready(function(){
    var supercarObject = [
        {
            "name" : "Litecoin",
            "shortName" : "LTC",
            "description" : "Cryptocurrency that enables instant payments to anyone in the world.",
            "iconUrl" : "http://127.0.0.1:5500/assets/img/Icons/ltc.png"
        }
    ]
    $.each(supercarObject, function(key, value){
        $("#result").append(key + ": " + value + '<br>');
    });
});