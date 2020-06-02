$(document).ready(function () {

  let mySwiper = new Swiper('.swiper-container', {

  });

  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".swiper-container").mouseenter(function () {
    swiper.autoplay.stop();
  });

  $(".swiper-container").mouseleave(function () {
    swiper.autoplay.start();
  });


  let btn = $('.btn-mobile-menu');
  let menu = $('.nav-flex');

  btn.click(function () {
    menu.slideToggle();
  });















});