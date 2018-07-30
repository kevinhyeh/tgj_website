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

// process slideshow
    var steps = 1;

    function differentSteps() {
        if (steps == 1) {
            $('#stepstitle').html("1. Choose Your Project");
            $('#stepsdesc').html("First things first, we need to know what project you would like to start with us.");
            $('#boxone').addClass('activestep');
            $('#contentone').removeClass('showprocess').fadeIn();
            $('#contentone div').removeClass('showprocess');
        }
        if (steps == 2) {
            $('#stepstitle').empty();
            $('#stepstitle').html("2. Take Our Survey");
            $('#stepsdesc').html("First things first, we need to know what project you would like to start with us.");
            $('#boxtwo').addClass('activestep');
            $('#contenttwo').removeClass('showprocess');
            $('#contenttwo div').removeClass('showprocess');
        }
        if (steps == 3) {
            $('#stepstitle').html("3. Submit And Wait");
            $('#stepsdesc').html("First things first, we need to know what project you would like to start with us.");
            $('#boxthree').addClass('activestep');
            $('#contentthree').removeClass('showprocess');
        }
    }

    differentSteps();

    $('#prev, #next, #boxone, #boxtwo, #boxthree, #rightarrow, #leftarrow').on('click', function() {
        $('#vbcontent div').addClass('showprocess');
        $('#diffsteps .circles').removeClass('activestep');
        if ($(this).attr("id") == "prev" || $(this).attr("id") == "leftarrow") {
            steps--;
            if (steps == 0) {
                steps = 3;
            }
        }
        if ($(this).attr("id") == "next" || $(this).attr("id") == "rightarrow") {
            steps++;
            if (steps == 4) {
                steps = 1;
            }
        }
        if ($(this).attr("id") == "boxone") {
            steps = 1;
        }
        if ($(this).attr("id") == "boxtwo") {
            steps = 2;
        }
        if ($(this).attr("id") == "boxthree") {
            steps = 3;
        }
        differentSteps();
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