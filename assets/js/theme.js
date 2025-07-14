!(function (e) {
  "use strict";
  e(".nav-tabs").length &&
    e(".nav-tabs").each(function () {
      let t = e(this);
      t.find("li").on("click", function () {
        t.find("li").removeClass("active"), e(this).addClass("active");
      });
    }),
    e(".nano-area").on("mouseover", ".nano-item", function () {
      e(".nano-item.active").removeClass("active"), e(this).addClass("active");
    });
  let t = document.querySelectorAll(".blog-details__hide-comment");
  function a(t) {
    let a = window.location.href.split("/").reverse()[0];
    t.find("li").each(function () {
      let t = e(this).find("a");
      e(t).attr("href") == a && e(this).addClass("current");
    }),
      t.children("li").each(function () {
        e(this).find(".current").length && e(this).addClass("current");
      }),
      "" == a && t.find("li").eq(0).addClass("current");
  }
  if (
    (t.length &&
      t.forEach((t, a) => {
        t.addEventListener("click", (t) => {
          t.preventDefault();
          let a = t.target.dataset.toggletext,
            n = t.target.textContent,
            o = t.target.dataset.targetForToggle;
          (t.target.dataset.toggletext = n),
            (t.target.textContent = a),
            e(o).slideToggle();
        });
      }),
    e(".curved-circle").length &&
      e(".curved-circle").circleType({
        position: "absolute",
        dir: 0.95,
        radius: 85,
        forceHeight: !1,
        forceWidth: !0,
      }),
    e(".topbar-one__toggler").length &&
      e(".topbar-one__toggler").on("click", function () {
        e(".topbar-one").slideToggle(), e(this).toggleClass("open");
      }),
    e(".main-nav__main-navigation").length)
  ) {
    let n = e(".mobile-nav__container"),
      o = e(".main-nav__main-navigation").html();
    n.append(function () {
      return o;
    });
    let s = e(".main-nav__main-navigation").find(".main-nav__navigation-box"),
      i = n.find(".main-nav__navigation-box");
    i
      .find("li.dropdown")
      .append(
        '<button class="dropdown-btn"><i class="fa fa-angle-right"></i></button>'
      ),
      n.find(".dropdown-btn").on("click", function () {
        e(this).toggleClass("open"), e(this).prev("ul").slideToggle(500);
      }),
      a(s),
      a(i);
  }
  if (e(".mc-form").length) {
    var l = e(".mc-form").data("url");
    e(".mc-form").ajaxChimp({
      url: l,
      callback: function (t) {
        e(".mc-form__response").append(function () {
          return '<p class="mc-message">' + t.msg + "</p>";
        }),
          "success" === t.result &&
            (e(".mc-form").removeClass("errored").addClass("successed"),
            e(".mc-form__response")
              .removeClass("errored")
              .addClass("successed"),
            e(".mc-form").find("input").val(""),
            e(".mc-form__response p").fadeOut(1e4)),
          "error" === t.result &&
            (e(".mc-form").removeClass("successed").addClass("errored"),
            e(".mc-form__response")
              .removeClass("successed")
              .addClass("errored"),
            e(".mc-form").find("input").val(""),
            e(".mc-form__response p").fadeOut(1e4));
      },
    });
  }
  if (
    (e(".datepicker").length && e(".datepicker").datepicker(),
    e(".plan-visit__tab-links").length)
  ) {
    var r = e(".plan-visit__tab-links").find(".nav-link");
    r.on("click", function (t) {
      var a = e(this).attr("data-target");
      return (
        e("html, body").animate({ scrollTop: e(a).offset().top - 50 }, 1e3),
        r.removeClass("active"),
        e(this).addClass("active"),
        !1
      );
    });
  }
  if (
    (e(".contact-form-validated").length &&
      e(".contact-form-validated").validate({
        rules: {
          fname: { required: !0 },
          lname: { required: !0 },
          name: { required: !0 },
          email: { required: !0, email: !0 },
          service: { required: !0 },
          message: { required: !0 },
          subject: { required: !0 },
        },
        submitHandler: function (t) {
          return (
            e.post(e(t).attr("action"), e(t).serialize(), function (a) {
              e(t).parent().find(".result").append(a),
                e(t).find('input[type="text"]').val(""),
                e(t).find('input[type="email"]').val(""),
                e(t).find("textarea").val("");
            }),
            !1
          );
        },
      }),
    e(".counter").length && e(".counter").counterUp({ delay: 10, time: 1500 }),
    e(".img-popup").length)
  ) {
    var c = {};
    e(".img-popup").each(function () {
      var t = parseInt(e(this).attr("data-group"), 10);
      c[t] || (c[t] = []), c[t].push(this);
    }),
      e.each(c, function () {
        e(this).magnificPopup({
          type: "image",
          closeOnContentClick: !0,
          closeBtnInside: !1,
          gallery: { enabled: !0 },
        });
      });
  }
  e(".wow").length &&
    new WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: !0,
      live: !0,
    }).init(),
    e(".video-popup").length &&
      e(".video-popup").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !0,
        fixedContentPos: !1,
      }),
    e('[data-toggle="tooltip"]').length &&
      e('[data-toggle="tooltip"]').tooltip(),
    e(".stricky").length &&
      e(".stricky")
        .addClass("original")
        .clone(!0)
        .insertAfter(".stricky")
        .addClass("stricked-menu")
        .removeClass("original"),
    e(".scroll-to-target").length &&
      e(".scroll-to-target").on("click", function () {
        var t = e(this).attr("data-target");
        return (
          e("html, body").animate({ scrollTop: e(t).offset().top }, 1e3), !1
        );
      }),
    e(".side-menu__toggler").length &&
      e(".side-menu__toggler").on("click", function (t) {
        e(".side-menu__block").toggleClass("active"), t.preventDefault();
      }),
    e(".side-menu__block-overlay").length &&
      e(".side-menu__block-overlay").on("click", function (t) {
        e(".side-menu__block").removeClass("active"), t.preventDefault();
      }),
    e(".side-content__toggler").length &&
      e(".side-content__toggler").on("click", function (t) {
        e(".side-content__block").toggleClass("active"),
          e("body").toggleClass("scrollLock"),
          t.preventDefault();
      }),
    e(".side-content__block-overlay").length &&
      e(".side-content__block-overlay").on("click", function (t) {
        e(".side-content__block").removeClass("active"),
          e("body").removeClass("scrollLock"),
          t.preventDefault();
      }),
    e(".side-content__close").length &&
      e(".side-content__close").on("click", function (t) {
        e(".side-content__block").removeClass("active"),
          e("body").removeClass("scrollLock"),
          t.preventDefault();
      }),
    e(".search-popup__toggler").length &&
      e(".search-popup__toggler").on("click", function (t) {
        e(".search-popup").addClass("active"), t.preventDefault();
      }),
    e(".search-popup__overlay").length &&
      e(".search-popup__overlay").on("click", function (t) {
        e(".search-popup").removeClass("active"), t.preventDefault();
      }),
    e(window).on("scroll", function () {
      if (
        (e(".scroll-to-top").length &&
          (e(window).scrollTop() > 100
            ? e(".scroll-to-top").fadeIn(500)
            : 100 >= e(this).scrollTop() && e(".scroll-to-top").fadeOut(500)),
        e(".stricked-menu").length)
      ) {
        var t,
          a = e(".stricked-menu");
        e(window).scrollTop() > 0
          ? a.addClass("stricky-fixed")
          : 0 >= e(this).scrollTop() && a.removeClass("stricky-fixed");
      }
    }),
    e(".accrodion-grp").length &&
      e(".accrodion-grp").each(function () {
        var t = e(this).data("grp-name"),
          a = e(this),
          n = a.find(".accrodion");
        a.addClass(t),
          a.find(".accrodion .accrodion-content").hide(),
          a.find(".accrodion.active").find(".accrodion-content").show(),
          n.each(function () {
            e(this)
              .find(".accrodion-title")
              .on("click", function () {
                !1 === e(this).parent().hasClass("active") &&
                  (e(".accrodion-grp." + t)
                    .find(".accrodion")
                    .removeClass("active"),
                  e(".accrodion-grp." + t)
                    .find(".accrodion")
                    .find(".accrodion-content")
                    .slideUp(),
                  e(this).parent().addClass("active"),
                  e(this).parent().find(".accrodion-content").slideDown());
              });
          });
      }),
    e(".thm__owl-carousel").length &&
      e(".thm__owl-carousel").each(function () {
        var t = e(this),
          a = t.data("options"),
          n = t.data("carousel-prev-btn"),
          o = t.data("carousel-next-btn"),
          s = t.data("carousel-dots-container"),
          i = t.owlCarousel(a);
        void 0 !== n &&
          e(n).on("click", function () {
            return i.trigger("prev.owl.carousel", [1e3]), !1;
          }),
          void 0 !== o &&
            e(o).on("click", function () {
              return i.trigger("next.owl.carousel", [1e3]), !1;
            }),
          void 0 !== s &&
            e(s)
              .find(".owl-dot")
              .on("click", function () {
                var t = e(this).index();
                i.trigger("to.owl.carousel", [t, 1e3]);
              });
      }),
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
      if (
        (e(".masonary-layout").length &&
          e(".masonary-layout").isotope({
            layoutMode: "masonry",
            itemSelector: ".masonary-item",
          }),
        e(".post-filter").length)
      ) {
        var l = e(".post-filter li");
        e(".filter-layout").isotope({
          filter: ".filter-item",
          animationOptions: { duration: 500, easing: "linear", queue: !1 },
        }),
          l.children("span").on("click", function () {
            var t = e(this),
              a = t.parent().attr("data-filter");
            return (
              l.children("span").parent().removeClass("active"),
              t.parent().addClass("active"),
              e(".filter-layout").isotope({
                filter: a,
                animationOptions: {
                  duration: 500,
                  easing: "linear",
                  queue: !1,
                },
              }),
              !1
            );
          });
      }
      if (
        (e(".post-filter.has-dynamic-filter-counter").length &&
          e(".post-filter.has-dynamic-filter-counter")
            .find("li")
            .each(function () {
              var t = e(this).data("filter"),
                a = e(".gallery-content").find(t).length;
              e(this)
                .children("span")
                .append('<span class="count"><b>' + a + "</b></span>");
            }),
        e(".testimonials-two__thumb-carousel").length)
      )
        var r = new Swiper(".testimonials-two__thumb-carousel", {
          slidesPerView: 3,
          spaceBetween: 20,
          freeMode: !0,
          speed: 1400,
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          loop: !0,
          autoplay: { delay: 5e3 },
        });
      if (
        (e(".testimonials-two__carousel").length &&
          new Swiper(".testimonials-two__carousel", {
            navigation: { nextEl: "", prevEl: "" },
            observer: !0,
            observeParents: !0,
            speed: 1400,
            mousewheel: !0,
            autoplay: { delay: 5e3 },
            thumbs: { swiper: r },
          }),
        e(".banner-carousel").length &&
          e(".banner-carousel").owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            active: !0,
            smartSpeed: 1e3,
            autoplay: 6e3,
            navText: [
              '<span class="far fa-angle-up"></span>',
              '<span class="far fa-angle-down"></span>',
            ],
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              800: { items: 1 },
              1024: { items: 1 },
            },
          }),
        e(".banner-carousel-2").length &&
          e(".banner-carousel-2").owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            active: !0,
            smartSpeed: 1e3,
            autoplay: 6e3,
            autoplayHoverPause: !0,
            navText: [
              '<span class="far fa-angle-left"></span>',
              '<span class="far fa-angle-right"></span>',
            ],
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              800: { items: 1 },
              1024: { items: 1 },
            },
          }),
        e(".count-box").length &&
          e(".count-box").appear(
            function () {
              var t = e(this),
                a = t.find(".count-text").attr("data-stop"),
                n = parseInt(t.find(".count-text").attr("data-speed"), 10);
              t.hasClass("counted") ||
                (t.addClass("counted"),
                e({ countNum: t.find(".count-text").text() }).animate(
                  { countNum: a },
                  {
                    duration: n,
                    easing: "linear",
                    step: function () {
                      t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                      t.find(".count-text").text(this.countNum);
                    },
                  }
                ));
            },
            { accY: 0 }
          ),
        e(".count-bar").length &&
          e(".count-bar").appear(
            function () {
              var t = e(this),
                a = t.data("percent");
              e(t).css("width", a).addClass("counted");
            },
            { accY: -50 }
          ),
        e(".client-testimonial-carousel").length &&
          e(".client-thumbs-carousel").length)
      ) {
        var c = e(".client-testimonial-carousel"),
          d = e(".client-thumbs-carousel"),
          u = !1;
        c
          .owlCarousel({
            loop: !0,
            items: 1,
            margin: 0,
            nav: !0,
            navText: [
              '<span class="far fa-long-arrow-up"></span>',
              '<span class="far fa-long-arrow-down"></span>',
            ],
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
          })
          .on("changed.owl.carousel", function (e) {
            u ||
              ((u = !1),
              d.trigger("to.owl.carousel", [e.item.index, 500, !0]),
              (u = !1));
          }),
          d
            .owlCarousel({
              loop: !0,
              margin: 5,
              items: 1,
              nav: !1,
              navText: [
                '<span class="fas fa-long-arrow-up"></span>',
                '<span class="fas fa-long-arrow-down"></span>',
              ],
              dots: !0,
              center: !1,
              autoplay: !0,
              autoplayTimeout: 5e3,
              responsive: {
                0: { items: 1, autoWidth: !1 },
                400: { items: 1, autoWidth: !1 },
                600: { items: 1, autoWidth: !1 },
                1e3: { items: 1, autoWidth: !1 },
                1200: { items: 1, autoWidth: !1 },
              },
            })
            .on("click", ".owl-item", function () {
              c.trigger("to.owl.carousel", [e(this).index(), 500, !0]);
            })
            .on("changed.owl.carousel", function (e) {
              u ||
                ((u = !0),
                c.trigger("to.owl.carousel", [e.item.index, 500, !0]),
                (u = !1));
            });
      }
      e(".tabs-box").length &&
        e(".tabs-box .tab-buttons .tab-btn").on("click", function (t) {
          t.preventDefault();
          var a = e(e(this).attr("data-tab"));
          if (e(a).is(":visible")) return !1;
          a
            .parents(".tabs-box")
            .find(".tab-buttons")
            .find(".tab-btn")
            .removeClass("active-btn"),
            e(this).addClass("active-btn"),
            a
              .parents(".tabs-box")
              .find(".tabs-content")
              .find(".tab")
              .fadeOut(0),
            a
              .parents(".tabs-box")
              .find(".tabs-content")
              .find(".tab")
              .removeClass("active-tab"),
            e(a).fadeIn(300),
            e(a).addClass("active-tab");
        });
    });
})(jQuery);
