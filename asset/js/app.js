
$(document).ready(function(){
  $("#btn").click(function(){
	var comment= $("#comment").val();
  $("#comment").val("");

  $("#comment-here").append("<div class='comment-div'><img class='photo-chat'src='prueba/proyecto/img/rodulfo.jpg'><h5 class='name-user'>Rudolf Prieto</h5><p>"+comment+"</p><span class='date'>" + new Date().toLocaleTimeString()+ "</span></div>");


  });

	$("#ana-maria").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/anamaria.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Ana María</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/anamaria.jpg'><h5 class='name-user-2'>Ana Maria</h5><p>que estas haciendo?</p></div>");

	});

	$("#lab-chile").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/logocodeacademy.png' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Laboratoria Chile</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/anamaria.jpg'><h5 class='name-user-2'>Ana Maria</h5><p>y que paso?</p></div>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/mariana.jpg'><h5 class='name-user-3'>Mariana</h5><p>con quien? con rudolf?</p></div>");

	});
 
	$("#aldo").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/aldo.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Aldo</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/aldo.jpg'><h5 class='name-user-2'>Aldo</h5><p>si, la mely es cool</p></div>");

	});

	$("#gian").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/gian.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Gian</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/gian.jpg'><h5 class='name-user-2'>Gian</h5><p>oye. que calor</p></div>");


	});


 	$("#jose").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/jose.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Jose</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/Jose.jpg'><h5 class='name-user-2'>Jose</h5><p>what???</p></div>");


	});

 	$("#katy").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/katy.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Katy</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/katy.jpg'><h5 class='name-user-2'>Katy</h5><p>no creo</p></div>");


	});

	$("#mariana").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/mariana.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Mariana</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/mariana.jpg'><h5 class='name-user-2'>Mariana</h5><p>estas?</p></div>");


	});


	$("#maria-paula").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/mariapaula.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Maria Paula</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/mariapaula.jpg'><h5 class='name-user-2'>Maria Paula</h5><p>jajajajaja</p></div>");


	});

	$("#raymi").click(function(){
		$(".hide-hide").empty();
		$("#comment-here").empty();
		$(".static").empty();
		$(".hide-photo1").append("<img src='prueba/proyecto/img/raymi.jpg' class='main-user-photo logo hide-hide'>");
		$(".hide-paragraph1").append("</div class='hide-hide'><h5>Raymi</h5>");
		$("#comment-here").append("<div class='comment-div static'><img class='photo-chat' src='prueba/proyecto/img/raymi.jpg'><h5 class='name-user-2'>Raymi</h5><p>el reto es hasta hoy</p></div>");


	});

});

