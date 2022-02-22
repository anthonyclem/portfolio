$(document).ready(function () {
  //sticky navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  //hamburger
  $(".navbar-btn").click(function () {
    $(".navbar .navbar-menu").toggleClass("active");
    $(".navbar-btn i").toggleClass("active");

    $(".navbar-menu li a").click(function () {
      $(".navbar .navbar-menu").removeClass("active");
      $(".navbar-btn i").removeClass("active");
    });
  });

  //smooth scroll
  $('nav a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");
    if (the_id === "#") {
      return;
    }
    var posCible = $(the_id).offset().top - 65;
    $("html, body").animate(
      {
        scrollTop: posCible,
      },
      "slow"
    );
    return false;
  });

  //owl-carousel
  $(".veilles-carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
