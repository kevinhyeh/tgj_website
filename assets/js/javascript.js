var newBut = $('<a>').attr('href', 'form.html');
var button = $('<button>');
var span = $('<span>').html('Start Design');
newBut.html(button);
button.html(span);


$('#sec1But').html(newBut);

$(document).on('scroll', function() {
    newBut = $('<a>').attr('href', 'form.html');
    button = $('<button>');
    span = $('<span>').html('Start Design');
    newBut.html(button);
    button.html(span);
    if ($(document).scrollTop()) {
        $('header').addClass('color');
        $('#headerBut').html(newBut);
        $('#sec1But').empty();
    } else {
        $('header').removeClass('color');
        $('#headerBut').empty();
        $('#sec1But').html(newBut);
    }
});

$(document).on('click', '.top', function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});