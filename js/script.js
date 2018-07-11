$(window).on("load", iniciar);


		function iniciar() {

				$(".overlay").fadeOut(1000);

			}

$(window).on("scroll", verMenu);

		let ultimoScroll = 0;

		function verMenu(){

			let scrollActual = $(window).scrollTop();

			if (scrollActual > ultimoScroll){

				$(".menu").addClass("oculto");
			}

			else{

				$(".menu").removeClass("oculto");
			}

			ultimoScroll = scrollActual;
		}


$(document).ready(function(){

	$(".advertencias").on("click", abrirModal);
	$(".botonModal").on("click", cerrarModal);
	$(".desplazar").on("click", desplazarse);

})

function desplazarse(){

		valor = $(this).data("nivel");

		let profundidad = $(valor).offset().top;

		let distancia = Math.abs($(window).scrollTop() - profundidad);

		$("html").animate({

			scrollTop: profundidad
			}, distancia * .4)
	
	};

function abrirModal(){


	$(".fondoModal").fadeIn(200, function(){

		$(".ventanaModal").fadeIn(200);
		$("#consejos").removeClass("invisibles");

	});
}

function cerrarModal(){

	$(".ventanaModal").fadeOut(200, function(){

		$(".fondoModal").fadeOut(200);
		$("#consejos").addClass("invisibles");
	});
}