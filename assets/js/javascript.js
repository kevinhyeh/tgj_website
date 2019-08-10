const mainPages = window.location.href == "file:///Users/kevinyeh/Desktop/Desktop/the_graphic_jar/tgj_website/index.html" || window.location.href == "file:///Users/kevinyeh/Desktop/Desktop/the_graphic_jar/tgj_website/projects.html" || window.location.href == "file:///Users/kevinyeh/Desktop/Desktop/the_graphic_jar/tgj_website/contact.html"

//////////////
// nav bar
$('#nav-button').find('.start-design').css('display', 'none');

// header scroll function
$(document).on('scroll', function() {
  if ($(document).scrollTop()) {
    $('nav').addClass('scroll-change');
    $('#nav-button').find('.start-design').css('display', 'block');
    $('#intro-button').find('.start-design').css('display', 'none');
    if (mainPages) {
      $('.nav_brand-logo').attr('src', 'assets/svg/tgj_new_logo.svg');
    } else {
      $('.nav_brand-logo').attr('src', '../../assets/svg/tgj_new_logo.svg');
    }
    $('.nav_brand-name').css('display', 'none');
    $('.nav-links').find('a').css('color', '#000');
  } else {
    $('nav').removeClass('scroll-change');
    $('#nav-button').find('.start-design').css('display', 'none');
    $('#intro-button').find('.start-design').css('display', 'block');
    if (window.matchMedia("(min-width: 781px)").matches && mainPages) {
      $('.nav_brand-logo').attr('src', 'assets/svg/tgj_new_logo(white).svg');
    } else if (window.matchMedia("(min-width: 781px)").matches) {
      $('.nav_brand-logo').attr('src', '../../assets/svg/tgj_new_logo(white).svg');
    }
    $('.nav_brand-name').css('display', 'inline-block');
    $('.nav-links').find('a').css('color', '#fff');
  }
});
//////////////

// contact us submit
$('.contact_form-contents').on('submit', function() {
	$(this).addClass('hidden');
	$('.contact-sent').removeClass('hidden');
})

// var initialText
// $('.projects_sec-image').hover(function(e) {
// 	console.log('e', e.target.id)
// 	initialText = e.target.innerText
// 	switch (e.target.id) {
// 		case 'nancy fareed moreno': 
// 			$(this).find('p').text('Hello');
// 		break
// 		case 'tgj-2': 
// 			$(this).find('p').text('bye');
// 		break
// 	}
// }, function() {
// 	$(this).find('p').text(initialText)
// })

///////////////
// ad banner
// function loadBanner() {
//   var div = $('<div>');
//   var img = $('<img>');
//   var button = $('<button>');
//   div.html(img);
//   div.append(button);
//   img.attr('src', 'assets/images/carousel1.png');
//   img.addClass('banner-image');
//   div.addClass('banner');
//   button.html('Continue to site');
//   button.addClass('banner-button');
//   $('body').prepend(div);
//   $('.banner-button').on('click', function() {
//     $('.banner').css('display', 'none');
//   });
// };

// if (window.location.href == "file:///Users/kevinyeh/Desktop/Desktop/the_graphic_jar/tgj_website/index.html") {
//   $(document).ready(function() {
//     setTimeout(loadBanner, 5000);
//     // loadBanner();
//   });
// }
//////////////

//////////////
// projects change
function removeAnimation() {
  $('.client__bg').removeClass('run-animation-1');
  $('.client__image').removeClass('run-animation-2');
}

function addAnimation() {
  $('.client__bg').addClass('run-animation-1');
  $('.client__image').addClass('run-animation-2');
}

function changeProject(color, background, website, title, desc) {
  $('.client__bg').css('background-color', color);
  $('.client__image').css('background-image', background);
  addAnimation();
  $('.client__info-link').attr('href', website);
  $('.client__info-name').html(title);
  $('.client__info-desc').html(desc);
};

setTimeout(removeAnimation, 1000);

