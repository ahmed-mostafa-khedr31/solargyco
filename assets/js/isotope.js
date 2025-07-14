/*!
 * Isotope PACKAGED v2.1.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */ (function (t) {
  function e() {}
  function i(t) {
    if (t) {
      var i =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            };
      return (
        (t.bridget = function (e, n) {
          var r, s, a;
          (r = n).prototype.option ||
            (r.prototype.option = function (e) {
              t.isPlainObject(e) &&
                (this.options = t.extend(!0, this.options, e));
            }),
            (s = e),
            (a = n),
            (t.fn[s] = function (e) {
              if ("string" == typeof e) {
                for (
                  var n = o.call(arguments, 1), r = 0, p = this.length;
                  p > r;
                  r++
                ) {
                  var h = this[r],
                    u = t.data(h, s);
                  if (u) {
                    if (t.isFunction(u[e]) && "_" !== e.charAt(0)) {
                      var f = u[e].apply(u, n);
                      if (void 0 !== f) return f;
                    } else
                      i("no such method '" + e + "' for " + s + " instance");
                  } else
                    i(
                      "cannot call methods on " +
                        s +
                        " prior to initialization; attempted to call '" +
                        e +
                        "'"
                    );
                }
                return this;
              }
              return this.each(function () {
                var i = t.data(this, s);
                i
                  ? (i.option(e), i._init())
                  : ((i = new a(this, e)), t.data(this, s, i));
              });
            });
        }),
        t.bridget
      );
    }
  }
  var o = Array.prototype.slice;
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
    : i("object" == typeof exports ? require("jquery") : t.jQuery);
})(window),
  (function (t) {
    function e(e) {
      var i = t.event;
      return (i.target = i.target || i.srcElement || e), i;
    }
    var i = document.documentElement,
      o = function () {};
    i.addEventListener
      ? (o = function (t, e, i) {
          t.addEventListener(e, i, !1);
        })
      : i.attachEvent &&
        (o = function (t, i, o) {
          (t[i + o] = o.handleEvent
            ? function () {
                var i = e(t);
                o.handleEvent.call(o, i);
              }
            : function () {
                var i = e(t);
                o.call(t, i);
              }),
            t.attachEvent("on" + i, t[i + o]);
        });
    var n = function () {};
    i.removeEventListener
      ? (n = function (t, e, i) {
          t.removeEventListener(e, i, !1);
        })
      : i.detachEvent &&
        (n = function (t, e, i) {
          t.detachEvent("on" + e, t[e + i]);
          try {
            delete t[e + i];
          } catch (o) {
            t[e + i] = void 0;
          }
        });
    var r = { bind: o, unbind: n };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", r)
      : "object" == typeof exports
      ? (module.exports = r)
      : (t.eventie = r);
  })(this),
  (function (t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : s.push(t));
    }
    function i(t) {
      var i = "readystatechange" === t.type && "complete" !== r.readyState;
      e.isReady || i || o();
    }
    function o() {
      e.isReady = !0;
      for (var t = 0, i = s.length; i > t; t++) (0, s[t])();
    }
    function n(n) {
      return (
        "complete" === r.readyState
          ? o()
          : (n.bind(r, "DOMContentLoaded", i),
            n.bind(r, "readystatechange", i),
            n.bind(t, "load", i)),
        e
      );
    }
    var r = t.document,
      s = [];
    (e.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], n)
        : "object" == typeof exports
        ? (module.exports = n(require("eventie")))
        : (t.docReady = n(t.eventie));
  })(window),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i;
      return -1;
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var o = t.prototype,
      n = this,
      r = n.EventEmitter;
    (o.getListeners = function (t) {
      var e,
        i,
        o = this._getEvents();
      if (t instanceof RegExp)
        for (i in ((e = {}), o))
          o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
      else e = o[t] || (o[t] = []);
      return e;
    }),
      (o.flattenListeners = function (t) {
        var e,
          i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i;
      }),
      (o.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i;
      }),
      (o.addListener = function (t, i) {
        var o,
          n = this.getListenersAsObject(t),
          r = "object" == typeof i;
        for (o in n)
          n.hasOwnProperty(o) &&
            -1 === e(n[o], i) &&
            n[o].push(r ? i : { listener: i, once: !1 });
        return this;
      }),
      (o.on = i("addListener")),
      (o.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (o.once = i("addOnceListener")),
      (o.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (o.removeListener = function (t, i) {
        var o,
          n,
          r = this.getListenersAsObject(t);
        for (n in r)
          r.hasOwnProperty(n) && -1 !== (o = e(r[n], i)) && r[n].splice(o, 1);
        return this;
      }),
      (o.off = i("removeListener")),
      (o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (o.manipulateListeners = function (t, e, i) {
        var o,
          n,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (o = i.length; o--; ) r.call(this, e, i[o]);
        else
          for (o in e)
            e.hasOwnProperty(o) &&
              (n = e[o]) &&
              ("function" == typeof n
                ? r.call(this, o, n)
                : s.call(this, o, n));
        return this;
      }),
      (o.removeEvent = function (t) {
        var e,
          i = this._getEvents();
        if ("string" == typeof t) delete i[t];
        else if (t instanceof RegExp)
          for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this;
      }),
      (o.removeAllListeners = i("removeEvent")),
      (o.emitEvent = function (t, e) {
        var i,
          o,
          n,
          r,
          s = this.getListenersAsObject(t);
        for (n in s)
          if (s.hasOwnProperty(n))
            for (o = s[n].length; o--; )
              !0 === (i = s[n][o]).once && this.removeListener(t, i.listener),
                (r = i.listener.apply(this, e || [])) ===
                  this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (o.trigger = i("emitEvent")),
      (o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (o.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (o._getOnceReturnValue = function () {
        return (
          !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        );
      }),
      (o._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (n.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (n.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(t) {
      if (t) {
        if ("string" == typeof o[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, n = 0, r = i.length; r > n; n++)
          if ("string" == typeof o[(e = i[n] + t)]) return e;
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      o = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return e;
        })
      : "object" == typeof exports
      ? (module.exports = e)
      : (t.getStyleProperty = e);
  })(window),
  (function (t) {
    function e(t) {
      var e = parseFloat(t);
      return -1 === t.indexOf("%") && !isNaN(e) && e;
    }
    function i(i) {
      function r(e, i) {
        if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
        var o = e.style,
          n = o.left,
          r = e.runtimeStyle,
          s = r && r.left;
        return (
          s && (r.left = e.currentStyle.left),
          (o.left = i),
          (i = o.pixelLeft),
          (o.left = n),
          s && (r.left = s),
          i
        );
      }
      var s,
        a,
        p,
        h = !1;
      return function u(f) {
        if (
          ((function n() {
            if (!h) {
              h = !0;
              var r,
                u = t.getComputedStyle;
              if (
                ((s =
                  ((r = u
                    ? function (t) {
                        return u(t, null);
                      }
                    : function (t) {
                        return t.currentStyle;
                      }),
                  function (t) {
                    var e = r(t);
                    return (
                      e ||
                        o(
                          "Style returned " +
                            e +
                            ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                        ),
                      e
                    );
                  })),
                (a = i("boxSizing")))
              ) {
                var f = document.createElement("div");
                (f.style.width = "200px"),
                  (f.style.padding = "1px 2px 3px 4px"),
                  (f.style.borderStyle = "solid"),
                  (f.style.borderWidth = "1px 2px 3px 4px"),
                  (f.style[a] = "border-box");
                var l = document.body || document.documentElement;
                l.appendChild(f), (p = 200 === e(s(f).width)), l.removeChild(f);
              }
            }
          })(),
          "string" == typeof f && (f = document.querySelector(f)),
          f && "object" == typeof f && f.nodeType)
        ) {
          var l = s(f);
          if ("none" === l.display)
            return (function t() {
              for (
                var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0,
                  },
                  i = 0,
                  o = n.length;
                o > i;
                i++
              )
                e[n[i]] = 0;
              return e;
            })();
          var c = {};
          (c.width = f.offsetWidth), (c.height = f.offsetHeight);
          for (
            var y = (c.isBorderBox = !(!a || !l[a] || "border-box" !== l[a])),
              d = 0,
              m = n.length;
            m > d;
            d++
          ) {
            var g = n[d],
              v = l[g];
            v = r(f, v);
            var $ = parseFloat(v);
            c[g] = isNaN($) ? 0 : $;
          }
          var I = c.paddingLeft + c.paddingRight,
            z = c.paddingTop + c.paddingBottom,
            L = c.marginLeft + c.marginRight,
            b = c.marginTop + c.marginBottom,
            S = c.borderLeftWidth + c.borderRightWidth,
            x = c.borderTopWidth + c.borderBottomWidth,
            E = y && p,
            W = e(l.width);
          !1 !== W && (c.width = W + (E ? 0 : I + S));
          var T = e(l.height);
          return (
            !1 !== T && (c.height = T + (E ? 0 : z + x)),
            (c.innerWidth = c.width - (I + S)),
            (c.innerHeight = c.height - (z + x)),
            (c.outerWidth = c.width + L),
            (c.outerHeight = c.height + b),
            c
          );
        }
      };
    }
    var o =
        "undefined" == typeof console
          ? function t() {}
          : function (t) {
              console.error(t);
            },
      n = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          i
        )
      : "object" == typeof exports
      ? (module.exports = i(require("desandro-get-style-property")))
      : (t.getSize = i(t.getStyleProperty));
  })(window),
  (function (t) {
    function e(t, e) {
      return t[n](e);
    }
    function i(t) {
      !t.parentNode && document.createDocumentFragment().appendChild(t);
    }
    var o,
      n = (function () {
        if (t.matchesSelector) return "matchesSelector";
        for (
          var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length;
          o > i;
          i++
        ) {
          var n = e[i] + "MatchesSelector";
          if (t[n]) return n;
        }
      })();
    (o = n
      ? e(document.createElement("div"), "div")
        ? e
        : function t(o, n) {
            return i(o), e(o, n);
          }
      : function t(e, o) {
          i(e);
          for (
            var n = e.parentNode.querySelectorAll(o), r = 0, s = n.length;
            s > r;
            r++
          )
            if (n[r] === e) return !0;
          return !1;
        }),
      "function" == typeof define && define.amd
        ? define("matches-selector/matches-selector", [], function () {
            return o;
          })
        : "object" == typeof exports
        ? (module.exports = o)
        : (window.matchesSelector = o);
  })(Element.prototype),
  (function (t) {
    function e(t, e, i) {
      function n(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create());
      }
      var r = i("transition"),
        s = i("transform"),
        a = !!i("perspective"),
        p = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend",
        }[r],
        h = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty",
        ],
        u = (function () {
          for (var t = {}, e = 0, o = h.length; o > e; e++) {
            var n = h[e],
              r = i(n);
            r && r !== n && (t[n] = r);
          }
          return t;
        })();
      (function t(e, i) {
        for (var o in i) e[o] = i[o];
        return e;
      })(n.prototype, t.prototype),
        (n.prototype._create = function () {
          (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (n.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (n.prototype.getSize = function () {
          this.size = e(this.element);
        }),
        (n.prototype.css = function (t) {
          var e = this.element.style;
          for (var i in t) e[u[i] || i] = t[i];
        }),
        (n.prototype.getPosition = function () {
          var t = o(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            n = e.isOriginTop,
            r = parseInt(t[i ? "left" : "right"], 10),
            s = parseInt(t[n ? "top" : "bottom"], 10);
          (r = isNaN(r) ? 0 : r), (s = isNaN(s) ? 0 : s);
          var a = this.layout.size;
          (r -= i ? a.paddingLeft : a.paddingRight),
            (s -= n ? a.paddingTop : a.paddingBottom),
            (this.position.x = r),
            (this.position.y = s);
        }),
        (n.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            i = {};
          e.isOriginLeft
            ? ((i.left = this.position.x + t.paddingLeft + "px"),
              (i.right = ""))
            : ((i.right = this.position.x + t.paddingRight + "px"),
              (i.left = "")),
            e.isOriginTop
              ? ((i.top = this.position.y + t.paddingTop + "px"),
                (i.bottom = ""))
              : ((i.bottom = this.position.y + t.paddingBottom + "px"),
                (i.top = "")),
            this.css(i),
            this.emitEvent("layout", [this]);
        });
      var f,
        l = a
          ? function (t, e) {
              return "translate3d(" + t + "px, " + e + "px, 0)";
            }
          : function (t, e) {
              return "translate(" + t + "px, " + e + "px)";
            };
      (n.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = parseInt(t, 10),
          r = parseInt(e, 10),
          s = n === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          p = e - o,
          h = {},
          u = this.layout.options;
        (a = u.isOriginLeft ? a : -a),
          (p = u.isOriginTop ? p : -p),
          (h.transform = l(a, p)),
          this.transition({
            to: h,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
        (n.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (n.prototype.moveTo =
          r && s ? n.prototype._transitionTo : n.prototype.goTo),
        (n.prototype.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (n.prototype._nonTransition = function (t) {
          for (var e in (this.css(t.to),
          t.isCleaning && this._removeStyles(t.to),
          t.onTransitionEnd))
            t.onTransitionEnd[e].call(this);
        }),
        (n.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var c =
        s &&
        (f = s).replace(/([A-Z])/g, function (t) {
          return "-" + t.toLowerCase();
        }) + ",opacity";
      (n.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: c,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(p, this, !1));
      }),
        (n.prototype.transition =
          n.prototype[r ? "_transition" : "_nonTransition"]),
        (n.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (n.prototype.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var y = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform",
      };
      (n.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            i = y[t.propertyName] || t.propertyName;
          delete e.ingProperties[i],
            (function t(e) {
              for (var i in e) return !1;
              return (i = null), !0;
            })(e.ingProperties) && this.disableTransition(),
            i in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
            i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]),
            this.emitEvent("transitionEnd", [this]);
        }
      }),
        (n.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(p, this, !1),
            (this.isTransitioning = !1);
        }),
        (n.prototype._removeStyles = function (t) {
          var e = {};
          for (var i in t) e[i] = "";
          this.css(e);
        });
      var d = { transitionProperty: "", transitionDuration: "" };
      return (
        (n.prototype.removeTransitionStyles = function () {
          this.css(d);
        }),
        (n.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this]);
        }),
        (n.prototype.remove = function () {
          if (!r || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
          var t = this;
          this.on("transitionEnd", function () {
            return t.removeElem(), !0;
          }),
            this.hide();
        }),
        (n.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
          });
        }),
        (n.prototype.hide = function () {
          (this.isHidden = !0), this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: "none" });
              },
            },
          });
        }),
        (n.prototype.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        n
      );
    }
    var i = t.getComputedStyle,
      o = i
        ? function (t) {
            return i(t, null);
          }
        : function (t) {
            return t.currentStyle;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
          ],
          e
        )
      : "object" == typeof exports
      ? (module.exports = e(
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property")
        ))
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = e(t.EventEmitter, t.getSize, t.getStyleProperty)));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      var e,
        i = [];
      if (((e = t), "[object Array]" === h.call(e))) i = t;
      else if (t && "number" == typeof t.length)
        for (var o = 0, n = t.length; n > o; o++) i.push(t[o]);
      else i.push(t);
      return i;
    }
    function o(t, e) {
      var i = f(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function n(n, h, f, l, c, y) {
      function d(t, i) {
        if (("string" == typeof t && (t = r.querySelector(t)), !t || !u(t)))
          return void (
            s && s.error("Bad " + this.constructor.namespace + " element: " + t)
          );
        (this.element = t),
          (this.options = e({}, this.constructor.defaults)),
          this.option(i);
        var o = ++m;
        (this.element.outlayerGUID = o),
          (g[o] = this),
          this._create(),
          this.options.isInitLayout && this.layout();
      }
      var m = 0,
        g = {};
      return (
        (d.namespace = "outlayer"),
        (d.Item = y),
        (d.defaults = {
          containerStyle: { position: "relative" },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          isResizingContainer: !0,
          transitionDuration: "1s",
          hiddenStyle: {
            opacity: 0,
            transform: "scale(0.005) rotateX(180deg)",
          },
          visibleStyle: { opacity: 1, transform: "scale(1) rotateX(0deg)" },
        }),
        e(d.prototype, f.prototype),
        (d.prototype.option = function (t) {
          e(this.options, t);
        }),
        (d.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize();
        }),
        (d.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (d.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              o = [],
              n = 0,
              r = e.length;
            r > n;
            n++
          ) {
            var s = e[n],
              a = new i(s, this);
            o.push(a);
          }
          return o;
        }),
        (d.prototype._filterFindItemElements = function (t) {
          t = i(t);
          for (
            var e = this.options.itemSelector, o = [], n = 0, r = t.length;
            r > n;
            n++
          ) {
            var s = t[n];
            if (u(s)) {
              if (e) {
                c(s, e) && o.push(s);
                for (
                  var a = s.querySelectorAll(e), p = 0, h = a.length;
                  h > p;
                  p++
                )
                  o.push(a[p]);
              } else o.push(s);
            }
          }
          return o;
        }),
        (d.prototype.getItemElements = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
          return t;
        }),
        (d.prototype.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          this.layoutItems(this.items, t), (this._isLayoutInited = !0);
        }),
        (d.prototype._init = d.prototype.layout),
        (d.prototype._resetLayout = function () {
          this.getSize();
        }),
        (d.prototype.getSize = function () {
          this.size = l(this.element);
        }),
        (d.prototype._getMeasurement = function (t, e) {
          var i,
            o = this.options[t];
          o
            ? ("string" == typeof o
                ? (i = this.element.querySelector(o))
                : u(o) && (i = o),
              (this[t] = i ? l(i)[e] : o))
            : (this[t] = 0);
        }),
        (d.prototype.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (d.prototype._getItemsForLayout = function (t) {
          for (var e = [], i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            n.isIgnored || e.push(n);
          }
          return e;
        }),
        (d.prototype._layoutItems = function (t, e) {
          function i() {
            o.emitEvent("layoutComplete", [o, t]);
          }
          var o = this;
          if (!t || !t.length) return void i();
          this._itemsOn(t, "layout", i);
          for (var n = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r],
              p = this._getItemLayoutPosition(a);
            (p.item = a), (p.isInstant = e || a.isLayoutInstant), n.push(p);
          }
          this._processLayoutQueue(n);
        }),
        (d.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 };
        }),
        (d.prototype._processLayoutQueue = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            this._positionItem(o.item, o.x, o.y, o.isInstant);
          }
        }),
        (d.prototype._positionItem = function (t, e, i, o) {
          o ? t.goTo(e, i) : t.moveTo(e, i);
        }),
        (d.prototype._postLayout = function () {
          this.resizeContainer();
        }),
        (d.prototype.resizeContainer = function () {
          if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t &&
              (this._setContainerMeasure(t.width, !0),
              this._setContainerMeasure(t.height, !1));
          }
        }),
        (d.prototype._getContainerSize = p),
        (d.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (d.prototype._itemsOn = function (t, e, i) {
          function o() {
            return ++n === r && i.call(s), !0;
          }
          for (
            var n = 0, r = t.length, s = this, a = 0, p = t.length;
            p > a;
            a++
          )
            t[a].on(e, o);
        }),
        (d.prototype.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (d.prototype.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (d.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
              var o = t[e];
              this.ignore(o);
            }
          }
        }),
        (d.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e];
              o(n, this.stamps), this.unignore(n);
            }
        }),
        (d.prototype._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = i(t)))
            : void 0;
        }),
        (d.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var i = this.stamps[t];
              this._manageStamp(i);
            }
          }
        }),
        (d.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (d.prototype._manageStamp = p),
        (d.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = l(t);
          return {
            left: e.left - i.left - o.marginLeft,
            top: e.top - i.top - o.marginTop,
            right: i.right - e.right - o.marginRight,
            bottom: i.bottom - e.bottom - o.marginBottom,
          };
        }),
        (d.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (d.prototype.bindResize = function () {
          this.isResizeBound ||
            (n.bind(t, "resize", this), (this.isResizeBound = !0));
        }),
        (d.prototype.unbindResize = function () {
          this.isResizeBound && n.unbind(t, "resize", this),
            (this.isResizeBound = !1);
        }),
        (d.prototype.onresize = function () {
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var t = this;
          this.resizeTimeout = setTimeout(function e() {
            t.resize(), delete t.resizeTimeout;
          }, 100);
        }),
        (d.prototype.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }),
        (d.prototype.needsResizeLayout = function () {
          var t = l(this.element);
          return this.size && t && t.innerWidth !== this.size.innerWidth;
        }),
        (d.prototype.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (d.prototype.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (d.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i);
          }
        }),
        (d.prototype.reveal = function (t) {
          var e = t && t.length;
          if (e) for (var i = 0; e > i; i++) t[i].reveal();
        }),
        (d.prototype.hide = function (t) {
          var e = t && t.length;
          if (e) for (var i = 0; e > i; i++) t[i].hide();
        }),
        (d.prototype.getItem = function (t) {
          for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            if (o.element === t) return o;
          }
        }),
        (d.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
              var n = t[i],
                r = this.getItem(n);
              r && e.push(r);
            }
            return e;
          }
        }),
        (d.prototype.remove = function (t) {
          t = i(t);
          var e = this.getItems(t);
          if (e && e.length) {
            this._itemsOn(e, "remove", function () {
              this.emitEvent("removeComplete", [this, e]);
            });
            for (var n = 0, r = e.length; r > n; n++) {
              var s = e[n];
              s.remove(), o(s, this.items);
            }
          }
        }),
        (d.prototype.destroy = function () {
          var t = this.element.style;
          (t.height = ""), (t.position = ""), (t.width = "");
          for (var e = 0, i = this.items.length; i > e; e++)
            this.items[e].destroy();
          this.unbindResize(),
            delete g[this.element.outlayerGUID],
            delete this.element.outlayerGUID,
            a && a.removeData(this.element, this.constructor.namespace);
        }),
        (d.data = function (t) {
          var e = t && t.outlayerGUID;
          return e && g[e];
        }),
        (d.create = function (t, i) {
          function o() {
            d.apply(this, arguments);
          }
          return (
            Object.create
              ? (o.prototype = Object.create(d.prototype))
              : e(o.prototype, d.prototype),
            (o.prototype.constructor = o),
            (o.defaults = e({}, d.defaults)),
            e(o.defaults, i),
            (o.prototype.settings = {}),
            (o.namespace = t),
            (o.data = d.data),
            (o.Item = function () {
              y.apply(this, arguments);
            }),
            (o.Item.prototype = new y()),
            h(function () {
              for (
                var e,
                  i = (e = t)
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                      return e + "-" + i;
                    })
                    .toLowerCase(),
                  n = r.querySelectorAll(".js-" + i),
                  p = "data-" + i + "-options",
                  h = 0,
                  u = n.length;
                u > h;
                h++
              ) {
                var f,
                  l = n[h],
                  c = l.getAttribute(p);
                try {
                  f = c && JSON.parse(c);
                } catch (y) {
                  s &&
                    s.error(
                      "Error parsing " +
                        p +
                        " on " +
                        l.nodeName.toLowerCase() +
                        (l.id ? "#" + l.id : "") +
                        ": " +
                        y
                    );
                  continue;
                }
                var d = new o(l, f);
                a && a.data(l, t, d);
              }
            }),
            a && a.bridget && a.bridget(t, o),
            o
          );
        }),
        (d.Item = y),
        d
      );
    }
    var r = t.document,
      s = t.console,
      a = t.jQuery,
      p = function () {},
      h = Object.prototype.toString,
      u =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName
              );
            },
      f = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "doc-ready/doc-ready",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "./item",
          ],
          n
        )
      : "object" == typeof exports
      ? (module.exports = n(
          require("eventie"),
          require("doc-ready"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("./item")
        ))
      : (t.Outlayer = n(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item
        ));
  })(window),
  (function (t) {
    function e(t) {
      function e() {
        t.Item.apply(this, arguments);
      }
      (e.prototype = new t.Item()),
        (e.prototype._create = function () {
          (this.id = this.layout.itemGUID++),
            t.Item.prototype._create.call(this),
            (this.sortData = {});
        }),
        (e.prototype.updateSortData = function () {
          if (!this.isIgnored) {
            (this.sortData.id = this.id),
              (this.sortData["original-order"] = this.id),
              (this.sortData.random = Math.random());
            var t = this.layout.options.getSortData,
              e = this.layout._sorters;
            for (var i in t) {
              var o = e[i];
              this.sortData[i] = o(this.element, this);
            }
          }
        });
      var i = e.prototype.destroy;
      return (
        (e.prototype.destroy = function () {
          i.apply(this, arguments), this.css({ display: "" });
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window),
  (function (t) {
    function e(t, e) {
      function i(t) {
        (this.isotope = t),
          t &&
            ((this.options = t.options[this.namespace]),
            (this.element = t.element),
            (this.items = t.filteredItems),
            (this.size = t.size));
      }
      return (
        (function () {
          function t(t) {
            return function () {
              return e.prototype[t].apply(this.isotope, arguments);
            };
          }
          for (
            var o = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
              ],
              n = 0,
              r = o.length;
            r > n;
            n++
          ) {
            var s = o[n];
            i.prototype[s] = t(s);
          }
        })(),
        (i.prototype.needsVerticalResizeLayout = function () {
          var e = t(this.isotope.element);
          return (
            this.isotope.size &&
            e &&
            e.innerHeight !== this.isotope.size.innerHeight
          );
        }),
        (i.prototype._getMeasurement = function () {
          this.isotope._getMeasurement.apply(this, arguments);
        }),
        (i.prototype.getColumnWidth = function () {
          this.getSegmentSize("column", "Width");
        }),
        (i.prototype.getRowHeight = function () {
          this.getSegmentSize("row", "Height");
        }),
        (i.prototype.getSegmentSize = function (t, e) {
          var i = t + e,
            o = "outer" + e;
          if ((this._getMeasurement(i, o), !this[i])) {
            var n = this.getFirstItemSize();
            this[i] = (n && n[o]) || this.isotope.size["inner" + e];
          }
        }),
        (i.prototype.getFirstItemSize = function () {
          var e = this.isotope.filteredItems[0];
          return e && e.element && t(e.element);
        }),
        (i.prototype.layout = function () {
          this.isotope.layout.apply(this.isotope, arguments);
        }),
        (i.prototype.getSize = function () {
          this.isotope.getSize(), (this.size = this.isotope.size);
        }),
        (i.modes = {}),
        (i.create = function (t, e) {
          function o() {
            i.apply(this, arguments);
          }
          return (
            (o.prototype = new i()),
            e && (o.options = e),
            (o.prototype.namespace = t),
            (i.modes[t] = o),
            o
          );
        }),
        i
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window),
  (function (t) {
    function e(t, e) {
      var o = t.create("masonry");
      return (
        (o.prototype._resetLayout = function () {
          this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
          var t = this.cols;
          for (this.colYs = []; t--; ) this.colYs.push(0);
          this.maxY = 0;
        }),
        (o.prototype.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            var t = this.items[0],
              i = t && t.element;
            this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
          }
          (this.columnWidth += this.gutter),
            (this.cols = Math.floor(
              (this.containerWidth + this.gutter) / this.columnWidth
            )),
            (this.cols = Math.max(this.cols, 1));
        }),
        (o.prototype.getContainerWidth = function () {
          var t = e(
            this.options.isFitWidth ? this.element.parentNode : this.element
          );
          this.containerWidth = t && t.innerWidth;
        }),
        (o.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth,
            o = Math[e && 1 > e ? "round" : "ceil"](
              t.size.outerWidth / this.columnWidth
            );
          o = Math.min(o, this.cols);
          for (
            var n = this._getColGroup(o),
              r = Math.min.apply(Math, n),
              s = i(n, r),
              a = { x: this.columnWidth * s, y: r },
              p = r + t.size.outerHeight,
              h = this.cols + 1 - n.length,
              u = 0;
            h > u;
            u++
          )
            this.colYs[s + u] = p;
          return a;
        }),
        (o.prototype._getColGroup = function (t) {
          if (2 > t) return this.colYs;
          for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n);
          }
          return e;
        }),
        (o.prototype._manageStamp = function (t) {
          var i = e(t),
            o = this._getElementOffset(t),
            n = this.options.isOriginLeft ? o.left : o.right,
            r = n + i.outerWidth,
            s = Math.floor(n / this.columnWidth);
          s = Math.max(0, s);
          var a = Math.floor(r / this.columnWidth);
          (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
          for (
            var p =
                (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight,
              h = s;
            a >= h;
            h++
          )
            this.colYs[h] = Math.max(p, this.colYs[h]);
        }),
        (o.prototype._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = { height: this.maxY };
          return (
            this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
          );
        }),
        (o.prototype._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }),
        (o.prototype.needsResizeLayout = function () {
          var t = this.containerWidth;
          return this.getContainerWidth(), t !== this.containerWidth;
        }),
        o
      );
    }
    var i = Array.prototype.indexOf
      ? function (t, e) {
          return t.indexOf(e);
        }
      : function (t, e) {
          for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
          return -1;
        };
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window),
  (function (t) {
    function e(t, e) {
      var i = t.create("masonry"),
        o = i.prototype._getElementOffset,
        n = i.prototype.layout,
        r = i.prototype._getMeasurement;
      (function t(e, i) {
        for (var o in i) e[o] = i[o];
        return e;
      })(i.prototype, e.prototype),
        (i.prototype._getElementOffset = o),
        (i.prototype.layout = n),
        (i.prototype._getMeasurement = r);
      var s = i.prototype.measureColumns;
      i.prototype.measureColumns = function () {
        (this.items = this.isotope.filteredItems), s.call(this);
      };
      var a = i.prototype._manageStamp;
      return (
        (i.prototype._manageStamp = function () {
          (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
            (this.options.isOriginTop = this.isotope.options.isOriginTop),
            a.apply(this, arguments);
        }),
        i
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e
        )
      : "object" == typeof exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window),
  (function (t) {
    function e(t) {
      var e = t.create("fitRows");
      return (
        (e.prototype._resetLayout = function () {
          (this.x = 0),
            (this.y = 0),
            (this.maxY = 0),
            this._getMeasurement("gutter", "outerWidth");
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
          0 !== this.x &&
            e + this.x > i &&
            ((this.x = 0), (this.y = this.maxY));
          var o = { x: this.x, y: this.y };
          return (
            (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
            (this.x += e),
            o
          );
        }),
        (e.prototype._getContainerSize = function () {
          return { height: this.maxY };
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window),
  (function (t) {
    function e(t) {
      var e = t.create("vertical", { horizontalAlignment: 0 });
      return (
        (e.prototype._resetLayout = function () {
          this.y = 0;
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e =
              (this.isotope.size.innerWidth - t.size.outerWidth) *
              this.options.horizontalAlignment,
            i = this.y;
          return (this.y += t.size.outerHeight), { x: e, y: i };
        }),
        (e.prototype._getContainerSize = function () {
          return { height: this.y };
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window),
  (function (t) {
    function e(t) {
      var e,
        i = [];
      if (((e = t), "[object Array]" === a.call(e))) i = t;
      else if (t && "number" == typeof t.length)
        for (var o = 0, n = t.length; n > o; o++) i.push(t[o]);
      else i.push(t);
      return i;
    }
    function i(t, e) {
      var i = p(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function o(t, o, a, p, h) {
      var u = t.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
      (u.Item = p),
        (u.LayoutMode = h),
        (u.prototype._create = function () {
          for (var e in ((this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          t.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"]),
          h.modes))
            this._initLayoutMode(e);
        }),
        (u.prototype.reloadItems = function () {
          (this.itemGUID = 0), t.prototype.reloadItems.call(this);
        }),
        (u.prototype._itemize = function () {
          for (
            var e = t.prototype._itemize.apply(this, arguments),
              i = 0,
              o = e.length;
            o > i;
            i++
          )
            e[i].id = this.itemGUID++;
          return this._updateItemsSortData(e), e;
        }),
        (u.prototype._initLayoutMode = function (t) {
          var e = h.modes[t],
            i = this.options[t] || {};
          (this.options[t] = e.options
            ? (function t(e, i) {
                for (var o in i) e[o] = i[o];
                return e;
              })(e.options, i)
            : i),
            (this.modes[t] = new e(this));
        }),
        (u.prototype.layout = function () {
          return !this._isLayoutInited && this.options.isInitLayout
            ? void this.arrange()
            : void this._layout();
        }),
        (u.prototype._layout = function () {
          var t = this._getIsInstant();
          this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            (this._isLayoutInited = !0);
        }),
        (u.prototype.arrange = function (t) {
          function e() {
            o.reveal(i.needReveal), o.hide(i.needHide);
          }
          this.option(t), this._getIsInstant();
          var i = this._filter(this.items);
          this.filteredItems = i.matches;
          var o = this;
          this._isInstant ? this._noTransition(e) : e(),
            this._sort(),
            this._layout();
        }),
        (u.prototype._init = u.prototype.arrange),
        (u.prototype._getIsInstant = function () {
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          return (this._isInstant = t), t;
        }),
        (u.prototype._filter = function (t) {
          var e = this.options.filter;
          e = e || "*";
          for (
            var i = [],
              o = [],
              n = [],
              r = this._getFilterTest(e),
              s = 0,
              a = t.length;
            a > s;
            s++
          ) {
            var p = t[s];
            if (!p.isIgnored) {
              var h = r(p);
              h && i.push(p),
                h && p.isHidden ? o.push(p) : h || p.isHidden || n.push(p);
            }
          }
          return { matches: i, needReveal: o, needHide: n };
        }),
        (u.prototype._getFilterTest = function (t) {
          return n && this.options.isJQueryFiltering
            ? function (e) {
                return n(e.element).is(t);
              }
            : "function" == typeof t
            ? function (e) {
                return t(e.element);
              }
            : function (e) {
                return a(e.element, t);
              };
        }),
        (u.prototype.updateSortData = function (t) {
          var i;
          t ? ((t = e(t)), (i = this.getItems(t))) : (i = this.items),
            this._getSorters(),
            this._updateItemsSortData(i);
        }),
        (u.prototype._getSorters = function () {
          var t = this.options.getSortData;
          for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i);
          }
        }),
        (u.prototype._updateItemsSortData = function (t) {
          for (var e = t && t.length, i = 0; e && e > i; i++)
            t[i].updateSortData();
        });
      var f = function t(e) {
        if ("string" != typeof e) return e;
        var i,
          o,
          n,
          a = r(e).split(" "),
          p = a[0],
          h = p.match(/^\[(.+)\]$/),
          f =
            ((i = h && h[1]),
            (o = p),
            i
              ? function (t) {
                  return t.getAttribute(i);
                }
              : function (t) {
                  var e = t.querySelector(o);
                  return e && s(e);
                }),
          l = u.sortDataParsers[a[1]];
        return (e = l
          ? function (t) {
              return t && l(f(t));
            }
          : function (t) {
              return t && f(t);
            });
      };
      (u.sortDataParsers = {
        parseInt: function (t) {
          return parseInt(t, 10);
        },
        parseFloat: function (t) {
          return parseFloat(t);
        },
      }),
        (u.prototype._sort = function () {
          var t = this.options.sortBy;
          if (t) {
            var e,
              i,
              o =
                ((e = [].concat.apply(t, this.sortHistory)),
                (i = this.options.sortAscending),
                function (t, o) {
                  for (var n = 0, r = e.length; r > n; n++) {
                    var s = e[n],
                      a = t.sortData[s],
                      p = o.sortData[s];
                    if (a > p || p > a)
                      return (
                        (a > p ? 1 : -1) *
                        ((void 0 !== i[s] ? i[s] : i) ? 1 : -1)
                      );
                  }
                  return 0;
                });
            this.filteredItems.sort(o),
              t !== this.sortHistory[0] && this.sortHistory.unshift(t);
          }
        }),
        (u.prototype._mode = function () {
          var t = this.options.layoutMode,
            e = this.modes[t];
          if (!e) throw Error("No layout mode: " + t);
          return (e.options = this.options[t]), e;
        }),
        (u.prototype._resetLayout = function () {
          t.prototype._resetLayout.call(this), this._mode()._resetLayout();
        }),
        (u.prototype._getItemLayoutPosition = function (t) {
          return this._mode()._getItemLayoutPosition(t);
        }),
        (u.prototype._manageStamp = function (t) {
          this._mode()._manageStamp(t);
        }),
        (u.prototype._getContainerSize = function () {
          return this._mode()._getContainerSize();
        }),
        (u.prototype.needsResizeLayout = function () {
          return this._mode().needsResizeLayout();
        }),
        (u.prototype.appended = function (t) {
          var e = this.addItems(t);
          if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i);
          }
        }),
        (u.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
              (this.filteredItems = i.concat(this.filteredItems)),
              (this.items = e.concat(this.items));
          }
        }),
        (u.prototype._filterRevealAdded = function (t) {
          var e = this._filter(t);
          return (
            this.hide(e.needHide),
            this.reveal(e.matches),
            this.layoutItems(e.matches, !0),
            e.matches
          );
        }),
        (u.prototype.insert = function (t) {
          var e = this.addItems(t);
          if (e.length) {
            var i,
              o,
              n = e.length;
            for (i = 0; n > i; i++)
              (o = e[i]), this.element.appendChild(o.element);
            var r = this._filter(e).matches;
            for (i = 0; n > i; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r);
          }
        });
      var l = u.prototype.remove;
      return (
        (u.prototype.remove = function (t) {
          t = e(t);
          var o = this.getItems(t);
          if ((l.call(this, t), o && o.length))
            for (var n = 0, r = o.length; r > n; n++)
              i(o[n], this.filteredItems);
        }),
        (u.prototype.shuffle = function () {
          for (var t = 0, e = this.items.length; e > t; t++)
            this.items[t].sortData.random = Math.random();
          (this.options.sortBy = "random"), this._sort(), this._layout();
        }),
        (u.prototype._noTransition = function (t) {
          var e = this.options.transitionDuration;
          this.options.transitionDuration = 0;
          var i = t.call(this);
          return (this.options.transitionDuration = e), i;
        }),
        (u.prototype.getFilteredItemElements = function () {
          for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
          return t;
        }),
        u
      );
    }
    var n = t.jQuery,
      r = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      s = document.documentElement.textContent
        ? function (t) {
            return t.textContent;
          }
        : function (t) {
            return t.innerText;
          },
      a = Object.prototype.toString,
      p = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          o
        )
      : "object" == typeof exports
      ? (module.exports = o(
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (t.Isotope = o(
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window);
