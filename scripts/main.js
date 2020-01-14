$(function() {
  var $body = $("body");
  var $html = $("html");
  var $header = $(".header");
  var mobileWidth = 1060;

  $body.on("click", ".button-map", function() {
    $(".section11").toggleClass("map-open");
  });

  $body.on("click", ".menu-tablet-close, .burger", function() {
    $body.toggleClass("menu-open");
  });

  $body.on("click", ".flag-btn", function() {
    $(this)
      .closest(".flag")
      .toggleClass("open");
  });

  $(".gallery-item").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tCounter:
        '<span class="mfp-counter-one">%curr%</span><span class="mfp-counter-separate"></span><span class="mfp-counter-all">%total%</span>'
    }
  });

  var docPos = $(document).scrollTop();

  $(window).on("scroll", function() {
    var fromTop = $(document).scrollTop();

    if (docPos > fromTop) {
      $body.toggleClass("header-fix", fromTop > 100);
    }
    docPos = fromTop;
  });

  $(".open-popup-link").magnificPopup();
});
