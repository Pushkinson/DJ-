$(document).ready(function(){

  $('.nav__switch').click(function(){
    $('.nav__switch').toggleClass('active')
    $('.nav__toggle').toggleClass('active__menu')
  });

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