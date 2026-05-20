$(document).ready(function() {
  // Floating menu on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  });
});