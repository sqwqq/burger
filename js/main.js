$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }

    $('.animate-on-scroll').each(function() {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) {
        $(this).addClass('visible');
      }
    });
  });

  $('.animate-on-scroll').each(function() {
    const elementTop = $(this).offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (elementTop < windowBottom - 50) {
      $(this).addClass('visible');
    }
  });

  if ($('.slider').length) {
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;
    const sliderNav = $('.slider-nav');

    for (let i = 0; i < totalSlides; i++) {
      const dot = $('<div>');
      if (i === 0) dot.addClass('active');
      sliderNav.append(dot);
    }

    const dots = $('.slider-nav div');

    function showSlide(index) {
      slides.removeClass('active');
      dots.removeClass('active');
      slides.eq(index).addClass('active');
      dots.eq(index).addClass('active');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    dots.click(function() {
      currentSlide = $(this).index();
      showSlide(currentSlide);
    });
  }
});