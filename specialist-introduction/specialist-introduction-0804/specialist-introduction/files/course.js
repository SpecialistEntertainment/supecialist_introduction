jQuery(function($) {

  // guest
  // $modalLayer = $('.js-modal-backlayer');
  $('.js-guest-modal-btn').on('click', function(){
    $modal = $(this).next('.js-guest-modal');
    $modalLayer = $(this).siblings('.js-modal-backlayer');
    $modal.fadeIn();
    $modalLayer.fadeIn();
  });
  $('.js-modal-close-btn').on('click', function(){
    $modal = $(this).parent('.js-guest-modal');
    $modalLayer = $(this).parent().next('.js-modal-backlayer');
    $modal.fadeOut();
    $modalLayer.fadeOut();
  });
  $('.js-modal-backlayer').on('click', function(){
    $(this).fadeOut();
    $modal = $(this).prev('.js-guest-modal');
    $modal.fadeOut();
  });

  // voice
  $('.js-voice-item-btn').on('click', function(){
    $(this).toggleClass('is-open');
    $(this).prev('.js-voice-item-body').toggleClass('is-open');
  });

  // faq
  // タブ切替
  $tabItem = $('#js-tab > li');
  $tabContent = $('.js-tab-content');
  $tabItem.on('click', function(){
    $tabItem.removeClass('is-active');
    $(this).addClass('is-active');
    var index = $(this).index();
    $tabContent.removeClass('is-active');
    $tabContent.eq(index).addClass('is-active');
  });
  // アコーディオン
  $('.js-accordion-item').on('click', function(){
    $(this).children('.js-accordion-title').toggleClass('is-open');
    $(this).children('.js-accordion-content').slideToggle();
  });

  // アンカー位置がズレるため、jQueryで調整
  $(window).on('load',function(){
    $(function() {
      let url = location.href;
      if(url.indexOf("?id=") != -1){
        let id = url.split("?id=");
        let $target = $('#' + id[id.length - 1]);
        if($target.length){
          let position = $target.offset().top;
          $("html, body").animate({scrollTop:position}, 1);
        }
      }
    });
  })

});

var mySwiper = new Swiper('#course-mv-slider', {
  // https://swiperjs.com/swiper-api#parameters
  loop: true,
  loopAdditionalSlides: 1,//ループする時に最後のスライドの後に空白が来てしまうのを防ぐ
  speed: 5000,
  effect: 'slide',
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    1024: {
      speed: 7000,
      slidesPerView: 2.12,
      spaceBetween: 10,
    },
  },
});

var mySwiper = new Swiper('#course-visuals-slider', {
  loop: true,
  loopAdditionalSlides: 1,//ループする時に最後のスライドの後に空白が来てしまうのを防ぐ
  speed: 4000,
  effect: 'slide',
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 32,
    },
  },
});