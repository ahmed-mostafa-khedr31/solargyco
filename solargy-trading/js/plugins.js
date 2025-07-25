/*!
Waypoints - 4.0.1
Copyright Ã‚Â© 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/

/*!
 * Bootstrap v4.5.0 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery", "popper.js"], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
})(this, function (t, e, n) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }
  function s(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function r(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      e &&
        (i = i.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, i);
    }
    return n;
  }
  function a(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? r(Object(n), !0).forEach(function (e) {
            s(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : r(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  (e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e),
    (n =
      n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n);
  function l(t) {
    var n = this,
      i = !1;
    return (
      e(this).one(c.TRANSITION_END, function () {
        i = !0;
      }),
      setTimeout(function () {
        i || c.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  var c = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute("data-target");
      if (!e || "#" === e) {
        var n = t.getAttribute("href");
        e = n && "#" !== n ? n.trim() : "";
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var n = e(t).css("transition-duration"),
        i = e(t).css("transition-delay"),
        o = parseFloat(n),
        s = parseFloat(i);
      return o || s
        ? ((n = n.split(",")[0]),
          (i = i.split(",")[0]),
          1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      e(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            s = e[i],
            r =
              s && c.isElement(s)
                ? "element"
                : null === (a = s) || "undefined" == typeof a
                ? "" + a
                : {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(r))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                r +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var a;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? c.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ("undefined" == typeof e)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = e.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  c.jQueryDetection(),
    (e.fn.emulateTransitionEnd = l),
    (e.event.special[c.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (e(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var h = "alert",
    u = e.fn[h],
    d = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.alert"), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var n = c.getSelectorFromElement(t),
            i = !1;
          return (
            n && (i = document.querySelector(n)),
            i || (i = e(t).closest(".alert")[0]),
            i
          );
        }),
        (n._triggerCloseEvent = function (t) {
          var n = e.Event("close.bs.alert");
          return e(t).trigger(n), n;
        }),
        (n._removeElement = function (t) {
          var n = this;
          if ((e(t).removeClass("show"), e(t).hasClass("fade"))) {
            var i = c.getTransitionDurationFromElement(t);
            e(t)
              .one(c.TRANSITION_END, function (e) {
                return n._destroyElement(t, e);
              })
              .emulateTransitionEnd(i);
          } else this._destroyElement(t);
        }),
        (n._destroyElement = function (t) {
          e(t).detach().trigger("closed.bs.alert").remove();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.alert");
            o || ((o = new t(this)), i.data("bs.alert", o)),
              "close" === n && o[n](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.alert.data-api",
    '[data-dismiss="alert"]',
    d._handleDismiss(new d())
  ),
    (e.fn[h] = d._jQueryInterface),
    (e.fn[h].Constructor = d),
    (e.fn[h].noConflict = function () {
      return (e.fn[h] = u), d._jQueryInterface;
    });
  var f = e.fn.button,
    g = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          var t = !0,
            n = !0,
            i = e(this._element).closest('[data-toggle="buttons"]')[0];
          if (i) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active"))
                  t = !1;
                else {
                  var s = i.querySelector(".active");
                  s && e(s).removeClass("active");
                }
              t &&
                (("checkbox" !== o.type && "radio" !== o.type) ||
                  (o.checked = !this._element.classList.contains("active")),
                e(o).trigger("change")),
                o.focus(),
                (n = !1);
            }
          }
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (n &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains("active")
              ),
            t && e(this._element).toggleClass("active"));
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.button"), (this._element = null);
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.button");
            i || ((i = new t(this)), e(this).data("bs.button", i)),
              "toggle" === n && i[n]();
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var n = t.target,
        i = n;
      if (
        (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]),
        !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
      )
        t.preventDefault();
      else {
        var o = n.querySelector('input:not([type="hidden"])');
        if (
          o &&
          (o.hasAttribute("disabled") || o.classList.contains("disabled"))
        )
          return void t.preventDefault();
        "LABEL" === i.tagName &&
          o &&
          "checkbox" === o.type &&
          t.preventDefault(),
          g._jQueryInterface.call(e(n), "toggle");
      }
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type));
      }
    ),
    e(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var s = 0,
          r = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        s < r;
        s++
      ) {
        var a = t[s];
        "true" === a.getAttribute("aria-pressed")
          ? a.classList.add("active")
          : a.classList.remove("active");
      }
    }),
    (e.fn.button = g._jQueryInterface),
    (e.fn.button.Constructor = g),
    (e.fn.button.noConflict = function () {
      return (e.fn.button = f), g._jQueryInterface;
    });
  var m = "carousel",
    p = ".bs.carousel",
    _ = e.fn[m],
    v = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    b = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    y = { TOUCH: "touch", PEN: "pen" },
    E = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            ".carousel-indicators"
          )),
          (this._touchSupported =
            "ontouchstart" in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide("next");
        }),
        (n.nextWhenVisible = function () {
          !document.hidden &&
            e(this._element).is(":visible") &&
            "hidden" !== e(this._element).css("visibility") &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev"
            ) && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
        }),
        (n.to = function (t) {
          var n = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item"
          );
          var i = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              e(this._element).one("slid.bs.carousel", function () {
                return n.to(t);
              });
            else {
              if (i === t) return this.pause(), void this.cycle();
              var o = t > i ? "next" : "prev";
              this._slide(o, this._items[t]);
            }
        }),
        (n.dispose = function () {
          e(this._element).off(p),
            e.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = a(a({}, v), t)), c.typeCheckConfig(m, t, b), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (n._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            e(this._element).on("keydown.bs.carousel", function (e) {
              return t._keydown(e);
            }),
            "hover" === this._config.pause &&
              e(this._element)
                .on("mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                })
                .on("mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var n = function (e) {
                t._pointerEvent && y[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              i = function (e) {
                t._pointerEvent &&
                  y[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            e(this._element.querySelectorAll(".carousel-item img")).on(
              "dragstart.bs.carousel",
              function (t) {
                return t.preventDefault();
              }
            ),
              this._pointerEvent
                ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("pointerup.bs.carousel", function (t) {
                    return i(t);
                  }),
                  this._element.classList.add("pointer-event"))
                : (e(this._element).on("touchstart.bs.carousel", function (t) {
                    return n(t);
                  }),
                  e(this._element).on("touchmove.bs.carousel", function (e) {
                    return (function (e) {
                      e.originalEvent.touches &&
                      e.originalEvent.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX =
                            e.originalEvent.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  e(this._element).on("touchend.bs.carousel", function (t) {
                    return i(t);
                  }));
          }
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            s = this._items.length - 1;
          if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
            return e;
          var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 === r
            ? this._items[this._items.length - 1]
            : this._items[r];
        }),
        (n._triggerSlideEvent = function (t, n) {
          var i = this._getItemIndex(t),
            o = this._getItemIndex(
              this._element.querySelector(".active.carousel-item")
            ),
            s = e.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: n,
              from: o,
              to: i,
            });
          return e(this._element).trigger(s), s;
        }),
        (n._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var n = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active")
            );
            e(n).removeClass("active");
            var i = this._indicatorsElement.children[this._getItemIndex(t)];
            i && e(i).addClass("active");
          }
        }),
        (n._slide = function (t, n) {
          var i,
            o,
            s,
            r = this,
            a = this._element.querySelector(".active.carousel-item"),
            l = this._getItemIndex(a),
            h = n || (a && this._getItemByDirection(t, a)),
            u = this._getItemIndex(h),
            d = Boolean(this._interval);
          if (
            ("next" === t
              ? ((i = "carousel-item-left"),
                (o = "carousel-item-next"),
                (s = "left"))
              : ((i = "carousel-item-right"),
                (o = "carousel-item-prev"),
                (s = "right")),
            h && e(h).hasClass("active"))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(h, s).isDefaultPrevented() &&
            a &&
            h
          ) {
            (this._isSliding = !0),
              d && this.pause(),
              this._setActiveIndicatorElement(h);
            var f = e.Event("slid.bs.carousel", {
              relatedTarget: h,
              direction: s,
              from: l,
              to: u,
            });
            if (e(this._element).hasClass("slide")) {
              e(h).addClass(o), c.reflow(h), e(a).addClass(i), e(h).addClass(i);
              var g = parseInt(h.getAttribute("data-interval"), 10);
              g
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = g))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
              var m = c.getTransitionDurationFromElement(a);
              e(a)
                .one(c.TRANSITION_END, function () {
                  e(h)
                    .removeClass(i + " " + o)
                    .addClass("active"),
                    e(a).removeClass("active " + o + " " + i),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return e(r._element).trigger(f);
                    }, 0);
                })
                .emulateTransitionEnd(m);
            } else
              e(a).removeClass("active"),
                e(h).addClass("active"),
                (this._isSliding = !1),
                e(this._element).trigger(f);
            d && this.cycle();
          }
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.carousel"),
              o = a(a({}, v), e(this).data());
            "object" == typeof n && (o = a(a({}, o), n));
            var s = "string" == typeof n ? n : o.slide;
            if (
              (i || ((i = new t(this, o)), e(this).data("bs.carousel", i)),
              "number" == typeof n)
            )
              i.to(n);
            else if ("string" == typeof s) {
              if ("undefined" == typeof i[s])
                throw new TypeError('No method named "' + s + '"');
              i[s]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var i = c.getSelectorFromElement(this);
          if (i) {
            var o = e(i)[0];
            if (o && e(o).hasClass("carousel")) {
              var s = a(a({}, e(o).data()), e(this).data()),
                r = this.getAttribute("data-slide-to");
              r && (s.interval = !1),
                t._jQueryInterface.call(e(o), s),
                r && e(o).data("bs.carousel").to(r),
                n.preventDefault();
            }
          }
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return v;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.carousel.data-api",
    "[data-slide], [data-slide-to]",
    E._dataApiClickHandler
  ),
    e(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          n = 0,
          i = t.length;
        n < i;
        n++
      ) {
        var o = e(t[n]);
        E._jQueryInterface.call(o, o.data());
      }
    }),
    (e.fn[m] = E._jQueryInterface),
    (e.fn[m].Constructor = E),
    (e.fn[m].noConflict = function () {
      return (e.fn[m] = _), E._jQueryInterface;
    });
  var w = "collapse",
    T = e.fn[w],
    C = { toggle: !0, parent: "" },
    S = { toggle: "boolean", parent: "(string|element)" },
    D = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(
              document.querySelectorAll('[data-toggle="collapse"]')
            ),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var s = n[i],
            r = c.getSelectorFromElement(s),
            a = [].slice
              .call(document.querySelectorAll(r))
              .filter(function (e) {
                return e === t;
              });
          null !== r &&
            a.length > 0 &&
            ((this._selector = r), this._triggerArray.push(s));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          e(this._element).hasClass("show") ? this.hide() : this.show();
        }),
        (n.show = function () {
          var n,
            i,
            o = this;
          if (
            !this._isTransitioning &&
            !e(this._element).hasClass("show") &&
            (this._parent &&
              0 ===
                (n = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length &&
              (n = null),
            !(
              n &&
              (i = e(n).not(this._selector).data("bs.collapse")) &&
              i._isTransitioning
            ))
          ) {
            var s = e.Event("show.bs.collapse");
            if ((e(this._element).trigger(s), !s.isDefaultPrevented())) {
              n &&
                (t._jQueryInterface.call(e(n).not(this._selector), "hide"),
                i || e(n).data("bs.collapse", null));
              var r = this._getDimension();
              e(this._element).removeClass("collapse").addClass("collapsing"),
                (this._element.style[r] = 0),
                this._triggerArray.length &&
                  e(this._triggerArray)
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  e(o._element)
                    .removeClass("collapsing")
                    .addClass("collapse show"),
                    (o._element.style[r] = ""),
                    o.setTransitioning(!1),
                    e(o._element).trigger("shown.bs.collapse");
                })
                .emulateTransitionEnd(l),
                (this._element.style[r] = this._element[a] + "px");
            }
          }
        }),
        (n.hide = function () {
          var t = this;
          if (!this._isTransitioning && e(this._element).hasClass("show")) {
            var n = e.Event("hide.bs.collapse");
            if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
              var i = this._getDimension();
              (this._element.style[i] =
                this._element.getBoundingClientRect()[i] + "px"),
                c.reflow(this._element),
                e(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var s = 0; s < o; s++) {
                  var r = this._triggerArray[s],
                    a = c.getSelectorFromElement(r);
                  if (null !== a)
                    e([].slice.call(document.querySelectorAll(a))).hasClass(
                      "show"
                    ) || e(r).addClass("collapsed").attr("aria-expanded", !1);
                }
              this.setTransitioning(!0);
              this._element.style[i] = "";
              var l = c.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(c.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    e(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = a(a({}, C), t)).toggle = Boolean(t.toggle)),
            c.typeCheckConfig(w, t, S),
            t
          );
        }),
        (n._getDimension = function () {
          return e(this._element).hasClass("width") ? "width" : "height";
        }),
        (n._getParent = function () {
          var n,
            i = this;
          c.isElement(this._config.parent)
            ? ((n = this._config.parent),
              "undefined" != typeof this._config.parent.jquery &&
                (n = this._config.parent[0]))
            : (n = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            s = [].slice.call(n.querySelectorAll(o));
          return (
            e(s).each(function (e, n) {
              i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, n) {
          var i = e(t).hasClass("show");
          n.length &&
            e(n).toggleClass("collapsed", !i).attr("aria-expanded", i);
        }),
        (t._getTargetFromElement = function (t) {
          var e = c.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.collapse"),
              s = a(a(a({}, C), i.data()), "object" == typeof n && n ? n : {});
            if (
              (!o &&
                s.toggle &&
                "string" == typeof n &&
                /show|hide/.test(n) &&
                (s.toggle = !1),
              o || ((o = new t(this, s)), i.data("bs.collapse", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return C;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.collapse.data-api",
    '[data-toggle="collapse"]',
    function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = e(this),
        i = c.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      e(o).each(function () {
        var t = e(this),
          i = t.data("bs.collapse") ? "toggle" : n.data();
        D._jQueryInterface.call(t, i);
      });
    }
  ),
    (e.fn[w] = D._jQueryInterface),
    (e.fn[w].Constructor = D),
    (e.fn[w].noConflict = function () {
      return (e.fn[w] = T), D._jQueryInterface;
    });
  var k = "dropdown",
    N = e.fn[k],
    A = new RegExp("38|40|27"),
    I = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    O = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    j = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var i = t.prototype;
      return (
        (i.toggle = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled")
          ) {
            var n = e(this._menu).hasClass("show");
            t._clearMenus(), n || this.show(!0);
          }
        }),
        (i.show = function (i) {
          if (
            (void 0 === i && (i = !1),
            !(
              this._element.disabled ||
              e(this._element).hasClass("disabled") ||
              e(this._menu).hasClass("show")
            ))
          ) {
            var o = { relatedTarget: this._element },
              s = e.Event("show.bs.dropdown", o),
              r = t._getParentFromElement(this._element);
            if ((e(r).trigger(s), !s.isDefaultPrevented())) {
              if (!this._inNavbar && i) {
                if ("undefined" == typeof n)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                  );
                var a = this._element;
                "parent" === this._config.reference
                  ? (a = r)
                  : c.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    "undefined" != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                    e(r).addClass("position-static"),
                  (this._popper = new n(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === e(r).closest(".navbar-nav").length &&
                e(document.body).children().on("mouseover", null, e.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                e(this._menu).toggleClass("show"),
                e(r)
                  .toggleClass("show")
                  .trigger(e.Event("shown.bs.dropdown", o));
            }
          }
        }),
        (i.hide = function () {
          if (
            !this._element.disabled &&
            !e(this._element).hasClass("disabled") &&
            e(this._menu).hasClass("show")
          ) {
            var n = { relatedTarget: this._element },
              i = e.Event("hide.bs.dropdown", n),
              o = t._getParentFromElement(this._element);
            e(o).trigger(i),
              i.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                e(this._menu).toggleClass("show"),
                e(o)
                  .toggleClass("show")
                  .trigger(e.Event("hidden.bs.dropdown", n)));
          }
        }),
        (i.dispose = function () {
          e.removeData(this._element, "bs.dropdown"),
            e(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (i.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i._addEventListeners = function () {
          var t = this;
          e(this._element).on("click.bs.dropdown", function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (i._getConfig = function (t) {
          return (
            (t = a(
              a(a({}, this.constructor.Default), e(this._element).data()),
              t
            )),
            c.typeCheckConfig(k, t, this.constructor.DefaultType),
            t
          );
        }),
        (i._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(".dropdown-menu"));
          }
          return this._menu;
        }),
        (i._getPlacement = function () {
          var t = e(this._element.parentNode),
            n = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (n = e(this._menu).hasClass("dropdown-menu-right")
                  ? "top-end"
                  : "top-start")
              : t.hasClass("dropright")
              ? (n = "right-start")
              : t.hasClass("dropleft")
              ? (n = "left-start")
              : e(this._menu).hasClass("dropdown-menu-right") &&
                (n = "bottom-end"),
            n
          );
        }),
        (i._detectNavbar = function () {
          return e(this._element).closest(".navbar").length > 0;
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      a({}, e.offsets),
                      t._config.offset(e.offsets, t._element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (i._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a(a({}, t), this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.dropdown");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n ? n : null)),
                e(this).data("bs.dropdown", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        (t._clearMenus = function (n) {
          if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
            for (
              var i = [].slice.call(
                  document.querySelectorAll('[data-toggle="dropdown"]')
                ),
                o = 0,
                s = i.length;
              o < s;
              o++
            ) {
              var r = t._getParentFromElement(i[o]),
                a = e(i[o]).data("bs.dropdown"),
                l = { relatedTarget: i[o] };
              if ((n && "click" === n.type && (l.clickEvent = n), a)) {
                var c = a._menu;
                if (
                  e(r).hasClass("show") &&
                  !(
                    n &&
                    (("click" === n.type &&
                      /input|textarea/i.test(n.target.tagName)) ||
                      ("keyup" === n.type && 9 === n.which)) &&
                    e.contains(r, n.target)
                  )
                ) {
                  var h = e.Event("hide.bs.dropdown", l);
                  e(r).trigger(h),
                    h.isDefaultPrevented() ||
                      ("ontouchstart" in document.documentElement &&
                        e(document.body)
                          .children()
                          .off("mouseover", null, e.noop),
                      i[o].setAttribute("aria-expanded", "false"),
                      a._popper && a._popper.destroy(),
                      e(c).removeClass("show"),
                      e(r)
                        .removeClass("show")
                        .trigger(e.Event("hidden.bs.dropdown", l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = c.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (n) {
          if (
            !(/input|textarea/i.test(n.target.tagName)
              ? 32 === n.which ||
                (27 !== n.which &&
                  ((40 !== n.which && 38 !== n.which) ||
                    e(n.target).closest(".dropdown-menu").length))
              : !A.test(n.which)) &&
            !this.disabled &&
            !e(this).hasClass("disabled")
          ) {
            var i = t._getParentFromElement(this),
              o = e(i).hasClass("show");
            if (o || 27 !== n.which) {
              if (
                (n.preventDefault(),
                n.stopPropagation(),
                !o || (o && (27 === n.which || 32 === n.which)))
              )
                return (
                  27 === n.which &&
                    e(i.querySelector('[data-toggle="dropdown"]')).trigger(
                      "focus"
                    ),
                  void e(this).trigger("click")
                );
              var s = [].slice
                .call(
                  i.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                )
                .filter(function (t) {
                  return e(t).is(":visible");
                });
              if (0 !== s.length) {
                var r = s.indexOf(n.target);
                38 === n.which && r > 0 && r--,
                  40 === n.which && r < s.length - 1 && r++,
                  r < 0 && (r = 0),
                  s[r].focus();
              }
            }
          }
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return I;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return O;
            },
          },
        ]),
        t
      );
    })();
  e(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      j._dataApiKeydownHandler
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      j._dataApiKeydownHandler
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        j._jQueryInterface.call(e(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (e.fn[k] = j._jQueryInterface),
    (e.fn[k].Constructor = j),
    (e.fn[k].noConflict = function () {
      return (e.fn[k] = N), j._jQueryInterface;
    });
  var P = e.fn.modal,
    x = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    L = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    R = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(".modal-dialog")),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var n = t.prototype;
      return (
        (n.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (n.show = function (t) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            e(this._element).hasClass("fade") && (this._isTransitioning = !0);
            var i = e.Event("show.bs.modal", { relatedTarget: t });
            e(this._element).trigger(i),
              this._isShown ||
                i.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  "click.dismiss.bs.modal",
                  '[data-dismiss="modal"]',
                  function (t) {
                    return n.hide(t);
                  }
                ),
                e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                  e(n._element).one("mouseup.dismiss.bs.modal", function (t) {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                }));
          }
        }),
        (n.hide = function (t) {
          var n = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var i = e.Event("hide.bs.modal");
            if (
              (e(this._element).trigger(i),
              this._isShown && !i.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = e(this._element).hasClass("fade");
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(document).off("focusin.bs.modal"),
                e(this._element).removeClass("show"),
                e(this._element).off("click.dismiss.bs.modal"),
                e(this._dialog).off("mousedown.dismiss.bs.modal"),
                o)
              ) {
                var s = c.getTransitionDurationFromElement(this._element);
                e(this._element)
                  .one(c.TRANSITION_END, function (t) {
                    return n._hideModal(t);
                  })
                  .emulateTransitionEnd(s);
              } else this._hideModal();
            }
          }
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return e(t).off(".bs.modal");
          }),
            e(document).off("focusin.bs.modal"),
            e.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = a(a({}, x), t)), c.typeCheckConfig("modal", t, L), t;
        }),
        (n._triggerBackdropTransition = function () {
          var t = this;
          if ("static" === this._config.backdrop) {
            var n = e.Event("hidePrevented.bs.modal");
            if ((e(this._element).trigger(n), n.defaultPrevented)) return;
            this._element.classList.add("modal-static");
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(c.TRANSITION_END, function () {
                t._element.classList.remove("modal-static");
              })
              .emulateTransitionEnd(i),
              this._element.focus();
          } else this.hide();
        }),
        (n._showElement = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            e(this._dialog).hasClass("modal-dialog-scrollable") && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            i && c.reflow(this._element),
            e(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var s = e.Event("shown.bs.modal", { relatedTarget: t }),
            r = function () {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                e(n._element).trigger(s);
            };
          if (i) {
            var a = c.getTransitionDurationFromElement(this._dialog);
            e(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(a);
          } else r();
        }),
        (n._enforceFocus = function () {
          var t = this;
          e(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (n) {
              document !== n.target &&
                t._element !== n.target &&
                0 === e(t._element).has(n.target).length &&
                t._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
        }),
        (n._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? e(window).on("resize.bs.modal", function (e) {
                return t.handleUpdate(e);
              })
            : e(window).off("resize.bs.modal");
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              e(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                e(t._element).trigger("hidden.bs.modal");
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (e(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var n = this,
            i = e(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              i && this._backdrop.classList.add(i),
              e(this._backdrop).appendTo(document.body),
              e(this._element).on("click.dismiss.bs.modal", function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    n._triggerBackdropTransition();
              }),
              i && c.reflow(this._backdrop),
              e(this._backdrop).addClass("show"),
              !t)
            )
              return;
            if (!i) return void t();
            var o = c.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            e(this._backdrop).removeClass("show");
            var s = function () {
              n._removeBackdrop(), t && t();
            };
            if (e(this._element).hasClass("fade")) {
              var r = c.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop)
                .one(c.TRANSITION_END, s)
                .emulateTransitionEnd(r);
            } else s();
          } else t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(
                document.querySelectorAll(
                  ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
                )
              ),
              i = [].slice.call(document.querySelectorAll(".sticky-top"));
            e(n).each(function (n, i) {
              var o = i.style.paddingRight,
                s = e(i).css("padding-right");
              e(i)
                .data("padding-right", o)
                .css("padding-right", parseFloat(s) + t._scrollbarWidth + "px");
            }),
              e(i).each(function (n, i) {
                var o = i.style.marginRight,
                  s = e(i).css("margin-right");
                e(i)
                  .data("margin-right", o)
                  .css(
                    "margin-right",
                    parseFloat(s) - t._scrollbarWidth + "px"
                  );
              });
            var o = document.body.style.paddingRight,
              s = e(document.body).css("padding-right");
            e(document.body)
              .data("padding-right", o)
              .css(
                "padding-right",
                parseFloat(s) + this._scrollbarWidth + "px"
              );
          }
          e(document.body).addClass("modal-open");
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
            )
          );
          e(t).each(function (t, n) {
            var i = e(n).data("padding-right");
            e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
          });
          var n = [].slice.call(document.querySelectorAll(".sticky-top"));
          e(n).each(function (t, n) {
            var i = e(n).data("margin-right");
            "undefined" != typeof i &&
              e(n).css("margin-right", i).removeData("margin-right");
          });
          var i = e(document.body).data("padding-right");
          e(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = i || "");
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (n, i) {
          return this.each(function () {
            var o = e(this).data("bs.modal"),
              s = a(
                a(a({}, x), e(this).data()),
                "object" == typeof n && n ? n : {}
              );
            if (
              (o || ((o = new t(this, s)), e(this).data("bs.modal", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](i);
            } else s.show && o.show(i);
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return x;
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.modal.data-api",
    '[data-toggle="modal"]',
    function (t) {
      var n,
        i = this,
        o = c.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var s = e(n).data("bs.modal")
        ? "toggle"
        : a(a({}, e(n).data()), e(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var r = e(n).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          r.one("hidden.bs.modal", function () {
            e(i).is(":visible") && i.focus();
          });
      });
      R._jQueryInterface.call(e(n), s, this);
    }
  ),
    (e.fn.modal = R._jQueryInterface),
    (e.fn.modal.Constructor = R),
    (e.fn.modal.noConflict = function () {
      return (e.fn.modal = P), R._jQueryInterface;
    });
  var q = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    F = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Q = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    B =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function H(t, e, n) {
    if (0 === t.length) return t;
    if (n && "function" == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, "text/html"),
        o = Object.keys(e),
        s = [].slice.call(i.body.querySelectorAll("*")),
        r = function (t, n) {
          var i = s[t],
            r = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(e["*"] || [], e[r] || []);
          a.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === q.indexOf(n) ||
                  Boolean(t.nodeValue.match(Q) || t.nodeValue.match(B))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  s = i.length;
                o < s;
                o++
              )
                if (n.match(i[o])) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = s.length;
      a < l;
      a++
    )
      r(a);
    return i.body.innerHTML;
  }
  var U = "tooltip",
    M = e.fn[U],
    W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    V = ["sanitize", "whiteList", "sanitizeFn"],
    z = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    K = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    X = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: F,
      popperConfig: null,
    },
    Y = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    $ = (function () {
      function t(t, e) {
        if ("undefined" == typeof n)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ""),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var i = t.prototype;
      return (
        (i.enable = function () {
          this._isEnabled = !0;
        }),
        (i.disable = function () {
          this._isEnabled = !1;
        }),
        (i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (i.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var n = this.constructor.DATA_KEY,
                i = e(t.currentTarget).data(n);
              i ||
                ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(n, i)),
                (i._activeTrigger.click = !i._activeTrigger.click),
                i._isWithActiveTrigger()
                  ? i._enter(null, i)
                  : i._leave(null, i);
            } else {
              if (e(this.getTipElement()).hasClass("show"))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (i.dispose = function () {
          clearTimeout(this._timeout),
            e.removeData(this.element, this.constructor.DATA_KEY),
            e(this.element).off(this.constructor.EVENT_KEY),
            e(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && e(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (i.show = function () {
          var t = this;
          if ("none" === e(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var i = e.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            e(this.element).trigger(i);
            var o = c.findShadowRoot(this.element),
              s = e.contains(
                null !== o ? o : this.element.ownerDocument.documentElement,
                this.element
              );
            if (i.isDefaultPrevented() || !s) return;
            var r = this.getTipElement(),
              a = c.getUID(this.constructor.NAME);
            r.setAttribute("id", a),
              this.element.setAttribute("aria-describedby", a),
              this.setContent(),
              this.config.animation && e(r).addClass("fade");
            var l =
                "function" == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              h = this._getAttachment(l);
            this.addAttachmentClass(h);
            var u = this._getContainer();
            e(r).data(this.constructor.DATA_KEY, this),
              e.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || e(r).appendTo(u),
              e(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new n(this.element, r, this._getPopperConfig(h))),
              e(r).addClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().on("mouseover", null, e.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              (t._hoverState = null),
                e(t.element).trigger(t.constructor.Event.SHOWN),
                "out" === n && t._leave(null, t);
            };
            if (e(this.tip).hasClass("fade")) {
              var f = c.getTransitionDurationFromElement(this.tip);
              e(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(f);
            } else d();
          }
        }),
        (i.hide = function (t) {
          var n = this,
            i = this.getTipElement(),
            o = e.Event(this.constructor.Event.HIDE),
            s = function () {
              "show" !== n._hoverState &&
                i.parentNode &&
                i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                e(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                t && t();
            };
          if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (e(i).removeClass("show"),
              "ontouchstart" in document.documentElement &&
                e(document.body).children().off("mouseover", null, e.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              e(this.tip).hasClass("fade"))
            ) {
              var r = c.getTransitionDurationFromElement(i);
              e(i).one(c.TRANSITION_END, s).emulateTransitionEnd(r);
            } else s();
            this._hoverState = "";
          }
        }),
        (i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (i.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (i.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (i.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (i.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            e(t.querySelectorAll(".tooltip-inner")),
            this.getTitle()
          ),
            e(t).removeClass("fade show");
        }),
        (i.setElementContent = function (t, n) {
          "object" != typeof n || (!n.nodeType && !n.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (n = H(n, this.config.whiteList, this.config.sanitizeFn)),
                t.html(n))
              : t.text(n)
            : this.config.html
            ? e(n).parent().is(t) || t.empty().append(n)
            : t.text(e(n).text());
        }),
        (i.getTitle = function () {
          var t = this.element.getAttribute("data-original-title");
          return (
            t ||
              (t =
                "function" == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (i._getPopperConfig = function (t) {
          var e = this;
          return a(
            a(
              {},
              {
                placement: t,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: ".arrow" },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t);
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t);
                },
              }
            ),
            this.config.popperConfig
          );
        }),
        (i._getOffset = function () {
          var t = this,
            e = {};
          return (
            "function" == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      a({}, e.offsets),
                      t.config.offset(e.offsets, t.element) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (i._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : c.isElement(this.config.container)
            ? e(this.config.container)
            : e(document).find(this.config.container);
        }),
        (i._getAttachment = function (t) {
          return K[t.toUpperCase()];
        }),
        (i._setListeners = function () {
          var t = this;
          this.config.trigger.split(" ").forEach(function (n) {
            if ("click" === n)
              e(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ("manual" !== n) {
              var i =
                  "hover" === n
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  "hover" === n
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              e(t.element)
                .on(i, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            e(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = a(
                  a({}, this.config),
                  {},
                  { trigger: "manual", selector: "" }
                ))
              : this._fixTitle();
        }),
        (i._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== t) &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (i._enter = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e(n.getTipElement()).hasClass("show") || "show" === n._hoverState
              ? (n._hoverState = "show")
              : (clearTimeout(n._timeout),
                (n._hoverState = "show"),
                n.config.delay && n.config.delay.show
                  ? (n._timeout = setTimeout(function () {
                      "show" === n._hoverState && n.show();
                    }, n.config.delay.show))
                  : n.show());
        }),
        (i._leave = function (t, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || e(t.currentTarget).data(i)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
            t &&
              (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
                !1),
            n._isWithActiveTrigger() ||
              (clearTimeout(n._timeout),
              (n._hoverState = "out"),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(function () {
                    "out" === n._hoverState && n.hide();
                  }, n.config.delay.hide))
                : n.hide());
        }),
        (i._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (i._getConfig = function (t) {
          var n = e(this.element).data();
          return (
            Object.keys(n).forEach(function (t) {
              -1 !== V.indexOf(t) && delete n[t];
            }),
            "number" ==
              typeof (t = a(
                a(a({}, this.constructor.Default), n),
                "object" == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            c.typeCheckConfig(U, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = H(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (i._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (i._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(W);
          null !== n && n.length && t.removeClass(n.join(""));
        }),
        (i._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (i._fixTransition = function () {
          var t = this.getTipElement(),
            n = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (e(t).removeClass("fade"),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.tooltip"),
              o = "object" == typeof n && n;
            if (
              (i || !/dispose|hide/.test(n)) &&
              (i || ((i = new t(this, o)), e(this).data("bs.tooltip", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return X;
            },
          },
          {
            key: "NAME",
            get: function () {
              return U;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Y;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return z;
            },
          },
        ]),
        t
      );
    })();
  (e.fn[U] = $._jQueryInterface),
    (e.fn[U].Constructor = $),
    (e.fn[U].noConflict = function () {
      return (e.fn[U] = M), $._jQueryInterface;
    });
  var J = "popover",
    G = e.fn[J],
    Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    tt = a(
      a({}, $.Default),
      {},
      {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }
    ),
    et = a(a({}, $.DefaultType), {}, { content: "(string|element|function)" }),
    nt = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    it = (function (t) {
      var n, i;
      function s() {
        return t.apply(this, arguments) || this;
      }
      (i = t),
        ((n = s).prototype = Object.create(i.prototype)),
        (n.prototype.constructor = n),
        (n.__proto__ = i);
      var r = s.prototype;
      return (
        (r.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (r.addAttachmentClass = function (t) {
          e(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (r.getTipElement = function () {
          return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
        }),
        (r.setContent = function () {
          var t = e(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)),
            this.setElementContent(t.find(".popover-body"), n),
            t.removeClass("fade show");
        }),
        (r._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (r._cleanTipClass = function () {
          var t = e(this.getTipElement()),
            n = t.attr("class").match(Z);
          null !== n && n.length > 0 && t.removeClass(n.join(""));
        }),
        (s._jQueryInterface = function (t) {
          return this.each(function () {
            var n = e(this).data("bs.popover"),
              i = "object" == typeof t ? t : null;
            if (
              (n || !/dispose|hide/.test(t)) &&
              (n || ((n = new s(this, i)), e(this).data("bs.popover", n)),
              "string" == typeof t)
            ) {
              if ("undefined" == typeof n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        o(s, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return tt;
            },
          },
          {
            key: "NAME",
            get: function () {
              return J;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return nt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return et;
            },
          },
        ]),
        s
      );
    })($);
  (e.fn[J] = it._jQueryInterface),
    (e.fn[J].Constructor = it),
    (e.fn[J].noConflict = function () {
      return (e.fn[J] = G), it._jQueryInterface;
    });
  var ot = "scrollspy",
    st = e.fn[ot],
    rt = { offset: 10, method: "auto", target: "" },
    at = { offset: "number", method: "string", target: "(string|element)" },
    lt = (function () {
      function t(t, n) {
        var i = this;
        (this._element = t),
          (this._scrollElement = "BODY" === t.tagName ? window : t),
          (this._config = this._getConfig(n)),
          (this._selector =
            this._config.target +
            " .nav-link," +
            this._config.target +
            " .list-group-item," +
            this._config.target +
            " .dropdown-item"),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
            return i._process(t);
          }),
          this.refresh(),
          this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var t = this,
            n =
              this._scrollElement === this._scrollElement.window
                ? "offset"
                : "position",
            i = "auto" === this._config.method ? n : this._config.method,
            o = "position" === i ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var n,
                  s = c.getSelectorFromElement(t);
                if ((s && (n = document.querySelector(s)), n)) {
                  var r = n.getBoundingClientRect();
                  if (r.width || r.height) return [e(n)[i]().top + o, s];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.scrollspy"),
            e(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          if (
            "string" !=
              typeof (t = a(a({}, rt), "object" == typeof t && t ? t : {}))
                .target &&
            c.isElement(t.target)
          ) {
            var n = e(t.target).attr("id");
            n || ((n = c.getUID(ot)), e(t.target).attr("id", n)),
              (t.target = "#" + n);
          }
          return c.typeCheckConfig(ot, t, at), t;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ("undefined" == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
            }
          }
        }),
        (n._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var n = this._selector.split(",").map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            i = e([].slice.call(document.querySelectorAll(n.join(","))));
          i.hasClass("dropdown-item")
            ? (i
                .closest(".dropdown")
                .find(".dropdown-toggle")
                .addClass("active"),
              i.addClass("active"))
            : (i.addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              i
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            e(this._scrollElement).trigger("activate.bs.scrollspy", {
              relatedTarget: t,
            });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this).data("bs.scrollspy");
            if (
              (i ||
                ((i = new t(this, "object" == typeof n && n)),
                e(this).data("bs.scrollspy", i)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "Default",
            get: function () {
              return rt;
            },
          },
        ]),
        t
      );
    })();
  e(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        n = t.length;
      n--;

    ) {
      var i = e(t[n]);
      lt._jQueryInterface.call(i, i.data());
    }
  }),
    (e.fn[ot] = lt._jQueryInterface),
    (e.fn[ot].Constructor = lt),
    (e.fn[ot].noConflict = function () {
      return (e.fn[ot] = st), lt._jQueryInterface;
    });
  var ct = e.fn.tab,
    ht = (function () {
      function t(t) {
        this._element = t;
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                e(this._element).hasClass("active")) ||
              e(this._element).hasClass("disabled")
            )
          ) {
            var n,
              i,
              o = e(this._element).closest(".nav, .list-group")[0],
              s = c.getSelectorFromElement(this._element);
            if (o) {
              var r =
                "UL" === o.nodeName || "OL" === o.nodeName
                  ? "> li > .active"
                  : ".active";
              i = (i = e.makeArray(e(o).find(r)))[i.length - 1];
            }
            var a = e.Event("hide.bs.tab", { relatedTarget: this._element }),
              l = e.Event("show.bs.tab", { relatedTarget: i });
            if (
              (i && e(i).trigger(a),
              e(this._element).trigger(l),
              !l.isDefaultPrevented() && !a.isDefaultPrevented())
            ) {
              s && (n = document.querySelector(s)),
                this._activate(this._element, o);
              var h = function () {
                var n = e.Event("hidden.bs.tab", { relatedTarget: t._element }),
                  o = e.Event("shown.bs.tab", { relatedTarget: i });
                e(i).trigger(n), e(t._element).trigger(o);
              };
              n ? this._activate(n, n.parentNode, h) : h();
            }
          }
        }),
        (n.dispose = function () {
          e.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (n._activate = function (t, n, i) {
          var o = this,
            s = (
              !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                ? e(n).children(".active")
                : e(n).find("> li > .active")
            )[0],
            r = i && s && e(s).hasClass("fade"),
            a = function () {
              return o._transitionComplete(t, s, i);
            };
          if (s && r) {
            var l = c.getTransitionDurationFromElement(s);
            e(s)
              .removeClass("show")
              .one(c.TRANSITION_END, a)
              .emulateTransitionEnd(l);
          } else a();
        }),
        (n._transitionComplete = function (t, n, i) {
          if (n) {
            e(n).removeClass("active");
            var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
            o && e(o).removeClass("active"),
              "tab" === n.getAttribute("role") &&
                n.setAttribute("aria-selected", !1);
          }
          if (
            (e(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
              t.setAttribute("aria-selected", !0),
            c.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode && e(t.parentNode).hasClass("dropdown-menu"))
          ) {
            var s = e(t).closest(".dropdown")[0];
            if (s) {
              var r = [].slice.call(s.querySelectorAll(".dropdown-toggle"));
              e(r).addClass("active");
            }
            t.setAttribute("aria-expanded", !0);
          }
          i && i();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.tab");
            if (
              (o || ((o = new t(this)), i.data("bs.tab", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n]();
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
        ]),
        t
      );
    })();
  e(document).on(
    "click.bs.tab.data-api",
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), ht._jQueryInterface.call(e(this), "show");
    }
  ),
    (e.fn.tab = ht._jQueryInterface),
    (e.fn.tab.Constructor = ht),
    (e.fn.tab.noConflict = function () {
      return (e.fn.tab = ct), ht._jQueryInterface;
    });
  var ut = e.fn.toast,
    dt = { animation: "boolean", autohide: "boolean", delay: "number" },
    ft = { animation: !0, autohide: !0, delay: 500 },
    gt = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var t = this,
            n = e.Event("show.bs.toast");
          if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
            this._config.animation && this._element.classList.add("fade");
            var i = function () {
              t._element.classList.remove("showing"),
                t._element.classList.add("show"),
                e(t._element).trigger("shown.bs.toast"),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove("hide"),
              c.reflow(this._element),
              this._element.classList.add("showing"),
              this._config.animation)
            ) {
              var o = c.getTransitionDurationFromElement(this._element);
              e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o);
            } else i();
          }
        }),
        (n.hide = function () {
          if (this._element.classList.contains("show")) {
            var t = e.Event("hide.bs.toast");
            e(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains("show") &&
              this._element.classList.remove("show"),
            e(this._element).off("click.dismiss.bs.toast"),
            e.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = a(
              a(a({}, ft), e(this._element).data()),
              "object" == typeof t && t ? t : {}
            )),
            c.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          e(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (n._close = function () {
          var t = this,
            n = function () {
              t._element.classList.add("hide"),
                e(t._element).trigger("hidden.bs.toast");
            };
          if (
            (this._element.classList.remove("show"), this._config.animation)
          ) {
            var i = c.getTransitionDurationFromElement(this._element);
            e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i);
          } else n();
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var i = e(this),
              o = i.data("bs.toast");
            if (
              (o ||
                ((o = new t(this, "object" == typeof n && n)),
                i.data("bs.toast", o)),
              "string" == typeof n)
            ) {
              if ("undefined" == typeof o[n])
                throw new TypeError('No method named "' + n + '"');
              o[n](this);
            }
          });
        }),
        o(t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.0";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return dt;
            },
          },
          {
            key: "Default",
            get: function () {
              return ft;
            },
          },
        ]),
        t
      );
    })();
  (e.fn.toast = gt._jQueryInterface),
    (e.fn.toast.Constructor = gt),
    (e.fn.toast.noConflict = function () {
      return (e.fn.toast = ut), gt._jQueryInterface;
    }),
    (t.Alert = d),
    (t.Button = g),
    (t.Carousel = E),
    (t.Collapse = D),
    (t.Dropdown = j),
    (t.Modal = R),
    (t.Popover = it),
    (t.Scrollspy = lt),
    (t.Tab = ht),
    (t.Toast = gt),
    (t.Tooltip = $),
    (t.Util = c),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
