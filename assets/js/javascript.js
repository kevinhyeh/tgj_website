var newBut = $('<a>').attr('href', 'form.html');
var button = $('<button>');
var span = $('<span>').html('Start Design');
newBut.html(button);
button.html(span);
button.addClass('startbutton');


$('#sec1But').html(newBut);

$(document).on('scroll', function() {
    newBut = $('<a>').attr('href', 'form.html');
    button = $('<button>');
    span = $('<span>').html('Start Design');
    newBut.html(button);
    button.html(span);
    button.addClass('startbutton');
    if ($(document).scrollTop()) {
        $('header').addClass('color');
        $('#headerBut').html(newBut);
        $('#sec1But').empty();
        $('#logo').attr('src', 'assets/svg/tgjlogoheader2.svg');
    } else {
        $('header').removeClass('color');
        $('#headerBut').empty();
        $('#sec1But').html(newBut);
        $('#logo').attr('src', 'assets/svg/tgjlogoheader(white)2.svg');
    }
});

$(document).on('click', '.top', function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

$(document).on('click', '#steponebutton', function() {
	$('#steptext > p').removeClass('active');
	$('#stepone').addClass('active');
});

$(document).on('click', '#steptwobutton', function() {
	$('#steptext > p').removeClass('active');
	$('#steptwo').addClass('active');
})

$(document).on('click', '#stepthreebutton', function() {
	$('#steptext > p').removeClass('active');
	$('#stepthree').addClass('active');
})