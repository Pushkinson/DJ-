"use strict";

$(document).ready(function () {
  $('.nav__switch').click(function () {
    $('.nav__switch').toggleClass('active');
    $('.nav__toggle').toggleClass('active__menu');
  });
  $('.block__plus').click(function () {
    $('.popup__hide').toggleClass('block__popup');
  });
  $('.nav__li--phone').click(function () {
    $('.popup__hide').toggleClass('nav__popup');
  });
  $('.nav__popup--close').click(function () {
    $('.popup__hide').removeClass('nav__popup');
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