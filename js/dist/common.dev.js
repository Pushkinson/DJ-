"use strict";

$(document).ready(function () {
  $('.nav__switch').click(function () {
    $('.nav__switch').toggleClass('active');
    $('.nav__toggle').toggleClass('active__menu');
  });
});