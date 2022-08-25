$('header').load('inc.html header > div');

$('footer').load('inc.html footer > div');

$(function () {
   $('.slide').slick();
  
});



$(function () {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
         $('#MOVE_TOP_BTN').fadeIn();
      } else {
         $('#MOVE_TOP_BTN').fadeOut();
      }
   });

   $("#MOVE_TOP_BTN").click(function () {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
      return false;
   });
});

AOS.init(); 
