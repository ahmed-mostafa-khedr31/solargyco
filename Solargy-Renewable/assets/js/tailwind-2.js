(() => {
  var Ze = !1,
    Qe = !1,
    H = [],
    et = -1;
  function zt(e) {
    En(e);
  }
  function En(e) {
    H.includes(e) || H.push(e), vn();
  }
  function we(e) {
    let t = H.indexOf(e);
    t !== -1 && t > et && H.splice(t, 1);
  }
  function vn() {
    !Qe && !Ze && ((Ze = !0), queueMicrotask(Sn));
  }
  function Sn() {
    (Ze = !1), (Qe = !0);
    for (let e = 0; e < H.length; e++) H[e](), (et = e);
    (H.length = 0), (et = -1), (Qe = !1);
  }
  var T,
    I,
    L,
    rt,
    tt = !0;
  function Vt(e) {
    (tt = !1), e(), (tt = !0);
  }
  function Ht(e) {
    (T = e.reactive),
      (L = e.release),
      (I = (t) =>
        e.effect(t, {
          scheduler: (r) => {
            tt ? zt(r) : r();
          },
        })),
      (rt = e.raw);
  }
  function nt(e) {
    I = e;
  }
  function qt(e) {
    let t = () => {};
    return [
      (n) => {
        let i = I(n);
        return (
          e._x_effects ||
            ((e._x_effects = new Set()),
            (e._x_runEffects = () => {
              e._x_effects.forEach((o) => o());
            })),
          e._x_effects.add(i),
          (t = () => {
            i !== void 0 && (e._x_effects.delete(i), L(i));
          }),
          i
        );
      },
      () => {
        t();
      },
    ];
  }
  function q(e, t, r = {}) {
    e.dispatchEvent(
      new CustomEvent(t, {
        detail: r,
        bubbles: !0,
        composed: !0,
        cancelable: !0,
      })
    );
  }
  function O(e, t) {
    if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
      Array.from(e.children).forEach((i) => O(i, t));
      return;
    }
    let r = !1;
    if ((t(e, () => (r = !0)), r)) return;
    let n = e.firstElementChild;
    for (; n; ) O(n, t, !1), (n = n.nextElementSibling);
  }
  function v(e, ...t) {
    console.warn(`Alpine Warning: ${e}`, ...t);
  }
  var Ut = !1;
  function Wt() {
    Ut &&
      v(
        "Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."
      ),
      (Ut = !0),
      document.body ||
        v(
          "Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"
        ),
      q(document, "alpine:init"),
      q(document, "alpine:initializing"),
      ce(),
      er((t) => S(t, O)),
      Q((t) => ae(t)),
      Se((t, r) => {
        le(t, r).forEach((n) => n());
      });
    let e = (t) => !U(t.parentElement, !0);
    Array.from(document.querySelectorAll(Yt()))
      .filter(e)
      .forEach((t) => {
        S(t);
      }),
      q(document, "alpine:initialized");
  }
  var it = [],
    Gt = [];
  function Jt() {
    return it.map((e) => e());
  }
  function Yt() {
    return it.concat(Gt).map((e) => e());
  }
  function Ee(e) {
    it.push(e);
  }
  function ve(e) {
    Gt.push(e);
  }
  function U(e, t = !1) {
    return Z(e, (r) => {
      if ((t ? Yt() : Jt()).some((i) => r.matches(i))) return !0;
    });
  }
  function Z(e, t) {
    if (e) {
      if (t(e)) return e;
      if ((e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement))
        return Z(e.parentElement, t);
    }
  }
  function Xt(e) {
    return Jt().some((t) => e.matches(t));
  }
  var Zt = [];
  function Qt(e) {
    Zt.push(e);
  }
  function S(e, t = O, r = () => {}) {
    rr(() => {
      t(e, (n, i) => {
        r(n, i),
          Zt.forEach((o) => o(n, i)),
          le(n, n.attributes).forEach((o) => o()),
          n._x_ignore && i();
      });
    });
  }
  function ae(e) {
    O(e, (t) => {
      ot(t), tr(t);
    });
  }
  var nr = [],
    ir = [],
    or = [];
  function er(e) {
    or.push(e);
  }
  function Q(e, t) {
    typeof t == "function"
      ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t))
      : ((t = e), ir.push(t));
  }
  function Se(e) {
    nr.push(e);
  }
  function Oe(e, t, r) {
    e._x_attributeCleanups || (e._x_attributeCleanups = {}),
      e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []),
      e._x_attributeCleanups[t].push(r);
  }
  function ot(e, t) {
    e._x_attributeCleanups &&
      Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
        (t === void 0 || t.includes(r)) &&
          (n.forEach((i) => i()), delete e._x_attributeCleanups[r]);
      });
  }
  function tr(e) {
    if (e._x_cleanups) for (; e._x_cleanups.length; ) e._x_cleanups.pop()();
  }
  var at = new MutationObserver(ft),
    ct = !1;
  function ce() {
    at.observe(document, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeOldValue: !0,
    }),
      (ct = !0);
  }
  function lt() {
    An(), at.disconnect(), (ct = !1);
  }
  var ue = [],
    st = !1;
  function An() {
    (ue = ue.concat(at.takeRecords())),
      ue.length &&
        !st &&
        ((st = !0),
        queueMicrotask(() => {
          On(), (st = !1);
        }));
  }
  function On() {
    ft(ue), (ue.length = 0);
  }
  function h(e) {
    if (!ct) return e();
    lt();
    let t = e();
    return ce(), t;
  }
  var ut = !1,
    Ae = [];
  function sr() {
    ut = !0;
  }
  function ar() {
    (ut = !1), ft(Ae), (Ae = []);
  }
  function ft(e) {
    if (ut) {
      Ae = Ae.concat(e);
      return;
    }
    let t = [],
      r = [],
      n = new Map(),
      i = new Map();
    for (let o = 0; o < e.length; o++)
      if (
        !e[o].target._x_ignoreMutationObserver &&
        (e[o].type === "childList" &&
          (e[o].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)),
          e[o].removedNodes.forEach((s) => s.nodeType === 1 && r.push(s))),
        e[o].type === "attributes")
      ) {
        let s = e[o].target,
          a = e[o].attributeName,
          c = e[o].oldValue,
          l = () => {
            n.has(s) || n.set(s, []),
              n.get(s).push({ name: a, value: s.getAttribute(a) });
          },
          u = () => {
            i.has(s) || i.set(s, []), i.get(s).push(a);
          };
        s.hasAttribute(a) && c === null
          ? l()
          : s.hasAttribute(a)
          ? (u(), l())
          : u();
      }
    i.forEach((o, s) => {
      ot(s, o);
    }),
      n.forEach((o, s) => {
        nr.forEach((a) => a(s, o));
      });
    for (let o of r) t.includes(o) || (ir.forEach((s) => s(o)), ae(o));
    t.forEach((o) => {
      (o._x_ignoreSelf = !0), (o._x_ignore = !0);
    });
    for (let o of t)
      r.includes(o) ||
        (o.isConnected &&
          (delete o._x_ignoreSelf,
          delete o._x_ignore,
          or.forEach((s) => s(o)),
          (o._x_ignore = !0),
          (o._x_ignoreSelf = !0)));
    t.forEach((o) => {
      delete o._x_ignoreSelf, delete o._x_ignore;
    }),
      (t = null),
      (r = null),
      (n = null),
      (i = null);
  }
  function Ce(e) {
    return j($(e));
  }
  function N(e, t, r) {
    return (
      (e._x_dataStack = [t, ...$(r || e)]),
      () => {
        e._x_dataStack = e._x_dataStack.filter((n) => n !== t);
      }
    );
  }
  function $(e) {
    return e._x_dataStack
      ? e._x_dataStack
      : typeof ShadowRoot == "function" && e instanceof ShadowRoot
      ? $(e.host)
      : e.parentNode
      ? $(e.parentNode)
      : [];
  }
  function j(e) {
    return new Proxy({ objects: e }, Cn);
  }
  var Cn = {
    ownKeys({ objects: e }) {
      return Array.from(new Set(e.flatMap((t) => Object.keys(t))));
    },
    has({ objects: e }, t) {
      return t == Symbol.unscopables
        ? !1
        : e.some((r) => Object.prototype.hasOwnProperty.call(r, t));
    },
    get({ objects: e }, t, r) {
      return t == "toJSON"
        ? Tn
        : Reflect.get(
            e.find((n) => Object.prototype.hasOwnProperty.call(n, t)) || {},
            t,
            r
          );
    },
    set({ objects: e }, t, r, n) {
      let i =
          e.find((s) => Object.prototype.hasOwnProperty.call(s, t)) ||
          e[e.length - 1],
        o = Object.getOwnPropertyDescriptor(i, t);
      return o?.set && o?.get ? Reflect.set(i, t, r, n) : Reflect.set(i, t, r);
    },
  };
  function Tn() {
    return Reflect.ownKeys(this).reduce(
      (t, r) => ((t[r] = Reflect.get(this, r)), t),
      {}
    );
  }
  function Te(e) {
    let t = (n) => typeof n == "object" && !Array.isArray(n) && n !== null,
      r = (n, i = "") => {
        Object.entries(Object.getOwnPropertyDescriptors(n)).forEach(
          ([o, { value: s, enumerable: a }]) => {
            if (a === !1 || s === void 0) return;
            let c = i === "" ? o : `${i}.${o}`;
            typeof s == "object" && s !== null && s._x_interceptor
              ? (n[o] = s.initialize(e, c, o))
              : t(s) && s !== n && !(s instanceof Element) && r(s, c);
          }
        );
      };
    return r(e);
  }
  function Re(e, t = () => {}) {
    let r = {
      initialValue: void 0,
      _x_interceptor: !0,
      initialize(n, i, o) {
        return e(
          this.initialValue,
          () => Rn(n, i),
          (s) => dt(n, i, s),
          i,
          o
        );
      },
    };
    return (
      t(r),
      (n) => {
        if (typeof n == "object" && n !== null && n._x_interceptor) {
          let i = r.initialize.bind(r);
          r.initialize = (o, s, a) => {
            let c = n.initialize(o, s, a);
            return (r.initialValue = c), i(o, s, a);
          };
        } else r.initialValue = n;
        return r;
      }
    );
  }
  function Rn(e, t) {
    return t.split(".").reduce((r, n) => r[n], e);
  }
  function dt(e, t, r) {
    if ((typeof t == "string" && (t = t.split(".")), t.length === 1))
      e[t[0]] = r;
    else {
      if (t.length === 0) throw error;
      return e[t[0]] || (e[t[0]] = {}), dt(e[t[0]], t.slice(1), r);
    }
  }
  var cr = {};
  function y(e, t) {
    cr[e] = t;
  }
  function fe(e, t) {
    return (
      Object.entries(cr).forEach(([r, n]) => {
        let i = null;
        function o() {
          if (i) return i;
          {
            let [s, a] = pt(t);
            return (i = { interceptor: Re, ...s }), Q(t, a), i;
          }
        }
        Object.defineProperty(e, `$${r}`, {
          get() {
            return n(t, o());
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  function lr(e, t, r, ...n) {
    try {
      return r(...n);
    } catch (i) {
      ee(i, e, t);
    }
  }
  function ee(e, t, r = void 0) {
    Object.assign(e, { el: t, expression: r }),
      console.warn(
        `Alpine Expression Error: ${e.message}

${
  r
    ? 'Expression: "' +
      r +
      `"

`
    : ""
}`,
        t
      ),
      setTimeout(() => {
        throw e;
      }, 0);
  }
  var Me = !0;
  function Pe(e) {
    let t = Me;
    Me = !1;
    let r = e();
    return (Me = t), r;
  }
  function R(e, t, r = {}) {
    let n;
    return x(e, t)((i) => (n = i), r), n;
  }
  function x(...e) {
    return ur(...e);
  }
  var ur = ht;
  function fr(e) {
    ur = e;
  }
  function ht(e, t) {
    let r = {};
    fe(r, e);
    let n = [r, ...$(e)],
      i = typeof t == "function" ? Mn(n, t) : Pn(n, t, e);
    return lr.bind(null, e, t, i);
  }
  function Mn(e, t) {
    return (r = () => {}, { scope: n = {}, params: i = [] } = {}) => {
      let o = t.apply(j([n, ...e]), i);
      Ne(r, o);
    };
  }
  var mt = {};
  function Nn(e, t) {
    if (mt[e]) return mt[e];
    let r = Object.getPrototypeOf(async function () {}).constructor,
      n =
        /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim())
          ? `(async()=>{ ${e} })()`
          : e,
      o = (() => {
        try {
          let s = new r(
            ["__self", "scope"],
            `with (scope) { __self.result = ${n} }; __self.finished = true; return __self.result;`
          );
          return (
            Object.defineProperty(s, "name", { value: `[Alpine] ${e}` }), s
          );
        } catch (s) {
          return ee(s, t, e), Promise.resolve();
        }
      })();
    return (mt[e] = o), o;
  }
  function Pn(e, t, r) {
    let n = Nn(t, r);
    return (i = () => {}, { scope: o = {}, params: s = [] } = {}) => {
      (n.result = void 0), (n.finished = !1);
      let a = j([o, ...e]);
      if (typeof n == "function") {
        let c = n(n, a).catch((l) => ee(l, r, t));
        n.finished
          ? (Ne(i, n.result, a, s, r), (n.result = void 0))
          : c
              .then((l) => {
                Ne(i, l, a, s, r);
              })
              .catch((l) => ee(l, r, t))
              .finally(() => (n.result = void 0));
      }
    };
  }
  function Ne(e, t, r, n, i) {
    if (Me && typeof t == "function") {
      let o = t.apply(r, n);
      o instanceof Promise
        ? o.then((s) => Ne(e, s, r, n)).catch((s) => ee(s, i, t))
        : e(o);
    } else
      typeof t == "object" && t instanceof Promise ? t.then((o) => e(o)) : e(t);
  }
  var yt = "x-";
  function C(e = "") {
    return yt + e;
  }
  function dr(e) {
    yt = e;
  }
  var _t = {};
  function d(e, t) {
    return (
      (_t[e] = t),
      {
        before(r) {
          if (!_t[r]) {
            console.warn(
              "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
            );
            return;
          }
          let n = W.indexOf(r);
          W.splice(n >= 0 ? n : W.indexOf("DEFAULT"), 0, e);
        },
      }
    );
  }
  function le(e, t, r) {
    if (((t = Array.from(t)), e._x_virtualDirectives)) {
      let o = Object.entries(e._x_virtualDirectives).map(([a, c]) => ({
          name: a,
          value: c,
        })),
        s = bt(o);
      (o = o.map((a) =>
        s.find((c) => c.name === a.name)
          ? { name: `x-bind:${a.name}`, value: `"${a.value}"` }
          : a
      )),
        (t = t.concat(o));
    }
    let n = {};
    return t
      .map(mr((o, s) => (n[o] = s)))
      .filter(_r)
      .map(Dn(n, r))
      .sort(kn)
      .map((o) => In(e, o));
  }
  function bt(e) {
    return Array.from(e)
      .map(mr())
      .filter((t) => !_r(t));
  }
  var gt = !1,
    de = new Map(),
    pr = Symbol();
  function rr(e) {
    gt = !0;
    let t = Symbol();
    (pr = t), de.set(t, []);
    let r = () => {
        for (; de.get(t).length; ) de.get(t).shift()();
        de.delete(t);
      },
      n = () => {
        (gt = !1), r();
      };
    e(r), n();
  }
  function pt(e) {
    let t = [],
      r = (a) => t.push(a),
      [n, i] = qt(e);
    return (
      t.push(i),
      [
        {
          Alpine: F,
          effect: n,
          cleanup: r,
          evaluateLater: x.bind(x, e),
          evaluate: R.bind(R, e),
        },
        () => t.forEach((a) => a()),
      ]
    );
  }
  function In(e, t) {
    let r = () => {},
      n = _t[t.type] || r,
      [i, o] = pt(e);
    Oe(e, t.original, o);
    let s = () => {
      e._x_ignore ||
        e._x_ignoreSelf ||
        (n.inline && n.inline(e, t, i),
        (n = n.bind(n, e, t, i)),
        gt ? de.get(pr).push(n) : n());
    };
    return (s.runCleanups = o), s;
  }
  var Ie =
      (e, t) =>
      ({ name: r, value: n }) => (
        r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }
      ),
    De = (e) => e;
  function mr(e = () => {}) {
    return ({ name: t, value: r }) => {
      let { name: n, value: i } = hr.reduce((o, s) => s(o), {
        name: t,
        value: r,
      });
      return n !== t && e(n, t), { name: n, value: i };
    };
  }
  var hr = [];
  function te(e) {
    hr.push(e);
  }
  function _r({ name: e }) {
    return gr().test(e);
  }
  var gr = () => new RegExp(`^${yt}([^:^.]+)\\b`);
  function Dn(e, t) {
    return ({ name: r, value: n }) => {
      let i = r.match(gr()),
        o = r.match(/:([a-zA-Z0-9\-_:]+)/),
        s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
        a = t || e[r] || r;
      return {
        type: i ? i[1] : null,
        value: o ? o[1] : null,
        modifiers: s.map((c) => c.replace(".", "")),
        expression: n,
        original: a,
      };
    };
  }
  var xt = "DEFAULT",
    W = [
      "ignore",
      "ref",
      "data",
      "id",
      "bind",
      "init",
      "for",
      "model",
      "modelable",
      "transition",
      "show",
      "if",
      xt,
      "teleport",
    ];
  function kn(e, t) {
    let r = W.indexOf(e.type) === -1 ? xt : e.type,
      n = W.indexOf(t.type) === -1 ? xt : t.type;
    return W.indexOf(r) - W.indexOf(n);
  }
  var wt = [],
    Et = !1;
  function re(e = () => {}) {
    return (
      queueMicrotask(() => {
        Et ||
          setTimeout(() => {
            ke();
          });
      }),
      new Promise((t) => {
        wt.push(() => {
          e(), t();
        });
      })
    );
  }
  function ke() {
    for (Et = !1; wt.length; ) wt.shift()();
  }
  function xr() {
    Et = !0;
  }
  function pe(e, t) {
    return Array.isArray(t)
      ? yr(e, t.join(" "))
      : typeof t == "object" && t !== null
      ? Ln(e, t)
      : typeof t == "function"
      ? pe(e, t())
      : yr(e, t);
  }
  function yr(e, t) {
    let r = (o) => o.split(" ").filter(Boolean),
      n = (o) =>
        o
          .split(" ")
          .filter((s) => !e.classList.contains(s))
          .filter(Boolean),
      i = (o) => (
        e.classList.add(...o),
        () => {
          e.classList.remove(...o);
        }
      );
    return (t = t === !0 ? (t = "") : t || ""), i(n(t));
  }
  function Ln(e, t) {
    let r = (a) => a.split(" ").filter(Boolean),
      n = Object.entries(t)
        .flatMap(([a, c]) => (c ? r(a) : !1))
        .filter(Boolean),
      i = Object.entries(t)
        .flatMap(([a, c]) => (c ? !1 : r(a)))
        .filter(Boolean),
      o = [],
      s = [];
    return (
      i.forEach((a) => {
        e.classList.contains(a) && (e.classList.remove(a), s.push(a));
      }),
      n.forEach((a) => {
        e.classList.contains(a) || (e.classList.add(a), o.push(a));
      }),
      () => {
        s.forEach((a) => e.classList.add(a)),
          o.forEach((a) => e.classList.remove(a));
      }
    );
  }
  function G(e, t) {
    return typeof t == "object" && t !== null ? $n(e, t) : jn(e, t);
  }
  function $n(e, t) {
    let r = {};
    return (
      Object.entries(t).forEach(([n, i]) => {
        (r[n] = e.style[n]),
          n.startsWith("--") || (n = Fn(n)),
          e.style.setProperty(n, i);
      }),
      setTimeout(() => {
        e.style.length === 0 && e.removeAttribute("style");
      }),
      () => {
        G(e, r);
      }
    );
  }
  function jn(e, t) {
    let r = e.getAttribute("style", t);
    return (
      e.setAttribute("style", t),
      () => {
        e.setAttribute("style", r || "");
      }
    );
  }
  function Fn(e) {
    return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  function me(e, t = () => {}) {
    let r = !1;
    return function () {
      r ? t.apply(this, arguments) : ((r = !0), e.apply(this, arguments));
    };
  }
  d(
    "transition",
    (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => {
      typeof n == "function" && (n = i(n)),
        n !== !1 && (!n || typeof n == "boolean" ? Kn(e, r, t) : Bn(e, n, t));
    }
  );
  function Bn(e, t, r) {
    br(e, pe, ""),
      {
        enter: (i) => {
          e._x_transition.enter.during = i;
        },
        "enter-start": (i) => {
          e._x_transition.enter.start = i;
        },
        "enter-end": (i) => {
          e._x_transition.enter.end = i;
        },
        leave: (i) => {
          e._x_transition.leave.during = i;
        },
        "leave-start": (i) => {
          e._x_transition.leave.start = i;
        },
        "leave-end": (i) => {
          e._x_transition.leave.end = i;
        },
      }[r](t);
  }
  function Kn(e, t, r) {
    br(e, G);
    let n = !t.includes("in") && !t.includes("out") && !r,
      i = n || t.includes("in") || ["enter"].includes(r),
      o = n || t.includes("out") || ["leave"].includes(r);
    t.includes("in") && !n && (t = t.filter((g, b) => b < t.indexOf("out"))),
      t.includes("out") && !n && (t = t.filter((g, b) => b > t.indexOf("out")));
    let s = !t.includes("opacity") && !t.includes("scale"),
      a = s || t.includes("opacity"),
      c = s || t.includes("scale"),
      l = a ? 0 : 1,
      u = c ? he(t, "scale", 95) / 100 : 1,
      p = he(t, "delay", 0) / 1e3,
      m = he(t, "origin", "center"),
      w = "opacity, transform",
      k = he(t, "duration", 150) / 1e3,
      be = he(t, "duration", 75) / 1e3,
      f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    i &&
      ((e._x_transition.enter.during = {
        transformOrigin: m,
        transitionDelay: `${p}s`,
        transitionProperty: w,
        transitionDuration: `${k}s`,
        transitionTimingFunction: f,
      }),
      (e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }),
      (e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" })),
      o &&
        ((e._x_transition.leave.during = {
          transformOrigin: m,
          transitionDelay: `${p}s`,
          transitionProperty: w,
          transitionDuration: `${be}s`,
          transitionTimingFunction: f,
        }),
        (e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }),
        (e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }));
  }
  function br(e, t, r = {}) {
    e._x_transition ||
      (e._x_transition = {
        enter: { during: r, start: r, end: r },
        leave: { during: r, start: r, end: r },
        in(n = () => {}, i = () => {}) {
          Le(
            e,
            t,
            {
              during: this.enter.during,
              start: this.enter.start,
              end: this.enter.end,
            },
            n,
            i
          );
        },
        out(n = () => {}, i = () => {}) {
          Le(
            e,
            t,
            {
              during: this.leave.during,
              start: this.leave.start,
              end: this.leave.end,
            },
            n,
            i
          );
        },
      });
  }
  window.Element.prototype._x_toggleAndCascadeWithTransitions = function (
    e,
    t,
    r,
    n
  ) {
    let i =
        document.visibilityState === "visible"
          ? requestAnimationFrame
          : setTimeout,
      o = () => i(r);
    if (t) {
      e._x_transition && (e._x_transition.enter || e._x_transition.leave)
        ? e._x_transition.enter &&
          (Object.entries(e._x_transition.enter.during).length ||
            Object.entries(e._x_transition.enter.start).length ||
            Object.entries(e._x_transition.enter.end).length)
          ? e._x_transition.in(r)
          : o()
        : e._x_transition
        ? e._x_transition.in(r)
        : o();
      return;
    }
    (e._x_hidePromise = e._x_transition
      ? new Promise((s, a) => {
          e._x_transition.out(
            () => {},
            () => s(n)
          ),
            e._x_transitioning.beforeCancel(() =>
              a({ isFromCancelledTransition: !0 })
            );
        })
      : Promise.resolve(n)),
      queueMicrotask(() => {
        let s = wr(e);
        s
          ? (s._x_hideChildren || (s._x_hideChildren = []),
            s._x_hideChildren.push(e))
          : i(() => {
              let a = (c) => {
                let l = Promise.all([
                  c._x_hidePromise,
                  ...(c._x_hideChildren || []).map(a),
                ]).then(([u]) => u());
                return delete c._x_hidePromise, delete c._x_hideChildren, l;
              };
              a(e).catch((c) => {
                if (!c.isFromCancelledTransition) throw c;
              });
            });
      });
  };
  function wr(e) {
    let t = e.parentNode;
    if (t) return t._x_hidePromise ? t : wr(t);
  }
  function Le(
    e,
    t,
    { during: r, start: n, end: i } = {},
    o = () => {},
    s = () => {}
  ) {
    if (
      (e._x_transitioning && e._x_transitioning.cancel(),
      Object.keys(r).length === 0 &&
        Object.keys(n).length === 0 &&
        Object.keys(i).length === 0)
    ) {
      o(), s();
      return;
    }
    let a, c, l;
    zn(e, {
      start() {
        a = t(e, n);
      },
      during() {
        c = t(e, r);
      },
      before: o,
      end() {
        a(), (l = t(e, i));
      },
      after: s,
      cleanup() {
        c(), l();
      },
    });
  }
  function zn(e, t) {
    let r,
      n,
      i,
      o = me(() => {
        h(() => {
          (r = !0),
            n || t.before(),
            i || (t.end(), ke()),
            t.after(),
            e.isConnected && t.cleanup(),
            delete e._x_transitioning;
        });
      });
    (e._x_transitioning = {
      beforeCancels: [],
      beforeCancel(s) {
        this.beforeCancels.push(s);
      },
      cancel: me(function () {
        for (; this.beforeCancels.length; ) this.beforeCancels.shift()();
        o();
      }),
      finish: o,
    }),
      h(() => {
        t.start(), t.during();
      }),
      xr(),
      requestAnimationFrame(() => {
        if (r) return;
        let s =
            Number(
              getComputedStyle(e)
                .transitionDuration.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3,
          a =
            Number(
              getComputedStyle(e)
                .transitionDelay.replace(/,.*/, "")
                .replace("s", "")
            ) * 1e3;
        s === 0 &&
          (s =
            Number(getComputedStyle(e).animationDuration.replace("s", "")) *
            1e3),
          h(() => {
            t.before();
          }),
          (n = !0),
          requestAnimationFrame(() => {
            r ||
              (h(() => {
                t.end();
              }),
              ke(),
              setTimeout(e._x_transitioning.finish, s + a),
              (i = !0));
          });
      });
  }
  function he(e, t, r) {
    if (e.indexOf(t) === -1) return r;
    let n = e[e.indexOf(t) + 1];
    if (!n || (t === "scale" && isNaN(n))) return r;
    if (t === "duration" || t === "delay") {
      let i = n.match(/([0-9]+)ms/);
      if (i) return i[1];
    }
    return t === "origin" &&
      ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2])
      ? [n, e[e.indexOf(t) + 2]].join(" ")
      : n;
  }
  var D = !1;
  function B(e, t = () => {}) {
    return (...r) => (D ? t(...r) : e(...r));
  }
  function Er(e) {
    return (...t) => D && e(...t);
  }
  function vr(e, t) {
    e._x_dataStack &&
      ((t._x_dataStack = e._x_dataStack),
      t.setAttribute("data-has-alpine-state", !0)),
      (D = !0),
      Ar(() => {
        S(t, (r, n) => {
          n(r, () => {});
        });
      }),
      (D = !1);
  }
  var vt = !1;
  function Sr(e, t) {
    t._x_dataStack || (t._x_dataStack = e._x_dataStack),
      (D = !0),
      (vt = !0),
      Ar(() => {
        Vn(t);
      }),
      (D = !1),
      (vt = !1);
  }
  function Vn(e) {
    let t = !1;
    S(e, (n, i) => {
      O(n, (o, s) => {
        if (t && Xt(o)) return s();
        (t = !0), i(o, s);
      });
    });
  }
  function Ar(e) {
    let t = I;
    nt((r, n) => {
      let i = t(r);
      return L(i), () => {};
    }),
      e(),
      nt(t);
  }
  function Or(e) {
    return D ? (vt ? !0 : e.hasAttribute("data-has-alpine-state")) : !1;
  }
  function _e(e, t, r, n = []) {
    switch (
      (e._x_bindings || (e._x_bindings = T({})),
      (e._x_bindings[t] = r),
      (t = n.includes("camel") ? Xn(t) : t),
      t)
    ) {
      case "value":
        Hn(e, r);
        break;
      case "style":
        Un(e, r);
        break;
      case "class":
        qn(e, r);
        break;
      case "selected":
      case "checked":
        Wn(e, t, r);
        break;
      default:
        Tr(e, t, r);
        break;
    }
  }
  function Hn(e, t) {
    if (e.type === "radio")
      e.attributes.value === void 0 && (e.value = t),
        window.fromModel && (e.checked = Cr(e.value, t));
    else if (e.type === "checkbox")
      Number.isInteger(t)
        ? (e.value = t)
        : !Array.isArray(t) &&
          typeof t != "boolean" &&
          ![null, void 0].includes(t)
        ? (e.value = String(t))
        : Array.isArray(t)
        ? (e.checked = t.some((r) => Cr(r, e.value)))
        : (e.checked = !!t);
    else if (e.tagName === "SELECT") Yn(e, t);
    else {
      if (e.value === t) return;
      e.value = t === void 0 ? "" : t;
    }
  }
  function qn(e, t) {
    e._x_undoAddedClasses && e._x_undoAddedClasses(),
      (e._x_undoAddedClasses = pe(e, t));
  }
  function Un(e, t) {
    e._x_undoAddedStyles && e._x_undoAddedStyles(),
      (e._x_undoAddedStyles = G(e, t));
  }
  function Wn(e, t, r) {
    Tr(e, t, r), Jn(e, t, r);
  }
  function Tr(e, t, r) {
    [null, void 0, !1].includes(r) && Zn(t)
      ? e.removeAttribute(t)
      : (Rr(t) && (r = t), Gn(e, t, r));
  }
  function Gn(e, t, r) {
    e.getAttribute(t) != r && e.setAttribute(t, r);
  }
  function Jn(e, t, r) {
    e[t] !== r && (e[t] = r);
  }
  function Yn(e, t) {
    let r = [].concat(t).map((n) => n + "");
    Array.from(e.options).forEach((n) => {
      n.selected = r.includes(n.value);
    });
  }
  function Xn(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function Cr(e, t) {
    return e == t;
  }
  function Rr(e) {
    return [
      "disabled",
      "checked",
      "required",
      "readonly",
      "hidden",
      "open",
      "selected",
      "autofocus",
      "itemscope",
      "multiple",
      "novalidate",
      "allowfullscreen",
      "allowpaymentrequest",
      "formnovalidate",
      "autoplay",
      "controls",
      "loop",
      "muted",
      "playsinline",
      "default",
      "ismap",
      "reversed",
      "async",
      "defer",
      "nomodule",
    ].includes(e);
  }
  function Zn(e) {
    return ![
      "aria-pressed",
      "aria-checked",
      "aria-expanded",
      "aria-selected",
    ].includes(e);
  }
  function Mr(e, t, r) {
    return e._x_bindings && e._x_bindings[t] !== void 0
      ? e._x_bindings[t]
      : Pr(e, t, r);
  }
  function Nr(e, t, r, n = !0) {
    if (e._x_bindings && e._x_bindings[t] !== void 0) return e._x_bindings[t];
    if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
      let i = e._x_inlineBindings[t];
      return (i.extract = n), Pe(() => R(e, i.expression));
    }
    return Pr(e, t, r);
  }
  function Pr(e, t, r) {
    let n = e.getAttribute(t);
    return n === null
      ? typeof r == "function"
        ? r()
        : r
      : n === ""
      ? !0
      : Rr(t)
      ? !![t, "true"].includes(n)
      : n;
  }
  function $e(e, t) {
    var r;
    return function () {
      var n = this,
        i = arguments,
        o = function () {
          (r = null), e.apply(n, i);
        };
      clearTimeout(r), (r = setTimeout(o, t));
    };
  }
  function je(e, t) {
    let r;
    return function () {
      let n = this,
        i = arguments;
      r || (e.apply(n, i), (r = !0), setTimeout(() => (r = !1), t));
    };
  }
  function Fe({ get: e, set: t }, { get: r, set: n }) {
    let i = !0,
      o,
      s = I(() => {
        let a = e(),
          c = r();
        if (i) n(St(a)), (i = !1), (o = JSON.stringify(a));
        else {
          let l = JSON.stringify(a);
          l !== o ? (n(St(a)), (o = l)) : (t(St(c)), (o = JSON.stringify(c)));
        }
        JSON.stringify(r()), JSON.stringify(e());
      });
    return () => {
      L(s);
    };
  }
  function St(e) {
    return typeof e == "object" ? JSON.parse(JSON.stringify(e)) : e;
  }
  function Ir(e) {
    (Array.isArray(e) ? e : [e]).forEach((r) => r(F));
  }
  var J = {},
    Dr = !1;
  function kr(e, t) {
    if ((Dr || ((J = T(J)), (Dr = !0)), t === void 0)) return J[e];
    (J[e] = t),
      typeof t == "object" &&
        t !== null &&
        t.hasOwnProperty("init") &&
        typeof t.init == "function" &&
        J[e].init(),
      Te(J[e]);
  }
  function Lr() {
    return J;
  }
  var $r = {};
  function jr(e, t) {
    let r = typeof t != "function" ? () => t : t;
    return e instanceof Element ? At(e, r()) : (($r[e] = r), () => {});
  }
  function Fr(e) {
    return (
      Object.entries($r).forEach(([t, r]) => {
        Object.defineProperty(e, t, {
          get() {
            return (...n) => r(...n);
          },
        });
      }),
      e
    );
  }
  function At(e, t, r) {
    let n = [];
    for (; n.length; ) n.pop()();
    let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })),
      o = bt(i);
    return (
      (i = i.map((s) =>
        o.find((a) => a.name === s.name)
          ? { name: `x-bind:${s.name}`, value: `"${s.value}"` }
          : s
      )),
      le(e, i, r).map((s) => {
        n.push(s.runCleanups), s();
      }),
      () => {
        for (; n.length; ) n.pop()();
      }
    );
  }
  var Br = {};
  function Kr(e, t) {
    Br[e] = t;
  }
  function zr(e, t) {
    return (
      Object.entries(Br).forEach(([r, n]) => {
        Object.defineProperty(e, r, {
          get() {
            return (...i) => n.bind(t)(...i);
          },
          enumerable: !1,
        });
      }),
      e
    );
  }
  var Qn = {
      get reactive() {
        return T;
      },
      get release() {
        return L;
      },
      get effect() {
        return I;
      },
      get raw() {
        return rt;
      },
      version: "3.13.2",
      flushAndStopDeferringMutations: ar,
      dontAutoEvaluateFunctions: Pe,
      disableEffectScheduling: Vt,
      startObservingMutations: ce,
      stopObservingMutations: lt,
      setReactivityEngine: Ht,
      onAttributeRemoved: Oe,
      onAttributesAdded: Se,
      closestDataStack: $,
      skipDuringClone: B,
      onlyDuringClone: Er,
      addRootSelector: Ee,
      addInitSelector: ve,
      addScopeToNode: N,
      deferMutations: sr,
      mapAttributes: te,
      evaluateLater: x,
      interceptInit: Qt,
      setEvaluator: fr,
      mergeProxies: j,
      extractProp: Nr,
      findClosest: Z,
      onElRemoved: Q,
      closestRoot: U,
      destroyTree: ae,
      interceptor: Re,
      transition: Le,
      setStyles: G,
      mutateDom: h,
      directive: d,
      entangle: Fe,
      throttle: je,
      debounce: $e,
      evaluate: R,
      initTree: S,
      nextTick: re,
      prefixed: C,
      prefix: dr,
      plugin: Ir,
      magic: y,
      store: kr,
      start: Wt,
      clone: Sr,
      cloneNode: vr,
      bound: Mr,
      $data: Ce,
      walk: O,
      data: Kr,
      bind: jr,
    },
    F = Qn;
  function Ot(e, t) {
    let r = Object.create(null),
      n = e.split(",");
    for (let i = 0; i < n.length; i++) r[n[i]] = !0;
    return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i];
  }
  var ei =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var Rs = Ot(
    ei +
      ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
  );
  var Vr = Object.freeze({}),
    Ms = Object.freeze([]);
  var ti = Object.prototype.hasOwnProperty,
    ge = (e, t) => ti.call(e, t),
    K = Array.isArray,
    ne = (e) => Hr(e) === "[object Map]";
  var ri = (e) => typeof e == "string",
    Be = (e) => typeof e == "symbol",
    xe = (e) => e !== null && typeof e == "object";
  var ni = Object.prototype.toString,
    Hr = (e) => ni.call(e),
    Ct = (e) => Hr(e).slice(8, -1);
  var Ke = (e) =>
    ri(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  var ze = (e) => {
      let t = Object.create(null);
      return (r) => t[r] || (t[r] = e(r));
    },
    ii = /-(\w)/g,
    Ns = ze((e) => e.replace(ii, (t, r) => (r ? r.toUpperCase() : ""))),
    oi = /\B([A-Z])/g,
    Ps = ze((e) => e.replace(oi, "-$1").toLowerCase()),
    Tt = ze((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Is = ze((e) => (e ? `on${Tt(e)}` : "")),
    Rt = (e, t) => e !== t && (e === e || t === t);
  var Mt = new WeakMap(),
    ye = [],
    P,
    Y = Symbol("iterate"),
    Nt = Symbol("Map key iterate");
  function si(e) {
    return e && e._isEffect === !0;
  }
  function Yr(e, t = Vr) {
    si(e) && (e = e.raw);
    let r = ci(e, t);
    return t.lazy || r(), r;
  }
  function Xr(e) {
    e.active &&
      (Zr(e), e.options.onStop && e.options.onStop(), (e.active = !1));
  }
  var ai = 0;
  function ci(e, t) {
    let r = function () {
      if (!r.active) return e();
      if (!ye.includes(r)) {
        Zr(r);
        try {
          return ui(), ye.push(r), (P = r), e();
        } finally {
          ye.pop(), Qr(), (P = ye[ye.length - 1]);
        }
      }
    };
    return (
      (r.id = ai++),
      (r.allowRecurse = !!t.allowRecurse),
      (r._isEffect = !0),
      (r.active = !0),
      (r.raw = e),
      (r.deps = []),
      (r.options = t),
      r
    );
  }
  function Zr(e) {
    let { deps: t } = e;
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e);
      t.length = 0;
    }
  }
  var ie = !0,
    It = [];
  function li() {
    It.push(ie), (ie = !1);
  }
  function ui() {
    It.push(ie), (ie = !0);
  }
  function Qr() {
    let e = It.pop();
    ie = e === void 0 ? !0 : e;
  }
  function M(e, t, r) {
    if (!ie || P === void 0) return;
    let n = Mt.get(e);
    n || Mt.set(e, (n = new Map()));
    let i = n.get(r);
    i || n.set(r, (i = new Set())),
      i.has(P) ||
        (i.add(P),
        P.deps.push(i),
        P.options.onTrack &&
          P.options.onTrack({ effect: P, target: e, type: t, key: r }));
  }
  function V(e, t, r, n, i, o) {
    let s = Mt.get(e);
    if (!s) return;
    let a = new Set(),
      c = (u) => {
        u &&
          u.forEach((p) => {
            (p !== P || p.allowRecurse) && a.add(p);
          });
      };
    if (t === "clear") s.forEach(c);
    else if (r === "length" && K(e))
      s.forEach((u, p) => {
        (p === "length" || p >= n) && c(u);
      });
    else
      switch ((r !== void 0 && c(s.get(r)), t)) {
        case "add":
          K(e)
            ? Ke(r) && c(s.get("length"))
            : (c(s.get(Y)), ne(e) && c(s.get(Nt)));
          break;
        case "delete":
          K(e) || (c(s.get(Y)), ne(e) && c(s.get(Nt)));
          break;
        case "set":
          ne(e) && c(s.get(Y));
          break;
      }
    let l = (u) => {
      u.options.onTrigger &&
        u.options.onTrigger({
          effect: u,
          target: e,
          key: r,
          type: t,
          newValue: n,
          oldValue: i,
          oldTarget: o,
        }),
        u.options.scheduler ? u.options.scheduler(u) : u();
    };
    a.forEach(l);
  }
  var fi = Ot("__proto__,__v_isRef,__isVue"),
    en = new Set(
      Object.getOwnPropertyNames(Symbol)
        .map((e) => Symbol[e])
        .filter(Be)
    ),
    di = tn();
  var pi = tn(!0);
  var qr = mi();
  function mi() {
    let e = {};
    return (
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        e[t] = function (...r) {
          let n = _(this);
          for (let o = 0, s = this.length; o < s; o++) M(n, "get", o + "");
          let i = n[t](...r);
          return i === -1 || i === !1 ? n[t](...r.map(_)) : i;
        };
      }),
      ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
        e[t] = function (...r) {
          li();
          let n = _(this)[t].apply(this, r);
          return Qr(), n;
        };
      }),
      e
    );
  }
  function tn(e = !1, t = !1) {
    return function (n, i, o) {
      if (i === "__v_isReactive") return !e;
      if (i === "__v_isReadonly") return e;
      if (i === "__v_raw" && o === (e ? (t ? Mi : sn) : t ? Ri : on).get(n))
        return n;
      let s = K(n);
      if (!e && s && ge(qr, i)) return Reflect.get(qr, i, o);
      let a = Reflect.get(n, i, o);
      return (Be(i) ? en.has(i) : fi(i)) || (e || M(n, "get", i), t)
        ? a
        : Pt(a)
        ? !s || !Ke(i)
          ? a.value
          : a
        : xe(a)
        ? e
          ? an(a)
          : Je(a)
        : a;
    };
  }
  var hi = _i();
  function _i(e = !1) {
    return function (r, n, i, o) {
      let s = r[n];
      if (!e && ((i = _(i)), (s = _(s)), !K(r) && Pt(s) && !Pt(i)))
        return (s.value = i), !0;
      let a = K(r) && Ke(n) ? Number(n) < r.length : ge(r, n),
        c = Reflect.set(r, n, i, o);
      return (
        r === _(o) &&
          (a ? Rt(i, s) && V(r, "set", n, i, s) : V(r, "add", n, i)),
        c
      );
    };
  }
  function gi(e, t) {
    let r = ge(e, t),
      n = e[t],
      i = Reflect.deleteProperty(e, t);
    return i && r && V(e, "delete", t, void 0, n), i;
  }
  function xi(e, t) {
    let r = Reflect.has(e, t);
    return (!Be(t) || !en.has(t)) && M(e, "has", t), r;
  }
  function yi(e) {
    return M(e, "iterate", K(e) ? "length" : Y), Reflect.ownKeys(e);
  }
  var bi = { get: di, set: hi, deleteProperty: gi, has: xi, ownKeys: yi },
    wi = {
      get: pi,
      set(e, t) {
        return (
          console.warn(
            `Set operation on key "${String(t)}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          console.warn(
            `Delete operation on key "${String(
              t
            )}" failed: target is readonly.`,
            e
          ),
          !0
        );
      },
    };
  var Dt = (e) => (xe(e) ? Je(e) : e),
    kt = (e) => (xe(e) ? an(e) : e),
    Lt = (e) => e,
    Ge = (e) => Reflect.getPrototypeOf(e);
  function Ve(e, t, r = !1, n = !1) {
    e = e.__v_raw;
    let i = _(e),
      o = _(t);
    t !== o && !r && M(i, "get", t), !r && M(i, "get", o);
    let { has: s } = Ge(i),
      a = n ? Lt : r ? kt : Dt;
    if (s.call(i, t)) return a(e.get(t));
    if (s.call(i, o)) return a(e.get(o));
    e !== i && e.get(t);
  }
  function He(e, t = !1) {
    let r = this.__v_raw,
      n = _(r),
      i = _(e);
    return (
      e !== i && !t && M(n, "has", e),
      !t && M(n, "has", i),
      e === i ? r.has(e) : r.has(e) || r.has(i)
    );
  }
  function qe(e, t = !1) {
    return (
      (e = e.__v_raw), !t && M(_(e), "iterate", Y), Reflect.get(e, "size", e)
    );
  }
  function Ur(e) {
    e = _(e);
    let t = _(this);
    return Ge(t).has.call(t, e) || (t.add(e), V(t, "add", e, e)), this;
  }
  function Wr(e, t) {
    t = _(t);
    let r = _(this),
      { has: n, get: i } = Ge(r),
      o = n.call(r, e);
    o ? nn(r, n, e) : ((e = _(e)), (o = n.call(r, e)));
    let s = i.call(r, e);
    return (
      r.set(e, t),
      o ? Rt(t, s) && V(r, "set", e, t, s) : V(r, "add", e, t),
      this
    );
  }
  function Gr(e) {
    let t = _(this),
      { has: r, get: n } = Ge(t),
      i = r.call(t, e);
    i ? nn(t, r, e) : ((e = _(e)), (i = r.call(t, e)));
    let o = n ? n.call(t, e) : void 0,
      s = t.delete(e);
    return i && V(t, "delete", e, void 0, o), s;
  }
  function Jr() {
    let e = _(this),
      t = e.size !== 0,
      r = ne(e) ? new Map(e) : new Set(e),
      n = e.clear();
    return t && V(e, "clear", void 0, void 0, r), n;
  }
  function Ue(e, t) {
    return function (n, i) {
      let o = this,
        s = o.__v_raw,
        a = _(s),
        c = t ? Lt : e ? kt : Dt;
      return (
        !e && M(a, "iterate", Y), s.forEach((l, u) => n.call(i, c(l), c(u), o))
      );
    };
  }
  function We(e, t, r) {
    return function (...n) {
      let i = this.__v_raw,
        o = _(i),
        s = ne(o),
        a = e === "entries" || (e === Symbol.iterator && s),
        c = e === "keys" && s,
        l = i[e](...n),
        u = r ? Lt : t ? kt : Dt;
      return (
        !t && M(o, "iterate", c ? Nt : Y),
        {
          next() {
            let { value: p, done: m } = l.next();
            return m
              ? { value: p, done: m }
              : { value: a ? [u(p[0]), u(p[1])] : u(p), done: m };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function z(e) {
    return function (...t) {
      {
        let r = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(
          `${Tt(e)} operation ${r}failed: target is readonly.`,
          _(this)
        );
      }
      return e === "delete" ? !1 : this;
    };
  }
  function Ei() {
    let e = {
        get(o) {
          return Ve(this, o);
        },
        get size() {
          return qe(this);
        },
        has: He,
        add: Ur,
        set: Wr,
        delete: Gr,
        clear: Jr,
        forEach: Ue(!1, !1),
      },
      t = {
        get(o) {
          return Ve(this, o, !1, !0);
        },
        get size() {
          return qe(this);
        },
        has: He,
        add: Ur,
        set: Wr,
        delete: Gr,
        clear: Jr,
        forEach: Ue(!1, !0),
      },
      r = {
        get(o) {
          return Ve(this, o, !0);
        },
        get size() {
          return qe(this, !0);
        },
        has(o) {
          return He.call(this, o, !0);
        },
        add: z("add"),
        set: z("set"),
        delete: z("delete"),
        clear: z("clear"),
        forEach: Ue(!0, !1),
      },
      n = {
        get(o) {
          return Ve(this, o, !0, !0);
        },
        get size() {
          return qe(this, !0);
        },
        has(o) {
          return He.call(this, o, !0);
        },
        add: z("add"),
        set: z("set"),
        delete: z("delete"),
        clear: z("clear"),
        forEach: Ue(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
        (e[o] = We(o, !1, !1)),
          (r[o] = We(o, !0, !1)),
          (t[o] = We(o, !1, !0)),
          (n[o] = We(o, !0, !0));
      }),
      [e, r, t, n]
    );
  }
  var [vi, Si, Ai, Oi] = Ei();
  function rn(e, t) {
    let r = t ? (e ? Oi : Ai) : e ? Si : vi;
    return (n, i, o) =>
      i === "__v_isReactive"
        ? !e
        : i === "__v_isReadonly"
        ? e
        : i === "__v_raw"
        ? n
        : Reflect.get(ge(r, i) && i in n ? r : n, i, o);
  }
  var Ci = { get: rn(!1, !1) };
  var Ti = { get: rn(!0, !1) };
  function nn(e, t, r) {
    let n = _(r);
    if (n !== r && t.call(e, n)) {
      let i = Ct(e);
      console.warn(
        `Reactive ${i} contains both the raw and reactive versions of the same object${
          i === "Map" ? " as keys" : ""
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var on = new WeakMap(),
    Ri = new WeakMap(),
    sn = new WeakMap(),
    Mi = new WeakMap();
  function Ni(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Pi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Ni(Ct(e));
  }
  function Je(e) {
    return e && e.__v_isReadonly ? e : cn(e, !1, bi, Ci, on);
  }
  function an(e) {
    return cn(e, !0, wi, Ti, sn);
  }
  function cn(e, t, r, n, i) {
    if (!xe(e))
      return console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive)) return e;
    let o = i.get(e);
    if (o) return o;
    let s = Pi(e);
    if (s === 0) return e;
    let a = new Proxy(e, s === 2 ? n : r);
    return i.set(e, a), a;
  }
  function _(e) {
    return (e && _(e.__v_raw)) || e;
  }
  function Pt(e) {
    return Boolean(e && e.__v_isRef === !0);
  }
  y("nextTick", () => re);
  y("dispatch", (e) => q.bind(q, e));
  y("watch", (e, { evaluateLater: t, effect: r }) => (n, i) => {
    let o = t(n),
      s = !0,
      a,
      c = r(() =>
        o((l) => {
          JSON.stringify(l),
            s
              ? (a = l)
              : queueMicrotask(() => {
                  i(l, a), (a = l);
                }),
            (s = !1);
        })
      );
    e._x_effects.delete(c);
  });
  y("store", Lr);
  y("data", (e) => Ce(e));
  y("root", (e) => U(e));
  y(
    "refs",
    (e) => (e._x_refs_proxy || (e._x_refs_proxy = j(Ii(e))), e._x_refs_proxy)
  );
  function Ii(e) {
    let t = [],
      r = e;
    for (; r; ) r._x_refs && t.push(r._x_refs), (r = r.parentNode);
    return t;
  }
  var $t = {};
  function jt(e) {
    return $t[e] || ($t[e] = 0), ++$t[e];
  }
  function ln(e, t) {
    return Z(e, (r) => {
      if (r._x_ids && r._x_ids[t]) return !0;
    });
  }
  function un(e, t) {
    e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = jt(t));
  }
  y("id", (e) => (t, r = null) => {
    let n = ln(e, t),
      i = n ? n._x_ids[t] : jt(t);
    return r ? `${t}-${i}-${r}` : `${t}-${i}`;
  });
  y("el", (e) => e);
  fn("Focus", "focus", "focus");
  fn("Persist", "persist", "persist");
  function fn(e, t, r) {
    y(t, (n) =>
      v(
        `You can't use [$${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  d(
    "modelable",
    (e, { expression: t }, { effect: r, evaluateLater: n, cleanup: i }) => {
      let o = n(t),
        s = () => {
          let u;
          return o((p) => (u = p)), u;
        },
        a = n(`${t} = __placeholder`),
        c = (u) => a(() => {}, { scope: { __placeholder: u } }),
        l = s();
      c(l),
        queueMicrotask(() => {
          if (!e._x_model) return;
          e._x_removeModelListeners.default();
          let u = e._x_model.get,
            p = e._x_model.set,
            m = Fe(
              {
                get() {
                  return u();
                },
                set(w) {
                  p(w);
                },
              },
              {
                get() {
                  return s();
                },
                set(w) {
                  c(w);
                },
              }
            );
          i(m);
        });
    }
  );
  d("teleport", (e, { modifiers: t, expression: r }, { cleanup: n }) => {
    e.tagName.toLowerCase() !== "template" &&
      v("x-teleport can only be used on a <template> tag", e);
    let i = dn(r),
      o = e.content.cloneNode(!0).firstElementChild;
    (e._x_teleport = o),
      (o._x_teleportBack = e),
      e.setAttribute("data-teleport-template", !0),
      o.setAttribute("data-teleport-target", !0),
      e._x_forwardEvents &&
        e._x_forwardEvents.forEach((a) => {
          o.addEventListener(a, (c) => {
            c.stopPropagation(), e.dispatchEvent(new c.constructor(c.type, c));
          });
        }),
      N(o, {}, e);
    let s = (a, c, l) => {
      l.includes("prepend")
        ? c.parentNode.insertBefore(a, c)
        : l.includes("append")
        ? c.parentNode.insertBefore(a, c.nextSibling)
        : c.appendChild(a);
    };
    h(() => {
      s(o, i, t), S(o), (o._x_ignore = !0);
    }),
      (e._x_teleportPutBack = () => {
        let a = dn(r);
        h(() => {
          s(e._x_teleport, a, t);
        });
      }),
      n(() => o.remove());
  });
  var Di = document.createElement("div");
  function dn(e) {
    let t = B(
      () => document.querySelector(e),
      () => Di
    )();
    return t || v(`Cannot find x-teleport element for selector: "${e}"`), t;
  }
  var pn = () => {};
  pn.inline = (e, { modifiers: t }, { cleanup: r }) => {
    t.includes("self") ? (e._x_ignoreSelf = !0) : (e._x_ignore = !0),
      r(() => {
        t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
      });
  };
  d("ignore", pn);
  d("effect", (e, { expression: t }, { effect: r }) => r(x(e, t)));
  function oe(e, t, r, n) {
    let i = e,
      o = (c) => n(c),
      s = {},
      a = (c, l) => (u) => l(c, u);
    if (
      (r.includes("dot") && (t = ki(t)),
      r.includes("camel") && (t = Li(t)),
      r.includes("passive") && (s.passive = !0),
      r.includes("capture") && (s.capture = !0),
      r.includes("window") && (i = window),
      r.includes("document") && (i = document),
      r.includes("debounce"))
    ) {
      let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
        l = Ye(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = $e(o, l);
    }
    if (r.includes("throttle")) {
      let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
        l = Ye(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
      o = je(o, l);
    }
    return (
      r.includes("prevent") &&
        (o = a(o, (c, l) => {
          l.preventDefault(), c(l);
        })),
      r.includes("stop") &&
        (o = a(o, (c, l) => {
          l.stopPropagation(), c(l);
        })),
      r.includes("self") &&
        (o = a(o, (c, l) => {
          l.target === e && c(l);
        })),
      (r.includes("away") || r.includes("outside")) &&
        ((i = document),
        (o = a(o, (c, l) => {
          e.contains(l.target) ||
            (l.target.isConnected !== !1 &&
              ((e.offsetWidth < 1 && e.offsetHeight < 1) ||
                (e._x_isShown !== !1 && c(l))));
        }))),
      r.includes("once") &&
        (o = a(o, (c, l) => {
          c(l), i.removeEventListener(t, o, s);
        })),
      (o = a(o, (c, l) => {
        (ji(t) && Fi(l, r)) || c(l);
      })),
      i.addEventListener(t, o, s),
      () => {
        i.removeEventListener(t, o, s);
      }
    );
  }
  function ki(e) {
    return e.replace(/-/g, ".");
  }
  function Li(e) {
    return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase());
  }
  function Ye(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function $i(e) {
    return [" ", "_"].includes(e)
      ? e
      : e
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/[_\s]/, "-")
          .toLowerCase();
  }
  function ji(e) {
    return ["keydown", "keyup"].includes(e);
  }
  function Fi(e, t) {
    let r = t.filter(
      (o) =>
        !["window", "document", "prevent", "stop", "once", "capture"].includes(
          o
        )
    );
    if (r.includes("debounce")) {
      let o = r.indexOf("debounce");
      r.splice(o, Ye((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.includes("throttle")) {
      let o = r.indexOf("throttle");
      r.splice(o, Ye((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (r.length === 0 || (r.length === 1 && mn(e.key).includes(r[0])))
      return !1;
    let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) =>
      r.includes(o)
    );
    return (
      (r = r.filter((o) => !i.includes(o))),
      !(
        i.length > 0 &&
        i.filter(
          (s) => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])
        ).length === i.length &&
        mn(e.key).includes(r[0])
      )
    );
  }
  function mn(e) {
    if (!e) return [];
    e = $i(e);
    let t = {
      ctrl: "control",
      slash: "/",
      space: " ",
      spacebar: " ",
      cmd: "meta",
      esc: "escape",
      up: "arrow-up",
      down: "arrow-down",
      left: "arrow-left",
      right: "arrow-right",
      period: ".",
      equal: "=",
      minus: "-",
      underscore: "_",
    };
    return (
      (t[e] = e),
      Object.keys(t)
        .map((r) => {
          if (t[r] === e) return r;
        })
        .filter((r) => r)
    );
  }
  d(
    "model",
    (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => {
      let o = e;
      t.includes("parent") && (o = e.parentNode);
      let s = x(o, r),
        a;
      typeof r == "string"
        ? (a = x(o, `${r} = __placeholder`))
        : typeof r == "function" && typeof r() == "string"
        ? (a = x(o, `${r()} = __placeholder`))
        : (a = () => {});
      let c = () => {
          let m;
          return s((w) => (m = w)), hn(m) ? m.get() : m;
        },
        l = (m) => {
          let w;
          s((k) => (w = k)),
            hn(w) ? w.set(m) : a(() => {}, { scope: { __placeholder: m } });
        };
      typeof r == "string" &&
        e.type === "radio" &&
        h(() => {
          e.hasAttribute("name") || e.setAttribute("name", r);
        });
      var u =
        e.tagName.toLowerCase() === "select" ||
        ["checkbox", "radio"].includes(e.type) ||
        t.includes("lazy")
          ? "change"
          : "input";
      let p = D
        ? () => {}
        : oe(e, u, t, (m) => {
            l(Bi(e, t, m, c()));
          });
      if (
        (t.includes("fill") &&
          ([null, ""].includes(c()) ||
            (e.type === "checkbox" && Array.isArray(c()))) &&
          e.dispatchEvent(new Event(u, {})),
        e._x_removeModelListeners || (e._x_removeModelListeners = {}),
        (e._x_removeModelListeners.default = p),
        i(() => e._x_removeModelListeners.default()),
        e.form)
      ) {
        let m = oe(e.form, "reset", [], (w) => {
          re(() => e._x_model && e._x_model.set(e.value));
        });
        i(() => m());
      }
      (e._x_model = {
        get() {
          return c();
        },
        set(m) {
          l(m);
        },
      }),
        (e._x_forceModelUpdate = (m) => {
          m === void 0 && typeof r == "string" && r.match(/\./) && (m = ""),
            (window.fromModel = !0),
            h(() => _e(e, "value", m)),
            delete window.fromModel;
        }),
        n(() => {
          let m = c();
          (t.includes("unintrusive") && document.activeElement.isSameNode(e)) ||
            e._x_forceModelUpdate(m);
        });
    }
  );
  function Bi(e, t, r, n) {
    return h(() => {
      if (r instanceof CustomEvent && r.detail !== void 0)
        return r.detail !== null && r.detail !== void 0
          ? r.detail
          : r.target.value;
      if (e.type === "checkbox")
        if (Array.isArray(n)) {
          let i = t.includes("number") ? Ft(r.target.value) : r.target.value;
          return r.target.checked ? n.concat([i]) : n.filter((o) => !Ki(o, i));
        } else return r.target.checked;
      else {
        if (e.tagName.toLowerCase() === "select" && e.multiple)
          return t.includes("number")
            ? Array.from(r.target.selectedOptions).map((i) => {
                let o = i.value || i.text;
                return Ft(o);
              })
            : Array.from(r.target.selectedOptions).map(
                (i) => i.value || i.text
              );
        {
          let i = r.target.value;
          return t.includes("number")
            ? Ft(i)
            : t.includes("trim")
            ? i.trim()
            : i;
        }
      }
    });
  }
  function Ft(e) {
    let t = e ? parseFloat(e) : null;
    return zi(t) ? t : e;
  }
  function Ki(e, t) {
    return e == t;
  }
  function zi(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function hn(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    );
  }
  d("cloak", (e) =>
    queueMicrotask(() => h(() => e.removeAttribute(C("cloak"))))
  );
  ve(() => `[${C("init")}]`);
  d(
    "init",
    B((e, { expression: t }, { evaluate: r }) =>
      typeof t == "string" ? !!t.trim() && r(t, {}, !1) : r(t, {}, !1)
    )
  );
  d("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((o) => {
        h(() => {
          e.textContent = o;
        });
      });
    });
  });
  d("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => {
    let i = n(t);
    r(() => {
      i((o) => {
        h(() => {
          (e.innerHTML = o),
            (e._x_ignoreSelf = !0),
            S(e),
            delete e._x_ignoreSelf;
        });
      });
    });
  });
  te(Ie(":", De(C("bind:"))));
  var _n = (
    e,
    { value: t, modifiers: r, expression: n, original: i },
    { effect: o }
  ) => {
    if (!t) {
      let a = {};
      Fr(a),
        x(e, n)(
          (l) => {
            At(e, l, i);
          },
          { scope: a }
        );
      return;
    }
    if (t === "key") return Vi(e, n);
    if (
      e._x_inlineBindings &&
      e._x_inlineBindings[t] &&
      e._x_inlineBindings[t].extract
    )
      return;
    let s = x(e, n);
    o(() =>
      s((a) => {
        a === void 0 && typeof n == "string" && n.match(/\./) && (a = ""),
          h(() => _e(e, t, a, r));
      })
    );
  };
  _n.inline = (e, { value: t, modifiers: r, expression: n }) => {
    t &&
      (e._x_inlineBindings || (e._x_inlineBindings = {}),
      (e._x_inlineBindings[t] = { expression: n, extract: !1 }));
  };
  d("bind", _n);
  function Vi(e, t) {
    e._x_keyExpression = t;
  }
  Ee(() => `[${C("data")}]`);
  d("data", (e, { expression: t }, { cleanup: r }) => {
    if (Or(e)) return;
    t = t === "" ? "{}" : t;
    let n = {};
    fe(n, e);
    let i = {};
    zr(i, n);
    let o = R(e, t, { scope: i });
    (o === void 0 || o === !0) && (o = {}), fe(o, e);
    let s = T(o);
    Te(s);
    let a = N(e, s);
    s.init && R(e, s.init),
      r(() => {
        s.destroy && R(e, s.destroy), a();
      });
  });
  d("show", (e, { modifiers: t, expression: r }, { effect: n }) => {
    let i = x(e, r);
    e._x_doHide ||
      (e._x_doHide = () => {
        h(() => {
          e.style.setProperty(
            "display",
            "none",
            t.includes("important") ? "important" : void 0
          );
        });
      }),
      e._x_doShow ||
        (e._x_doShow = () => {
          h(() => {
            e.style.length === 1 && e.style.display === "none"
              ? e.removeAttribute("style")
              : e.style.removeProperty("display");
          });
        });
    let o = () => {
        e._x_doHide(), (e._x_isShown = !1);
      },
      s = () => {
        e._x_doShow(), (e._x_isShown = !0);
      },
      a = () => setTimeout(s),
      c = me(
        (p) => (p ? s() : o()),
        (p) => {
          typeof e._x_toggleAndCascadeWithTransitions == "function"
            ? e._x_toggleAndCascadeWithTransitions(e, p, s, o)
            : p
            ? a()
            : o();
        }
      ),
      l,
      u = !0;
    n(() =>
      i((p) => {
        (!u && p === l) ||
          (t.includes("immediate") && (p ? a() : o()), c(p), (l = p), (u = !1));
      })
    );
  });
  d("for", (e, { expression: t }, { effect: r, cleanup: n }) => {
    let i = qi(t),
      o = x(e, i.items),
      s = x(e, e._x_keyExpression || "index");
    (e._x_prevKeys = []),
      (e._x_lookup = {}),
      r(() => Hi(e, i, o, s)),
      n(() => {
        Object.values(e._x_lookup).forEach((a) => a.remove()),
          delete e._x_prevKeys,
          delete e._x_lookup;
      });
  });
  function Hi(e, t, r, n) {
    let i = (s) => typeof s == "object" && !Array.isArray(s),
      o = e;
    r((s) => {
      Ui(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f) => f + 1)),
        s === void 0 && (s = []);
      let a = e._x_lookup,
        c = e._x_prevKeys,
        l = [],
        u = [];
      if (i(s))
        s = Object.entries(s).map(([f, g]) => {
          let b = gn(t, g, f, s);
          n((E) => u.push(E), { scope: { index: f, ...b } }), l.push(b);
        });
      else
        for (let f = 0; f < s.length; f++) {
          let g = gn(t, s[f], f, s);
          n((b) => u.push(b), { scope: { index: f, ...g } }), l.push(g);
        }
      let p = [],
        m = [],
        w = [],
        k = [];
      for (let f = 0; f < c.length; f++) {
        let g = c[f];
        u.indexOf(g) === -1 && w.push(g);
      }
      c = c.filter((f) => !w.includes(f));
      let be = "template";
      for (let f = 0; f < u.length; f++) {
        let g = u[f],
          b = c.indexOf(g);
        if (b === -1) c.splice(f, 0, g), p.push([be, f]);
        else if (b !== f) {
          let E = c.splice(f, 1)[0],
            A = c.splice(b - 1, 1)[0];
          c.splice(f, 0, A), c.splice(b, 0, E), m.push([E, A]);
        } else k.push(g);
        be = g;
      }
      for (let f = 0; f < w.length; f++) {
        let g = w[f];
        a[g]._x_effects && a[g]._x_effects.forEach(we),
          a[g].remove(),
          (a[g] = null),
          delete a[g];
      }
      for (let f = 0; f < m.length; f++) {
        let [g, b] = m[f],
          E = a[g],
          A = a[b],
          X = document.createElement("div");
        h(() => {
          A || v('x-for ":key" is undefined or invalid', o),
            A.after(X),
            E.after(A),
            A._x_currentIfEl && A.after(A._x_currentIfEl),
            X.before(E),
            E._x_currentIfEl && E.after(E._x_currentIfEl),
            X.remove();
        }),
          A._x_refreshXForScope(l[u.indexOf(b)]);
      }
      for (let f = 0; f < p.length; f++) {
        let [g, b] = p[f],
          E = g === "template" ? o : a[g];
        E._x_currentIfEl && (E = E._x_currentIfEl);
        let A = l[b],
          X = u[b],
          se = document.importNode(o.content, !0).firstElementChild,
          Kt = T(A);
        N(se, Kt, o),
          (se._x_refreshXForScope = (yn) => {
            Object.entries(yn).forEach(([bn, wn]) => {
              Kt[bn] = wn;
            });
          }),
          h(() => {
            E.after(se), S(se);
          }),
          typeof X == "object" &&
            v(
              "x-for key cannot be an object, it must be a string or an integer",
              o
            ),
          (a[X] = se);
      }
      for (let f = 0; f < k.length; f++)
        a[k[f]]._x_refreshXForScope(l[u.indexOf(k[f])]);
      o._x_prevKeys = u;
    });
  }
  function qi(e) {
    let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      r = /^\s*\(|\)\s*$/g,
      n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      i = e.match(n);
    if (!i) return;
    let o = {};
    o.items = i[2].trim();
    let s = i[1].replace(r, "").trim(),
      a = s.match(t);
    return (
      a
        ? ((o.item = s.replace(t, "").trim()),
          (o.index = a[1].trim()),
          a[2] && (o.collection = a[2].trim()))
        : (o.item = s),
      o
    );
  }
  function gn(e, t, r, n) {
    let i = {};
    return (
      /^\[.*\]$/.test(e.item) && Array.isArray(t)
        ? e.item
            .replace("[", "")
            .replace("]", "")
            .split(",")
            .map((s) => s.trim())
            .forEach((s, a) => {
              i[s] = t[a];
            })
        : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object"
        ? e.item
            .replace("{", "")
            .replace("}", "")
            .split(",")
            .map((s) => s.trim())
            .forEach((s) => {
              i[s] = t[s];
            })
        : (i[e.item] = t),
      e.index && (i[e.index] = r),
      e.collection && (i[e.collection] = n),
      i
    );
  }
  function Ui(e) {
    return !Array.isArray(e) && !isNaN(e);
  }
  function xn() {}
  xn.inline = (e, { expression: t }, { cleanup: r }) => {
    let n = U(e);
    n._x_refs || (n._x_refs = {}),
      (n._x_refs[t] = e),
      r(() => delete n._x_refs[t]);
  };
  d("ref", xn);
  d("if", (e, { expression: t }, { effect: r, cleanup: n }) => {
    e.tagName.toLowerCase() !== "template" &&
      v("x-if can only be used on a <template> tag", e);
    let i = x(e, t),
      o = () => {
        if (e._x_currentIfEl) return e._x_currentIfEl;
        let a = e.content.cloneNode(!0).firstElementChild;
        return (
          N(a, {}, e),
          h(() => {
            e.after(a), S(a);
          }),
          (e._x_currentIfEl = a),
          (e._x_undoIf = () => {
            O(a, (c) => {
              c._x_effects && c._x_effects.forEach(we);
            }),
              a.remove(),
              delete e._x_currentIfEl;
          }),
          a
        );
      },
      s = () => {
        e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
      };
    r(() =>
      i((a) => {
        a ? o() : s();
      })
    ),
      n(() => e._x_undoIf && e._x_undoIf());
  });
  d("id", (e, { expression: t }, { evaluate: r }) => {
    r(t).forEach((i) => un(e, i));
  });
  te(Ie("@", De(C("on:"))));
  d(
    "on",
    B((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => {
      let o = n ? x(e, n) : () => {};
      e.tagName.toLowerCase() === "template" &&
        (e._x_forwardEvents || (e._x_forwardEvents = []),
        e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
      let s = oe(e, t, r, (a) => {
        o(() => {}, { scope: { $event: a }, params: [a] });
      });
      i(() => s());
    })
  );
  Xe("Collapse", "collapse", "collapse");
  Xe("Intersect", "intersect", "intersect");
  Xe("Focus", "trap", "focus");
  Xe("Mask", "mask", "mask");
  function Xe(e, t, r) {
    d(t, (n) =>
      v(
        `You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${r}`,
        n
      )
    );
  }
  F.setEvaluator(ht);
  F.setReactivityEngine({ reactive: Je, effect: Yr, release: Xr, raw: _ });
  var Bt = F;
  window.Alpine = Bt;
  queueMicrotask(() => {
    Bt.start();
  });
})();
