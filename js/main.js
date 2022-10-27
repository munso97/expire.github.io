$(document).ready(function () {
  var mainSlides = $(".slides").bxSlider({
    mode: "horizontal",
    controls: false,
    pagerSelector: ".main_slider .pager",
    // nextText: '<i class="fa-solid fa-angle-right"></i>',
    // prevText: '<i class="fa-solid fa-angle-left"></i>'
  });

  var prevBtn = $(".main_slider .controls span");

  prevBtn.click(function () {
    if ($(this).hasClass("prev")) {
      mainSlides.goToPrevSlide();
    } else {
      mainSlides.goToNextSlide();
    }
  });

  // blog list Multiple slideshow
  var blogSlides = $(".Latest_blog_list").bxSlider({
    mode: "horizontal",
    controls: false,
    pager: false,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 370,
  });

  var blogcontrolBtn = $(".Latest_blog_wrap .controls span");

  blogcontrolBtn.click(function () {
    if ($(this).hasClass("prev")) {
      blogSlides.goToPrevSlide();
    } else {
      blogSlides.goToNextSlide();
    }
  });

  // Number Animation

  var $statItem = $(".item .count");

  $statItem.each(function () {
    var currentItem = $(this),
      $rateNum = currentItem.attr("date-rate");

    $({
      mycount: 0
    }).animate({
      mycount: $rateNum
    }, {
      duration: 2500,
      progress: function () {
        var now = this.mycount;
        currentItem.text(Math.floor(now));
      },
    });
  }); // stat item each

  // portfolio filltering
  /*
변수명 $sortBtn에 button를 지정하고, 변수명 $targetList에 클래스명 Portfolio_section_list li 변수로 지정
$sortBtn를 클릭하며 그 클릭한 요소의 내용을 변수 $targetClass 지정하고
$targetList는 모두 사라지고 (fadeout),
$targetClass를 활용해서 그 요소만 fadeIn으로 보이도록 한다.
$('.web').fadeIn();
*/
  var $sortBtn = $(".sorting button"),
    $targetList = $(".Portfolio_section_list li");

  $sortBtn.click(function () {
    var $targetClass = "." + $(this).text();
    console.log($targetClass);
    $targetList.hide();
    $($targetClass).fadeIn();

    // 모든 button 에 active를 제거하고 클릭한 그 요소에만 active를 추가한다.
    // $sortBtn.removeClass('active');
    // $(this).addClass('active');

    $(this).addClass("active").siblings().removeClass("active");

    /*
all 클릭 시 모두 보이기
*/
    if ($targetClass == ".All") {
      $targetList.fadeIn();
    }
  });

  // partner list Multiple slideshow
  var partnerSlides = $(".partner_list").bxSlider({
    mode: "horizontal",
    controls: false,
    pager: false,
    minSlides: 3,
    maxSlides: 6,
    moveSlides: 1,
    slideWidth: 160,
    slideMargin: 30,

    auto: true,
    pause: 2000,
    speed: 1000,
  });

  // testimonial tab slide
  var $tabLink = $(".tablinks span"),
    $targetItem = $(".review_contents .item");

  $tabLink.click(function () {
    $tabLink.removeClass("active");
    $(this).addClass("active");

    var $targetItemIdx = $(this).index();
    $targetItem.removeClass("active");
    $targetItem.eq($targetItemIdx).addClass("active");
  });

  //accordion
  var $accHeader = $(".accordion header"),
    $accContent = $(".accordion div");

  $accHeader.click(function () {
    $accHeader.removeClass("active");

    var $this = $(this);
    $this.addClass("active").next().slideDown();
    $this.next().siblings("div").slideUp();
  });
  $accHeader.eq(0).trigger("click");

  // Move menuItme
  let menuItem = $("header nav ul li a");

  menuItem.click(function (e) {
    let el = $(this).attr("href");
    let elWrap = $(el);

    scrollMove(elWrap, 63);

    e.preventDefault();
  });

  function scrollMove(el, navHight) {
    let offset = el.offset().top;
    let totalPos = offset - navHight;
    $("html, body").animate({ scrollTop: totalPos+50 }, 800);
  }

  // menu button
  const body = document.querySelector("section");
  const toggleBtn = document.querySelector("header nav .nav_btn");

  toggleBtn.addEventListener("click", () => {
    $("header nav .main-left-menu").toggleClass("active");
    $("header nav .main-right-menu").toggleClass("active");
  });

  body.addEventListener("click", () => {
    $("header nav .main-left-menu").removeClass("active");
    $("header nav .main-right-menu").removeClass("active");
  });

  // map

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("ourmap"), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8,
    });
  }

  window.initMap = initMap;
}); // document ready