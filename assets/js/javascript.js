// function parallax(){
//     var scrolled = $(window).scrollTop();
//     $('#intro').css('top', -(scrolled) + 'px');
// }

// $(window).scroll(function(e){
// 	parallax();
// });

$(document).on('scroll', function() {
	if($(document).scrollTop()) {
		$('nav > ul').addClass('color');
		$('ul > div').addClass('top');
	} else {
		$('nav > ul').removeClass('color');
		$('ul > div').removeClass('top');
	}
});

$(document).on('click', '.top', function() {
	$('html, body').animate({scrollTop: 0}, 1000);
});