$('.client__project').on('click', function() {
  $('.client__project').removeClass('project-active');
  $(this).addClass('project-active');
  if ($(this).attr('id') === 'project-1') {
    changeProject('#c78f58', 'url("assets/images/projects/project-1/project-1-bg.jpg")', 'public/clients-page/tell-their-stories.html', 'Tell Their Stories', 'Tell their Stories is a multi-media project that aims to give a voice to individuals who have been affected by mass incarceration.');
  } else if ($(this).attr('id') === 'project-2') {
    changeProject('#aa4f51', 'url("assets/images/projects/project-2/project-2-bg.jpg")', 'public/clients-page/green-goddess-gardens.html', 'Green Goddess Gardens', 'hello');
  } else if ($(this).attr('id') === 'project-3') {
    changeProject('#ac8c66', 'url("assets/images/projects/project-3/project-3-bg.jpg")', 'public/clients-page/the-forest-floor.html', 'The Forest Floor', 'The Forest Floor wanted a logo that represents their brand and had the similar feel to the National Forest Sign that we all know and love.');
  } else if ($(this).attr('id') === 'project-4') {
    changeProject('#499b04', 'url("assets/images/projects/project-4/project-4-bg.jpg")', 'public/clients-page/gusto-di-roma.html', 'Gusto di Roma', 'Eating authentic Italian food at home can be simple. I personally select a variety of ready-to-eat small bites and mail flavors of Italy to you once a month.');
  }
  setTimeout(removeAnimation, 1000);
})
//////////////

//////////////
// // project builder link
// $('.start-design').on('click', function() {
//   window.open('https://tgj-project-builder-aw9dgwqe7.now.sh');
// });
//////////////

//////////////
// logo change
function logoChange(x) {
  if (x.matches) {
    if (mainPages) {
      $('.nav_brand-logo').attr('src', 'assets/svg/tgj_new_logo.svg');
    } else {
      $('.nav_brand-logo').attr('src', '../../assets/svg/tgj_new_logo.svg');
    }
  } else {
    if (mainPages) {
      $('.nav_brand-logo').attr('src', 'assets/svg/tgj_new_logo(white).svg');
    } else {
      $('.nav_brand-logo').attr('src', '../../assets/svg/tgj_new_logo(white).svg');
    }
  }
}

const x = window.matchMedia("(max-width: 780px)")
logoChange(x);
x.addListener(logoChange);

$('.fa-bars').on('click', function() {
  if ($(this).hasClass('clicked')) {
    $('.nav').find('.design-button').removeClass('unhidden');
    $('.nav').find('.nav-links').removeClass('unhidden');
    $('.fa-bars').removeClass('clicked');
  } else {
    $('.fa-bars').addClass('clicked');
    $('.nav').find('.design-button').addClass('unhidden');
    $('.nav').find('.nav-links').addClass('unhidden');
  }
});
//////////////

//////////////
// faq symbol
// $('.symbol').html('&#43;');

// $('.btn-link').on('click', function() {
//   // $('.faq-card-answer').removeClass('reveal-answer')
//   if (!$(this).hasClass('collapsed')) {
//     $(this).find('span').html('&#43;');
//   } else {
//     $(this).find('span').html('&#8722;');
//   }
// });
//////////////

//////////////
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
//////////////

//////////////
// contact form
// $('.contact-form').submit(function(e) {
//   e.preventDefault();
//   const dateStamp = new Date().toString();
//   const contactRef = database.ref('contacts');
//   const contact = {
//     dateTime: dateStamp,
//     name: $('#contact-name').val(),
//     email: $('#contact-email').val(),
//     number: $('#contact-number').val(),
//     description: $('#contact-desc').val()
//   }
//   if ($('#contact-email').val().indexOf('@') > -1) {
//     $('.contact-form-contents').css('display', 'none');
//     $('.contact-sent').css('display', 'block');
//     contactRef.push(contact);
//   } else {
//     $('.error-msg').html('Please enter a valid email address');
//   }
// });
//////////////

