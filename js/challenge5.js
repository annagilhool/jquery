console.log("here")
var imgs = $("img");
var msg = "Hover over an image below."

imgs.mouseover(function(){
	$('#image').css("background-image" , 'url(' + '"' + $(this).attr('src') + '"' + ')');
	console.log($(this).attr('src'));
	$('#image').html($(this).attr('alt'));
});

imgs.focus(function(){
	$('#image').css("background-image" , 'url(' + '"' + $(this).attr('src') + '"' + ')');
	$('#image').html($(this).attr('alt'));
});

imgs.mouseleave(function() {
	$('#image').css("background-image", "url('')");
	$('#image').html(msg);
});

imgs.blur(function() {
	$('#image').css("background-image", "url('')");
	$('#image').html(msg);
});
