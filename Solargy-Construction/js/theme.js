!(function (e) {
  "use strict";

  e(window).on("load", function () {
    if (
      (e(".preloader").length && e(".preloader").fadeOut("slow"),
      e(".side-menu__block-inner").length &&
        e(".side-menu__block-inner").mCustomScrollbar({
          axis: "y",
          theme: "dark",
        }),
      e(".custom-cursor__overlay").length)
    ) {
      var t = e(".custom-cursor__overlay .cursor"),
        a = e(".custom-cursor__overlay .cursor-follower"),
        n = 0,
        o = 0,
        s = 0,
        i = 0;
      TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
          (n += (s - n) / 9),
            (o += (i - o) / 9),
            TweenMax.set(a, { css: { left: n - 22, top: o - 22 } }),
            TweenMax.set(t, { css: { left: s, top: i } });
        },
      }),
        e(document).on("mousemove", function (e) {
          var t = window.pageYOffset || document.documentElement.scrollTop;
          (s = e.pageX), (i = e.pageY - t);
        }),
        e("button, a").on("mouseenter", function () {
          t.addClass("active"), a.addClass("active");
        }),
        e("button, a").on("mouseleave", function () {
          t.removeClass("active"), a.removeClass("active");
        }),
        e(".custom-cursor__overlay").on("mouseenter", function () {
          t.addClass("close-cursor"), a.addClass("close-cursor");
        }),
        e(".custom-cursor__overlay").on("mouseleave", function () {
          t.removeClass("close-cursor"), a.removeClass("close-cursor");
        });
    }
  });
})(jQuery);
