var bg = function(){
	console.log('here');
	$('body').css('background' , 'url("img/z1.png") repeat');
	$('#zebras').html('Forever')
};

$(function(){console.log('here')
$('#zebras').on('click', bg);
});