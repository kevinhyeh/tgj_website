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
        $('#stepsdesc').html("First things first, we need to know what project you would like to start with.<br><br> From logos to flyers to web design, we can do anything branding!");
        $('#boxone').addClass('activestep');
        $('#contentone').addClass('showprocess');
        $('#contentone div').addClass('showprocess');
    }
    if (steps == 2) {
        $('#stepstitle').empty();
        $('#stepstitle').html("2. Take Our Survey");
        $('#stepsdesc').html("Always have communication problems with freelancers?<br><br> Fill out our user friendly survey which takes less than 10 minutes!");
        $('#boxtwo').addClass('activestep');
        $('#contenttwo').addClass('showprocess');
        $('#contenttwo div').addClass('showprocess');
    }
    if (steps == 3) {
        $('#stepstitle').html("3. Submit And Wait");
        $('#stepsdesc').html("That's it! We have all the information we need to start your sweet project.<br><br> Give us 24 hrs and we'll reach out to set up a free consultation meeting with you!");
        $('#boxthree').addClass('activestep');
        $('#contentthree').addClass('showprocess');
    }
}

differentSteps();

$('#prev, #next, #boxone, #boxtwo, #boxthree, #rightarrow, #leftarrow').on('click', function() {
    $('#vbcontent div').removeClass('showprocess');
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

// faq
$('#sec4 button').on('click', function() {
    $('#sec4 button').removeClass('changeborder');
    if ($(this).attr("aria-expanded") == "false") {
        $(this).addClass('changeborder');
        // $(this ".card-body").addClass('cardchange');
    }
});









// auto scroll function
// $(document).on('click', '.top', function() {
//     $('html, body').animate({ scrollTop: 0 }, 1000);
// });