"use strict";

$(document).ready(function () {
  $('.nav__switch').click(function () {
    $('.nav__switch').toggleClass('active');
    $('.nav__toggle').toggleClass('active__menu');
  });
  $('.block__plus').click(function () {
    $('.block__popup--hide').toggleClass('block__popup');
  });
  $('.nav__li--phone').click(function () {
    $('.nav__popup--hide').toggleClass('nav__popup');
  });
  $('.nav__popup--close').click(function () {
    $('.nav__popup--hide').removeClass('nav__popup');
  });
  $('.nav__mobile--phone').click(function () {
    $('.nav__popup--hide').toggleClass('nav__popup');
  });
  $('.nav__submit').click(function () {
    $('.nav__answer--hide').toggleClass('nav__answer');
  });
  $('.nav__answer--close').click(function () {
    $('.nav__answer--hide').removeClass('nav__answer');
  });
  $('.answer__button').click(function () {
    $('.nav__answer--hide').removeClass('nav__answer');
  }); // $('.slider__for').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '.slider__nav'
  // });
  // $('.slider__nav').slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider__for',
  //   dots: true,
  //   centerMode: false,
  //   focusOnSelect: true
  // });
  // $('.slider__for').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidersToScroll: 1,
  //   autoplay: false,
  //   arrows: true,
  //   dots: true     
  // });
});