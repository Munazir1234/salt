(function ($) {
  "use strict";

  var nav_offset_top = $("header").height() + 10;

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area").addClass("navbar_fixed");
        } else {
          $(".header_area").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
})(jQuery);

var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 5000);
});

jQuery(document).ready(function ($) {
  $(".slider").owlCarousel({
    nav: false,
    slideSpeed: 300,
    paginationSpeed: 500,
    items: 1,
    autoplay: true,
    smartSpeed: 2500,
    loop: true,
    dots: true,
    arrow: false,
  });
});

jQuery(document).ready(function ($) {
  $(".category").owlCarousel({
    nav: false,
    slideSpeed: 300,
    paginationSpeed: 500,
    items: 1,
    autoplay: true,
    smartSpeed: 2500,
    loop: true,
    dots: true,
    arrow: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  for (let i = 1; i <= 20; i++) {
    $(`#filterToggle${i}`).click(function () {
      $(`#filterContent${i}`).slideToggle(300);
      $(`#arrowIcon${i}`).toggleClass("rotate");
    });
  }
});

// $(document).ready(function () {
//   for (let i = 1; i <= 20; i++) {
//     $(`#mobile${i}`).click(function () {
//       $(`#mobileContent${i}`).slideToggle(300);
//       $(`#mobileIcon${i}`).toggleClass("rotate");
//     });
//   }
// });

$(document).ready(function () {
  $(".read-more-btn").click(function () {
    const moreText = $(".more");
    if (moreText.is(":visible")) {
      moreText.slideUp(300);
      $(this).text("More");
    } else {
      moreText.slideDown(300);
      $(this).text("Less");
    }
  });
});

$(document).ready(function () {
  $(".read-more-btn2").click(function () {
    const moreText = $(".more2");
    if (moreText.is(":visible")) {
      moreText.slideUp(300);
      $(this).text("More");
    } else {
      moreText.slideDown(300);
      $(this).text("Less");
    }
  });
});

$(document).ready(function () {
  $(".read-more-btn3").click(function () {
    const moreText = $(".more3");
    if (moreText.is(":visible")) {
      moreText.slideUp(300);
      $(this).text("More");
    } else {
      moreText.slideDown(300);
      $(this).text("Less");
    }
  });
});

$(".custom-select").each(function () {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr("placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  $(this)
    .find("option")
    .each(function () {
      template +=
        '<span class="custom-option ' +
        $(this).attr("class") +
        '" data-value="' +
        $(this).attr("value") +
        '">' +
        $(this).html() +
        "</span>";
    });
  template += "</div></div>";

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(
  function () {
    $(this).parents(".custom-options").addClass("option-hover");
  },
  function () {
    $(this).parents(".custom-options").removeClass("option-hover");
  }
);
$(".custom-select-trigger").on("click", function () {
  $("html").one("click", function () {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function () {
  $(this)
    .parents(".custom-select-wrapper")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".custom-options")
    .find(".custom-option")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this)
    .parents(".custom-select")
    .find(".custom-select-trigger")
    .text($(this).text());
});

$(document).ready(function () {
  // Show panel
  $(".toggle-filter-btn").on("click", function () {
    $(".filter-slide, .filter-backdrop").addClass("show");
  });

  // Hide panel
  $(".close-filter-btn, .filter-backdrop").on("click", function () {
    $(".filter-slide, .filter-backdrop").removeClass("show");
  });
});

function moveToNext(current, nextFieldId) {
  if (current.value.length === 1) {
    const nextField = document.getElementById(nextFieldId);
    if (nextField) nextField.focus();
  }
}

function moveToPrevious(event, previousFieldId) {
  if (event.key === "Backspace" && event.target.value === "") {
    const previousField = document.getElementById(previousFieldId);
    if (previousField) previousField.focus();
  }
}



// thumbslider

$(document).ready(function () {
  // Wrap each image in the gallery with a Fancybox link
  $('.gallery img').each(function () {
    var imgSrc = $(this).attr('src'); // Get the src attribute of the image
    $(this).wrap('<a href="' + imgSrc + '" data-fancybox="gallery"></a>'); // Wrap the image with a Fancybox link
  });

  // Initialize Fancybox
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
      // "zoom",
      // "share",
      // "slideShow",
      // "fullScreen",
      // "download",
      // "thumbs",
      "close"
    ]
  });
});

$(document).ready(function () {
  $(".categorytwo").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    stagePadding: 0,
    autoplay: false,
    arrow: true,
    dot: true
    // smartSpeed: 2500,
  });

  dotcount = 1;
  jQuery('.owl-dot').each(function () {
    jQuery(this).addClass('dotnumber' + dotcount);
    jQuery(this).attr('data-info', dotcount);
    dotcount = dotcount + 1;
  });

  slidecount = 1;

  jQuery('.owl-item').not('.cloned').each(function () {
    jQuery(this).addClass('slidenumber' + slidecount);
    slidecount = slidecount + 1;
  });

  // jQuery('.owl-dot').each(function () {
  //   grab = jQuery(this).data('info');
  //   slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');
  //   jQuery(this).css({
  //     "background-image": "url(" + slidegrab + ")",
  //     "width": "87px",
  //     "height": "87px",
  //     "margin-left": "0px",
  //     "background-size": "cover",
  //     "background-position": "center center",
  //     "background-repeat": "no-repeat"
  //   });
  // });

  $('.categorytwo.gallery .owl-dot').each(function () {
    let grab = jQuery(this).data('info');
    let slidegrab = jQuery('.categorytwo.gallery .slidenumber' + grab + ' img').attr('src');
  
    $(this).css({
      "background-image": "url(" + slidegrab + ")",
      "width": "87px",
      "height": "87px",
      "margin-left": "0px",
      "background-size": "cover",
      "background-position": "center center",
      "background-repeat": "no-repeat"
    });
  });
  
  

  amount = $('.owl-dot').length;
  gotowidth = 100 / amount;
  $('.owl-dot').css("height", gotowidth + "%");

});
