$(document).ready( function () {

playGame();
intro();

	function playGame() {

		// $('.ryu').mouseenter(function(){
		// 	$('.ryu-all').hide();
		// 	$('.ryu-ready').show();
		// })
		// .mouseleave(function(){
		// 	$('.ryu-all').hide();
		// 	$('.ryu-still').show();
		// });

		$('.ryu').hover( function(){
		$('.ryu-all').hide();
		$('.ryu-ready').show();
			}, function(){
			$('.ryu-all').hide();
			$('.ryu-still').show();
		}); //End hover


		$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-all').hide();
		//ryu throws hadouken next
		$('.ryu-throwing').show(); 
		$('.hadouken').finish().show()
				      .animate({left : "+=700px"}, 500, function(){
							$(this).stop();
							$(this).hide();
							$(this).css({left : "520px"});
		}); //End hadouken animate
		}) //End mousedown 

		.mouseup(function(){
		$('.ryu-all').hide();
		$('.ryu-still').show();
		})	//End mouseup

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
		}); //End keydown/keyup event handlers

	} // End playGame

}); //End document.ready


function intro() {
	playIntroTheme();
	$('.streetfighter-logo').fadeIn(1500, function(){
		$('.streetfighter-logo').fadeOut(1000, function(){
			$('#how-to').fadeIn(1500);
		}) //End fadeOut
	}); //End fadeIn

} //End intro


//To play Hadouken sound
function playHadouken() {
$('#hadouken-sound')[0].volume =0.5;
$('#hadouken-sound')[0].load();
$('#hadouken-sound')[0].play();
}

//To play cool pose theme
function playCool() {
$('#intro-theme')[0].pause();
$('#cool')[0].volume=0.5;
// $('#cool')[0].load();
$('#cool')[0].play();
}

//To play intro theme
function playIntroTheme() {
$('#intro-theme')[0].volume=0.5;
// $('#intro-theme')[0].load();
$('#intro-theme')[0].play();
}

