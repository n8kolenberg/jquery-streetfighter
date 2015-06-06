$(document).ready( function () {

$('.ryu').mouseenter(function(){
	$('.ryu-all').hide();
	$('.ryu-ready').show();
})
.mouseleave(function(){
	$('.ryu-all').hide();
	$('.ryu-still').show();
});


// $('.ryu').hover( function(){
// 	$('.ryu-still').hide();
// 	$('.ryu-ready').show();
// }, function(){
// 	$('.ryu-still').show();
// 	$('.ryu-ready').hide();
// }); //End hover


$('.ryu').mousedown(function(){
	playHadouken();
	$('.ryu-all').hide();
	//ryu throws hadouken next
	$('.ryu-throwing').show(); 
	$('.hadouken').finish().show()
			      .animate({left : "+=720px"}, 500, function(){
						$(this).stop();
						$(this).hide();
						$(this).css({left : "520px"});
	}); //End hadouken animate
}) //End mousedown 

.mouseup(function(){
	$('.ryu-all').hide();
	$('.ryu-still').show();
})	//End mouseup

}); //End ready


function playHadouken() {
	$('#hadouken-sound')[0].volume =0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}


function playCool() {
	$('#cool')[0].volume=0.5;
	// $('#cool')[0].load();
	$('#cool')[0].play();
}

//Cool pose
$(document).keydown(function(event){
	if(event.which === 88) {
		$('.ryu-all').hide();
		playCool();
		$('.ryu-cool').show();
	}
})
.keyup(function(event){
	if(event.which === 88) {
		$('#cool')[0].pause;
		$('#cool')[0].load();
		$('.ryu-all').hide();
		$('.ryu-still').show();
		
	}
});
