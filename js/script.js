$(document).ready(function (event) {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .header').toggleClass('active');
       $('body').toggleClass('lock');
   });
   $('.menu__item').click(function (event) {
      $('.header__burger, .menu').removeClass('active');
       $('body').removeClass('lock');
   });  
   $('.main__topopup, .main__button, .catalog__select, .catalog__link, .how__request').click(function (event) {
       event.preventDefault();
       $('.form-popup').addClass('open');
       $('body').addClass('lock');
   }); 
   $('.form-popup__close, .form-popup__close1').click(function (event) {
       $('.form-popup').removeClass('open');
       $('body').removeClass('lock');
   }); 
   $('.catalog__carousel').slick({
      arrows: true,
      dots: false,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1481,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 1069,
          settings: {
            slidesToShow:2,
          }
        }, 
        {
          breakpoint: 537,
          settings: {
            slidesToShow:1,
          }
        },                
      ]         
   });
   $('.reviews__cards').slick({
      arrows: true,
      dots: false,
      autoplay:true,
      infinite:true,
      swipe:true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1434,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 1114,
          settings: {
            slidesToShow:2,
          }
        },  
        {
          breakpoint: 574,
          settings: {
            slidesToShow:1,
          }
        },              
      ]         
   });
  AOS.init({
     once: true,
  });   
 
});    

$(window).scroll(function (event) {
 var scroll = $(window).scrollTop();
     if(scroll>10){
         $('.header').addClass('scroll');
     }else{
         $('.header').removeClass('scroll');
     }
 }); 