"use strict";$(document).ready(function(){$(".nav__switch").click(function(){$(".nav__switch").toggleClass("active"),$(".nav__toggle").toggleClass("active__menu")}),$(".block__plus").click(function(){$(".popup__hide").toggleClass("block__popup")}),$(".nav__li--phone").click(function(){$(".popup__hide").toggleClass("nav__popup")}),$(".nav__popup--close").click(function(){$(".popup__hide").removeClass("nav__popup")})});