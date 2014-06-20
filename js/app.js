$("document").ready(function(){

	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	});

	$(".ryu").mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	});

	$(".ryu").mousedown(function(){
		$(".ryu-ready").hide();
		playHadouken();
		$(".ryu-throwing").show();
		$(".hadouken").show().animate({left:"390px"}, 700, function(){
			$(this).hide();
			$(this).css({left:"-129px"});
		});
	});

	$(".ryu").mouseup(function(){
		$(".hadouken").stop().hide().css({left:"-129px"});
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$(this).keydown(function(event)
	{   
  		if ( event.which == 88 ) 
  		{
   			$(".ryu-still").hide();
		 	$(".ryu-ready").hide();
		 	$(".ryu-throwing").hide();
		 	$(".ryu-cool").show();
		 }
  	});

  	$(this).keyup(function(event){

  		$(".ryu-cool").hide();
  		$(".ryu-still").show();

  		isHovered = $(".ryu").is(":hover");

  		if(isHovered)
  		{
  			$(".ryu-still").hide();
  			$(".ryu-ready").show();
  		} 
  	});

});

function playHadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
	}