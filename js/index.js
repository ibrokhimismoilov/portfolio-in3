$(document).ready(function () {

  var typed = new Typed("#typed", {
    stringsElement: "#typed-strings",
    typeSpeed: 20,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
  });

  $(".sidebar-show").on("click", function () {
    $(".sidebar").toggleClass("show");
    if ($(".sidebar").hasClass("show")) {
      $(".sidebar-remove").addClass("show");
    } else {
      $(".sidebar-remove").removeClass("show");
    }
  })


  $(".sidebar-remove").on("click", function () {
    $(".sidebar").removeClass("show");
    $(this).removeClass("show");  
  })

  $(".sidebar__nav-link").on("click", function (e) {
    e.preventDefault();
    $(this).parent().siblings().removeClass("active")
    $(this).parent().addClass("active");
    let href = $(this).attr("href");

    let linkClicked = setTimeout(() => {
  
      $(".section").removeClass("active")  
      $(href).addClass("active");

      if($(window).innerWidth()<768) {
        $(".sidebar").removeClass("show");
        $(".sidebar-remove").removeClass("show");
      }

      clearTimeout(linkClicked);

    }, 500);


    footerShow();
  })

  let _hrefDefault = $(".sidebar__nav-item.active .sidebar__nav-link").attr("href");
  $(_hrefDefault).addClass("active");

  footerShow();
  function footerShow() {
    if ($(".sidebar__nav-item:first-child").hasClass("active")) {
      $(".footer").hide(0);
    } else {
      $(".footer").show(0);
    }
  }

  $(".sidebar__nav-link").on("click", function(){
    $(".section-animate").addClass("show");

    let sectionAnimate = setTimeout(() => {
      $(".section-animate").removeClass("show");  
      clearTimeout(sectionAnimate);
    }, 1000);
  
  })

  $(window).resize(function(){
    let winWidth = $(window).innerWidth();
    if(winWidth<768) {
      $(".sidebar").removeClass("show");
      $(".sidebar-remove").removeClass("show");
    }

  })
});
