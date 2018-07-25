var newBut = $('<a>').attr('href', 'form.html');
var button = $('<button>');
var span = $('<span>').html('Start Design');
newBut.html(button);
button.html(span);
button.addClass('startbutton');
 

$('#sec1But').html(newBut);

// header scroll function
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

$('#steponebutton').on('click', function() {
    $('.process').removeClass('processactive');
    $(this).addClass('processactive');
    $('#steptwoprocess, #stepthreeprocess').addClass('active');
    $('#steponeprocess').removeClass('active');
});

$('#steptwobutton').on('click', function() {
    $('.process').removeClass('processactive');
    $(this).addClass('processactive');
    $('#steponeprocess, #stepthreeprocess').addClass('active');
    $('#steptwoprocess').removeClass('active');
});

$('#stepthreebutton').on('click', function() {
    $('.process').removeClass('processactive');
    $(this).addClass('processactive');
    $('#steponeprocess, #steptwoprocess').addClass('active');
    $('#stepthreeprocess').removeClass('active');
});

$('#chooseproject').hide();
// form page start button
$(document).on('click', '#startdesign', function() {
    $('#designstartbutton').hide();
    $('#chooseproject').show();
});







// auto scroll function
// $(document).on('click', '.top', function() {
//     $('html, body').animate({ scrollTop: 0 }, 1000);
// });