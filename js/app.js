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
	$('.hadouken').show();
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