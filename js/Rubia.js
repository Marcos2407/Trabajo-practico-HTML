$(document).ready(
	
	//al clickear una imagen
	$(".yo").on("click", function () {
		//cambia su estilo
		$(this).toggleClass("selected");
		$(".pic").toggleClass("pick");
		$(".par").toggleClass("parrafin");
		$(".tit").toggleClass("titulin");
	})
);

	$("#button").on("click", function() {

		// mostrar nav.computadora
		$(".aca").slideToggle(500);
		// Para ocultar: .hide()

	});