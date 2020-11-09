$(document).ready(function () {

  //about panel height fit to tab height
  var fitHeight = function () {
    var tabHeight = $(".aboutTab .tab>div").outerHeight();
    $(".panelImg").outerHeight(tabHeight);

    $(window).resize(function () {
      var tabHeight = $(".aboutTab .tab>div").outerHeight();
      $(".panelImg").outerHeight(tabHeight);
    });
  }

  fitHeight();

  // about section tabs
  $(".aboutTab .tab, .mobileTab button").click(function () {
    var tabIndex = $(this).index();
    //alert(tabIndex);

    $(".aboutTab .tab, .mobileTab button").removeClass("on");
    $(this).addClass("on");

    $(".aboutPanel").hide();
    $(".aboutPanel").eq(tabIndex).show();
  });

  $(".aboutPanel").eq(0).show();

  // mobile menu click event
  $(".menuBtn").click(function () {
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(".gnb").animate({ right: 0 }, 300);
    } else {
      $(".gnb").animate({ right: '-100%' }, 300);
    }

    if ($("header").hasClass("on")) {
      if ($(this).hasClass("on")) {
        $(this).find("div").css("background", "#fff");
      } else {
        $(this).find("div").css("background", "#101010");
      }
    }
  });

});

$(window).on("load", function () {
  $("body").addClass("loaded");
  $(".main_txt>div.slogan h1").addClass("effect1");
  $(".main_txt>div.txt_img").addClass("effect2");
  $(".main_txt>div.txt_desc").addClass("effect3");
});