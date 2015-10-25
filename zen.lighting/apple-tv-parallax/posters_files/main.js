var start_x = null;
var start_y = null;

function prefixifyer(sel,prop,val){	
	$(""+sel+"").css("-webkit-"+prop+"",""+val+"");	
	$(""+sel+"").css("-moz-"+prop+"",""+val+"");	
	$(""+sel+"").css("-o-"+prop+"",""+val+"");	
	$(""+sel+"").css(""+prop+"",""+val+"");	
}

function resetPoster(){
	

	prefixifyer(".poster, .poster img","transition","all .3s ease-out");	
	
	$(".shader").css("opacity",0);
	prefixifyer(".poster","transform","rotateY(0deg) rotateX(0deg)");	
	prefixifyer(".layer_2 img, .layer_3 img, .layer_4 img","transform","translateX(0px) translateY(0px)");	
	prefixifyer(".poster_container","transform","scale(1,1)");	

}

function noTransition(){
	prefixifyer(".poster img, .poster","transition","all 0s ease-out");		
}

$(document).ready(function() {     	

	if($('html').hasClass('touch')){
		$(".poster").bind('touchmove', function (e){
			noTransition();	
			e.preventDefault();
			var currentY = e.originalEvent.touches[0].clientY;
			var currentX = e.originalEvent.touches[0].clientX;
			if(start_y == null){ start_y = currentY};
		 	if(start_x == null){ start_x = currentX};
			newY = (start_y - currentY);
			newX = (start_x - currentX);
			prefixifyer(".poster","transform","rotateY("+((newX*.05) * -1)+"deg) rotateX("+(newY*.05)+"deg)");
			newX = (start_y - currentY)*-.025;
			newY = (start_x - currentX) * .025;
			prefixifyer(".layer_2 img","transform","translateX("+((newY*.25)*-1)+"px) translateY("+(newX*.25)+"px)");
			prefixifyer(".layer_3 img","transform","translateX("+((newY*.5)*-1)+"px) translateY("+(newX*.5)+"px)");
			prefixifyer(".layer_4 img","transform","translateX("+((newY*.8)*-1)+"px) translateY("+((newX*.8))+"px)");			


			// 		$(".shader").css("opacity","1");

			// if(newX < 0){
			// 	gloss = (newX*.25) * -.5;
			// 		if(gloss > .40){
			// 			gloss = .4;
			// 		}

			// 	angle = newY;
			// 	if(angle >= 5){
			// 		angle = 5;
			// 	}
			// 	if(angle <= -5){
			// 		angle = -5;
			// 	}

			// 	$(".shader").css("background","linear-gradient("+(180+(angle*-10))+"deg, rgba(255,255,255,.0), rgba(255,255,255,"+gloss+"))");
			// }

			// if(newX > 0){

			// 	shade = (newX*.1);
			// 	if(shade > .20){
			// 		shade = .2;
			// 	}
			// 	angle = newY;
			// 	if(angle >= 5){
			// 		angle = 5;
			// 	}
			// 	if(angle <= -5){
			// 		angle = -5;
			// 	}
				
			// 	$(".shader").css("background","linear-gradient("+(180+(angle*10))+"deg, rgba(0,0,0,"+shade+"), rgba(255,255,255,.0))");

			// }


		});

		$(".poster").bind('touchend', function (e){
			e.preventDefault();
			start_x = null;
			start_y = null;
		    resetPoster();
		});
	}
	
	if($('html').hasClass('no-touch')){

		$(document).mousemove(function(e) { 
			
			//on mousemove, make the poster scale up a bit
			if($('html').hasClass('no-touch')){
				prefixifyer(".poster_container","transform","scale(1.1,1.1)");		
			}
			
			//get the center of the poster/window
			var position = $(".poster").position();
			logoCenterX = $(window).width()/2;
			logoCenterY = $(window).height()/2;

			//get current coordinates
			var y = e.pageY;	
			var x = e.pageX;    

			//for rotation
			xRotate = (x-logoCenterX)*.02;
			yRotate = (logoCenterY - y)*.02;

			$(".shader").css("opacity","1");

			if(yRotate < 0){
				gloss = (yRotate*.25) * -.5;
				if(gloss > .40){
					gloss = .4;
				}

				angle = xRotate;
				if(angle >= 5){
					angle = 5;
				}
				if(angle <= -5){
					angle = -5;
				}

				$(".shader").css("background","linear-gradient("+(180+(angle*-10))+"deg, rgba(255,255,255,.0), rgba(255,255,255,"+gloss+"))");
			}

			if(yRotate > 0){
				shade = (yRotate*.1);
				if(shade > .20){
					shade = .2;
				}
				angle = xRotate;
				if(angle >= 5){
					angle = 5;
				}
				if(angle <= -5){
					angle = -5;
				}
				
				$(".shader").css("background","linear-gradient("+(180+(angle*10))+"deg, rgba(0,0,0,"+shade+"), rgba(255,255,255,.0))");

			}
			

			//remove transitions while animating	
			noTransition();
			
			// rotate the whole poster		
			prefixifyer(".poster","transform","rotateY("+(xRotate*-1)+"deg) rotateX("+(yRotate*-1)+"deg)");
			
			
			//shift individutal layers on X,Y axis for parallax effect
			prefixifyer(".layer_2 img","transform","translateX("+((xRotate*.25)*-1)+"px) translateY("+(yRotate*.25)+"px)");
			prefixifyer(".layer_3 img","transform","translateX("+((xRotate*.3)*-1)+"px) translateY("+(yRotate*.3)+"px)");
			prefixifyer(".layer_4 img","transform","translateX("+((xRotate*.5)*-1)+"px) translateY("+(yRotate*.5)+"px)");
				  
		});     
		
		$(document).mouseleave(function() {
			resetPoster();
		});

	}

	//change the active poster
	$(".poster_sm").click(function(){
		if($(this).hasClass('active') == 0){
			$(this).toggleClass('active');
			$(this).siblings().removeClass('active');
			var show = ($(this).data( "poster" ));	
			$(".active_poster").toggleClass("active_poster");		
			$('#'+show+'').addClass("active_poster");
			
		}
	})
});                             
