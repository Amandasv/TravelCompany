$( document ).ready(function() {
    
    $('#nav-toggle').click(function(){
	    $('.nav-header').toggleClass('open-dropdown');
	});
});

$(function() { 
	$('#banner').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

});