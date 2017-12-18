
$(document).ready(function(){
  $("#btn").click(function(){
	var comment= $("#comment").val();
  $("#comment").val("");

  $("#comment-here").append("<div class='comment-div'><img class='photo-chat'src='prueba/proyecto/img/rodulfo.jpg'><h5 class='name-user'>Rudolf Prieto</h5><p>"+comment+"</p><span class='date'>" + new Date().toLocaleTimeString()+ "</span></div>");


  });

  for(i=0 ; i< friends.length ; i++){
  	for (n=0;n<friends[i].message.length;n++){
		$(".section-user").append("<div class='div-input-search'><img "+friends[i].photo+" class='main-user-photo'><span class='name'>"+friends[i].name+"</span><h6 class='litle-chat'>"+friends[i].message[n]+"</h6></div>");
	

	};
  };

  $(".div-input-search").click(function(){
  	var nini=$(this).children("img").attr("alt");
  	for(i=0;i< friends.length; i++){
  		if( nini== friends[i].name){
  			$(".hide-photo1").empty();
  			$(".hide-paragraph1").empty();
  			$(".comment-chat").empty();
  			$(".hide-photo1").append("<img "+friends[i].photo+" class='main-user-photo logo'>");
  			$(".hide-paragraph1").append("<h5>"+friends[i].name+"</h5>");


  			for (var j = 0; j < friends[i].message.length; j++) {
  				$(".comment-chat").append("<div class='comment-div'><img "+friends[i].photo+" class='photo-chat'><h5 class='name-user-2'>"+friends[i].name+"</h5><p>"+friends[i].message[j]+"</p></div>");
  				
  			};

  		};
  	};


  });
   

	
});

