$(document).ready(function(){
    var supercarObject = [
        {
            "name" : "Litecoin",
            "shortName" : "LTC",
            "description" : "Cryptocurrency that enables instant payments to anyone in the world."
        }
    ]
    $.each(supercarObject, function(key, value){
        $("#result").append(key + ": " + value + '<br>');
    });
});