!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = !!e && "length" in e && e.length,
      n = oe.type(e);
    return (
      "function" !== n &&
      !oe.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t, n) {
    if (oe.isFunction(t))
      return oe.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return oe.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (ge.test(t)) return oe.filter(t, e, n);
      t = oe.filter(t, e);
    }
    return oe.grep(e, function (e) {
      return Z.call(t, e) > -1 !== n;
    });
  }
  function i(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function o(e) {
    var t = {};
    return (
      oe.each(e.match(we) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function s() {
    G.removeEventListener("DOMContentLoaded", s),
      e.removeEventListener("load", s),
      oe.ready();
  }
  function a() {
    this.expando = oe.expando + a.uid++;
  }
  function u(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(je, "-$&").toLowerCase()),
        (n = e.getAttribute(r)),
        "string" == typeof n)
      ) {
        try {
          n =
            "true" === n ||
            ("false" !== n &&
              ("null" === n
                ? null
                : +n + "" === n
                ? +n
                : Se.test(n)
                ? oe.parseJSON(n)
                : n));
        } catch (e) {}
        Ne.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function l(e, t, n, r) {
    var i,
      o = 1,
      s = 20,
      a = r
        ? function () {
            return r.cur();
          }
        : function () {
            return oe.css(e, t, "");
          },
      u = a(),
      l = (n && n[3]) || (oe.cssNumber[t] ? "" : "px"),
      c = (oe.cssNumber[t] || ("px" !== l && +u)) && Ae.exec(oe.css(e, t));
    if (c && c[3] !== l) {
      (l = l || c[3]), (n = n || []), (c = +u || 1);
      do (o = o || ".5"), (c /= o), oe.style(e, t, c + l);
      while (o !== (o = a() / u) && 1 !== o && --s);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  function c(e, t) {
    var n =
      "undefined" != typeof e.getElementsByTagName
        ? e.getElementsByTagName(t || "*")
        : "undefined" != typeof e.querySelectorAll
        ? e.querySelectorAll(t || "*")
        : [];
    return void 0 === t || (t && oe.nodeName(e, t)) ? oe.merge([e], n) : n;
  }
  function f(e, t) {
    for (var n = 0, r = e.length; r > n; n++)
      Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"));
  }
  function p(e, t, n, r, i) {
    for (
      var o,
        s,
        a,
        u,
        l,
        p,
        d = t.createDocumentFragment(),
        h = [],
        g = 0,
        v = e.length;
      v > g;
      g++
    )
      if (((o = e[g]), o || 0 === o))
        if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
        else if (Re.test(o)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              a = (Oe.exec(o) || ["", ""])[1].toLowerCase(),
              u = Pe[a] || Pe._default,
              s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2],
              p = u[0];
            p--;

          )
            s = s.lastChild;
          oe.merge(h, s.childNodes), (s = d.firstChild), (s.textContent = "");
        } else h.push(t.createTextNode(o));
    for (d.textContent = "", g = 0; (o = h[g++]); )
      if (r && oe.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = oe.contains(o.ownerDocument, o)),
        (s = c(d.appendChild(o), "script")),
        l && f(s),
        n)
      )
        for (p = 0; (o = s[p++]); ) Fe.test(o.type || "") && n.push(o);
    return d;
  }
  function d() {
    return !0;
  }
  function h() {
    return !1;
  }
  function g() {
    try {
      return G.activeElement;
    } catch (e) {}
  }
  function v(e, t, n, r, i, o) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (a in t) v(e, a, n, r, t[a], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      i === !1)
    )
      i = h;
    else if (!i) return e;
    return (
      1 === o &&
        ((s = i),
        (i = function (e) {
          return oe().off(e), s.apply(this, arguments);
        }),
        (i.guid = s.guid || (s.guid = oe.guid++))),
      e.each(function () {
        oe.event.add(this, t, i, r, n);
      })
    );
  }
  function m(e, t) {
    return oe.nodeName(e, "table") &&
      oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function y(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function x(e) {
    var t = Xe.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function b(e, t) {
    var n, r, i, o, s, a, u, l;
    if (1 === t.nodeType) {
      if (
        Ee.hasData(e) &&
        ((o = Ee.access(e)), (s = Ee.set(t, o)), (l = o.events))
      ) {
        delete s.handle, (s.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; r > n; n++) oe.event.add(t, i, l[i][n]);
      }
      Ne.hasData(e) &&
        ((a = Ne.access(e)), (u = oe.extend({}, a)), Ne.set(t, u));
    }
  }
  function w(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && He.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function T(e, t, n, r) {
    t = J.apply([], t);
    var i,
      o,
      s,
      a,
      u,
      l,
      f = 0,
      d = e.length,
      h = d - 1,
      g = t[0],
      v = oe.isFunction(g);
    if (v || (d > 1 && "string" == typeof g && !re.checkClone && _e.test(g)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r);
      });
    if (
      d &&
      ((i = p(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (s = oe.map(c(i, "script"), y), a = s.length; d > f; f++)
        (u = i),
          f !== h &&
            ((u = oe.clone(u, !0, !0)), a && oe.merge(s, c(u, "script"))),
          n.call(e[f], u, f);
      if (a)
        for (l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; a > f; f++)
          (u = s[f]),
            Fe.test(u.type || "") &&
              !Ee.access(u, "globalEval") &&
              oe.contains(l, u) &&
              (u.src
                ? oe._evalUrl && oe._evalUrl(u.src)
                : oe.globalEval(u.textContent.replace(ze, "")));
    }
    return e;
  }
  function C(e, t, n) {
    for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || oe.cleanData(c(r)),
        r.parentNode &&
          (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  function k(e, t) {
    var n = oe(t.createElement(e)).appendTo(t.body),
      r = oe.css(n[0], "display");
    return n.detach(), r;
  }
  function E(e) {
    var t = G,
      n = Ve[e];
    return (
      n ||
        ((n = k(e, t)),
        ("none" !== n && n) ||
          ((Ue = (
            Ue || oe("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement)),
          (t = Ue[0].contentDocument),
          t.write(),
          t.close(),
          (n = k(e, t)),
          Ue.detach()),
        (Ve[e] = n)),
      n
    );
  }
  function N(e, t, n) {
    var r,
      i,
      o,
      s,
      a = e.style;
    return (
      (n = n || Qe(e)),
      (s = n ? n.getPropertyValue(t) || n[t] : void 0),
      ("" !== s && void 0 !== s) ||
        oe.contains(e.ownerDocument, e) ||
        (s = oe.style(e, t)),
      n &&
        !re.pixelMarginRight() &&
        Ge.test(s) &&
        Ye.test(t) &&
        ((r = a.width),
        (i = a.minWidth),
        (o = a.maxWidth),
        (a.minWidth = a.maxWidth = a.width = s),
        (s = n.width),
        (a.width = r),
        (a.minWidth = i),
        (a.maxWidth = o)),
      void 0 !== s ? s + "" : s
    );
  }
  function S(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments);
      },
    };
  }
  function j(e) {
    if (e in rt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; )
      if (((e = nt[n] + t), e in rt)) return e;
  }
  function D(e, t, n) {
    var r = Ae.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function A(e, t, n, r, i) {
    for (
      var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
      4 > o;
      o += 2
    )
      "margin" === n && (s += oe.css(e, n + qe[o], !0, i)),
        r
          ? ("content" === n && (s -= oe.css(e, "padding" + qe[o], !0, i)),
            "margin" !== n &&
              (s -= oe.css(e, "border" + qe[o] + "Width", !0, i)))
          : ((s += oe.css(e, "padding" + qe[o], !0, i)),
            "padding" !== n &&
              (s += oe.css(e, "border" + qe[o] + "Width", !0, i)));
    return s;
  }
  function q(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      o = Qe(e),
      s = "border-box" === oe.css(e, "boxSizing", !1, o);
    if (0 >= i || null == i) {
      if (
        ((i = N(e, t, o)), (0 > i || null == i) && (i = e.style[t]), Ge.test(i))
      )
        return i;
      (r = s && (re.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + A(e, t, n || (s ? "border" : "content"), r, o) + "px";
  }
  function L(e, t) {
    for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
      (r = e[s]),
        r.style &&
          ((o[s] = Ee.get(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (o[s] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                Le(r) &&
                (o[s] = Ee.access(r, "olddisplay", E(r.nodeName))))
            : ((i = Le(r)),
              ("none" === n && i) ||
                Ee.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
    for (s = 0; a > s; s++)
      (r = e[s]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? o[s] || "" : "none"));
    return e;
  }
  function H(e, t, n, r, i) {
    return new H.prototype.init(e, t, n, r, i);
  }
  function O() {
    return (
      e.setTimeout(function () {
        it = void 0;
      }),
      (it = oe.now())
    );
  }
  function F(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; 4 > r; r += 2 - t)
      (n = qe[r]), (i["margin" + n] = i["padding" + n] = e);
    return t && (i.opacity = i.width = e), i;
  }
  function P(e, t, n) {
    for (
      var r,
        i = (I.tweeners[t] || []).concat(I.tweeners["*"]),
        o = 0,
        s = i.length;
      s > o;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function R(e, t, n) {
    var r,
      i,
      o,
      s,
      a,
      u,
      l,
      c,
      f = this,
      p = {},
      d = e.style,
      h = e.nodeType && Le(e),
      g = Ee.get(e, "fxshow");
    n.queue ||
      ((a = oe._queueHooks(e, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (u = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || u();
        })),
      a.unqueued++,
      f.always(function () {
        f.always(function () {
          a.unqueued--, oe.queue(e, "fx").length || a.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
        (l = oe.css(e, "display")),
        (c = "none" === l ? Ee.get(e, "olddisplay") || E(e.nodeName) : l),
        "inline" === c &&
          "none" === oe.css(e, "float") &&
          (d.display = "inline-block")),
      n.overflow &&
        ((d.overflow = "hidden"),
        f.always(function () {
          (d.overflow = n.overflow[0]),
            (d.overflowX = n.overflow[1]),
            (d.overflowY = n.overflow[2]);
        }));
    for (r in t)
      if (((i = t[r]), st.exec(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))
        ) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          h = !0;
        }
        p[r] = (g && g[r]) || oe.style(e, r);
      } else l = void 0;
    if (oe.isEmptyObject(p))
      "inline" === ("none" === l ? E(e.nodeName) : l) && (d.display = l);
    else {
      g ? "hidden" in g && (h = g.hidden) : (g = Ee.access(e, "fxshow", {})),
        o && (g.hidden = !h),
        h
          ? oe(e).show()
          : f.done(function () {
              oe(e).hide();
            }),
        f.done(function () {
          var t;
          Ee.remove(e, "fxshow");
          for (t in p) oe.style(e, t, p[t]);
        });
      for (r in p)
        (s = P(h ? g[r] : 0, r, f)),
          r in g ||
            ((g[r] = s.start),
            h &&
              ((s.end = s.start),
              (s.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function M(e, t) {
    var n, r, i, o, s;
    for (n in e)
      if (
        ((r = oe.camelCase(n)),
        (i = t[r]),
        (o = e[n]),
        oe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (s = oe.cssHooks[r]),
        s && "expand" in s)
      ) {
        (o = s.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function I(e, t, n) {
    var r,
      i,
      o = 0,
      s = I.prefilters.length,
      a = oe.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = it || O(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = n / l.duration || 0,
            o = 1 - r,
            s = 0,
            u = l.tweens.length;
          u > s;
          s++
        )
          l.tweens[s].run(o);
        return (
          a.notifyWith(e, [l, o, n]),
          1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        );
      },
      l = a.promise({
        elem: e,
        props: oe.extend({}, t),
        opts: oe.extend(
          !0,
          { specialEasing: {}, easing: oe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: it || O(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = oe.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) l.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t]))
              : a.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (M(c, l.opts.specialEasing); s > o; o++)
      if ((r = I.prefilters[o].call(l, e, c, l.opts)))
        return (
          oe.isFunction(r.stop) &&
            (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)),
          r
        );
    return (
      oe.map(c, P, l),
      oe.isFunction(l.opts.start) && l.opts.start.call(e, l),
      oe.fx.timer(oe.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always)
    );
  }
  function W(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function $(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(we) || [];
      if (oe.isFunction(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function B(e, t, n, r) {
    function i(a) {
      var u;
      return (
        (o[a] = !0),
        oe.each(e[a] || [], function (e, a) {
          var l = a(t, n, r);
          return "string" != typeof l || s || o[l]
            ? s
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), i(l), !1);
        }),
        u
      );
    }
    var o = {},
      s = e === Nt;
    return i(t.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function _(e, t) {
    var n,
      r,
      i = oe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && oe.extend(!0, e, r), e;
  }
  function X(e, t, n) {
    for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in a)
        if (a[i] && a[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        s || (s = i);
      }
      o = o || s;
    }
    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
  }
  function z(e, t, n, r) {
    var i,
      o,
      s,
      a,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (((s = l[u + " " + o] || l["* " + o]), !s))
            for (i in l)
              if (
                ((a = i.split(" ")),
                a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]]))
              ) {
                s === !0
                  ? (s = l[i])
                  : l[i] !== !0 && ((o = a[0]), c.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  function U(e, t, n, r) {
    var i;
    if (oe.isArray(t))
      oe.each(t, function (t, i) {
        n || At.test(e)
          ? r(e, i)
          : U(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== oe.type(t)) r(e, t);
    else for (i in t) U(e + "[" + i + "]", t[i], n, r);
  }
  function V(e) {
    return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }
  var Y = [],
    G = e.document,
    Q = Y.slice,
    J = Y.concat,
    K = Y.push,
    Z = Y.indexOf,
    ee = {},
    te = ee.toString,
    ne = ee.hasOwnProperty,
    re = {},
    ie = "2.2.4",
    oe = function (e, t) {
      return new oe.fn.init(e, t);
    },
    se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ae = /^-ms-/,
    ue = /-([\da-z])/gi,
    le = function (e, t) {
      return t.toUpperCase();
    };
  (oe.fn = oe.prototype =
    {
      jquery: ie,
      constructor: oe,
      selector: "",
      length: 0,
      toArray: function () {
        return Q.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : Q.call(this);
      },
      pushStack: function (e) {
        var t = oe.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e) {
        return oe.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          oe.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(Q.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: K,
      sort: Y.sort,
      splice: Y.splice,
    }),
    (oe.extend = oe.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          s = arguments[0] || {},
          a = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || oe.isFunction(s) || (s = {}),
            a === u && ((s = this), a--);
          u > a;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = s[t]),
                (r = e[t]),
                s !== r &&
                  (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && oe.isArray(n) ? n : []))
                        : (o = n && oe.isPlainObject(n) ? n : {}),
                      (s[t] = oe.extend(l, o, r)))
                    : void 0 !== r && (s[t] = r));
        return s;
      }),
    oe.extend({
      expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === oe.type(e);
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0;
      },
      isPlainObject: function (e) {
        var t;
        if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
        if (
          e.constructor &&
          !ne.call(e, "constructor") &&
          !ne.call(e.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (t in e);
        return void 0 === t || ne.call(e, t);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? ee[te.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (e) {
        var t,
          n = eval;
        (e = oe.trim(e)),
          e &&
            (1 === e.indexOf("use strict")
              ? ((t = G.createElement("script")),
                (t.text = e),
                G.head.appendChild(t).parentNode.removeChild(t))
              : n(e));
      },
      camelCase: function (e) {
        return e.replace(ae, "ms-").replace(ue, le);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var r,
          i = 0;
        if (n(e))
          for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
        else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(se, "");
      },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? oe.merge(r, "string" == typeof e ? [e] : e)
              : K.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : Z.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)
          (r = !t(e[o], o)), r !== a && i.push(e[o]);
        return i;
      },
      map: function (e, t, r) {
        var i,
          o,
          s = 0,
          a = [];
        if (n(e))
          for (i = e.length; i > s; s++)
            (o = t(e[s], s, r)), null != o && a.push(o);
        else for (s in e) (o = t(e[s], s, r)), null != o && a.push(o);
        return J.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, r, i;
        return (
          "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
          oe.isFunction(e)
            ? ((r = Q.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(Q.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || oe.guid++),
              i)
            : void 0
        );
      },
      now: Date.now,
      support: re,
    }),
    "function" == typeof Symbol &&
      (oe.fn[Symbol.iterator] = Y[Symbol.iterator]),
    oe.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var ce = (function (e) {
    function t(e, t, n, r) {
      var i,
        o,
        s,
        a,
        u,
        l,
        f,
        d,
        h = t && t.ownerDocument,
        g = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : W) !== L && q(t), (t = t || L), O)
      ) {
        if (11 !== g && (l = me.exec(e)))
          if ((i = l[1])) {
            if (9 === g) {
              if (!(s = t.getElementById(i))) return n;
              if (s.id === i) return n.push(s), n;
            } else if (h && (s = h.getElementById(i)) && M(t, s) && s.id === i)
              return n.push(s), n;
          } else {
            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = l[3]) &&
              w.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(i)), n;
          }
        if (w.qsa && !z[e + " "] && (!F || !F.test(e))) {
          if (1 !== g) (h = t), (d = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute("id"))
                ? (a = a.replace(xe, "\\$&"))
                : t.setAttribute("id", (a = I)),
                f = E(e),
                o = f.length,
                u = pe.test(a) ? "#" + a : "[id='" + a + "']";
              o--;

            )
              f[o] = u + " " + p(f[o]);
            (d = f.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
          }
          if (d)
            try {
              return K.apply(n, h.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              a === I && t.removeAttribute("id");
            }
        }
      }
      return S(e.replace(ae, "$1"), t, n, r);
    }
    function n() {
      function e(n, r) {
        return (
          t.push(n + " ") > T.cacheLength && delete e[t.shift()],
          (e[n + " "] = r)
        );
      }
      var t = [];
      return e;
    }
    function r(e) {
      return (e[I] = !0), e;
    }
    function i(e) {
      var t = L.createElement("div");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) T.attrHandle[n[r]] = t;
    }
    function s(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || V) - (~e.sourceIndex || V);
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function l(e) {
      return r(function (t) {
        return (
          (t = +t),
          r(function (n, r) {
            for (var i, o = e([], n.length, t), s = o.length; s--; )
              n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function c(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function f() {}
    function p(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r;
    }
    function d(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        o = B++;
      return t.first
        ? function (t, n, o) {
            for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
          }
        : function (t, n, s) {
            var a,
              u,
              l,
              c = [$, o];
            if (s) {
              for (; (t = t[r]); )
                if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
            } else
              for (; (t = t[r]); )
                if (1 === t.nodeType || i) {
                  if (
                    ((l = t[I] || (t[I] = {})),
                    (u = l[t.uniqueID] || (l[t.uniqueID] = {})),
                    (a = u[r]) && a[0] === $ && a[1] === o)
                  )
                    return (c[2] = a[2]);
                  if (((u[r] = c), (c[2] = e(t, n, s)))) return !0;
                }
          };
    }
    function h(e) {
      return e.length > 1
        ? function (t, n, r) {
            for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function g(e, n, r) {
      for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
      return r;
    }
    function v(e, t, n, r, i) {
      for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)
        (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
      return s;
    }
    function m(e, t, n, i, o, s) {
      return (
        i && !i[I] && (i = m(i)),
        o && !o[I] && (o = m(o, s)),
        r(function (r, s, a, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = s.length,
            m = r || g(t || "*", a.nodeType ? [a] : a, []),
            y = !e || (!r && t) ? m : v(m, p, e, a, u),
            x = n ? (o || (r ? e : h || i) ? [] : s) : y;
          if ((n && n(y, x, a, u), i))
            for (l = v(x, d), i(l, [], a, u), c = l.length; c--; )
              (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
          if (r) {
            if (o || e) {
              if (o) {
                for (l = [], c = x.length; c--; )
                  (f = x[c]) && l.push((y[c] = f));
                o(null, (x = []), l, u);
              }
              for (c = x.length; c--; )
                (f = x[c]) &&
                  (l = o ? ee(r, f) : p[c]) > -1 &&
                  (r[l] = !(s[l] = f));
            }
          } else (x = v(x === s ? x.splice(h, x.length) : x)), o ? o(null, s, x, u) : K.apply(s, x);
        })
      );
    }
    function y(e) {
      for (
        var t,
          n,
          r,
          i = e.length,
          o = T.relative[e[0].type],
          s = o || T.relative[" "],
          a = o ? 1 : 0,
          u = d(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          l = d(
            function (e) {
              return ee(t, e) > -1;
            },
            s,
            !0
          ),
          c = [
            function (e, n, r) {
              var i =
                (!o && (r || n !== j)) ||
                ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return (t = null), i;
            },
          ];
        i > a;
        a++
      )
        if ((n = T.relative[e[a].type])) c = [d(h(c), n)];
        else {
          if (((n = T.filter[e[a].type].apply(null, e[a].matches)), n[I])) {
            for (r = ++a; i > r && !T.relative[e[r].type]; r++);
            return m(
              a > 1 && h(c),
              a > 1 &&
                p(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(ae, "$1"),
              n,
              r > a && y(e.slice(a, r)),
              i > r && y((e = e.slice(r))),
              i > r && p(e)
            );
          }
          c.push(n);
        }
      return h(c);
    }
    function x(e, n) {
      var i = n.length > 0,
        o = e.length > 0,
        s = function (r, s, a, u, l) {
          var c,
            f,
            p,
            d = 0,
            h = "0",
            g = r && [],
            m = [],
            y = j,
            x = r || (o && T.find.TAG("*", l)),
            b = ($ += null == y ? 1 : Math.random() || 0.1),
            w = x.length;
          for (
            l && (j = s === L || s || l);
            h !== w && null != (c = x[h]);
            h++
          ) {
            if (o && c) {
              for (
                f = 0, s || c.ownerDocument === L || (q(c), (a = !O));
                (p = e[f++]);

              )
                if (p(c, s || L, a)) {
                  u.push(c);
                  break;
                }
              l && ($ = b);
            }
            i && ((c = !p && c) && d--, r && g.push(c));
          }
          if (((d += h), i && h !== d)) {
            for (f = 0; (p = n[f++]); ) p(g, m, s, a);
            if (r) {
              if (d > 0) for (; h--; ) g[h] || m[h] || (m[h] = Q.call(u));
              m = v(m);
            }
            K.apply(u, m),
              l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u);
          }
          return l && (($ = b), (j = y)), g;
        };
      return i ? r(s) : s;
    }
    var b,
      w,
      T,
      C,
      k,
      E,
      N,
      S,
      j,
      D,
      A,
      q,
      L,
      H,
      O,
      F,
      P,
      R,
      M,
      I = "sizzle" + 1 * new Date(),
      W = e.document,
      $ = 0,
      B = 0,
      _ = n(),
      X = n(),
      z = n(),
      U = function (e, t) {
        return e === t && (A = !0), 0;
      },
      V = 1 << 31,
      Y = {}.hasOwnProperty,
      G = [],
      Q = G.pop,
      J = G.push,
      K = G.push,
      Z = G.slice,
      ee = function (e, t) {
        for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      ie =
        "\\[" +
        ne +
        "*(" +
        re +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        re +
        "))|)" +
        ne +
        "*\\]",
      oe =
        ":(" +
        re +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ie +
        ")*)|.*)\\)|)",
      se = new RegExp(ne + "+", "g"),
      ae = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(oe),
      pe = new RegExp("^" + re + "$"),
      de = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      he = /^(?:input|select|textarea|button)$/i,
      ge = /^h\d$/i,
      ve = /^[^{]+\{\s*\[native \w/,
      me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ye = /[+~]/,
      xe = /'|\\/g,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      we = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      Te = function () {
        q();
      };
    try {
      K.apply((G = Z.call(W.childNodes)), W.childNodes),
        G[W.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: G.length
          ? function (e, t) {
              J.apply(e, Z.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    (w = t.support = {}),
      (k = t.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (q = t.setDocument =
        function (e) {
          var t,
            n,
            r = e ? e.ownerDocument || e : W;
          return r !== L && 9 === r.nodeType && r.documentElement
            ? ((L = r),
              (H = L.documentElement),
              (O = !k(L)),
              (n = L.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", Te, !1)
                  : n.attachEvent && n.attachEvent("onunload", Te)),
              (w.attributes = i(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (w.getElementsByTagName = i(function (e) {
                return (
                  e.appendChild(L.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (w.getElementsByClassName = ve.test(L.getElementsByClassName)),
              (w.getById = i(function (e) {
                return (
                  (H.appendChild(e).id = I),
                  !L.getElementsByName || !L.getElementsByName(I).length
                );
              })),
              w.getById
                ? ((T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }),
                  (T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete T.find.ID,
                  (T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (T.find.TAG = w.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : w.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (T.find.CLASS =
                w.getElementsByClassName &&
                function (e, t) {
                  return "undefined" != typeof t.getElementsByClassName && O
                    ? t.getElementsByClassName(e)
                    : void 0;
                }),
              (P = []),
              (F = []),
              (w.qsa = ve.test(L.querySelectorAll)) &&
                (i(function (e) {
                  (H.appendChild(e).innerHTML =
                    "<a id='" +
                    I +
                    "'></a><select id='" +
                    I +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      F.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + I + "-]").length ||
                      F.push("~="),
                    e.querySelectorAll(":checked").length || F.push(":checked"),
                    e.querySelectorAll("a#" + I + "+*").length ||
                      F.push(".#.+[+~]");
                }),
                i(function (e) {
                  var t = L.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      F.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      F.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    F.push(",.*:");
                })),
              (w.matchesSelector = ve.test(
                (R =
                  H.matches ||
                  H.webkitMatchesSelector ||
                  H.mozMatchesSelector ||
                  H.oMatchesSelector ||
                  H.msMatchesSelector)
              )) &&
                i(function (e) {
                  (w.disconnectedMatch = R.call(e, "div")),
                    R.call(e, "[s!='']:x"),
                    P.push("!=", oe);
                }),
              (F = F.length && new RegExp(F.join("|"))),
              (P = P.length && new RegExp(P.join("|"))),
              (t = ve.test(H.compareDocumentPosition)),
              (M =
                t || ve.test(H.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (U = t
                ? function (e, t) {
                    if (e === t) return (A = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!w.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === L || (e.ownerDocument === W && M(W, e))
                            ? -1
                            : t === L || (t.ownerDocument === W && M(W, t))
                            ? 1
                            : D
                            ? ee(D, e) - ee(D, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (A = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      u = [t];
                    if (!i || !o)
                      return e === L
                        ? -1
                        : t === L
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : D
                        ? ee(D, e) - ee(D, t)
                        : 0;
                    if (i === o) return s(e, t);
                    for (n = e; (n = n.parentNode); ) a.unshift(n);
                    for (n = t; (n = n.parentNode); ) u.unshift(n);
                    for (; a[r] === u[r]; ) r++;
                    return r
                      ? s(a[r], u[r])
                      : a[r] === W
                      ? -1
                      : u[r] === W
                      ? 1
                      : 0;
                  }),
              L)
            : L;
        }),
      (t.matches = function (e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function (e, n) {
        if (
          ((e.ownerDocument || e) !== L && q(e),
          (n = n.replace(ce, "='$1']")),
          w.matchesSelector &&
            O &&
            !z[n + " "] &&
            (!P || !P.test(n)) &&
            (!F || !F.test(n)))
        )
          try {
            var r = R.call(e, n);
            if (
              r ||
              w.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return t(n, L, null, [e]).length > 0;
      }),
      (t.contains = function (e, t) {
        return (e.ownerDocument || e) !== L && q(e), M(e, t);
      }),
      (t.attr = function (e, t) {
        (e.ownerDocument || e) !== L && q(e);
        var n = T.attrHandle[t.toLowerCase()],
          r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
        return void 0 !== r
          ? r
          : w.attributes || !O
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
          ? r.value
          : null;
      }),
      (t.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function (e) {
        var t,
          n = [],
          r = 0,
          i = 0;
        if (
          ((A = !w.detectDuplicates),
          (D = !w.sortStable && e.slice(0)),
          e.sort(U),
          A)
        ) {
          for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
          for (; r--; ) e.splice(n[r], 1);
        }
        return (D = null), e;
      }),
      (C = t.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            i = e.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
            } else if (3 === i || 4 === i) return e.nodeValue;
          } else for (; (t = e[r++]); ) n += C(t);
          return n;
        }),
      (T = t.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: de,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(be, we)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(be, we)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || t.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && t.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return de.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      fe.test(n) &&
                      (t = E(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(be, we).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = _[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                  _(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, n, r) {
              return function (i) {
                var o = t.attr(i, e);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                s = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== s ? "nextSibling" : "previousSibling",
                      v = t.parentNode,
                      m = a && t.nodeName.toLowerCase(),
                      y = !u && !a,
                      x = !1;
                    if (v) {
                      if (o) {
                        for (; g; ) {
                          for (p = t; (p = p[g]); )
                            if (
                              a
                                ? p.nodeName.toLowerCase() === m
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                        for (
                          p = v,
                            f = p[I] || (p[I] = {}),
                            c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                            l = c[e] || [],
                            d = l[0] === $ && l[1],
                            x = d && l[2],
                            p = d && v.childNodes[d];
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [$, d, x];
                            break;
                          }
                      } else if (
                        (y &&
                          ((p = t),
                          (f = p[I] || (p[I] = {})),
                          (c = f[p.uniqueID] || (f[p.uniqueID] = {})),
                          (l = c[e] || []),
                          (d = l[0] === $ && l[1]),
                          (x = d)),
                        x === !1)
                      )
                        for (
                          ;
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                          ((a
                            ? p.nodeName.toLowerCase() !== m
                            : 1 !== p.nodeType) ||
                            !++x ||
                            (y &&
                              ((f = p[I] || (p[I] = {})),
                              (c = f[p.uniqueID] || (f[p.uniqueID] = {})),
                              (c[e] = [$, x])),
                            p !== t));

                        );
                      return (x -= i), x === r || (x % r === 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var i,
                o =
                  T.pseudos[e] ||
                  T.setFilters[e.toLowerCase()] ||
                  t.error("unsupported pseudo: " + e);
              return o[I]
                ? o(n)
                : o.length > 1
                ? ((i = [e, e, "", n]),
                  T.setFilters.hasOwnProperty(e.toLowerCase())
                    ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                          (r = ee(e, i[s])), (e[r] = !(t[r] = i[s]));
                      })
                    : function (e) {
                        return o(e, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (e) {
              var t = [],
                n = [],
                i = N(e.replace(ae, "$1"));
              return i[I]
                ? r(function (e, t, n, r) {
                    for (var o, s = i(e, null, r, []), a = e.length; a--; )
                      (o = s[a]) && (e[a] = !(t[a] = o));
                  })
                : function (e, r, o) {
                    return (
                      (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (e) {
              return function (n) {
                return t(e, n).length > 0;
              };
            }),
            contains: r(function (e) {
              return (
                (e = e.replace(be, we)),
                function (t) {
                  return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: r(function (e) {
              return (
                pe.test(e || "") || t.error("unsupported lang: " + e),
                (e = e.replace(be, we).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = O
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === H;
            },
            focus: function (e) {
              return (
                e === L.activeElement &&
                (!L.hasFocus || L.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !T.pseudos.empty(e);
            },
            header: function (e) {
              return ge.test(e.nodeName);
            },
            input: function (e) {
              return he.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (e, t) {
              return [t - 1];
            }),
            eq: l(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: l(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: l(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: l(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: l(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
      (T.pseudos.nth = T.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      T.pseudos[b] = a(b);
    for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b);
    return (
      (f.prototype = T.filters = T.pseudos),
      (T.setFilters = new f()),
      (E = t.tokenize =
        function (e, n) {
          var r,
            i,
            o,
            s,
            a,
            u,
            l,
            c = X[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (a = e, u = [], l = T.preFilter; a; ) {
            (r && !(i = ue.exec(a))) ||
              (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
              (r = !1),
              (i = le.exec(a)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(ae, " ") }),
                (a = a.slice(r.length)));
            for (s in T.filter)
              !(i = de[s].exec(a)) ||
                (l[s] && !(i = l[s](i))) ||
                ((r = i.shift()),
                o.push({ value: r, type: s, matches: i }),
                (a = a.slice(r.length)));
            if (!r) break;
          }
          return n ? a.length : a ? t.error(e) : X(e, u).slice(0);
        }),
      (N = t.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = z[e + " "];
          if (!o) {
            for (t || (t = E(e)), n = t.length; n--; )
              (o = y(t[n])), o[I] ? r.push(o) : i.push(o);
            (o = z(e, x(i, r))), (o.selector = e);
          }
          return o;
        }),
      (S = t.select =
        function (e, t, n, r) {
          var i,
            o,
            s,
            a,
            u,
            l = "function" == typeof e && e,
            f = !r && E((e = l.selector || e));
          if (((n = n || []), 1 === f.length)) {
            if (
              ((o = f[0] = f[0].slice(0)),
              o.length > 2 &&
                "ID" === (s = o[0]).type &&
                w.getById &&
                9 === t.nodeType &&
                O &&
                T.relative[o[1].type])
            ) {
              if (
                ((t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0]),
                !t)
              )
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = de.needsContext.test(e) ? 0 : o.length;
              i-- && ((s = o[i]), !T.relative[(a = s.type)]);

            )
              if (
                (u = T.find[a]) &&
                (r = u(
                  s.matches[0].replace(be, we),
                  (ye.test(o[0].type) && c(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), (e = r.length && p(o)), !e))
                  return K.apply(n, r), n;
                break;
              }
          }
          return (
            (l || N(e, f))(
              r,
              t,
              !O,
              n,
              !t || (ye.test(e) && c(t.parentNode)) || t
            ),
            n
          );
        }),
      (w.sortStable = I.split("").sort(U).join("") === I),
      (w.detectDuplicates = !!A),
      q(),
      (w.sortDetached = i(function (e) {
        return 1 & e.compareDocumentPosition(L.createElement("div"));
      })),
      i(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        i(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      i(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(te, function (e, t, n) {
          var r;
          return n
            ? void 0
            : e[t] === !0
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      t
    );
  })(e);
  (oe.find = ce),
    (oe.expr = ce.selectors),
    (oe.expr[":"] = oe.expr.pseudos),
    (oe.uniqueSort = oe.unique = ce.uniqueSort),
    (oe.text = ce.getText),
    (oe.isXMLDoc = ce.isXML),
    (oe.contains = ce.contains);
  var fe = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && oe(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    pe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    de = oe.expr.match.needsContext,
    he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    ge = /^.[^:#\[\.,]*$/;
  (oe.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? oe.find.matchesSelector(r, e)
          ? [r]
          : []
        : oe.find.matches(
            e,
            oe.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    oe.fn.extend({
      find: function (e) {
        var t,
          n = this.length,
          r = [],
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            oe(e).filter(function () {
              for (t = 0; n > t; t++) if (oe.contains(i[t], this)) return !0;
            })
          );
        for (t = 0; n > t; t++) oe.find(e, i[t], r);
        return (
          (r = this.pushStack(n > 1 ? oe.unique(r) : r)),
          (r.selector = this.selector ? this.selector + " " + e : e),
          r
        );
      },
      filter: function (e) {
        return this.pushStack(r(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(r(this, e || [], !0));
      },
      is: function (e) {
        return !!r(
          this,
          "string" == typeof e && de.test(e) ? oe(e) : e || [],
          !1
        ).length;
      },
    });
  var ve,
    me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ye = (oe.fn.init = function (e, t, n) {
      var r, i;
      if (!e) return this;
      if (((n = n || ve), "string" == typeof e)) {
        if (
          ((r =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : me.exec(e)),
          !r || (!r[1] && t))
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (r[1]) {
          if (
            ((t = t instanceof oe ? t[0] : t),
            oe.merge(
              this,
              oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)
            ),
            he.test(r[1]) && oe.isPlainObject(t))
          )
            for (r in t)
              oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
          return this;
        }
        return (
          (i = G.getElementById(r[2])),
          i && i.parentNode && ((this.length = 1), (this[0] = i)),
          (this.context = G),
          (this.selector = e),
          this
        );
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : oe.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(oe)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          oe.makeArray(e, this));
    });
  (ye.prototype = oe.fn), (ve = oe(G));
  var xe = /^(?:parents|prev(?:Until|All))/,
    be = { children: !0, contents: !0, next: !0, prev: !0 };
  oe.fn.extend({
    has: function (e) {
      var t = oe(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; n > e; e++) if (oe.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          o = [],
          s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0;
        i > r;
        r++
      )
        for (n = this[r]; n && n !== t; n = n.parentNode)
          if (
            n.nodeType < 11 &&
            (s
              ? s.index(n) > -1
              : 1 === n.nodeType && oe.find.matchesSelector(n, e))
          ) {
            o.push(n);
            break;
          }
      return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? Z.call(oe(e), this[0])
          : Z.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    oe.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return fe(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return fe(e, "parentNode", n);
        },
        next: function (e) {
          return i(e, "nextSibling");
        },
        prev: function (e) {
          return i(e, "previousSibling");
        },
        nextAll: function (e) {
          return fe(e, "nextSibling");
        },
        prevAll: function (e) {
          return fe(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return fe(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return fe(e, "previousSibling", n);
        },
        siblings: function (e) {
          return pe((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return pe(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument || oe.merge([], e.childNodes);
        },
      },
      function (e, t) {
        oe.fn[e] = function (n, r) {
          var i = oe.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = oe.filter(r, i)),
            this.length > 1 &&
              (be[e] || oe.uniqueSort(i), xe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var we = /\S+/g;
  (oe.Callbacks = function (e) {
    e = "string" == typeof e ? o(e) : oe.extend({}, e);
    var t,
      n,
      r,
      i,
      s = [],
      a = [],
      u = -1,
      l = function () {
        for (i = e.once, r = t = !0; a.length; u = -1)
          for (n = a.shift(); ++u < s.length; )
            s[u].apply(n[0], n[1]) === !1 &&
              e.stopOnFalse &&
              ((u = s.length), (n = !1));
        e.memory || (n = !1), (t = !1), i && (s = n ? [] : "");
      },
      c = {
        add: function () {
          return (
            s &&
              (n && !t && ((u = s.length - 1), a.push(n)),
              (function t(n) {
                oe.each(n, function (n, r) {
                  oe.isFunction(r)
                    ? (e.unique && c.has(r)) || s.push(r)
                    : r && r.length && "string" !== oe.type(r) && t(r);
                });
              })(arguments),
              n && !t && l()),
            this
          );
        },
        remove: function () {
          return (
            oe.each(arguments, function (e, t) {
              for (var n; (n = oe.inArray(t, s, n)) > -1; )
                s.splice(n, 1), u >= n && u--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? oe.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (i = a = []), (s = n = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (i = a = []), n || (s = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              a.push(n),
              t || l()),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return c;
  }),
    oe.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
            ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
            ["notify", "progress", oe.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return oe
                .Deferred(function (n) {
                  oe.each(t, function (t, o) {
                    var s = oe.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                      var e = s && s.apply(this, arguments);
                      e && oe.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[o[0] + "With"](
                            this === r ? n.promise() : this,
                            s ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? oe.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          oe.each(t, function (e, o) {
            var s = o[2],
              a = o[3];
            (r[o[1]] = s.add),
              a &&
                s.add(
                  function () {
                    n = a;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[o[0] + "With"] = s.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          o = Q.call(arguments),
          s = o.length,
          a = 1 !== s || (e && oe.isFunction(e.promise)) ? s : 0,
          u = 1 === a ? e : oe.Deferred(),
          l = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? Q.call(arguments) : i),
                r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r);
            };
          };
        if (s > 1)
          for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++)
            o[i] && oe.isFunction(o[i].promise)
              ? o[i]
                  .promise()
                  .progress(l(i, n, t))
                  .done(l(i, r, o))
                  .fail(u.reject)
              : --a;
        return a || u.resolveWith(r, o), u.promise();
      },
    });
  var Te;
  (oe.fn.ready = function (e) {
    return oe.ready.promise().done(e), this;
  }),
    oe.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? oe.readyWait++ : oe.ready(!0);
      },
      ready: function (e) {
        (e === !0 ? --oe.readyWait : oe.isReady) ||
          ((oe.isReady = !0),
          (e !== !0 && --oe.readyWait > 0) ||
            (Te.resolveWith(G, [oe]),
            oe.fn.triggerHandler &&
              (oe(G).triggerHandler("ready"), oe(G).off("ready"))));
      },
    }),
    (oe.ready.promise = function (t) {
      return (
        Te ||
          ((Te = oe.Deferred()),
          "complete" === G.readyState ||
          ("loading" !== G.readyState && !G.documentElement.doScroll)
            ? e.setTimeout(oe.ready)
            : (G.addEventListener("DOMContentLoaded", s),
              e.addEventListener("load", s))),
        Te.promise(t)
      );
    }),
    oe.ready.promise();
  var Ce = function (e, t, n, r, i, o, s) {
      var a = 0,
        u = e.length,
        l = null == n;
      if ("object" === oe.type(n)) {
        i = !0;
        for (a in n) Ce(e, t, a, n[a], !0, o, s);
      } else if (
        void 0 !== r &&
        ((i = !0),
        oe.isFunction(r) || (s = !0),
        l &&
          (s
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(oe(e), n);
              }))),
        t)
      )
        for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    ke = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (a.uid = 1),
    (a.prototype = {
      register: function (e, t) {
        var n = t || {};
        return (
          e.nodeType
            ? (e[this.expando] = n)
            : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0,
              }),
          e[this.expando]
        );
      },
      cache: function (e) {
        if (!ke(e)) return {};
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            ke(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[t] = n;
        else for (r in t) i[r] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][t];
      },
      access: function (e, t, n) {
        var r;
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? ((r = this.get(e, t)),
            void 0 !== r ? r : this.get(e, oe.camelCase(t)))
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r,
          i,
          o = e[this.expando];
        if (void 0 !== o) {
          if (void 0 === t) this.register(e);
          else {
            oe.isArray(t)
              ? (r = t.concat(t.map(oe.camelCase)))
              : ((i = oe.camelCase(t)),
                t in o
                  ? (r = [t, i])
                  : ((r = i), (r = r in o ? [r] : r.match(we) || []))),
              (n = r.length);
            for (; n--; ) delete o[r[n]];
          }
          (void 0 === t || oe.isEmptyObject(o)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !oe.isEmptyObject(t);
      },
    });
  var Ee = new a(),
    Ne = new a(),
    Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    je = /[A-Z]/g;
  oe.extend({
    hasData: function (e) {
      return Ne.hasData(e) || Ee.hasData(e);
    },
    data: function (e, t, n) {
      return Ne.access(e, t, n);
    },
    removeData: function (e, t) {
      Ne.remove(e, t);
    },
    _data: function (e, t, n) {
      return Ee.access(e, t, n);
    },
    _removeData: function (e, t) {
      Ee.remove(e, t);
    },
  }),
    oe.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = Ne.get(o)), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                ((r = s[n].name),
                0 === r.indexOf("data-") &&
                  ((r = oe.camelCase(r.slice(5))), u(o, r, i[r])));
            Ee.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              Ne.set(this, e);
            })
          : Ce(
              this,
              function (t) {
                var n, r;
                if (o && void 0 === t) {
                  if (
                    ((n =
                      Ne.get(o, e) ||
                      Ne.get(o, e.replace(je, "-$&").toLowerCase())),
                    void 0 !== n)
                  )
                    return n;
                  if (((r = oe.camelCase(e)), (n = Ne.get(o, r)), void 0 !== n))
                    return n;
                  if (((n = u(o, r, void 0)), void 0 !== n)) return n;
                } else
                  (r = oe.camelCase(e)),
                    this.each(function () {
                      var n = Ne.get(this, r);
                      Ne.set(this, r, t),
                        e.indexOf("-") > -1 &&
                          void 0 !== n &&
                          Ne.set(this, e, t);
                    });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Ne.remove(this, e);
        });
      },
    }),
    oe.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = Ee.get(e, t)),
            n &&
              (!r || oe.isArray(n)
                ? (r = Ee.access(e, t, oe.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = oe.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = oe._queueHooks(e, t),
          s = function () {
            oe.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Ee.get(e, n) ||
          Ee.access(e, n, {
            empty: oe.Callbacks("once memory").add(function () {
              Ee.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    oe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? oe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          oe.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = oe.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = Ee.get(o[s], e + "queueHooks")),
            n && n.empty && (r++, n.empty.add(a));
        return a(), i.promise(t);
      },
    });
  var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ae = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
    qe = ["Top", "Right", "Bottom", "Left"],
    Le = function (e, t) {
      return (
        (e = t || e),
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
      );
    },
    He = /^(?:checkbox|radio)$/i,
    Oe = /<([\w:-]+)/,
    Fe = /^$|\/(?:java|ecma)script/i,
    Pe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Pe.optgroup = Pe.option),
    (Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead),
    (Pe.th = Pe.td);
  var Re = /<|&#?\w+;/;
  !(function () {
    var e = G.createDocumentFragment(),
      t = e.appendChild(G.createElement("div")),
      n = G.createElement("input");
    n.setAttribute("type", "radio"),
      n.setAttribute("checked", "checked"),
      n.setAttribute("name", "t"),
      t.appendChild(n),
      (re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
  })();
  var Me = /^key/,
    Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    We = /^([^.]*)(?:\.(.+)|)/;
  (oe.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Ee.get(e);
      if (v)
        for (
          n.handler && ((o = n), (n = o.handler), (i = o.selector)),
            n.guid || (n.guid = oe.guid++),
            (u = v.events) || (u = v.events = {}),
            (s = v.handle) ||
              (s = v.handle =
                function (t) {
                  return "undefined" != typeof oe &&
                    oe.event.triggered !== t.type
                    ? oe.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            t = (t || "").match(we) || [""],
            l = t.length;
          l--;

        )
          (a = We.exec(t[l]) || []),
            (d = g = a[1]),
            (h = (a[2] || "").split(".").sort()),
            d &&
              ((f = oe.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = oe.event.special[d] || {}),
              (c = oe.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && oe.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                ((p = u[d] = []),
                (p.delegateCount = 0),
                (f.setup && f.setup.call(e, r, h, s) !== !1) ||
                  (e.addEventListener && e.addEventListener(d, s))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (oe.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Ee.hasData(e) && Ee.get(e);
      if (v && (u = v.events)) {
        for (t = (t || "").match(we) || [""], l = t.length; l--; )
          if (
            ((a = We.exec(t[l]) || []),
            (d = g = a[1]),
            (h = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              f = oe.event.special[d] || {},
                d = (r ? f.delegateType : f.bindType) || d,
                p = u[d] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (a && !a.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            s &&
              !p.length &&
              ((f.teardown && f.teardown.call(e, h, v.handle) !== !1) ||
                oe.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) oe.event.remove(e, d + t[l], n, r, !0);
        oe.isEmptyObject(u) && Ee.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      e = oe.event.fix(e);
      var t,
        n,
        r,
        i,
        o,
        s = [],
        a = Q.call(arguments),
        u = (Ee.get(this, "events") || {})[e.type] || [],
        l = oe.event.special[e.type] || {};
      if (
        ((a[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, e) !== !1)
      ) {
        for (
          s = oe.event.handlers.call(this, e, u), t = 0;
          (i = s[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
              ((e.handleObj = o),
              (e.data = o.data),
              (r = (
                (oe.event.special[o.origType] || {}).handle || o.handler
              ).apply(i.elem, a)),
              void 0 !== r &&
                (e.result = r) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        s = [],
        a = t.delegateCount,
        u = e.target;
      if (
        a &&
        u.nodeType &&
        ("click" !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; u !== this; u = u.parentNode || this)
          if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (r = [], n = 0; a > n; n++)
              (o = t[n]),
                (i = o.selector + " "),
                void 0 === r[i] &&
                  (r[i] = o.needsContext
                    ? oe(i, this).index(u) > -1
                    : oe.find(i, this, null, [u]).length),
                r[i] && r.push(o);
            r.length && s.push({ elem: u, handlers: r });
          }
      return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          o = t.button;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = e.target.ownerDocument || G),
            (r = n.documentElement),
            (i = n.body),
            (e.pageX =
              t.clientX +
              ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) -
              ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((r && r.scrollTop) || (i && i.scrollTop) || 0) -
              ((r && r.clientTop) || (i && i.clientTop) || 0))),
          e.which ||
            void 0 === o ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    fix: function (e) {
      if (e[oe.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        o = e,
        s = this.fixHooks[i];
      for (
        s ||
          (this.fixHooks[i] = s =
            Ie.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}),
          r = s.props ? this.props.concat(s.props) : this.props,
          e = new oe.Event(o),
          t = r.length;
        t--;

      )
        (n = r[t]), (e[n] = o[n]);
      return (
        e.target || (e.target = G),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        s.filter ? s.filter(e, o) : e
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== g() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === g() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            oe.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return oe.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (oe.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (oe.Event = function (e, t) {
      return this instanceof oe.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && e.returnValue === !1)
                  ? d
                  : h))
            : (this.type = e),
          t && oe.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || oe.now()),
          void (this[oe.expando] = !0))
        : new oe.Event(e, t);
    }),
    (oe.Event.prototype = {
      constructor: oe.Event,
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = d),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = d),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = d),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    oe.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        oe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || oe.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    oe.fn.extend({
      on: function (e, t, n, r) {
        return v(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return v(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            oe(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
          n === !1 && (n = h),
          this.each(function () {
            oe.event.remove(this, e, n, t);
          })
        );
      },
    });
  var $e =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Be = /<script|<style|<link/i,
    _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xe = /^true\/(.*)/,
    ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  oe.extend({
    htmlPrefilter: function (e) {
      return e.replace($e, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        s,
        a = e.cloneNode(!0),
        u = oe.contains(e.ownerDocument, e);
      if (
        !(
          re.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          oe.isXMLDoc(e)
        )
      )
        for (s = c(a), o = c(e), r = 0, i = o.length; i > r; r++) w(o[r], s[r]);
      if (t)
        if (n)
          for (o = o || c(e), s = s || c(a), r = 0, i = o.length; i > r; r++)
            b(o[r], s[r]);
        else b(e, a);
      return (
        (s = c(a, "script")), s.length > 0 && f(s, !u && c(e, "script")), a
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (ke(n)) {
          if ((t = n[Ee.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
            n[Ee.expando] = void 0;
          }
          n[Ne.expando] && (n[Ne.expando] = void 0);
        }
    },
  }),
    oe.fn.extend({
      domManip: T,
      detach: function (e) {
        return C(this, e, !0);
      },
      remove: function (e) {
        return C(this, e);
      },
      text: function (e) {
        return Ce(
          this,
          function (e) {
            return void 0 === e
              ? oe.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return T(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = m(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return T(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = m(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return T(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return T(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (oe.cleanData(c(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return oe.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Ce(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Be.test(e) &&
              !Pe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = oe.htmlPrefilter(e);
              try {
                for (; r > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (oe.cleanData(c(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return T(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            oe.inArray(this, e) < 0 &&
              (oe.cleanData(c(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    oe.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        oe.fn[e] = function (e) {
          for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; o >= s; s++)
            (n = s === o ? this : this.clone(!0)),
              oe(i[s])[t](n),
              K.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var Ue,
    Ve = { HTML: "block", BODY: "block" },
    Ye = /^margin/,
    Ge = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
    Qe = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Je = function (e, t, n, r) {
      var i,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = s[o];
      return i;
    },
    Ke = G.documentElement;
  !(function () {
    function t() {
      (a.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (a.innerHTML = ""),
        Ke.appendChild(s);
      var t = e.getComputedStyle(a);
      (n = "1%" !== t.top),
        (o = "2px" === t.marginLeft),
        (r = "4px" === t.width),
        (a.style.marginRight = "50%"),
        (i = "4px" === t.marginRight),
        Ke.removeChild(s);
    }
    var n,
      r,
      i,
      o,
      s = G.createElement("div"),
      a = G.createElement("div");
    a.style &&
      ((a.style.backgroundClip = "content-box"),
      (a.cloneNode(!0).style.backgroundClip = ""),
      (re.clearCloneStyle = "content-box" === a.style.backgroundClip),
      (s.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      s.appendChild(a),
      oe.extend(re, {
        pixelPosition: function () {
          return t(), n;
        },
        boxSizingReliable: function () {
          return null == r && t(), r;
        },
        pixelMarginRight: function () {
          return null == r && t(), i;
        },
        reliableMarginLeft: function () {
          return null == r && t(), o;
        },
        reliableMarginRight: function () {
          var t,
            n = a.appendChild(G.createElement("div"));
          return (
            (n.style.cssText = a.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (n.style.marginRight = n.style.width = "0"),
            (a.style.width = "1px"),
            Ke.appendChild(s),
            (t = !parseFloat(e.getComputedStyle(n).marginRight)),
            Ke.removeChild(s),
            a.removeChild(n),
            t
          );
        },
      }));
  })();
  var Ze = /^(none|table(?!-c[ea]).+)/,
    et = { position: "absolute", visibility: "hidden", display: "block" },
    tt = { letterSpacing: "0", fontWeight: "400" },
    nt = ["Webkit", "O", "Moz", "ms"],
    rt = G.createElement("div").style;
  oe.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = N(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          s,
          a = oe.camelCase(t),
          u = e.style;
        return (
          (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a)),
          (s = oe.cssHooks[t] || oe.cssHooks[a]),
          void 0 === n
            ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
              ? i
              : u[t]
            : ((o = typeof n),
              "string" === o &&
                (i = Ae.exec(n)) &&
                i[1] &&
                ((n = l(e, t, i)), (o = "number")),
              void (
                null != n &&
                n === n &&
                ("number" === o &&
                  (n += (i && i[3]) || (oe.cssNumber[a] ? "" : "px")),
                re.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (u[t] = n))
              ))
        );
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        s,
        a = oe.camelCase(t);
      return (
        (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a)),
        (s = oe.cssHooks[t] || oe.cssHooks[a]),
        s && "get" in s && (i = s.get(e, !0, n)),
        void 0 === i && (i = N(e, t, r)),
        "normal" === i && t in tt && (i = tt[t]),
        "" === n || n
          ? ((o = parseFloat(i)), n === !0 || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    oe.each(["height", "width"], function (e, t) {
      oe.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth
              ? Je(e, et, function () {
                  return q(e, t, r);
                })
              : q(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i,
            o = r && Qe(e),
            s =
              r &&
              A(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
          return (
            s &&
              (i = Ae.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = oe.css(e, t))),
            D(e, n, s)
          );
        },
      };
    }),
    (oe.cssHooks.marginLeft = S(re.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(N(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Je(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        : void 0;
    })),
    (oe.cssHooks.marginRight = S(re.reliableMarginRight, function (e, t) {
      return t
        ? Je(e, { display: "inline-block" }, N, [e, "marginRight"])
        : void 0;
    })),
    oe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (oe.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + qe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        Ye.test(e) || (oe.cssHooks[e + t].set = D);
    }),
    oe.fn.extend({
      css: function (e, t) {
        return Ce(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              s = 0;
            if (oe.isArray(t)) {
              for (r = Qe(e), i = t.length; i > s; s++)
                o[t[s]] = oe.css(e, t[s], !1, r);
              return o;
            }
            return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return L(this, !0);
      },
      hide: function () {
        return L(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              Le(this) ? oe(this).show() : oe(this).hide();
            });
      },
    }),
    (oe.Tween = H),
    (H.prototype = {
      constructor: H,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || oe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (oe.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = H.propHooks[this.prop];
        return e && e.get ? e.get(this) : H.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = H.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                oe.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : H.propHooks._default.set(this),
          this
        );
      },
    }),
    (H.prototype.init.prototype = H.prototype),
    (H.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = oe.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
        },
        set: function (e) {
          oe.fx.step[e.prop]
            ? oe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[oe.cssProps[e.prop]] &&
                !oe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : oe.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (H.propHooks.scrollTop = H.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (oe.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (oe.fx = H.prototype.init),
    (oe.fx.step = {});
  var it,
    ot,
    st = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  (oe.Animation = oe.extend(I, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return l(n.elem, e, Ae.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      oe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(we));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]),
          (I.tweeners[n] = I.tweeners[n] || []),
          I.tweeners[n].unshift(t);
    },
    prefilters: [R],
    prefilter: function (e, t) {
      t ? I.prefilters.unshift(e) : I.prefilters.push(e);
    },
  })),
    (oe.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? oe.extend({}, e)
          : {
              complete: n || (!n && t) || (oe.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !oe.isFunction(t) && t),
            };
      return (
        (r.duration = oe.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in oe.fx.speeds
          ? oe.fx.speeds[r.duration]
          : oe.fx.speeds._default),
        (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          oe.isFunction(r.old) && r.old.call(this),
            r.queue && oe.dequeue(this, r.queue);
        }),
        r
      );
    }),
    oe.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(Le)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = oe.isEmptyObject(e),
          o = oe.speed(t, n, r),
          s = function () {
            var t = I(this, oe.extend({}, e), o);
            (i || Ee.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = oe.timers,
              s = Ee.get(this);
            if (i) s[i] && s[i].stop && r(s[i]);
            else for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || oe.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Ee.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = oe.timers,
              s = r ? r.length : 0;
            for (
              n.finish = !0,
                oe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; s > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    oe.each(["toggle", "show", "hide"], function (e, t) {
      var n = oe.fn[t];
      oe.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(F(t, !0), e, r, i);
      };
    }),
    oe.each(
      {
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        oe.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (oe.timers = []),
    (oe.fx.tick = function () {
      var e,
        t = 0,
        n = oe.timers;
      for (it = oe.now(); t < n.length; t++)
        (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
      n.length || oe.fx.stop(), (it = void 0);
    }),
    (oe.fx.timer = function (e) {
      oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop();
    }),
    (oe.fx.interval = 13),
    (oe.fx.start = function () {
      ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval));
    }),
    (oe.fx.stop = function () {
      e.clearInterval(ot), (ot = null);
    }),
    (oe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (oe.fn.delay = function (t, n) {
      return (
        (t = oe.fx ? oe.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = G.createElement("input"),
        t = G.createElement("select"),
        n = t.appendChild(G.createElement("option"));
      (e.type = "checkbox"),
        (re.checkOn = "" !== e.value),
        (re.optSelected = n.selected),
        (t.disabled = !0),
        (re.optDisabled = !n.disabled),
        (e = G.createElement("input")),
        (e.value = "t"),
        (e.type = "radio"),
        (re.radioValue = "t" === e.value);
    })();
  var ut,
    lt = oe.expr.attrHandle;
  oe.fn.extend({
    attr: function (e, t) {
      return Ce(this, oe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        oe.removeAttr(this, e);
      });
    },
  }),
    oe.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? oe.prop(e, t, n)
            : ((1 === o && oe.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (i =
                  oe.attrHooks[t] ||
                  (oe.expr.match.bool.test(t) ? ut : void 0))),
              void 0 !== n
                ? null === n
                  ? void oe.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : ((r = oe.find.attr(e, t)), null == r ? void 0 : r));
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          o = t && t.match(we);
        if (o && 1 === e.nodeType)
          for (; (n = o[i++]); )
            (r = oe.propFix[n] || n),
              oe.expr.match.bool.test(n) && (e[r] = !1),
              e.removeAttribute(n);
      },
    }),
    (ut = {
      set: function (e, t, n) {
        return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = lt[t] || oe.find.attr;
      lt[t] = function (e, t, r) {
        var i, o;
        return (
          r ||
            ((o = lt[t]),
            (lt[t] = i),
            (i = null != n(e, t, r) ? t.toLowerCase() : null),
            (lt[t] = o)),
          i
        );
      };
    });
  var ct = /^(?:input|select|textarea|button)$/i,
    ft = /^(?:a|area)$/i;
  oe.fn.extend({
    prop: function (e, t) {
      return Ce(this, oe.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[oe.propFix[e] || e];
      });
    },
  }),
    oe.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && oe.isXMLDoc(e)) ||
              ((t = oe.propFix[t] || t), (i = oe.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = oe.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ct.test(e.nodeName) || (ft.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    re.optSelected ||
      (oe.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    oe.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        oe.propFix[this.toLowerCase()] = this;
      }
    );
  var pt = /[\t\r\n\f]/g;
  oe.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a,
        u = 0;
      if (oe.isFunction(e))
        return this.each(function (t) {
          oe(this).addClass(e.call(this, t, W(this)));
        });
      if ("string" == typeof e && e)
        for (t = e.match(we) || []; (n = this[u++]); )
          if (
            ((i = W(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")))
          ) {
            for (s = 0; (o = t[s++]); )
              r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            (a = oe.trim(r)), i !== a && n.setAttribute("class", a);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        s,
        a,
        u = 0;
      if (oe.isFunction(e))
        return this.each(function (t) {
          oe(this).removeClass(e.call(this, t, W(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof e && e)
        for (t = e.match(we) || []; (n = this[u++]); )
          if (
            ((i = W(n)),
            (r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")))
          ) {
            for (s = 0; (o = t[s++]); )
              for (; r.indexOf(" " + o + " ") > -1; )
                r = r.replace(" " + o + " ", " ");
            (a = oe.trim(r)), i !== a && n.setAttribute("class", a);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : oe.isFunction(e)
        ? this.each(function (n) {
            oe(this).toggleClass(e.call(this, n, W(this), t), t);
          })
        : this.each(function () {
            var t, r, i, o;
            if ("string" === n)
              for (r = 0, i = oe(this), o = e.match(we) || []; (t = o[r++]); )
                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            else
              (void 0 !== e && "boolean" !== n) ||
                ((t = W(this)),
                t && Ee.set(this, "__className__", t),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    t || e === !1 ? "" : Ee.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      for (t = " " + e + " "; (n = this[r++]); )
        if (
          1 === n.nodeType &&
          (" " + W(n) + " ").replace(pt, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
  });
  var dt = /\r/g,
    ht = /[\x20\t\r\n\f]+/g;
  oe.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = oe.isFunction(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              ((i = r ? e.call(this, n, oe(this).val()) : e),
              null == i
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : oe.isArray(i) &&
                  (i = oe.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              (t =
                oe.valHooks[this.type] ||
                oe.valHooks[this.nodeName.toLowerCase()]),
              (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? ((t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()]),
          t && "get" in t && void 0 !== (n = t.get(i, "value"))
            ? n
            : ((n = i.value),
              "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n))
        : void 0;
    },
  }),
    oe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = oe.find.attr(e, "value");
            return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ");
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                o = "select-one" === e.type || 0 > i,
                s = o ? null : [],
                a = o ? i + 1 : r.length,
                u = 0 > i ? a : o ? i : 0;
              a > u;
              u++
            )
              if (
                ((n = r[u]),
                (n.selected || u === i) &&
                  (re.optDisabled
                    ? !n.disabled
                    : null === n.getAttribute("disabled")) &&
                  (!n.parentNode.disabled ||
                    !oe.nodeName(n.parentNode, "optgroup")))
              ) {
                if (((t = oe(n).val()), o)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = oe.makeArray(t), s = i.length;
              s--;

            )
              (r = i[s]),
                (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) &&
                  (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    oe.each(["radio", "checkbox"], function () {
      (oe.valHooks[this] = {
        set: function (e, t) {
          return oe.isArray(t)
            ? (e.checked = oe.inArray(oe(e).val(), t) > -1)
            : void 0;
        },
      }),
        re.checkOn ||
          (oe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var gt = /^(?:focusinfocus|focusoutblur)$/;
  oe.extend(oe.event, {
    trigger: function (t, n, r, i) {
      var o,
        s,
        a,
        u,
        l,
        c,
        f,
        p = [r || G],
        d = ne.call(t, "type") ? t.type : t,
        h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = a = r = r || G),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !gt.test(d + oe.event.triggered) &&
          (d.indexOf(".") > -1 &&
            ((h = d.split(".")), (d = h.shift()), h.sort()),
          (l = d.indexOf(":") < 0 && "on" + d),
          (t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : oe.makeArray(n, [t])),
          (f = oe.event.special[d] || {}),
          i || !f.trigger || f.trigger.apply(r, n) !== !1))
      ) {
        if (!i && !f.noBubble && !oe.isWindow(r)) {
          for (
            u = f.delegateType || d, gt.test(u + d) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            p.push(s), (a = s);
          a === (r.ownerDocument || G) &&
            p.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
          (t.type = o > 1 ? u : f.bindType || d),
            (c = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle")),
            c && c.apply(s, n),
            (c = l && s[l]),
            c &&
              c.apply &&
              ke(s) &&
              ((t.result = c.apply(s, n)),
              t.result === !1 && t.preventDefault());
        return (
          (t.type = d),
          i ||
            t.isDefaultPrevented() ||
            (f._default && f._default.apply(p.pop(), n) !== !1) ||
            !ke(r) ||
            (l &&
              oe.isFunction(r[d]) &&
              !oe.isWindow(r) &&
              ((a = r[l]),
              a && (r[l] = null),
              (oe.event.triggered = d),
              r[d](),
              (oe.event.triggered = void 0),
              a && (r[l] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = oe.extend(new oe.Event(), n, { type: e, isSimulated: !0 });
      oe.event.trigger(r, null, t);
    },
  }),
    oe.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          oe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? oe.event.trigger(e, t, n, !0) : void 0;
      },
    }),
    oe.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        oe.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    oe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    (re.focusin = "onfocusin" in e),
    re.focusin ||
      oe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          oe.event.simulate(t, e.target, oe.event.fix(e));
        };
        oe.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = Ee.access(r, t);
            i || r.addEventListener(e, n, !0), Ee.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = Ee.access(r, t) - 1;
            i
              ? Ee.access(r, t, i)
              : (r.removeEventListener(e, n, !0), Ee.remove(r, t));
          },
        };
      });
  var vt = e.location,
    mt = oe.now(),
    yt = /\?/;
  (oe.parseJSON = function (e) {
    return JSON.parse(e + "");
  }),
    (oe.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = void 0;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          oe.error("Invalid XML: " + t),
        n
      );
    });
  var xt = /#.*$/,
    bt = /([?&])_=[^&]*/,
    wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ct = /^(?:GET|HEAD)$/,
    kt = /^\/\//,
    Et = {},
    Nt = {},
    St = "*/".concat("*"),
    jt = G.createElement("a");
  (jt.href = vt.href),
    oe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vt.href,
        type: "GET",
        isLocal: Tt.test(vt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": St,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": oe.parseJSON,
          "text xml": oe.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? _(_(e, oe.ajaxSettings), t) : _(oe.ajaxSettings, e);
      },
      ajaxPrefilter: $(Et),
      ajaxTransport: $(Nt),
      ajax: function (t, n) {
        function r(t, n, r, a) {
          var l,
            f,
            y,
            x,
            w,
            C = n;
          2 !== b &&
            ((b = 2),
            u && e.clearTimeout(u),
            (i = void 0),
            (s = a || ""),
            (T.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && 300 > t) || 304 === t),
            r && (x = X(p, T, r)),
            (x = z(p, x, T, l)),
            l
              ? (p.ifModified &&
                  ((w = T.getResponseHeader("Last-Modified")),
                  w && (oe.lastModified[o] = w),
                  (w = T.getResponseHeader("etag")),
                  w && (oe.etag[o] = w)),
                204 === t || "HEAD" === p.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = x.state), (f = x.data), (y = x.error), (l = !y)))
              : ((y = C), (!t && C) || ((C = "error"), 0 > t && (t = 0))),
            (T.status = t),
            (T.statusText = (n || C) + ""),
            l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]),
            T.statusCode(m),
            (m = void 0),
            c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : y]),
            v.fireWith(d, [T, C]),
            c &&
              (h.trigger("ajaxComplete", [T, p]),
              --oe.active || oe.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          s,
          a,
          u,
          l,
          c,
          f,
          p = oe.ajaxSetup({}, n),
          d = p.context || p,
          h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
          g = oe.Deferred(),
          v = oe.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          x = {},
          b = 0,
          w = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === b) {
                if (!a)
                  for (a = {}; (t = wt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? s : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return b || ((e = x[n] = x[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return b || (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > b) for (t in e) m[t] = [m[t], e[t]];
                else T.always(e[T.status]);
              return this;
            },
            abort: function (e) {
              var t = e || w;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          ((g.promise(T).complete = v.add),
          (T.success = T.done),
          (T.error = T.fail),
          (p.url = ((t || p.url || vt.href) + "")
            .replace(xt, "")
            .replace(kt, vt.protocol + "//")),
          (p.type = n.method || n.type || p.method || p.type),
          (p.dataTypes = oe
            .trim(p.dataType || "*")
            .toLowerCase()
            .match(we) || [""]),
          null == p.crossDomain)
        ) {
          l = G.createElement("a");
          try {
            (l.href = p.url),
              (l.href = l.href),
              (p.crossDomain =
                jt.protocol + "//" + jt.host != l.protocol + "//" + l.host);
          } catch (e) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = oe.param(p.data, p.traditional)),
          B(Et, p, n, T),
          2 === b)
        )
          return T;
        (c = oe.event && p.global),
          c && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !Ct.test(p.type)),
          (o = p.url),
          p.hasContent ||
            (p.data &&
              ((o = p.url += (yt.test(o) ? "&" : "?") + p.data), delete p.data),
            p.cache === !1 &&
              (p.url = bt.test(o)
                ? o.replace(bt, "$1_=" + mt++)
                : o + (yt.test(o) ? "&" : "?") + "_=" + mt++)),
          p.ifModified &&
            (oe.lastModified[o] &&
              T.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])),
          ((p.data && p.hasContent && p.contentType !== !1) || n.contentType) &&
            T.setRequestHeader("Content-Type", p.contentType),
          T.setRequestHeader(
            "Accept",
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] +
                  ("*" !== p.dataTypes[0] ? ", " + St + "; q=0.01" : "")
              : p.accepts["*"]
          );
        for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
        if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b))
          return T.abort();
        w = "abort";
        for (f in { success: 1, error: 1, complete: 1 }) T[f](p[f]);
        if ((i = B(Nt, p, n, T))) {
          if (((T.readyState = 1), c && h.trigger("ajaxSend", [T, p]), 2 === b))
            return T;
          p.async &&
            p.timeout > 0 &&
            (u = e.setTimeout(function () {
              T.abort("timeout");
            }, p.timeout));
          try {
            (b = 1), i.send(y, r);
          } catch (e) {
            if (!(2 > b)) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return T;
      },
      getJSON: function (e, t, n) {
        return oe.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return oe.get(e, void 0, t, "script");
      },
    }),
    oe.each(["get", "post"], function (e, t) {
      oe[t] = function (e, n, r, i) {
        return (
          oe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          oe.ajax(
            oe.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              oe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (oe._evalUrl = function (e) {
      return oe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    oe.fn.extend({
      wrapAll: function (e) {
        var t;
        return oe.isFunction(e)
          ? this.each(function (t) {
              oe(this).wrapAll(e.call(this, t));
            })
          : (this[0] &&
              ((t = oe(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this);
      },
      wrapInner: function (e) {
        return oe.isFunction(e)
          ? this.each(function (t) {
              oe(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = oe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = oe.isFunction(e);
        return this.each(function (n) {
          oe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (oe.expr.filters.hidden = function (e) {
      return !oe.expr.filters.visible(e);
    }),
    (oe.expr.filters.visible = function (e) {
      return (
        e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
      );
    });
  var Dt = /%20/g,
    At = /\[\]$/,
    qt = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    Ht = /^(?:input|select|textarea|keygen)/i;
  (oe.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = oe.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
      oe.isArray(e) || (e.jquery && !oe.isPlainObject(e)))
    )
      oe.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) U(n, e[n], t, i);
    return r.join("&").replace(Dt, "+");
  }),
    oe.fn.extend({
      serialize: function () {
        return oe.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = oe.prop(this, "elements");
          return e ? oe.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !oe(this).is(":disabled") &&
              Ht.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !He.test(e))
            );
          })
          .map(function (e, t) {
            var n = oe(this).val();
            return null == n
              ? null
              : oe.isArray(n)
              ? oe.map(n, function (e) {
                  return { name: t.name, value: e.replace(qt, "\r\n") };
                })
              : { name: t.name, value: n.replace(qt, "\r\n") };
          })
          .get();
      },
    }),
    (oe.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Ot = { 0: 200, 1223: 204 },
    Ft = oe.ajaxSettings.xhr();
  (re.cors = !!Ft && "withCredentials" in Ft),
    (re.ajax = Ft = !!Ft),
    oe.ajaxTransport(function (t) {
      var n, r;
      return re.cors || (Ft && !t.crossDomain)
        ? {
            send: function (i, o) {
              var s,
                a = t.xhr();
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              for (s in i) a.setRequestHeader(s, i[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      r =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.onreadystatechange =
                        null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          Ot[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (r = a.onerror = n("error")),
                void 0 !== a.onabort
                  ? (a.onabort = r)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && r();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          }
        : void 0;
    }),
    oe.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return oe.globalEval(e), e;
        },
      },
    }),
    oe.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    oe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (r, i) {
            (t = oe("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && i("error" === e.type ? 404 : 200, e.type);
                })
              )),
              G.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Pt = [],
    Rt = /(=)\?(?=&|$)|\?\?/;
  oe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Pt.pop() || oe.expando + "_" + mt++;
      return (this[e] = !0), e;
    },
  }),
    oe.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        s,
        a =
          t.jsonp !== !1 &&
          (Rt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Rt.test(t.data) &&
              "data");
      return a || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            oe.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Rt, "$1" + i))
            : t.jsonp !== !1 &&
              (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return s || oe.error(i + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            s = arguments;
          }),
          r.always(function () {
            void 0 === o ? oe(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Pt.push(i)),
              s && oe.isFunction(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (oe.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || G);
      var r = he.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = p([e], t, i)),
          i && i.length && oe(i).remove(),
          oe.merge([], r.childNodes));
    });
  var Mt = oe.fn.load;
  (oe.fn.load = function (e, t, n) {
    if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
    var r,
      i,
      o,
      s = this,
      a = e.indexOf(" ");
    return (
      a > -1 && ((r = oe.trim(e.slice(a))), (e = e.slice(0, a))),
      oe.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (i = "POST"),
      s.length > 0 &&
        oe
          .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
          .done(function (e) {
            (o = arguments),
              s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e);
          })
          .always(
            n &&
              function (e, t) {
                s.each(function () {
                  n.apply(this, o || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    oe.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        oe.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (oe.expr.filters.animated = function (e) {
      return oe.grep(oe.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (oe.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          s,
          a,
          u,
          l,
          c = oe.css(e, "position"),
          f = oe(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (a = f.offset()),
          (o = oe.css(e, "top")),
          (u = oe.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) &&
            (o + u).indexOf("auto") > -1),
          l
            ? ((r = f.position()), (s = r.top), (i = r.left))
            : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))),
          null != t.top && (p.top = t.top - a.top + s),
          null != t.left && (p.left = t.left - a.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    oe.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                oe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0],
          i = { top: 0, left: 0 },
          o = r && r.ownerDocument;
        return o
          ? ((t = o.documentElement),
            oe.contains(t, r)
              ? ((i = r.getBoundingClientRect()),
                (n = V(o)),
                {
                  top: i.top + n.pageYOffset - t.clientTop,
                  left: i.left + n.pageXOffset - t.clientLeft,
                })
              : i)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };
          return (
            "fixed" === oe.css(n, "position")
              ? (t = n.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                oe.nodeName(e[0], "html") || (r = e.offset()),
                (r.top += oe.css(e[0], "borderTopWidth", !0)),
                (r.left += oe.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - r.top - oe.css(n, "marginTop", !0),
              left: t.left - r.left - oe.css(n, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === oe.css(e, "position");

          )
            e = e.offsetParent;
          return e || Ke;
        });
      },
    }),
    oe.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function (r) {
          return Ce(
            this,
            function (e, r, i) {
              var o = V(e);
              return void 0 === i
                ? o
                  ? o[t]
                  : e[r]
                : void (o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    oe.each(["top", "left"], function (e, t) {
      oe.cssHooks[t] = S(re.pixelPosition, function (e, n) {
        return n
          ? ((n = N(e, t)), Ge.test(n) ? oe(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    oe.each({ Height: "height", Width: "width" }, function (e, t) {
      oe.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          oe.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
              s = n || (r === !0 || i === !0 ? "margin" : "border");
            return Ce(
              this,
              function (t, n, r) {
                var i;
                return oe.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? oe.css(t, n, s)
                  : oe.style(t, n, r, s);
              },
              t,
              o ? r : void 0,
              o,
              null
            );
          };
        }
      );
    }),
    oe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      size: function () {
        return this.length;
      },
    }),
    (oe.fn.andSelf = oe.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return oe;
      });
  var It = e.jQuery,
    Wt = e.$;
  return (
    (oe.noConflict = function (t) {
      return (
        e.$ === oe && (e.$ = Wt), t && e.jQuery === oe && (e.jQuery = It), oe
      );
    }),
    t || (e.jQuery = e.$ = oe),
    oe
  );
});
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  "use strict";
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    e[0] > 3
  )
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
    );
})(jQuery),
  +(function (t) {
    "use strict";
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        o = this;
      t(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      var n = function () {
        i || t(o).trigger(t.support.transition.end);
      };
      return setTimeout(n, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                if (t(e.target).is(this))
                  return e.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.alert");
        n || i.data("bs.alert", (n = new o(this))),
          "string" == typeof e && n[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      o = function (e) {
        t(e).on("click", i, this.close);
      };
    (o.VERSION = "3.3.7"),
      (o.TRANSITION_DURATION = 150),
      (o.prototype.close = function (e) {
        function i() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var n = t(this),
          s = n.attr("data-target");
        s || ((s = n.attr("href")), (s = s && s.replace(/.*(?=#[^\s]*$)/, "")));
        var a = t("#" === s ? [] : s);
        e && e.preventDefault(),
          a.length || (a = n.closest(".alert")),
          a.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (a.removeClass("in"),
            t.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : i());
      });
    var n = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = o),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = n), this;
      }),
      t(document).on("click.bs.alert.data-api", i, o.prototype.close);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.button"),
          s = "object" == typeof e && e;
        n || o.data("bs.button", (n = new i(this, s))),
          "toggle" == e ? n.toggle() : e && n.setState(e);
      });
    }
    var i = function (e, o) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, o)),
        (this.isLoading = !1);
    };
    (i.VERSION = "3.3.7"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (e) {
        var i = "disabled",
          o = this.$element,
          n = o.is("input") ? "val" : "html",
          s = o.data();
        (e += "Text"),
          null == s.resetText && o.data("resetText", o[n]()),
          setTimeout(
            t.proxy(function () {
              o[n](null == s[e] ? this.options[e] : s[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0),
                    o.addClass(i).attr(i, i).prop(i, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    o.removeClass(i).removeAttr(i).prop(i, !1));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type")
            ? (i.prop("checked") && (t = !1),
              e.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == i.prop("type") &&
              (i.prop("checked") !== this.$element.hasClass("active") &&
                (t = !1),
              this.$element.toggleClass("active")),
            i.prop("checked", this.$element.hasClass("active")),
            t && i.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var o = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = o), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (i) {
            var o = t(i.target).closest(".btn");
            e.call(o, "toggle"),
              t(i.target).is('input[type="radio"], input[type="checkbox"]') ||
                (i.preventDefault(),
                o.is("input,button")
                  ? o.trigger("focus")
                  : o
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.carousel"),
          s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
          a = "string" == typeof e ? e : s.slide;
        n || o.data("bs.carousel", (n = new i(this, s))),
          "number" == typeof e
            ? n.to(e)
            : a
            ? n[a]()
            : s.interval && n.pause().cycle();
      });
    }
    var i = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e),
          o =
            ("prev" == t && 0 === i) ||
            ("next" == t && i == this.$items.length - 1);
        if (o && !this.options.wrap) return e;
        var n = "prev" == t ? -1 : 1,
          s = (i + n) % this.$items.length;
        return this.$items.eq(s);
      }),
      (i.prototype.to = function (t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(t > this.$items.length - 1 || t < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                e.to(t);
              })
            : i == t
            ? this.pause().cycle()
            : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (i.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"),
          s = o || this.getItemForDirection(e, n),
          a = this.interval,
          r = "next" == e ? "left" : "right",
          l = this;
        if (s.hasClass("active")) return (this.sliding = !1);
        var h = s[0],
          d = t.Event("slide.bs.carousel", { relatedTarget: h, direction: r });
        if ((this.$element.trigger(d), !d.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var p = t(this.$indicators.children()[this.getItemIndex(s)]);
            p && p.addClass("active");
          }
          var c = t.Event("slid.bs.carousel", {
            relatedTarget: h,
            direction: r,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (s.addClass(e),
                s[0].offsetWidth,
                n.addClass(r),
                s.addClass(r),
                n
                  .one("bsTransitionEnd", function () {
                    s.removeClass([e, r].join(" ")).addClass("active"),
                      n.removeClass(["active", r].join(" ")),
                      (l.sliding = !1),
                      setTimeout(function () {
                        l.$element.trigger(c);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (n.removeClass("active"),
                s.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(c)),
            a && this.cycle(),
            this
          );
        }
      });
    var o = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = o), this;
      });
    var n = function (i) {
      var o,
        n = t(this),
        s = t(
          n.attr("data-target") ||
            ((o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (s.hasClass("carousel")) {
        var a = t.extend({}, s.data(), n.data()),
          r = n.attr("data-slide-to");
        r && (a.interval = !1),
          e.call(s, a),
          r && s.data("bs.carousel").to(r),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", n)
      .on("click.bs.carousel.data-api", "[data-slide-to]", n),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i,
        o =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(o);
    }
    function i(e) {
      return this.each(function () {
        var i = t(this),
          n = i.data("bs.collapse"),
          s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
        !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1),
          n || i.data("bs.collapse", (n = new o(this, s))),
          "string" == typeof e && n[e]();
      });
    }
    var o = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, o.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' +
            e.id +
            '"],[data-toggle="collapse"][data-target="#' +
            e.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (o.VERSION = "3.3.7"),
      (o.TRANSITION_DURATION = 350),
      (o.DEFAULTS = { toggle: !0 }),
      (o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            n =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              n &&
              n.length &&
              ((e = n.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var s = t.Event("show.bs.collapse");
            if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
              n &&
                n.length &&
                (i.call(n, "hide"), e || n.data("bs.collapse", null));
              var a = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var r = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) return r.call(this);
              var l = t.camelCase(["scroll", a].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(r, this))
                .emulateTransitionEnd(o.TRANSITION_DURATION)
                [a](this.$element[0][l]);
            }
          }
        }
      }),
      (o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var n = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(n, this))
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : n.call(this);
          }
        }
      }),
      (o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (o.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (i, o) {
              var n = t(o);
              this.addAriaAndCollapsedClass(e(n), n);
            }, this)
          )
          .end();
      }),
      (o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var n = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = o),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = n), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (o) {
          var n = t(this);
          n.attr("data-target") || o.preventDefault();
          var s = e(n),
            a = s.data("bs.collapse"),
            r = a ? "toggle" : n.data();
          i.call(s, r);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var o = i && t(i);
      return o && o.length ? o : e.parent();
    }
    function i(i) {
      (i && 3 === i.which) ||
        (t(n).remove(),
        t(s).each(function () {
          var o = t(this),
            n = e(o),
            s = { relatedTarget: this };
          n.hasClass("open") &&
            ((i &&
              "click" == i.type &&
              /input|textarea/i.test(i.target.tagName) &&
              t.contains(n[0], i.target)) ||
              (n.trigger((i = t.Event("hide.bs.dropdown", s))),
              i.isDefaultPrevented() ||
                (o.attr("aria-expanded", "false"),
                n
                  .removeClass("open")
                  .trigger(t.Event("hidden.bs.dropdown", s)))));
        }));
    }
    function o(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.dropdown");
        o || i.data("bs.dropdown", (o = new a(this))),
          "string" == typeof e && o[e].call(i);
      });
    }
    var n = ".dropdown-backdrop",
      s = '[data-toggle="dropdown"]',
      a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (a.VERSION = "3.3.7"),
      (a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
          var s = e(n),
            a = s.hasClass("open");
          if ((i(), !a)) {
            "ontouchstart" in document.documentElement &&
              !s.closest(".navbar-nav").length &&
              t(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(t(this))
                .on("click", i);
            var r = { relatedTarget: this };
            if (
              (s.trigger((o = t.Event("show.bs.dropdown", r))),
              o.isDefaultPrevented())
            )
              return;
            n.trigger("focus").attr("aria-expanded", "true"),
              s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r));
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (i) {
        if (
          /(38|40|27|32)/.test(i.which) &&
          !/input|textarea/i.test(i.target.tagName)
        ) {
          var o = t(this);
          if (
            (i.preventDefault(),
            i.stopPropagation(),
            !o.is(".disabled, :disabled"))
          ) {
            var n = e(o),
              a = n.hasClass("open");
            if ((!a && 27 != i.which) || (a && 27 == i.which))
              return (
                27 == i.which && n.find(s).trigger("focus"), o.trigger("click")
              );
            var r = " li:not(.disabled):visible a",
              l = n.find(".dropdown-menu" + r);
            if (l.length) {
              var h = l.index(i.target);
              38 == i.which && h > 0 && h--,
                40 == i.which && h < l.length - 1 && h++,
                ~h || (h = 0),
                l.eq(h).trigger("focus");
            }
          }
        }
      });
    var r = t.fn.dropdown;
    (t.fn.dropdown = o),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = r), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", i)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", s, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", s, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          a.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e, o) {
      return this.each(function () {
        var n = t(this),
          s = n.data("bs.modal"),
          a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        s || n.data("bs.modal", (s = new i(this, a))),
          "string" == typeof e ? s[e](o) : a.show && s.show(o);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function (e) {
        var o = this,
          n = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(n),
          this.isShown ||
            n.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var n = t.support.transition && o.$element.hasClass("fade");
              o.$element.parent().length || o.$element.appendTo(o.$body),
                o.$element.show().scrollTop(0),
                o.adjustDialog(),
                n && o.$element[0].offsetWidth,
                o.$element.addClass("in"),
                o.enforceFocus();
              var s = t.Event("shown.bs.modal", { relatedTarget: e });
              n
                ? o.$dialog
                    .one("bsTransitionEnd", function () {
                      o.$element.trigger("focus").trigger(s);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : o.$element.trigger("focus").trigger(s);
            }));
      }),
      (i.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              document === t.target ||
                this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var o = this,
          n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var s = t.support.transition && n;
          if (
            ((this.$backdrop = t(document.createElement("div"))
              .addClass("modal-backdrop " + n)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target === t.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            s && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          )
            return;
          s
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var a = function () {
            o.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : a();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
          var e = document.documentElement.getBoundingClientRect();
          t = e.right - Math.abs(e.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < t),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var o = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = o), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var o = t(this),
            n = o.attr("href"),
            s = t(
              o.attr("data-target") || (n && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            a = s.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(n) && n }, s.data(), o.data());
          o.is("a") && i.preventDefault(),
            s.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                s.one("hidden.bs.modal", function () {
                  o.is(":visible") && o.trigger("focus");
                });
            }),
            e.call(s, a, this);
        }
      );
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.tooltip"),
          s = "object" == typeof e && e;
        (!n && /destroy|hide/.test(e)) ||
          (n || o.data("bs.tooltip", (n = new i(this, s))),
          "string" == typeof e && n[e]());
      });
    }
    var i = function (t, e) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        (this.inState = null),
        this.init("tooltip", t, e);
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (i.prototype.init = function (e, i, o) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(o)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
          var a = n[s];
          if ("click" == a)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
              l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(
              r + "." + this.type,
              this.options.selector,
              t.proxy(this.enter, this)
            ),
              this.$element.on(
                l + "." + this.type,
                this.options.selector,
                t.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (i.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, o) {
              i[t] != o && (e[t] = o);
            }),
          e
        );
      }),
      (i.prototype.enter = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
          i.tip().hasClass("in") || "in" == i.hoverState
            ? void (i.hoverState = "in")
            : (clearTimeout(i.timeout),
              (i.hoverState = "in"),
              i.options.delay && i.options.delay.show
                ? void (i.timeout = setTimeout(function () {
                    "in" == i.hoverState && i.show();
                  }, i.options.delay.show))
                : i.show())
        );
      }),
      (i.prototype.isInStateTrue = function () {
        for (var t in this.inState) if (this.inState[t]) return !0;
        return !1;
      }),
      (i.prototype.leave = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        if (
          (i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          e instanceof t.Event &&
            (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
          !i.isInStateTrue())
        )
          return (
            clearTimeout(i.timeout),
            (i.hoverState = "out"),
            i.options.delay && i.options.delay.hide
              ? void (i.timeout = setTimeout(function () {
                  "out" == i.hoverState && i.hide();
                }, i.options.delay.hide))
              : i.hide()
          );
      }),
      (i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var o = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !o) return;
          var n = this,
            s = this.tip(),
            a = this.getUID(this.type);
          this.setContent(),
            s.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && s.addClass("fade");
          var r =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, s[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            h = l.test(r);
          h && (r = r.replace(l, "") || "top"),
            s
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(r)
              .data("bs." + this.type, this),
            this.options.container
              ? s.appendTo(this.options.container)
              : s.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var d = this.getPosition(),
            p = s[0].offsetWidth,
            c = s[0].offsetHeight;
          if (h) {
            var f = r,
              u = this.getPosition(this.$viewport);
            (r =
              "bottom" == r && d.bottom + c > u.bottom
                ? "top"
                : "top" == r && d.top - c < u.top
                ? "bottom"
                : "right" == r && d.right + p > u.width
                ? "left"
                : "left" == r && d.left - p < u.left
                ? "right"
                : r),
              s.removeClass(f).addClass(r);
          }
          var g = this.getCalculatedOffset(r, d, p, c);
          this.applyPlacement(g, r);
          var m = function () {
            var t = n.hoverState;
            n.$element.trigger("shown.bs." + n.type),
              (n.hoverState = null),
              "out" == t && n.leave(n);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? s
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : m();
        }
      }),
      (i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(),
          n = o[0].offsetWidth,
          s = o[0].offsetHeight,
          a = parseInt(o.css("margin-top"), 10),
          r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0),
          isNaN(r) && (r = 0),
          (e.top += a),
          (e.left += r),
          t.offset.setOffset(
            o[0],
            t.extend(
              {
                using: function (t) {
                  o.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          o.addClass("in");
        var l = o[0].offsetWidth,
          h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? (e.left += d.left) : (e.top += d.top);
        var p = /top|bottom/.test(i),
          c = p ? 2 * d.left - n + l : 2 * d.top - s + h,
          f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p);
      }),
      (i.prototype.replaceArrow = function (t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (i.prototype.hide = function (e) {
        function o() {
          "in" != n.hoverState && s.detach(),
            n.$element &&
              n.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + n.type),
            e && e();
        }
        var n = this,
          s = t(this.$tip),
          a = t.Event("hide.bs." + this.type);
        if ((this.$element.trigger(a), !a.isDefaultPrevented()))
          return (
            s.removeClass("in"),
            t.support.transition && s.hasClass("fade")
              ? s
                  .one("bsTransitionEnd", o)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : o(),
            (this.hoverState = null),
            this
          );
      }),
      (i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
          o = "BODY" == i.tagName,
          n = i.getBoundingClientRect();
        null == n.width &&
          (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top,
          }));
        var s = window.SVGElement && i instanceof window.SVGElement,
          a = o ? { top: 0, left: 0 } : s ? null : e.offset(),
          r = {
            scroll: o
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          l = o
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, n, r, l, a);
      }),
      (i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
      }),
      (i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = { top: 0, left: 0 };
        if (!this.$viewport) return n;
        var s = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var r = e.top - s - a.scroll,
            l = e.top + s - a.scroll + o;
          r < a.top
            ? (n.top = a.top - r)
            : l > a.top + a.height && (n.top = a.top + a.height - l);
        } else {
          var h = e.left - s,
            d = e.left + s + i;
          h < a.left
            ? (n.left = a.left - h)
            : d > a.right && (n.left = a.left + a.width - d);
        }
        return n;
      }),
      (i.prototype.getTitle = function () {
        var t,
          e = this.$element,
          i = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
      }),
      (i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (i.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = t(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (i.prototype.enable = function () {
        this.enabled = !0;
      }),
      (i.prototype.disable = function () {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function (e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("bs." + this.type)),
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i))),
          e
            ? ((i.inState.click = !i.inState.click),
              i.isInStateTrue() ? i.enter(i) : i.leave(i))
            : i.tip().hasClass("in")
            ? i.leave(i)
            : i.enter(i);
      }),
      (i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
              t.$tip && t.$tip.detach(),
              (t.$tip = null),
              (t.$arrow = null),
              (t.$viewport = null),
              (t.$element = null);
          });
      });
    var o = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = i),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = o), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.popover"),
          s = "object" == typeof e && e;
        (!n && /destroy|hide/.test(e)) ||
          (n || o.data("bs.popover", (n = new i(this, s))),
          "string" == typeof e && n[e]());
      });
    }
    var i = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (i.VERSION = "3.3.7"),
      (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var o = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = i),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = o), this;
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(i, o) {
      (this.$body = t(document.body)),
        (this.$scrollElement = t(t(i).is(document.body) ? window : i)),
        (this.options = t.extend({}, e.DEFAULTS, o)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          t.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.scrollspy"),
          s = "object" == typeof i && i;
        n || o.data("bs.scrollspy", (n = new e(this, s))),
          "string" == typeof i && n[i]();
      });
    }
    (e.VERSION = "3.3.7"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = this,
          i = "offset",
          o = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          t.isWindow(this.$scrollElement[0]) ||
            ((i = "position"), (o = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var e = t(this),
                n = e.data("target") || e.attr("href"),
                s = /^#./.test(n) && t(n);
              return (
                (s && s.length && s.is(":visible") && [[s[i]().top + o, n]]) ||
                null
              );
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          o = this.options.offset + i - this.$scrollElement.height(),
          n = this.offsets,
          s = this.targets,
          a = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= o))
          return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0]) return (this.activeTarget = null), this.clear();
        for (t = n.length; t--; )
          a != s[t] &&
            e >= n[t] &&
            (void 0 === n[t + 1] || e < n[t + 1]) &&
            this.activate(s[t]);
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length &&
          (o = o.closest("li.dropdown").addClass("active")),
          o.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var o = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = o), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.tab");
        n || o.data("bs.tab", (n = new i(this))),
          "string" == typeof e && n[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "3.3.7"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          o = e.data("target");
        if (
          (o ||
            ((o = e.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var n = i.find(".active:last a"),
            s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            a = t.Event("show.bs.tab", { relatedTarget: n[0] });
          if (
            (n.trigger(s),
            e.trigger(a),
            !a.isDefaultPrevented() && !s.isDefaultPrevented())
          ) {
            var r = t(o);
            this.activate(e.closest("li"), i),
              this.activate(r, r.parent(), function () {
                n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, o, n) {
        function s() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            n && n();
        }
        var a = o.find("> .active"),
          r =
            n &&
            t.support.transition &&
            ((a.length && a.hasClass("fade")) || !!o.find("> .fade").length);
        a.length && r
          ? a
              .one("bsTransitionEnd", s)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : s(),
          a.removeClass("in");
      });
    var o = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = o), this;
      });
    var n = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', n)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', n);
  })(jQuery),
  +(function (t) {
    "use strict";
    function e(e) {
      return this.each(function () {
        var o = t(this),
          n = o.data("bs.affix"),
          s = "object" == typeof e && e;
        n || o.data("bs.affix", (n = new i(this, s))),
          "string" == typeof e && n[e]();
      });
    }
    var i = function (e, o) {
      (this.options = t.extend({}, i.DEFAULTS, o)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "3.3.7"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(),
          s = this.$element.offset(),
          a = this.$target.height();
        if (null != i && "top" == this.affixed) return n <= i && "top";
        if ("bottom" == this.affixed)
          return null != i
            ? !(n + this.unpin <= s.top) && "bottom"
            : !(n + a <= t - o) && "bottom";
        var r = null == this.affixed,
          l = r ? n : s.top,
          h = r ? a : e;
        return null != i && n <= i
          ? "top"
          : null != o && l + h >= t - o && "bottom";
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            o = this.options.offset,
            n = o.top,
            s = o.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
          "object" != typeof o && (s = n = o),
            "function" == typeof n && (n = o.top(this.$element)),
            "function" == typeof s && (s = o.bottom(this.$element));
          var r = this.getState(a, e, n, s);
          if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
              h = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(h), h.isDefaultPrevented())) return;
            (this.affixed = r),
              (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == r && this.$element.offset({ top: a - e - s });
        }
      });
    var o = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = o), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var i = t(this),
            o = i.data();
          (o.offset = o.offset || {}),
            null != o.offsetBottom && (o.offset.bottom = o.offsetBottom),
            null != o.offsetTop && (o.offset.top = o.offsetTop),
            e.call(i, o);
        });
      });
  })(jQuery);
!(function (e) {
  function r() {
    n = !1;
    for (var r = 0, a = i.length; r < a; r++) {
      var o = e(i[r]).filter(function () {
        return e(this).is(":appeared");
      });
      if ((o.trigger("appear", [o]), t)) {
        var f = t.not(o);
        f.trigger("disappear", [f]);
      }
      t = o;
    }
  }
  var t,
    i = [],
    a = !1,
    n = !1,
    o = { interval: 250, force_process: !1 },
    f = e(window);
  (e.expr[":"].appeared = function (r) {
    var t = e(r);
    if (!t.is(":visible")) return !1;
    var i = f.scrollLeft(),
      a = f.scrollTop(),
      n = t.offset(),
      o = n.left,
      p = n.top;
    return (
      p + t.height() >= a &&
      p - (t.data("appear-top-offset") || 0) <= a + f.height() &&
      o + t.width() >= i &&
      o - (t.data("appear-left-offset") || 0) <= i + f.width()
    );
  }),
    e.fn.extend({
      appear: function (t) {
        var f = e.extend({}, o, t || {}),
          p = this.selector || this;
        if (!a) {
          var s = function () {
            n || ((n = !0), setTimeout(r, f.interval));
          };
          e(window).scroll(s).resize(s), (a = !0);
        }
        return f.force_process && setTimeout(r, f.interval), i.push(p), e(p);
      },
    }),
    e.extend({
      force_appear: function () {
        return !!a && (r(), !0);
      },
    });
})(jQuery);
!(function (e) {
  e.fn.hoverIntent = function (t, n, o) {
    var r = { interval: 100, sensitivity: 7, timeout: 0 };
    r =
      "object" == typeof t
        ? e.extend(r, t)
        : e.isFunction(n)
        ? e.extend(r, { over: t, out: n, selector: o })
        : e.extend(r, { over: t, out: t, selector: n });
    var v,
      u,
      i,
      s,
      h = function (e) {
        (v = e.pageX), (u = e.pageY);
      },
      a = function (t, n) {
        return (
          (n.hoverIntent_t = clearTimeout(n.hoverIntent_t)),
          Math.abs(i - v) + Math.abs(s - u) < r.sensitivity
            ? (e(n).off("mousemove.hoverIntent", h),
              (n.hoverIntent_s = 1),
              r.over.apply(n, [t]))
            : ((i = v),
              (s = u),
              (n.hoverIntent_t = setTimeout(function () {
                a(t, n);
              }, r.interval)),
              void 0)
        );
      },
      I = function (e, t) {
        return (
          (t.hoverIntent_t = clearTimeout(t.hoverIntent_t)),
          (t.hoverIntent_s = 0),
          r.out.apply(t, [e])
        );
      },
      c = function (t) {
        var n = jQuery.extend({}, t),
          o = this;
        o.hoverIntent_t && (o.hoverIntent_t = clearTimeout(o.hoverIntent_t)),
          "mouseenter" == t.type
            ? ((i = n.pageX),
              (s = n.pageY),
              e(o).on("mousemove.hoverIntent", h),
              1 != o.hoverIntent_s &&
                (o.hoverIntent_t = setTimeout(function () {
                  a(n, o);
                }, r.interval)))
            : (e(o).off("mousemove.hoverIntent", h),
              1 == o.hoverIntent_s &&
                (o.hoverIntent_t = setTimeout(function () {
                  I(n, o);
                }, r.timeout)));
      };
    return this.on(
      { "mouseenter.hoverIntent": c, "mouseleave.hoverIntent": c },
      r.selector
    );
  };
})(jQuery);
!(function (e, s) {
  "use strict";
  var n = (function () {
    var n = {
        bcClass: "sf-breadcrumb",
        menuClass: "sf-js-enabled",
        anchorClass: "sf-with-ul",
        menuArrowClass: "sf-arrows",
      },
      o = (function () {
        var s = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
          navigator.userAgent
        );
        return s && e("html").css("cursor", "pointer").on("click", e.noop), s;
      })(),
      t = (function () {
        var e = document.documentElement.style;
        return (
          "behavior" in e &&
          "fill" in e &&
          /iemobile/i.test(navigator.userAgent)
        );
      })(),
      i = (function () {
        return !!s.PointerEvent;
      })(),
      r = function (e, s, o) {
        var t,
          i = n.menuClass;
        s.cssArrows && (i += " " + n.menuArrowClass),
          (t = o ? "addClass" : "removeClass"),
          e[t](i);
      },
      a = function (s, o) {
        return s
          .find("li." + o.pathClass)
          .slice(0, o.pathLevels)
          .addClass(o.hoverClass + " " + n.bcClass)
          .filter(function () {
            return e(this).children(o.popUpSelector).hide().show().length;
          })
          .removeClass(o.pathClass);
      },
      l = function (e, s) {
        var o = s ? "addClass" : "removeClass";
        e.children("a")[o](n.anchorClass);
      },
      h = function (e) {
        var s = e.css("ms-touch-action"),
          n = e.css("touch-action");
        (n = n || s),
          (n = "pan-y" === n ? "auto" : "pan-y"),
          e.css({ "ms-touch-action": n, "touch-action": n });
      },
      u = function (e) {
        return e.closest("." + n.menuClass);
      },
      p = function (e) {
        return u(e).data("sfOptions");
      },
      c = function () {
        var s = e(this),
          n = p(s);
        clearTimeout(n.sfTimer),
          s.siblings().superfish("hide").end().superfish("show");
      },
      f = function (s) {
        (s.retainPath = e.inArray(this[0], s.$path) > -1),
          this.superfish("hide"),
          this.parents("." + s.hoverClass).length ||
            (s.onIdle.call(u(this)), s.$path.length && e.proxy(c, s.$path)());
      },
      d = function () {
        var s = e(this),
          n = p(s);
        o
          ? e.proxy(f, s, n)()
          : (clearTimeout(n.sfTimer),
            (n.sfTimer = setTimeout(e.proxy(f, s, n), n.delay)));
      },
      v = function (s) {
        var n = e(this),
          o = p(n),
          t = n.siblings(s.data.popUpSelector);
        return o.onHandleTouch.call(t) === !1
          ? this
          : void (
              t.length > 0 &&
              t.is(":hidden") &&
              (n.one("click.superfish", !1),
              "MSPointerDown" === s.type || "pointerdown" === s.type
                ? n.trigger("focus")
                : e.proxy(c, n.parent("li"))())
            );
      },
      m = function (s, n) {
        var r = "li:has(" + n.popUpSelector + ")";
        e.fn.hoverIntent && !n.disableHI
          ? s.hoverIntent(c, d, r)
          : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, d);
        var a = "MSPointerDown.superfish";
        i && (a = "pointerdown.superfish"),
          o || (a += " touchend.superfish"),
          t && (a += " mousedown.superfish"),
          s
            .on("focusin.superfish", "li", c)
            .on("focusout.superfish", "li", d)
            .on(a, "a", n, v);
      };
    return {
      hide: function (s) {
        if (this.length) {
          var n = this,
            o = p(n);
          if (!o) return this;
          var t = o.retainPath === !0 ? o.$path : "",
            i = n
              .find("li." + o.hoverClass)
              .add(this)
              .not(t)
              .removeClass(o.hoverClass)
              .children(o.popUpSelector),
            r = o.speedOut;
          if (
            (s && (i.show(), (r = 0)),
            (o.retainPath = !1),
            o.onBeforeHide.call(i) === !1)
          )
            return this;
          i.stop(!0, !0).animate(o.animationOut, r, function () {
            var s = e(this);
            o.onHide.call(s);
          });
        }
        return this;
      },
      show: function () {
        var e = p(this);
        if (!e) return this;
        var s = this.addClass(e.hoverClass),
          n = s.children(e.popUpSelector);
        return e.onBeforeShow.call(n) === !1
          ? this
          : (n.stop(!0, !0).animate(e.animation, e.speed, function () {
              e.onShow.call(n);
            }),
            this);
      },
      destroy: function () {
        return this.each(function () {
          var s,
            o = e(this),
            t = o.data("sfOptions");
          return (
            !!t &&
            ((s = o.find(t.popUpSelector).parent("li")),
            clearTimeout(t.sfTimer),
            r(o, t),
            l(s),
            h(o),
            o.off(".superfish").off(".hoverIntent"),
            s.children(t.popUpSelector).attr("style", function (e, s) {
              return s.replace(/display[^;]+;?/g, "");
            }),
            t.$path
              .removeClass(t.hoverClass + " " + n.bcClass)
              .addClass(t.pathClass),
            o.find("." + t.hoverClass).removeClass(t.hoverClass),
            t.onDestroy.call(o),
            void o.removeData("sfOptions"))
          );
        });
      },
      init: function (s) {
        return this.each(function () {
          var o = e(this);
          if (o.data("sfOptions")) return !1;
          var t = e.extend({}, e.fn.superfish.defaults, s),
            i = o.find(t.popUpSelector).parent("li");
          (t.$path = a(o, t)),
            o.data("sfOptions", t),
            r(o, t, !0),
            l(i, !0),
            h(o),
            m(o, t),
            i.not("." + n.bcClass).superfish("hide", !0),
            t.onInit.call(this);
        });
      },
    };
  })();
  (e.fn.superfish = function (s, o) {
    return n[s]
      ? n[s].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof s && s
      ? e.error("Method " + s + " does not exist on jQuery.fn.superfish")
      : n.init.apply(this, arguments);
  }),
    (e.fn.superfish.defaults = {
      popUpSelector: "ul,.sf-mega",
      hoverClass: "sfHover",
      pathClass: "overrideThisToUse",
      pathLevels: 1,
      delay: 800,
      animation: { opacity: "show" },
      animationOut: { opacity: "hide" },
      speed: "normal",
      speedOut: "fast",
      cssArrows: !0,
      disableHI: !1,
      onInit: e.noop,
      onBeforeShow: e.noop,
      onShow: e.noop,
      onBeforeHide: e.noop,
      onHide: e.noop,
      onIdle: e.noop,
      onDestroy: e.noop,
      onHandleTouch: e.noop,
    });
})(jQuery, window);
(jQuery.easing.jswing = jQuery.easing.swing),
  jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (n, e, t, u, a) {
      return jQuery.easing[jQuery.easing.def](n, e, t, u, a);
    },
    easeInQuad: function (n, e, t, u, a) {
      return u * (e /= a) * e + t;
    },
    easeOutQuad: function (n, e, t, u, a) {
      return -u * (e /= a) * (e - 2) + t;
    },
    easeInOutQuad: function (n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (u / 2) * e * e + t
        : (-u / 2) * (--e * (e - 2) - 1) + t;
    },
    easeInCubic: function (n, e, t, u, a) {
      return u * (e /= a) * e * e + t;
    },
    easeOutCubic: function (n, e, t, u, a) {
      return u * ((e = e / a - 1) * e * e + 1) + t;
    },
    easeInOutCubic: function (n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (u / 2) * e * e * e + t
        : (u / 2) * ((e -= 2) * e * e + 2) + t;
    },
    easeInQuart: function (n, e, t, u, a) {
      return u * (e /= a) * e * e * e + t;
    },
    easeOutQuart: function (n, e, t, u, a) {
      return -u * ((e = e / a - 1) * e * e * e - 1) + t;
    },
    easeInOutQuart: function (n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (u / 2) * e * e * e * e + t
        : (-u / 2) * ((e -= 2) * e * e * e - 2) + t;
    },
    easeInQuint: function (n, e, t, u, a) {
      return u * (e /= a) * e * e * e * e + t;
    },
    easeOutQuint: function (n, e, t, u, a) {
      return u * ((e = e / a - 1) * e * e * e * e + 1) + t;
    },
    easeInOutQuint: function (n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (u / 2) * e * e * e * e * e + t
        : (u / 2) * ((e -= 2) * e * e * e * e + 2) + t;
    },
    easeInSine: function (n, e, t, u, a) {
      return -u * Math.cos((e / a) * (Math.PI / 2)) + u + t;
    },
    easeOutSine: function (n, e, t, u, a) {
      return u * Math.sin((e / a) * (Math.PI / 2)) + t;
    },
    easeInOutSine: function (n, e, t, u, a) {
      return (-u / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
    },
    easeInExpo: function (n, e, t, u, a) {
      return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t;
    },
    easeOutExpo: function (n, e, t, u, a) {
      return e == a ? t + u : u * (-Math.pow(2, (-10 * e) / a) + 1) + t;
    },
    easeInOutExpo: function (n, e, t, u, a) {
      return 0 == e
        ? t
        : e == a
        ? t + u
        : (e /= a / 2) < 1
        ? (u / 2) * Math.pow(2, 10 * (e - 1)) + t
        : (u / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
    },
    easeInCirc: function (n, e, t, u, a) {
      return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
    },
    easeOutCirc: function (n, e, t, u, a) {
      return u * Math.sqrt(1 - (e = e / a - 1) * e) + t;
    },
    easeInOutCirc: function (n, e, t, u, a) {
      return (e /= a / 2) < 1
        ? (-u / 2) * (Math.sqrt(1 - e * e) - 1) + t
        : (u / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
    },
    easeInElastic: function (n, e, t, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      if (0 == e) return t;
      if (1 == (e /= a)) return t + u;
      if ((i || (i = 0.3 * a), s < Math.abs(u))) {
        s = u;
        var r = i / 4;
      } else var r = (i / (2 * Math.PI)) * Math.asin(u / s);
      return (
        -(
          s *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e * a - r) * (2 * Math.PI)) / i)
        ) + t
      );
    },
    easeOutElastic: function (n, e, t, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      if (0 == e) return t;
      if (1 == (e /= a)) return t + u;
      if ((i || (i = 0.3 * a), s < Math.abs(u))) {
        s = u;
        var r = i / 4;
      } else var r = (i / (2 * Math.PI)) * Math.asin(u / s);
      return (
        s * Math.pow(2, -10 * e) * Math.sin(((e * a - r) * (2 * Math.PI)) / i) +
        u +
        t
      );
    },
    easeInOutElastic: function (n, e, t, u, a) {
      var r = 1.70158,
        i = 0,
        s = u;
      if (0 == e) return t;
      if (2 == (e /= a / 2)) return t + u;
      if ((i || (i = a * (0.3 * 1.5)), s < Math.abs(u))) {
        s = u;
        var r = i / 4;
      } else var r = (i / (2 * Math.PI)) * Math.asin(u / s);
      return e < 1
        ? -0.5 *
            (s *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e * a - r) * (2 * Math.PI)) / i)) +
            t
        : s *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e * a - r) * (2 * Math.PI)) / i) *
            0.5 +
            u +
            t;
    },
    easeInBack: function (n, e, t, u, a, r) {
      return (
        void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
      );
    },
    easeOutBack: function (n, e, t, u, a, r) {
      return (
        void 0 == r && (r = 1.70158),
        u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
      );
    },
    easeInOutBack: function (n, e, t, u, a, r) {
      return (
        void 0 == r && (r = 1.70158),
        (e /= a / 2) < 1
          ? (u / 2) * (e * e * (((r *= 1.525) + 1) * e - r)) + t
          : (u / 2) * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
      );
    },
    easeInBounce: function (n, e, t, u, a) {
      return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t;
    },
    easeOutBounce: function (n, e, t, u, a) {
      return (e /= a) < 1 / 2.75
        ? u * (7.5625 * e * e) + t
        : e < 2 / 2.75
        ? u * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
        : e < 2.5 / 2.75
        ? u * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
        : u * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
    },
    easeInOutBounce: function (n, e, t, u, a) {
      return e < a / 2
        ? 0.5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t
        : 0.5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) +
            0.5 * u +
            t;
    },
  });
!(function (n) {
  n.fn.UItoTop = function (e) {
    var o = {
        text: "To Top",
        min: 200,
        inDelay: 600,
        outDelay: 400,
        containerID: "toTop",
        containerHoverID: "toTopHover",
        scrollSpeed: 1200,
        easingType: "linear",
      },
      t = n.extend(o, e),
      i = "#" + t.containerID,
      a = "#" + t.containerHoverID;
    n("body").append(
      '<a href="#" id="' + t.containerID + '">' + t.text + "</a>"
    ),
      n(i)
        .hide()
        .on("click.UItoTop", function () {
          return (
            n("html, body").animate(
              { scrollTop: 0 },
              t.scrollSpeed,
              t.easingType
            ),
            n("#" + t.containerHoverID, this)
              .stop()
              .animate({ opacity: 0 }, t.inDelay, t.easingType),
            !1
          );
        })
        .prepend('<span id="' + t.containerHoverID + '"></span>')
        .hover(
          function () {
            n(a, this).stop().animate({ opacity: 1 }, 600, "linear");
          },
          function () {
            n(a, this).stop().animate({ opacity: 0 }, 700, "linear");
          }
        ),
      n(window).scroll(function () {
        var e = n(window).scrollTop();
        "undefined" == typeof document.body.style.maxHeight &&
          n(i).css({ position: "absolute", top: e + n(window).height() - 50 }),
          e > t.min ? n(i).fadeIn(t.inDelay) : n(i).fadeOut(t.Outdelay);
      });
  };
})(jQuery);
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  function t(t, o, n) {
    var i = o.hash.slice(1),
      a = document.getElementById(i) || document.getElementsByName(i)[0];
    if (a) {
      t && t.preventDefault();
      var l = e(n.target);
      if (
        !(
          (n.lock && l.is(":animated")) ||
          (n.onBefore && n.onBefore(t, a, l) === !1)
        )
      ) {
        if ((n.stop && l._scrollable().stop(!0), n.hash)) {
          var r = a.id === i ? "id" : "name",
            s = e("<a> </a>")
              .attr(r, i)
              .css({
                position: "absolute",
                top: e(window).scrollTop(),
                left: e(window).scrollLeft(),
              });
          (a[r] = ""),
            e("body").prepend(s),
            (location.hash = o.hash),
            s.remove(),
            (a[r] = i);
        }
        l.scrollTo(a, n).trigger("notify.serialScroll", [a]);
      }
    }
  }
  var o = location.href.replace(/#.*/, ""),
    n = (e.localScroll = function (t) {
      e("body").localScroll(t);
    });
  return (
    (n.defaults = {
      duration: 1e3,
      axis: "y",
      event: "click",
      stop: !0,
      target: window,
    }),
    (e.fn.localScroll = function (i) {
      function a() {
        return (
          !!this.href &&
          !!this.hash &&
          this.href.replace(this.hash, "") == o &&
          (!i.filter || e(this).is(i.filter))
        );
      }
      return (
        (i = e.extend({}, n.defaults, i)),
        i.hash &&
          location.hash &&
          (i.target && window.scrollTo(0, 0), t(0, location, i)),
        i.lazy
          ? this.on(i.event, "a,area", function (e) {
              a.call(this) && t(e, this, i);
            })
          : this.find("a,area")
              .filter(a)
              .bind(i.event, function (e) {
                t(e, this, i);
              })
              .end()
              .end()
      );
    }),
    (n.hash = function () {}),
    n
  );
});
!(function (e) {
  function t(e) {
    return "object" == typeof e ? e : { top: e, left: e };
  }
  var n = (e.scrollTo = function (t, n, o) {
    e(window).scrollTo(t, n, o);
  });
  (n.defaults = {
    axis: "xy",
    duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
    limit: !0,
  }),
    (n.window = function (t) {
      return e(window)._scrollable();
    }),
    (e.fn._scrollable = function () {
      return this.map(function () {
        var t = this,
          n =
            !t.nodeName ||
            e.inArray(t.nodeName.toLowerCase(), [
              "iframe",
              "#document",
              "html",
              "body",
            ]) != -1;
        if (!n) return t;
        var o = (t.contentWindow || t).document || t.ownerDocument || t;
        return /webkit/i.test(navigator.userAgent) ||
          "BackCompat" == o.compatMode
          ? o.body
          : o.documentElement;
      });
    }),
    (e.fn.scrollTo = function (o, r, i) {
      return (
        "object" == typeof r && ((i = r), (r = 0)),
        "function" == typeof i && (i = { onAfter: i }),
        "max" == o && (o = 9e9),
        (i = e.extend({}, n.defaults, i)),
        (r = r || i.duration),
        (i.queue = i.queue && i.axis.length > 1),
        i.queue && (r /= 2),
        (i.offset = t(i.offset)),
        (i.over = t(i.over)),
        this._scrollable()
          .each(function () {
            function a(e) {
              u.animate(
                l,
                r,
                i.easing,
                e &&
                  function () {
                    e.call(this, f, i);
                  }
              );
            }
            if (null != o) {
              var s,
                c = this,
                u = e(c),
                f = o,
                l = {},
                d = u.is("html,body");
              switch (typeof f) {
                case "number":
                case "string":
                  if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                    f = t(f);
                    break;
                  }
                  if (((f = e(f, this)), !f.length)) return;
                case "object":
                  (f.is || f.style) && (s = (f = e(f)).offset());
              }
              e.each(i.axis.split(""), function (e, t) {
                var o = "x" == t ? "Left" : "Top",
                  r = o.toLowerCase(),
                  m = "scroll" + o,
                  h = c[m],
                  w = n.max(c, t);
                if (s)
                  (l[m] = s[r] + (d ? 0 : h - u.offset()[r])),
                    i.margin &&
                      ((l[m] -= parseInt(f.css("margin" + o)) || 0),
                      (l[m] -= parseInt(f.css("border" + o + "Width")) || 0)),
                    (l[m] += i.offset[r] || 0),
                    i.over[r] &&
                      (l[m] += f["x" == t ? "width" : "height"]() * i.over[r]);
                else {
                  var b = f[r];
                  l[m] =
                    b.slice && "%" == b.slice(-1)
                      ? (parseFloat(b) / 100) * w
                      : b;
                }
                i.limit &&
                  /^\d+$/.test(l[m]) &&
                  (l[m] = l[m] <= 0 ? 0 : Math.min(l[m], w)),
                  !e &&
                    i.queue &&
                    (h != l[m] && a(i.onAfterFirst), delete l[m]);
              }),
                a(i.onAfter);
            }
          })
          .end()
      );
    }),
    (n.max = function (t, n) {
      var o = "x" == n ? "Width" : "Height",
        r = "scroll" + o;
      if (!e(t).is("html,body")) return t[r] - e(t)[o.toLowerCase()]();
      var i = "client" + o,
        a = t.ownerDocument.documentElement,
        s = t.ownerDocument.body;
      return Math.max(a[r], s[r]) - Math.min(a[i], s[i]);
    });
})(jQuery);
!(function (n) {
  var t = n(window),
    o = t.height();
  t.resize(function () {
    o = t.height();
  }),
    (n.fn.parallax = function (i, e, r) {
      function u() {
        var r = t.scrollTop();
        c.each(function () {
          var t = n(this),
            u = t.offset().top,
            f = h(t);
          u + f < r ||
            u > r + o ||
            c.css(
              "backgroundPosition",
              i + " " + Math.round((l - r) * e) + "px"
            );
        });
      }
      var h,
        l,
        c = n(this);
      c.each(function () {
        l = c.offset().top;
      }),
        (h = r
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        (arguments.length < 1 || null === i) && (i = "50%"),
        (arguments.length < 2 || null === e) && (e = 0.1),
        (arguments.length < 3 || null === r) && (r = !0),
        t.bind("scroll", u).resize(u),
        u();
    });
})(jQuery);
!(function (e, t) {
  "object" == typeof exports
    ? (module.exports = t(require("jquery")))
    : "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t(e.jQuery);
})(this, function (e) {
  var t = function (e, t) {
      var n,
        a = document.createElement("canvas");
      e.appendChild(a),
        "undefined" != typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(a);
      var i = a.getContext("2d");
      a.width = a.height = t.size;
      var r = 1;
      window.devicePixelRatio > 1 &&
        ((r = window.devicePixelRatio),
        (a.style.width = a.style.height = [t.size, "px"].join("")),
        (a.width = a.height = t.size * r),
        i.scale(r, r)),
        i.translate(t.size / 2, t.size / 2),
        i.rotate((-0.5 + t.rotate / 180) * Math.PI);
      var o = (t.size - t.lineWidth) / 2;
      t.scaleColor && t.scaleLength && (o -= t.scaleLength + 2),
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          });
      var s = function (e, t, n) {
          n = Math.min(Math.max(-1, n || 0), 1);
          var a = 0 >= n;
          i.beginPath(),
            i.arc(0, 0, o, 0, 2 * Math.PI * n, a),
            (i.strokeStyle = e),
            (i.lineWidth = t),
            i.stroke();
        },
        d = function () {
          var e, n;
          (i.lineWidth = 1), (i.fillStyle = t.scaleColor), i.save();
          for (var a = 24; a > 0; --a)
            a % 6 === 0
              ? ((n = t.scaleLength), (e = 0))
              : ((n = 0.6 * t.scaleLength), (e = t.scaleLength - n)),
              i.fillRect(-t.size / 2 + e, 0, n, 1),
              i.rotate(Math.PI / 12);
          i.restore();
        },
        u = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (e) {
              window.setTimeout(e, 1e3 / 60);
            }
          );
        })(),
        h = function () {
          t.scaleColor && d(), t.trackColor && s(t.trackColor, t.lineWidth, 1);
        };
      (this.getCanvas = function () {
        return a;
      }),
        (this.getCtx = function () {
          return i;
        }),
        (this.clear = function () {
          i.clearRect(t.size / -2, t.size / -2, t.size, t.size);
        }),
        (this.draw = function (e) {
          t.scaleColor || t.trackColor
            ? i.getImageData && i.putImageData
              ? n
                ? i.putImageData(n, 0, 0)
                : (h(), (n = i.getImageData(0, 0, t.size * r, t.size * r)))
              : (this.clear(), h())
            : this.clear(),
            (i.lineCap = t.lineCap);
          var a;
          (a = "function" == typeof t.barColor ? t.barColor(e) : t.barColor),
            s(a, t.lineWidth, e / 100);
        }.bind(this)),
        (this.animate = function (e, n) {
          var a = Date.now();
          t.onStart(e, n);
          var i = function () {
            var r = Math.min(Date.now() - a, t.animate.duration),
              o = t.easing(this, r, e, n - e, t.animate.duration);
            this.draw(o),
              t.onStep(e, n, o),
              r >= t.animate.duration ? t.onStop(e, n) : u(i);
          }.bind(this);
          u(i);
        }.bind(this));
    },
    n = function (e, n) {
      var a = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        size: 110,
        rotate: 0,
        animate: { duration: 1e3, enabled: !0 },
        easing: function (e, t, n, a, i) {
          return (
            (t /= i / 2),
            1 > t ? (a / 2) * t * t + n : (-a / 2) * (--t * (t - 2) - 1) + n
          );
        },
        onStart: function () {},
        onStep: function () {},
        onStop: function () {},
      };
      if ("undefined" != typeof t) a.renderer = t;
      else {
        if ("undefined" == typeof SVGRenderer)
          throw new Error("Please load either the SVG- or the CanvasRenderer");
        a.renderer = SVGRenderer;
      }
      var i = {},
        r = 0,
        o = function () {
          (this.el = e), (this.options = i);
          for (var t in a)
            a.hasOwnProperty(t) &&
              ((i[t] = n && "undefined" != typeof n[t] ? n[t] : a[t]),
              "function" == typeof i[t] && (i[t] = i[t].bind(this)));
          (i.easing =
            "string" == typeof i.easing &&
            "undefined" != typeof jQuery &&
            jQuery.isFunction(jQuery.easing[i.easing])
              ? jQuery.easing[i.easing]
              : a.easing),
            "number" == typeof i.animate &&
              (i.animate = { duration: i.animate, enabled: !0 }),
            "boolean" != typeof i.animate ||
              i.animate ||
              (i.animate = { duration: 1e3, enabled: i.animate }),
            (this.renderer = new i.renderer(e, i)),
            this.renderer.draw(r),
            e.dataset && e.dataset.percent
              ? this.update(parseFloat(e.dataset.percent))
              : e.getAttribute &&
                e.getAttribute("data-percent") &&
                this.update(parseFloat(e.getAttribute("data-percent")));
        }.bind(this);
      (this.update = function (e) {
        return (
          (e = parseFloat(e)),
          i.animate.enabled
            ? this.renderer.animate(r, e)
            : this.renderer.draw(e),
          (r = e),
          this
        );
      }.bind(this)),
        (this.disableAnimation = function () {
          return (i.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function () {
          return (i.animate.enabled = !0), this;
        }),
        o();
    };
  e.fn.easyPieChart = function (t) {
    return this.each(function () {
      var a;
      e.data(this, "easyPieChart") ||
        ((a = e.extend({}, t, e(this).data())),
        e.data(this, "easyPieChart", new n(this, a)));
    });
  };
});
!(function (t) {
  "use strict";
  var e = function (n, s) {
    (this.$element = t(n)), (this.options = t.extend({}, e.defaults, s));
  };
  (e.defaults = {
    transition_delay: 300,
    refresh_speed: 50,
    display_text: "none",
    use_percentage: !0,
    percent_format: function (t) {
      return t + "%";
    },
    amount_format: function (t, e) {
      return t + " / " + e;
    },
    update: t.noop,
    done: t.noop,
    fail: t.noop,
  }),
    (e.prototype.transition = function () {
      var n = this.$element,
        s = n.parent(),
        a = this.$back_text,
        r = this.$front_text,
        i = this.options,
        o = parseInt(n.attr("data-transitiongoal")),
        h = parseInt(n.attr("aria-valuemin")) || 0,
        d = parseInt(n.attr("aria-valuemax")) || 100,
        f = s.hasClass("vertical"),
        p =
          i.update && "function" == typeof i.update
            ? i.update
            : e.defaults.update,
        u = i.done && "function" == typeof i.done ? i.done : e.defaults.done,
        c = i.fail && "function" == typeof i.fail ? i.fail : e.defaults.fail;
      if (isNaN(o)) return void c("data-transitiongoal not set");
      var l = Math.round((100 * (o - h)) / (d - h));
      if ("center" === i.display_text && !a && !r) {
        (this.$back_text = a =
          t("<span>").addClass("progressbar-back-text").prependTo(s)),
          (this.$front_text = r =
            t("<span>").addClass("progressbar-front-text").prependTo(n));
        var g;
        f
          ? ((g = s.css("height")),
            a.css({ height: g, "line-height": g }),
            r.css({ height: g, "line-height": g }),
            t(window).resize(function () {
              (g = s.css("height")),
                a.css({ height: g, "line-height": g }),
                r.css({ height: g, "line-height": g });
            }))
          : ((g = s.css("width")),
            r.css({ width: g }),
            t(window).resize(function () {
              (g = s.css("width")), r.css({ width: g });
            }));
      }
      setTimeout(function () {
        var t, e, c, g, _;
        f ? n.css("height", l + "%") : n.css("width", l + "%");
        var x = setInterval(function () {
          f
            ? ((c = n.height()), (g = s.height()))
            : ((c = n.width()), (g = s.width())),
            (t = Math.round((100 * c) / g)),
            (e = Math.round(h + (c / g) * (d - h))),
            t >= l && ((t = l), (e = o), u(n), clearInterval(x)),
            "none" !== i.display_text &&
              ((_ = i.use_percentage
                ? i.percent_format(t)
                : i.amount_format(e, d, h)),
              "fill" === i.display_text
                ? n.text(_)
                : "center" === i.display_text && (a.text(_), r.text(_))),
            n.attr("aria-valuenow", e),
            p(t, n);
        }, i.refresh_speed);
      }, i.transition_delay);
    });
  var n = t.fn.progressbar;
  (t.fn.progressbar = function (n) {
    return this.each(function () {
      var s = t(this),
        a = s.data("bs.progressbar"),
        r = "object" == typeof n && n;
      a && r && t.extend(a.options, r),
        a || s.data("bs.progressbar", (a = new e(this, r))),
        a.transition();
    });
  }),
    (t.fn.progressbar.Constructor = e),
    (t.fn.progressbar.noConflict = function () {
      return (t.fn.progressbar = n), this;
    });
})(window.jQuery);
!(function (t) {
  function e(t, e) {
    return t.toFixed(e.decimals);
  }
  (t.fn.countTo = function (e) {
    return (
      (e = e || {}),
      t(this).each(function () {
        function a() {
          (s += l),
            c++,
            n(s),
            "function" == typeof o.onUpdate && o.onUpdate.call(f, s),
            c >= r &&
              (i.removeData("countTo"),
              clearInterval(d.interval),
              (s = o.to),
              "function" == typeof o.onComplete && o.onComplete.call(f, s));
        }
        function n(t) {
          var e = o.formatter.call(f, t, o);
          i.text(e);
        }
        var o = t.extend(
            {},
            t.fn.countTo.defaults,
            {
              from: t(this).data("from"),
              to: t(this).data("to"),
              speed: t(this).data("speed"),
              refreshInterval: t(this).data("refresh-interval"),
              decimals: t(this).data("decimals"),
            },
            e
          ),
          r = Math.ceil(o.speed / o.refreshInterval),
          l = (o.to - o.from) / r,
          f = this,
          i = t(this),
          c = 0,
          s = o.from,
          d = i.data("countTo") || {};
        i.data("countTo", d),
          d.interval && clearInterval(d.interval),
          (d.interval = setInterval(a, o.refreshInterval)),
          n(s);
      })
    );
  }),
    (t.fn.countTo.defaults = {
      from: 0,
      to: 0,
      speed: 1e3,
      refreshInterval: 100,
      decimals: 0,
      formatter: e,
      onUpdate: null,
      onComplete: null,
    });
})(jQuery);
!(function (t) {
  function e() {
    var t = location.href;
    return (
      (hashtag =
        -1 !== t.indexOf("#prettyPhoto") &&
        decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length))),
      hashtag && (hashtag = hashtag.replace(/<|>/g, "")),
      hashtag
    );
  }
  function i() {
    "undefined" != typeof theRel &&
      (location.hash = theRel + "/" + rel_index + "/");
  }
  function o() {
    -1 !== location.href.indexOf("#prettyPhoto") &&
      (location.hash = "prettyPhoto");
  }
  function p(t, e) {
    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = "[\\?&]" + t + "=([^&#]*)",
      o = new RegExp(i),
      p = o.exec(e);
    return null == p ? "" : p[1];
  }
  (t.prettyPhoto = { version: "3.1.6" }),
    (t.fn.prettyPhoto = function (a) {
      function s() {
        t(".pp_loaderIcon").hide(),
          (projectedTop =
            scroll_pos.scrollTop + (I / 2 - u.containerHeight / 2)),
          projectedTop < 0 && (projectedTop = 0),
          $ppt.fadeTo(settings.animation_speed, 1),
          $pp_pic_holder
            .find(".pp_content")
            .animate(
              { height: u.contentHeight, width: u.contentWidth },
              settings.animation_speed
            ),
          $pp_pic_holder.animate(
            {
              top: projectedTop,
              left:
                j / 2 - u.containerWidth / 2 < 0
                  ? 0
                  : j / 2 - u.containerWidth / 2,
              width: u.containerWidth,
            },
            settings.animation_speed,
            function () {
              $pp_pic_holder
                .find(".pp_hoverContainer,#fullResImage")
                .height(u.height)
                .width(u.width),
                $pp_pic_holder
                  .find(".pp_fade")
                  .fadeIn(settings.animation_speed),
                isSet && "image" == h(pp_images[set_position])
                  ? $pp_pic_holder.find(".pp_hoverContainer").show()
                  : $pp_pic_holder.find(".pp_hoverContainer").hide(),
                settings.allow_expand &&
                  (u.resized
                    ? t("a.pp_expand,a.pp_contract").show()
                    : t("a.pp_expand").hide()),
                !settings.autoplay_slideshow ||
                  P ||
                  v ||
                  t.prettyPhoto.startSlideshow(),
                settings.changepicturecallback(),
                (v = !0);
            }
          ),
          m(),
          a.ajaxcallback();
      }
      function n(e) {
        $pp_pic_holder
          .find("#pp_full_res object,#pp_full_res embed")
          .css("visibility", "hidden"),
          $pp_pic_holder
            .find(".pp_fade")
            .fadeOut(settings.animation_speed, function () {
              t(".pp_loaderIcon").show(), e();
            });
      }
      function l(e) {
        e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide();
      }
      function r(t, e) {
        if (
          ((resized = !1),
          d(t, e),
          (imageWidth = t),
          (imageHeight = e),
          (k > j || b > I) && doresize && settings.allow_resize && !$)
        ) {
          for (resized = !0, fitting = !1; !fitting; )
            k > j
              ? ((imageWidth = j - 200), (imageHeight = (e / t) * imageWidth))
              : b > I
              ? ((imageHeight = I - 200), (imageWidth = (t / e) * imageHeight))
              : (fitting = !0),
              (b = imageHeight),
              (k = imageWidth);
          (k > j || b > I) && r(k, b), d(imageWidth, imageHeight);
        }
        return {
          width: Math.floor(imageWidth),
          height: Math.floor(imageHeight),
          containerHeight: Math.floor(b),
          containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
          contentHeight: Math.floor(y),
          contentWidth: Math.floor(w),
          resized: resized,
        };
      }
      function d(e, i) {
        (e = parseFloat(e)),
          (i = parseFloat(i)),
          ($pp_details = $pp_pic_holder.find(".pp_details")),
          $pp_details.width(e),
          (detailsHeight =
            parseFloat($pp_details.css("marginTop")) +
            parseFloat($pp_details.css("marginBottom"))),
          ($pp_details = $pp_details
            .clone()
            .addClass(settings.theme)
            .width(e)
            .appendTo(t("body"))
            .css({ position: "absolute", top: -1e4 })),
          (detailsHeight += $pp_details.height()),
          (detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight),
          $pp_details.remove(),
          ($pp_title = $pp_pic_holder.find(".ppt")),
          $pp_title.width(e),
          (titleHeight =
            parseFloat($pp_title.css("marginTop")) +
            parseFloat($pp_title.css("marginBottom"))),
          ($pp_title = $pp_title
            .clone()
            .appendTo(t("body"))
            .css({ position: "absolute", top: -1e4 })),
          (titleHeight += $pp_title.height()),
          $pp_title.remove(),
          (y = i + detailsHeight),
          (w = e),
          (b =
            y +
            titleHeight +
            $pp_pic_holder.find(".pp_top").height() +
            $pp_pic_holder.find(".pp_bottom").height()),
          (k = e);
      }
      function h(t) {
        return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i)
          ? "youtube"
          : t.match(/vimeo\.com/i)
          ? "vimeo"
          : t.match(/\b.mov\b/i)
          ? "quicktime"
          : t.match(/\b.swf\b/i)
          ? "flash"
          : t.match(/\biframe=true\b/i)
          ? "iframe"
          : t.match(/\bajax=true\b/i)
          ? "ajax"
          : t.match(/\bcustom=true\b/i)
          ? "custom"
          : "#" == t.substr(0, 1)
          ? "inline"
          : "image";
      }
      function c() {
        if (doresize && "undefined" != typeof $pp_pic_holder) {
          if (
            ((scroll_pos = _()),
            (contentHeight = $pp_pic_holder.height()),
            (contentwidth = $pp_pic_holder.width()),
            (projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2),
            projectedTop < 0 && (projectedTop = 0),
            contentHeight > I)
          )
            return;
          $pp_pic_holder.css({
            top: projectedTop,
            left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2,
          });
        }
      }
      function _() {
        return self.pageYOffset
          ? { scrollTop: self.pageYOffset, scrollLeft: self.pageXOffset }
          : document.documentElement && document.documentElement.scrollTop
          ? {
              scrollTop: document.documentElement.scrollTop,
              scrollLeft: document.documentElement.scrollLeft,
            }
          : document.body
          ? {
              scrollTop: document.body.scrollTop,
              scrollLeft: document.body.scrollLeft,
            }
          : void 0;
      }
      function g() {
        (I = t(window).height()),
          (j = t(window).width()),
          "undefined" != typeof $pp_overlay &&
            $pp_overlay.height(t(document).height()).width(j);
      }
      function m() {
        isSet &&
        settings.overlay_gallery &&
        "image" == h(pp_images[set_position])
          ? ((itemWidth = 57),
            (navWidth =
              "facebook" == settings.theme || "pp_default" == settings.theme
                ? 50
                : 30),
            (itemsPerPage = Math.floor(
              (u.containerWidth - 100 - navWidth) / itemWidth
            )),
            (itemsPerPage =
              itemsPerPage < pp_images.length
                ? itemsPerPage
                : pp_images.length),
            (totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1),
            0 == totalPage
              ? ((navWidth = 0),
                $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide())
              : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),
            (galleryWidth = itemsPerPage * itemWidth),
            (fullGalleryWidth = pp_images.length * itemWidth),
            $pp_gallery
              .css("margin-left", -(galleryWidth / 2 + navWidth / 2))
              .find("div:first")
              .width(galleryWidth + 5)
              .find("ul")
              .width(fullGalleryWidth)
              .find("li.selected")
              .removeClass("selected"),
            (goToPage =
              Math.floor(set_position / itemsPerPage) < totalPage
                ? Math.floor(set_position / itemsPerPage)
                : totalPage),
            t.prettyPhoto.changeGalleryPage(goToPage),
            $pp_gallery_li
              .filter(":eq(" + set_position + ")")
              .addClass("selected"))
          : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave");
      }
      function f() {
        if (
          (settings.social_tools &&
            (facebook_like_link = settings.social_tools.replace(
              "{location_href}",
              encodeURIComponent(location.href)
            )),
          (settings.markup = settings.markup.replace("{pp_social}", "")),
          t("body").append(settings.markup),
          ($pp_pic_holder = t(".pp_pic_holder")),
          ($ppt = t(".ppt")),
          ($pp_overlay = t("div.pp_overlay")),
          isSet && settings.overlay_gallery)
        ) {
          (currentGalleryPage = 0), (toInject = "");
          for (var e = 0; e < pp_images.length; e++)
            pp_images[e].match(/\b(jpg|jpeg|png|gif)\b/gi)
              ? ((classname = ""), (img_src = pp_images[e]))
              : ((classname = "default"), (img_src = "")),
              (toInject +=
                "<li class='" +
                classname +
                "'><a href='#'><img src='" +
                img_src +
                "' width='50' alt='' /></a></li>");
          (toInject = settings.gallery_markup.replace(/{gallery}/g, toInject)),
            $pp_pic_holder.find("#pp_full_res").after(toInject),
            ($pp_gallery = t(".pp_pic_holder .pp_gallery")),
            ($pp_gallery_li = $pp_gallery.find("li")),
            $pp_gallery.find(".pp_arrow_next").click(function () {
              return (
                t.prettyPhoto.changeGalleryPage("next"),
                t.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
            $pp_gallery.find(".pp_arrow_previous").click(function () {
              return (
                t.prettyPhoto.changeGalleryPage("previous"),
                t.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
            $pp_pic_holder.find(".pp_content").hover(
              function () {
                $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn();
              },
              function () {
                $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut();
              }
            ),
            (itemWidth = 57),
            $pp_gallery_li.each(function (e) {
              t(this)
                .find("a")
                .click(function () {
                  return (
                    t.prettyPhoto.changePage(e),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                  );
                });
            });
        }
        settings.slideshow &&
          ($pp_pic_holder
            .find(".pp_nav")
            .prepend('<a href="#" class="pp_play">Play</a>'),
          $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
            return t.prettyPhoto.startSlideshow(), !1;
          })),
          $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme),
          $pp_overlay
            .css({
              opacity: 0,
              height: t(document).height(),
              width: t(window).width(),
            })
            .bind("click", function () {
              settings.modal || t.prettyPhoto.close();
            }),
          t("a.pp_close").bind("click", function () {
            return t.prettyPhoto.close(), !1;
          }),
          settings.allow_expand &&
            t("a.pp_expand").bind("click", function () {
              return (
                t(this).hasClass("pp_expand")
                  ? (t(this).removeClass("pp_expand").addClass("pp_contract"),
                    (doresize = !1))
                  : (t(this).removeClass("pp_contract").addClass("pp_expand"),
                    (doresize = !0)),
                n(function () {
                  t.prettyPhoto.open();
                }),
                !1
              );
            }),
          $pp_pic_holder
            .find(".pp_previous, .pp_nav .pp_arrow_previous")
            .bind("click", function () {
              return (
                t.prettyPhoto.changePage("previous"),
                t.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
          $pp_pic_holder
            .find(".pp_next, .pp_nav .pp_arrow_next")
            .bind("click", function () {
              return (
                t.prettyPhoto.changePage("next"),
                t.prettyPhoto.stopSlideshow(),
                !1
              );
            }),
          c();
      }
      a = jQuery.extend(
        {
          hook: "rel",
          animation_speed: "fast",
          ajaxcallback: function () {},
          slideshow: 5e3,
          autoplay_slideshow: !1,
          opacity: 0.8,
          show_title: !0,
          allow_resize: !0,
          allow_expand: !0,
          default_width: 500,
          default_height: 344,
          counter_separator_label: "/",
          theme: "pp_default",
          horizontal_padding: 20,
          hideflash: !1,
          wmode: "opaque",
          autoplay: !0,
          modal: !1,
          deeplinking: !0,
          overlay_gallery: !0,
          overlay_gallery_max: 30,
          keyboard_shortcuts: !0,
          changepicturecallback: function () {},
          callback: function () {},
          ie6_fallback: !0,
          markup:
            '<div class="pp_pic_holder"> \t\t\t\t\t\t<div class="ppt">&nbsp;</div> \t\t\t\t\t\t<div class="pp_top"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_content_container"> \t\t\t\t\t\t\t<div class="pp_left"> \t\t\t\t\t\t\t<div class="pp_right"> \t\t\t\t\t\t\t\t<div class="pp_content"> \t\t\t\t\t\t\t\t\t<div class="pp_loaderIcon"></div> \t\t\t\t\t\t\t\t\t<div class="pp_fade"> \t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_expand" title="Expand the image">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class="pp_hoverContainer"> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_next" href="#">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_previous" href="#">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id="pp_full_res"></div> \t\t\t\t\t\t\t\t\t\t<div class="pp_details"> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_nav"> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class="currentTextHolder">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class="pp_description"></p> \t\t\t\t\t\t\t\t\t\t\t<div class="pp_social">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class="pp_close" href="#">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class="pp_bottom"> \t\t\t\t\t\t\t<div class="pp_left"></div> \t\t\t\t\t\t\t<div class="pp_middle"></div> \t\t\t\t\t\t\t<div class="pp_right"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class="pp_overlay"></div>',
          gallery_markup:
            '<div class="pp_gallery"> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_previous">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href="#" class="pp_arrow_next">Next</a> \t\t\t\t\t\t\t</div>',
          image_markup: '<img id="fullResImage" src="{path}" />',
          flash_markup:
            '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
          quicktime_markup:
            '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
          iframe_markup:
            '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
          inline_markup: '<div class="pp_inline">{content}</div>',
          custom_markup: "",
          social_tools:
            '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>',
        },
        a
      );
      var u,
        v,
        y,
        w,
        b,
        k,
        P,
        x = this,
        $ = !1,
        I = t(window).height(),
        j = t(window).width();
      return (
        (doresize = !0),
        (scroll_pos = _()),
        t(window)
          .unbind("resize.prettyphoto")
          .bind("resize.prettyphoto", function () {
            c(), g();
          }),
        a.keyboard_shortcuts &&
          t(document)
            .unbind("keydown.prettyphoto")
            .bind("keydown.prettyphoto", function (e) {
              if (
                "undefined" != typeof $pp_pic_holder &&
                $pp_pic_holder.is(":visible")
              )
                switch (e.keyCode) {
                  case 37:
                    t.prettyPhoto.changePage("previous"), e.preventDefault();
                    break;
                  case 39:
                    t.prettyPhoto.changePage("next"), e.preventDefault();
                    break;
                  case 27:
                    settings.modal || t.prettyPhoto.close(), e.preventDefault();
                }
            }),
        (t.prettyPhoto.initialize = function () {
          return (
            (settings = a),
            "pp_default" == settings.theme &&
              (settings.horizontal_padding = 16),
            (theRel = t(this).attr(settings.hook)),
            (galleryRegExp = /\[(?:.*)\]/),
            (isSet = !!galleryRegExp.exec(theRel)),
            (pp_images = isSet
              ? jQuery.map(x, function (e) {
                  return -1 != t(e).attr(settings.hook).indexOf(theRel)
                    ? t(e).attr("href")
                    : void 0;
                })
              : t.makeArray(t(this).attr("href"))),
            (pp_titles = isSet
              ? jQuery.map(x, function (e) {
                  return -1 != t(e).attr(settings.hook).indexOf(theRel)
                    ? t(e).find("img").attr("alt")
                      ? t(e).find("img").attr("alt")
                      : ""
                    : void 0;
                })
              : t.makeArray(t(this).find("img").attr("alt"))),
            (pp_descriptions = isSet
              ? jQuery.map(x, function (e) {
                  return -1 != t(e).attr(settings.hook).indexOf(theRel)
                    ? t(e).attr("title")
                      ? t(e).attr("title")
                      : ""
                    : void 0;
                })
              : t.makeArray(t(this).attr("title"))),
            pp_images.length > settings.overlay_gallery_max &&
              (settings.overlay_gallery = !1),
            (set_position = jQuery.inArray(t(this).attr("href"), pp_images)),
            (rel_index = isSet
              ? set_position
              : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this))),
            f(this),
            settings.allow_resize &&
              t(window).bind("scroll.prettyphoto", function () {
                c();
              }),
            t.prettyPhoto.open(),
            !1
          );
        }),
        (t.prettyPhoto.open = function (e) {
          return (
            "undefined" == typeof settings &&
              ((settings = a),
              (pp_images = t.makeArray(arguments[0])),
              (pp_titles = t.makeArray(arguments[1] ? arguments[1] : "")),
              (pp_descriptions = t.makeArray(arguments[2] ? arguments[2] : "")),
              (isSet = pp_images.length > 1),
              (set_position = arguments[3] ? arguments[3] : 0),
              f(e.target)),
            settings.hideflash &&
              t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css(
                "visibility",
                "hidden"
              ),
            l(t(pp_images).size()),
            t(".pp_loaderIcon").show(),
            settings.deeplinking && i(),
            settings.social_tools &&
              ((facebook_like_link = settings.social_tools.replace(
                "{location_href}",
                encodeURIComponent(location.href)
              )),
              $pp_pic_holder.find(".pp_social").html(facebook_like_link)),
            $ppt.is(":hidden") && $ppt.css("opacity", 0).show(),
            $pp_overlay
              .show()
              .fadeTo(settings.animation_speed, settings.opacity),
            $pp_pic_holder
              .find(".currentTextHolder")
              .text(
                set_position +
                  1 +
                  settings.counter_separator_label +
                  t(pp_images).size()
              ),
            "undefined" != typeof pp_descriptions[set_position] &&
            "" != pp_descriptions[set_position]
              ? $pp_pic_holder
                  .find(".pp_description")
                  .show()
                  .html(unescape(pp_descriptions[set_position]))
              : $pp_pic_holder.find(".pp_description").hide(),
            (movie_width = parseFloat(p("width", pp_images[set_position]))
              ? p("width", pp_images[set_position])
              : settings.default_width.toString()),
            (movie_height = parseFloat(p("height", pp_images[set_position]))
              ? p("height", pp_images[set_position])
              : settings.default_height.toString()),
            ($ = !1),
            -1 != movie_height.indexOf("%") &&
              ((movie_height = parseFloat(
                (t(window).height() * parseFloat(movie_height)) / 100 - 150
              )),
              ($ = !0)),
            -1 != movie_width.indexOf("%") &&
              ((movie_width = parseFloat(
                (t(window).width() * parseFloat(movie_width)) / 100 - 150
              )),
              ($ = !0)),
            $pp_pic_holder.fadeIn(function () {
              switch (
                ($ppt.html(
                  settings.show_title &&
                    "" != pp_titles[set_position] &&
                    "undefined" != typeof pp_titles[set_position]
                    ? unescape(pp_titles[set_position])
                    : "&nbsp;"
                ),
                (imgPreloader = ""),
                (skipInjection = !1),
                h(pp_images[set_position]))
              ) {
                case "image":
                  (imgPreloader = new Image()),
                    (nextImage = new Image()),
                    isSet &&
                      set_position < t(pp_images).size() - 1 &&
                      (nextImage.src = pp_images[set_position + 1]),
                    (prevImage = new Image()),
                    isSet &&
                      pp_images[set_position - 1] &&
                      (prevImage.src = pp_images[set_position - 1]),
                    ($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                      settings.image_markup.replace(
                        /{path}/g,
                        pp_images[set_position]
                      )),
                    (imgPreloader.onload = function () {
                      (u = r(imgPreloader.width, imgPreloader.height)), s();
                    }),
                    (imgPreloader.onerror = function () {
                      alert(
                        "Image cannot be loaded. Make sure the path is correct and image exist."
                      ),
                        t.prettyPhoto.close();
                    }),
                    (imgPreloader.src = pp_images[set_position]);
                  break;
                case "youtube":
                  (u = r(movie_width, movie_height)),
                    (movie_id = p("v", pp_images[set_position])),
                    "" == movie_id &&
                      ((movie_id = pp_images[set_position].split("youtu.be/")),
                      (movie_id = movie_id[1]),
                      movie_id.indexOf("?") > 0 &&
                        (movie_id = movie_id.substr(0, movie_id.indexOf("?"))),
                      movie_id.indexOf("&") > 0 &&
                        (movie_id = movie_id.substr(0, movie_id.indexOf("&")))),
                    (movie = "http://www.youtube.com/embed/" + movie_id),
                    (movie += p("rel", pp_images[set_position])
                      ? "?rel=" + p("rel", pp_images[set_position])
                      : "?rel=1"),
                    settings.autoplay && (movie += "&autoplay=1"),
                    (toInject = settings.iframe_markup
                      .replace(/{width}/g, u.width)
                      .replace(/{height}/g, u.height)
                      .replace(/{wmode}/g, settings.wmode)
                      .replace(/{path}/g, movie));
                  break;
                case "vimeo":
                  (u = r(movie_width, movie_height)),
                    (movie_id = pp_images[set_position]);
                  var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
                    i = movie_id.match(e);
                  (movie =
                    "http://player.vimeo.com/video/" +
                    i[3] +
                    "?title=0&byline=0&portrait=0"),
                    settings.autoplay && (movie += "&autoplay=1;"),
                    (vimeo_width = u.width + "/embed/?moog_width=" + u.width),
                    (toInject = settings.iframe_markup
                      .replace(/{width}/g, vimeo_width)
                      .replace(/{height}/g, u.height)
                      .replace(/{path}/g, movie));
                  break;
                case "quicktime":
                  (u = r(movie_width, movie_height)),
                    (u.height += 15),
                    (u.contentHeight += 15),
                    (u.containerHeight += 15),
                    (toInject = settings.quicktime_markup
                      .replace(/{width}/g, u.width)
                      .replace(/{height}/g, u.height)
                      .replace(/{wmode}/g, settings.wmode)
                      .replace(/{path}/g, pp_images[set_position])
                      .replace(/{autoplay}/g, settings.autoplay));
                  break;
                case "flash":
                  (u = r(movie_width, movie_height)),
                    (flash_vars = pp_images[set_position]),
                    (flash_vars = flash_vars.substring(
                      pp_images[set_position].indexOf("flashvars") + 10,
                      pp_images[set_position].length
                    )),
                    (filename = pp_images[set_position]),
                    (filename = filename.substring(0, filename.indexOf("?"))),
                    (toInject = settings.flash_markup
                      .replace(/{width}/g, u.width)
                      .replace(/{height}/g, u.height)
                      .replace(/{wmode}/g, settings.wmode)
                      .replace(/{path}/g, filename + "?" + flash_vars));
                  break;
                case "iframe":
                  (u = r(movie_width, movie_height)),
                    (frame_url = pp_images[set_position]),
                    (frame_url = frame_url.substr(
                      0,
                      frame_url.indexOf("iframe") - 1
                    )),
                    (toInject = settings.iframe_markup
                      .replace(/{width}/g, u.width)
                      .replace(/{height}/g, u.height)
                      .replace(/{path}/g, frame_url));
                  break;
                case "ajax":
                  (doresize = !1),
                    (u = r(movie_width, movie_height)),
                    (doresize = !0),
                    (skipInjection = !0),
                    t.get(pp_images[set_position], function (t) {
                      (toInject = settings.inline_markup.replace(
                        /{content}/g,
                        t
                      )),
                        ($pp_pic_holder.find("#pp_full_res")[0].innerHTML =
                          toInject),
                        s();
                    });
                  break;
                case "custom":
                  (u = r(movie_width, movie_height)),
                    (toInject = settings.custom_markup);
                  break;
                case "inline":
                  (myClone = t(pp_images[set_position])
                    .clone()
                    .append('<br clear="all" />')
                    .css({ width: settings.default_width })
                    .wrapInner(
                      '<div id="pp_full_res"><div class="pp_inline"></div></div>'
                    )
                    .appendTo(t("body"))
                    .show()),
                    (doresize = !1),
                    (u = r(t(myClone).width(), t(myClone).height())),
                    (doresize = !0),
                    t(myClone).remove(),
                    (toInject = settings.inline_markup.replace(
                      /{content}/g,
                      t(pp_images[set_position]).html()
                    ));
              }
              imgPreloader ||
                skipInjection ||
                (($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject),
                s());
            }),
            !1
          );
        }),
        (t.prettyPhoto.changePage = function (e) {
          (currentGalleryPage = 0),
            "previous" == e
              ? (set_position--,
                set_position < 0 && (set_position = t(pp_images).size() - 1))
              : "next" == e
              ? (set_position++,
                set_position > t(pp_images).size() - 1 && (set_position = 0))
              : (set_position = e),
            (rel_index = set_position),
            doresize || (doresize = !0),
            settings.allow_expand &&
              t(".pp_contract")
                .removeClass("pp_contract")
                .addClass("pp_expand"),
            n(function () {
              t.prettyPhoto.open();
            });
        }),
        (t.prettyPhoto.changeGalleryPage = function (t) {
          "next" == t
            ? (currentGalleryPage++,
              currentGalleryPage > totalPage && (currentGalleryPage = 0))
            : "previous" == t
            ? (currentGalleryPage--,
              currentGalleryPage < 0 && (currentGalleryPage = totalPage))
            : (currentGalleryPage = t),
            (slide_speed =
              "next" == t || "previous" == t ? settings.animation_speed : 0),
            (slide_to = currentGalleryPage * itemsPerPage * itemWidth),
            $pp_gallery.find("ul").animate({ left: -slide_to }, slide_speed);
        }),
        (t.prettyPhoto.startSlideshow = function () {
          "undefined" == typeof P
            ? ($pp_pic_holder
                .find(".pp_play")
                .unbind("click")
                .removeClass("pp_play")
                .addClass("pp_pause")
                .click(function () {
                  return t.prettyPhoto.stopSlideshow(), !1;
                }),
              (P = setInterval(
                t.prettyPhoto.startSlideshow,
                settings.slideshow
              )))
            : t.prettyPhoto.changePage("next");
        }),
        (t.prettyPhoto.stopSlideshow = function () {
          $pp_pic_holder
            .find(".pp_pause")
            .unbind("click")
            .removeClass("pp_pause")
            .addClass("pp_play")
            .click(function () {
              return t.prettyPhoto.startSlideshow(), !1;
            }),
            clearInterval(P),
            (P = void 0);
        }),
        (t.prettyPhoto.close = function () {
          $pp_overlay.is(":animated") ||
            (t.prettyPhoto.stopSlideshow(),
            $pp_pic_holder
              .stop()
              .find("object,embed")
              .css("visibility", "hidden"),
            t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(
              settings.animation_speed,
              function () {
                t(this).remove();
              }
            ),
            $pp_overlay.fadeOut(settings.animation_speed, function () {
              settings.hideflash &&
                t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css(
                  "visibility",
                  "visible"
                ),
                t(this).remove(),
                t(window).unbind("scroll.prettyphoto"),
                o(),
                settings.callback(),
                (doresize = !0),
                (v = !1),
                delete settings;
            }));
        }),
        !pp_alreadyInitialized &&
          e() &&
          ((pp_alreadyInitialized = !0),
          (hashIndex = e()),
          (hashRel = hashIndex),
          (hashIndex = hashIndex.substring(
            hashIndex.indexOf("/") + 1,
            hashIndex.length - 1
          )),
          (hashRel = hashRel.substring(0, hashRel.indexOf("/"))),
          setTimeout(function () {
            t(
              "a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")"
            ).trigger("click");
          }, 50)),
        this.unbind("click.prettyphoto").bind(
          "click.prettyphoto",
          t.prettyPhoto.initialize
        )
      );
    });
})(jQuery);
var pp_alreadyInitialized = !1;
!(function () {
  var t = !1;
  (window.JQClass = function () {}),
    (JQClass.classes = {}),
    (JQClass.extend = function e(i) {
      function n() {
        !t && this._init && this._init.apply(this, arguments);
      }
      var s = this.prototype;
      t = !0;
      var o = new this();
      t = !1;
      for (var a in i)
        o[a] =
          "function" == typeof i[a] && "function" == typeof s[a]
            ? (function (t, e) {
                return function () {
                  var i = this._super;
                  this._super = function (e) {
                    return s[t].apply(this, e || []);
                  };
                  var n = e.apply(this, arguments);
                  return (this._super = i), n;
                };
              })(a, i[a])
            : i[a];
      return (
        (n.prototype = o), (n.prototype.constructor = n), (n.extend = e), n
      );
    });
})(),
  (function ($) {
    function camelCase(t) {
      return t.replace(/-([a-z])/g, function (t, e) {
        return e.toUpperCase();
      });
    }
    (JQClass.classes.JQPlugin = JQClass.extend({
      name: "plugin",
      defaultOptions: {},
      regionalOptions: {},
      _getters: [],
      _getMarker: function () {
        return "is-" + this.name;
      },
      _init: function () {
        $.extend(
          this.defaultOptions,
          (this.regionalOptions && this.regionalOptions[""]) || {}
        );
        var t = camelCase(this.name);
        ($[t] = this),
          ($.fn[t] = function (e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return $[t]._isNotChained(e, i)
              ? $[t][e].apply($[t], [this[0]].concat(i))
              : this.each(function () {
                  if ("string" == typeof e) {
                    if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
                    $[t][e].apply($[t], [this].concat(i));
                  } else $[t]._attach(this, e);
                });
          });
      },
      setDefaults: function (t) {
        $.extend(this.defaultOptions, t || {});
      },
      _isNotChained: function (t, e) {
        return (
          ("option" === t &&
            (0 === e.length || (1 === e.length && "string" == typeof e[0]))) ||
          $.inArray(t, this._getters) > -1
        );
      },
      _attach: function (t, e) {
        if (((t = $(t)), !t.hasClass(this._getMarker()))) {
          t.addClass(this._getMarker()),
            (e = $.extend(
              {},
              this.defaultOptions,
              this._getMetadata(t),
              e || {}
            ));
          var i = $.extend(
            { name: this.name, elem: t, options: e },
            this._instSettings(t, e)
          );
          t.data(this.name, i), this._postAttach(t, i), this.option(t, e);
        }
      },
      _instSettings: function (t, e) {
        return {};
      },
      _postAttach: function (t, e) {},
      _getMetadata: function (d) {
        try {
          var f = d.data(this.name.toLowerCase()) || "";
          (f = f.replace(/'/g, '"')),
            (f = f.replace(/([a-zA-Z0-9]+):/g, function (t, e, i) {
              var n = f.substring(0, i).match(/"/g);
              return n && n.length % 2 !== 0 ? e + ":" : '"' + e + '":';
            })),
            (f = $.parseJSON("{" + f + "}"));
          for (var g in f) {
            var h = f[g];
            "string" == typeof h &&
              h.match(/^new Date\((.*)\)$/) &&
              (f[g] = eval(h));
          }
          return f;
        } catch (t) {
          return {};
        }
      },
      _getInst: function (t) {
        return $(t).data(this.name) || {};
      },
      option: function (t, e, i) {
        t = $(t);
        var n = t.data(this.name);
        if (!e || ("string" == typeof e && null == i)) {
          var s = (n || {}).options;
          return s && e ? s[e] : s;
        }
        if (t.hasClass(this._getMarker())) {
          var s = e || {};
          "string" == typeof e && ((s = {}), (s[e] = i)),
            this._optionsChanged(t, n, s),
            $.extend(n.options, s);
        }
      },
      _optionsChanged: function (t, e, i) {},
      destroy: function (t) {
        (t = $(t)),
          t.hasClass(this._getMarker()) &&
            (this._preDestroy(t, this._getInst(t)),
            t.removeData(this.name).removeClass(this._getMarker()));
      },
      _preDestroy: function (t, e) {},
    })),
      ($.JQPlugin = {
        createPlugin: function (t, e) {
          "object" == typeof t && ((e = t), (t = "JQPlugin")),
            (t = camelCase(t));
          var i = camelCase(e.name);
          (JQClass.classes[i] = JQClass.classes[t].extend(e)),
            new JQClass.classes[i]();
        },
      });
  })(jQuery),
  (function (t) {
    var e = "countdown",
      i = 0,
      n = 1,
      s = 2,
      o = 3,
      a = 4,
      r = 5,
      l = 6;
    t.JQPlugin.createPlugin({
      name: e,
      defaultOptions: {
        until: null,
        since: null,
        timezone: null,
        serverSync: null,
        format: "dHMS",
        layout: "",
        compact: !1,
        padZeroes: !1,
        significant: 0,
        description: "",
        expiryUrl: "",
        expiryText: "",
        alwaysExpire: !1,
        onExpiry: null,
        onTick: null,
        tickInterval: 1,
      },
      regionalOptions: {
        "": {
          labels: [
            "Years",
            "Months",
            "Weeks",
            "Days",
            "Hours",
            "Minutes",
            "Seconds",
          ],
          labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
          compactLabels: ["y", "m", "w", "d"],
          whichLabels: null,
          digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
          timeSeparator: ":",
          isRTL: !1,
        },
      },
      _getters: ["getTimes"],
      _rtlClass: e + "-rtl",
      _sectionClass: e + "-section",
      _amountClass: e + "-amount",
      _periodClass: e + "-period",
      _rowClass: e + "-row",
      _holdingClass: e + "-holding",
      _showClass: e + "-show",
      _descrClass: e + "-descr",
      _timerElems: [],
      _init: function () {
        function e(t) {
          var r =
            t < 1e12
              ? s
                ? performance.now() + performance.timing.navigationStart
                : n()
              : t || n();
          r - a >= 1e3 && (i._updateElems(), (a = r)), o(e);
        }
        var i = this;
        this._super(), (this._serverSyncs = []);
        var n =
            "function" == typeof Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                },
          s = window.performance && "function" == typeof window.performance.now,
          o =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            null,
          a = 0;
        !o || t.noRequestAnimationFrame
          ? ((t.noRequestAnimationFrame = null),
            setInterval(function () {
              i._updateElems();
            }, 980))
          : ((a =
              window.animationStartTime ||
              window.webkitAnimationStartTime ||
              window.mozAnimationStartTime ||
              window.oAnimationStartTime ||
              window.msAnimationStartTime ||
              n()),
            o(e));
      },
      UTCDate: function (t, e, i, n, s, o, a, r) {
        "object" == typeof e &&
          e.constructor == Date &&
          ((r = e.getMilliseconds()),
          (a = e.getSeconds()),
          (o = e.getMinutes()),
          (s = e.getHours()),
          (n = e.getDate()),
          (i = e.getMonth()),
          (e = e.getFullYear()));
        var l = new Date();
        return (
          l.setUTCFullYear(e),
          l.setUTCDate(1),
          l.setUTCMonth(i || 0),
          l.setUTCDate(n || 1),
          l.setUTCHours(s || 0),
          l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)),
          l.setUTCSeconds(a || 0),
          l.setUTCMilliseconds(r || 0),
          l
        );
      },
      periodsToSeconds: function (t) {
        return (
          31557600 * t[0] +
          2629800 * t[1] +
          604800 * t[2] +
          86400 * t[3] +
          3600 * t[4] +
          60 * t[5] +
          t[6]
        );
      },
      resync: function () {
        var e = this;
        t("." + this._getMarker()).each(function () {
          var i = t.data(this, e.name);
          if (i.options.serverSync) {
            for (var n = null, s = 0; s < e._serverSyncs.length; s++)
              if (e._serverSyncs[s][0] == i.options.serverSync) {
                n = e._serverSyncs[s];
                break;
              }
            if (null == n[2]) {
              var o = t.isFunction(i.options.serverSync)
                ? i.options.serverSync.apply(this, [])
                : null;
              n[2] = (o ? new Date().getTime() - o.getTime() : 0) - n[1];
            }
            i._since &&
              i._since.setMilliseconds(i._since.getMilliseconds() + n[2]),
              i._until.setMilliseconds(i._until.getMilliseconds() + n[2]);
          }
        });
        for (var i = 0; i < e._serverSyncs.length; i++)
          null != e._serverSyncs[i][2] &&
            ((e._serverSyncs[i][1] += e._serverSyncs[i][2]),
            delete e._serverSyncs[i][2]);
      },
      _instSettings: function (t, e) {
        return { _periods: [0, 0, 0, 0, 0, 0, 0] };
      },
      _addElem: function (t) {
        this._hasElem(t) || this._timerElems.push(t);
      },
      _hasElem: function (e) {
        return t.inArray(e, this._timerElems) > -1;
      },
      _removeElem: function (e) {
        this._timerElems = t.map(this._timerElems, function (t) {
          return t == e ? null : t;
        });
      },
      _updateElems: function () {
        for (var t = this._timerElems.length - 1; t >= 0; t--)
          this._updateCountdown(this._timerElems[t]);
      },
      _optionsChanged: function (e, i, n) {
        n.layout &&
          (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
          this._resetExtraLabels(i.options, n);
        var s = i.options.timezone != n.timezone;
        t.extend(i.options, n),
          this._adjustSettings(e, i, null != n.until || null != n.since || s);
        var o = new Date();
        ((i._since && i._since < o) || (i._until && i._until > o)) &&
          this._addElem(e[0]),
          this._updateCountdown(e, i);
      },
      _updateCountdown: function (e, i) {
        if (((e = e.jquery ? e : t(e)), (i = i || this._getInst(e)))) {
          if (
            (e
              .html(this._generateHTML(i))
              .toggleClass(this._rtlClass, i.options.isRTL),
            t.isFunction(i.options.onTick))
          ) {
            var n =
              "lap" != i._hold
                ? i._periods
                : this._calculatePeriods(
                    i,
                    i._show,
                    i.options.significant,
                    new Date()
                  );
            (1 != i.options.tickInterval &&
              this.periodsToSeconds(n) % i.options.tickInterval != 0) ||
              i.options.onTick.apply(e[0], [n]);
          }
          var s =
            "pause" != i._hold &&
            (i._since
              ? i._now.getTime() < i._since.getTime()
              : i._now.getTime() >= i._until.getTime());
          if (s && !i._expiring) {
            if (
              ((i._expiring = !0),
              this._hasElem(e[0]) || i.options.alwaysExpire)
            ) {
              if (
                (this._removeElem(e[0]),
                t.isFunction(i.options.onExpiry) &&
                  i.options.onExpiry.apply(e[0], []),
                i.options.expiryText)
              ) {
                var o = i.options.layout;
                (i.options.layout = i.options.expiryText),
                  this._updateCountdown(e[0], i),
                  (i.options.layout = o);
              }
              i.options.expiryUrl && (window.location = i.options.expiryUrl);
            }
            i._expiring = !1;
          } else "pause" == i._hold && this._removeElem(e[0]);
        }
      },
      _resetExtraLabels: function (t, e) {
        for (var i in e)
          i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
        for (var i in t)
          i.match(/[Ll]abels[02-9]|compactLabels1/) &&
            "undefined" == typeof e[i] &&
            (t[i] = null);
      },
      _adjustSettings: function (e, i, n) {
        for (var s = null, o = 0; o < this._serverSyncs.length; o++)
          if (this._serverSyncs[o][0] == i.options.serverSync) {
            s = this._serverSyncs[o][1];
            break;
          }
        if (null != s)
          var a = i.options.serverSync ? s : 0,
            r = new Date();
        else {
          var l = t.isFunction(i.options.serverSync)
              ? i.options.serverSync.apply(e[0], [])
              : null,
            r = new Date(),
            a = l ? r.getTime() - l.getTime() : 0;
          this._serverSyncs.push([i.options.serverSync, a]);
        }
        var p = i.options.timezone;
        (p = null == p ? -r.getTimezoneOffset() : p),
          (n || (!n && null == i._until && null == i._since)) &&
            ((i._since = i.options.since),
            null != i._since &&
              ((i._since = this.UTCDate(
                p,
                this._determineTime(i._since, null)
              )),
              i._since &&
                a &&
                i._since.setMilliseconds(i._since.getMilliseconds() + a)),
            (i._until = this.UTCDate(
              p,
              this._determineTime(i.options.until, r)
            )),
            a && i._until.setMilliseconds(i._until.getMilliseconds() + a)),
          (i._show = this._determineShow(i));
      },
      _preDestroy: function (t, e) {
        this._removeElem(t[0]), t.empty();
      },
      pause: function (t) {
        this._hold(t, "pause");
      },
      lap: function (t) {
        this._hold(t, "lap");
      },
      resume: function (t) {
        this._hold(t, null);
      },
      toggle: function (e) {
        var i = t.data(e, this.name) || {};
        this[i._hold ? "resume" : "pause"](e);
      },
      toggleLap: function (e) {
        var i = t.data(e, this.name) || {};
        this[i._hold ? "resume" : "lap"](e);
      },
      _hold: function (e, i) {
        var n = t.data(e, this.name);
        if (n) {
          if ("pause" == n._hold && !i) {
            n._periods = n._savePeriods;
            var s = n._since ? "-" : "+";
            (n[n._since ? "_since" : "_until"] = this._determineTime(
              s +
                n._periods[0] +
                "y" +
                s +
                n._periods[1] +
                "o" +
                s +
                n._periods[2] +
                "w" +
                s +
                n._periods[3] +
                "d" +
                s +
                n._periods[4] +
                "h" +
                s +
                n._periods[5] +
                "m" +
                s +
                n._periods[6] +
                "s"
            )),
              this._addElem(e);
          }
          (n._hold = i),
            (n._savePeriods = "pause" == i ? n._periods : null),
            t.data(e, this.name, n),
            this._updateCountdown(e, n);
        }
      },
      getTimes: function (e) {
        var i = t.data(e, this.name);
        return i
          ? "pause" == i._hold
            ? i._savePeriods
            : i._hold
            ? this._calculatePeriods(
                i,
                i._show,
                i.options.significant,
                new Date()
              )
            : i._periods
          : null;
      },
      _determineTime: function (t, e) {
        var i = this,
          n = function (t) {
            var e = new Date();
            return e.setTime(e.getTime() + 1e3 * t), e;
          },
          s = function (t) {
            t = t.toLowerCase();
            for (
              var e = new Date(),
                n = e.getFullYear(),
                s = e.getMonth(),
                o = e.getDate(),
                a = e.getHours(),
                r = e.getMinutes(),
                l = e.getSeconds(),
                p = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
                _ = p.exec(t);
              _;

            ) {
              switch (_[2] || "s") {
                case "s":
                  l += parseInt(_[1], 10);
                  break;
                case "m":
                  r += parseInt(_[1], 10);
                  break;
                case "h":
                  a += parseInt(_[1], 10);
                  break;
                case "d":
                  o += parseInt(_[1], 10);
                  break;
                case "w":
                  o += 7 * parseInt(_[1], 10);
                  break;
                case "o":
                  (s += parseInt(_[1], 10)),
                    (o = Math.min(o, i._getDaysInMonth(n, s)));
                  break;
                case "y":
                  (n += parseInt(_[1], 10)),
                    (o = Math.min(o, i._getDaysInMonth(n, s)));
              }
              _ = p.exec(t);
            }
            return new Date(n, s, o, a, r, l, 0);
          },
          o =
            null == t
              ? e
              : "string" == typeof t
              ? s(t)
              : "number" == typeof t
              ? n(t)
              : t;
        return o && o.setMilliseconds(0), o;
      },
      _getDaysInMonth: function (t, e) {
        return 32 - new Date(t, e, 32).getDate();
      },
      _normalLabels: function (t) {
        return t;
      },
      _generateHTML: function (e) {
        var p = this;
        e._periods = e._hold
          ? e._periods
          : this._calculatePeriods(
              e,
              e._show,
              e.options.significant,
              new Date()
            );
        for (
          var _ = !1,
            c = 0,
            u = e.options.significant,
            h = t.extend({}, e._show),
            d = i;
          d <= l;
          d++
        )
          (_ |= "?" == e._show[d] && e._periods[d] > 0),
            (h[d] = "?" != e._show[d] || _ ? e._show[d] : null),
            (c += h[d] ? 1 : 0),
            (u -= e._periods[d] > 0 ? 1 : 0);
        for (var m = [!1, !1, !1, !1, !1, !1, !1], d = l; d >= i; d--)
          e._show[d] && (e._periods[d] ? (m[d] = !0) : ((m[d] = u > 0), u--));
        var g = e.options.compact ? e.options.compactLabels : e.options.labels,
          f = e.options.whichLabels || this._normalLabels,
          w = function (t) {
            var i = e.options["compactLabels" + f(e._periods[t])];
            return h[t]
              ? p._translateDigits(e, e._periods[t]) + (i ? i[t] : g[t]) + " "
              : "";
          },
          y = e.options.padZeroes ? 2 : 1,
          v = function (t) {
            var i = e.options["labels" + f(e._periods[t])];
            return (!e.options.significant && h[t]) ||
              (e.options.significant && m[t])
              ? '<span class="' +
                  p._sectionClass +
                  '"><span class="' +
                  p._amountClass +
                  '">' +
                  p._minDigits(e, e._periods[t], y) +
                  '</span><span class="' +
                  p._periodClass +
                  '">' +
                  (i ? i[t] : g[t]) +
                  "</span></span>"
              : "";
          };
        return e.options.layout
          ? this._buildLayout(
              e,
              h,
              e.options.layout,
              e.options.compact,
              e.options.significant,
              m
            )
          : (e.options.compact
              ? '<span class="' +
                this._rowClass +
                " " +
                this._amountClass +
                (e._hold ? " " + this._holdingClass : "") +
                '">' +
                w(i) +
                w(n) +
                w(s) +
                w(o) +
                (h[a] ? this._minDigits(e, e._periods[a], 2) : "") +
                (h[r]
                  ? (h[a] ? e.options.timeSeparator : "") +
                    this._minDigits(e, e._periods[r], 2)
                  : "") +
                (h[l]
                  ? (h[a] || h[r] ? e.options.timeSeparator : "") +
                    this._minDigits(e, e._periods[l], 2)
                  : "")
              : '<span class="' +
                this._rowClass +
                " " +
                this._showClass +
                (e.options.significant || c) +
                (e._hold ? " " + this._holdingClass : "") +
                '">' +
                v(i) +
                v(n) +
                v(s) +
                v(o) +
                v(a) +
                v(r) +
                v(l)) +
              "</span>" +
              (e.options.description
                ? '<span class="' +
                  this._rowClass +
                  " " +
                  this._descrClass +
                  '">' +
                  e.options.description +
                  "</span>"
                : "");
      },
      _buildLayout: function (e, p, _, c, u, h) {
        for (
          var d = e.options[c ? "compactLabels" : "labels"],
            m = e.options.whichLabels || this._normalLabels,
            g = function (t) {
              return (e.options[
                (c ? "compactLabels" : "labels") + m(e._periods[t])
              ] || d)[t];
            },
            f = function (t, i) {
              return e.options.digits[Math.floor(t / i) % 10];
            },
            w = {
              desc: e.options.description,
              sep: e.options.timeSeparator,
              yl: g(i),
              yn: this._minDigits(e, e._periods[i], 1),
              ynn: this._minDigits(e, e._periods[i], 2),
              ynnn: this._minDigits(e, e._periods[i], 3),
              y1: f(e._periods[i], 1),
              y10: f(e._periods[i], 10),
              y100: f(e._periods[i], 100),
              y1000: f(e._periods[i], 1e3),
              ol: g(n),
              on: this._minDigits(e, e._periods[n], 1),
              onn: this._minDigits(e, e._periods[n], 2),
              onnn: this._minDigits(e, e._periods[n], 3),
              o1: f(e._periods[n], 1),
              o10: f(e._periods[n], 10),
              o100: f(e._periods[n], 100),
              o1000: f(e._periods[n], 1e3),
              wl: g(s),
              wn: this._minDigits(e, e._periods[s], 1),
              wnn: this._minDigits(e, e._periods[s], 2),
              wnnn: this._minDigits(e, e._periods[s], 3),
              w1: f(e._periods[s], 1),
              w10: f(e._periods[s], 10),
              w100: f(e._periods[s], 100),
              w1000: f(e._periods[s], 1e3),
              dl: g(o),
              dn: this._minDigits(e, e._periods[o], 1),
              dnn: this._minDigits(e, e._periods[o], 2),
              dnnn: this._minDigits(e, e._periods[o], 3),
              d1: f(e._periods[o], 1),
              d10: f(e._periods[o], 10),
              d100: f(e._periods[o], 100),
              d1000: f(e._periods[o], 1e3),
              hl: g(a),
              hn: this._minDigits(e, e._periods[a], 1),
              hnn: this._minDigits(e, e._periods[a], 2),
              hnnn: this._minDigits(e, e._periods[a], 3),
              h1: f(e._periods[a], 1),
              h10: f(e._periods[a], 10),
              h100: f(e._periods[a], 100),
              h1000: f(e._periods[a], 1e3),
              ml: g(r),
              mn: this._minDigits(e, e._periods[r], 1),
              mnn: this._minDigits(e, e._periods[r], 2),
              mnnn: this._minDigits(e, e._periods[r], 3),
              m1: f(e._periods[r], 1),
              m10: f(e._periods[r], 10),
              m100: f(e._periods[r], 100),
              m1000: f(e._periods[r], 1e3),
              sl: g(l),
              sn: this._minDigits(e, e._periods[l], 1),
              snn: this._minDigits(e, e._periods[l], 2),
              snnn: this._minDigits(e, e._periods[l], 3),
              s1: f(e._periods[l], 1),
              s10: f(e._periods[l], 10),
              s100: f(e._periods[l], 100),
              s1000: f(e._periods[l], 1e3),
            },
            y = _,
            v = i;
          v <= l;
          v++
        ) {
          var D = "yowdhms".charAt(v),
            C = new RegExp("\\{" + D + "<\\}([\\s\\S]*)\\{" + D + ">\\}", "g");
          y = y.replace(C, (!u && p[v]) || (u && h[v]) ? "$1" : "");
        }
        return (
          t.each(w, function (t, e) {
            var i = new RegExp("\\{" + t + "\\}", "g");
            y = y.replace(i, e);
          }),
          y
        );
      },
      _minDigits: function (t, e, i) {
        return (
          (e = "" + e),
          e.length >= i
            ? this._translateDigits(t, e)
            : ((e = "0000000000" + e),
              this._translateDigits(t, e.substr(e.length - i)))
        );
      },
      _translateDigits: function (t, e) {
        return ("" + e).replace(/[0-9]/g, function (e) {
          return t.options.digits[e];
        });
      },
      _determineShow: function (t) {
        var e = t.options.format,
          p = [];
        return (
          (p[i] = e.match("y") ? "?" : e.match("Y") ? "!" : null),
          (p[n] = e.match("o") ? "?" : e.match("O") ? "!" : null),
          (p[s] = e.match("w") ? "?" : e.match("W") ? "!" : null),
          (p[o] = e.match("d") ? "?" : e.match("D") ? "!" : null),
          (p[a] = e.match("h") ? "?" : e.match("H") ? "!" : null),
          (p[r] = e.match("m") ? "?" : e.match("M") ? "!" : null),
          (p[l] = e.match("s") ? "?" : e.match("S") ? "!" : null),
          p
        );
      },
      _calculatePeriods: function (t, e, p, _) {
        (t._now = _), t._now.setMilliseconds(0);
        var c = new Date(t._now.getTime());
        t._since
          ? _.getTime() < t._since.getTime()
            ? (t._now = _ = c)
            : (_ = t._since)
          : (c.setTime(t._until.getTime()),
            _.getTime() > t._until.getTime() && (t._now = _ = c));
        var u = [0, 0, 0, 0, 0, 0, 0];
        if (e[i] || e[n]) {
          var h = this._getDaysInMonth(_.getFullYear(), _.getMonth()),
            d = this._getDaysInMonth(c.getFullYear(), c.getMonth()),
            m =
              c.getDate() == _.getDate() ||
              (c.getDate() >= Math.min(h, d) && _.getDate() >= Math.min(h, d)),
            g = function (t) {
              return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds();
            },
            f = Math.max(
              0,
              12 * (c.getFullYear() - _.getFullYear()) +
                c.getMonth() -
                _.getMonth() +
                ((c.getDate() < _.getDate() && !m) || (m && g(c) < g(_))
                  ? -1
                  : 0)
            );
          (u[i] = e[i] ? Math.floor(f / 12) : 0),
            (u[n] = e[n] ? f - 12 * u[i] : 0),
            (_ = new Date(_.getTime()));
          var w = _.getDate() == h,
            y = this._getDaysInMonth(
              _.getFullYear() + u[i],
              _.getMonth() + u[n]
            );
          _.getDate() > y && _.setDate(y),
            _.setFullYear(_.getFullYear() + u[i]),
            _.setMonth(_.getMonth() + u[n]),
            w && _.setDate(y);
        }
        var v = Math.floor((c.getTime() - _.getTime()) / 1e3),
          D = function (t, i) {
            (u[t] = e[t] ? Math.floor(v / i) : 0), (v -= u[t] * i);
          };
        if (
          (D(s, 604800),
          D(o, 86400),
          D(a, 3600),
          D(r, 60),
          D(l, 1),
          v > 0 && !t._since)
        )
          for (
            var C = [1, 12, 4.3482, 7, 24, 60, 60], M = l, T = 1, S = l;
            S >= i;
            S--
          )
            e[S] &&
              (u[M] >= T && ((u[M] = 0), (v = 1)),
              v > 0 && (u[S]++, (v = 0), (M = S), (T = 1))),
              (T *= C[S]);
        if (p) for (var S = i; S <= l; S++) p && u[S] ? p-- : p || (u[S] = 0);
        return u;
      },
    });
  })(jQuery);
!(function (t) {
  function e() {}
  function i(t) {
    function i(e) {
      e.prototype.option ||
        (e.prototype.option = function (e) {
          t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
        });
    }
    function n(e, i) {
      t.fn[e] = function (n) {
        if ("string" == typeof n) {
          for (
            var s = o.call(arguments, 1), a = 0, u = this.length;
            u > a;
            a++
          ) {
            var p = this[a],
              h = t.data(p, e);
            if (h)
              if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                var f = h[n].apply(h, s);
                if (void 0 !== f) return f;
              } else r("no such method '" + n + "' for " + e + " instance");
            else
              r(
                "cannot call methods on " +
                  e +
                  " prior to initialization; attempted to call '" +
                  n +
                  "'"
              );
          }
          return this;
        }
        return this.each(function () {
          var o = t.data(this, e);
          o
            ? (o.option(n), o._init())
            : ((o = new i(this, n)), t.data(this, e, o));
        });
      };
    }
    if (t) {
      var r =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            };
      return (
        (t.bridget = function (t, e) {
          i(e), n(t, e);
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
      if (t instanceof RegExp) {
        e = {};
        for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
      } else e = o[t] || (o[t] = []);
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
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
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
          r.hasOwnProperty(n) &&
            ((o = e(r[n], i)), -1 !== o && r[n].splice(o, 1));
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
          i = typeof t,
          o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
          for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
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
              (i = s[n][o]),
                i.once === !0 && this.removeListener(t, i.listener),
                (r = i.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
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
          if (((e = i[n] + t), "string" == typeof o[e])) return e;
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
      var e = parseFloat(t),
        i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function i() {}
    function o() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          i = s.length;
        i > e;
        e++
      ) {
        var o = s[e];
        t[o] = 0;
      }
      return t;
    }
    function n(i) {
      function n() {
        if (!d) {
          d = !0;
          var o = t.getComputedStyle;
          if (
            ((p = (function () {
              var t = o
                ? function (t) {
                    return o(t, null);
                  }
                : function (t) {
                    return t.currentStyle;
                  };
              return function (e) {
                var i = t(e);
                return (
                  i ||
                    r(
                      "Style returned " +
                        i +
                        ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                  i
                );
              };
            })()),
            (h = i("boxSizing")))
          ) {
            var n = document.createElement("div");
            (n.style.width = "200px"),
              (n.style.padding = "1px 2px 3px 4px"),
              (n.style.borderStyle = "solid"),
              (n.style.borderWidth = "1px 2px 3px 4px"),
              (n.style[h] = "border-box");
            var s = document.body || document.documentElement;
            s.appendChild(n);
            var a = p(n);
            (f = 200 === e(a.width)), s.removeChild(n);
          }
        }
      }
      function a(t) {
        if (
          (n(),
          "string" == typeof t && (t = document.querySelector(t)),
          t && "object" == typeof t && t.nodeType)
        ) {
          var i = p(t);
          if ("none" === i.display) return o();
          var r = {};
          (r.width = t.offsetWidth), (r.height = t.offsetHeight);
          for (
            var a = (r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h])),
              d = 0,
              l = s.length;
            l > d;
            d++
          ) {
            var c = s[d],
              y = i[c];
            y = u(t, y);
            var m = parseFloat(y);
            r[c] = isNaN(m) ? 0 : m;
          }
          var g = r.paddingLeft + r.paddingRight,
            v = r.paddingTop + r.paddingBottom,
            _ = r.marginLeft + r.marginRight,
            I = r.marginTop + r.marginBottom,
            z = r.borderLeftWidth + r.borderRightWidth,
            L = r.borderTopWidth + r.borderBottomWidth,
            x = a && f,
            E = e(i.width);
          E !== !1 && (r.width = E + (x ? 0 : g + z));
          var b = e(i.height);
          return (
            b !== !1 && (r.height = b + (x ? 0 : v + L)),
            (r.innerWidth = r.width - (g + z)),
            (r.innerHeight = r.height - (v + L)),
            (r.outerWidth = r.width + _),
            (r.outerHeight = r.height + I),
            r
          );
        }
      }
      function u(e, i) {
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
      var p,
        h,
        f,
        d = !1;
      return a;
    }
    var r =
        "undefined" == typeof console
          ? i
          : function (t) {
              console.error(t);
            },
      s = [
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
          n
        )
      : "object" == typeof exports
      ? (module.exports = n(require("desandro-get-style-property")))
      : (t.getSize = n(t.getStyleProperty));
  })(window),
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
      for (var t = 0, i = s.length; i > t; t++) {
        var o = s[t];
        o();
      }
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
  (function (t) {
    function e(t, e) {
      return t[s](e);
    }
    function i(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t);
      }
    }
    function o(t, e) {
      i(t);
      for (
        var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length;
        r > n;
        n++
      )
        if (o[n] === t) return !0;
      return !1;
    }
    function n(t, o) {
      return i(t), e(t, o);
    }
    var r,
      s = (function () {
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (
          var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length;
          o > i;
          i++
        ) {
          var n = e[i],
            r = n + "MatchesSelector";
          if (t[r]) return r;
        }
      })();
    if (s) {
      var a = document.createElement("div"),
        u = e(a, "div");
      r = u ? e : n;
    } else r = o;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return r;
        })
      : "object" == typeof exports
      ? (module.exports = r)
      : (window.matchesSelector = r);
  })(Element.prototype),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["doc-ready/doc-ready", "matches-selector/matches-selector"],
          function (i, o) {
            return e(t, i, o);
          }
        )
      : "object" == typeof exports
      ? (module.exports = e(
          t,
          require("doc-ready"),
          require("desandro-matches-selector")
        ))
      : (t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector));
  })(window, function (t, e, i) {
    var o = {};
    (o.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (o.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var n = Object.prototype.toString;
    (o.isArray = function (t) {
      return "[object Array]" == n.call(t);
    }),
      (o.makeArray = function (t) {
        var e = [];
        if (o.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (o.indexOf = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          }),
      (o.removeFrom = function (t, e) {
        var i = o.indexOf(t, e);
        -1 != i && t.splice(i, 1);
      }),
      (o.isElement =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 == t.nodeType &&
                "string" == typeof t.nodeName
              );
            }),
      (o.setText = (function () {
        function t(t, i) {
          (e =
            e ||
            (void 0 !== document.documentElement.textContent
              ? "textContent"
              : "innerText")),
            (t[e] = i);
        }
        var e;
        return t;
      })()),
      (o.getParent = function (t, e) {
        for (; t != document.body; )
          if (((t = t.parentNode), i(t, e))) return t;
      }),
      (o.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (o.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (o.filterFindElements = function (t, e) {
        t = o.makeArray(t);
        for (var n = [], r = 0, s = t.length; s > r; r++) {
          var a = t[r];
          if (o.isElement(a))
            if (e) {
              i(a, e) && n.push(a);
              for (
                var u = a.querySelectorAll(e), p = 0, h = u.length;
                h > p;
                p++
              )
                n.push(u[p]);
            } else n.push(a);
        }
        return n;
      }),
      (o.debounceMethod = function (t, e, i) {
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          t && clearTimeout(t);
          var e = arguments,
            r = this;
          this[n] = setTimeout(function () {
            o.apply(r, e), delete r[n];
          }, i || 100);
        };
      }),
      (o.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var r = t.console;
    return (
      (o.htmlInit = function (i, n) {
        e(function () {
          for (
            var e = o.toDashed(n),
              s = document.querySelectorAll(".js-" + e),
              a = "data-" + e + "-options",
              u = 0,
              p = s.length;
            p > u;
            u++
          ) {
            var h,
              f = s[u],
              d = f.getAttribute(a);
            try {
              h = d && JSON.parse(d);
            } catch (t) {
              r &&
                r.error(
                  "Error parsing " +
                    a +
                    " on " +
                    f.nodeName.toLowerCase() +
                    (f.id ? "#" + f.id : "") +
                    ": " +
                    t
                );
              continue;
            }
            var l = new i(f, h),
              c = t.jQuery;
            c && c.data(f, n, l);
          }
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
            "fizzy-ui-utils/utils",
          ],
          function (i, o, n, r) {
            return e(t, i, o, n, r);
          }
        )
      : "object" == typeof exports
      ? (module.exports = e(
          t,
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property"),
          require("fizzy-ui-utils")
        ))
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = e(
          t,
          t.EventEmitter,
          t.getSize,
          t.getStyleProperty,
          t.fizzyUIUtils
        )));
  })(window, function (t, e, i, o, n) {
    function r(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function s(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var a = t.getComputedStyle,
      u = a
        ? function (t) {
            return a(t, null);
          }
        : function (t) {
            return t.currentStyle;
          },
      p = o("transition"),
      h = o("transform"),
      f = p && h,
      d = !!o("perspective"),
      l = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend",
      }[p],
      c = [
        "transform",
        "transition",
        "transitionDuration",
        "transitionProperty",
      ],
      y = (function () {
        for (var t = {}, e = 0, i = c.length; i > e; e++) {
          var n = c[e],
            r = o(n);
          r && r !== n && (t[n] = r);
        }
        return t;
      })();
    n.extend(s.prototype, e.prototype),
      (s.prototype._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (s.prototype.getSize = function () {
        this.size = i(this.element);
      }),
      (s.prototype.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = y[i] || i;
          e[o] = t[i];
        }
      }),
      (s.prototype.getPosition = function () {
        var t = u(this.element),
          e = this.layout.options,
          i = e.isOriginLeft,
          o = e.isOriginTop,
          n = parseInt(t[i ? "left" : "right"], 10),
          r = parseInt(t[o ? "top" : "bottom"], 10);
        (n = isNaN(n) ? 0 : n), (r = isNaN(r) ? 0 : r);
        var s = this.layout.size;
        (n -= i ? s.paddingLeft : s.paddingRight),
          (r -= o ? s.paddingTop : s.paddingBottom),
          (this.position.x = n),
          (this.position.y = r);
      }),
      (s.prototype.layoutPosition = function () {
        var t = this.layout.size,
          e = this.layout.options,
          i = {},
          o = e.isOriginLeft ? "paddingLeft" : "paddingRight",
          n = e.isOriginLeft ? "left" : "right",
          r = e.isOriginLeft ? "right" : "left",
          s = this.position.x + t[o];
        (s =
          e.percentPosition && !e.isHorizontal
            ? 100 * (s / t.width) + "%"
            : s + "px"),
          (i[n] = s),
          (i[r] = "");
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
          u = e.isOriginTop ? "top" : "bottom",
          p = e.isOriginTop ? "bottom" : "top",
          h = this.position.y + t[a];
        (h =
          e.percentPosition && e.isHorizontal
            ? 100 * (h / t.height) + "%"
            : h + "px"),
          (i[u] = h),
          (i[p] = ""),
          this.css(i),
          this.emitEvent("layout", [this]);
      });
    var m = d
      ? function (t, e) {
          return "translate3d(" + t + "px, " + e + "px, 0)";
        }
      : function (t, e) {
          return "translate(" + t + "px, " + e + "px)";
        };
    (s.prototype._transitionTo = function (t, e) {
      this.getPosition();
      var i = this.position.x,
        o = this.position.y,
        n = parseInt(t, 10),
        r = parseInt(e, 10),
        s = n === this.position.x && r === this.position.y;
      if ((this.setPosition(t, e), s && !this.isTransitioning))
        return void this.layoutPosition();
      var a = t - i,
        u = e - o,
        p = {},
        h = this.layout.options;
      (a = h.isOriginLeft ? a : -a),
        (u = h.isOriginTop ? u : -u),
        (p.transform = m(a, u)),
        this.transition({
          to: p,
          onTransitionEnd: { transform: this.layoutPosition },
          isCleaning: !0,
        });
    }),
      (s.prototype.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (s.prototype.moveTo = f ? s.prototype._transitionTo : s.prototype.goTo),
      (s.prototype.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (s.prototype._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (s.prototype._transition = function (t) {
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
    var g = h && n.toDashed(h) + ",opacity";
    (s.prototype.enableTransition = function () {
      this.isTransitioning ||
        (this.css({
          transitionProperty: g,
          transitionDuration: this.layout.options.transitionDuration,
        }),
        this.element.addEventListener(l, this, !1));
    }),
      (s.prototype.transition =
        s.prototype[p ? "_transition" : "_nonTransition"]),
      (s.prototype.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (s.prototype.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var v = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform",
    };
    (s.prototype.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = v[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          r(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        ) {
          var o = e.onEnd[i];
          o.call(this), delete e.onEnd[i];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (s.prototype.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(l, this, !1),
          (this.isTransitioning = !1);
      }),
      (s.prototype._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var _ = { transitionProperty: "", transitionDuration: "" };
    return (
      (s.prototype.removeTransitionStyles = function () {
        this.css(_);
      }),
      (s.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (s.prototype.remove = function () {
        if (!p || !parseFloat(this.layout.options.transitionDuration))
          return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function () {
          t.removeElem();
        }),
          this.hide();
      }),
      (s.prototype.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (s.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (s.prototype.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (s.prototype.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (s.prototype.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (s.prototype.destroy = function () {
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
      s
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, r, s) {
            return e(t, i, o, n, r, s);
          }
        )
      : "object" == typeof exports
      ? (module.exports = e(
          t,
          require("eventie"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.eventie,
          t.EventEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n, r) {
    function s(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          a &&
          a.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        u && (this.$element = u(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var o = ++h;
      (this.element.outlayerGUID = o),
        (f[o] = this),
        this._create(),
        this.options.isInitLayout && this.layout();
    }
    var a = t.console,
      u = t.jQuery,
      p = function () {},
      h = 0,
      f = {};
    return (
      (s.namespace = "outlayer"),
      (s.Item = r),
      (s.defaults = {
        containerStyle: { position: "relative" },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      }),
      n.extend(s.prototype, i.prototype),
      (s.prototype.option = function (t) {
        n.extend(this.options, t);
      }),
      (s.prototype._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle),
          this.options.isResizeBound && this.bindResize();
      }),
      (s.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (s.prototype._itemize = function (t) {
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
      (s.prototype._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (s.prototype.getItemElements = function () {
        for (var t = [], e = 0, i = this.items.length; i > e; e++)
          t.push(this.items[e].element);
        return t;
      }),
      (s.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        this.layoutItems(this.items, t), (this._isLayoutInited = !0);
      }),
      (s.prototype._init = s.prototype.layout),
      (s.prototype._resetLayout = function () {
        this.getSize();
      }),
      (s.prototype.getSize = function () {
        this.size = o(this.element);
      }),
      (s.prototype._getMeasurement = function (t, e) {
        var i,
          r = this.options[t];
        r
          ? ("string" == typeof r
              ? (i = this.element.querySelector(r))
              : n.isElement(r) && (i = r),
            (this[t] = i ? o(i)[e] : r))
          : (this[t] = 0);
      }),
      (s.prototype.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (s.prototype._getItemsForLayout = function (t) {
        for (var e = [], i = 0, o = t.length; o > i; i++) {
          var n = t[i];
          n.isIgnored || e.push(n);
        }
        return e;
      }),
      (s.prototype._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          for (var i = [], o = 0, n = t.length; n > o; o++) {
            var r = t[o],
              s = this._getItemLayoutPosition(r);
            (s.item = r), (s.isInstant = e || r.isLayoutInstant), i.push(s);
          }
          this._processLayoutQueue(i);
        }
      }),
      (s.prototype._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (s.prototype._processLayoutQueue = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
          var o = t[e];
          this._positionItem(o.item, o.x, o.y, o.isInstant);
        }
      }),
      (s.prototype._positionItem = function (t, e, i, o) {
        o ? t.goTo(e, i) : t.moveTo(e, i);
      }),
      (s.prototype._postLayout = function () {
        this.resizeContainer();
      }),
      (s.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (s.prototype._getContainerSize = p),
      (s.prototype._setContainerMeasure = function (t, e) {
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
      (s.prototype._emitCompleteOnItems = function (t, e) {
        function i() {
          n.emitEvent(t + "Complete", [e]);
        }
        function o() {
          s++, s === r && i();
        }
        var n = this,
          r = e.length;
        if (!e || !r) return void i();
        for (var s = 0, a = 0, u = e.length; u > a; a++) {
          var p = e[a];
          p.once(t, o);
        }
      }),
      (s.prototype.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (s.prototype.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (s.prototype.stamp = function (t) {
        if ((t = this._find(t))) {
          this.stamps = this.stamps.concat(t);
          for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            this.ignore(o);
          }
        }
      }),
      (s.prototype.unstamp = function (t) {
        if ((t = this._find(t)))
          for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            n.removeFrom(this.stamps, o), this.unignore(o);
          }
      }),
      (s.prototype._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (s.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          for (var t = 0, e = this.stamps.length; e > t; t++) {
            var i = this.stamps[t];
            this._manageStamp(i);
          }
        }
      }),
      (s.prototype._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (s.prototype._manageStamp = p),
      (s.prototype._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          i = this._boundingRect,
          n = o(t),
          r = {
            left: e.left - i.left - n.marginLeft,
            top: e.top - i.top - n.marginTop,
            right: i.right - e.right - n.marginRight,
            bottom: i.bottom - e.bottom - n.marginBottom,
          };
        return r;
      }),
      (s.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (s.prototype.bindResize = function () {
        this.isResizeBound ||
          (e.bind(t, "resize", this), (this.isResizeBound = !0));
      }),
      (s.prototype.unbindResize = function () {
        this.isResizeBound && e.unbind(t, "resize", this),
          (this.isResizeBound = !1);
      }),
      (s.prototype.onresize = function () {
        function t() {
          e.resize(), delete e.resizeTimeout;
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100);
      }),
      (s.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (s.prototype.needsResizeLayout = function () {
        var t = o(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (s.prototype.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (s.prototype.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (s.prototype.prepended = function (t) {
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
      (s.prototype.reveal = function (t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          var o = t[i];
          o.reveal();
        }
      }),
      (s.prototype.hide = function (t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          var o = t[i];
          o.hide();
        }
      }),
      (s.prototype.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (s.prototype.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (s.prototype.getItem = function (t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
          var o = this.items[e];
          if (o.element === t) return o;
        }
      }),
      (s.prototype.getItems = function (t) {
        t = n.makeArray(t);
        for (var e = [], i = 0, o = t.length; o > i; i++) {
          var r = t[i],
            s = this.getItem(r);
          s && e.push(s);
        }
        return e;
      }),
      (s.prototype.remove = function (t) {
        var e = this.getItems(t);
        if ((this._emitCompleteOnItems("remove", e), e && e.length))
          for (var i = 0, o = e.length; o > i; i++) {
            var r = e[i];
            r.remove(), n.removeFrom(this.items, r);
          }
      }),
      (s.prototype.destroy = function () {
        var t = this.element.style;
        (t.height = ""), (t.position = ""), (t.width = "");
        for (var e = 0, i = this.items.length; i > e; e++) {
          var o = this.items[e];
          o.destroy();
        }
        this.unbindResize();
        var n = this.element.outlayerGUID;
        delete f[n],
          delete this.element.outlayerGUID,
          u && u.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        function i() {
          s.apply(this, arguments);
        }
        return (
          Object.create
            ? (i.prototype = Object.create(s.prototype))
            : n.extend(i.prototype, s.prototype),
          (i.prototype.constructor = i),
          (i.defaults = n.extend({}, s.defaults)),
          n.extend(i.defaults, e),
          (i.prototype.settings = {}),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = function () {
            r.apply(this, arguments);
          }),
          (i.Item.prototype = new r()),
          n.htmlInit(i, t),
          u && u.bridget && u.bridget(t, i),
          i
        );
      }),
      (s.Item = r),
      s
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
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
  }),
  (function (t, e) {
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
  })(window, function (t, e) {
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
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
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
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry/masonry",
          ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"],
          e
        )
      : "object" == typeof exports
      ? (module.exports = e(
          require("outlayer"),
          require("get-size"),
          require("fizzy-ui-utils")
        ))
      : (t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils));
  })(window, function (t, e, i) {
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
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          r = n / o,
          s = o - (n % o),
          a = s && 1 > s ? "round" : "floor";
        (r = Math[a](r)), (this.cols = Math.max(r, 1));
      }),
      (o.prototype.getContainerWidth = function () {
        var t = this.options.isFitWidth
            ? this.element.parentNode
            : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (o.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          o = e && 1 > e ? "round" : "ceil",
          n = Math[o](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var r = this._getColGroup(n),
            s = Math.min.apply(Math, r),
            a = i.indexOf(r, s),
            u = { x: this.columnWidth * a, y: s },
            p = s + t.size.outerHeight,
            h = this.cols + 1 - r.length,
            f = 0;
          h > f;
          f++
        )
          this.colYs[a + f] = p;
        return u;
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
          var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight,
            p = s;
          a >= p;
          p++
        )
          this.colYs[p] = Math.max(u, this.colYs[p]);
      }),
      (o.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
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
  }),
  (function (t, e) {
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
  })(window, function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var o = t.create("masonry"),
      n = o.prototype._getElementOffset,
      r = o.prototype.layout,
      s = o.prototype._getMeasurement;
    i(o.prototype, e.prototype),
      (o.prototype._getElementOffset = n),
      (o.prototype.layout = r),
      (o.prototype._getMeasurement = s);
    var a = o.prototype.measureColumns;
    o.prototype.measureColumns = function () {
      (this.items = this.isotope.filteredItems), a.call(this);
    };
    var u = o.prototype._manageStamp;
    return (
      (o.prototype._manageStamp = function () {
        (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
          (this.options.isOriginTop = this.isotope.options.isOriginTop),
          u.apply(this, arguments);
      }),
      o
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
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
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
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
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
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
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (i, o, n, r, s, a) {
            return e(t, i, o, n, r, s, a);
          }
        )
      : "object" == typeof exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, r, s) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0, r = t.length; r > n; n++) {
          var s = t[n],
            a = i.sortData[s],
            u = o.sortData[s];
          if (a > u || u > a) {
            var p = void 0 !== e[s] ? e[s] : e,
              h = p ? 1 : -1;
            return (a > u ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      p = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      h = document.documentElement,
      f = h.textContent
        ? function (t) {
            return t.textContent;
          }
        : function (t) {
            return t.innerText;
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = r),
      (d.LayoutMode = s),
      (d.prototype._create = function () {
        (this.itemGUID = 0),
          (this._sorters = {}),
          this._getSorters(),
          e.prototype._create.call(this),
          (this.modes = {}),
          (this.filteredItems = this.items),
          (this.sortHistory = ["original-order"]);
        for (var t in s.modes) this._initLayoutMode(t);
      }),
      (d.prototype.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (d.prototype._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments),
            i = 0,
            o = t.length;
          o > i;
          i++
        ) {
          var n = t[i];
          n.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (d.prototype._initLayoutMode = function (t) {
        var e = s.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (d.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout
          ? void this.arrange()
          : void this._layout();
      }),
      (d.prototype._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (d.prototype.arrange = function (t) {
        function e() {
          o.reveal(i.needReveal), o.hide(i.needHide);
        }
        this.option(t), this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var o = this;
        this._bindArrangeComplete(),
          this._isInstant ? this._noTransition(e) : e(),
          this._sort(),
          this._layout();
      }),
      (d.prototype._init = d.prototype.arrange),
      (d.prototype._getIsInstant = function () {
        var t =
          void 0 !== this.options.isLayoutInstant
            ? this.options.isLayoutInstant
            : !this._isLayoutInited;
        return (this._isInstant = t), t;
      }),
      (d.prototype._bindArrangeComplete = function () {
        function t() {
          e && i && o && n.emitEvent("arrangeComplete", [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (d.prototype._filter = function (t) {
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
          var u = t[s];
          if (!u.isIgnored) {
            var p = r(u);
            p && i.push(u),
              p && u.isHidden ? o.push(u) : p || u.isHidden || n.push(u);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (d.prototype._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (d.prototype.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (d.prototype._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = l(i);
        }
      }),
      (d.prototype._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var l = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = p(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          r = n && n[1],
          s = e(r, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(s(t));
            }
          : function (t) {
              return t && s(t);
            });
      }
      function e(t, e) {
        var i;
        return (i = t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && f(i);
            });
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (d.prototype._sort = function () {
        var t = this.options.sortBy;
        if (t) {
          var e = [].concat.apply(t, this.sortHistory),
            i = a(e, this.options.sortAscending);
          this.filteredItems.sort(i),
            t != this.sortHistory[0] && this.sortHistory.unshift(t);
        }
      }),
      (d.prototype._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (d.prototype._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (d.prototype._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (d.prototype._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (d.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (d.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (d.prototype.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (d.prototype.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (d.prototype._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (d.prototype.insert = function (t) {
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
    var c = d.prototype.remove;
    return (
      (d.prototype.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        var i = e && e.length;
        if (i)
          for (var o = 0; i > o; o++) {
            var r = e[o];
            n.removeFrom(this.filteredItems, r);
          }
      }),
      (d.prototype.shuffle = function () {
        for (var t = 0, e = this.items.length; e > t; t++) {
          var i = this.items[t];
          i.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (d.prototype._noTransition = function (t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return (this.options.transitionDuration = e), i;
      }),
      (d.prototype.getFilteredItemElements = function () {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
          t.push(this.filteredItems[e].element);
        return t;
      }),
      d
    );
  });
!(function (t, e, i, s) {
  function n(e, i) {
    (this.settings = null),
      (this.options = t.extend({}, n.Defaults, i)),
      (this.$element = t(e)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      t.each(
        ["onResize", "onThrottledResize"],
        t.proxy(function (e, i) {
          this._handlers[i] = t.proxy(this[i], this);
        }, this)
      ),
      t.each(
        n.Plugins,
        t.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
        }, this)
      ),
      t.each(
        n.Workers,
        t.proxy(function (e, i) {
          this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (n.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: e,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (n.Type = { Event: "event", State: "state" }),
    (n.Plugins = {}),
    (n.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            s = this.settings.rtl,
            n = {
              width: "auto",
              "margin-left": s ? e : "",
              "margin-right": s ? "" : e,
            };
          !i && this.$stage.children().css(n), (t.css = n);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            i = null,
            s = this._items.length,
            n = !this.settings.autoWidth,
            o = [];
          for (t.items = { merge: !1, width: e }; s--; )
            (i = this._mergers[s]),
              (i =
                (this.settings.mergeFit && Math.min(i, this.settings.items)) ||
                i),
              (t.items.merge = i > 1 || t.items.merge),
              (o[s] = n ? e * i : this._items[s].width());
          this._widths = o;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var e = [],
            i = this._items,
            s = this.settings,
            n = Math.max(2 * s.items, 4),
            o = 2 * Math.ceil(i.length / 2),
            r = s.loop && i.length ? (s.rewind ? n : Math.max(n, o)) : 0,
            a = "",
            h = "";
          for (r /= 2; r--; )
            e.push(this.normalize(e.length / 2, !0)),
              (a += i[e[e.length - 1]][0].outerHTML),
              e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
              (h = i[e[e.length - 1]][0].outerHTML + h);
          (this._clones = e),
            t(a).addClass("cloned").appendTo(this.$stage),
            t(h).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var t = this.settings.rtl ? 1 : -1,
              e = this._clones.length + this._items.length,
              i = -1,
              s = 0,
              n = 0,
              o = [];
            ++i < e;

          )
            (s = o[i - 1] || 0),
              (n = this._widths[this.relative(i)] + this.settings.margin),
              o.push(s + n * t);
          this._coordinates = o;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
              width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
              "padding-left": t || "",
              "padding-right": t || "",
            };
          this.$stage.css(i);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            s = this.$stage.children();
          if (i && t.items.merge)
            for (; e--; )
              (t.css.width = this._widths[this.relative(e)]),
                s.eq(e).css(t.css);
          else i && ((t.css.width = t.items.width), s.css(t.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          (t.current = t.current ? this.$stage.children().index(t.current) : 0),
            (t.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), t.current)
            )),
            this.reset(t.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          var t,
            e,
            i,
            s,
            n = this.settings.rtl ? 1 : -1,
            o = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + o,
            a = r + this.width() * n,
            h = [];
          for (i = 0, s = this._coordinates.length; s > i; i++)
            (t = this._coordinates[i - 1] || 0),
              (e = Math.abs(this._coordinates[i]) + o * n),
              ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                (this.op(e, "<", r) && this.op(e, ">", a))) &&
                h.push(i);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + h.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage.children().eq(this.current()).addClass("center"));
        },
      },
    ]),
    (n.prototype.initialize = function () {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var e, i, n;
        (e = this.$element.find("img")),
          (i = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : s),
          (n = this.$element.children(i).width()),
          e.length && 0 >= n && this.preloadAutoWidthImages(e);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = t(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (n.prototype.setup = function () {
      var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        n = null;
      i
        ? (t.each(i, function (t) {
            e >= t && t > s && (s = Number(t));
          }),
          (n = t.extend({}, this.options, i[s])),
          "function" == typeof n.stagePadding &&
            (n.stagePadding = n.stagePadding()),
          delete n.responsive,
          n.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + s
                )
            ))
        : (n = t.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: n } }),
        (this._breakpoint = s),
        (this.settings = n),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (n.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (n.prototype.prepare = function (e) {
      var i = this.trigger("prepare", { content: e });
      return (
        i.data ||
          (i.data = t("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(e)),
        this.trigger("prepared", { content: i.data }),
        i.data
      );
    }),
    (n.prototype.update = function () {
      for (
        var e = 0,
          i = this._pipe.length,
          s = t.proxy(function (t) {
            return this[t];
          }, this._invalidated),
          n = {};
        i > e;

      )
        (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) &&
          this._pipe[e].run(n),
          e++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (n.prototype.width = function (t) {
      switch ((t = t || n.Width.Default)) {
        case n.Width.Inner:
        case n.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (n.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (n.prototype.onThrottledResize = function () {
      e.clearTimeout(this.resizeTimer),
        (this.resizeTimer = e.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (n.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(":visible") &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (n.prototype.registerEventHandlers = function () {
      t.support.transition &&
        this.$stage.on(
          t.support.transition.end + ".owl.core",
          t.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(e, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            t.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            t.proxy(this.onDragEnd, this)
          ));
    }),
    (n.prototype.onDragStart = function (e) {
      var s = null;
      3 !== e.which &&
        (t.support.transform
          ? ((s = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (s = {
              x: s[16 === s.length ? 12 : 4],
              y: s[16 === s.length ? 13 : 5],
            }))
          : ((s = this.$stage.position()),
            (s = {
              x: this.settings.rtl
                ? s.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : s.left,
              y: s.top,
            })),
        this.is("animating") &&
          (t.support.transform ? this.animate(s.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === e.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = t(e.target)),
        (this._drag.stage.start = s),
        (this._drag.stage.current = s),
        (this._drag.pointer = this.pointer(e)),
        t(i).on(
          "mouseup.owl.core touchend.owl.core",
          t.proxy(this.onDragEnd, this)
        ),
        t(i).one(
          "mousemove.owl.core touchmove.owl.core",
          t.proxy(function (e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on(
              "mousemove.owl.core touchmove.owl.core",
              t.proxy(this.onDragMove, this)
            ),
              (Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) ||
                (e.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (n.prototype.onDragMove = function (t) {
      var e = null,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, n);
      this.is("dragging") &&
        (t.preventDefault(),
        this.settings.loop
          ? ((e = this.coordinates(this.minimum())),
            (i = this.coordinates(this.maximum() + 1) - e),
            (o.x = ((((o.x - e) % i) + i) % i) + e))
          : ((e = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (i = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
            (o.x = Math.max(Math.min(o.x, e + s), i + s))),
        (this._drag.stage.current = o),
        this.animate(o.x));
    }),
    (n.prototype.onDragEnd = function (e) {
      var s = this.difference(this._drag.pointer, this.pointer(e)),
        n = this._drag.stage.current,
        o = (s.x > 0) ^ this.settings.rtl ? "left" : "right";
      t(i).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== s.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = o),
          (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (n.prototype.closest = function (e, i) {
      var s = -1,
        n = 30,
        o = this.width(),
        r = this.coordinates();
      return (
        this.settings.freeDrag ||
          t.each(
            r,
            t.proxy(function (t, a) {
              return (
                "left" === i && e > a - n && a + n > e
                  ? (s = t)
                  : "right" === i && e > a - o - n && a - o + n > e
                  ? (s = t + 1)
                  : this.op(e, "<", a) &&
                    this.op(e, ">", r[t + 1] || a - o) &&
                    (s = "left" === i ? t + 1 : t),
                -1 === s
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(e, ">", r[this.minimum()])
            ? (s = e = this.minimum())
            : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())),
        s
      );
    }),
    (n.prototype.animate = function (e) {
      var i = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        i && (this.enter("animating"), this.trigger("translate")),
        t.support.transform3d && t.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + e + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s",
            })
          : i
          ? this.$stage.animate(
              { left: e + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              t.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: e + "px" });
    }),
    (n.prototype.is = function (t) {
      return this._states.current[t] && this._states.current[t] > 0;
    }),
    (n.prototype.current = function (t) {
      if (t === s) return this._current;
      if (0 === this._items.length) return s;
      if (((t = this.normalize(t)), this._current !== t)) {
        var e = this.trigger("change", {
          property: { name: "position", value: t },
        });
        e.data !== s && (t = this.normalize(e.data)),
          (this._current = t),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current },
          });
      }
      return this._current;
    }),
    (n.prototype.invalidate = function (e) {
      return (
        "string" === t.type(e) &&
          ((this._invalidated[e] = !0),
          this.is("valid") && this.leave("valid")),
        t.map(this._invalidated, function (t, e) {
          return e;
        })
      );
    }),
    (n.prototype.reset = function (t) {
      (t = this.normalize(t)),
        t !== s &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
    }),
    (n.prototype.normalize = function (t, e) {
      var i = this._items.length,
        n = e ? 0 : this._clones.length;
      return (
        !this.isNumeric(t) || 1 > i
          ? (t = s)
          : (0 > t || t >= i + n) &&
            (t = ((((t - n / 2) % i) + i) % i) + n / 2),
        t
      );
    }),
    (n.prototype.relative = function (t) {
      return (t -= this._clones.length / 2), this.normalize(t, !0);
    }),
    (n.prototype.maximum = function (t) {
      var e,
        i,
        s,
        n = this.settings,
        o = this._coordinates.length;
      if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
      else if (n.autoWidth || n.merge) {
        for (
          e = this._items.length,
            i = this._items[--e].width(),
            s = this.$element.width();
          e-- &&
          ((i += this._items[e].width() + this.settings.margin), !(i > s));

        );
        o = e + 1;
      } else
        o = n.center ? this._items.length - 1 : this._items.length - n.items;
      return t && (o -= this._clones.length / 2), Math.max(o, 0);
    }),
    (n.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2;
    }),
    (n.prototype.items = function (t) {
      return t === s
        ? this._items.slice()
        : ((t = this.normalize(t, !0)), this._items[t]);
    }),
    (n.prototype.mergers = function (t) {
      return t === s
        ? this._mergers.slice()
        : ((t = this.normalize(t, !0)), this._mergers[t]);
    }),
    (n.prototype.clones = function (e) {
      var i = this._clones.length / 2,
        n = i + this._items.length,
        o = function (t) {
          return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2;
        };
      return e === s
        ? t.map(this._clones, function (t, e) {
            return o(e);
          })
        : t.map(this._clones, function (t, i) {
            return t === e ? o(i) : null;
          });
    }),
    (n.prototype.speed = function (t) {
      return t !== s && (this._speed = t), this._speed;
    }),
    (n.prototype.coordinates = function (e) {
      var i,
        n = 1,
        o = e - 1;
      return e === s
        ? t.map(
            this._coordinates,
            t.proxy(function (t, e) {
              return this.coordinates(e);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((n = -1), (o = e + 1)),
              (i = this._coordinates[e]),
              (i += ((this.width() - i + (this._coordinates[o] || 0)) / 2) * n))
            : (i = this._coordinates[o] || 0),
          (i = Math.ceil(i)));
    }),
    (n.prototype.duration = function (t, e, i) {
      return 0 === i
        ? 0
        : Math.min(Math.max(Math.abs(e - t), 1), 6) *
            Math.abs(i || this.settings.smartSpeed);
    }),
    (n.prototype.to = function (t, e) {
      var i = this.current(),
        s = null,
        n = t - this.relative(i),
        o = (n > 0) - (0 > n),
        r = this._items.length,
        a = this.minimum(),
        h = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
          (t = i + n),
          (s = ((((t - a) % r) + r) % r) + a),
          s !== t &&
            h >= s - n &&
            s - n > 0 &&
            ((i = s - n), (t = s), this.reset(i)))
        : this.settings.rewind
        ? ((h += 1), (t = ((t % h) + h) % h))
        : (t = Math.max(a, Math.min(h, t))),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.$element.is(":visible") && this.update();
    }),
    (n.prototype.next = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) + 1, t);
    }),
    (n.prototype.prev = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) - 1, t);
    }),
    (n.prototype.onTransitionEnd = function (t) {
      return (
        (t === s ||
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) ===
            this.$stage.get(0))) &&
        (this.leave("animating"), void this.trigger("translated"))
      );
    }),
    (n.prototype.viewport = function () {
      var s;
      if (this.options.responsiveBaseElement !== e)
        s = t(this.options.responsiveBaseElement).width();
      else if (e.innerWidth) s = e.innerWidth;
      else {
        if (!i.documentElement || !i.documentElement.clientWidth)
          throw "Can not detect viewport width.";
        s = i.documentElement.clientWidth;
      }
      return s;
    }),
    (n.prototype.replace = function (e) {
      this.$stage.empty(),
        (this._items = []),
        e && (e = e instanceof jQuery ? e : t(e)),
        this.settings.nestedItemSelector &&
          (e = e.find("." + this.settings.nestedItemSelector)),
        e
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            t.proxy(function (t, e) {
              (e = this.prepare(e)),
                this.$stage.append(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                    e
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (n.prototype.add = function (e, i) {
      var n = this.relative(this._current);
      (i = i === s ? this._items.length : this.normalize(i, !0)),
        (e = e instanceof jQuery ? e : t(e)),
        this.trigger("add", { content: e, position: i }),
        (e = this.prepare(e)),
        0 === this._items.length || i === this._items.length
          ? (0 === this._items.length && this.$stage.append(e),
            0 !== this._items.length && this._items[i - 1].after(e),
            this._items.push(e),
            this._mergers.push(
              1 *
                e
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[i].before(e),
            this._items.splice(i, 0, e),
            this._mergers.splice(
              i,
              0,
              1 *
                e
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[n] && this.reset(this._items[n].index()),
        this.invalidate("items"),
        this.trigger("added", { content: e, position: i });
    }),
    (n.prototype.remove = function (t) {
      (t = this.normalize(t, !0)),
        t !== s &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
    }),
    (n.prototype.preloadAutoWidthImages = function (e) {
      e.each(
        t.proxy(function (e, i) {
          this.enter("pre-loading"),
            (i = t(i)),
            t(new Image())
              .one(
                "load",
                t.proxy(function (t) {
                  i.attr("src", t.target.src),
                    i.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (n.prototype.destroy = function () {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        this.settings.responsive !== !1 &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize));
      for (var s in this._plugins) this._plugins[s].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (n.prototype.op = function (t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? t > i : i > t;
        case ">":
          return s ? i > t : t > i;
        case ">=":
          return s ? i >= t : t >= i;
        case "<=":
          return s ? t >= i : i >= t;
      }
    }),
    (n.prototype.on = function (t, e, i, s) {
      t.addEventListener
        ? t.addEventListener(e, i, s)
        : t.attachEvent && t.attachEvent("on" + e, i);
    }),
    (n.prototype.off = function (t, e, i, s) {
      t.removeEventListener
        ? t.removeEventListener(e, i, s)
        : t.detachEvent && t.detachEvent("on" + e, i);
    }),
    (n.prototype.trigger = function (e, i, s, o, r) {
      var a = { item: { count: this._items.length, index: this.current() } },
        h = t.camelCase(
          t
            .grep(["on", e, s], function (t) {
              return t;
            })
            .join("-")
            .toLowerCase()
        ),
        l = t.Event(
          [e, "owl", s || "carousel"].join(".").toLowerCase(),
          t.extend({ relatedTarget: this }, a, i)
        );
      return (
        this._supress[e] ||
          (t.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(l);
          }),
          this.register({ type: n.Type.Event, name: e }),
          this.$element.trigger(l),
          this.settings &&
            "function" == typeof this.settings[h] &&
            this.settings[h].call(this, l)),
        l
      );
    }),
    (n.prototype.enter = function (e) {
      t.each(
        [e].concat(this._states.tags[e] || []),
        t.proxy(function (t, e) {
          this._states.current[e] === s && (this._states.current[e] = 0),
            this._states.current[e]++;
        }, this)
      );
    }),
    (n.prototype.leave = function (e) {
      t.each(
        [e].concat(this._states.tags[e] || []),
        t.proxy(function (t, e) {
          this._states.current[e]--;
        }, this)
      );
    }),
    (n.prototype.register = function (e) {
      if (e.type === n.Type.Event) {
        if (
          (t.event.special[e.name] || (t.event.special[e.name] = {}),
          !t.event.special[e.name].owl)
        ) {
          var i = t.event.special[e.name]._default;
          (t.event.special[e.name]._default = function (t) {
            return !i ||
              !i.apply ||
              (t.namespace && -1 !== t.namespace.indexOf("owl"))
              ? t.namespace && t.namespace.indexOf("owl") > -1
              : i.apply(this, arguments);
          }),
            (t.event.special[e.name].owl = !0);
        }
      } else
        e.type === n.Type.State &&
          (this._states.tags[e.name]
            ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                e.tags
              ))
            : (this._states.tags[e.name] = e.tags),
          (this._states.tags[e.name] = t.grep(
            this._states.tags[e.name],
            t.proxy(function (i, s) {
              return t.inArray(i, this._states.tags[e.name]) === s;
            }, this)
          )));
    }),
    (n.prototype.suppress = function (e) {
      t.each(
        e,
        t.proxy(function (t, e) {
          this._supress[e] = !0;
        }, this)
      );
    }),
    (n.prototype.release = function (e) {
      t.each(
        e,
        t.proxy(function (t, e) {
          delete this._supress[e];
        }, this)
      );
    }),
    (n.prototype.pointer = function (t) {
      var i = { x: null, y: null };
      return (
        (t = t.originalEvent || t || e.event),
        (t =
          t.touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : t),
        t.pageX
          ? ((i.x = t.pageX), (i.y = t.pageY))
          : ((i.x = t.clientX), (i.y = t.clientY)),
        i
      );
    }),
    (n.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t));
    }),
    (n.prototype.difference = function (t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }),
    (t.fn.owlCarousel = function (e) {
      var i = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var s = t(this),
          o = s.data("owl.carousel");
        o ||
          ((o = new n(this, "object" == typeof e && e)),
          s.data("owl.carousel", o),
          t.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (e, i) {
              o.register({ type: n.Type.Event, name: i }),
                o.$element.on(
                  i + ".owl.carousel.core",
                  t.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([i]),
                      o[i].apply(this, [].slice.call(arguments, 1)),
                      this.release([i]));
                  }, o)
                );
            }
          )),
          "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i);
      });
    }),
    (t.fn.owlCarousel.Constructor = n);
})(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (n.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (n.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (n.prototype.destroy = function () {
        var t, i;
        e.clearInterval(this._interval);
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              )
                for (
                  var i = this._core.settings,
                    n = (i.center && Math.ceil(i.items / 2)) || i.items,
                    o = (i.center && -1 * n) || 0,
                    r =
                      (e.property && e.property.value !== s
                        ? e.property.value
                        : this._core.current()) + o,
                    a = this._core.clones().length,
                    h = t.proxy(function (t, e) {
                      this.load(e);
                    }, this);
                  o++ < n;

                )
                  this.load(a / 2 + this._core.relative(r)),
                    a && t.each(this._core.clones(this._core.relative(r)), h),
                    r++;
            }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { lazyLoad: !1 }),
      (n.prototype.load = function (i) {
        var s = this._core.$stage.children().eq(i),
          n = s && s.find(".owl-lazy");
        !n ||
          t.inArray(s.get(0), this._loaded) > -1 ||
          (n.each(
            t.proxy(function (i, s) {
              var n,
                o = t(s),
                r =
                  (e.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                  o.attr("data-src");
              this._core.trigger("load", { element: o, url: r }, "lazy"),
                o.is("img")
                  ? o
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          o.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: o, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : ((n = new Image()),
                    (n.onload = t.proxy(function () {
                      o.css({
                        "background-image": "url(" + r + ")",
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: o, url: r },
                          "lazy"
                        );
                    }, this)),
                    (n.src = r));
            }, this)
          ),
          this._loaded.push(s.get(0)));
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (n.prototype.update = function () {
        var e = this._core._current,
          i = e + this._core.settings.items,
          s = this._core.$stage.children().toArray().slice(e, i),
          n = [],
          o = 0;
        t.each(s, function (e, i) {
          n.push(t(i).height());
        }),
          (o = Math.max.apply(null, n)),
          this._core.$stage
            .parent()
            .height(o)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (n.prototype.fetch = function (t, e) {
        var i = (function () {
            return t.attr("data-vimeo-id")
              ? "vimeo"
              : t.attr("data-vzaar-id")
              ? "vzaar"
              : "youtube";
          })(),
          s =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          ((s = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          s[3].indexOf("youtu") > -1)
        )
          i = "youtube";
        else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(s[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (s = s[6]),
          (this._videos[r] = { type: i, id: s, width: n, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (n.prototype.thumbnail = function (e, i) {
        var s,
          n,
          o,
          r =
            i.width && i.height
              ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
              : "",
          a = e.find("img"),
          h = "src",
          l = "",
          c = this._core.settings,
          p = function (t) {
            (n = '<div class="owl-video-play-icon"></div>'),
              (s = c.lazyLoad
                ? '<div class="owl-video-tn ' +
                  l +
                  '" ' +
                  h +
                  '="' +
                  t +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  t +
                  ')"></div>'),
              e.after(s),
              e.after(n);
          };
        return (
          e.wrap('<div class="owl-video-wrapper"' + r + "></div>"),
          this._core.settings.lazyLoad && ((h = "data-src"), (l = "owl-lazy")),
          a.length
            ? (p(a.attr(h)), a.remove(), !1)
            : void ("youtube" === i.type
                ? ((o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"),
                  p(o))
                : "vimeo" === i.type
                ? t.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                      (o = t[0].thumbnail_large), p(o);
                    },
                  })
                : "vzaar" === i.type &&
                  t.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + i.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (t) {
                      (o = t.framegrab_url), p(o);
                    },
                  }))
        );
      }),
      (n.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (n.prototype.play = function (e) {
        var i,
          s = t(e.target),
          n = s.closest("." + this._core.settings.itemClass),
          o = this._videos[n.attr("data-video")],
          r = o.width || "100%",
          a = o.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (n = this._core.items(this._core.relative(n.index()))),
          this._core.reset(n.index()),
          "youtube" === o.type
            ? (i =
                '<iframe width="' +
                r +
                '" height="' +
                a +
                '" src="//www.youtube.com/embed/' +
                o.id +
                "?autoplay=1&v=" +
                o.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === o.type
            ? (i =
                '<iframe src="//player.vimeo.com/video/' +
                o.id +
                '?autoplay=1" width="' +
                r +
                '" height="' +
                a +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === o.type &&
              (i =
                '<iframe frameborder="0"height="' +
                a +
                '"width="' +
                r +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                o.id +
                '/player?autoplay=true"></iframe>'),
          t('<div class="owl-video-frame">' + i + "</div>").insertAfter(
            n.find(".owl-video")
          ),
          (this._playing = n.addClass("owl-video-playing")));
      }),
      (n.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (n.prototype.destroy = function () {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, n.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = s),
        (this.next = s),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (n.Defaults = { animateOut: !1, animateIn: !1 }),
      (n.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            s = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            o = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              s
                .one(t.support.animation.end, i)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            o &&
              n
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(o));
        }
      }),
      (n.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    var n = function (e) {
      (this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, n.Defaults, this._core.options));
    };
    (n.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (n.prototype.play = function (t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (n.prototype._getNextTimeout = function (s, n) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                i.hidden ||
                this._core.next(n || this._core.settings.autoplaySpeed);
            }, this),
            s || this._core.settings.autoplayTimeout
          )
        );
      }),
      (n.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (n.prototype.stop = function () {
        this._core.is("rotating") &&
          (e.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (n.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (n.prototype.destroy = function () {
        var t, e;
        this.stop();
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    "use strict";
    var n = function (e) {
      (this._core = e),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (n.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (n.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        (this._controls.$relative = (
          i.navContainer
            ? t(i.navContainer)
            : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = t("<" + i.navElement + ">")
            .addClass(i.navClass[0])
            .html(i.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              t.proxy(function (t) {
                this.prev(i.navSpeed);
              }, this)
            )),
          (this._controls.$next = t("<" + i.navElement + ">")
            .addClass(i.navClass[1])
            .html(i.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              t.proxy(function (t) {
                this.next(i.navSpeed);
              }, this)
            )),
          i.dotsData ||
            (this._templates = [
              t("<div>")
                .addClass(i.dotClass)
                .append(t("<span>"))
                .prop("outerHTML"),
            ]),
          (this._controls.$absolute = (
            i.dotsContainer
              ? t(i.dotsContainer)
              : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            t.proxy(function (e) {
              var s = t(e.target).parent().is(this._controls.$absolute)
                ? t(e.target).index()
                : t(e.target).parent().index();
              e.preventDefault(), this.to(s, i.dotsSpeed);
            }, this)
          );
        for (e in this._overrides) this._core[e] = t.proxy(this[e], this);
      }),
      (n.prototype.destroy = function () {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (n.prototype.update = function () {
        var t,
          e,
          i,
          s = this._core.clones().length / 2,
          n = s + this._core.items().length,
          o = this._core.maximum(!0),
          r = this._core.settings,
          a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if (
          ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)),
          r.dots || "page" == r.slideBy)
        )
          for (this._pages = [], t = s, e = 0, i = 0; n > t; t++) {
            if (e >= a || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(o, t - s),
                  end: t - s + a - 1,
                }),
                Math.min(o, t - s) === o)
              )
                break;
              (e = 0), ++i;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (n.prototype.draw = function () {
        var e,
          i = this._core.settings,
          s = this._core.items().length <= i.items,
          n = this._core.relative(this._core.current()),
          o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !o && n <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !o && n >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || s),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : 0 > e && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (n.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (n.prototype.getPosition = function (e) {
        var i,
          s,
          n = this._core.settings;
        return (
          "page" == n.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (s = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % s) + s) % s].start))
            : ((i = this._core.relative(this._core.current())),
              (s = this._core.items().length),
              e ? (i += n.slideBy) : (i -= n.slideBy)),
          i
        );
      }),
      (n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (n.prototype.to = function (e, i, s) {
        var n;
        !s && this._pages.length
          ? ((n = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % n) + n) % n].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    "use strict";
    var n = function (i) {
      (this._core = i),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var s = this._core.items(
                  this._core.relative(this._core.current())
                ),
                n = t
                  .map(this._hashes, function (t, e) {
                    return t === s ? e : null;
                  })
                  .join();
              if (!n || e.location.hash.slice(1) === n) return;
              e.location.hash = n;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, n.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              n = this._core.$stage.children(),
              o = this._hashes[i] && n.index(this._hashes[i]);
            o !== s &&
              o !== this._core.current() &&
              this._core.to(this._core.relative(o), !1, !0);
          }, this)
        );
    };
    (n.Defaults = { URLhashListener: !1 }),
      (n.prototype.destroy = function () {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this))
          "function" != typeof this[s] && (this[s] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, s) {
    function n(e, i) {
      var n = !1,
        o = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + a.join(o + " ") + o).split(" "), function (t, e) {
          return r[e] !== s ? ((n = !i || e), !1) : void 0;
        }),
        n
      );
    }
    function o(t) {
      return n(t, !0);
    }
    var r = t("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      h = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      l = {
        csstransforms: function () {
          return !!n("transform");
        },
        csstransforms3d: function () {
          return !!n("perspective");
        },
        csstransitions: function () {
          return !!n("transition");
        },
        cssanimations: function () {
          return !!n("animation");
        },
      };
    l.csstransitions() &&
      ((t.support.transition = new String(o("transition"))),
      (t.support.transition.end = h.transition.end[t.support.transition])),
      l.cssanimations() &&
        ((t.support.animation = new String(o("animation"))),
        (t.support.animation.end = h.animation.end[t.support.animation])),
      l.csstransforms() &&
        ((t.support.transform = new String(o("transform"))),
        (t.support.transform3d = l.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);
!(function (e) {
  var t = !0;
  (e.flexslider = function (a, n) {
    var i = e(a);
    i.vars = e.extend({}, e.flexslider.defaults, n);
    var s,
      r = i.vars.namespace,
      o =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      l =
        ("ontouchstart" in window ||
          o ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        i.vars.touch,
      c = "click touchend MSPointerUp keyup",
      d = "",
      u = "vertical" === i.vars.direction,
      v = i.vars.reverse,
      p = i.vars.itemWidth > 0,
      m = "fade" === i.vars.animation,
      f = "" !== i.vars.asNavFor,
      g = {};
    e.data(a, "flexslider", i),
      (g = {
        init: function () {
          (i.animating = !1),
            (i.currentSlide = parseInt(
              i.vars.startAt ? i.vars.startAt : 0,
              10
            )),
            isNaN(i.currentSlide) && (i.currentSlide = 0),
            (i.animatingTo = i.currentSlide),
            (i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last),
            (i.containerSelector = i.vars.selector.substr(
              0,
              i.vars.selector.search(" ")
            )),
            (i.slides = e(i.vars.selector, i)),
            (i.container = e(i.containerSelector, i)),
            (i.count = i.slides.length),
            (i.syncExists = e(i.vars.sync).length > 0),
            "slide" === i.vars.animation && (i.vars.animation = "swing"),
            (i.prop = u ? "top" : "marginLeft"),
            (i.args = {}),
            (i.manualPause = !1),
            (i.stopped = !1),
            (i.started = !1),
            (i.startTimeout = null),
            (i.transitions =
              !i.vars.video &&
              !m &&
              i.vars.useCSS &&
              (function () {
                var e = document.createElement("div"),
                  t = [
                    "perspectiveProperty",
                    "WebkitPerspective",
                    "MozPerspective",
                    "OPerspective",
                    "msPerspective",
                  ];
                for (var a in t)
                  if (void 0 !== e.style[t[a]])
                    return (
                      (i.pfx = t[a].replace("Perspective", "").toLowerCase()),
                      (i.prop = "-" + i.pfx + "-transform"),
                      !0
                    );
                return !1;
              })()),
            (i.ensureAnimationEnd = ""),
            "" !== i.vars.controlsContainer &&
              (i.controlsContainer =
                e(i.vars.controlsContainer).length > 0 &&
                e(i.vars.controlsContainer)),
            "" !== i.vars.manualControls &&
              (i.manualControls =
                e(i.vars.manualControls).length > 0 &&
                e(i.vars.manualControls)),
            "" !== i.vars.customDirectionNav &&
              (i.customDirectionNav =
                2 === e(i.vars.customDirectionNav).length &&
                e(i.vars.customDirectionNav)),
            i.vars.randomize &&
              (i.slides.sort(function () {
                return Math.round(Math.random()) - 0.5;
              }),
              i.container.empty().append(i.slides)),
            i.doMath(),
            i.setup("init"),
            i.vars.controlNav && g.controlNav.setup(),
            i.vars.directionNav && g.directionNav.setup(),
            i.vars.keyboard &&
              (1 === e(i.containerSelector).length ||
                i.vars.multipleKeyboard) &&
              e(document).bind("keyup", function (e) {
                var t = e.keyCode;
                if (!i.animating && (39 === t || 37 === t)) {
                  var a =
                    39 === t
                      ? i.getTarget("next")
                      : 37 === t && i.getTarget("prev");
                  i.flexAnimate(a, i.vars.pauseOnAction);
                }
              }),
            i.vars.mousewheel &&
              i.bind("mousewheel", function (e, t, a, n) {
                e.preventDefault();
                var s = 0 > t ? i.getTarget("next") : i.getTarget("prev");
                i.flexAnimate(s, i.vars.pauseOnAction);
              }),
            i.vars.pausePlay && g.pausePlay.setup(),
            i.vars.slideshow &&
              i.vars.pauseInvisible &&
              g.pauseInvisible.init(),
            i.vars.slideshow &&
              (i.vars.pauseOnHover &&
                i.hover(
                  function () {
                    i.manualPlay || i.manualPause || i.pause();
                  },
                  function () {
                    i.manualPause || i.manualPlay || i.stopped || i.play();
                  }
                ),
              (i.vars.pauseInvisible && g.pauseInvisible.isHidden()) ||
                (i.vars.initDelay > 0
                  ? (i.startTimeout = setTimeout(i.play, i.vars.initDelay))
                  : i.play())),
            f && g.asNav.setup(),
            l && i.vars.touch && g.touch(),
            (!m || (m && i.vars.smoothHeight)) &&
              e(window).bind("resize orientationchange focus", g.resize),
            i.find("img").attr("draggable", "false"),
            setTimeout(function () {
              i.vars.start(i);
            }, 200);
        },
        asNav: {
          setup: function () {
            (i.asNav = !0),
              (i.animatingTo = Math.floor(i.currentSlide / i.move)),
              (i.currentItem = i.currentSlide),
              i.slides
                .removeClass(r + "active-slide")
                .eq(i.currentItem)
                .addClass(r + "active-slide"),
              o
                ? ((a._slider = i),
                  i.slides.each(function () {
                    var t = this;
                    (t._gesture = new MSGesture()),
                      (t._gesture.target = t),
                      t.addEventListener(
                        "MSPointerDown",
                        function (e) {
                          e.preventDefault(),
                            e.currentTarget._gesture &&
                              e.currentTarget._gesture.addPointer(e.pointerId);
                        },
                        !1
                      ),
                      t.addEventListener("MSGestureTap", function (t) {
                        t.preventDefault();
                        var a = e(this),
                          n = a.index();
                        e(i.vars.asNavFor).data("flexslider").animating ||
                          a.hasClass("active") ||
                          ((i.direction = i.currentItem < n ? "next" : "prev"),
                          i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0));
                      });
                  }))
                : i.slides.on(c, function (t) {
                    t.preventDefault();
                    var a = e(this),
                      n = a.index(),
                      s = a.offset().left - e(i).scrollLeft();
                    0 >= s && a.hasClass(r + "active-slide")
                      ? i.flexAnimate(i.getTarget("prev"), !0)
                      : e(i.vars.asNavFor).data("flexslider").animating ||
                        a.hasClass(r + "active-slide") ||
                        ((i.direction = i.currentItem < n ? "next" : "prev"),
                        i.flexAnimate(n, i.vars.pauseOnAction, !1, !0, !0));
                  });
          },
        },
        controlNav: {
          setup: function () {
            i.manualControls
              ? g.controlNav.setupManual()
              : g.controlNav.setupPaging();
          },
          setupPaging: function () {
            var t,
              a,
              n =
                "thumbnails" === i.vars.controlNav
                  ? "control-thumbs"
                  : "control-paging",
              s = 1;
            if (
              ((i.controlNavScaffold = e(
                '<ol class="' + r + "control-nav " + r + n + '"></ol>'
              )),
              i.pagingCount > 1)
            )
              for (var o = 0; o < i.pagingCount; o++) {
                (a = i.slides.eq(o)),
                  void 0 === a.attr("data-thumb-alt") &&
                    a.attr("data-thumb-alt", "");
                var l =
                  "" !== a.attr("data-thumb-alt")
                    ? (l = ' alt="' + a.attr("data-thumb-alt") + '"')
                    : "";
                if (
                  ((t =
                    "thumbnails" === i.vars.controlNav
                      ? '<img src="' + a.attr("data-thumb") + '"' + l + "/>"
                      : '<a href="#">' + s + "</a>"),
                  "thumbnails" === i.vars.controlNav &&
                    !0 === i.vars.thumbCaptions)
                ) {
                  var u = a.attr("data-thumbcaption");
                  "" !== u &&
                    void 0 !== u &&
                    (t += '<span class="' + r + 'caption">' + u + "</span>");
                }
                i.controlNavScaffold.append("<li>" + t + "</li>"), s++;
              }
            i.controlsContainer
              ? e(i.controlsContainer).append(i.controlNavScaffold)
              : i.append(i.controlNavScaffold),
              g.controlNav.set(),
              g.controlNav.active(),
              i.controlNavScaffold.delegate("a, img", c, function (t) {
                if ((t.preventDefault(), "" === d || d === t.type)) {
                  var a = e(this),
                    n = i.controlNav.index(a);
                  a.hasClass(r + "active") ||
                    ((i.direction = n > i.currentSlide ? "next" : "prev"),
                    i.flexAnimate(n, i.vars.pauseOnAction));
                }
                "" === d && (d = t.type), g.setToClearWatchedEvent();
              });
          },
          setupManual: function () {
            (i.controlNav = i.manualControls),
              g.controlNav.active(),
              i.controlNav.bind(c, function (t) {
                if ((t.preventDefault(), "" === d || d === t.type)) {
                  var a = e(this),
                    n = i.controlNav.index(a);
                  a.hasClass(r + "active") ||
                    (n > i.currentSlide
                      ? (i.direction = "next")
                      : (i.direction = "prev"),
                    i.flexAnimate(n, i.vars.pauseOnAction));
                }
                "" === d && (d = t.type), g.setToClearWatchedEvent();
              });
          },
          set: function () {
            var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
            i.controlNav = e(
              "." + r + "control-nav li " + t,
              i.controlsContainer ? i.controlsContainer : i
            );
          },
          active: function () {
            i.controlNav
              .removeClass(r + "active")
              .eq(i.animatingTo)
              .addClass(r + "active");
          },
          update: function (t, a) {
            i.pagingCount > 1 && "add" === t
              ? i.controlNavScaffold.append(
                  e('<li><a href="#">' + i.count + "</a></li>")
                )
              : 1 === i.pagingCount
              ? i.controlNavScaffold.find("li").remove()
              : i.controlNav.eq(a).closest("li").remove(),
              g.controlNav.set(),
              i.pagingCount > 1 && i.pagingCount !== i.controlNav.length
                ? i.update(a, t)
                : g.controlNav.active();
          },
        },
        directionNav: {
          setup: function () {
            var t = e(
              '<ul class="' +
                r +
                'direction-nav"><li class="' +
                r +
                'nav-prev"><a class="' +
                r +
                'prev" href="#">' +
                i.vars.prevText +
                '</a></li><li class="' +
                r +
                'nav-next"><a class="' +
                r +
                'next" href="#">' +
                i.vars.nextText +
                "</a></li></ul>"
            );
            i.customDirectionNav
              ? (i.directionNav = i.customDirectionNav)
              : i.controlsContainer
              ? (e(i.controlsContainer).append(t),
                (i.directionNav = e(
                  "." + r + "direction-nav li a",
                  i.controlsContainer
                )))
              : (i.append(t),
                (i.directionNav = e("." + r + "direction-nav li a", i))),
              g.directionNav.update(),
              i.directionNav.bind(c, function (t) {
                t.preventDefault();
                var a;
                ("" === d || d === t.type) &&
                  ((a = e(this).hasClass(r + "next")
                    ? i.getTarget("next")
                    : i.getTarget("prev")),
                  i.flexAnimate(a, i.vars.pauseOnAction)),
                  "" === d && (d = t.type),
                  g.setToClearWatchedEvent();
              });
          },
          update: function () {
            var e = r + "disabled";
            1 === i.pagingCount
              ? i.directionNav.addClass(e).attr("tabindex", "-1")
              : i.vars.animationLoop
              ? i.directionNav.removeClass(e).removeAttr("tabindex")
              : 0 === i.animatingTo
              ? i.directionNav
                  .removeClass(e)
                  .filter("." + r + "prev")
                  .addClass(e)
                  .attr("tabindex", "-1")
              : i.animatingTo === i.last
              ? i.directionNav
                  .removeClass(e)
                  .filter("." + r + "next")
                  .addClass(e)
                  .attr("tabindex", "-1")
              : i.directionNav.removeClass(e).removeAttr("tabindex");
          },
        },
        pausePlay: {
          setup: function () {
            var t = e('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
            i.controlsContainer
              ? (i.controlsContainer.append(t),
                (i.pausePlay = e("." + r + "pauseplay a", i.controlsContainer)))
              : (i.append(t), (i.pausePlay = e("." + r + "pauseplay a", i))),
              g.pausePlay.update(i.vars.slideshow ? r + "pause" : r + "play"),
              i.pausePlay.bind(c, function (t) {
                t.preventDefault(),
                  ("" === d || d === t.type) &&
                    (e(this).hasClass(r + "pause")
                      ? ((i.manualPause = !0), (i.manualPlay = !1), i.pause())
                      : ((i.manualPause = !1), (i.manualPlay = !0), i.play())),
                  "" === d && (d = t.type),
                  g.setToClearWatchedEvent();
              });
          },
          update: function (e) {
            "play" === e
              ? i.pausePlay
                  .removeClass(r + "pause")
                  .addClass(r + "play")
                  .html(i.vars.playText)
              : i.pausePlay
                  .removeClass(r + "play")
                  .addClass(r + "pause")
                  .html(i.vars.pauseText);
          },
        },
        touch: function () {
          function e(e) {
            e.stopPropagation(),
              i.animating
                ? e.preventDefault()
                : (i.pause(),
                  a._gesture.addPointer(e.pointerId),
                  (T = 0),
                  (c = u ? i.h : i.w),
                  (f = Number(new Date())),
                  (l =
                    p && v && i.animatingTo === i.last
                      ? 0
                      : p && v
                      ? i.limit -
                        (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo
                      : p && i.currentSlide === i.last
                      ? i.limit
                      : p
                      ? (i.itemW + i.vars.itemMargin) * i.move * i.currentSlide
                      : v
                      ? (i.last - i.currentSlide + i.cloneOffset) * c
                      : (i.currentSlide + i.cloneOffset) * c));
          }
          function t(e) {
            e.stopPropagation();
            var t = e.target._slider;
            if (t) {
              var n = -e.translationX,
                i = -e.translationY;
              return (
                (T += u ? i : n),
                (d = T),
                (y = u
                  ? Math.abs(T) < Math.abs(-n)
                  : Math.abs(T) < Math.abs(-i)),
                e.detail === e.MSGESTURE_FLAG_INERTIA
                  ? void setImmediate(function () {
                      a._gesture.stop();
                    })
                  : void (
                      (!y || Number(new Date()) - f > 500) &&
                      (e.preventDefault(),
                      !m &&
                        t.transitions &&
                        (t.vars.animationLoop ||
                          (d =
                            T /
                            ((0 === t.currentSlide && 0 > T) ||
                            (t.currentSlide === t.last && T > 0)
                              ? Math.abs(T) / c + 2
                              : 1)),
                        t.setProps(l + d, "setTouch")))
                    )
              );
            }
          }
          function n(e) {
            e.stopPropagation();
            var t = e.target._slider;
            if (t) {
              if (t.animatingTo === t.currentSlide && !y && null !== d) {
                var a = v ? -d : d,
                  n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                t.canAdvance(n) &&
                ((Number(new Date()) - f < 550 && Math.abs(a) > 50) ||
                  Math.abs(a) > c / 2)
                  ? t.flexAnimate(n, t.vars.pauseOnAction)
                  : m ||
                    t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0);
              }
              (s = null), (r = null), (d = null), (l = null), (T = 0);
            }
          }
          var s,
            r,
            l,
            c,
            d,
            f,
            g,
            h,
            S,
            y = !1,
            x = 0,
            b = 0,
            T = 0;
          o
            ? ((a.style.msTouchAction = "none"),
              (a._gesture = new MSGesture()),
              (a._gesture.target = a),
              a.addEventListener("MSPointerDown", e, !1),
              (a._slider = i),
              a.addEventListener("MSGestureChange", t, !1),
              a.addEventListener("MSGestureEnd", n, !1))
            : ((g = function (e) {
                i.animating
                  ? e.preventDefault()
                  : (window.navigator.msPointerEnabled ||
                      1 === e.touches.length) &&
                    (i.pause(),
                    (c = u ? i.h : i.w),
                    (f = Number(new Date())),
                    (x = e.touches[0].pageX),
                    (b = e.touches[0].pageY),
                    (l =
                      p && v && i.animatingTo === i.last
                        ? 0
                        : p && v
                        ? i.limit -
                          (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo
                        : p && i.currentSlide === i.last
                        ? i.limit
                        : p
                        ? (i.itemW + i.vars.itemMargin) *
                          i.move *
                          i.currentSlide
                        : v
                        ? (i.last - i.currentSlide + i.cloneOffset) * c
                        : (i.currentSlide + i.cloneOffset) * c),
                    (s = u ? b : x),
                    (r = u ? x : b),
                    a.addEventListener("touchmove", h, !1),
                    a.addEventListener("touchend", S, !1));
              }),
              (h = function (e) {
                (x = e.touches[0].pageX),
                  (b = e.touches[0].pageY),
                  (d = u ? s - b : s - x),
                  (y = u
                    ? Math.abs(d) < Math.abs(x - r)
                    : Math.abs(d) < Math.abs(b - r));
                var t = 500;
                (!y || Number(new Date()) - f > t) &&
                  (e.preventDefault(),
                  !m &&
                    i.transitions &&
                    (i.vars.animationLoop ||
                      (d /=
                        (0 === i.currentSlide && 0 > d) ||
                        (i.currentSlide === i.last && d > 0)
                          ? Math.abs(d) / c + 2
                          : 1),
                    i.setProps(l + d, "setTouch")));
              }),
              (S = function (e) {
                if (
                  (a.removeEventListener("touchmove", h, !1),
                  i.animatingTo === i.currentSlide && !y && null !== d)
                ) {
                  var t = v ? -d : d,
                    n = t > 0 ? i.getTarget("next") : i.getTarget("prev");
                  i.canAdvance(n) &&
                  ((Number(new Date()) - f < 550 && Math.abs(t) > 50) ||
                    Math.abs(t) > c / 2)
                    ? i.flexAnimate(n, i.vars.pauseOnAction)
                    : m ||
                      i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0);
                }
                a.removeEventListener("touchend", S, !1),
                  (s = null),
                  (r = null),
                  (d = null),
                  (l = null);
              }),
              a.addEventListener("touchstart", g, !1));
        },
        resize: function () {
          !i.animating &&
            i.is(":visible") &&
            (p || i.doMath(),
            m
              ? g.smoothHeight()
              : p
              ? (i.slides.width(i.computedW),
                i.update(i.pagingCount),
                i.setProps())
              : u
              ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal"))
              : (i.vars.smoothHeight && g.smoothHeight(),
                i.newSlides.width(i.computedW),
                i.setProps(i.computedW, "setTotal")));
        },
        smoothHeight: function (e) {
          if (!u || m) {
            var t = m ? i : i.viewport;
            e
              ? t.animate(
                  { height: i.slides.eq(i.animatingTo).innerHeight() },
                  e
                )
              : t.innerHeight(i.slides.eq(i.animatingTo).innerHeight());
          }
        },
        sync: function (t) {
          var a = e(i.vars.sync).data("flexslider"),
            n = i.animatingTo;
          switch (t) {
            case "animate":
              a.flexAnimate(n, i.vars.pauseOnAction, !1, !0);
              break;
            case "play":
              a.playing || a.asNav || a.play();
              break;
            case "pause":
              a.pause();
          }
        },
        uniqueID: function (t) {
          return (
            t
              .filter("[id]")
              .add(t.find("[id]"))
              .each(function () {
                var t = e(this);
                t.attr("id", t.attr("id") + "_clone");
              }),
            t
          );
        },
        pauseInvisible: {
          visProp: null,
          init: function () {
            var e = g.pauseInvisible.getHiddenProp();
            if (e) {
              var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
              document.addEventListener(t, function () {
                g.pauseInvisible.isHidden()
                  ? i.startTimeout
                    ? clearTimeout(i.startTimeout)
                    : i.pause()
                  : i.started
                  ? i.play()
                  : i.vars.initDelay > 0
                  ? setTimeout(i.play, i.vars.initDelay)
                  : i.play();
              });
            }
          },
          isHidden: function () {
            var e = g.pauseInvisible.getHiddenProp();
            return !!e && document[e];
          },
          getHiddenProp: function () {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var t = 0; t < e.length; t++)
              if (e[t] + "Hidden" in document) return e[t] + "Hidden";
            return null;
          },
        },
        setToClearWatchedEvent: function () {
          clearTimeout(s),
            (s = setTimeout(function () {
              d = "";
            }, 3e3));
        },
      }),
      (i.flexAnimate = function (t, a, n, s, o) {
        if (
          (i.vars.animationLoop ||
            t === i.currentSlide ||
            (i.direction = t > i.currentSlide ? "next" : "prev"),
          f &&
            1 === i.pagingCount &&
            (i.direction = i.currentItem < t ? "next" : "prev"),
          !i.animating && (i.canAdvance(t, o) || n) && i.is(":visible"))
        ) {
          if (f && s) {
            var c = e(i.vars.asNavFor).data("flexslider");
            if (
              ((i.atEnd = 0 === t || t === i.count - 1),
              c.flexAnimate(t, !0, !1, !0, o),
              (i.direction = i.currentItem < t ? "next" : "prev"),
              (c.direction = i.direction),
              Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide || 0 === t)
            )
              return (
                (i.currentItem = t),
                i.slides
                  .removeClass(r + "active-slide")
                  .eq(t)
                  .addClass(r + "active-slide"),
                !1
              );
            (i.currentItem = t),
              i.slides
                .removeClass(r + "active-slide")
                .eq(t)
                .addClass(r + "active-slide"),
              (t = Math.floor(t / i.visible));
          }
          if (
            ((i.animating = !0),
            (i.animatingTo = t),
            a && i.pause(),
            i.vars.before(i),
            i.syncExists && !o && g.sync("animate"),
            i.vars.controlNav && g.controlNav.active(),
            p ||
              i.slides
                .removeClass(r + "active-slide")
                .eq(t)
                .addClass(r + "active-slide"),
            (i.atEnd = 0 === t || t === i.last),
            i.vars.directionNav && g.directionNav.update(),
            t === i.last && (i.vars.end(i), i.vars.animationLoop || i.pause()),
            m)
          )
            l
              ? (i.slides.eq(i.currentSlide).css({ opacity: 0, zIndex: 1 }),
                i.slides.eq(t).css({ opacity: 1, zIndex: 2 }),
                i.wrapup(y))
              : (i.slides
                  .eq(i.currentSlide)
                  .css({ zIndex: 1 })
                  .animate(
                    { opacity: 0 },
                    i.vars.animationSpeed,
                    i.vars.easing
                  ),
                i.slides
                  .eq(t)
                  .css({ zIndex: 2 })
                  .animate(
                    { opacity: 1 },
                    i.vars.animationSpeed,
                    i.vars.easing,
                    i.wrapup
                  ));
          else {
            var d,
              h,
              S,
              y = u ? i.slides.filter(":first").height() : i.computedW;
            p
              ? ((d = i.vars.itemMargin),
                (S = (i.itemW + d) * i.move * i.animatingTo),
                (h = S > i.limit && 1 !== i.visible ? i.limit : S))
              : (h =
                  0 === i.currentSlide &&
                  t === i.count - 1 &&
                  i.vars.animationLoop &&
                  "next" !== i.direction
                    ? v
                      ? (i.count + i.cloneOffset) * y
                      : 0
                    : i.currentSlide === i.last &&
                      0 === t &&
                      i.vars.animationLoop &&
                      "prev" !== i.direction
                    ? v
                      ? 0
                      : (i.count + 1) * y
                    : v
                    ? (i.count - 1 - t + i.cloneOffset) * y
                    : (t + i.cloneOffset) * y),
              i.setProps(h, "", i.vars.animationSpeed),
              i.transitions
                ? ((i.vars.animationLoop && i.atEnd) ||
                    ((i.animating = !1), (i.currentSlide = i.animatingTo)),
                  i.container.unbind("webkitTransitionEnd transitionend"),
                  i.container.bind(
                    "webkitTransitionEnd transitionend",
                    function () {
                      clearTimeout(i.ensureAnimationEnd), i.wrapup(y);
                    }
                  ),
                  clearTimeout(i.ensureAnimationEnd),
                  (i.ensureAnimationEnd = setTimeout(function () {
                    i.wrapup(y);
                  }, i.vars.animationSpeed + 100)))
                : i.container.animate(
                    i.args,
                    i.vars.animationSpeed,
                    i.vars.easing,
                    function () {
                      i.wrapup(y);
                    }
                  );
          }
          i.vars.smoothHeight && g.smoothHeight(i.vars.animationSpeed);
        }
      }),
      (i.wrapup = function (e) {
        m ||
          p ||
          (0 === i.currentSlide &&
          i.animatingTo === i.last &&
          i.vars.animationLoop
            ? i.setProps(e, "jumpEnd")
            : i.currentSlide === i.last &&
              0 === i.animatingTo &&
              i.vars.animationLoop &&
              i.setProps(e, "jumpStart")),
          (i.animating = !1),
          (i.currentSlide = i.animatingTo),
          i.vars.after(i);
      }),
      (i.animateSlides = function () {
        !i.animating && t && i.flexAnimate(i.getTarget("next"));
      }),
      (i.pause = function () {
        clearInterval(i.animatedSlides),
          (i.animatedSlides = null),
          (i.playing = !1),
          i.vars.pausePlay && g.pausePlay.update("play"),
          i.syncExists && g.sync("pause");
      }),
      (i.play = function () {
        i.playing && clearInterval(i.animatedSlides),
          (i.animatedSlides =
            i.animatedSlides ||
            setInterval(i.animateSlides, i.vars.slideshowSpeed)),
          (i.started = i.playing = !0),
          i.vars.pausePlay && g.pausePlay.update("pause"),
          i.syncExists && g.sync("play");
      }),
      (i.stop = function () {
        i.pause(), (i.stopped = !0);
      }),
      (i.canAdvance = function (e, t) {
        var a = f ? i.pagingCount - 1 : i.last;
        return (
          !!t ||
          !(
            !f ||
            i.currentItem !== i.count - 1 ||
            0 !== e ||
            "prev" !== i.direction
          ) ||
          ((!f ||
            0 !== i.currentItem ||
            e !== i.pagingCount - 1 ||
            "next" === i.direction) &&
            !(e === i.currentSlide && !f) &&
            (!!i.vars.animationLoop ||
              ((!i.atEnd ||
                0 !== i.currentSlide ||
                e !== a ||
                "next" === i.direction) &&
                (!i.atEnd ||
                  i.currentSlide !== a ||
                  0 !== e ||
                  "next" !== i.direction))))
        );
      }),
      (i.getTarget = function (e) {
        return (
          (i.direction = e),
          "next" === e
            ? i.currentSlide === i.last
              ? 0
              : i.currentSlide + 1
            : 0 === i.currentSlide
            ? i.last
            : i.currentSlide - 1
        );
      }),
      (i.setProps = function (e, t, a) {
        var n = (function () {
          var a = e
              ? e
              : (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo,
            n = (function () {
              if (p)
                return "setTouch" === t
                  ? e
                  : v && i.animatingTo === i.last
                  ? 0
                  : v
                  ? i.limit -
                    (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo
                  : i.animatingTo === i.last
                  ? i.limit
                  : a;
              switch (t) {
                case "setTotal":
                  return v
                    ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e
                    : (i.currentSlide + i.cloneOffset) * e;
                case "setTouch":
                  return v ? e : e;
                case "jumpEnd":
                  return v ? e : i.count * e;
                case "jumpStart":
                  return v ? i.count * e : e;
                default:
                  return e;
              }
            })();
          return -1 * n + "px";
        })();
        i.transitions &&
          ((n = u
            ? "translate3d(0," + n + ",0)"
            : "translate3d(" + n + ",0,0)"),
          (a = void 0 !== a ? a / 1e3 + "s" : "0s"),
          i.container.css("-" + i.pfx + "-transition-duration", a),
          i.container.css("transition-duration", a)),
          (i.args[i.prop] = n),
          (i.transitions || void 0 === a) && i.container.css(i.args),
          i.container.css("transform", n);
      }),
      (i.setup = function (t) {
        if (m)
          i.slides.css({
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative",
          }),
            "init" === t &&
              (l
                ? i.slides
                    .css({
                      opacity: 0,
                      display: "block",
                      webkitTransition:
                        "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                      zIndex: 1,
                    })
                    .eq(i.currentSlide)
                    .css({ opacity: 1, zIndex: 2 })
                : 0 == i.vars.fadeFirstSlide
                ? i.slides
                    .css({ opacity: 0, display: "block", zIndex: 1 })
                    .eq(i.currentSlide)
                    .css({ zIndex: 2 })
                    .css({ opacity: 1 })
                : i.slides
                    .css({ opacity: 0, display: "block", zIndex: 1 })
                    .eq(i.currentSlide)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      i.vars.animationSpeed,
                      i.vars.easing
                    )),
            i.vars.smoothHeight && g.smoothHeight();
        else {
          var a, n;
          "init" === t &&
            ((i.viewport = e('<div class="' + r + 'viewport"></div>')
              .css({ overflow: "hidden", position: "relative" })
              .appendTo(i)
              .append(i.container)),
            (i.cloneCount = 0),
            (i.cloneOffset = 0),
            v &&
              ((n = e.makeArray(i.slides).reverse()),
              (i.slides = e(n)),
              i.container.empty().append(i.slides))),
            i.vars.animationLoop &&
              !p &&
              ((i.cloneCount = 2),
              (i.cloneOffset = 1),
              "init" !== t && i.container.find(".clone").remove(),
              i.container
                .append(
                  g
                    .uniqueID(i.slides.first().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )
                .prepend(
                  g
                    .uniqueID(i.slides.last().clone().addClass("clone"))
                    .attr("aria-hidden", "true")
                )),
            (i.newSlides = e(i.vars.selector, i)),
            (a = v
              ? i.count - 1 - i.currentSlide + i.cloneOffset
              : i.currentSlide + i.cloneOffset),
            u && !p
              ? (i.container
                  .height(200 * (i.count + i.cloneCount) + "%")
                  .css("position", "absolute")
                  .width("100%"),
                setTimeout(
                  function () {
                    i.newSlides.css({ display: "block" }),
                      i.doMath(),
                      i.viewport.height(i.h),
                      i.setProps(a * i.h, "init");
                  },
                  "init" === t ? 100 : 0
                ))
              : (i.container.width(200 * (i.count + i.cloneCount) + "%"),
                i.setProps(a * i.computedW, "init"),
                setTimeout(
                  function () {
                    i.doMath(),
                      i.newSlides.css({
                        width: i.computedW,
                        marginRight: i.computedM,
                        float: "left",
                        display: "block",
                      }),
                      i.vars.smoothHeight && g.smoothHeight();
                  },
                  "init" === t ? 100 : 0
                ));
        }
        p ||
          i.slides
            .removeClass(r + "active-slide")
            .eq(i.currentSlide)
            .addClass(r + "active-slide"),
          i.vars.init(i);
      }),
      (i.doMath = function () {
        var e = i.slides.first(),
          t = i.vars.itemMargin,
          a = i.vars.minItems,
          n = i.vars.maxItems;
        (i.w = void 0 === i.viewport ? i.width() : i.viewport.width()),
          (i.h = e.height()),
          (i.boxPadding = e.outerWidth() - e.width()),
          p
            ? ((i.itemT = i.vars.itemWidth + t),
              (i.itemM = t),
              (i.minW = a ? a * i.itemT : i.w),
              (i.maxW = n ? n * i.itemT - t : i.w),
              (i.itemW =
                i.minW > i.w
                  ? (i.w - t * (a - 1)) / a
                  : i.maxW < i.w
                  ? (i.w - t * (n - 1)) / n
                  : i.vars.itemWidth > i.w
                  ? i.w
                  : i.vars.itemWidth),
              (i.visible = Math.floor(i.w / i.itemW)),
              (i.move =
                i.vars.move > 0 && i.vars.move < i.visible
                  ? i.vars.move
                  : i.visible),
              (i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1)),
              (i.last = i.pagingCount - 1),
              (i.limit =
                1 === i.pagingCount
                  ? 0
                  : i.vars.itemWidth > i.w
                  ? i.itemW * (i.count - 1) + t * (i.count - 1)
                  : (i.itemW + t) * i.count - i.w - t))
            : ((i.itemW = i.w),
              (i.itemM = t),
              (i.pagingCount = i.count),
              (i.last = i.count - 1)),
          (i.computedW = i.itemW - i.boxPadding),
          (i.computedM = i.itemM);
      }),
      (i.update = function (e, t) {
        i.doMath(),
          p ||
            (e < i.currentSlide
              ? (i.currentSlide += 1)
              : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1),
            (i.animatingTo = i.currentSlide)),
          i.vars.controlNav &&
            !i.manualControls &&
            (("add" === t && !p) || i.pagingCount > i.controlNav.length
              ? g.controlNav.update("add")
              : (("remove" === t && !p) ||
                  i.pagingCount < i.controlNav.length) &&
                (p &&
                  i.currentSlide > i.last &&
                  ((i.currentSlide -= 1), (i.animatingTo -= 1)),
                g.controlNav.update("remove", i.last))),
          i.vars.directionNav && g.directionNav.update();
      }),
      (i.addSlide = function (t, a) {
        var n = e(t);
        (i.count += 1),
          (i.last = i.count - 1),
          u && v
            ? void 0 !== a
              ? i.slides.eq(i.count - a).after(n)
              : i.container.prepend(n)
            : void 0 !== a
            ? i.slides.eq(a).before(n)
            : i.container.append(n),
          i.update(a, "add"),
          (i.slides = e(i.vars.selector + ":not(.clone)", i)),
          i.setup(),
          i.vars.added(i);
      }),
      (i.removeSlide = function (t) {
        var a = isNaN(t) ? i.slides.index(e(t)) : t;
        (i.count -= 1),
          (i.last = i.count - 1),
          isNaN(t)
            ? e(t, i.slides).remove()
            : u && v
            ? i.slides.eq(i.last).remove()
            : i.slides.eq(t).remove(),
          i.doMath(),
          i.update(a, "remove"),
          (i.slides = e(i.vars.selector + ":not(.clone)", i)),
          i.setup(),
          i.vars.removed(i);
      }),
      g.init();
  }),
    e(window)
      .blur(function (e) {
        t = !1;
      })
      .focus(function (e) {
        t = !0;
      }),
    (e.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      fadeFirstSlide: !0,
      thumbCaptions: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      pauseInvisible: !0,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      customDirectionNav: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 1,
      maxItems: 0,
      move: 0,
      allowOneSlide: !0,
      start: function () {},
      before: function () {},
      after: function () {},
      end: function () {},
      added: function () {},
      removed: function () {},
      init: function () {},
    }),
    (e.fn.flexslider = function (t) {
      if ((void 0 === t && (t = {}), "object" == typeof t))
        return this.each(function () {
          var a = e(this),
            n = t.selector ? t.selector : ".slides > li",
            i = a.find(n);
          (1 === i.length && t.allowOneSlide === !1) || 0 === i.length
            ? (i.fadeIn(400), t.start && t.start(a))
            : void 0 === a.data("flexslider") && new e.flexslider(this, t);
        });
      var a = e(this).data("flexslider");
      switch (t) {
        case "play":
          a.play();
          break;
        case "pause":
          a.pause();
          break;
        case "stop":
          a.stop();
          break;
        case "next":
          a.flexAnimate(a.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          a.flexAnimate(a.getTarget("prev"), !0);
          break;
        default:
          "number" == typeof t && a.flexAnimate(t, !0);
      }
    });
})(jQuery);
!(function (e) {
  e.fn.jflickrfeed = function (i, a) {
    i = e.extend(
      !0,
      {
        flickrbase: "http://api.flickr.com/services/feeds/",
        feedapi: "photos_public.gne",
        limit: 20,
        qstrings: { lang: "en-us", format: "json", jsoncallback: "?" },
        cleanDescription: !0,
        useTemplate: !0,
        itemTemplate: "",
        itemCallback: function () {},
      },
      i
    );
    var t = i.flickrbase + i.feedapi + "?",
      c = !0;
    for (var n in i.qstrings)
      c || (t += "&"), (t += n + "=" + i.qstrings[n]), (c = !1);
    return e(this).each(function () {
      var c = e(this),
        n = this;
      e.getJSON(t, function (t) {
        e.each(t.items, function (e, a) {
          if (e < i.limit) {
            if (i.cleanDescription) {
              var t = /<p>(.*?)<\/p>/g,
                m = a.description;
              t.test(m) &&
                ((a.description = m.match(t)[2]),
                void 0 != a.description &&
                  (a.description = a.description
                    .replace("<p>", "")
                    .replace("</p>", "")));
            }
            if (
              ((a.image_s = a.media.m.replace("_m", "_s")),
              (a.image_t = a.media.m.replace("_m", "_t")),
              (a.image_m = a.media.m.replace("_m", "_m")),
              (a.image = a.media.m.replace("_m", "")),
              (a.image_b = a.media.m.replace("_m", "_b")),
              delete a.media,
              i.useTemplate)
            ) {
              var r = i.itemTemplate;
              for (var l in a) {
                var p = new RegExp("{{" + l + "}}", "g");
                r = r.replace(p, a[l]);
              }
              c.append(r);
            }
            i.itemCallback.call(n, a);
          }
        }),
          e.isFunction(a) && a.call(n, t);
      });
    });
  };
})(jQuery);
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  function t(t, s) {
    var n,
      a,
      o,
      u = t.nodeName.toLowerCase();
    return "area" === u
      ? ((n = t.parentNode),
        (a = n.name),
        !(!t.href || !a || "map" !== n.nodeName.toLowerCase()) &&
          ((o = e("img[usemap='#" + a + "']")[0]), !!o && i(o)))
      : (/input|select|textarea|button|object/.test(u)
          ? !t.disabled
          : "a" === u
          ? t.href || s
          : s) && i(t);
  }
  function i(t) {
    return (
      e.expr.filters.visible(t) &&
      !e(t)
        .parents()
        .addBack()
        .filter(function () {
          return "hidden" === e.css(this, "visibility");
        }).length
    );
  }
  (e.ui = e.ui || {}),
    e.extend(e.ui, {
      version: "1.11.1",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    e.fn.extend({
      scrollParent: function (t) {
        var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents()
            .filter(function () {
              var t = e(this);
              return (
                (!s || "static" !== t.css("position")) &&
                n.test(
                  t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
                )
              );
            })
            .eq(0);
        return "fixed" !== i && a.length
          ? a
          : e(this[0].ownerDocument || document);
      },
      uniqueId: (function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e);
          });
        };
      })(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
        });
      },
    }),
    e.extend(e.expr[":"], {
      data: e.expr.createPseudo
        ? e.expr.createPseudo(function (t) {
            return function (i) {
              return !!e.data(i, t);
            };
          })
        : function (t, i, s) {
            return !!e.data(t, s[3]);
          },
      focusable: function (i) {
        return t(i, !isNaN(e.attr(i, "tabindex")));
      },
      tabbable: function (i) {
        var s = e.attr(i, "tabindex"),
          n = isNaN(s);
        return (n || s >= 0) && t(i, !n);
      },
    }),
    e("<a>").outerWidth(1).jquery ||
      e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
          return (
            e.each(n, function () {
              (i -= parseFloat(e.css(t, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0),
                a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
            }),
            i
          );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          a = i.toLowerCase(),
          o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight,
          };
        (e.fn["inner" + i] = function (t) {
          return void 0 === t
            ? o["inner" + i].call(this)
            : this.each(function () {
                e(this).css(a, s(this, t) + "px");
              });
        }),
          (e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t
              ? o["outer" + i].call(this, t)
              : this.each(function () {
                  e(this).css(a, s(this, t, !0, n) + "px");
                });
          });
      }),
    e.fn.addBack ||
      (e.fn.addBack = function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      }),
    e("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (e.fn.removeData = (function (t) {
        return function (i) {
          return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
        };
      })(e.fn.removeData)),
    (e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    e.fn.extend({
      focus: (function (t) {
        return function (i, s) {
          return "number" == typeof i
            ? this.each(function () {
                var t = this;
                setTimeout(function () {
                  e(t).focus(), s && s.call(t);
                }, i);
              })
            : t.apply(this, arguments);
        };
      })(e.fn.focus),
      disableSelection: (function () {
        var e =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown";
        return function () {
          return this.bind(e + ".ui-disableSelection", function (e) {
            e.preventDefault();
          });
        };
      })(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
      zIndex: function (t) {
        if (void 0 !== t) return this.css("zIndex", t);
        if (this.length)
          for (var i, s, n = e(this[0]); n.length && n[0] !== document; ) {
            if (
              ((i = n.css("position")),
              ("absolute" === i || "relative" === i || "fixed" === i) &&
                ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s))
            )
              return s;
            n = n.parent();
          }
        return 0;
      },
    }),
    (e.ui.plugin = {
      add: function (t, i, s) {
        var n,
          a = e.ui[t].prototype;
        for (n in s)
          (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
      },
      call: function (e, t, i, s) {
        var n,
          a = e.plugins[t];
        if (
          a &&
          (s ||
            (e.element[0].parentNode &&
              11 !== e.element[0].parentNode.nodeType))
        )
          for (n = 0; a.length > n; n++)
            e.options[a[n][0]] && a[n][1].apply(e.element, i);
      },
    });
  var s = 0,
    n = Array.prototype.slice;
  (e.cleanData = (function (t) {
    return function (i) {
      var s, n, a;
      for (a = 0; null != (n = i[a]); a++)
        try {
          (s = e._data(n, "events")),
            s && s.remove && e(n).triggerHandler("remove");
        } catch (e) {}
      t(i);
    };
  })(e.cleanData)),
    (e.widget = function (t, i, s) {
      var n,
        a,
        o,
        u,
        r = {},
        h = t.split(".")[0];
      return (
        (t = t.split(".")[1]),
        (n = h + "-" + t),
        s || ((s = i), (i = e.Widget)),
        (e.expr[":"][n.toLowerCase()] = function (t) {
          return !!e.data(t, n);
        }),
        (e[h] = e[h] || {}),
        (a = e[h][t]),
        (o = e[h][t] =
          function (e, t) {
            return this._createWidget
              ? void (arguments.length && this._createWidget(e, t))
              : new o(e, t);
          }),
        e.extend(o, a, {
          version: s.version,
          _proto: e.extend({}, s),
          _childConstructors: [],
        }),
        (u = new i()),
        (u.options = e.widget.extend({}, u.options)),
        e.each(s, function (t, s) {
          return e.isFunction(s)
            ? void (r[t] = (function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments);
                  },
                  n = function (e) {
                    return i.prototype[t].apply(this, e);
                  };
                return function () {
                  var t,
                    i = this._super,
                    a = this._superApply;
                  return (
                    (this._super = e),
                    (this._superApply = n),
                    (t = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = a),
                    t
                  );
                };
              })())
            : void (r[t] = s);
        }),
        (o.prototype = e.widget.extend(
          u,
          { widgetEventPrefix: a ? u.widgetEventPrefix || t : t },
          r,
          { constructor: o, namespace: h, widgetName: t, widgetFullName: n }
        )),
        a
          ? (e.each(a._childConstructors, function (t, i) {
              var s = i.prototype;
              e.widget(s.namespace + "." + s.widgetName, o, i._proto);
            }),
            delete a._childConstructors)
          : i._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
      );
    }),
    (e.widget.extend = function (t) {
      for (var i, s, a = n.call(arguments, 1), o = 0, u = a.length; u > o; o++)
        for (i in a[o])
          (s = a[o][i]),
            a[o].hasOwnProperty(i) &&
              void 0 !== s &&
              (t[i] = e.isPlainObject(s)
                ? e.isPlainObject(t[i])
                  ? e.widget.extend({}, t[i], s)
                  : e.widget.extend({}, s)
                : s);
      return t;
    }),
    (e.widget.bridge = function (t, i) {
      var s = i.prototype.widgetFullName || t;
      e.fn[t] = function (a) {
        var o = "string" == typeof a,
          u = n.call(arguments, 1),
          r = this;
        return (
          (a = !o && u.length ? e.widget.extend.apply(null, [a].concat(u)) : a),
          o
            ? this.each(function () {
                var i,
                  n = e.data(this, s);
                return "instance" === a
                  ? ((r = n), !1)
                  : n
                  ? e.isFunction(n[a]) && "_" !== a.charAt(0)
                    ? ((i = n[a].apply(n, u)),
                      i !== n && void 0 !== i
                        ? ((r = i && i.jquery ? r.pushStack(i.get()) : i), !1)
                        : void 0)
                    : e.error(
                        "no such method '" +
                          a +
                          "' for " +
                          t +
                          " widget instance"
                      )
                  : e.error(
                      "cannot call methods on " +
                        t +
                        " prior to initialization; attempted to call method '" +
                        a +
                        "'"
                    );
              })
            : this.each(function () {
                var t = e.data(this, s);
                t
                  ? (t.option(a || {}), t._init && t._init())
                  : e.data(this, s, new i(a, this));
              }),
          r
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { disabled: !1, create: null },
      _createWidget: function (t, i) {
        (i = e(i || this.defaultElement || this)[0]),
          (this.element = e(i)),
          (this.uuid = s++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.options = e.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          i !== this &&
            (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === i && this.destroy();
              },
            }),
            (this.document = e(i.style ? i.ownerDocument : i.document || i)),
            (this.window = e(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          this._create(),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element
            .unbind(this.eventNamespace)
            .removeData(this.widgetFullName)
            .removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr("aria-disabled")
            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass("ui-state-hover"),
          this.focusable.removeClass("ui-state-focus");
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, i) {
        var s,
          n,
          a,
          o = t;
        if (0 === arguments.length) return e.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((o = {}), (s = t.split(".")), (t = s.shift()), s.length)) {
            for (
              n = o[t] = e.widget.extend({}, this.options[t]), a = 0;
              s.length - 1 > a;
              a++
            )
              (n[s[a]] = n[s[a]] || {}), (n = n[s[a]]);
            if (((t = s.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            o[t] = i;
          }
        return this._setOptions(o), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          "disabled" === e &&
            (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
            t &&
              (this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus"))),
          this
        );
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _on: function (t, i, s) {
        var n,
          a = this;
        "boolean" != typeof t && ((s = i), (i = t), (t = !1)),
          s
            ? ((i = n = e(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          e.each(s, function (s, o) {
            function u() {
              return t ||
                (a.options.disabled !== !0 &&
                  !e(this).hasClass("ui-state-disabled"))
                ? ("string" == typeof o ? a[o] : o).apply(a, arguments)
                : void 0;
            }
            "string" != typeof o &&
              (u.guid = o.guid = o.guid || u.guid || e.guid++);
            var r = s.match(/^([\w:-]*)\s*(.*)$/),
              h = r[1] + a.eventNamespace,
              l = r[2];
            l ? n.delegate(l, h, u) : i.bind(h, u);
          });
      },
      _off: function (e, t) {
        (t =
          (t || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          e.unbind(t).undelegate(t);
      },
      _delay: function (e, t) {
        function i() {
          return ("string" == typeof e ? s[e] : e).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass("ui-state-hover");
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass("ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass("ui-state-focus");
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass("ui-state-focus");
            },
          });
      },
      _trigger: function (t, i, s) {
        var n,
          a,
          o = this.options[t];
        if (
          ((s = s || {}),
          (i = e.Event(i)),
          (i.type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (i.target = this.element[0]),
          (a = i.originalEvent))
        )
          for (n in a) n in i || (i[n] = a[n]);
        return (
          this.element.trigger(i, s),
          !(
            (e.isFunction(o) &&
              o.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    e.each({ show: "fadeIn", hide: "fadeOut" }, function (t, i) {
      e.Widget.prototype["_" + t] = function (s, n, a) {
        "string" == typeof n && (n = { effect: n });
        var o,
          u = n ? (n === !0 || "number" == typeof n ? i : n.effect || i) : t;
        (n = n || {}),
          "number" == typeof n && (n = { duration: n }),
          (o = !e.isEmptyObject(n)),
          (n.complete = a),
          n.delay && s.delay(n.delay),
          o && e.effects && e.effects.effect[u]
            ? s[t](n)
            : u !== t && s[u]
            ? s[u](n.duration, n.easing, a)
            : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i();
              });
      };
    }),
    e.widget;
  var a = !1;
  e(document).mouseup(function () {
    a = !1;
  }),
    e.widget("ui.mouse", {
      version: "1.11.1",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind("mousedown." + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind("click." + this.widgetName, function (i) {
            return !0 === e.data(i.target, t.widgetName + ".preventClickEvent")
              ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind("." + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (t) {
        if (!a) {
          this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
          var i = this,
            s = 1 === t.which,
            n =
              !("string" != typeof this.options.cancel || !t.target.nodeName) &&
              e(t.target).closest(this.options.cancel).length;
          return (
            !(s && !n && this._mouseCapture(t)) ||
            ((this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                i.mouseDelayMet = !0;
              }, this.options.delay)),
            this._mouseDistanceMet(t) &&
            this._mouseDelayMet(t) &&
            ((this._mouseStarted = this._mouseStart(t) !== !1),
            !this._mouseStarted)
              ? (t.preventDefault(), !0)
              : (!0 ===
                  e.data(t.target, this.widgetName + ".preventClickEvent") &&
                  e.removeData(
                    t.target,
                    this.widgetName + ".preventClickEvent"
                  ),
                (this._mouseMoveDelegate = function (e) {
                  return i._mouseMove(e);
                }),
                (this._mouseUpDelegate = function (e) {
                  return i._mouseUp(e);
                }),
                this.document
                  .bind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                  .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                (a = !0),
                !0))
          );
        }
      },
      _mouseMove: function (t) {
        return e.ui.ie &&
          (!document.documentMode || 9 > document.documentMode) &&
          !t.button
          ? this._mouseUp(t)
          : t.which
          ? this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, t) !== !1),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted)
          : this._mouseUp(t);
      },
      _mouseUp: function (t) {
        return (
          this.document
            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            t.target === this._mouseDownEvent.target &&
              e.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
          (a = !1),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - e.pageX),
            Math.abs(this._mouseDownEvent.pageY - e.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    e.widget("ui.slider", e.ui.mouse, {
      version: "1.11.1",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          i,
          s = this.options,
          n = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          a =
            "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            t = n.length;
          i > t;
          t++
        )
          o.push(a);
        (this.handles = n.add(e(o.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            e(this).data("ui-slider-handle-index", t);
          });
      },
      _createRange: function () {
        var t = this.options,
          i = "";
        t.range
          ? (t.range === !0 &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : e.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : ((this.range = e("<div></div>").appendTo(this.element)),
                (i = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              i +
                ("min" === t.range || "max" === t.range
                  ? " ui-slider-range-" + t.range
                  : "")
            ))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var i,
          s,
          n,
          a,
          o,
          u,
          r,
          h,
          l = this,
          d = this.options;
        return (
          !d.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (i = { x: t.pageX, y: t.pageY }),
          (s = this._normValueFromMouse(i)),
          (n = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var i = Math.abs(s - l.values(t));
            (n > i ||
              (n === i &&
                (t === l._lastChangedValue || l.values(t) === d.min))) &&
              ((n = i), (a = e(this)), (o = t));
          }),
          (u = this._start(t, o)),
          u !== !1 &&
            ((this._mouseSliding = !0),
            (this._handleIndex = o),
            a.addClass("ui-state-active").focus(),
            (r = a.offset()),
            (h = !e(t.target).parents().addBack().is(".ui-slider-handle")),
            (this._clickOffset = h
              ? { left: 0, top: 0 }
              : {
                  left: t.pageX - r.left - a.width() / 2,
                  top:
                    t.pageY -
                    r.top -
                    a.height() / 2 -
                    (parseInt(a.css("borderTopWidth"), 10) || 0) -
                    (parseInt(a.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(a.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(t, o, s),
            (this._animateOff = !0),
            !0))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (e) {
        var t = { x: e.pageX, y: e.pageY },
          i = this._normValueFromMouse(t);
        return this._slide(e, this._handleIndex, i), !1;
      },
      _mouseStop: function (e) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(e, this._handleIndex),
          this._change(e, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (e) {
        var t, i, s, n, a;
        return (
          "horizontal" === this.orientation
            ? ((t = this.elementSize.width),
              (i =
                e.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((t = this.elementSize.height),
              (i =
                e.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / t),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (a = this._valueMin() + s * n),
          this._trimAlignValue(a)
        );
      },
      _start: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("start", e, i)
        );
      },
      _slide: function (e, t, i) {
        var s, n, a;
        this.options.values && this.options.values.length
          ? ((s = this.values(t ? 0 : 1)),
            2 === this.options.values.length &&
              this.options.range === !0 &&
              ((0 === t && i > s) || (1 === t && s > i)) &&
              (i = s),
            i !== this.values(t) &&
              ((n = this.values()),
              (n[t] = i),
              (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n,
              })),
              (s = this.values(t ? 0 : 1)),
              a !== !1 && this.values(t, i)))
          : i !== this.value() &&
            ((a = this._trigger("slide", e, {
              handle: this.handles[t],
              value: i,
            })),
            a !== !1 && this.value(i));
      },
      _stop: function (e, t) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(t)), (i.values = this.values())),
          this._trigger("stop", e, i);
      },
      _change: function (e, t) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[t], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(t)), (i.values = this.values())),
            (this._lastChangedValue = t),
            this._trigger("change", e, i);
        }
      },
      value: function (e) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(e)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (t, i) {
        var s, n, a;
        if (arguments.length > 1)
          return (
            (this.options.values[t] = this._trimAlignValue(i)),
            this._refreshValue(),
            void this._change(null, t)
          );
        if (!arguments.length) return this._values();
        if (!e.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (
          s = this.options.values, n = arguments[0], a = 0;
          s.length > a;
          a += 1
        )
          (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
        this._refreshValue();
      },
      _setOption: function (t, i) {
        var s,
          n = 0;
        switch (
          ("range" === t &&
            this.options.range === !0 &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          e.isArray(this.options.values) && (n = this.options.values.length),
          "disabled" === t &&
            this.element.toggleClass("ui-state-disabled", !!i),
          this._super(t, i),
          t)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue(),
              this.handles.css("horizontal" === i ? "bottom" : "left", "");
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = 0;
              n > s;
              s += 1
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "min":
          case "max":
            (this._animateOff = !0),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var e = this.options.value;
        return (e = this._trimAlignValue(e));
      },
      _values: function (e) {
        var t, i, s;
        if (arguments.length)
          return (t = this.options.values[e]), (t = this._trimAlignValue(t));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (e) {
        if (this._valueMin() >= e) return this._valueMin();
        if (e >= this._valueMax()) return this._valueMax();
        var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;
        return (
          2 * Math.abs(i) >= t && (s += i > 0 ? t : -t),
          parseFloat(s.toFixed(5))
        );
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.options.max;
      },
      _refreshValue: function () {
        var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          u = this.options,
          r = this,
          h = !this._animateOff && u.animate,
          l = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((r.values(s) - r._valueMin()) /
                  (r._valueMax() - r._valueMin()))),
                (l["horizontal" === r.orientation ? "left" : "bottom"] =
                  i + "%"),
                e(this).stop(1, 1)[h ? "animate" : "css"](l, u.animate),
                r.options.range === !0 &&
                  ("horizontal" === r.orientation
                    ? (0 === s &&
                        r.range
                          .stop(1, 1)
                          [h ? "animate" : "css"]({ left: i + "%" }, u.animate),
                      1 === s &&
                        r.range[h ? "animate" : "css"](
                          { width: i - t + "%" },
                          { queue: !1, duration: u.animate }
                        ))
                    : (0 === s &&
                        r.range
                          .stop(1, 1)
                          [h ? "animate" : "css"](
                            { bottom: i + "%" },
                            u.animate
                          ),
                      1 === s &&
                        r.range[h ? "animate" : "css"](
                          { height: i - t + "%" },
                          { queue: !1, duration: u.animate }
                        ))),
                (t = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (a = this._valueMax()),
            (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
            (l["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[h ? "animate" : "css"](l, u.animate),
            "min" === o &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ width: i + "%" }, u.animate),
            "max" === o &&
              "horizontal" === this.orientation &&
              this.range[h ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: u.animate }
              ),
            "min" === o &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? "animate" : "css"]({ height: i + "%" }, u.animate),
            "max" === o &&
              "vertical" === this.orientation &&
              this.range[h ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: u.animate }
              ));
      },
      _handleEvents: {
        keydown: function (t) {
          var i,
            s,
            n,
            a,
            o = e(t.target).data("ui-slider-handle-index");
          switch (t.keyCode) {
            case e.ui.keyCode.HOME:
            case e.ui.keyCode.END:
            case e.ui.keyCode.PAGE_UP:
            case e.ui.keyCode.PAGE_DOWN:
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  e(t.target).addClass("ui-state-active"),
                  (i = this._start(t, o)),
                  i === !1))
              )
                return;
          }
          switch (
            ((a = this.options.step),
            (s = n =
              this.options.values && this.options.values.length
                ? this.values(o)
                : this.value()),
            t.keyCode)
          ) {
            case e.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case e.ui.keyCode.END:
              n = this._valueMax();
              break;
            case e.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case e.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case e.ui.keyCode.UP:
            case e.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + a);
              break;
            case e.ui.keyCode.DOWN:
            case e.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - a);
          }
          this._slide(t, o, n);
        },
        keyup: function (t) {
          var i = e(t.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, i),
            this._change(t, i),
            e(t.target).removeClass("ui-state-active"));
        },
      },
    });
});
jQuery(function (r) {
  if ("undefined" == typeof woocommerce_price_slider_params) return !1;
  r("input#min_price, input#max_price").hide(),
    r(".price_slider, .price_label").show();
  var e = r(".price_slider_amount #min_price").data("min"),
    c = r(".price_slider_amount #max_price").data("max");
  (current_min_price = parseInt(e, 10)),
    (current_max_price = parseInt(c, 10)),
    woocommerce_price_slider_params.min_price &&
      (current_min_price = parseInt(
        woocommerce_price_slider_params.min_price,
        10
      )),
    woocommerce_price_slider_params.max_price &&
      (current_max_price = parseInt(
        woocommerce_price_slider_params.max_price,
        10
      )),
    r("body").bind(
      "price_slider_create price_slider_slide",
      function (e, c, _) {
        "left" === woocommerce_price_slider_params.currency_pos
          ? (r(".price_slider_amount span.from").html(
              woocommerce_price_slider_params.currency_symbol + c
            ),
            r(".price_slider_amount span.to").html(
              woocommerce_price_slider_params.currency_symbol + _
            ))
          : "left_space" === woocommerce_price_slider_params.currency_pos
          ? (r(".price_slider_amount span.from").html(
              woocommerce_price_slider_params.currency_symbol + " " + c
            ),
            r(".price_slider_amount span.to").html(
              woocommerce_price_slider_params.currency_symbol + " " + _
            ))
          : "right" === woocommerce_price_slider_params.currency_pos
          ? (r(".price_slider_amount span.from").html(
              c + woocommerce_price_slider_params.currency_symbol
            ),
            r(".price_slider_amount span.to").html(
              _ + woocommerce_price_slider_params.currency_symbol
            ))
          : "right_space" === woocommerce_price_slider_params.currency_pos &&
            (r(".price_slider_amount span.from").html(
              c + " " + woocommerce_price_slider_params.currency_symbol
            ),
            r(".price_slider_amount span.to").html(
              _ + " " + woocommerce_price_slider_params.currency_symbol
            )),
          r("body").trigger("price_slider_updated", c, _);
      }
    ),
    r(".price_slider").slider({
      range: !0,
      animate: !0,
      min: e,
      max: c,
      values: [current_min_price, current_max_price],
      create: function () {
        r(".price_slider_amount #min_price").val(current_min_price),
          r(".price_slider_amount #max_price").val(current_max_price),
          r("body").trigger("price_slider_create", [
            current_min_price,
            current_max_price,
          ]);
      },
      slide: function (e, c) {
        r("input#min_price").val(c.values[0]),
          r("input#max_price").val(c.values[1]),
          r("body").trigger("price_slider_slide", [c.values[0], c.values[1]]);
      },
      change: function (e, c) {
        r("body").trigger("price_slider_change", [c.values[0], c.values[1]]);
      },
    });
});
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e("object" == typeof exports ? require("jquery") : jQuery);
})(function (e) {
  function n(e) {
    return u.raw ? e : encodeURIComponent(e);
  }
  function o(e) {
    return u.raw ? e : decodeURIComponent(e);
  }
  function i(e) {
    return n(u.json ? JSON.stringify(e) : String(e));
  }
  function r(e) {
    0 === e.indexOf('"') &&
      (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return (
        (e = decodeURIComponent(e.replace(c, " "))), u.json ? JSON.parse(e) : e
      );
    } catch (e) {}
  }
  function t(n, o) {
    var i = u.raw ? n : r(n);
    return e.isFunction(o) ? o(i) : i;
  }
  var c = /\+/g,
    u = (e.cookie = function (r, c, f) {
      if (arguments.length > 1 && !e.isFunction(c)) {
        if (((f = e.extend({}, u.defaults, f)), "number" == typeof f.expires)) {
          var a = f.expires,
            d = (f.expires = new Date());
          d.setTime(+d + 864e5 * a);
        }
        return (document.cookie = [
          n(r),
          "=",
          i(c),
          f.expires ? "; expires=" + f.expires.toUTCString() : "",
          f.path ? "; path=" + f.path : "",
          f.domain ? "; domain=" + f.domain : "",
          f.secure ? "; secure" : "",
        ].join(""));
      }
      for (
        var p = r ? void 0 : {},
          s = document.cookie ? document.cookie.split("; ") : [],
          m = 0,
          x = s.length;
        m < x;
        m++
      ) {
        var l = s[m].split("="),
          k = o(l.shift()),
          v = l.join("=");
        if (r && r === k) {
          p = t(v, c);
          break;
        }
        r || void 0 === (v = t(v)) || (p[k] = v);
      }
      return p;
    });
  (u.defaults = {}),
    (e.removeCookie = function (n, o) {
      return (
        void 0 !== e.cookie(n) &&
        (e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n))
      );
    });
});
!(function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery);
})(function (e) {
  e.fn.tweet = function (t) {
    function r(e, t) {
      if ("string" == typeof e) {
        var r = e;
        for (var a in t) {
          var n = t[a];
          r = r.replace(new RegExp("{" + a + "}", "g"), null === n ? "" : n);
        }
        return r;
      }
      return e(t);
    }
    function a(t, r) {
      return function () {
        var a = [];
        return (
          this.each(function () {
            a.push(this.replace(t, r));
          }),
          e(a)
        );
      };
    }
    function n(e) {
      return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;");
    }
    function i(e, t) {
      return e.replace(p, function (e) {
        for (
          var r = /^[a-z]+:/i.test(e) ? e : "http://" + e, a = e, i = 0;
          i < t.length;
          ++i
        ) {
          var s = t[i];
          if (s.url == r && s.expanded_url) {
            (r = s.expanded_url), (a = s.display_url);
            break;
          }
        }
        return '<a href="' + n(r) + '">' + n(a) + "</a>";
      });
    }
    function s(e) {
      return Date.parse(
        e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3")
      );
    }
    function u(e) {
      var t = arguments.length > 1 ? arguments[1] : new Date(),
        r = parseInt((t.getTime() - e) / 1e3, 10),
        a = "";
      return (a =
        r < 1
          ? "just now"
          : r < 60
          ? r + " seconds ago"
          : r < 120
          ? "about a minute ago"
          : r < 2700
          ? "about " + parseInt(r / 60, 10).toString() + " minutes ago"
          : r < 7200
          ? "about an hour ago"
          : r < 86400
          ? "about " + parseInt(r / 3600, 10).toString() + " hours ago"
          : r < 172800
          ? "about a day ago"
          : "about " + parseInt(r / 86400, 10).toString() + " days ago");
    }
    function o(e) {
      return e.match(/^(@([A-Za-z0-9-_]+)) .*/i)
        ? w.auto_join_text_reply
        : e.match(p)
        ? w.auto_join_text_url
        : e.match(/^((\w+ed)|just) .*/im)
        ? w.auto_join_text_ed
        : e.match(/^(\w*ing) .*/i)
        ? w.auto_join_text_ing
        : w.auto_join_text_default;
    }
    function _() {
      var t = (w.modpath, null === w.fetch ? w.count : w.fetch),
        r = { include_entities: 1 };
      if (w.list)
        return {
          host: w.twitter_api_url,
          url: "/1.1/lists/statuses.json",
          parameters: e.extend({}, r, {
            list_id: w.list_id,
            slug: w.list,
            owner_screen_name: w.username,
            page: w.page,
            count: t,
            include_rts: w.retweets ? 1 : 0,
          }),
        };
      if (w.favorites)
        return {
          host: w.twitter_api_url,
          url: "/1.1/favorites/list.json",
          parameters: e.extend({}, r, {
            list_id: w.list_id,
            screen_name: w.username,
            page: w.page,
            count: t,
          }),
        };
      if (null === w.query && 1 === w.username.length)
        return {
          host: w.twitter_api_url,
          url: "/1.1/statuses/user_timeline.json",
          parameters: e.extend({}, r, {
            screen_name: w.username,
            page: w.page,
            count: t,
            include_rts: w.retweets ? 1 : 0,
          }),
        };
      var a = w.query || "from:" + w.username.join(" OR from:");
      return {
        host: w.twitter_search_url,
        url: "/1.1/search/tweets.json",
        parameters: e.extend({}, r, { q: a, rpp: t }),
      };
    }
    function l(e, t) {
      return t
        ? "user" in e
          ? e.user.profile_image_url_https
          : l(e, !1).replace(
              /^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,
              "https://s3.amazonaws.com/twitter_production/"
            )
        : e.profile_image_url || e.user.profile_image_url;
    }
    function c(t) {
      var a = {};
      return (
        (a.item = t),
        (a.source = t.source),
        (a.name = t.from_user_name || t.user.name),
        (a.screen_name = t.from_user || t.user.screen_name),
        (a.avatar_size = w.avatar_size),
        (a.avatar_url = l(t, "https:" === document.location.protocol)),
        (a.retweet = "undefined" != typeof t.retweeted_status),
        (a.tweet_time = s(t.created_at)),
        (a.join_text = "auto" == w.join_text ? o(t.text) : w.join_text),
        (a.tweet_id = t.id_str),
        (a.twitter_base = "http://" + w.twitter_url + "/"),
        (a.user_url = a.twitter_base + a.screen_name),
        (a.tweet_url = a.user_url + "/status/" + a.tweet_id),
        (a.reply_url =
          a.twitter_base + "intent/tweet?in_reply_to=" + a.tweet_id),
        (a.retweet_url =
          a.twitter_base + "intent/retweet?tweet_id=" + a.tweet_id),
        (a.favorite_url =
          a.twitter_base + "intent/favorite?tweet_id=" + a.tweet_id),
        (a.retweeted_screen_name =
          a.retweet && t.retweeted_status.user.screen_name),
        (a.tweet_relative_time = u(a.tweet_time)),
        (a.entities = t.entities
          ? (t.entities.urls || []).concat(t.entities.media || [])
          : []),
        (a.tweet_raw_text = a.retweet
          ? "RT @" + a.retweeted_screen_name + " " + t.retweeted_status.text
          : t.text),
        (a.tweet_text = e([i(a.tweet_raw_text, a.entities)])
          .linkUser()
          .linkHash()[0]),
        (a.tweet_text_fancy = e([a.tweet_text]).makeHeart()[0]),
        (a.user = r(
          '<a class="tweet_user" href="{user_url}">{screen_name}</a>',
          a
        )),
        (a.join = w.join_text
          ? r(' <span class="tweet_join">{join_text}</span> ', a)
          : " "),
        (a.avatar = a.avatar_size
          ? r(
              '<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',
              a
            )
          : ""),
        (a.time = r(
          '<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',
          a
        )),
        (a.text = r('<span class="tweet_text">{tweet_text_fancy}</span>', a)),
        (a.reply_action = r(
          '<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',
          a
        )),
        (a.retweet_action = r(
          '<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',
          a
        )),
        (a.favorite_action = r(
          '<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',
          a
        )),
        a
      );
    }
    var w = e.extend(
        {
          modpath: "/twitter/",
          username: null,
          list_id: null,
          list: null,
          favorites: !1,
          query: null,
          avatar_size: null,
          count: 3,
          fetch: null,
          page: 1,
          retweets: !0,
          intro_text: null,
          outro_text: null,
          join_text: null,
          auto_join_text_default: "i said,",
          auto_join_text_ed: "i",
          auto_join_text_ing: "i am",
          auto_join_text_reply: "i replied to",
          auto_join_text_url: "i was looking at",
          loading_text: null,
          refresh_interval: null,
          twitter_url: "twitter.com",
          twitter_api_url: "api.twitter.com",
          twitter_search_url: "api.twitter.com",
          template: "{avatar}{time}{join}{text}",
          comparator: function (e, t) {
            return t.tweet_time - e.tweet_time;
          },
          filter: function (e) {
            return !0;
          },
        },
        t
      ),
      p =
        /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;
    return (
      e.extend({ tweet: { t: r } }),
      e.fn.extend({
        linkUser: a(
          /(^|[\W])@(\w+)/gi,
          '$1<span class="at">@</span><a href="http://' +
            w.twitter_url +
            '/$2">$2</a>'
        ),
        linkHash: a(
          /(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
          ' <a href="http://' +
            w.twitter_search_url +
            "/search?q=&tag=$1&lang=all" +
            (w.username && 1 == w.username.length && !w.list
              ? "&from=" + w.username.join("%2BOR%2B")
              : "") +
            '" class="tweet_hashtag">#$1</a>'
        ),
        makeHeart: a(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>"),
      }),
      this.each(function (t, a) {
        var n = e('<ul class="tweet_list">'),
          i = '<p class="tweet_intro">' + w.intro_text + "</p>",
          s = '<p class="tweet_outro">' + w.outro_text + "</p>",
          u = e('<p class="loading">' + w.loading_text + "</p>");
        w.username &&
          "string" == typeof w.username &&
          (w.username = [w.username]),
          e(a)
            .unbind("tweet:load")
            .bind("tweet:load", function () {
              w.loading_text && e(a).empty().append(u),
                e.ajax({
                  dataType: "json",
                  type: "post",
                  async: !1,
                  url: w.modpath || "/twitter/",
                  data: { request: _() },
                  success: function (t, u) {
                    t.message && console.log(t.message);
                    var o = t.response;
                    e(a).empty().append(n),
                      w.intro_text && n.before(i),
                      n.empty(),
                      void 0 !== o.statuses
                        ? (resp = o.statuses)
                        : void 0 !== o.results
                        ? (resp = o.results)
                        : (resp = o);
                    var _ = e.map(resp, c);
                    (_ = e
                      .grep(_, w.filter)
                      .sort(w.comparator)
                      .slice(0, w.count)),
                      n
                        .append(
                          e
                            .map(_, function (e) {
                              return "<li>" + r(w.template, e) + "</li>";
                            })
                            .join("")
                        )
                        .children("li:first")
                        .addClass("tweet_first")
                        .end()
                        .children("li:odd")
                        .addClass("tweet_even")
                        .end()
                        .children("li:even")
                        .addClass("tweet_odd"),
                      w.outro_text && n.after(s),
                      e(a)
                        .trigger("loaded")
                        .trigger(_ ? "empty" : "full"),
                      w.refresh_interval &&
                        window.setTimeout(function () {
                          e(a).trigger("tweet:load");
                        }, 1e3 * w.refresh_interval);
                  },
                });
            })
            .trigger("tweet:load");
      })
    );
  };
});
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "undefined" != typeof module && module.exports
    ? (module.exports = t(require("jquery")))
    : t(jQuery);
})(function (t) {
  var e = -1,
    o = -1,
    i = function (t) {
      return parseFloat(t) || 0;
    },
    a = function (e) {
      var o = 1,
        a = t(e),
        n = null,
        r = [];
      return (
        a.each(function () {
          var e = t(this),
            a = e.offset().top - i(e.css("margin-top")),
            s = r.length > 0 ? r[r.length - 1] : null;
          null === s
            ? r.push(e)
            : Math.floor(Math.abs(n - a)) <= o
            ? (r[r.length - 1] = s.add(e))
            : r.push(e),
            (n = a);
        }),
        r
      );
    },
    n = function (e) {
      var o = { byRow: !0, property: "height", target: null, remove: !1 };
      return "object" == typeof e
        ? t.extend(o, e)
        : ("boolean" == typeof e
            ? (o.byRow = e)
            : "remove" === e && (o.remove = !0),
          o);
    },
    r = (t.fn.matchHeight = function (e) {
      var o = n(e);
      if (o.remove) {
        var i = this;
        return (
          this.css(o.property, ""),
          t.each(r._groups, function (t, e) {
            e.elements = e.elements.not(i);
          }),
          this
        );
      }
      return this.length <= 1 && !o.target
        ? this
        : (r._groups.push({ elements: this, options: o }),
          r._apply(this, o),
          this);
    });
  (r.version = "0.7.0"),
    (r._groups = []),
    (r._throttle = 80),
    (r._maintainScroll = !1),
    (r._beforeUpdate = null),
    (r._afterUpdate = null),
    (r._rows = a),
    (r._parse = i),
    (r._parseOptions = n),
    (r._apply = function (e, o) {
      var s = n(o),
        h = t(e),
        l = [h],
        c = t(window).scrollTop(),
        p = t("html").outerHeight(!0),
        d = h.parents().filter(":hidden");
      return (
        d.each(function () {
          var e = t(this);
          e.data("style-cache", e.attr("style"));
        }),
        d.css("display", "block"),
        s.byRow &&
          !s.target &&
          (h.each(function () {
            var e = t(this),
              o = e.css("display");
            "inline-block" !== o &&
              "flex" !== o &&
              "inline-flex" !== o &&
              (o = "block"),
              e.data("style-cache", e.attr("style")),
              e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden",
              });
          }),
          (l = a(h)),
          h.each(function () {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "");
          })),
        t.each(l, function (e, o) {
          var a = t(o),
            n = 0;
          if (s.target) n = s.target.outerHeight(!1);
          else {
            if (s.byRow && a.length <= 1) return void a.css(s.property, "");
            a.each(function () {
              var e = t(this),
                o = e.attr("style"),
                i = e.css("display");
              "inline-block" !== i &&
                "flex" !== i &&
                "inline-flex" !== i &&
                (i = "block");
              var a = { display: i };
              (a[s.property] = ""),
                e.css(a),
                e.outerHeight(!1) > n && (n = e.outerHeight(!1)),
                o ? e.attr("style", o) : e.css("display", "");
            });
          }
          a.each(function () {
            var e = t(this),
              o = 0;
            (s.target && e.is(s.target)) ||
              ("border-box" !== e.css("box-sizing") &&
                ((o +=
                  i(e.css("border-top-width")) +
                  i(e.css("border-bottom-width"))),
                (o += i(e.css("padding-top")) + i(e.css("padding-bottom")))),
              e.css(s.property, n - o + "px"));
          });
        }),
        d.each(function () {
          var e = t(this);
          e.attr("style", e.data("style-cache") || null);
        }),
        r._maintainScroll &&
          t(window).scrollTop((c / p) * t("html").outerHeight(!0)),
        this
      );
    }),
    (r._applyDataApi = function () {
      var e = {};
      t("[data-match-height], [data-mh]").each(function () {
        var o = t(this),
          i = o.attr("data-mh") || o.attr("data-match-height");
        i in e ? (e[i] = e[i].add(o)) : (e[i] = o);
      }),
        t.each(e, function () {
          this.matchHeight(!0);
        });
    });
  var s = function (e) {
    r._beforeUpdate && r._beforeUpdate(e, r._groups),
      t.each(r._groups, function () {
        r._apply(this.elements, this.options);
      }),
      r._afterUpdate && r._afterUpdate(e, r._groups);
  };
  (r._update = function (i, a) {
    if (a && "resize" === a.type) {
      var n = t(window).width();
      if (n === e) return;
      e = n;
    }
    i
      ? -1 === o &&
        (o = setTimeout(function () {
          s(a), (o = -1);
        }, r._throttle))
      : s(a);
  }),
    t(r._applyDataApi),
    t(window).bind("load", function (t) {
      r._update(!1, t);
    }),
    t(window).bind("resize orientationchange", function (t) {
      r._update(!0, t);
    });
});
("use strict");
!(function (t) {
  t.fn.addWidthClass = function (i) {
    for (
      var e = t.extend({ breakpoints: [200, 400, 600, 1e3, 1200] }, i),
        n = "",
        r = e.breakpoints.length - 1;
      r >= 0;
      r--
    )
      n += " width-lt-" + e.breakpoints[r] + " width-gt-" + e.breakpoints[r];
    return this.each(function () {
      for (
        var t = jQuery(this), i = "", r = e.breakpoints.length - 1;
        r >= 0;
        r--
      )
        i +=
          t.width() <= e.breakpoints[r]
            ? " width-lt-" + e.breakpoints[r]
            : " width-gt-" + e.breakpoints[r];
      t.addClass(i),
        jQuery(window).on("resize", function () {
          (i = ""), t.removeClass(n);
          for (var r = e.breakpoints.length - 1; r >= 0; r--)
            i +=
              t.width() <= e.breakpoints[r]
                ? " width-lt-" + e.breakpoints[r]
                : " width-gt-" + e.breakpoints[r];
          t.addClass(i);
        });
    });
  };
})(jQuery);
