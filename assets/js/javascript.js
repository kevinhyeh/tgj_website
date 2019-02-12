$('#nav-button').find('.start-design').css('display', 'none');

// header scroll function
// if (window.location.href == "file:///Users/kevinyeh/Desktop/Desktop/the_graphic_jar/tgj_website/index.html") {
$(document).on('scroll', function() {
  if ($(document).scrollTop()) {
    $('nav').addClass('scroll-change');
    $('#nav-button').find('.start-design').css('display', 'block');
    $('#intro-button').find('.start-design').css('display', 'none');
    $('.tgj-logo').attr('src', 'assets/svg/tgj_new_logo.svg');
    $('h1').css('display', 'none');
    $('.nav-links').find('a').css('color', '#000');
  } else {
    $('nav').removeClass('scroll-change');
    $('#nav-button').find('.start-design').css('display', 'none');
    $('#intro-button').find('.start-design').css('display', 'block');
    $('.tgj-logo').attr('src', 'assets/svg/tgj_new_logo(white).svg');
    $('h1').css('display', 'inline-block');
    $('.nav-links').find('a').css('color', '#fff');
  }
});
// }

$('.start-design').on('click', function() {
  window.open('https://tgj-project-design-gl6yc0gnm.now.sh');
});

// faq
$('.faq .symbol').html('&#43;');

$('.faq button').on('click', function() {
  if ($(this).attr("aria-expanded") == "false") {
    $('.symbol', this).html('&#8722;');
  } else {
    $('.symbol', this).html('&#43;');
  }
});

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAySZLurAbI-t0gFuyS0CJZzOR7lQN-p5Q",
  authDomain: "tgj-db.firebaseapp.com",
  databaseURL: "https://tgj-db.firebaseio.com",
  projectId: "tgj-db",
  storageBucket: "tgj-db.appspot.com",
  messagingSenderId: "95933339039"
};
firebase.initializeApp(config);
const database = firebase.database();

// contact form
$('.contact-form').submit(function(e) {
  e.preventDefault();
  const dateStamp = new Date().toString();
  const contactRef = database.ref('contacts');
  const contact = {
    dateTime: dateStamp,
    name: $('#contact-name').val(),
    email: $('#contact-email').val(),
    number: $('#contact-number').val(),
    description: $('#contact-desc').val()
  }
  if ($('#contact-email').val().indexOf('@') > -1) {
    $('.contact-form-contents').css('display', 'none');
    $('.contact-sent').css('display', 'block');
    contactRef.push(contact);
  } else {
    $('.error-msg').html('Please enter a valid email address');
  }
});

