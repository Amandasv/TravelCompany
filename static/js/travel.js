$( document ).ready(function() {
    
    $('#nav-toggle').click(function(){
	    $('.nav-header').toggleClass('open-dropdown');
	});

    $(function() { 
		$('#banner').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear',
			autoplay: true,
			autoplaySpeed: 9000,
		});

	});

});

$('#form').submit(function(){
	var name = $('#name');
	var email = $('#email');
	var mensagem = $('#mensagem');

	if (name.value != "" && email.value != "" && mensagem.value != "") {
		alert("Formulário enviado com sucesso!")
	}
});


