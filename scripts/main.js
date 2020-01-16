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

  // $body.on("click", ".menu-tablet .nav__link", function() {
  //   $body.removeClass("menu-open");
  // });

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
      $body.toggleClass("header-fix", fromTop > 20);
    } else {
      $body.removeClass("header-fix");
    }

    if (fromTop > 105) {
      $body.addClass("header-hide");
    } else {
      $body.removeClass("header-hide");
    }
    docPos = fromTop;
  });

  $(".open-popup-link").magnificPopup();

  // scroll section
  $(".nav__link").bind("click", function(e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        400,
        function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );
    $body.removeClass("menu-open");
    return false;
  });

  $(window)
    .scroll(function() {
      var scrollDistance = $(window).scrollTop();

      // Show/hide menu on scroll
      //if (scrollDistance >= 850) {
      //		$('nav').fadeIn("fast");
      //} else {
      //		$('nav').fadeOut("fast");
      //}

      // Assign active class to nav links while scolling
      $("section").each(function(i) {
        if ($(this).position().top <= scrollDistance) {
          $(".nav__link.active").removeClass("active");
          $(".nav__link")
            .eq(i)
            .addClass("active");
        }
      });
    })
    .scroll();

  // end section
});
