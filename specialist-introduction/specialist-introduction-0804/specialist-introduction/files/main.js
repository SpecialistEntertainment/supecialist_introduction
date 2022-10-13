jQuery(function($) {

  const viewport = document.querySelector('meta[name="viewport"]');
  const userAgent = navigator.userAgent.toLowerCase();
  const isiOS = (userAgent.indexOf('iphone') > -1) || (userAgent.indexOf('ipad') > -1);

  const $html = $('html,body');
  const $header = $('#js-main-header');
  let headerHight = 70;
  if (matchMedia('(min-width: 1024px)').matches) { headerHight = 116; }
  const $scrollLink = $('.js-scroll-link');// ページ内リンクスクロール用
  const $gnavBtn = $("#js-gnav-btn");
  const $gnav = $("#js-gnav");
  const $gnavBacklayer = $('#js-gnav-backlayer');
  const $languageSwitcherBtn = $('#js-language-switcher-btn');
  const $ScrollTopBtn = $('#js-to-top-btn');//ページ内上部にスクロールボタン
  const $sharehouseCta = $('#js-sharehouse-cta');

  // ページ内リンク
  // $scrollLink.on("click", function() {
  $('a[href^="#"]').on("click", function() {
    const id = $(this).attr('href');
    const position = $(id).offset().top - headerHight;
    $('html').animate({ 'scrollTop':position }, 700);
  });

  // スクロールアニメーション
  const fade_bottom = 60; // 画面下からどの位置でフェードさせるか(px)
  $(window).on("scroll load", function () {
    const scrollTop = $(this).scrollTop();
    const scrollBottom = scrollTop + $(this).height();
    const fadePosition = scrollBottom - fade_bottom;
    $(".fadeIn, .fadeInUp, .fadeInLeft, .fadeInRight, .fadeInZoomIn, .fadeInZoomOut").each(function(){
      const thisPosition = $(this).offset().top;
      if (fadePosition > thisPosition) {
        $(this).addClass('is-scrolled');
      }
    });
  });

  $(".openbtn7").click(function () {
    $(this).toggleClass('active');
    $('.sidebar-overlay').toggleClass('open');
    $('.sidebar').toggleClass('open');
});

$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});

  // gnav
  $gnavBtn.on("click", function() {
    $(this).toggleClass('is-open');
    $gnav.fadeToggle().toggleClass('is-open');
    $gnavBacklayer.toggleClass('is-open');
    $("body").toggleClass("is-fixed");
  });
  $('.js-gnav-item').on('click', function(){
    $gnavBtn.removeClass('is-open');
    $gnav.fadeOut().removeClass('is-open');
    $gnavBacklayer.removeClass('is-open');
    $("body").removeClass("is-fixed");
  });
  // backlayer
  $gnavBacklayer.on('click', function(){
    $gnavBtn.removeClass('is-open');
    $gnav.fadeOut().removeClass('is-open');
    $(this).removeClass('is-open');
    $("body").removeClass("is-fixed");
  });

    $('.slider').slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
    speed: 5000, // スライドが流れる速度を設定
    cssEase: "linear", // スライドの流れ方を等速に設定
    slidesToShow: 6, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
  
  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    var $answer = $(this).next('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('.icn-open').text('+');
      
    } else {
      $answer.addClass('open'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('.icn-open').text('－');
      
    }
  });


  // FAQのアコーディオン
  $('.add-faq-btn').click(function() {
    var $addfaq = $(this).next('.add-faq');
    if($addfaq.hasClass('open-faq')) { 
      $addfaq.removeClass('open-faq');
      // slideUpメソッドを用いて、$answerを隠してください
      $addfaq.slideUp();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $('.add-faq-btn').css('display', 'block');
      
    } else {
      $addfaq.addClass('open-faq'); 
      // slideDownメソッドを用いて、$answerを表示してください
      $addfaq.slideDown();
      
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $('.add-faq-btn').css('display', 'none');
      
    }
  });
  // 一定スクロールで変化
  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > $('.js-mv').height()*0.8 ) {
      $header.addClass('is-fixed');
    } else {
      $header.removeClass('is-fixed');
    }
  });
  $(window).trigger('scroll');

  // ページ上部へスクロール（フッターボタン）
  $ScrollTopBtn.hide();
  $sharehouseCta.hide();
  $(window).on('scroll', function() {
    // ページ上部で表示切替
    if ($(this).scrollTop() > 100) {
      $ScrollTopBtn.fadeIn();
      $sharehouseCta.fadeIn();
    } else {
      $ScrollTopBtn.fadeOut();
      $sharehouseCta.fadeOut();
    }
    //フッター位置で止める
    var $scrollHeight = $(document).height(); //ドキュメントの高さ
    var $scrollPosition = $(window).height() + $(window).scrollTop(); //現在地
    var $footerHeight = $("footer").innerHeight();
    if ( $scrollHeight - $scrollPosition <= $footerHeight ) {
      $ScrollTopBtn.addClass('is-fixed');
      $sharehouseCta.addClass('is-fixed');
    } else {
      $ScrollTopBtn.removeClass('is-fixed');
      $sharehouseCta.removeClass('is-fixed');
    }
  });
  $ScrollTopBtn.on("click", function() {
    $html.animate({
      scrollTop:0
    }, 700);
  });

  // ディスプレイ幅360px未満のレスポンシブ対応
  !(function () {
    function switchViewport() {
      const viewport = document.querySelector('meta[name="viewport"]');
      const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();

  // iOSのフォーム文字拡大対策
  if(isiOS) {
    if(viewport) {
      var viewportContent = viewport.getAttribute('content');
      viewport.setAttribute('content', viewportContent + ', user-scalable=no');
    }
  }

});

  // 一定スクロールで変化
  $(window).on('scroll', function(){
    if ( $(window).scrollTop() > $('.js-mv').height()*0.8 ) {
      $header.addClass('is-fixed');
    } else {
      $header.removeClass('is-fixed');
    }
  });
  $(window).trigger('scroll');
