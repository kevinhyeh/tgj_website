var button = $('<button>');
var span = $('<span>').html('Start Design');
button.addClass('start-design');
button.attr('onclick', 'location.href="form.html"')
button.html(span);

$('#intro-button').html(button);

// header scroll function
if (window.location.href == "file:///Users/kevinyeh/Desktop/Desktop/the_graphic_jar/tgj_website/index.html") {
    $(document).on('scroll', function() {
        if ($(document).scrollTop()) {
            $('nav').addClass('scroll-change');
            $('#intro-button').empty();
            $('#nav-button').html(button);
            $('.tgj-logo').attr('src', 'assets/svg/tgj_new_logo.svg');
            $('h1').css('display', 'none');
            $('.nav-links').find('a').css('color', '#000');
        } else {
            $('nav').removeClass('scroll-change');
            $('#nav-button').empty();
            $('#intro-button').html(button);
            $('.tgj-logo').attr('src', 'assets/svg/tgj_new_logo(white).svg');
            $('h1').css('display', 'inline-block');
            $('.nav-links').find('a').css('color', '#fff');
        }
    });
        
}

// faq
$('.faq .symbol').html('&#43;');

$('.faq button').on('click', function() {
    if ($(this).attr("aria-expanded") == "false") {
        $('.symbol', this).html('&#8722;');
    } else {
        $('.symbol', this).html('&#43;');
    }
});

// // form
// $('#projectform').addClass('hide');
// $('#thankyou').addClass('hide');

// $('.projectsBut').on('click', function() {
//     $('#projects').addClass('hide');
//     $('#chosenproject').html($(this).html());
//     $('#projectform').removeClass('hide');
// });

// $('#backBut').on('click', function() {
//     event.preventDefault();
//     $('#projectform').addClass('hide');
//     $('#projects').removeClass('hide');
// });

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
    var newId = $('#contactFirstName').val() + " " + $('#contactLastName').val();
    database.ref('Contact_form').child(newId + " " + new Date()).set({
        a_name: newId,
        b_email: $('#contactEmail').val(),
        c_number: $('#contactNumber').val(),
        d_message: $('#contactDesc').val()
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