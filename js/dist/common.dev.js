"use strict";

$(document).ready(function () {
  $('.nav__switch').click(function () {
    $('.nav__switch').toggleClass('active');
    $('.nav__toggle').toggleClass('active__menu');
  }); // $('.nav__switch').click(function(){ 
  //   $('.nav__switch').addClass('active');
  //   $('.nav__toggle').addClass('active__menu');
  //   document.querySelector('.nav__toggle').style['display'] = 'none';
  //   $('.active').removeClass('nav__switch');
  //   $('.active__menu').removeClass('nav__toggle');
  //   document.querySelector('.active__menu').style['display'] = 'flex';
  // });
  // $('.active').click(function(){ 
  //   $('.active').addClass('nav__switch');
  //   $('.active__menu').addClass('nav__toggle');
  //   document.querySelector('.active__menu').style['display'] = 'none';
  //   $('.nav__switch').removeClass('active');
  //   $('.nav__toggle').removeClass('active__menu');      
  //   document.querySelector('.nav__toggle').style['display'] = 'flex';
  // });
  // $('.slider__for').slick({
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
  //   centerMode: true,
  //   focusOnSelect: true
  // });
});