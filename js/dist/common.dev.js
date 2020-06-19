"use strict";

$(document).ready(function () {
  $('.toggle').click(function () {
    $('.toggle').toggleClass('active');
    $('.toggle__menu').toggleClass('active__menu');
  });
});