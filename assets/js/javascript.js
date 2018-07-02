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
	} else {
		$('nav > ul').removeClass('color')
	}
});