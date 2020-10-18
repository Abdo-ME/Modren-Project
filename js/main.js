$(document).ready(function () {
  // Slider Height
  $(".owl-carousel img").height($(window).height());
  $(window).resize(function () {
    $(".owl-carousel img").height($(window).height());
  });
  // Owl Carusel
  $(".header .owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    autoplay: true,
    animateOut: "fadeOut",
    smartSpeed: 550,
    
  });
  $(".brands .owl-carousel").owlCarousel({
    loop: true,
    items: 4,
    autoplay: true,
    responsive: {0: {items:2}, 760:{items:4}, 992:{items:6}},
  });

  // Start Dark Mode

  var Mode
  if (localStorage.getItem("mode")) {
    Mode = localStorage.getItem("mode")
    $("body").addClass(Mode)
  } else {
    Mode = $("body").attr("class")
    localStorage.setItem("mode", Mode)
  }
//  Switch the logo image
  var logo = $(".logo img")
  const chackImage = () => {
    if ($('body').hasClass('light-mode')) {
      logo.attr("src", "img/logo-dark.png")
    } else {
      logo.attr("src", "img/logo.png")
    }
  }
  chackImage()

  $(".dark .fa-adjust").on("click", function () {
    // if ($("body").hasClass("light-mode")) {
    //   $("body").removeClass("light-mode");
    //   logo.attr("src", "img/logo.png")
    //   Mode = $("body").attr("class") 
    // localStorage.setItem("mode", Mode)
      
    // } else {
    //   $("body").addClass("light-mode");
    //   logo.attr("src", "img/logo-dark.png")
    //   Mode = $("body").attr("class") 
    //   localStorage.setItem("mode", Mode)
    // }
    if ($("body").hasClass("light-mode")) {
      $("body").removeClass("light-mode");
      chackImage()
  Mode = $("body").attr("class") 
    localStorage.setItem("mode", Mode)
     } else {
      $("body").addClass("light-mode");
      chackImage()
      Mode = $("body").attr("class") 
      localStorage.setItem("mode", Mode)
    }
    
  });
  
  // End Dark Mode
  // Side Menu Transition
  $(".menu").on("click", function () {
    $(".side-menu").addClass("menu-transition")
   
  })
  $(".side-menu i").on("click", function () {
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
  // Counter
  const counters = document.querySelectorAll(".about .num");
  const delay = 250;
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = counter.getAttribute('data-target');
      const count = parseInt(counter.innerText);
      const spead = target / delay;
      if (count < target) {
        counter.innerText =Math.floor(count + spead) 
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target
      }
       
    }
    updateCount()

  })
  // Count-Down
  
  var count = $('.countdown').html()
  $('.countdown').countdown('2021/01/01', function(event) {
    $(this).html(event.strftime(count));
  });

  
});
// Button To Top Scroll
$(window).scroll(function () {
  if ($(window).scrollTop() >= 1000) {
    $(".btn-top").fadeIn(1000);
  } else {
    $(".btn-top").fadeOut(1000);
  }
});

$(".btn-top").on('click', function () {
  $("html,body").animate({
   scrollTop: $(".header").offset().top, 
  })
})

// Side Menu Scroll

$('.links li').on("click", function () {
  var target = $(this).attr("data-target")
  // console.log()
  $("html,body").animate({
    scrollTop :$("." + target).offset().top-50
  })
})
