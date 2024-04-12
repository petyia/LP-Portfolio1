AOS.init({
  duration: 800,
  easing: "ease",
  once: true,
  offset: -100,
});

jQuery(function ($) {
  "use strict";
  loader();
  // siteMenuClone();
  mobileToggleClick();
  onePageNavigation();
  siteIstotope();
  portfolioItemClick2();
  owlCarouselPlugin();
  floatingLabel();
  scrollWindow();
  counter();
  jarallaxPlugin();
  contactForm();
  stickyFillPlugin();
  animateReveal();
});

// load ajax page
var portfolioItemClick2 = function () {
  $(".ajax-load-page2").on("click", function (e) {
    var id = $(this).data("id"),
      href = $(this).attr("href");

    if ($("#portfolio-single-holder2 > div").length) {
      $("#portfolio-single-holder2 > div").remove();
    }

    TweenMax.to(".loader-portfolio-wrap2", 1, {
      top: "-50px",
      autoAlpha: 1,
      display: "block",
      ease: Power4.easeOut,
    });

    $("html, body").animate(
      {
        scrollTop: $("#portfolio-section-uxui").offset().top - 50,
      },
      700,
      "easeInOutExpo",
      function () {}
    );

    setTimeout(function () {
      loadPortfolioSinglePage2(id, href);
    }, 100);

    e.preventDefault();
  });
};

// Close
$("body").on("click", ".js-close-portfolio2", function () {
  setTimeout(function () {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio-section-uxui").offset().top - 50,
      },
      700,
      "easeInOutExpo"
    );
  }, 200);

  TweenMax.set(".portfolio-wrapper2", {
    visibility: "visible",
    height: "auto",
  });
  TweenMax.to(".portfolio-single-inner2", 1, {
    marginTop: "50px",
    opacity: 0,
    display: "none",
    onComplete() {
      TweenMax.to(".portfolio-wrapper2", 1, {
        marginTop: "0px",
        autoAlpha: 1,
        position: "relative",
      });
    },
  });
});

$(document).ajaxStop(function () {
  setTimeout(function () {
    TweenMax.to(".loader-portfolio-wrap2", 1, {
      top: "0px",
      autoAlpha: 0,
      ease: Power4.easeOut,
    });
  }, 400);
});

var loadPortfolioSinglePage2 = function (id, href) {
  $.ajax({
    url: href,
    type: "GET",
    success: function (html) {
      TweenMax.to(".portfolio-wrapper2", 1, {
        marginTop: "50px",
        autoAlpha: 0,
        visibility: "hidden",
        onComplete() {
          TweenMax.set(".portfolio-wrapper2", { height: 0 });
        },
      });

      var pSingleHolder = $("#portfolio-single-holder2");

      var getHTMLContent = $(html).find(".portfolio-single-wrap2").html();

      pSingleHolder.append(
        '<div id="portfolio-single-' +
          id +
          '" class="portfolio-single-inner2"><span class="unslate_co--close-portfolio js-close-portfolio2 d-flex align-items-center"><span class="close-portfolio-label">Bezárás</span><span class="icon-close2 wrap-icon-close"></span></span>' +
          getHTMLContent +
          "</div>"
      );

      setTimeout(function () {
        owlSingleSlider();
      }, 10);

      setTimeout(function () {
        TweenMax.set(".portfolio-single-inner2", {
          marginTop: "100px",
          autoAlpha: 0,
          display: "none",
        });
        TweenMax.to(".portfolio-single-inner2", 0.5, {
          marginTop: "0px",
          autoAlpha: 1,
          display: "block",
          onComplete() {
            TweenMax.to(".loader-portfolio-wrap2", 1, {
              top: "0px",
              autoAlpha: 0,
              ease: Power4.easeOut,
            });
          },
        });
      }, 700);
    },
  });

  return false;
};
