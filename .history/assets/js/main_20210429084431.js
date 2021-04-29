$(document).ready(function(){
    var supercarObject = {
        
    }
    $.each(supercarObject, function(key, value){
        $("#result").append(key + ": " + value + '<br>');
    });
});