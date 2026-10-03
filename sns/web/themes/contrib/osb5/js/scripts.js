/*	---------------------------------------------

	Powered by OrangeSoft

	--------------------------------------------- */

jQuery(function($) {

  function sameHeightBox(targetItem) {
    // Set height - Highest //
    if($(targetItem).length){
      $(targetItem).each(function(){
        var highestBox = 0;
          $(targetItem).each(function(){  
                  if($(this).height() > highestBox){  
                  highestBox = $(this).height();  
          }
        }); 

        $(targetItem).height(highestBox);  
      }) 
    }
  }

  // Reuse Swiper - 4 cols slider
  document.querySelectorAll(".swiperColFour").forEach(function (item) {
    let next = item.querySelector(".swiper-button-next");
    let prev = item.querySelector(".swiper-button-prev");
    let targetItem = item;

    const swiperColFour = new Swiper(targetItem, {
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      speed: 1000,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
      // when window width is >= 768px
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  });

  // Reuse Swiper - 4 cols slider
  document.querySelectorAll(".swiperFourContent").forEach(function (item) {
    let next = item.querySelector(".swiper-button-next");
    let prev = item.querySelector(".swiper-button-prev");
    let targetItem = item.querySelector(".view-content");

    const swiperFourContent = new Swiper(targetItem, {
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      speed: 1000,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
      // when window width is >= 768px
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        }
      },
    });
  });

  // Reuse Swiper - Single slider
  document.querySelectorAll(".swiperSingle").forEach(function (item) {
    let next = item.querySelector(".swiper-button-next");
    let prev = item.querySelector(".swiper-button-prev");
    let targetItem = item;

    const swiperSingle = new Swiper(targetItem, {
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      speed: 1000,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });
  });

  // Reuse Swiper Product - 1 row slider
  document.querySelectorAll(".swiper-product").forEach(function (item) {
    let next = item.querySelector(".swiper-button-next");
    let prev = item.querySelector(".swiper-button-prev");
    let pagination = item.querySelector(".swiper-pagination");
    let targetItem = item.querySelector(".view-content");

    const swiperProduct = new Swiper(targetItem, {
      slidesPerView: 1,
      spaceBetween: 30,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      speed: 1000,
      pagination: {
        el: pagination,
        clickable: true,
      },
      breakpoints: {
      // when window width is >= 768px
        768: {
          spaceBetween: 30,
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
        },
      },
    });
  });

  // Reuse Swiper Testimonial - 1 row slider
  document.querySelectorAll(".swiperTesti").forEach(function (item) {
    let next = item.querySelector(".swiper-button-next");
    let prev = item.querySelector(".swiper-button-prev");
    let pagination = item.querySelector(".swiper-pagination");
    let targetItem = item.querySelector(".view-content");

    const swiperTesti = new Swiper(targetItem, {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1000,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      pagination: {
        el: pagination,
        clickable: true,
      },
    });
  });

	$(document).ready(function(){

    'use strict';

    var headerHeight = $('header > .navbar').outerHeight();

    $(document).on('scroll', function() {
      if ($(this).scrollTop() > headerHeight){  
        $('body').addClass("sticky-header")
      }
      // else{
      //   $('body').removeClass("sticky-header").css('padding-top', '0px');
      // }

      if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        $('body').addClass('reach-bottom');
      }
      else {
        $('body').removeClass('reach-bottom');
      }     
    }).trigger('scroll');

    var scrollPosition = $(window).scrollTop();
	    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
          $('body').addClass("scrolled");
        } else{
          $('body').removeClass("scrolled");
        }
        var scroll = $(window).scrollTop();
        if (scroll > scrollPosition) {
          $('body').addClass("scrolldown");
          $('body').removeClass("scrollup");
        } else {
          $('body').addClass("scrollup");
          $('body').removeClass("scrolldown");
        }
        scrollPosition = scroll;
	  });

    // menu
    $('.menu--main ul.navbar-nav .dropdown-toggle').click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      if ($(this).next().hasClass('show')) {
          $(this).removeClass('expanded');
          $(this).next().removeClass('show');
      } else {
          $('.menu--main .dropdown-menu').removeClass('show');
          $('.menu--main .nav-link').removeClass('expanded');
          $(this).addClass('expanded');
          $(this).next().addClass('show');
      }

    });
    $('.menu--main ul.navbar-nav .dropdown-sub-toggle').click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      if ($(this).next().hasClass('show')) {
          $(this).removeClass('expanded');
          $(this).next().removeClass('show');
      } else {
          $('.menu--main .dropdown-menu-2').removeClass('show');
          $('.menu--main .dropdown-sub-toggle').removeClass('expanded');
          $(this).addClass('expanded');
          $(this).next().addClass('show');
      }

    });

	  $('.dropdown a').each(function(){
        if ( $(this).attr('href') == location.pathname ) {
            $(this).addClass('current').parents('li').addClass('current');
        }
    });
    
    // main menu toggle
    $('.burger-button').click(function(e) {
      e.preventDefault();
      if ($('body').hasClass('side-menu-active')) {
          $('html').css('overflow-y', 'auto');
      } else {
          $('html').css('overflow-y', 'hidden');
      }
      $('.animated-icon').toggleClass('open');
      $('body').toggleClass('side-menu-active');
      $('.header-menu').toggleClass('active');
      $('header').toggleClass('display-menu');
      $('.search-triggered #block-exposedformsite-searchpage-search').slideToggle();
      $('body').removeClass('search-triggered');
      // $('html').css('overflow-y', 'hidden');
    });

    $('.menu-overlay').click(function() {
      $('.animated-icon').removeClass('open');
      $('body').removeClass('side-menu-active');
      $('.header-menu').removeClass('active');
      $('header').removeClass('display-menu');
      $('html').css('overflow-y', 'auto');
    });

    // Search toggle
    $('.search-wrap').click(function(e){
        $('body').toggleClass('search-triggered');
        $('#block-exposedformsite-searchpage-search .form-item-keys input').focus();
    });

    $('#block-exposedformsite-searchpage-search').click(function(){
        $('body').toggleClass('search-triggered');
    })

    $('#block-exposedformsite-searchpage-search .form-control, #block-exposedformsite-searchpage-search .form-actions').click(function(e) { 
      e.stopPropagation();
    })

    if ($('.partner-list-wrapper').length) {
      function centerTrigger() {
        $('.partner-list-wrapper .trigger').click(function(){
          $(this).parents('.partner-list-wrapper').toggleClass('show');
          $(this).parents('.partner-list-wrapper').find('.back').toggleClass('show');
          $(this).parents('.partner-list-wrapper').find('.front').toggleClass('disabled');
        });

        $('.partner-list-wrapper .btn-close').click(function(){
          $(this).parents('.partner-list-wrapper').removeClass('show');
          $(this).parents('.partner-list-wrapper').find('.back').removeClass('show');
          $(this).parents('.partner-list-wrapper').find('.front').removeClass('disabled');
        });
      }

      centerTrigger();

      // $(document).on('ready ajaxComplete', function(){
      $(document).on('ready ajaxComplete', function(){
        centerTrigger();
      })

    }

    if ($('.swiper-home-main').length) {
      // Slideshow
      const swiperHomeNav = new Swiper(".swiper-home-thumb .view-content", {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          watchSlidesProgress: true,
        });
      const swiperHomeMain = new Swiper(".swiper-home-main", {
          slidesPerView: 1,
          thumbs: {
            swiper: swiperHomeNav,
          },
          grabCursor: true,
          effect: "slide",
          creativeEffect: {
            prev: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [180, 0, 0],
            },
            next: {
              shadow: true,
              translate: [0, 0, -800],
              rotate: [-180, 0, 0],
            },
          },
          navigation: {
            nextEl: ".swiper-home-main .swiper-button-next",
            prevEl: ".swiper-home-main .swiper-button-prev",
          },
          speed: 500,
      });
    }

    // Popup Front
    if($('#popupFront').length){
      $('#popupFront').modal('show')
    }


	});

});