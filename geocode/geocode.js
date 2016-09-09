$(document).ready(function(){
    $('#address_submit').click(function(){
	var address = $('#address').val();
	$.get("https://maps.googleapis.com/maps/api/geocode/json?address=" 
          + address + "&key=AIzaSyC3R3K1u4SUKfreg_sr4_cVOId6EJE699s", function( data ){
	    var coords = data["results"][0]["geometry"]["location"];
	    $('#coordinates').html(coords["lat"] + ', ' + coords["lng"]);
        });
    });
})