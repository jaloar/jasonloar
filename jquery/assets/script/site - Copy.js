$(document).ready(function(){
    	$('.square').click(function(){
        	alert("Clicked!");
    		});
		});

$(document).ready(function(){
    	$('.square2').click(function(){
        	$(this).css("background", "green");
    		});
		});

$(document).ready(function(){
    	$('#circle').click(function(){
        	$("p").html("Clicked!");
    		});
		});

$(document).ready(function(){
    	$('.square2').hover(function(){
        	$(this).css("width", "400px");
    		});
		});