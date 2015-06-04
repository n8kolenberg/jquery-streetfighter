$('document').ready( function () {

// $('.ryu').mouseenter(function(){
// 	$('.ryu-still').hide();
// 	$('.ryu-ready').show();
// })
// .mouseleave(function(){
// 	$('.ryu-still').show();
// 	$('.ryu-ready').hide();
// });



$('.ryu').hover( function(){
	$('.ryu-still').hide();
	$('.ryu-ready').show();
}, function(){
	$('.ryu-still').show();
	$('.ryu-ready').hide();
}); //End hover


$('.ryu').mousedown(function(){
	$('.ryu-ready').hide();
	//ryu throws hadouken next
	$('.ryu-throwing').show(); 
	//play sound
	$('.hadouken').finish().show().animate({left : "+=720px"}, 500, function(){
		$(this).hide();
		$(this).css({left : "520px"});
	}); //End hadouken animate

	//animate hadouken to right of screen
	console.log("Mousedown");
}) //End mousedown 

.mouseup(function(){
	$('.ryu-ready').show();
	//ryu goes back to ready position
	$('.ryu-throwing').hide();
	console.log("Mouseup");
})	//End mouseup

}); //End ready