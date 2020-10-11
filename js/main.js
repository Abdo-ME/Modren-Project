$(document).ready(function () {
  // Slider Height
  $(".owl-carousel .item").height($(window).height());
  $(window).resize(function () {
    $(".owl-carousel .item").height($(window).height());
  });
  // Owl Carusel
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    animateOut: "fadeOut",
    smartSpeed: 550,
    dots: true,
  });

  // Dark Mode
  $(".dark .fa-adjust").on("click", function () {
    $("body").toggleClass("dark-mode");
  });
  // Side Menu Transition
  $(".menu").on("click", function () {
    $(".side-menu").addClass("menu-transition")
   
  })
  $(".side-menu .icon").on("click", function () {
    $(".side-menu").removeClass("menu-transition")
   
  })
  // Scrolling Effect
  $(window).on("scroll", function () {
    if (window.scrollY >= 150) {
      $(".nav-left").fadeOut(700);
      $(".nav-top").fadeIn(500);
    } else {
      $(".nav-left").fadeIn(500);
      $(".nav-top").fadeOut(500);
      
    }
    
  })
});
