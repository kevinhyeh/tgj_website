var newBut = $('<a>').attr('href', 'form.html');
var button = $('<button>');
var span = $('<span>').html('Start Design');
newBut.html(button);
button.html(span);
button.addClass('startbutton');

$('#sec1But').html(newBut);
$('#contactstartbutton').html(newBut);

// header scroll function
if (window.location.href == "file:///Users/kevinyeh/Desktop/the_graphic_jar/tgj_website/index.html") {
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
}

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

// form
$('#projectform').addClass('hide');
$('#thankyou').addClass('hide');

$('.projectsBut').on('click', function() {
    $('#projects').addClass('hide');
    $('#chosenproject').html($(this).html());
    $('#projectform').removeClass('hide');
});

$('#backBut').on('click', function() {
    event.preventDefault();
    $('#projectform').addClass('hide');
    $('#projects').removeClass('hide');
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAw02WPgWaGk7EV1kK1CLJOk_08Tb2eFTM",
    authDomain: "tgj-client-database.firebaseapp.com",
    databaseURL: "https://tgj-client-database.firebaseio.com",
    projectId: "tgj-client-database",
    storageBucket: "tgj-client-database.appspot.com",
    messagingSenderId: "900153673961"
};
firebase.initializeApp(config);
var database = firebase.database();

$('#contactsub').on('click', function() {
    event.preventDefault();
    var newId = $('#contactname').val();
    database.ref('Contact_form').child(newId).set({
        a_name: $('#contactname').val(),
        b_email: $('#contactemail').val(),
        c_message: $('#contactmessage').val()
    });
});

$('#designsub').on('click', function() {
    event.preventDefault();
    var newId = $('#userFirstName').val() + " " + $('#userLastName').val();
    if ($('#userFirstName').val().length > 1 && $('#userLastName').val().length > 1) {
        database.ref('Design_form').child(newId + " " + new Date()).set({
            a_name: newId,
            b_project: $('#chosenproject').html(),
            c_number: $('#userNumber').val(),
            d_company: $('#userCompany').val(),
            e_email: $('#userEmail').val(),
            f_timeline: $('#userTimeline').val(),
            g_budget: $('#userBudget').val(),
            h_description: $('#userDesc').val()
        });
        $('#projectform').addClass('hide');
        $('#thankyou').removeClass('hide');
        $('.fbname').html($('#userFirstName').val() + " " + $('#userLastName').val());
        $('#fbproj').html($('#chosenproject').html());
        $('#fbnumber').html($('#userNumber').val());
        $('#fbcompany').html($('#userCompany').val());
        $('#fbemail').html($('#userEmail').val());
        $('#fbtimeline').html($('#userTimeline').val());
        $('#fbbudget').html($('#userBudget').val());
        $('#fbdesc').html($('#userDesc').val());
    } else {
        var warning = $('<p>').html('Make sure you fill out everything below.');
        warning.addClass('warning');
        $('#projectform').prepend(warning);
    }
});








// auto scroll function
// $(document).on('click', '.top', function() {
//     $('html, body').animate({ scrollTop: 0 }, 1000);
// });