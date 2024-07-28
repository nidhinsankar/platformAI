"use strict";
(() => {
  var oC = Object.create;
  var Jg = Object.defineProperty;
  var lC = Object.getOwnPropertyDescriptor;
  var uC = Object.getOwnPropertyNames;
  var iC = Object.getPrototypeOf,
    sC = Object.prototype.hasOwnProperty;
  var Ke = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var dC = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of uC(t))
        !sC.call(e, a) &&
          a !== r &&
          Jg(e, a, {
            get: () => t[a],
            enumerable: !(n = lC(t, a)) || n.enumerable,
          });
    return e;
  };
  var se = (e, t, r) => (
    (r = e != null ? oC(iC(e)) : {}),
    dC(
      t || !e || !e.__esModule
        ? Jg(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var dy = Ke((_) => {
    "use strict";
    var Ho = Symbol.for("react.element"),
      fC = Symbol.for("react.portal"),
      cC = Symbol.for("react.fragment"),
      pC = Symbol.for("react.strict_mode"),
      mC = Symbol.for("react.profiler"),
      hC = Symbol.for("react.provider"),
      gC = Symbol.for("react.context"),
      yC = Symbol.for("react.forward_ref"),
      vC = Symbol.for("react.suspense"),
      xC = Symbol.for("react.memo"),
      LC = Symbol.for("react.lazy"),
      bg = Symbol.iterator;
    function wC(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (bg && e[bg]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var ry = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      ny = Object.assign,
      ay = {};
    function ka(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = ay),
        (this.updater = r || ry);
    }
    ka.prototype.isReactComponent = {};
    ka.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    ka.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function oy() {}
    oy.prototype = ka.prototype;
    function Bf(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = ay),
        (this.updater = r || ry);
    }
    var Of = (Bf.prototype = new oy());
    Of.constructor = Bf;
    ny(Of, ka.prototype);
    Of.isPureReactComponent = !0;
    var ey = Array.isArray,
      ly = Object.prototype.hasOwnProperty,
      Uf = { current: null },
      uy = { key: !0, ref: !0, __self: !0, __source: !0 };
    function iy(e, t, r) {
      var n,
        a = {},
        o = null,
        l = null;
      if (t != null)
        for (n in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
          ly.call(t, n) && !uy.hasOwnProperty(n) && (a[n] = t[n]);
      var u = arguments.length - 2;
      if (u === 1) a.children = r;
      else if (1 < u) {
        for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
        a.children = i;
      }
      if (e && e.defaultProps)
        for (n in ((u = e.defaultProps), u)) a[n] === void 0 && (a[n] = u[n]);
      return {
        $$typeof: Ho,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: Uf.current,
      };
    }
    function SC(e, t) {
      return {
        $$typeof: Ho,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function Hf(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Ho;
    }
    function CC(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (r) {
          return t[r];
        })
      );
    }
    var ty = /\/+/g;
    function Nf(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? CC("" + e.key)
        : t.toString(36);
    }
    function ki(e, t, r, n, a) {
      var o = typeof e;
      (o === "undefined" || o === "boolean") && (e = null);
      var l = !1;
      if (e === null) l = !0;
      else
        switch (o) {
          case "string":
          case "number":
            l = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case Ho:
              case fC:
                l = !0;
            }
        }
      if (l)
        return (
          (l = e),
          (a = a(l)),
          (e = n === "" ? "." + Nf(l, 0) : n),
          ey(a)
            ? ((r = ""),
              e != null && (r = e.replace(ty, "$&/") + "/"),
              ki(a, t, r, "", function (f) {
                return f;
              }))
            : a != null &&
              (Hf(a) &&
                (a = SC(
                  a,
                  r +
                    (!a.key || (l && l.key === a.key)
                      ? ""
                      : ("" + a.key).replace(ty, "$&/") + "/") +
                    e
                )),
              t.push(a)),
          1
        );
      if (((l = 0), (n = n === "" ? "." : n + ":"), ey(e)))
        for (var u = 0; u < e.length; u++) {
          o = e[u];
          var i = n + Nf(o, u);
          l += ki(o, t, r, i, a);
        }
      else if (((i = wC(e)), typeof i == "function"))
        for (e = i.call(e), u = 0; !(o = e.next()).done; )
          (o = o.value), (i = n + Nf(o, u++)), (l += ki(o, t, r, i, a));
      else if (o === "object")
        throw (
          ((t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return l;
    }
    function Ii(e, t, r) {
      if (e == null) return e;
      var n = [],
        a = 0;
      return (
        ki(e, n, "", "", function (o) {
          return t.call(r, o, a++);
        }),
        n
      );
    }
    function IC(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = r));
            },
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = r));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var Xe = { current: null },
      Pi = { transition: null },
      kC = {
        ReactCurrentDispatcher: Xe,
        ReactCurrentBatchConfig: Pi,
        ReactCurrentOwner: Uf,
      };
    function sy() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    _.Children = {
      map: Ii,
      forEach: function (e, t, r) {
        Ii(
          e,
          function () {
            t.apply(this, arguments);
          },
          r
        );
      },
      count: function (e) {
        var t = 0;
        return (
          Ii(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          Ii(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!Hf(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    };
    _.Component = ka;
    _.Fragment = cC;
    _.Profiler = mC;
    _.PureComponent = Bf;
    _.StrictMode = pC;
    _.Suspense = vC;
    _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kC;
    _.act = sy;
    _.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var n = ny({}, e.props),
        a = e.key,
        o = e.ref,
        l = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (l = Uf.current)),
          t.key !== void 0 && (a = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var u = e.type.defaultProps;
        for (i in t)
          ly.call(t, i) &&
            !uy.hasOwnProperty(i) &&
            (n[i] = t[i] === void 0 && u !== void 0 ? u[i] : t[i]);
      }
      var i = arguments.length - 2;
      if (i === 1) n.children = r;
      else if (1 < i) {
        u = Array(i);
        for (var f = 0; f < i; f++) u[f] = arguments[f + 2];
        n.children = u;
      }
      return {
        $$typeof: Ho,
        type: e.type,
        key: a,
        ref: o,
        props: n,
        _owner: l,
      };
    };
    _.createContext = function (e) {
      return (
        (e = {
          $$typeof: gC,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: hC, _context: e }),
        (e.Consumer = e)
      );
    };
    _.createElement = iy;
    _.createFactory = function (e) {
      var t = iy.bind(null, e);
      return (t.type = e), t;
    };
    _.createRef = function () {
      return { current: null };
    };
    _.forwardRef = function (e) {
      return { $$typeof: yC, render: e };
    };
    _.isValidElement = Hf;
    _.lazy = function (e) {
      return { $$typeof: LC, _payload: { _status: -1, _result: e }, _init: IC };
    };
    _.memo = function (e, t) {
      return { $$typeof: xC, type: e, compare: t === void 0 ? null : t };
    };
    _.startTransition = function (e) {
      var t = Pi.transition;
      Pi.transition = {};
      try {
        e();
      } finally {
        Pi.transition = t;
      }
    };
    _.unstable_act = sy;
    _.useCallback = function (e, t) {
      return Xe.current.useCallback(e, t);
    };
    _.useContext = function (e) {
      return Xe.current.useContext(e);
    };
    _.useDebugValue = function () {};
    _.useDeferredValue = function (e) {
      return Xe.current.useDeferredValue(e);
    };
    _.useEffect = function (e, t) {
      return Xe.current.useEffect(e, t);
    };
    _.useId = function () {
      return Xe.current.useId();
    };
    _.useImperativeHandle = function (e, t, r) {
      return Xe.current.useImperativeHandle(e, t, r);
    };
    _.useInsertionEffect = function (e, t) {
      return Xe.current.useInsertionEffect(e, t);
    };
    _.useLayoutEffect = function (e, t) {
      return Xe.current.useLayoutEffect(e, t);
    };
    _.useMemo = function (e, t) {
      return Xe.current.useMemo(e, t);
    };
    _.useReducer = function (e, t, r) {
      return Xe.current.useReducer(e, t, r);
    };
    _.useRef = function (e) {
      return Xe.current.useRef(e);
    };
    _.useState = function (e) {
      return Xe.current.useState(e);
    };
    _.useSyncExternalStore = function (e, t, r) {
      return Xe.current.useSyncExternalStore(e, t, r);
    };
    _.useTransition = function () {
      return Xe.current.useTransition();
    };
    _.version = "18.3.1";
  });
  var Kt = Ke((vE, fy) => {
    "use strict";
    fy.exports = dy();
  });
  var Sy = Ke((z) => {
    "use strict";
    var Vo = Symbol.for("react.element"),
      PC = Symbol.for("react.portal"),
      EC = Symbol.for("react.fragment"),
      TC = Symbol.for("react.strict_mode"),
      MC = Symbol.for("react.profiler"),
      FC = Symbol.for("react.provider"),
      DC = Symbol.for("react.context"),
      RC = Symbol.for("react.forward_ref"),
      AC = Symbol.for("react.suspense"),
      _C = Symbol.for("react.memo"),
      zC = Symbol.for("react.lazy"),
      cy = Symbol.iterator;
    function NC(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (cy && e[cy]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var hy = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      gy = Object.assign,
      yy = {};
    function Pa(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = yy),
        (this.updater = r || hy);
    }
    Pa.prototype.isReactComponent = {};
    Pa.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    Pa.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function vy() {}
    vy.prototype = Pa.prototype;
    function jf(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = yy),
        (this.updater = r || hy);
    }
    var Wf = (jf.prototype = new vy());
    Wf.constructor = jf;
    gy(Wf, Pa.prototype);
    Wf.isPureReactComponent = !0;
    var py = Array.isArray,
      xy = Object.prototype.hasOwnProperty,
      $f = { current: null },
      Ly = { key: !0, ref: !0, __self: !0, __source: !0 };
    function wy(e, t, r) {
      var n,
        a = {},
        o = null,
        l = null;
      if (t != null)
        for (n in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
          xy.call(t, n) && !Ly.hasOwnProperty(n) && (a[n] = t[n]);
      var u = arguments.length - 2;
      if (u === 1) a.children = r;
      else if (1 < u) {
        for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
        a.children = i;
      }
      if (e && e.defaultProps)
        for (n in ((u = e.defaultProps), u)) a[n] === void 0 && (a[n] = u[n]);
      return {
        $$typeof: Vo,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: $f.current,
      };
    }
    function BC(e, t) {
      return {
        $$typeof: Vo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function Gf(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Vo;
    }
    function OC(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (r) {
          return t[r];
        })
      );
    }
    var my = /\/+/g;
    function Vf(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? OC("" + e.key)
        : t.toString(36);
    }
    function Ti(e, t, r, n, a) {
      var o = typeof e;
      (o === "undefined" || o === "boolean") && (e = null);
      var l = !1;
      if (e === null) l = !0;
      else
        switch (o) {
          case "string":
          case "number":
            l = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case Vo:
              case PC:
                l = !0;
            }
        }
      if (l)
        return (
          (l = e),
          (a = a(l)),
          (e = n === "" ? "." + Vf(l, 0) : n),
          py(a)
            ? ((r = ""),
              e != null && (r = e.replace(my, "$&/") + "/"),
              Ti(a, t, r, "", function (f) {
                return f;
              }))
            : a != null &&
              (Gf(a) &&
                (a = BC(
                  a,
                  r +
                    (!a.key || (l && l.key === a.key)
                      ? ""
                      : ("" + a.key).replace(my, "$&/") + "/") +
                    e
                )),
              t.push(a)),
          1
        );
      if (((l = 0), (n = n === "" ? "." : n + ":"), py(e)))
        for (var u = 0; u < e.length; u++) {
          o = e[u];
          var i = n + Vf(o, u);
          l += Ti(o, t, r, i, a);
        }
      else if (((i = NC(e)), typeof i == "function"))
        for (e = i.call(e), u = 0; !(o = e.next()).done; )
          (o = o.value), (i = n + Vf(o, u++)), (l += Ti(o, t, r, i, a));
      else if (o === "object")
        throw (
          ((t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return l;
    }
    function Ei(e, t, r) {
      if (e == null) return e;
      var n = [],
        a = 0;
      return (
        Ti(e, n, "", "", function (o) {
          return t.call(r, o, a++);
        }),
        n
      );
    }
    function UC(e) {
      if (e._status === -1) {
        var t = e._result;
        (t = t()),
          t.then(
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = r));
            },
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = r));
            }
          ),
          e._status === -1 && ((e._status = 0), (e._result = t));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var Ze = { current: null },
      Mi = { transition: null },
      HC = {
        ReactCurrentDispatcher: Ze,
        ReactCurrentBatchConfig: Mi,
        ReactCurrentOwner: $f,
      };
    z.Children = {
      map: Ei,
      forEach: function (e, t, r) {
        Ei(
          e,
          function () {
            t.apply(this, arguments);
          },
          r
        );
      },
      count: function (e) {
        var t = 0;
        return (
          Ei(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          Ei(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!Gf(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    };
    z.Component = Pa;
    z.Fragment = EC;
    z.Profiler = MC;
    z.PureComponent = jf;
    z.StrictMode = TC;
    z.Suspense = AC;
    z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HC;
    z.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var n = gy({}, e.props),
        a = e.key,
        o = e.ref,
        l = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (l = $f.current)),
          t.key !== void 0 && (a = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var u = e.type.defaultProps;
        for (i in t)
          xy.call(t, i) &&
            !Ly.hasOwnProperty(i) &&
            (n[i] = t[i] === void 0 && u !== void 0 ? u[i] : t[i]);
      }
      var i = arguments.length - 2;
      if (i === 1) n.children = r;
      else if (1 < i) {
        u = Array(i);
        for (var f = 0; f < i; f++) u[f] = arguments[f + 2];
        n.children = u;
      }
      return {
        $$typeof: Vo,
        type: e.type,
        key: a,
        ref: o,
        props: n,
        _owner: l,
      };
    };
    z.createContext = function (e) {
      return (
        (e = {
          $$typeof: DC,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: FC, _context: e }),
        (e.Consumer = e)
      );
    };
    z.createElement = wy;
    z.createFactory = function (e) {
      var t = wy.bind(null, e);
      return (t.type = e), t;
    };
    z.createRef = function () {
      return { current: null };
    };
    z.forwardRef = function (e) {
      return { $$typeof: RC, render: e };
    };
    z.isValidElement = Gf;
    z.lazy = function (e) {
      return { $$typeof: zC, _payload: { _status: -1, _result: e }, _init: UC };
    };
    z.memo = function (e, t) {
      return { $$typeof: _C, type: e, compare: t === void 0 ? null : t };
    };
    z.startTransition = function (e) {
      var t = Mi.transition;
      Mi.transition = {};
      try {
        e();
      } finally {
        Mi.transition = t;
      }
    };
    z.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    z.useCallback = function (e, t) {
      return Ze.current.useCallback(e, t);
    };
    z.useContext = function (e) {
      return Ze.current.useContext(e);
    };
    z.useDebugValue = function () {};
    z.useDeferredValue = function (e) {
      return Ze.current.useDeferredValue(e);
    };
    z.useEffect = function (e, t) {
      return Ze.current.useEffect(e, t);
    };
    z.useId = function () {
      return Ze.current.useId();
    };
    z.useImperativeHandle = function (e, t, r) {
      return Ze.current.useImperativeHandle(e, t, r);
    };
    z.useInsertionEffect = function (e, t) {
      return Ze.current.useInsertionEffect(e, t);
    };
    z.useLayoutEffect = function (e, t) {
      return Ze.current.useLayoutEffect(e, t);
    };
    z.useMemo = function (e, t) {
      return Ze.current.useMemo(e, t);
    };
    z.useReducer = function (e, t, r) {
      return Ze.current.useReducer(e, t, r);
    };
    z.useRef = function (e) {
      return Ze.current.useRef(e);
    };
    z.useState = function (e) {
      return Ze.current.useState(e);
    };
    z.useSyncExternalStore = function (e, t, r) {
      return Ze.current.useSyncExternalStore(e, t, r);
    };
    z.useTransition = function () {
      return Ze.current.useTransition();
    };
    z.version = "18.2.0";
  });
  var Rt = Ke((LE, Cy) => {
    "use strict";
    Cy.exports = Sy();
  });
  var Qy = Ke((W) => {
    "use strict";
    function Yf(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r; ) {
        var n = (r - 1) >>> 1,
          a = e[n];
        if (0 < Ni(a, t)) (e[n] = t), (e[r] = a), (r = n);
        else break e;
      }
    }
    function Xt(e) {
      return e.length === 0 ? null : e[0];
    }
    function Oi(e) {
      if (e.length === 0) return null;
      var t = e[0],
        r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var n = 0, a = e.length, o = a >>> 1; n < o; ) {
          var l = 2 * (n + 1) - 1,
            u = e[l],
            i = l + 1,
            f = e[i];
          if (0 > Ni(u, r))
            i < a && 0 > Ni(f, u)
              ? ((e[n] = f), (e[i] = r), (n = i))
              : ((e[n] = u), (e[l] = r), (n = l));
          else if (i < a && 0 > Ni(f, r)) (e[n] = f), (e[i] = r), (n = i);
          else break e;
        }
      }
      return t;
    }
    function Ni(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Oy = performance),
        (W.unstable_now = function () {
          return Oy.now();
        }))
      : ((Kf = Date),
        (Uy = Kf.now()),
        (W.unstable_now = function () {
          return Kf.now() - Uy;
        }));
    var Oy,
      Kf,
      Uy,
      mr = [],
      tn = [],
      xI = 1,
      At = null,
      Be = 3,
      Ui = !1,
      Qn = !1,
      Go = !1,
      jy = typeof setTimeout == "function" ? setTimeout : null,
      Wy = typeof clearTimeout == "function" ? clearTimeout : null,
      Hy = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Jf(e) {
      for (var t = Xt(tn); t !== null; ) {
        if (t.callback === null) Oi(tn);
        else if (t.startTime <= e)
          Oi(tn), (t.sortIndex = t.expirationTime), Yf(mr, t);
        else break;
        t = Xt(tn);
      }
    }
    function bf(e) {
      if (((Go = !1), Jf(e), !Qn))
        if (Xt(mr) !== null) (Qn = !0), tc(ec);
        else {
          var t = Xt(tn);
          t !== null && rc(bf, t.startTime - e);
        }
    }
    function ec(e, t) {
      (Qn = !1), Go && ((Go = !1), Wy(qo), (qo = -1)), (Ui = !0);
      var r = Be;
      try {
        for (
          Jf(t), At = Xt(mr);
          At !== null && (!(At.expirationTime > t) || (e && !qy()));

        ) {
          var n = At.callback;
          if (typeof n == "function") {
            (At.callback = null), (Be = At.priorityLevel);
            var a = n(At.expirationTime <= t);
            (t = W.unstable_now()),
              typeof a == "function"
                ? (At.callback = a)
                : At === Xt(mr) && Oi(mr),
              Jf(t);
          } else Oi(mr);
          At = Xt(mr);
        }
        if (At !== null) var o = !0;
        else {
          var l = Xt(tn);
          l !== null && rc(bf, l.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (At = null), (Be = r), (Ui = !1);
      }
    }
    var Hi = !1,
      Bi = null,
      qo = -1,
      $y = 5,
      Gy = -1;
    function qy() {
      return !(W.unstable_now() - Gy < $y);
    }
    function Xf() {
      if (Bi !== null) {
        var e = W.unstable_now();
        Gy = e;
        var t = !0;
        try {
          t = Bi(!0, e);
        } finally {
          t ? $o() : ((Hi = !1), (Bi = null));
        }
      } else Hi = !1;
    }
    var $o;
    typeof Hy == "function"
      ? ($o = function () {
          Hy(Xf);
        })
      : typeof MessageChannel < "u"
      ? ((Zf = new MessageChannel()),
        (Vy = Zf.port2),
        (Zf.port1.onmessage = Xf),
        ($o = function () {
          Vy.postMessage(null);
        }))
      : ($o = function () {
          jy(Xf, 0);
        });
    var Zf, Vy;
    function tc(e) {
      (Bi = e), Hi || ((Hi = !0), $o());
    }
    function rc(e, t) {
      qo = jy(function () {
        e(W.unstable_now());
      }, t);
    }
    W.unstable_IdlePriority = 5;
    W.unstable_ImmediatePriority = 1;
    W.unstable_LowPriority = 4;
    W.unstable_NormalPriority = 3;
    W.unstable_Profiling = null;
    W.unstable_UserBlockingPriority = 2;
    W.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    W.unstable_continueExecution = function () {
      Qn || Ui || ((Qn = !0), tc(ec));
    };
    W.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($y = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    W.unstable_getCurrentPriorityLevel = function () {
      return Be;
    };
    W.unstable_getFirstCallbackNode = function () {
      return Xt(mr);
    };
    W.unstable_next = function (e) {
      switch (Be) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = Be;
      }
      var r = Be;
      Be = t;
      try {
        return e();
      } finally {
        Be = r;
      }
    };
    W.unstable_pauseExecution = function () {};
    W.unstable_requestPaint = function () {};
    W.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var r = Be;
      Be = e;
      try {
        return t();
      } finally {
        Be = r;
      }
    };
    W.unstable_scheduleCallback = function (e, t, r) {
      var n = W.unstable_now();
      switch (
        (typeof r == "object" && r !== null
          ? ((r = r.delay), (r = typeof r == "number" && 0 < r ? n + r : n))
          : (r = n),
        e)
      ) {
        case 1:
          var a = -1;
          break;
        case 2:
          a = 250;
          break;
        case 5:
          a = 1073741823;
          break;
        case 4:
          a = 1e4;
          break;
        default:
          a = 5e3;
      }
      return (
        (a = r + a),
        (e = {
          id: xI++,
          callback: t,
          priorityLevel: e,
          startTime: r,
          expirationTime: a,
          sortIndex: -1,
        }),
        r > n
          ? ((e.sortIndex = r),
            Yf(tn, e),
            Xt(mr) === null &&
              e === Xt(tn) &&
              (Go ? (Wy(qo), (qo = -1)) : (Go = !0), rc(bf, r - n)))
          : ((e.sortIndex = a), Yf(mr, e), Qn || Ui || ((Qn = !0), tc(ec))),
        e
      );
    };
    W.unstable_shouldYield = qy;
    W.unstable_wrapCallback = function (e) {
      var t = Be;
      return function () {
        var r = Be;
        Be = t;
        try {
          return e.apply(this, arguments);
        } finally {
          Be = r;
        }
      };
    };
  });
  var Xy = Ke((UE, Ky) => {
    "use strict";
    Ky.exports = Qy();
  });
  var tx = Ke((St) => {
    "use strict";
    var r0 = Rt(),
      Lt = Xy();
    function k(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var n0 = new Set(),
      ml = {};
    function la(e, t) {
      Xa(e, t), Xa(e + "Capture", t);
    }
    function Xa(e, t) {
      for (ml[e] = t, e = 0; e < t.length; e++) n0.add(t[e]);
    }
    var Br = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      kc = Object.prototype.hasOwnProperty,
      LI =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Zy = {},
      Yy = {};
    function wI(e) {
      return kc.call(Yy, e)
        ? !0
        : kc.call(Zy, e)
        ? !1
        : LI.test(e)
        ? (Yy[e] = !0)
        : ((Zy[e] = !0), !1);
    }
    function SI(e, t, r, n) {
      if (r !== null && r.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return n
            ? !1
            : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function CI(e, t, r, n) {
      if (t === null || typeof t > "u" || SI(e, t, r, n)) return !0;
      if (n) return !1;
      if (r !== null)
        switch (r.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function et(e, t, r, n, a, o, l) {
      (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = n),
        (this.attributeNamespace = a),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l);
    }
    var Re = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        Re[e] = new et(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Re[t] = new et(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Re[e] = new et(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Re[e] = new et(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Re[e] = new et(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Re[e] = new et(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      Re[e] = new et(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Re[e] = new et(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      Re[e] = new et(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var yp = /[\-:]([a-z])/g;
    function vp(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yp, vp);
        Re[t] = new et(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(yp, vp);
        Re[t] = new et(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(yp, vp);
      Re[t] = new et(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Re[e] = new et(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Re.xlinkHref = new et(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Re[e] = new et(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function xp(e, t, r, n) {
      var a = Re.hasOwnProperty(t) ? Re[t] : null;
      (a !== null
        ? a.type !== 0
        : n ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (CI(t, r, a, n) && (r = null),
        n || a === null
          ? wI(t) &&
            (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
          : a.mustUseProperty
          ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
          : ((t = a.attributeName),
            (n = a.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
    }
    var Vr = r0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Vi = Symbol.for("react.element"),
      Da = Symbol.for("react.portal"),
      Ra = Symbol.for("react.fragment"),
      Lp = Symbol.for("react.strict_mode"),
      Pc = Symbol.for("react.profiler"),
      a0 = Symbol.for("react.provider"),
      o0 = Symbol.for("react.context"),
      wp = Symbol.for("react.forward_ref"),
      Ec = Symbol.for("react.suspense"),
      Tc = Symbol.for("react.suspense_list"),
      Sp = Symbol.for("react.memo"),
      nn = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var l0 = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Jy = Symbol.iterator;
    function Qo(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Jy && e[Jy]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var ae = Object.assign,
      nc;
    function tl(e) {
      if (nc === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          nc = (t && t[1]) || "";
        }
      return (
        `
` +
        nc +
        e
      );
    }
    var ac = !1;
    function oc(e, t) {
      if (!e || ac) return "";
      ac = !0;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (f) {
              var n = f;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (f) {
              n = f;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (f) {
            n = f;
          }
          e();
        }
      } catch (f) {
        if (f && n && typeof f.stack == "string") {
          for (
            var a = f.stack.split(`
`),
              o = n.stack.split(`
`),
              l = a.length - 1,
              u = o.length - 1;
            1 <= l && 0 <= u && a[l] !== o[u];

          )
            u--;
          for (; 1 <= l && 0 <= u; l--, u--)
            if (a[l] !== o[u]) {
              if (l !== 1 || u !== 1)
                do
                  if ((l--, u--, 0 > u || a[l] !== o[u])) {
                    var i =
                      `
` + a[l].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        i.includes("<anonymous>") &&
                        (i = i.replace("<anonymous>", e.displayName)),
                      i
                    );
                  }
                while (1 <= l && 0 <= u);
              break;
            }
        }
      } finally {
        (ac = !1), (Error.prepareStackTrace = r);
      }
      return (e = e ? e.displayName || e.name : "") ? tl(e) : "";
    }
    function II(e) {
      switch (e.tag) {
        case 5:
          return tl(e.type);
        case 16:
          return tl("Lazy");
        case 13:
          return tl("Suspense");
        case 19:
          return tl("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = oc(e.type, !1)), e;
        case 11:
          return (e = oc(e.type.render, !1)), e;
        case 1:
          return (e = oc(e.type, !0)), e;
        default:
          return "";
      }
    }
    function Mc(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ra:
          return "Fragment";
        case Da:
          return "Portal";
        case Pc:
          return "Profiler";
        case Lp:
          return "StrictMode";
        case Ec:
          return "Suspense";
        case Tc:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o0:
            return (e.displayName || "Context") + ".Consumer";
          case a0:
            return (e._context.displayName || "Context") + ".Provider";
          case wp:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case Sp:
            return (
              (t = e.displayName || null), t !== null ? t : Mc(e.type) || "Memo"
            );
          case nn:
            (t = e._payload), (e = e._init);
            try {
              return Mc(e(t));
            } catch {}
        }
      return null;
    }
    function kI(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Mc(t);
        case 8:
          return t === Lp ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function vn(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function u0(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function PI(e) {
      var t = u0(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof r < "u" &&
        typeof r.get == "function" &&
        typeof r.set == "function"
      ) {
        var a = r.get,
          o = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (l) {
              (n = "" + l), o.call(this, l);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (l) {
              n = "" + l;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function ji(e) {
      e._valueTracker || (e._valueTracker = PI(e));
    }
    function i0(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var r = t.getValue(),
        n = "";
      return (
        e && (n = u0(e) ? (e.checked ? "true" : "false") : e.value),
        (e = n),
        e !== r ? (t.setValue(e), !0) : !1
      );
    }
    function gs(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Fc(e, t) {
      var r = t.checked;
      return ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked,
      });
    }
    function by(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
      (r = vn(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        });
    }
    function s0(e, t) {
      (t = t.checked), t != null && xp(e, "checked", t, !1);
    }
    function Dc(e, t) {
      s0(e, t);
      var r = vn(t.value),
        n = t.type;
      if (r != null)
        n === "number"
          ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
          : e.value !== "" + r && (e.value = "" + r);
      else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value")
        ? Rc(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && Rc(e, t.type, vn(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function ev(e, t, r) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (
          !(
            (n !== "submit" && n !== "reset") ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          r || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r = e.name),
        r !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        r !== "" && (e.name = r);
    }
    function Rc(e, t, r) {
      (t !== "number" || gs(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    var rl = Array.isArray;
    function Wa(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
        for (r = 0; r < e.length; r++)
          (a = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== a && (e[r].selected = a),
            a && n && (e[r].defaultSelected = !0);
      } else {
        for (r = "" + vn(r), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === r) {
            (e[a].selected = !0), n && (e[a].defaultSelected = !0);
            return;
          }
          t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ac(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
      return ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function tv(e, t) {
      var r = t.value;
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(k(92));
          if (rl(r)) {
            if (1 < r.length) throw Error(k(93));
            r = r[0];
          }
          t = r;
        }
        t == null && (t = ""), (r = t);
      }
      e._wrapperState = { initialValue: vn(r) };
    }
    function d0(e, t) {
      var r = vn(t.value),
        n = vn(t.defaultValue);
      r != null &&
        ((r = "" + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = "" + n);
    }
    function rv(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function f0(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function _c(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? f0(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Wi,
      c0 = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, r, n, a) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, r, n, a);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            Wi = Wi || document.createElement("div"),
              Wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = Wi.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function hl(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var ol = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      EI = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ol).forEach(function (e) {
      EI.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ol[t] = ol[e]);
      });
    });
    function p0(e, t, r) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : r ||
          typeof t != "number" ||
          t === 0 ||
          (ol.hasOwnProperty(e) && ol[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function m0(e, t) {
      e = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf("--") === 0,
            a = p0(r, t[r], n);
          r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, a) : (e[r] = a);
        }
    }
    var TI = ae(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function zc(e, t) {
      if (t) {
        if (TI[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(k(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(k(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62));
      }
    }
    function Nc(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Bc = null;
    function Cp(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Oc = null,
      $a = null,
      Ga = null;
    function nv(e) {
      if ((e = Al(e))) {
        if (typeof Oc != "function") throw Error(k(280));
        var t = e.stateNode;
        t && ((t = $s(t)), Oc(e.stateNode, e.type, t));
      }
    }
    function h0(e) {
      $a ? (Ga ? Ga.push(e) : (Ga = [e])) : ($a = e);
    }
    function g0() {
      if ($a) {
        var e = $a,
          t = Ga;
        if (((Ga = $a = null), nv(e), t))
          for (e = 0; e < t.length; e++) nv(t[e]);
      }
    }
    function y0(e, t) {
      return e(t);
    }
    function v0() {}
    var lc = !1;
    function x0(e, t, r) {
      if (lc) return e(t, r);
      lc = !0;
      try {
        return y0(e, t, r);
      } finally {
        (lc = !1), ($a !== null || Ga !== null) && (v0(), g0());
      }
    }
    function gl(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var n = $s(r);
      if (n === null) return null;
      r = n[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (n = !n.disabled) ||
            ((e = e.type),
            (n = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !n);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (r && typeof r != "function") throw Error(k(231, t, typeof r));
      return r;
    }
    var Uc = !1;
    if (Br)
      try {
        (Ma = {}),
          Object.defineProperty(Ma, "passive", {
            get: function () {
              Uc = !0;
            },
          }),
          window.addEventListener("test", Ma, Ma),
          window.removeEventListener("test", Ma, Ma);
      } catch {
        Uc = !1;
      }
    var Ma;
    function MI(e, t, r, n, a, o, l, u, i) {
      var f = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, f);
      } catch (p) {
        this.onError(p);
      }
    }
    var ll = !1,
      ys = null,
      vs = !1,
      Hc = null,
      FI = {
        onError: function (e) {
          (ll = !0), (ys = e);
        },
      };
    function DI(e, t, r, n, a, o, l, u, i) {
      (ll = !1), (ys = null), MI.apply(FI, arguments);
    }
    function RI(e, t, r, n, a, o, l, u, i) {
      if ((DI.apply(this, arguments), ll)) {
        if (ll) {
          var f = ys;
          (ll = !1), (ys = null);
        } else throw Error(k(198));
        vs || ((vs = !0), (Hc = f));
      }
    }
    function ua(e) {
      var t = e,
        r = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? r : null;
    }
    function L0(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function av(e) {
      if (ua(e) !== e) throw Error(k(188));
    }
    function AI(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = ua(e)), t === null)) throw Error(k(188));
        return t !== e ? null : e;
      }
      for (var r = e, n = t; ; ) {
        var a = r.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((n = a.return), n !== null)) {
            r = n;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === r) return av(a), e;
            if (o === n) return av(a), t;
            o = o.sibling;
          }
          throw Error(k(188));
        }
        if (r.return !== n.return) (r = a), (n = o);
        else {
          for (var l = !1, u = a.child; u; ) {
            if (u === r) {
              (l = !0), (r = a), (n = o);
              break;
            }
            if (u === n) {
              (l = !0), (n = a), (r = o);
              break;
            }
            u = u.sibling;
          }
          if (!l) {
            for (u = o.child; u; ) {
              if (u === r) {
                (l = !0), (r = o), (n = a);
                break;
              }
              if (u === n) {
                (l = !0), (n = o), (r = a);
                break;
              }
              u = u.sibling;
            }
            if (!l) throw Error(k(189));
          }
        }
        if (r.alternate !== n) throw Error(k(190));
      }
      if (r.tag !== 3) throw Error(k(188));
      return r.stateNode.current === r ? e : t;
    }
    function w0(e) {
      return (e = AI(e)), e !== null ? S0(e) : null;
    }
    function S0(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = S0(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var C0 = Lt.unstable_scheduleCallback,
      ov = Lt.unstable_cancelCallback,
      _I = Lt.unstable_shouldYield,
      zI = Lt.unstable_requestPaint,
      pe = Lt.unstable_now,
      NI = Lt.unstable_getCurrentPriorityLevel,
      Ip = Lt.unstable_ImmediatePriority,
      I0 = Lt.unstable_UserBlockingPriority,
      xs = Lt.unstable_NormalPriority,
      BI = Lt.unstable_LowPriority,
      k0 = Lt.unstable_IdlePriority,
      Hs = null,
      vr = null;
    function OI(e) {
      if (vr && typeof vr.onCommitFiberRoot == "function")
        try {
          vr.onCommitFiberRoot(Hs, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var er = Math.clz32 ? Math.clz32 : VI,
      UI = Math.log,
      HI = Math.LN2;
    function VI(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((UI(e) / HI) | 0)) | 0;
    }
    var $i = 64,
      Gi = 4194304;
    function nl(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Ls(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var n = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = r & 268435455;
      if (l !== 0) {
        var u = l & ~a;
        u !== 0 ? (n = nl(u)) : ((o &= l), o !== 0 && (n = nl(o)));
      } else (l = r & ~a), l !== 0 ? (n = nl(l)) : o !== 0 && (n = nl(o));
      if (n === 0) return 0;
      if (
        t !== 0 &&
        t !== n &&
        !(t & a) &&
        ((a = n & -n),
        (o = t & -t),
        a >= o || (a === 16 && (o & 4194240) !== 0))
      )
        return t;
      if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= n; 0 < t; )
          (r = 31 - er(t)), (a = 1 << r), (n |= e[r]), (t &= ~a);
      return n;
    }
    function jI(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function WI(e, t) {
      for (
        var r = e.suspendedLanes,
          n = e.pingedLanes,
          a = e.expirationTimes,
          o = e.pendingLanes;
        0 < o;

      ) {
        var l = 31 - er(o),
          u = 1 << l,
          i = a[l];
        i === -1
          ? (!(u & r) || u & n) && (a[l] = jI(u, t))
          : i <= t && (e.expiredLanes |= u),
          (o &= ~u);
      }
    }
    function Vc(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function P0() {
      var e = $i;
      return ($i <<= 1), !($i & 4194240) && ($i = 64), e;
    }
    function uc(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function Dl(e, t, r) {
      (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - er(t)),
        (e[t] = r);
    }
    function $I(e, t) {
      var r = e.pendingLanes & ~t;
      (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
      var n = e.eventTimes;
      for (e = e.expirationTimes; 0 < r; ) {
        var a = 31 - er(r),
          o = 1 << a;
        (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~o);
      }
    }
    function kp(e, t) {
      var r = (e.entangledLanes |= t);
      for (e = e.entanglements; r; ) {
        var n = 31 - er(r),
          a = 1 << n;
        (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
      }
    }
    var V = 0;
    function E0(e) {
      return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var T0,
      Pp,
      M0,
      F0,
      D0,
      jc = !1,
      qi = [],
      dn = null,
      fn = null,
      cn = null,
      yl = new Map(),
      vl = new Map(),
      on = [],
      GI =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function lv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          dn = null;
          break;
        case "dragenter":
        case "dragleave":
          fn = null;
          break;
        case "mouseover":
        case "mouseout":
          cn = null;
          break;
        case "pointerover":
        case "pointerout":
          yl.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          vl.delete(t.pointerId);
      }
    }
    function Ko(e, t, r, n, a, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = {
            blockedOn: t,
            domEventName: r,
            eventSystemFlags: n,
            nativeEvent: o,
            targetContainers: [a],
          }),
          t !== null && ((t = Al(t)), t !== null && Pp(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          a !== null && t.indexOf(a) === -1 && t.push(a),
          e);
    }
    function qI(e, t, r, n, a) {
      switch (t) {
        case "focusin":
          return (dn = Ko(dn, e, t, r, n, a)), !0;
        case "dragenter":
          return (fn = Ko(fn, e, t, r, n, a)), !0;
        case "mouseover":
          return (cn = Ko(cn, e, t, r, n, a)), !0;
        case "pointerover":
          var o = a.pointerId;
          return yl.set(o, Ko(yl.get(o) || null, e, t, r, n, a)), !0;
        case "gotpointercapture":
          return (
            (o = a.pointerId),
            vl.set(o, Ko(vl.get(o) || null, e, t, r, n, a)),
            !0
          );
      }
      return !1;
    }
    function R0(e) {
      var t = Zn(e.target);
      if (t !== null) {
        var r = ua(t);
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = L0(r)), t !== null)) {
              (e.blockedOn = t),
                D0(e.priority, function () {
                  M0(r);
                });
              return;
            }
          } else if (
            t === 3 &&
            r.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ls(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Wc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var n = new r.constructor(r.type, r);
          (Bc = n), r.target.dispatchEvent(n), (Bc = null);
        } else return (t = Al(r)), t !== null && Pp(t), (e.blockedOn = r), !1;
        t.shift();
      }
      return !0;
    }
    function uv(e, t, r) {
      ls(e) && r.delete(t);
    }
    function QI() {
      (jc = !1),
        dn !== null && ls(dn) && (dn = null),
        fn !== null && ls(fn) && (fn = null),
        cn !== null && ls(cn) && (cn = null),
        yl.forEach(uv),
        vl.forEach(uv);
    }
    function Xo(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        jc ||
          ((jc = !0),
          Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, QI)));
    }
    function xl(e) {
      function t(a) {
        return Xo(a, e);
      }
      if (0 < qi.length) {
        Xo(qi[0], e);
        for (var r = 1; r < qi.length; r++) {
          var n = qi[r];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      for (
        dn !== null && Xo(dn, e),
          fn !== null && Xo(fn, e),
          cn !== null && Xo(cn, e),
          yl.forEach(t),
          vl.forEach(t),
          r = 0;
        r < on.length;
        r++
      )
        (n = on[r]), n.blockedOn === e && (n.blockedOn = null);
      for (; 0 < on.length && ((r = on[0]), r.blockedOn === null); )
        R0(r), r.blockedOn === null && on.shift();
    }
    var qa = Vr.ReactCurrentBatchConfig,
      ws = !0;
    function KI(e, t, r, n) {
      var a = V,
        o = qa.transition;
      qa.transition = null;
      try {
        (V = 1), Ep(e, t, r, n);
      } finally {
        (V = a), (qa.transition = o);
      }
    }
    function XI(e, t, r, n) {
      var a = V,
        o = qa.transition;
      qa.transition = null;
      try {
        (V = 4), Ep(e, t, r, n);
      } finally {
        (V = a), (qa.transition = o);
      }
    }
    function Ep(e, t, r, n) {
      if (ws) {
        var a = Wc(e, t, r, n);
        if (a === null) mc(e, t, n, Ss, r), lv(e, n);
        else if (qI(a, e, t, r, n)) n.stopPropagation();
        else if ((lv(e, n), t & 4 && -1 < GI.indexOf(e))) {
          for (; a !== null; ) {
            var o = Al(a);
            if (
              (o !== null && T0(o),
              (o = Wc(e, t, r, n)),
              o === null && mc(e, t, n, Ss, r),
              o === a)
            )
              break;
            a = o;
          }
          a !== null && n.stopPropagation();
        } else mc(e, t, n, null, r);
      }
    }
    var Ss = null;
    function Wc(e, t, r, n) {
      if (((Ss = null), (e = Cp(n)), (e = Zn(e)), e !== null))
        if (((t = ua(e)), t === null)) e = null;
        else if (((r = t.tag), r === 13)) {
          if (((e = L0(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return (Ss = e), null;
    }
    function A0(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (NI()) {
            case Ip:
              return 1;
            case I0:
              return 4;
            case xs:
            case BI:
              return 16;
            case k0:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var un = null,
      Tp = null,
      us = null;
    function _0() {
      if (us) return us;
      var e,
        t = Tp,
        r = t.length,
        n,
        a = "value" in un ? un.value : un.textContent,
        o = a.length;
      for (e = 0; e < r && t[e] === a[e]; e++);
      var l = r - e;
      for (n = 1; n <= l && t[r - n] === a[o - n]; n++);
      return (us = a.slice(e, 1 < n ? 1 - n : void 0));
    }
    function is(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Qi() {
      return !0;
    }
    function iv() {
      return !1;
    }
    function wt(e) {
      function t(r, n, a, o, l) {
        (this._reactName = r),
          (this._targetInst = a),
          (this.type = n),
          (this.nativeEvent = o),
          (this.target = l),
          (this.currentTarget = null);
        for (var u in e)
          e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(o) : o[u]));
        return (
          (this.isDefaultPrevented = (
            o.defaultPrevented != null
              ? o.defaultPrevented
              : o.returnValue === !1
          )
            ? Qi
            : iv),
          (this.isPropagationStopped = iv),
          this
        );
      }
      return (
        ae(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
              (r.preventDefault
                ? r.preventDefault()
                : typeof r.returnValue != "unknown" && (r.returnValue = !1),
              (this.isDefaultPrevented = Qi));
          },
          stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
              (r.stopPropagation
                ? r.stopPropagation()
                : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
              (this.isPropagationStopped = Qi));
          },
          persist: function () {},
          isPersistent: Qi,
        }),
        t
      );
    }
    var ro = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Mp = wt(ro),
      Rl = ae({}, ro, { view: 0, detail: 0 }),
      ZI = wt(Rl),
      ic,
      sc,
      Zo,
      Vs = ae({}, Rl, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fp,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== Zo &&
                (Zo && e.type === "mousemove"
                  ? ((ic = e.screenX - Zo.screenX),
                    (sc = e.screenY - Zo.screenY))
                  : (sc = ic = 0),
                (Zo = e)),
              ic);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : sc;
        },
      }),
      sv = wt(Vs),
      YI = ae({}, Vs, { dataTransfer: 0 }),
      JI = wt(YI),
      bI = ae({}, Rl, { relatedTarget: 0 }),
      dc = wt(bI),
      ek = ae({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      tk = wt(ek),
      rk = ae({}, ro, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      nk = wt(rk),
      ak = ae({}, ro, { data: 0 }),
      dv = wt(ak),
      ok = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      lk = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      uk = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function ik(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = uk[e])
        ? !!t[e]
        : !1;
    }
    function Fp() {
      return ik;
    }
    var sk = ae({}, Rl, {
        key: function (e) {
          if (e.key) {
            var t = ok[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = is(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? lk[e.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Fp,
        charCode: function (e) {
          return e.type === "keypress" ? is(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? is(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
        },
      }),
      dk = wt(sk),
      fk = ae({}, Vs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      fv = wt(fk),
      ck = ae({}, Rl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fp,
      }),
      pk = wt(ck),
      mk = ae({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      hk = wt(mk),
      gk = ae({}, Vs, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      yk = wt(gk),
      vk = [9, 13, 27, 32],
      Dp = Br && "CompositionEvent" in window,
      ul = null;
    Br && "documentMode" in document && (ul = document.documentMode);
    var xk = Br && "TextEvent" in window && !ul,
      z0 = Br && (!Dp || (ul && 8 < ul && 11 >= ul)),
      cv = " ",
      pv = !1;
    function N0(e, t) {
      switch (e) {
        case "keyup":
          return vk.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function B0(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var Aa = !1;
    function Lk(e, t) {
      switch (e) {
        case "compositionend":
          return B0(t);
        case "keypress":
          return t.which !== 32 ? null : ((pv = !0), cv);
        case "textInput":
          return (e = t.data), e === cv && pv ? null : e;
        default:
          return null;
      }
    }
    function wk(e, t) {
      if (Aa)
        return e === "compositionend" || (!Dp && N0(e, t))
          ? ((e = _0()), (us = Tp = un = null), (Aa = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return z0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Sk = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function mv(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Sk[e.type] : t === "textarea";
    }
    function O0(e, t, r, n) {
      h0(n),
        (t = Cs(t, "onChange")),
        0 < t.length &&
          ((r = new Mp("onChange", "change", null, r, n)),
          e.push({ event: r, listeners: t }));
    }
    var il = null,
      Ll = null;
    function Ck(e) {
      X0(e, 0);
    }
    function js(e) {
      var t = Na(e);
      if (i0(t)) return e;
    }
    function Ik(e, t) {
      if (e === "change") return t;
    }
    var U0 = !1;
    Br &&
      (Br
        ? ((Xi = "oninput" in document),
          Xi ||
            ((fc = document.createElement("div")),
            fc.setAttribute("oninput", "return;"),
            (Xi = typeof fc.oninput == "function")),
          (Ki = Xi))
        : (Ki = !1),
      (U0 = Ki && (!document.documentMode || 9 < document.documentMode)));
    var Ki, Xi, fc;
    function hv() {
      il && (il.detachEvent("onpropertychange", H0), (Ll = il = null));
    }
    function H0(e) {
      if (e.propertyName === "value" && js(Ll)) {
        var t = [];
        O0(t, Ll, e, Cp(e)), x0(Ck, t);
      }
    }
    function kk(e, t, r) {
      e === "focusin"
        ? (hv(), (il = t), (Ll = r), il.attachEvent("onpropertychange", H0))
        : e === "focusout" && hv();
    }
    function Pk(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return js(Ll);
    }
    function Ek(e, t) {
      if (e === "click") return js(t);
    }
    function Tk(e, t) {
      if (e === "input" || e === "change") return js(t);
    }
    function Mk(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var rr = typeof Object.is == "function" ? Object.is : Mk;
    function wl(e, t) {
      if (rr(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (n = 0; n < r.length; n++) {
        var a = r[n];
        if (!kc.call(t, a) || !rr(e[a], t[a])) return !1;
      }
      return !0;
    }
    function gv(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function yv(e, t) {
      var r = gv(e);
      e = 0;
      for (var n; r; ) {
        if (r.nodeType === 3) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = gv(r);
      }
    }
    function V0(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? V0(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function j0() {
      for (var e = window, t = gs(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == "string";
        } catch {
          r = !1;
        }
        if (r) e = t.contentWindow;
        else break;
        t = gs(e.document);
      }
      return t;
    }
    function Rp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function Fk(e) {
      var t = j0(),
        r = e.focusedElem,
        n = e.selectionRange;
      if (
        t !== r &&
        r &&
        r.ownerDocument &&
        V0(r.ownerDocument.documentElement, r)
      ) {
        if (n !== null && Rp(r)) {
          if (
            ((t = n.start),
            (e = n.end),
            e === void 0 && (e = t),
            "selectionStart" in r)
          )
            (r.selectionStart = t),
              (r.selectionEnd = Math.min(e, r.value.length));
          else if (
            ((e =
              ((t = r.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var a = r.textContent.length,
              o = Math.min(n.start, a);
            (n = n.end === void 0 ? o : Math.min(n.end, a)),
              !e.extend && o > n && ((a = n), (n = o), (o = a)),
              (a = yv(r, o));
            var l = yv(r, n);
            a &&
              l &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== a.node ||
                e.anchorOffset !== a.offset ||
                e.focusNode !== l.node ||
                e.focusOffset !== l.offset) &&
              ((t = t.createRange()),
              t.setStart(a.node, a.offset),
              e.removeAllRanges(),
              o > n
                ? (e.addRange(t), e.extend(l.node, l.offset))
                : (t.setEnd(l.node, l.offset), e.addRange(t)));
          }
        }
        for (t = [], e = r; (e = e.parentNode); )
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof r.focus == "function" && r.focus(), r = 0;
          r < t.length;
          r++
        )
          (e = t[r]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var Dk = Br && "documentMode" in document && 11 >= document.documentMode,
      _a = null,
      $c = null,
      sl = null,
      Gc = !1;
    function vv(e, t, r) {
      var n =
        r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      Gc ||
        _a == null ||
        _a !== gs(n) ||
        ((n = _a),
        "selectionStart" in n && Rp(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = (
              (n.ownerDocument && n.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (sl && wl(sl, n)) ||
          ((sl = n),
          (n = Cs($c, "onSelect")),
          0 < n.length &&
            ((t = new Mp("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: n }),
            (t.target = _a))));
    }
    function Zi(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var za = {
        animationend: Zi("Animation", "AnimationEnd"),
        animationiteration: Zi("Animation", "AnimationIteration"),
        animationstart: Zi("Animation", "AnimationStart"),
        transitionend: Zi("Transition", "TransitionEnd"),
      },
      cc = {},
      W0 = {};
    Br &&
      ((W0 = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete za.animationend.animation,
        delete za.animationiteration.animation,
        delete za.animationstart.animation),
      "TransitionEvent" in window || delete za.transitionend.transition);
    function Ws(e) {
      if (cc[e]) return cc[e];
      if (!za[e]) return e;
      var t = za[e],
        r;
      for (r in t) if (t.hasOwnProperty(r) && r in W0) return (cc[e] = t[r]);
      return e;
    }
    var $0 = Ws("animationend"),
      G0 = Ws("animationiteration"),
      q0 = Ws("animationstart"),
      Q0 = Ws("transitionend"),
      K0 = new Map(),
      xv =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function Ln(e, t) {
      K0.set(e, t), la(t, [e]);
    }
    for (Yi = 0; Yi < xv.length; Yi++)
      (Ji = xv[Yi]),
        (Lv = Ji.toLowerCase()),
        (wv = Ji[0].toUpperCase() + Ji.slice(1)),
        Ln(Lv, "on" + wv);
    var Ji, Lv, wv, Yi;
    Ln($0, "onAnimationEnd");
    Ln(G0, "onAnimationIteration");
    Ln(q0, "onAnimationStart");
    Ln("dblclick", "onDoubleClick");
    Ln("focusin", "onFocus");
    Ln("focusout", "onBlur");
    Ln(Q0, "onTransitionEnd");
    Xa("onMouseEnter", ["mouseout", "mouseover"]);
    Xa("onMouseLeave", ["mouseout", "mouseover"]);
    Xa("onPointerEnter", ["pointerout", "pointerover"]);
    Xa("onPointerLeave", ["pointerout", "pointerover"]);
    la(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    );
    la(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    la("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    la(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    la(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    la(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var al =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Rk = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(al)
      );
    function Sv(e, t, r) {
      var n = e.type || "unknown-event";
      (e.currentTarget = r), RI(n, t, void 0, e), (e.currentTarget = null);
    }
    function X0(e, t) {
      t = (t & 4) !== 0;
      for (var r = 0; r < e.length; r++) {
        var n = e[r],
          a = n.event;
        n = n.listeners;
        e: {
          var o = void 0;
          if (t)
            for (var l = n.length - 1; 0 <= l; l--) {
              var u = n[l],
                i = u.instance,
                f = u.currentTarget;
              if (((u = u.listener), i !== o && a.isPropagationStopped()))
                break e;
              Sv(a, u, f), (o = i);
            }
          else
            for (l = 0; l < n.length; l++) {
              if (
                ((u = n[l]),
                (i = u.instance),
                (f = u.currentTarget),
                (u = u.listener),
                i !== o && a.isPropagationStopped())
              )
                break e;
              Sv(a, u, f), (o = i);
            }
        }
      }
      if (vs) throw ((e = Hc), (vs = !1), (Hc = null), e);
    }
    function Z(e, t) {
      var r = t[Zc];
      r === void 0 && (r = t[Zc] = new Set());
      var n = e + "__bubble";
      r.has(n) || (Z0(t, e, 2, !1), r.add(n));
    }
    function pc(e, t, r) {
      var n = 0;
      t && (n |= 4), Z0(r, e, n, t);
    }
    var bi = "_reactListening" + Math.random().toString(36).slice(2);
    function Sl(e) {
      if (!e[bi]) {
        (e[bi] = !0),
          n0.forEach(function (r) {
            r !== "selectionchange" &&
              (Rk.has(r) || pc(r, !1, e), pc(r, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[bi] || ((t[bi] = !0), pc("selectionchange", !1, t));
      }
    }
    function Z0(e, t, r, n) {
      switch (A0(t)) {
        case 1:
          var a = KI;
          break;
        case 4:
          a = XI;
          break;
        default:
          a = Ep;
      }
      (r = a.bind(null, t, r, e)),
        (a = void 0),
        !Uc ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (a = !0),
        n
          ? a !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: a })
            : e.addEventListener(t, r, !0)
          : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1);
    }
    function mc(e, t, r, n, a) {
      var o = n;
      if (!(t & 1) && !(t & 2) && n !== null)
        e: for (;;) {
          if (n === null) return;
          var l = n.tag;
          if (l === 3 || l === 4) {
            var u = n.stateNode.containerInfo;
            if (u === a || (u.nodeType === 8 && u.parentNode === a)) break;
            if (l === 4)
              for (l = n.return; l !== null; ) {
                var i = l.tag;
                if (
                  (i === 3 || i === 4) &&
                  ((i = l.stateNode.containerInfo),
                  i === a || (i.nodeType === 8 && i.parentNode === a))
                )
                  return;
                l = l.return;
              }
            for (; u !== null; ) {
              if (((l = Zn(u)), l === null)) return;
              if (((i = l.tag), i === 5 || i === 6)) {
                n = o = l;
                continue e;
              }
              u = u.parentNode;
            }
          }
          n = n.return;
        }
      x0(function () {
        var f = o,
          p = Cp(r),
          h = [];
        e: {
          var m = K0.get(e);
          if (m !== void 0) {
            var y = Mp,
              x = e;
            switch (e) {
              case "keypress":
                if (is(r) === 0) break e;
              case "keydown":
              case "keyup":
                y = dk;
                break;
              case "focusin":
                (x = "focus"), (y = dc);
                break;
              case "focusout":
                (x = "blur"), (y = dc);
                break;
              case "beforeblur":
              case "afterblur":
                y = dc;
                break;
              case "click":
                if (r.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                y = sv;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = JI;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = pk;
                break;
              case $0:
              case G0:
              case q0:
                y = tk;
                break;
              case Q0:
                y = hk;
                break;
              case "scroll":
                y = ZI;
                break;
              case "wheel":
                y = yk;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = nk;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = fv;
            }
            var v = (t & 4) !== 0,
              E = !v && e === "scroll",
              d = v ? (m !== null ? m + "Capture" : null) : m;
            v = [];
            for (var s = f, c; s !== null; ) {
              c = s;
              var g = c.stateNode;
              if (
                (c.tag === 5 &&
                  g !== null &&
                  ((c = g),
                  d !== null &&
                    ((g = gl(s, d)), g != null && v.push(Cl(s, g, c)))),
                E)
              )
                break;
              s = s.return;
            }
            0 < v.length &&
              ((m = new y(m, x, null, r, p)),
              h.push({ event: m, listeners: v }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (
              ((m = e === "mouseover" || e === "pointerover"),
              (y = e === "mouseout" || e === "pointerout"),
              m &&
                r !== Bc &&
                (x = r.relatedTarget || r.fromElement) &&
                (Zn(x) || x[Or]))
            )
              break e;
            if (
              (y || m) &&
              ((m =
                p.window === p
                  ? p
                  : (m = p.ownerDocument)
                  ? m.defaultView || m.parentWindow
                  : window),
              y
                ? ((x = r.relatedTarget || r.toElement),
                  (y = f),
                  (x = x ? Zn(x) : null),
                  x !== null &&
                    ((E = ua(x)), x !== E || (x.tag !== 5 && x.tag !== 6)) &&
                    (x = null))
                : ((y = null), (x = f)),
              y !== x)
            ) {
              if (
                ((v = sv),
                (g = "onMouseLeave"),
                (d = "onMouseEnter"),
                (s = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((v = fv),
                  (g = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (s = "pointer")),
                (E = y == null ? m : Na(y)),
                (c = x == null ? m : Na(x)),
                (m = new v(g, s + "leave", y, r, p)),
                (m.target = E),
                (m.relatedTarget = c),
                (g = null),
                Zn(p) === f &&
                  ((v = new v(d, s + "enter", x, r, p)),
                  (v.target = c),
                  (v.relatedTarget = E),
                  (g = v)),
                (E = g),
                y && x)
              )
                t: {
                  for (v = y, d = x, s = 0, c = v; c; c = Fa(c)) s++;
                  for (c = 0, g = d; g; g = Fa(g)) c++;
                  for (; 0 < s - c; ) (v = Fa(v)), s--;
                  for (; 0 < c - s; ) (d = Fa(d)), c--;
                  for (; s--; ) {
                    if (v === d || (d !== null && v === d.alternate)) break t;
                    (v = Fa(v)), (d = Fa(d));
                  }
                  v = null;
                }
              else v = null;
              y !== null && Cv(h, m, y, v, !1),
                x !== null && E !== null && Cv(h, E, x, v, !0);
            }
          }
          e: {
            if (
              ((m = f ? Na(f) : window),
              (y = m.nodeName && m.nodeName.toLowerCase()),
              y === "select" || (y === "input" && m.type === "file"))
            )
              var L = Ik;
            else if (mv(m))
              if (U0) L = Tk;
              else {
                L = Pk;
                var C = kk;
              }
            else
              (y = m.nodeName) &&
                y.toLowerCase() === "input" &&
                (m.type === "checkbox" || m.type === "radio") &&
                (L = Ek);
            if (L && (L = L(e, f))) {
              O0(h, L, r, p);
              break e;
            }
            C && C(e, m, f),
              e === "focusout" &&
                (C = m._wrapperState) &&
                C.controlled &&
                m.type === "number" &&
                Rc(m, "number", m.value);
          }
          switch (((C = f ? Na(f) : window), e)) {
            case "focusin":
              (mv(C) || C.contentEditable === "true") &&
                ((_a = C), ($c = f), (sl = null));
              break;
            case "focusout":
              sl = $c = _a = null;
              break;
            case "mousedown":
              Gc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Gc = !1), vv(h, r, p);
              break;
            case "selectionchange":
              if (Dk) break;
            case "keydown":
            case "keyup":
              vv(h, r, p);
          }
          var S;
          if (Dp)
            e: {
              switch (e) {
                case "compositionstart":
                  var w = "onCompositionStart";
                  break e;
                case "compositionend":
                  w = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  w = "onCompositionUpdate";
                  break e;
              }
              w = void 0;
            }
          else
            Aa
              ? N0(e, r) && (w = "onCompositionEnd")
              : e === "keydown" &&
                r.keyCode === 229 &&
                (w = "onCompositionStart");
          w &&
            (z0 &&
              r.locale !== "ko" &&
              (Aa || w !== "onCompositionStart"
                ? w === "onCompositionEnd" && Aa && (S = _0())
                : ((un = p),
                  (Tp = "value" in un ? un.value : un.textContent),
                  (Aa = !0))),
            (C = Cs(f, w)),
            0 < C.length &&
              ((w = new dv(w, e, null, r, p)),
              h.push({ event: w, listeners: C }),
              S ? (w.data = S) : ((S = B0(r)), S !== null && (w.data = S)))),
            (S = xk ? Lk(e, r) : wk(e, r)) &&
              ((f = Cs(f, "onBeforeInput")),
              0 < f.length &&
                ((p = new dv("onBeforeInput", "beforeinput", null, r, p)),
                h.push({ event: p, listeners: f }),
                (p.data = S)));
        }
        X0(h, t);
      });
    }
    function Cl(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function Cs(e, t) {
      for (var r = t + "Capture", n = []; e !== null; ) {
        var a = e,
          o = a.stateNode;
        a.tag === 5 &&
          o !== null &&
          ((a = o),
          (o = gl(e, r)),
          o != null && n.unshift(Cl(e, o, a)),
          (o = gl(e, t)),
          o != null && n.push(Cl(e, o, a))),
          (e = e.return);
      }
      return n;
    }
    function Fa(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Cv(e, t, r, n, a) {
      for (var o = t._reactName, l = []; r !== null && r !== n; ) {
        var u = r,
          i = u.alternate,
          f = u.stateNode;
        if (i !== null && i === n) break;
        u.tag === 5 &&
          f !== null &&
          ((u = f),
          a
            ? ((i = gl(r, o)), i != null && l.unshift(Cl(r, i, u)))
            : a || ((i = gl(r, o)), i != null && l.push(Cl(r, i, u)))),
          (r = r.return);
      }
      l.length !== 0 && e.push({ event: t, listeners: l });
    }
    var Ak = /\r\n?/g,
      _k = /\u0000|\uFFFD/g;
    function Iv(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          Ak,
          `
`
        )
        .replace(_k, "");
    }
    function es(e, t, r) {
      if (((t = Iv(t)), Iv(e) !== t && r)) throw Error(k(425));
    }
    function Is() {}
    var qc = null,
      Qc = null;
    function Kc(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Xc = typeof setTimeout == "function" ? setTimeout : void 0,
      zk = typeof clearTimeout == "function" ? clearTimeout : void 0,
      kv = typeof Promise == "function" ? Promise : void 0,
      Nk =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof kv < "u"
          ? function (e) {
              return kv.resolve(null).then(e).catch(Bk);
            }
          : Xc;
    function Bk(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function hc(e, t) {
      var r = t,
        n = 0;
      do {
        var a = r.nextSibling;
        if ((e.removeChild(r), a && a.nodeType === 8))
          if (((r = a.data), r === "/$")) {
            if (n === 0) {
              e.removeChild(a), xl(t);
              return;
            }
            n--;
          } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
        r = a;
      } while (r);
      xl(t);
    }
    function pn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function Pv(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "$" || r === "$!" || r === "$?") {
            if (t === 0) return e;
            t--;
          } else r === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var no = Math.random().toString(36).slice(2),
      yr = "__reactFiber$" + no,
      Il = "__reactProps$" + no,
      Or = "__reactContainer$" + no,
      Zc = "__reactEvents$" + no,
      Ok = "__reactListeners$" + no,
      Uk = "__reactHandles$" + no;
    function Zn(e) {
      var t = e[yr];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[Or] || r[yr])) {
          if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
          )
            for (e = Pv(e); e !== null; ) {
              if ((r = e[yr])) return r;
              e = Pv(e);
            }
          return t;
        }
        (e = r), (r = e.parentNode);
      }
      return null;
    }
    function Al(e) {
      return (
        (e = e[yr] || e[Or]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function Na(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(k(33));
    }
    function $s(e) {
      return e[Il] || null;
    }
    var Yc = [],
      Ba = -1;
    function wn(e) {
      return { current: e };
    }
    function Y(e) {
      0 > Ba || ((e.current = Yc[Ba]), (Yc[Ba] = null), Ba--);
    }
    function $(e, t) {
      Ba++, (Yc[Ba] = e.current), (e.current = t);
    }
    var xn = {},
      Ve = wn(xn),
      ut = wn(!1),
      ta = xn;
    function Za(e, t) {
      var r = e.type.contextTypes;
      if (!r) return xn;
      var n = e.stateNode;
      if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
      var a = {},
        o;
      for (o in r) a[o] = t[o];
      return (
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
      );
    }
    function it(e) {
      return (e = e.childContextTypes), e != null;
    }
    function ks() {
      Y(ut), Y(Ve);
    }
    function Ev(e, t, r) {
      if (Ve.current !== xn) throw Error(k(168));
      $(Ve, t), $(ut, r);
    }
    function Y0(e, t, r) {
      var n = e.stateNode;
      if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
        return r;
      n = n.getChildContext();
      for (var a in n)
        if (!(a in t)) throw Error(k(108, kI(e) || "Unknown", a));
      return ae({}, r, n);
    }
    function Ps(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          xn),
        (ta = Ve.current),
        $(Ve, e),
        $(ut, ut.current),
        !0
      );
    }
    function Tv(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(k(169));
      r
        ? ((e = Y0(e, t, ta)),
          (n.__reactInternalMemoizedMergedChildContext = e),
          Y(ut),
          Y(Ve),
          $(Ve, e))
        : Y(ut),
        $(ut, r);
    }
    var Ar = null,
      Gs = !1,
      gc = !1;
    function J0(e) {
      Ar === null ? (Ar = [e]) : Ar.push(e);
    }
    function Hk(e) {
      (Gs = !0), J0(e);
    }
    function Sn() {
      if (!gc && Ar !== null) {
        gc = !0;
        var e = 0,
          t = V;
        try {
          var r = Ar;
          for (V = 1; e < r.length; e++) {
            var n = r[e];
            do n = n(!0);
            while (n !== null);
          }
          (Ar = null), (Gs = !1);
        } catch (a) {
          throw (Ar !== null && (Ar = Ar.slice(e + 1)), C0(Ip, Sn), a);
        } finally {
          (V = t), (gc = !1);
        }
      }
      return null;
    }
    var Oa = [],
      Ua = 0,
      Es = null,
      Ts = 0,
      _t = [],
      zt = 0,
      ra = null,
      _r = 1,
      zr = "";
    function Kn(e, t) {
      (Oa[Ua++] = Ts), (Oa[Ua++] = Es), (Es = e), (Ts = t);
    }
    function b0(e, t, r) {
      (_t[zt++] = _r), (_t[zt++] = zr), (_t[zt++] = ra), (ra = e);
      var n = _r;
      e = zr;
      var a = 32 - er(n) - 1;
      (n &= ~(1 << a)), (r += 1);
      var o = 32 - er(t) + a;
      if (30 < o) {
        var l = a - (a % 5);
        (o = (n & ((1 << l) - 1)).toString(32)),
          (n >>= l),
          (a -= l),
          (_r = (1 << (32 - er(t) + a)) | (r << a) | n),
          (zr = o + e);
      } else (_r = (1 << o) | (r << a) | n), (zr = e);
    }
    function Ap(e) {
      e.return !== null && (Kn(e, 1), b0(e, 1, 0));
    }
    function _p(e) {
      for (; e === Es; )
        (Es = Oa[--Ua]), (Oa[Ua] = null), (Ts = Oa[--Ua]), (Oa[Ua] = null);
      for (; e === ra; )
        (ra = _t[--zt]),
          (_t[zt] = null),
          (zr = _t[--zt]),
          (_t[zt] = null),
          (_r = _t[--zt]),
          (_t[zt] = null);
    }
    var xt = null,
      vt = null,
      ee = !1,
      bt = null;
    function e1(e, t) {
      var r = Nt(5, null, null, 0);
      (r.elementType = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
    }
    function Mv(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            (t =
              t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (xt = e), (vt = pn(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (xt = e), (vt = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((r = ra !== null ? { id: _r, overflow: zr } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                (r = Nt(18, null, null, 0)),
                (r.stateNode = t),
                (r.return = e),
                (e.child = r),
                (xt = e),
                (vt = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function Jc(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function bc(e) {
      if (ee) {
        var t = vt;
        if (t) {
          var r = t;
          if (!Mv(e, t)) {
            if (Jc(e)) throw Error(k(418));
            t = pn(r.nextSibling);
            var n = xt;
            t && Mv(e, t)
              ? e1(n, r)
              : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (xt = e));
          }
        } else {
          if (Jc(e)) throw Error(k(418));
          (e.flags = (e.flags & -4097) | 2), (ee = !1), (xt = e);
        }
      }
    }
    function Fv(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      )
        e = e.return;
      xt = e;
    }
    function ts(e) {
      if (e !== xt) return !1;
      if (!ee) return Fv(e), (ee = !0), !1;
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !Kc(e.type, e.memoizedProps))),
        t && (t = vt))
      ) {
        if (Jc(e)) throw (t1(), Error(k(418)));
        for (; t; ) e1(e, t), (t = pn(t.nextSibling));
      }
      if ((Fv(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(k(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === "/$") {
                if (t === 0) {
                  vt = pn(e.nextSibling);
                  break e;
                }
                t--;
              } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          vt = null;
        }
      } else vt = xt ? pn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function t1() {
      for (var e = vt; e; ) e = pn(e.nextSibling);
    }
    function Ya() {
      (vt = xt = null), (ee = !1);
    }
    function zp(e) {
      bt === null ? (bt = [e]) : bt.push(e);
    }
    var Vk = Vr.ReactCurrentBatchConfig;
    function Yt(e, t) {
      if (e && e.defaultProps) {
        (t = ae({}, t)), (e = e.defaultProps);
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    var Ms = wn(null),
      Fs = null,
      Ha = null,
      Np = null;
    function Bp() {
      Np = Ha = Fs = null;
    }
    function Op(e) {
      var t = Ms.current;
      Y(Ms), (e._currentValue = t);
    }
    function ep(e, t, r) {
      for (; e !== null; ) {
        var n = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
            : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
          e === r)
        )
          break;
        e = e.return;
      }
    }
    function Qa(e, t) {
      (Fs = e),
        (Np = Ha = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (lt = !0), (e.firstContext = null));
    }
    function Ot(e) {
      var t = e._currentValue;
      if (Np !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Ha === null)) {
          if (Fs === null) throw Error(k(308));
          (Ha = e), (Fs.dependencies = { lanes: 0, firstContext: e });
        } else Ha = Ha.next = e;
      return t;
    }
    var Yn = null;
    function Up(e) {
      Yn === null ? (Yn = [e]) : Yn.push(e);
    }
    function r1(e, t, r, n) {
      var a = t.interleaved;
      return (
        a === null ? ((r.next = r), Up(t)) : ((r.next = a.next), (a.next = r)),
        (t.interleaved = r),
        Ur(e, n)
      );
    }
    function Ur(e, t) {
      e.lanes |= t;
      var r = e.alternate;
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
        (e.childLanes |= t),
          (r = e.alternate),
          r !== null && (r.childLanes |= t),
          (r = e),
          (e = e.return);
      return r.tag === 3 ? r.stateNode : null;
    }
    var an = !1;
    function Hp(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function n1(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function Nr(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function mn(e, t, r) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), B & 2)) {
        var a = n.pending;
        return (
          a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (n.pending = t),
          Ur(e, r)
        );
      }
      return (
        (a = n.interleaved),
        a === null ? ((t.next = t), Up(n)) : ((t.next = a.next), (a.next = t)),
        (n.interleaved = t),
        Ur(e, r)
      );
    }
    function ss(e, t, r) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
      ) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), kp(e, r);
      }
    }
    function Dv(e, t) {
      var r = e.updateQueue,
        n = e.alternate;
      if (n !== null && ((n = n.updateQueue), r === n)) {
        var a = null,
          o = null;
        if (((r = r.firstBaseUpdate), r !== null)) {
          do {
            var l = {
              eventTime: r.eventTime,
              lane: r.lane,
              tag: r.tag,
              payload: r.payload,
              callback: r.callback,
              next: null,
            };
            o === null ? (a = o = l) : (o = o.next = l), (r = r.next);
          } while (r !== null);
          o === null ? (a = o = t) : (o = o.next = t);
        } else a = o = t;
        (r = {
          baseState: n.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: o,
          shared: n.shared,
          effects: n.effects,
        }),
          (e.updateQueue = r);
        return;
      }
      (e = r.lastBaseUpdate),
        e === null ? (r.firstBaseUpdate = t) : (e.next = t),
        (r.lastBaseUpdate = t);
    }
    function Ds(e, t, r, n) {
      var a = e.updateQueue;
      an = !1;
      var o = a.firstBaseUpdate,
        l = a.lastBaseUpdate,
        u = a.shared.pending;
      if (u !== null) {
        a.shared.pending = null;
        var i = u,
          f = i.next;
        (i.next = null), l === null ? (o = f) : (l.next = f), (l = i);
        var p = e.alternate;
        p !== null &&
          ((p = p.updateQueue),
          (u = p.lastBaseUpdate),
          u !== l &&
            (u === null ? (p.firstBaseUpdate = f) : (u.next = f),
            (p.lastBaseUpdate = i)));
      }
      if (o !== null) {
        var h = a.baseState;
        (l = 0), (p = f = i = null), (u = o);
        do {
          var m = u.lane,
            y = u.eventTime;
          if ((n & m) === m) {
            p !== null &&
              (p = p.next =
                {
                  eventTime: y,
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                });
            e: {
              var x = e,
                v = u;
              switch (((m = t), (y = r), v.tag)) {
                case 1:
                  if (((x = v.payload), typeof x == "function")) {
                    h = x.call(y, h, m);
                    break e;
                  }
                  h = x;
                  break e;
                case 3:
                  x.flags = (x.flags & -65537) | 128;
                case 0:
                  if (
                    ((x = v.payload),
                    (m = typeof x == "function" ? x.call(y, h, m) : x),
                    m == null)
                  )
                    break e;
                  h = ae({}, h, m);
                  break e;
                case 2:
                  an = !0;
              }
            }
            u.callback !== null &&
              u.lane !== 0 &&
              ((e.flags |= 64),
              (m = a.effects),
              m === null ? (a.effects = [u]) : m.push(u));
          } else
            (y = {
              eventTime: y,
              lane: m,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            }),
              p === null ? ((f = p = y), (i = h)) : (p = p.next = y),
              (l |= m);
          if (((u = u.next), u === null)) {
            if (((u = a.shared.pending), u === null)) break;
            (m = u),
              (u = m.next),
              (m.next = null),
              (a.lastBaseUpdate = m),
              (a.shared.pending = null);
          }
        } while (!0);
        if (
          (p === null && (i = h),
          (a.baseState = i),
          (a.firstBaseUpdate = f),
          (a.lastBaseUpdate = p),
          (t = a.shared.interleaved),
          t !== null)
        ) {
          a = t;
          do (l |= a.lane), (a = a.next);
          while (a !== t);
        } else o === null && (a.shared.lanes = 0);
        (aa |= l), (e.lanes = l), (e.memoizedState = h);
      }
    }
    function Rv(e, t, r) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var n = e[t],
            a = n.callback;
          if (a !== null) {
            if (((n.callback = null), (n = r), typeof a != "function"))
              throw Error(k(191, a));
            a.call(n);
          }
        }
    }
    var a1 = new r0.Component().refs;
    function tp(e, t, r, n) {
      (t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : ae({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var qs = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? ua(e) === e : !1;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = be(),
          a = gn(e),
          o = Nr(n, a);
        (o.payload = t),
          r != null && (o.callback = r),
          (t = mn(e, o, a)),
          t !== null && (tr(t, e, a, n), ss(t, e, a));
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = be(),
          a = gn(e),
          o = Nr(n, a);
        (o.tag = 1),
          (o.payload = t),
          r != null && (o.callback = r),
          (t = mn(e, o, a)),
          t !== null && (tr(t, e, a, n), ss(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = be(),
          n = gn(e),
          a = Nr(r, n);
        (a.tag = 2),
          t != null && (a.callback = t),
          (t = mn(e, a, n)),
          t !== null && (tr(t, e, n, r), ss(t, e, n));
      },
    };
    function Av(e, t, r, n, a, o, l) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(n, o, l)
          : t.prototype && t.prototype.isPureReactComponent
          ? !wl(r, n) || !wl(a, o)
          : !0
      );
    }
    function o1(e, t, r) {
      var n = !1,
        a = xn,
        o = t.contextType;
      return (
        typeof o == "object" && o !== null
          ? (o = Ot(o))
          : ((a = it(t) ? ta : Ve.current),
            (n = t.contextTypes),
            (o = (n = n != null) ? Za(e, a) : xn)),
        (t = new t(r, o)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = qs),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function _v(e, t, r, n) {
      (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && qs.enqueueReplaceState(t, t.state, null);
    }
    function rp(e, t, r, n) {
      var a = e.stateNode;
      (a.props = r), (a.state = e.memoizedState), (a.refs = a1), Hp(e);
      var o = t.contextType;
      typeof o == "object" && o !== null
        ? (a.context = Ot(o))
        : ((o = it(t) ? ta : Ve.current), (a.context = Za(e, o))),
        (a.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (tp(e, t, o, r), (a.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function" ||
          (typeof a.UNSAFE_componentWillMount != "function" &&
            typeof a.componentWillMount != "function") ||
          ((t = a.state),
          typeof a.componentWillMount == "function" && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == "function" &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && qs.enqueueReplaceState(a, a.state, null),
          Ds(e, r, a, n),
          (a.state = e.memoizedState)),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function Yo(e, t, r) {
      if (
        ((e = r.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (r._owner) {
          if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(k(309));
            var n = r.stateNode;
          }
          if (!n) throw Error(k(147, e));
          var a = n,
            o = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (l) {
                var u = a.refs;
                u === a1 && (u = a.refs = {}),
                  l === null ? delete u[o] : (u[o] = l);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != "string") throw Error(k(284));
        if (!r._owner) throw Error(k(290, e));
      }
      return e;
    }
    function rs(e, t) {
      throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
          k(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ))
      );
    }
    function zv(e) {
      var t = e._init;
      return t(e._payload);
    }
    function l1(e) {
      function t(d, s) {
        if (e) {
          var c = d.deletions;
          c === null ? ((d.deletions = [s]), (d.flags |= 16)) : c.push(s);
        }
      }
      function r(d, s) {
        if (!e) return null;
        for (; s !== null; ) t(d, s), (s = s.sibling);
        return null;
      }
      function n(d, s) {
        for (d = new Map(); s !== null; )
          s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling);
        return d;
      }
      function a(d, s) {
        return (d = yn(d, s)), (d.index = 0), (d.sibling = null), d;
      }
      function o(d, s, c) {
        return (
          (d.index = c),
          e
            ? ((c = d.alternate),
              c !== null
                ? ((c = c.index), c < s ? ((d.flags |= 2), s) : c)
                : ((d.flags |= 2), s))
            : ((d.flags |= 1048576), s)
        );
      }
      function l(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
      }
      function u(d, s, c, g) {
        return s === null || s.tag !== 6
          ? ((s = Cc(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function i(d, s, c, g) {
        var L = c.type;
        return L === Ra
          ? p(d, s, c.props.children, g, c.key)
          : s !== null &&
            (s.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === nn &&
                zv(L) === s.type))
          ? ((g = a(s, c.props)), (g.ref = Yo(d, s, c)), (g.return = d), g)
          : ((g = hs(c.type, c.key, c.props, null, d.mode, g)),
            (g.ref = Yo(d, s, c)),
            (g.return = d),
            g);
      }
      function f(d, s, c, g) {
        return s === null ||
          s.tag !== 4 ||
          s.stateNode.containerInfo !== c.containerInfo ||
          s.stateNode.implementation !== c.implementation
          ? ((s = Ic(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c.children || [])), (s.return = d), s);
      }
      function p(d, s, c, g, L) {
        return s === null || s.tag !== 7
          ? ((s = ea(c, d.mode, g, L)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function h(d, s, c) {
        if ((typeof s == "string" && s !== "") || typeof s == "number")
          return (s = Cc("" + s, d.mode, c)), (s.return = d), s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case Vi:
              return (
                (c = hs(s.type, s.key, s.props, null, d.mode, c)),
                (c.ref = Yo(d, null, s)),
                (c.return = d),
                c
              );
            case Da:
              return (s = Ic(s, d.mode, c)), (s.return = d), s;
            case nn:
              var g = s._init;
              return h(d, g(s._payload), c);
          }
          if (rl(s) || Qo(s))
            return (s = ea(s, d.mode, c, null)), (s.return = d), s;
          rs(d, s);
        }
        return null;
      }
      function m(d, s, c, g) {
        var L = s !== null ? s.key : null;
        if ((typeof c == "string" && c !== "") || typeof c == "number")
          return L !== null ? null : u(d, s, "" + c, g);
        if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
            case Vi:
              return c.key === L ? i(d, s, c, g) : null;
            case Da:
              return c.key === L ? f(d, s, c, g) : null;
            case nn:
              return (L = c._init), m(d, s, L(c._payload), g);
          }
          if (rl(c) || Qo(c)) return L !== null ? null : p(d, s, c, g, null);
          rs(d, c);
        }
        return null;
      }
      function y(d, s, c, g, L) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
          return (d = d.get(c) || null), u(s, d, "" + g, L);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case Vi:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), i(s, d, g, L)
              );
            case Da:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), f(s, d, g, L)
              );
            case nn:
              var C = g._init;
              return y(d, s, c, C(g._payload), L);
          }
          if (rl(g) || Qo(g))
            return (d = d.get(c) || null), p(s, d, g, L, null);
          rs(s, g);
        }
        return null;
      }
      function x(d, s, c, g) {
        for (
          var L = null, C = null, S = s, w = (s = 0), M = null;
          S !== null && w < c.length;
          w++
        ) {
          S.index > w ? ((M = S), (S = null)) : (M = S.sibling);
          var I = m(d, S, c[w], g);
          if (I === null) {
            S === null && (S = M);
            break;
          }
          e && S && I.alternate === null && t(d, S),
            (s = o(I, s, w)),
            C === null ? (L = I) : (C.sibling = I),
            (C = I),
            (S = M);
        }
        if (w === c.length) return r(d, S), ee && Kn(d, w), L;
        if (S === null) {
          for (; w < c.length; w++)
            (S = h(d, c[w], g)),
              S !== null &&
                ((s = o(S, s, w)),
                C === null ? (L = S) : (C.sibling = S),
                (C = S));
          return ee && Kn(d, w), L;
        }
        for (S = n(d, S); w < c.length; w++)
          (M = y(S, d, w, c[w], g)),
            M !== null &&
              (e &&
                M.alternate !== null &&
                S.delete(M.key === null ? w : M.key),
              (s = o(M, s, w)),
              C === null ? (L = M) : (C.sibling = M),
              (C = M));
        return (
          e &&
            S.forEach(function (H) {
              return t(d, H);
            }),
          ee && Kn(d, w),
          L
        );
      }
      function v(d, s, c, g) {
        var L = Qo(c);
        if (typeof L != "function") throw Error(k(150));
        if (((c = L.call(c)), c == null)) throw Error(k(151));
        for (
          var C = (L = null), S = s, w = (s = 0), M = null, I = c.next();
          S !== null && !I.done;
          w++, I = c.next()
        ) {
          S.index > w ? ((M = S), (S = null)) : (M = S.sibling);
          var H = m(d, S, I.value, g);
          if (H === null) {
            S === null && (S = M);
            break;
          }
          e && S && H.alternate === null && t(d, S),
            (s = o(H, s, w)),
            C === null ? (L = H) : (C.sibling = H),
            (C = H),
            (S = M);
        }
        if (I.done) return r(d, S), ee && Kn(d, w), L;
        if (S === null) {
          for (; !I.done; w++, I = c.next())
            (I = h(d, I.value, g)),
              I !== null &&
                ((s = o(I, s, w)),
                C === null ? (L = I) : (C.sibling = I),
                (C = I));
          return ee && Kn(d, w), L;
        }
        for (S = n(d, S); !I.done; w++, I = c.next())
          (I = y(S, d, w, I.value, g)),
            I !== null &&
              (e &&
                I.alternate !== null &&
                S.delete(I.key === null ? w : I.key),
              (s = o(I, s, w)),
              C === null ? (L = I) : (C.sibling = I),
              (C = I));
        return (
          e &&
            S.forEach(function (N) {
              return t(d, N);
            }),
          ee && Kn(d, w),
          L
        );
      }
      function E(d, s, c, g) {
        if (
          (typeof c == "object" &&
            c !== null &&
            c.type === Ra &&
            c.key === null &&
            (c = c.props.children),
          typeof c == "object" && c !== null)
        ) {
          switch (c.$$typeof) {
            case Vi:
              e: {
                for (var L = c.key, C = s; C !== null; ) {
                  if (C.key === L) {
                    if (((L = c.type), L === Ra)) {
                      if (C.tag === 7) {
                        r(d, C.sibling),
                          (s = a(C, c.props.children)),
                          (s.return = d),
                          (d = s);
                        break e;
                      }
                    } else if (
                      C.elementType === L ||
                      (typeof L == "object" &&
                        L !== null &&
                        L.$$typeof === nn &&
                        zv(L) === C.type)
                    ) {
                      r(d, C.sibling),
                        (s = a(C, c.props)),
                        (s.ref = Yo(d, C, c)),
                        (s.return = d),
                        (d = s);
                      break e;
                    }
                    r(d, C);
                    break;
                  } else t(d, C);
                  C = C.sibling;
                }
                c.type === Ra
                  ? ((s = ea(c.props.children, d.mode, g, c.key)),
                    (s.return = d),
                    (d = s))
                  : ((g = hs(c.type, c.key, c.props, null, d.mode, g)),
                    (g.ref = Yo(d, s, c)),
                    (g.return = d),
                    (d = g));
              }
              return l(d);
            case Da:
              e: {
                for (C = c.key; s !== null; ) {
                  if (s.key === C)
                    if (
                      s.tag === 4 &&
                      s.stateNode.containerInfo === c.containerInfo &&
                      s.stateNode.implementation === c.implementation
                    ) {
                      r(d, s.sibling),
                        (s = a(s, c.children || [])),
                        (s.return = d),
                        (d = s);
                      break e;
                    } else {
                      r(d, s);
                      break;
                    }
                  else t(d, s);
                  s = s.sibling;
                }
                (s = Ic(c, d.mode, g)), (s.return = d), (d = s);
              }
              return l(d);
            case nn:
              return (C = c._init), E(d, s, C(c._payload), g);
          }
          if (rl(c)) return x(d, s, c, g);
          if (Qo(c)) return v(d, s, c, g);
          rs(d, c);
        }
        return (typeof c == "string" && c !== "") || typeof c == "number"
          ? ((c = "" + c),
            s !== null && s.tag === 6
              ? (r(d, s.sibling), (s = a(s, c)), (s.return = d), (d = s))
              : (r(d, s), (s = Cc(c, d.mode, g)), (s.return = d), (d = s)),
            l(d))
          : r(d, s);
      }
      return E;
    }
    var Ja = l1(!0),
      u1 = l1(!1),
      _l = {},
      xr = wn(_l),
      kl = wn(_l),
      Pl = wn(_l);
    function Jn(e) {
      if (e === _l) throw Error(k(174));
      return e;
    }
    function Vp(e, t) {
      switch (($(Pl, t), $(kl, e), $(xr, _l), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : _c(null, "");
          break;
        default:
          (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = _c(t, e));
      }
      Y(xr), $(xr, t);
    }
    function ba() {
      Y(xr), Y(kl), Y(Pl);
    }
    function i1(e) {
      Jn(Pl.current);
      var t = Jn(xr.current),
        r = _c(t, e.type);
      t !== r && ($(kl, e), $(xr, r));
    }
    function jp(e) {
      kl.current === e && (Y(xr), Y(kl));
    }
    var re = wn(0);
    function Rs(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var r = t.memoizedState;
          if (
            r !== null &&
            ((r = r.dehydrated),
            r === null || r.data === "$?" || r.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var yc = [];
    function Wp() {
      for (var e = 0; e < yc.length; e++)
        yc[e]._workInProgressVersionPrimary = null;
      yc.length = 0;
    }
    var ds = Vr.ReactCurrentDispatcher,
      vc = Vr.ReactCurrentBatchConfig,
      na = 0,
      ne = null,
      Le = null,
      Ie = null,
      As = !1,
      dl = !1,
      El = 0,
      jk = 0;
    function Oe() {
      throw Error(k(321));
    }
    function $p(e, t) {
      if (t === null) return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!rr(e[r], t[r])) return !1;
      return !0;
    }
    function Gp(e, t, r, n, a, o) {
      if (
        ((na = o),
        (ne = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ds.current = e === null || e.memoizedState === null ? qk : Qk),
        (e = r(n, a)),
        dl)
      ) {
        o = 0;
        do {
          if (((dl = !1), (El = 0), 25 <= o)) throw Error(k(301));
          (o += 1),
            (Ie = Le = null),
            (t.updateQueue = null),
            (ds.current = Kk),
            (e = r(n, a));
        } while (dl);
      }
      if (
        ((ds.current = _s),
        (t = Le !== null && Le.next !== null),
        (na = 0),
        (Ie = Le = ne = null),
        (As = !1),
        t)
      )
        throw Error(k(300));
      return e;
    }
    function qp() {
      var e = El !== 0;
      return (El = 0), e;
    }
    function gr() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Ie === null ? (ne.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
    }
    function Ut() {
      if (Le === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Le.next;
      var t = Ie === null ? ne.memoizedState : Ie.next;
      if (t !== null) (Ie = t), (Le = e);
      else {
        if (e === null) throw Error(k(310));
        (Le = e),
          (e = {
            memoizedState: Le.memoizedState,
            baseState: Le.baseState,
            baseQueue: Le.baseQueue,
            queue: Le.queue,
            next: null,
          }),
          Ie === null ? (ne.memoizedState = Ie = e) : (Ie = Ie.next = e);
      }
      return Ie;
    }
    function Tl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function xc(e) {
      var t = Ut(),
        r = t.queue;
      if (r === null) throw Error(k(311));
      r.lastRenderedReducer = e;
      var n = Le,
        a = n.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var l = a.next;
          (a.next = o.next), (o.next = l);
        }
        (n.baseQueue = a = o), (r.pending = null);
      }
      if (a !== null) {
        (o = a.next), (n = n.baseState);
        var u = (l = null),
          i = null,
          f = o;
        do {
          var p = f.lane;
          if ((na & p) === p)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  action: f.action,
                  hasEagerState: f.hasEagerState,
                  eagerState: f.eagerState,
                  next: null,
                }),
              (n = f.hasEagerState ? f.eagerState : e(n, f.action));
          else {
            var h = {
              lane: p,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            };
            i === null ? ((u = i = h), (l = n)) : (i = i.next = h),
              (ne.lanes |= p),
              (aa |= p);
          }
          f = f.next;
        } while (f !== null && f !== o);
        i === null ? (l = n) : (i.next = u),
          rr(n, t.memoizedState) || (lt = !0),
          (t.memoizedState = n),
          (t.baseState = l),
          (t.baseQueue = i),
          (r.lastRenderedState = n);
      }
      if (((e = r.interleaved), e !== null)) {
        a = e;
        do (o = a.lane), (ne.lanes |= o), (aa |= o), (a = a.next);
        while (a !== e);
      } else a === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch];
    }
    function Lc(e) {
      var t = Ut(),
        r = t.queue;
      if (r === null) throw Error(k(311));
      r.lastRenderedReducer = e;
      var n = r.dispatch,
        a = r.pending,
        o = t.memoizedState;
      if (a !== null) {
        r.pending = null;
        var l = (a = a.next);
        do (o = e(o, l.action)), (l = l.next);
        while (l !== a);
        rr(o, t.memoizedState) || (lt = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (r.lastRenderedState = o);
      }
      return [o, n];
    }
    function s1() {}
    function d1(e, t) {
      var r = ne,
        n = Ut(),
        a = t(),
        o = !rr(n.memoizedState, a);
      if (
        (o && ((n.memoizedState = a), (lt = !0)),
        (n = n.queue),
        Qp(p1.bind(null, r, n, e), [e]),
        n.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Ml(9, c1.bind(null, r, n, a, t), void 0, null),
          ke === null)
        )
          throw Error(k(349));
        na & 30 || f1(r, t, a);
      }
      return a;
    }
    function f1(e, t, r) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: r }),
        (t = ne.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ne.updateQueue = t),
            (t.stores = [e]))
          : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
    }
    function c1(e, t, r, n) {
      (t.value = r), (t.getSnapshot = n), m1(t) && h1(e);
    }
    function p1(e, t, r) {
      return r(function () {
        m1(t) && h1(e);
      });
    }
    function m1(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !rr(e, r);
      } catch {
        return !0;
      }
    }
    function h1(e) {
      var t = Ur(e, 1);
      t !== null && tr(t, e, 1, -1);
    }
    function Nv(e) {
      var t = gr();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Tl,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Gk.bind(null, ne, e)),
        [t.memoizedState, e]
      );
    }
    function Ml(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = ne.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ne.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      );
    }
    function g1() {
      return Ut().memoizedState;
    }
    function fs(e, t, r, n) {
      var a = gr();
      (ne.flags |= e),
        (a.memoizedState = Ml(1 | t, r, void 0, n === void 0 ? null : n));
    }
    function Qs(e, t, r, n) {
      var a = Ut();
      n = n === void 0 ? null : n;
      var o = void 0;
      if (Le !== null) {
        var l = Le.memoizedState;
        if (((o = l.destroy), n !== null && $p(n, l.deps))) {
          a.memoizedState = Ml(t, r, o, n);
          return;
        }
      }
      (ne.flags |= e), (a.memoizedState = Ml(1 | t, r, o, n));
    }
    function Bv(e, t) {
      return fs(8390656, 8, e, t);
    }
    function Qp(e, t) {
      return Qs(2048, 8, e, t);
    }
    function y1(e, t) {
      return Qs(4, 2, e, t);
    }
    function v1(e, t) {
      return Qs(4, 4, e, t);
    }
    function x1(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function L1(e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), Qs(4, 4, x1.bind(null, t, e), r)
      );
    }
    function Kp() {}
    function w1(e, t) {
      var r = Ut();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && $p(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function S1(e, t) {
      var r = Ut();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && $p(t, n[1])
        ? n[0]
        : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function C1(e, t, r) {
      return na & 21
        ? (rr(r, t) ||
            ((r = P0()), (ne.lanes |= r), (aa |= r), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (lt = !0)),
          (e.memoizedState = r));
    }
    function Wk(e, t) {
      var r = V;
      (V = r !== 0 && 4 > r ? r : 4), e(!0);
      var n = vc.transition;
      vc.transition = {};
      try {
        e(!1), t();
      } finally {
        (V = r), (vc.transition = n);
      }
    }
    function I1() {
      return Ut().memoizedState;
    }
    function $k(e, t, r) {
      var n = gn(e);
      if (
        ((r = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        k1(e))
      )
        P1(t, r);
      else if (((r = r1(e, t, r, n)), r !== null)) {
        var a = be();
        tr(r, e, n, a), E1(r, t, n);
      }
    }
    function Gk(e, t, r) {
      var n = gn(e),
        a = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (k1(e)) P1(t, a);
      else {
        var o = e.alternate;
        if (
          e.lanes === 0 &&
          (o === null || o.lanes === 0) &&
          ((o = t.lastRenderedReducer), o !== null)
        )
          try {
            var l = t.lastRenderedState,
              u = o(l, r);
            if (((a.hasEagerState = !0), (a.eagerState = u), rr(u, l))) {
              var i = t.interleaved;
              i === null
                ? ((a.next = a), Up(t))
                : ((a.next = i.next), (i.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch {
          } finally {
          }
        (r = r1(e, t, a, n)),
          r !== null && ((a = be()), tr(r, e, n, a), E1(r, t, n));
      }
    }
    function k1(e) {
      var t = e.alternate;
      return e === ne || (t !== null && t === ne);
    }
    function P1(e, t) {
      dl = As = !0;
      var r = e.pending;
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (e.pending = t);
    }
    function E1(e, t, r) {
      if (r & 4194240) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), kp(e, r);
      }
    }
    var _s = {
        readContext: Ot,
        useCallback: Oe,
        useContext: Oe,
        useEffect: Oe,
        useImperativeHandle: Oe,
        useInsertionEffect: Oe,
        useLayoutEffect: Oe,
        useMemo: Oe,
        useReducer: Oe,
        useRef: Oe,
        useState: Oe,
        useDebugValue: Oe,
        useDeferredValue: Oe,
        useTransition: Oe,
        useMutableSource: Oe,
        useSyncExternalStore: Oe,
        useId: Oe,
        unstable_isNewReconciler: !1,
      },
      qk = {
        readContext: Ot,
        useCallback: function (e, t) {
          return (gr().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ot,
        useEffect: Bv,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = r != null ? r.concat([e]) : null),
            fs(4194308, 4, x1.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return fs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return fs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var r = gr();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = gr();
          return (
            (t = r !== void 0 ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (n.queue = e),
            (e = e.dispatch = $k.bind(null, ne, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = gr();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Nv,
        useDebugValue: Kp,
        useDeferredValue: function (e) {
          return (gr().memoizedState = e);
        },
        useTransition: function () {
          var e = Nv(!1),
            t = e[0];
          return (e = Wk.bind(null, e[1])), (gr().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var n = ne,
            a = gr();
          if (ee) {
            if (r === void 0) throw Error(k(407));
            r = r();
          } else {
            if (((r = t()), ke === null)) throw Error(k(349));
            na & 30 || f1(n, t, r);
          }
          a.memoizedState = r;
          var o = { value: r, getSnapshot: t };
          return (
            (a.queue = o),
            Bv(p1.bind(null, n, o, e), [e]),
            (n.flags |= 2048),
            Ml(9, c1.bind(null, n, o, r, t), void 0, null),
            r
          );
        },
        useId: function () {
          var e = gr(),
            t = ke.identifierPrefix;
          if (ee) {
            var r = zr,
              n = _r;
            (r = (n & ~(1 << (32 - er(n) - 1))).toString(32) + r),
              (t = ":" + t + "R" + r),
              (r = El++),
              0 < r && (t += "H" + r.toString(32)),
              (t += ":");
          } else (r = jk++), (t = ":" + t + "r" + r.toString(32) + ":");
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      Qk = {
        readContext: Ot,
        useCallback: w1,
        useContext: Ot,
        useEffect: Qp,
        useImperativeHandle: L1,
        useInsertionEffect: y1,
        useLayoutEffect: v1,
        useMemo: S1,
        useReducer: xc,
        useRef: g1,
        useState: function () {
          return xc(Tl);
        },
        useDebugValue: Kp,
        useDeferredValue: function (e) {
          var t = Ut();
          return C1(t, Le.memoizedState, e);
        },
        useTransition: function () {
          var e = xc(Tl)[0],
            t = Ut().memoizedState;
          return [e, t];
        },
        useMutableSource: s1,
        useSyncExternalStore: d1,
        useId: I1,
        unstable_isNewReconciler: !1,
      },
      Kk = {
        readContext: Ot,
        useCallback: w1,
        useContext: Ot,
        useEffect: Qp,
        useImperativeHandle: L1,
        useInsertionEffect: y1,
        useLayoutEffect: v1,
        useMemo: S1,
        useReducer: Lc,
        useRef: g1,
        useState: function () {
          return Lc(Tl);
        },
        useDebugValue: Kp,
        useDeferredValue: function (e) {
          var t = Ut();
          return Le === null
            ? (t.memoizedState = e)
            : C1(t, Le.memoizedState, e);
        },
        useTransition: function () {
          var e = Lc(Tl)[0],
            t = Ut().memoizedState;
          return [e, t];
        },
        useMutableSource: s1,
        useSyncExternalStore: d1,
        useId: I1,
        unstable_isNewReconciler: !1,
      };
    function eo(e, t) {
      try {
        var r = "",
          n = t;
        do (r += II(n)), (n = n.return);
        while (n);
        var a = r;
      } catch (o) {
        a =
          `
Error generating stack: ` +
          o.message +
          `
` +
          o.stack;
      }
      return { value: e, source: t, stack: a, digest: null };
    }
    function wc(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function np(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    var Xk = typeof WeakMap == "function" ? WeakMap : Map;
    function T1(e, t, r) {
      (r = Nr(-1, r)), (r.tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          Ns || ((Ns = !0), (pp = n)), np(e, t);
        }),
        r
      );
    }
    function M1(e, t, r) {
      (r = Nr(-1, r)), (r.tag = 3);
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var a = t.value;
        (r.payload = function () {
          return n(a);
        }),
          (r.callback = function () {
            np(e, t);
          });
      }
      var o = e.stateNode;
      return (
        o !== null &&
          typeof o.componentDidCatch == "function" &&
          (r.callback = function () {
            np(e, t),
              typeof n != "function" &&
                (hn === null ? (hn = new Set([this])) : hn.add(this));
            var l = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: l !== null ? l : "",
            });
          }),
        r
      );
    }
    function Ov(e, t, r) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new Xk();
        var a = new Set();
        n.set(t, a);
      } else (a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a));
      a.has(r) || (a.add(r), (e = s2.bind(null, e, t, r)), t.then(e, e));
    }
    function Uv(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Hv(e, t, r, n, a) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = a), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (r.flags |= 131072),
              (r.flags &= -52805),
              r.tag === 1 &&
                (r.alternate === null
                  ? (r.tag = 17)
                  : ((t = Nr(-1, 1)), (t.tag = 2), mn(r, t, 1))),
              (r.lanes |= 1)),
          e);
    }
    var Zk = Vr.ReactCurrentOwner,
      lt = !1;
    function Je(e, t, r, n) {
      t.child = e === null ? u1(t, null, r, n) : Ja(t, e.child, r, n);
    }
    function Vv(e, t, r, n, a) {
      r = r.render;
      var o = t.ref;
      return (
        Qa(t, a),
        (n = Gp(e, t, r, n, o, a)),
        (r = qp()),
        e !== null && !lt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            Hr(e, t, a))
          : (ee && r && Ap(t), (t.flags |= 1), Je(e, t, n, a), t.child)
      );
    }
    function jv(e, t, r, n, a) {
      if (e === null) {
        var o = r.type;
        return typeof o == "function" &&
          !rm(o) &&
          o.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = o), F1(e, t, o, n, a))
          : ((e = hs(r.type, null, n, t, t.mode, a)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((o = e.child), !(e.lanes & a))) {
        var l = o.memoizedProps;
        if (
          ((r = r.compare),
          (r = r !== null ? r : wl),
          r(l, n) && e.ref === t.ref)
        )
          return Hr(e, t, a);
      }
      return (
        (t.flags |= 1),
        (e = yn(o, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function F1(e, t, r, n, a) {
      if (e !== null) {
        var o = e.memoizedProps;
        if (wl(o, n) && e.ref === t.ref)
          if (((lt = !1), (t.pendingProps = n = o), (e.lanes & a) !== 0))
            e.flags & 131072 && (lt = !0);
          else return (t.lanes = e.lanes), Hr(e, t, a);
      }
      return ap(e, t, r, n, a);
    }
    function D1(e, t, r) {
      var n = t.pendingProps,
        a = n.children,
        o = e !== null ? e.memoizedState : null;
      if (n.mode === "hidden")
        if (!(t.mode & 1))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            $(ja, yt),
            (yt |= r);
        else {
          if (!(r & 1073741824))
            return (
              (e = o !== null ? o.baseLanes | r : r),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              $(ja, yt),
              (yt |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (n = o !== null ? o.baseLanes : r),
            $(ja, yt),
            (yt |= n);
        }
      else
        o !== null
          ? ((n = o.baseLanes | r), (t.memoizedState = null))
          : (n = r),
          $(ja, yt),
          (yt |= n);
      return Je(e, t, a, r), t.child;
    }
    function R1(e, t) {
      var r = t.ref;
      ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function ap(e, t, r, n, a) {
      var o = it(r) ? ta : Ve.current;
      return (
        (o = Za(t, o)),
        Qa(t, a),
        (r = Gp(e, t, r, n, o, a)),
        (n = qp()),
        e !== null && !lt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            Hr(e, t, a))
          : (ee && n && Ap(t), (t.flags |= 1), Je(e, t, r, a), t.child)
      );
    }
    function Wv(e, t, r, n, a) {
      if (it(r)) {
        var o = !0;
        Ps(t);
      } else o = !1;
      if ((Qa(t, a), t.stateNode === null))
        cs(e, t), o1(t, r, n), rp(t, r, n, a), (n = !0);
      else if (e === null) {
        var l = t.stateNode,
          u = t.memoizedProps;
        l.props = u;
        var i = l.context,
          f = r.contextType;
        typeof f == "object" && f !== null
          ? (f = Ot(f))
          : ((f = it(r) ? ta : Ve.current), (f = Za(t, f)));
        var p = r.getDerivedStateFromProps,
          h =
            typeof p == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function";
        h ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== n || i !== f) && _v(t, l, n, f)),
          (an = !1);
        var m = t.memoizedState;
        (l.state = m),
          Ds(t, n, l, a),
          (i = t.memoizedState),
          u !== n || m !== i || ut.current || an
            ? (typeof p == "function" &&
                (tp(t, r, p, n), (i = t.memoizedState)),
              (u = an || Av(t, r, u, n, m, i, f))
                ? (h ||
                    (typeof l.UNSAFE_componentWillMount != "function" &&
                      typeof l.componentWillMount != "function") ||
                    (typeof l.componentWillMount == "function" &&
                      l.componentWillMount(),
                    typeof l.UNSAFE_componentWillMount == "function" &&
                      l.UNSAFE_componentWillMount()),
                  typeof l.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof l.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = n),
                  (t.memoizedState = i)),
              (l.props = n),
              (l.state = i),
              (l.context = f),
              (n = u))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (n = !1));
      } else {
        (l = t.stateNode),
          n1(e, t),
          (u = t.memoizedProps),
          (f = t.type === t.elementType ? u : Yt(t.type, u)),
          (l.props = f),
          (h = t.pendingProps),
          (m = l.context),
          (i = r.contextType),
          typeof i == "object" && i !== null
            ? (i = Ot(i))
            : ((i = it(r) ? ta : Ve.current), (i = Za(t, i)));
        var y = r.getDerivedStateFromProps;
        (p =
          typeof y == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function") ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== h || m !== i) && _v(t, l, n, i)),
          (an = !1),
          (m = t.memoizedState),
          (l.state = m),
          Ds(t, n, l, a);
        var x = t.memoizedState;
        u !== h || m !== x || ut.current || an
          ? (typeof y == "function" && (tp(t, r, y, n), (x = t.memoizedState)),
            (f = an || Av(t, r, f, n, m, x, i) || !1)
              ? (p ||
                  (typeof l.UNSAFE_componentWillUpdate != "function" &&
                    typeof l.componentWillUpdate != "function") ||
                  (typeof l.componentWillUpdate == "function" &&
                    l.componentWillUpdate(n, x, i),
                  typeof l.UNSAFE_componentWillUpdate == "function" &&
                    l.UNSAFE_componentWillUpdate(n, x, i)),
                typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                typeof l.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof l.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
                typeof l.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = n),
                (t.memoizedState = x)),
            (l.props = n),
            (l.state = x),
            (l.context = i),
            (n = f))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (n = !1));
      }
      return op(e, t, r, n, o, a);
    }
    function op(e, t, r, n, a, o) {
      R1(e, t);
      var l = (t.flags & 128) !== 0;
      if (!n && !l) return a && Tv(t, r, !1), Hr(e, t, o);
      (n = t.stateNode), (Zk.current = t);
      var u =
        l && typeof r.getDerivedStateFromError != "function"
          ? null
          : n.render();
      return (
        (t.flags |= 1),
        e !== null && l
          ? ((t.child = Ja(t, e.child, null, o)), (t.child = Ja(t, null, u, o)))
          : Je(e, t, u, o),
        (t.memoizedState = n.state),
        a && Tv(t, r, !0),
        t.child
      );
    }
    function A1(e) {
      var t = e.stateNode;
      t.pendingContext
        ? Ev(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Ev(e, t.context, !1),
        Vp(e, t.containerInfo);
    }
    function $v(e, t, r, n, a) {
      return Ya(), zp(a), (t.flags |= 256), Je(e, t, r, n), t.child;
    }
    var lp = { dehydrated: null, treeContext: null, retryLane: 0 };
    function up(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function _1(e, t, r) {
      var n = t.pendingProps,
        a = re.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        u;
      if (
        ((u = l) ||
          (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        u
          ? ((o = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (a |= 1),
        $(re, a & 1),
        e === null)
      )
        return (
          bc(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                ? e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((l = n.children),
              (e = n.fallback),
              o
                ? ((n = t.mode),
                  (o = t.child),
                  (l = { mode: "hidden", children: l }),
                  !(n & 1) && o !== null
                    ? ((o.childLanes = 0), (o.pendingProps = l))
                    : (o = Zs(l, n, 0, null)),
                  (e = ea(e, n, r, null)),
                  (o.return = t),
                  (e.return = t),
                  (o.sibling = e),
                  (t.child = o),
                  (t.child.memoizedState = up(r)),
                  (t.memoizedState = lp),
                  e)
                : Xp(t, l))
        );
      if (
        ((a = e.memoizedState), a !== null && ((u = a.dehydrated), u !== null))
      )
        return Yk(e, t, l, n, u, a, r);
      if (o) {
        (o = n.fallback), (l = t.mode), (a = e.child), (u = a.sibling);
        var i = { mode: "hidden", children: n.children };
        return (
          !(l & 1) && t.child !== a
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = i),
              (t.deletions = null))
            : ((n = yn(a, i)), (n.subtreeFlags = a.subtreeFlags & 14680064)),
          u !== null
            ? (o = yn(u, o))
            : ((o = ea(o, l, r, null)), (o.flags |= 2)),
          (o.return = t),
          (n.return = t),
          (n.sibling = o),
          (t.child = n),
          (n = o),
          (o = t.child),
          (l = e.child.memoizedState),
          (l =
            l === null
              ? up(r)
              : {
                  baseLanes: l.baseLanes | r,
                  cachePool: null,
                  transitions: l.transitions,
                }),
          (o.memoizedState = l),
          (o.childLanes = e.childLanes & ~r),
          (t.memoizedState = lp),
          n
        );
      }
      return (
        (o = e.child),
        (e = o.sibling),
        (n = yn(o, { mode: "visible", children: n.children })),
        !(t.mode & 1) && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((r = t.deletions),
          r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n
      );
    }
    function Xp(e, t) {
      return (
        (t = Zs({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function ns(e, t, r, n) {
      return (
        n !== null && zp(n),
        Ja(t, e.child, null, r),
        (e = Xp(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Yk(e, t, r, n, a, o, l) {
      if (r)
        return t.flags & 256
          ? ((t.flags &= -257), (n = wc(Error(k(422)))), ns(e, t, l, n))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (a = t.mode),
            (n = Zs({ mode: "visible", children: n.children }, a, 0, null)),
            (o = ea(o, a, l, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            t.mode & 1 && Ja(t, e.child, null, l),
            (t.child.memoizedState = up(l)),
            (t.memoizedState = lp),
            o);
      if (!(t.mode & 1)) return ns(e, t, l, null);
      if (a.data === "$!") {
        if (((n = a.nextSibling && a.nextSibling.dataset), n)) var u = n.dgst;
        return (
          (n = u), (o = Error(k(419))), (n = wc(o, n, void 0)), ns(e, t, l, n)
        );
      }
      if (((u = (l & e.childLanes) !== 0), lt || u)) {
        if (((n = ke), n !== null)) {
          switch (l & -l) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          (a = a & (n.suspendedLanes | l) ? 0 : a),
            a !== 0 &&
              a !== o.retryLane &&
              ((o.retryLane = a), Ur(e, a), tr(n, e, a, -1));
        }
        return tm(), (n = wc(Error(k(421)))), ns(e, t, l, n);
      }
      return a.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = d2.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (vt = pn(a.nextSibling)),
          (xt = t),
          (ee = !0),
          (bt = null),
          e !== null &&
            ((_t[zt++] = _r),
            (_t[zt++] = zr),
            (_t[zt++] = ra),
            (_r = e.id),
            (zr = e.overflow),
            (ra = t)),
          (t = Xp(t, n.children)),
          (t.flags |= 4096),
          t);
    }
    function Gv(e, t, r) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), ep(e.return, t, r);
    }
    function Sc(e, t, r, n, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: r,
            tailMode: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = n),
          (o.tail = r),
          (o.tailMode = a));
    }
    function z1(e, t, r) {
      var n = t.pendingProps,
        a = n.revealOrder,
        o = n.tail;
      if ((Je(e, t, n.children, r), (n = re.current), n & 2))
        (n = (n & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && Gv(e, r, t);
            else if (e.tag === 19) Gv(e, r, t);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        n &= 1;
      }
      if (($(re, n), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (r = t.child, a = null; r !== null; )
              (e = r.alternate),
                e !== null && Rs(e) === null && (a = r),
                (r = r.sibling);
            (r = a),
              r === null
                ? ((a = t.child), (t.child = null))
                : ((a = r.sibling), (r.sibling = null)),
              Sc(t, !1, a, r, o);
            break;
          case "backwards":
            for (r = null, a = t.child, t.child = null; a !== null; ) {
              if (((e = a.alternate), e !== null && Rs(e) === null)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = r), (r = a), (a = e);
            }
            Sc(t, !0, r, null, o);
            break;
          case "together":
            Sc(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function cs(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Hr(e, t, r) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (aa |= t.lanes),
        !(r & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(k(153));
      if (t.child !== null) {
        for (
          e = t.child, r = yn(e, e.pendingProps), t.child = r, r.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (r = r.sibling = yn(e, e.pendingProps)),
            (r.return = t);
        r.sibling = null;
      }
      return t.child;
    }
    function Jk(e, t, r) {
      switch (t.tag) {
        case 3:
          A1(t), Ya();
          break;
        case 5:
          i1(t);
          break;
        case 1:
          it(t.type) && Ps(t);
          break;
        case 4:
          Vp(t, t.stateNode.containerInfo);
          break;
        case 10:
          var n = t.type._context,
            a = t.memoizedProps.value;
          $(Ms, n._currentValue), (n._currentValue = a);
          break;
        case 13:
          if (((n = t.memoizedState), n !== null))
            return n.dehydrated !== null
              ? ($(re, re.current & 1), (t.flags |= 128), null)
              : r & t.child.childLanes
              ? _1(e, t, r)
              : ($(re, re.current & 1),
                (e = Hr(e, t, r)),
                e !== null ? e.sibling : null);
          $(re, re.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
            if (n) return z1(e, t, r);
            t.flags |= 128;
          }
          if (
            ((a = t.memoizedState),
            a !== null &&
              ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
            $(re, re.current),
            n)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), D1(e, t, r);
      }
      return Hr(e, t, r);
    }
    var N1, ip, B1, O1;
    N1 = function (e, t) {
      for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
          (r.child.return = r), (r = r.child);
          continue;
        }
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    };
    ip = function () {};
    B1 = function (e, t, r, n) {
      var a = e.memoizedProps;
      if (a !== n) {
        (e = t.stateNode), Jn(xr.current);
        var o = null;
        switch (r) {
          case "input":
            (a = Fc(e, a)), (n = Fc(e, n)), (o = []);
            break;
          case "select":
            (a = ae({}, a, { value: void 0 })),
              (n = ae({}, n, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (a = Ac(e, a)), (n = Ac(e, n)), (o = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof n.onClick == "function" &&
              (e.onclick = Is);
        }
        zc(r, n);
        var l;
        r = null;
        for (f in a)
          if (!n.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null)
            if (f === "style") {
              var u = a[f];
              for (l in u) u.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
            } else
              f !== "dangerouslySetInnerHTML" &&
                f !== "children" &&
                f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                f !== "autoFocus" &&
                (ml.hasOwnProperty(f)
                  ? o || (o = [])
                  : (o = o || []).push(f, null));
        for (f in n) {
          var i = n[f];
          if (
            ((u = a?.[f]),
            n.hasOwnProperty(f) && i !== u && (i != null || u != null))
          )
            if (f === "style")
              if (u) {
                for (l in u)
                  !u.hasOwnProperty(l) ||
                    (i && i.hasOwnProperty(l)) ||
                    (r || (r = {}), (r[l] = ""));
                for (l in i)
                  i.hasOwnProperty(l) &&
                    u[l] !== i[l] &&
                    (r || (r = {}), (r[l] = i[l]));
              } else r || (o || (o = []), o.push(f, r)), (r = i);
            else
              f === "dangerouslySetInnerHTML"
                ? ((i = i ? i.__html : void 0),
                  (u = u ? u.__html : void 0),
                  i != null && u !== i && (o = o || []).push(f, i))
                : f === "children"
                ? (typeof i != "string" && typeof i != "number") ||
                  (o = o || []).push(f, "" + i)
                : f !== "suppressContentEditableWarning" &&
                  f !== "suppressHydrationWarning" &&
                  (ml.hasOwnProperty(f)
                    ? (i != null && f === "onScroll" && Z("scroll", e),
                      o || u === i || (o = []))
                    : (o = o || []).push(f, i));
        }
        r && (o = o || []).push("style", r);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4);
      }
    };
    O1 = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    };
    function Jo(e, t) {
      if (!ee)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
              t.alternate !== null && (r = t), (t = t.sibling);
            r === null ? (e.tail = null) : (r.sibling = null);
            break;
          case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
              r.alternate !== null && (n = r), (r = r.sibling);
            n === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (n.sibling = null);
        }
    }
    function Ue(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
      if (t)
        for (var a = e.child; a !== null; )
          (r |= a.lanes | a.childLanes),
            (n |= a.subtreeFlags & 14680064),
            (n |= a.flags & 14680064),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; a !== null; )
          (r |= a.lanes | a.childLanes),
            (n |= a.subtreeFlags),
            (n |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= n), (e.childLanes = r), t;
    }
    function bk(e, t, r) {
      var n = t.pendingProps;
      switch ((_p(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ue(t), null;
        case 1:
          return it(t.type) && ks(), Ue(t), null;
        case 3:
          return (
            (n = t.stateNode),
            ba(),
            Y(ut),
            Y(Ve),
            Wp(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (ts(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), bt !== null && (gp(bt), (bt = null)))),
            ip(e, t),
            Ue(t),
            null
          );
        case 5:
          jp(t);
          var a = Jn(Pl.current);
          if (((r = t.type), e !== null && t.stateNode != null))
            B1(e, t, r, n, a),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(k(166));
              return Ue(t), null;
            }
            if (((e = Jn(xr.current)), ts(t))) {
              (n = t.stateNode), (r = t.type);
              var o = t.memoizedProps;
              switch (((n[yr] = t), (n[Il] = o), (e = (t.mode & 1) !== 0), r)) {
                case "dialog":
                  Z("cancel", n), Z("close", n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Z("load", n);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < al.length; a++) Z(al[a], n);
                  break;
                case "source":
                  Z("error", n);
                  break;
                case "img":
                case "image":
                case "link":
                  Z("error", n), Z("load", n);
                  break;
                case "details":
                  Z("toggle", n);
                  break;
                case "input":
                  by(n, o), Z("invalid", n);
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!o.multiple }),
                    Z("invalid", n);
                  break;
                case "textarea":
                  tv(n, o), Z("invalid", n);
              }
              zc(r, o), (a = null);
              for (var l in o)
                if (o.hasOwnProperty(l)) {
                  var u = o[l];
                  l === "children"
                    ? typeof u == "string"
                      ? n.textContent !== u &&
                        (o.suppressHydrationWarning !== !0 &&
                          es(n.textContent, u, e),
                        (a = ["children", u]))
                      : typeof u == "number" &&
                        n.textContent !== "" + u &&
                        (o.suppressHydrationWarning !== !0 &&
                          es(n.textContent, u, e),
                        (a = ["children", "" + u]))
                    : ml.hasOwnProperty(l) &&
                      u != null &&
                      l === "onScroll" &&
                      Z("scroll", n);
                }
              switch (r) {
                case "input":
                  ji(n), ev(n, o, !0);
                  break;
                case "textarea":
                  ji(n), rv(n);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof o.onClick == "function" && (n.onclick = Is);
              }
              (n = a), (t.updateQueue = n), n !== null && (t.flags |= 4);
            } else {
              (l = a.nodeType === 9 ? a : a.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = f0(r)),
                e === "http://www.w3.org/1999/xhtml"
                  ? r === "script"
                    ? ((e = l.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof n.is == "string"
                    ? (e = l.createElement(r, { is: n.is }))
                    : ((e = l.createElement(r)),
                      r === "select" &&
                        ((l = e),
                        n.multiple
                          ? (l.multiple = !0)
                          : n.size && (l.size = n.size)))
                  : (e = l.createElementNS(e, r)),
                (e[yr] = t),
                (e[Il] = n),
                N1(e, t, !1, !1),
                (t.stateNode = e);
              e: {
                switch (((l = Nc(r, n)), r)) {
                  case "dialog":
                    Z("cancel", e), Z("close", e), (a = n);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Z("load", e), (a = n);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < al.length; a++) Z(al[a], e);
                    a = n;
                    break;
                  case "source":
                    Z("error", e), (a = n);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Z("error", e), Z("load", e), (a = n);
                    break;
                  case "details":
                    Z("toggle", e), (a = n);
                    break;
                  case "input":
                    by(e, n), (a = Fc(e, n)), Z("invalid", e);
                    break;
                  case "option":
                    a = n;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!n.multiple }),
                      (a = ae({}, n, { value: void 0 })),
                      Z("invalid", e);
                    break;
                  case "textarea":
                    tv(e, n), (a = Ac(e, n)), Z("invalid", e);
                    break;
                  default:
                    a = n;
                }
                zc(r, a), (u = a);
                for (o in u)
                  if (u.hasOwnProperty(o)) {
                    var i = u[o];
                    o === "style"
                      ? m0(e, i)
                      : o === "dangerouslySetInnerHTML"
                      ? ((i = i ? i.__html : void 0), i != null && c0(e, i))
                      : o === "children"
                      ? typeof i == "string"
                        ? (r !== "textarea" || i !== "") && hl(e, i)
                        : typeof i == "number" && hl(e, "" + i)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ml.hasOwnProperty(o)
                          ? i != null && o === "onScroll" && Z("scroll", e)
                          : i != null && xp(e, o, i, l));
                  }
                switch (r) {
                  case "input":
                    ji(e), ev(e, n, !1);
                    break;
                  case "textarea":
                    ji(e), rv(e);
                    break;
                  case "option":
                    n.value != null &&
                      e.setAttribute("value", "" + vn(n.value));
                    break;
                  case "select":
                    (e.multiple = !!n.multiple),
                      (o = n.value),
                      o != null
                        ? Wa(e, !!n.multiple, o, !1)
                        : n.defaultValue != null &&
                          Wa(e, !!n.multiple, n.defaultValue, !0);
                    break;
                  default:
                    typeof a.onClick == "function" && (e.onclick = Is);
                }
                switch (r) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    n = !!n.autoFocus;
                    break e;
                  case "img":
                    n = !0;
                    break e;
                  default:
                    n = !1;
                }
              }
              n && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return Ue(t), null;
        case 6:
          if (e && t.stateNode != null) O1(e, t, e.memoizedProps, n);
          else {
            if (typeof n != "string" && t.stateNode === null)
              throw Error(k(166));
            if (((r = Jn(Pl.current)), Jn(xr.current), ts(t))) {
              if (
                ((n = t.stateNode),
                (r = t.memoizedProps),
                (n[yr] = t),
                (o = n.nodeValue !== r) && ((e = xt), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    es(n.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      es(n.nodeValue, r, (e.mode & 1) !== 0);
                }
              o && (t.flags |= 4);
            } else
              (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
                (n[yr] = t),
                (t.stateNode = n);
          }
          return Ue(t), null;
        case 13:
          if (
            (Y(re),
            (n = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (ee && vt !== null && t.mode & 1 && !(t.flags & 128))
              t1(), Ya(), (t.flags |= 98560), (o = !1);
            else if (((o = ts(t)), n !== null && n.dehydrated !== null)) {
              if (e === null) {
                if (!o) throw Error(k(318));
                if (
                  ((o = t.memoizedState),
                  (o = o !== null ? o.dehydrated : null),
                  !o)
                )
                  throw Error(k(317));
                o[yr] = t;
              } else
                Ya(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              Ue(t), (o = !1);
            } else bt !== null && (gp(bt), (bt = null)), (o = !0);
            if (!o) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = r), t)
            : ((n = n !== null),
              n !== (e !== null && e.memoizedState !== null) &&
                n &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || re.current & 1 ? we === 0 && (we = 3) : tm())),
              t.updateQueue !== null && (t.flags |= 4),
              Ue(t),
              null);
        case 4:
          return (
            ba(),
            ip(e, t),
            e === null && Sl(t.stateNode.containerInfo),
            Ue(t),
            null
          );
        case 10:
          return Op(t.type._context), Ue(t), null;
        case 17:
          return it(t.type) && ks(), Ue(t), null;
        case 19:
          if ((Y(re), (o = t.memoizedState), o === null)) return Ue(t), null;
          if (((n = (t.flags & 128) !== 0), (l = o.rendering), l === null))
            if (n) Jo(o, !1);
            else {
              if (we !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((l = Rs(e)), l !== null)) {
                    for (
                      t.flags |= 128,
                        Jo(o, !1),
                        n = l.updateQueue,
                        n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        n = r,
                        r = t.child;
                      r !== null;

                    )
                      (o = r),
                        (e = n),
                        (o.flags &= 14680066),
                        (l = o.alternate),
                        l === null
                          ? ((o.childLanes = 0),
                            (o.lanes = e),
                            (o.child = null),
                            (o.subtreeFlags = 0),
                            (o.memoizedProps = null),
                            (o.memoizedState = null),
                            (o.updateQueue = null),
                            (o.dependencies = null),
                            (o.stateNode = null))
                          : ((o.childLanes = l.childLanes),
                            (o.lanes = l.lanes),
                            (o.child = l.child),
                            (o.subtreeFlags = 0),
                            (o.deletions = null),
                            (o.memoizedProps = l.memoizedProps),
                            (o.memoizedState = l.memoizedState),
                            (o.updateQueue = l.updateQueue),
                            (o.type = l.type),
                            (e = l.dependencies),
                            (o.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (r = r.sibling);
                    return $(re, (re.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null &&
                pe() > to &&
                ((t.flags |= 128), (n = !0), Jo(o, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = Rs(l)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  Jo(o, !0),
                  o.tail === null &&
                    o.tailMode === "hidden" &&
                    !l.alternate &&
                    !ee)
                )
                  return Ue(t), null;
              } else
                2 * pe() - o.renderingStartTime > to &&
                  r !== 1073741824 &&
                  ((t.flags |= 128), (n = !0), Jo(o, !1), (t.lanes = 4194304));
            o.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : ((r = o.last),
                r !== null ? (r.sibling = l) : (t.child = l),
                (o.last = l));
          }
          return o.tail !== null
            ? ((t = o.tail),
              (o.rendering = t),
              (o.tail = t.sibling),
              (o.renderingStartTime = pe()),
              (t.sibling = null),
              (r = re.current),
              $(re, n ? (r & 1) | 2 : r & 1),
              t)
            : (Ue(t), null);
        case 22:
        case 23:
          return (
            em(),
            (n = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
            n && t.mode & 1
              ? yt & 1073741824 &&
                (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Ue(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(k(156, t.tag));
    }
    function e2(e, t) {
      switch ((_p(t), t.tag)) {
        case 1:
          return (
            it(t.type) && ks(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            ba(),
            Y(ut),
            Y(Ve),
            Wp(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return jp(t), null;
        case 13:
          if (
            (Y(re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(k(340));
            Ya();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return Y(re), null;
        case 4:
          return ba(), null;
        case 10:
          return Op(t.type._context), null;
        case 22:
        case 23:
          return em(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var as = !1,
      He = !1,
      t2 = typeof WeakSet == "function" ? WeakSet : Set,
      F = null;
    function Va(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == "function")
          try {
            r(null);
          } catch (n) {
            de(e, t, n);
          }
        else r.current = null;
    }
    function sp(e, t, r) {
      try {
        r();
      } catch (n) {
        de(e, t, n);
      }
    }
    var qv = !1;
    function r2(e, t) {
      if (((qc = ws), (e = j0()), Rp(e))) {
        if ("selectionStart" in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
              r = n.anchorNode;
              var a = n.anchorOffset,
                o = n.focusNode;
              n = n.focusOffset;
              try {
                r.nodeType, o.nodeType;
              } catch {
                r = null;
                break e;
              }
              var l = 0,
                u = -1,
                i = -1,
                f = 0,
                p = 0,
                h = e,
                m = null;
              t: for (;;) {
                for (
                  var y;
                  h !== r || (a !== 0 && h.nodeType !== 3) || (u = l + a),
                    h !== o || (n !== 0 && h.nodeType !== 3) || (i = l + n),
                    h.nodeType === 3 && (l += h.nodeValue.length),
                    (y = h.firstChild) !== null;

                )
                  (m = h), (h = y);
                for (;;) {
                  if (h === e) break t;
                  if (
                    (m === r && ++f === a && (u = l),
                    m === o && ++p === n && (i = l),
                    (y = h.nextSibling) !== null)
                  )
                    break;
                  (h = m), (m = h.parentNode);
                }
                h = y;
              }
              r = u === -1 || i === -1 ? null : { start: u, end: i };
            } else r = null;
          }
        r = r || { start: 0, end: 0 };
      } else r = null;
      for (
        Qc = { focusedElem: e, selectionRange: r }, ws = !1, F = t;
        F !== null;

      )
        if (
          ((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          (e.return = t), (F = e);
        else
          for (; F !== null; ) {
            t = F;
            try {
              var x = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (x !== null) {
                      var v = x.memoizedProps,
                        E = x.memoizedState,
                        d = t.stateNode,
                        s = d.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? v : Yt(t.type, v),
                          E
                        );
                      d.__reactInternalSnapshotBeforeUpdate = s;
                    }
                    break;
                  case 3:
                    var c = t.stateNode.containerInfo;
                    c.nodeType === 1
                      ? (c.textContent = "")
                      : c.nodeType === 9 &&
                        c.documentElement &&
                        c.removeChild(c.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(k(163));
                }
            } catch (g) {
              de(t, t.return, g);
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (F = e);
              break;
            }
            F = t.return;
          }
      return (x = qv), (qv = !1), x;
    }
    function fl(e, t, r) {
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var a = (n = n.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.destroy;
            (a.destroy = void 0), o !== void 0 && sp(t, r, o);
          }
          a = a.next;
        } while (a !== n);
      }
    }
    function Ks(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var r = (t = t.next);
        do {
          if ((r.tag & e) === e) {
            var n = r.create;
            r.destroy = n();
          }
          r = r.next;
        } while (r !== t);
      }
    }
    function dp(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 5:
            e = r;
            break;
          default:
            e = r;
        }
        typeof t == "function" ? t(e) : (t.current = e);
      }
    }
    function U1(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), U1(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[yr],
            delete t[Il],
            delete t[Zc],
            delete t[Ok],
            delete t[Uk])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function H1(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Qv(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || H1(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function fp(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode),
          t
            ? r.nodeType === 8
              ? r.parentNode.insertBefore(e, t)
              : r.insertBefore(e, t)
            : (r.nodeType === 8
                ? ((t = r.parentNode), t.insertBefore(e, r))
                : ((t = r), t.appendChild(e)),
              (r = r._reactRootContainer),
              r != null || t.onclick !== null || (t.onclick = Is));
      else if (n !== 4 && ((e = e.child), e !== null))
        for (fp(e, t, r), e = e.sibling; e !== null; )
          fp(e, t, r), (e = e.sibling);
    }
    function cp(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (n !== 4 && ((e = e.child), e !== null))
        for (cp(e, t, r), e = e.sibling; e !== null; )
          cp(e, t, r), (e = e.sibling);
    }
    var Fe = null,
      Jt = !1;
    function rn(e, t, r) {
      for (r = r.child; r !== null; ) V1(e, t, r), (r = r.sibling);
    }
    function V1(e, t, r) {
      if (vr && typeof vr.onCommitFiberUnmount == "function")
        try {
          vr.onCommitFiberUnmount(Hs, r);
        } catch {}
      switch (r.tag) {
        case 5:
          He || Va(r, t);
        case 6:
          var n = Fe,
            a = Jt;
          (Fe = null),
            rn(e, t, r),
            (Fe = n),
            (Jt = a),
            Fe !== null &&
              (Jt
                ? ((e = Fe),
                  (r = r.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(r)
                    : e.removeChild(r))
                : Fe.removeChild(r.stateNode));
          break;
        case 18:
          Fe !== null &&
            (Jt
              ? ((e = Fe),
                (r = r.stateNode),
                e.nodeType === 8
                  ? hc(e.parentNode, r)
                  : e.nodeType === 1 && hc(e, r),
                xl(e))
              : hc(Fe, r.stateNode));
          break;
        case 4:
          (n = Fe),
            (a = Jt),
            (Fe = r.stateNode.containerInfo),
            (Jt = !0),
            rn(e, t, r),
            (Fe = n),
            (Jt = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !He &&
            ((n = r.updateQueue),
            n !== null && ((n = n.lastEffect), n !== null))
          ) {
            a = n = n.next;
            do {
              var o = a,
                l = o.destroy;
              (o = o.tag),
                l !== void 0 && (o & 2 || o & 4) && sp(r, t, l),
                (a = a.next);
            } while (a !== n);
          }
          rn(e, t, r);
          break;
        case 1:
          if (
            !He &&
            (Va(r, t),
            (n = r.stateNode),
            typeof n.componentWillUnmount == "function")
          )
            try {
              (n.props = r.memoizedProps),
                (n.state = r.memoizedState),
                n.componentWillUnmount();
            } catch (u) {
              de(r, t, u);
            }
          rn(e, t, r);
          break;
        case 21:
          rn(e, t, r);
          break;
        case 22:
          r.mode & 1
            ? ((He = (n = He) || r.memoizedState !== null),
              rn(e, t, r),
              (He = n))
            : rn(e, t, r);
          break;
        default:
          rn(e, t, r);
      }
    }
    function Kv(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new t2()),
          t.forEach(function (n) {
            var a = f2.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(a, a));
          });
      }
    }
    function Zt(e, t) {
      var r = t.deletions;
      if (r !== null)
        for (var n = 0; n < r.length; n++) {
          var a = r[n];
          try {
            var o = e,
              l = t,
              u = l;
            e: for (; u !== null; ) {
              switch (u.tag) {
                case 5:
                  (Fe = u.stateNode), (Jt = !1);
                  break e;
                case 3:
                  (Fe = u.stateNode.containerInfo), (Jt = !0);
                  break e;
                case 4:
                  (Fe = u.stateNode.containerInfo), (Jt = !0);
                  break e;
              }
              u = u.return;
            }
            if (Fe === null) throw Error(k(160));
            V1(o, l, a), (Fe = null), (Jt = !1);
            var i = a.alternate;
            i !== null && (i.return = null), (a.return = null);
          } catch (f) {
            de(a, t, f);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) j1(t, e), (t = t.sibling);
    }
    function j1(e, t) {
      var r = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Zt(t, e), hr(e), n & 4)) {
            try {
              fl(3, e, e.return), Ks(3, e);
            } catch (v) {
              de(e, e.return, v);
            }
            try {
              fl(5, e, e.return);
            } catch (v) {
              de(e, e.return, v);
            }
          }
          break;
        case 1:
          Zt(t, e), hr(e), n & 512 && r !== null && Va(r, r.return);
          break;
        case 5:
          if (
            (Zt(t, e),
            hr(e),
            n & 512 && r !== null && Va(r, r.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              hl(a, "");
            } catch (v) {
              de(e, e.return, v);
            }
          }
          if (n & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              l = r !== null ? r.memoizedProps : o,
              u = e.type,
              i = e.updateQueue;
            if (((e.updateQueue = null), i !== null))
              try {
                u === "input" &&
                  o.type === "radio" &&
                  o.name != null &&
                  s0(a, o),
                  Nc(u, l);
                var f = Nc(u, o);
                for (l = 0; l < i.length; l += 2) {
                  var p = i[l],
                    h = i[l + 1];
                  p === "style"
                    ? m0(a, h)
                    : p === "dangerouslySetInnerHTML"
                    ? c0(a, h)
                    : p === "children"
                    ? hl(a, h)
                    : xp(a, p, h, f);
                }
                switch (u) {
                  case "input":
                    Dc(a, o);
                    break;
                  case "textarea":
                    d0(a, o);
                    break;
                  case "select":
                    var m = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var y = o.value;
                    y != null
                      ? Wa(a, !!o.multiple, y, !1)
                      : m !== !!o.multiple &&
                        (o.defaultValue != null
                          ? Wa(a, !!o.multiple, o.defaultValue, !0)
                          : Wa(a, !!o.multiple, o.multiple ? [] : "", !1));
                }
                a[Il] = o;
              } catch (v) {
                de(e, e.return, v);
              }
          }
          break;
        case 6:
          if ((Zt(t, e), hr(e), n & 4)) {
            if (e.stateNode === null) throw Error(k(162));
            (a = e.stateNode), (o = e.memoizedProps);
            try {
              a.nodeValue = o;
            } catch (v) {
              de(e, e.return, v);
            }
          }
          break;
        case 3:
          if (
            (Zt(t, e),
            hr(e),
            n & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              xl(t.containerInfo);
            } catch (v) {
              de(e, e.return, v);
            }
          break;
        case 4:
          Zt(t, e), hr(e);
          break;
        case 13:
          Zt(t, e),
            hr(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (Jp = pe())),
            n & 4 && Kv(e);
          break;
        case 22:
          if (
            ((p = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((He = (f = He) || p), Zt(t, e), (He = f)) : Zt(t, e),
            hr(e),
            n & 8192)
          ) {
            if (
              ((f = e.memoizedState !== null),
              (e.stateNode.isHidden = f) && !p && e.mode & 1)
            )
              for (F = e, p = e.child; p !== null; ) {
                for (h = F = p; F !== null; ) {
                  switch (((m = F), (y = m.child), m.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      fl(4, m, m.return);
                      break;
                    case 1:
                      Va(m, m.return);
                      var x = m.stateNode;
                      if (typeof x.componentWillUnmount == "function") {
                        (n = m), (r = m.return);
                        try {
                          (t = n),
                            (x.props = t.memoizedProps),
                            (x.state = t.memoizedState),
                            x.componentWillUnmount();
                        } catch (v) {
                          de(n, r, v);
                        }
                      }
                      break;
                    case 5:
                      Va(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        Zv(h);
                        continue;
                      }
                  }
                  y !== null ? ((y.return = m), (F = y)) : Zv(h);
                }
                p = p.sibling;
              }
            e: for (p = null, h = e; ; ) {
              if (h.tag === 5) {
                if (p === null) {
                  p = h;
                  try {
                    (a = h.stateNode),
                      f
                        ? ((o = a.style),
                          typeof o.setProperty == "function"
                            ? o.setProperty("display", "none", "important")
                            : (o.display = "none"))
                        : ((u = h.stateNode),
                          (i = h.memoizedProps.style),
                          (l =
                            i != null && i.hasOwnProperty("display")
                              ? i.display
                              : null),
                          (u.style.display = p0("display", l)));
                  } catch (v) {
                    de(e, e.return, v);
                  }
                }
              } else if (h.tag === 6) {
                if (p === null)
                  try {
                    h.stateNode.nodeValue = f ? "" : h.memoizedProps;
                  } catch (v) {
                    de(e, e.return, v);
                  }
              } else if (
                ((h.tag !== 22 && h.tag !== 23) ||
                  h.memoizedState === null ||
                  h === e) &&
                h.child !== null
              ) {
                (h.child.return = h), (h = h.child);
                continue;
              }
              if (h === e) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === e) break e;
                p === h && (p = null), (h = h.return);
              }
              p === h && (p = null),
                (h.sibling.return = h.return),
                (h = h.sibling);
            }
          }
          break;
        case 19:
          Zt(t, e), hr(e), n & 4 && Kv(e);
          break;
        case 21:
          break;
        default:
          Zt(t, e), hr(e);
      }
    }
    function hr(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null; ) {
              if (H1(r)) {
                var n = r;
                break e;
              }
              r = r.return;
            }
            throw Error(k(160));
          }
          switch (n.tag) {
            case 5:
              var a = n.stateNode;
              n.flags & 32 && (hl(a, ""), (n.flags &= -33));
              var o = Qv(e);
              cp(e, o, a);
              break;
            case 3:
            case 4:
              var l = n.stateNode.containerInfo,
                u = Qv(e);
              fp(e, u, l);
              break;
            default:
              throw Error(k(161));
          }
        } catch (i) {
          de(e, e.return, i);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function n2(e, t, r) {
      (F = e), W1(e, t, r);
    }
    function W1(e, t, r) {
      for (var n = (e.mode & 1) !== 0; F !== null; ) {
        var a = F,
          o = a.child;
        if (a.tag === 22 && n) {
          var l = a.memoizedState !== null || as;
          if (!l) {
            var u = a.alternate,
              i = (u !== null && u.memoizedState !== null) || He;
            u = as;
            var f = He;
            if (((as = l), (He = i) && !f))
              for (F = a; F !== null; )
                (l = F),
                  (i = l.child),
                  l.tag === 22 && l.memoizedState !== null
                    ? Yv(a)
                    : i !== null
                    ? ((i.return = l), (F = i))
                    : Yv(a);
            for (; o !== null; ) (F = o), W1(o, t, r), (o = o.sibling);
            (F = a), (as = u), (He = f);
          }
          Xv(e, t, r);
        } else
          a.subtreeFlags & 8772 && o !== null
            ? ((o.return = a), (F = o))
            : Xv(e, t, r);
      }
    }
    function Xv(e) {
      for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
          var r = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  He || Ks(5, t);
                  break;
                case 1:
                  var n = t.stateNode;
                  if (t.flags & 4 && !He)
                    if (r === null) n.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? r.memoizedProps
                          : Yt(t.type, r.memoizedProps);
                      n.componentDidUpdate(
                        a,
                        r.memoizedState,
                        n.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && Rv(t, o, n);
                  break;
                case 3:
                  var l = t.updateQueue;
                  if (l !== null) {
                    if (((r = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                    Rv(t, l, r);
                  }
                  break;
                case 5:
                  var u = t.stateNode;
                  if (r === null && t.flags & 4) {
                    r = u;
                    var i = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        i.autoFocus && r.focus();
                        break;
                      case "img":
                        i.src && (r.src = i.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var f = t.alternate;
                    if (f !== null) {
                      var p = f.memoizedState;
                      if (p !== null) {
                        var h = p.dehydrated;
                        h !== null && xl(h);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(k(163));
              }
            He || (t.flags & 512 && dp(t));
          } catch (m) {
            de(t, t.return, m);
          }
        }
        if (t === e) {
          F = null;
          break;
        }
        if (((r = t.sibling), r !== null)) {
          (r.return = t.return), (F = r);
          break;
        }
        F = t.return;
      }
    }
    function Zv(e) {
      for (; F !== null; ) {
        var t = F;
        if (t === e) {
          F = null;
          break;
        }
        var r = t.sibling;
        if (r !== null) {
          (r.return = t.return), (F = r);
          break;
        }
        F = t.return;
      }
    }
    function Yv(e) {
      for (; F !== null; ) {
        var t = F;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                Ks(4, t);
              } catch (i) {
                de(t, r, i);
              }
              break;
            case 1:
              var n = t.stateNode;
              if (typeof n.componentDidMount == "function") {
                var a = t.return;
                try {
                  n.componentDidMount();
                } catch (i) {
                  de(t, a, i);
                }
              }
              var o = t.return;
              try {
                dp(t);
              } catch (i) {
                de(t, o, i);
              }
              break;
            case 5:
              var l = t.return;
              try {
                dp(t);
              } catch (i) {
                de(t, l, i);
              }
          }
        } catch (i) {
          de(t, t.return, i);
        }
        if (t === e) {
          F = null;
          break;
        }
        var u = t.sibling;
        if (u !== null) {
          (u.return = t.return), (F = u);
          break;
        }
        F = t.return;
      }
    }
    var a2 = Math.ceil,
      zs = Vr.ReactCurrentDispatcher,
      Zp = Vr.ReactCurrentOwner,
      Bt = Vr.ReactCurrentBatchConfig,
      B = 0,
      ke = null,
      ye = null,
      De = 0,
      yt = 0,
      ja = wn(0),
      we = 0,
      Fl = null,
      aa = 0,
      Xs = 0,
      Yp = 0,
      cl = null,
      ot = null,
      Jp = 0,
      to = 1 / 0,
      Rr = null,
      Ns = !1,
      pp = null,
      hn = null,
      os = !1,
      sn = null,
      Bs = 0,
      pl = 0,
      mp = null,
      ps = -1,
      ms = 0;
    function be() {
      return B & 6 ? pe() : ps !== -1 ? ps : (ps = pe());
    }
    function gn(e) {
      return e.mode & 1
        ? B & 2 && De !== 0
          ? De & -De
          : Vk.transition !== null
          ? (ms === 0 && (ms = P0()), ms)
          : ((e = V),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : A0(e.type))),
            e)
        : 1;
    }
    function tr(e, t, r, n) {
      if (50 < pl) throw ((pl = 0), (mp = null), Error(k(185)));
      Dl(e, r, n),
        (!(B & 2) || e !== ke) &&
          (e === ke && (!(B & 2) && (Xs |= r), we === 4 && ln(e, De)),
          st(e, n),
          r === 1 &&
            B === 0 &&
            !(t.mode & 1) &&
            ((to = pe() + 500), Gs && Sn()));
    }
    function st(e, t) {
      var r = e.callbackNode;
      WI(e, t);
      var n = Ls(e, e === ke ? De : 0);
      if (n === 0)
        r !== null && ov(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = n & -n), e.callbackPriority !== t)) {
        if ((r != null && ov(r), t === 1))
          e.tag === 0 ? Hk(Jv.bind(null, e)) : J0(Jv.bind(null, e)),
            Nk(function () {
              !(B & 6) && Sn();
            }),
            (r = null);
        else {
          switch (E0(n)) {
            case 1:
              r = Ip;
              break;
            case 4:
              r = I0;
              break;
            case 16:
              r = xs;
              break;
            case 536870912:
              r = k0;
              break;
            default:
              r = xs;
          }
          r = Y1(r, $1.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function $1(e, t) {
      if (((ps = -1), (ms = 0), B & 6)) throw Error(k(327));
      var r = e.callbackNode;
      if (Ka() && e.callbackNode !== r) return null;
      var n = Ls(e, e === ke ? De : 0);
      if (n === 0) return null;
      if (n & 30 || n & e.expiredLanes || t) t = Os(e, n);
      else {
        t = n;
        var a = B;
        B |= 2;
        var o = q1();
        (ke !== e || De !== t) && ((Rr = null), (to = pe() + 500), bn(e, t));
        do
          try {
            u2();
            break;
          } catch (u) {
            G1(e, u);
          }
        while (!0);
        Bp(),
          (zs.current = o),
          (B = a),
          ye !== null ? (t = 0) : ((ke = null), (De = 0), (t = we));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Vc(e)), a !== 0 && ((n = a), (t = hp(e, a)))),
          t === 1)
        )
          throw ((r = Fl), bn(e, 0), ln(e, n), st(e, pe()), r);
        if (t === 6) ln(e, n);
        else {
          if (
            ((a = e.current.alternate),
            !(n & 30) &&
              !o2(a) &&
              ((t = Os(e, n)),
              t === 2 && ((o = Vc(e)), o !== 0 && ((n = o), (t = hp(e, o)))),
              t === 1))
          )
            throw ((r = Fl), bn(e, 0), ln(e, n), st(e, pe()), r);
          switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
            case 0:
            case 1:
              throw Error(k(345));
            case 2:
              Xn(e, ot, Rr);
              break;
            case 3:
              if (
                (ln(e, n),
                (n & 130023424) === n && ((t = Jp + 500 - pe()), 10 < t))
              ) {
                if (Ls(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & n) !== n)) {
                  be(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Xc(Xn.bind(null, e, ot, Rr), t);
                break;
              }
              Xn(e, ot, Rr);
              break;
            case 4:
              if ((ln(e, n), (n & 4194240) === n)) break;
              for (t = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - er(n);
                (o = 1 << l), (l = t[l]), l > a && (a = l), (n &= ~o);
              }
              if (
                ((n = a),
                (n = pe() - n),
                (n =
                  (120 > n
                    ? 120
                    : 480 > n
                    ? 480
                    : 1080 > n
                    ? 1080
                    : 1920 > n
                    ? 1920
                    : 3e3 > n
                    ? 3e3
                    : 4320 > n
                    ? 4320
                    : 1960 * a2(n / 1960)) - n),
                10 < n)
              ) {
                e.timeoutHandle = Xc(Xn.bind(null, e, ot, Rr), n);
                break;
              }
              Xn(e, ot, Rr);
              break;
            case 5:
              Xn(e, ot, Rr);
              break;
            default:
              throw Error(k(329));
          }
        }
      }
      return st(e, pe()), e.callbackNode === r ? $1.bind(null, e) : null;
    }
    function hp(e, t) {
      var r = cl;
      return (
        e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
        (e = Os(e, t)),
        e !== 2 && ((t = ot), (ot = r), t !== null && gp(t)),
        e
      );
    }
    function gp(e) {
      ot === null ? (ot = e) : ot.push.apply(ot, e);
    }
    function o2(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && ((r = r.stores), r !== null))
            for (var n = 0; n < r.length; n++) {
              var a = r[n],
                o = a.getSnapshot;
              a = a.value;
              try {
                if (!rr(o(), a)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
          (r.return = t), (t = r);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function ln(e, t) {
      for (
        t &= ~Yp,
          t &= ~Xs,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var r = 31 - er(t),
          n = 1 << r;
        (e[r] = -1), (t &= ~n);
      }
    }
    function Jv(e) {
      if (B & 6) throw Error(k(327));
      Ka();
      var t = Ls(e, 0);
      if (!(t & 1)) return st(e, pe()), null;
      var r = Os(e, t);
      if (e.tag !== 0 && r === 2) {
        var n = Vc(e);
        n !== 0 && ((t = n), (r = hp(e, n)));
      }
      if (r === 1) throw ((r = Fl), bn(e, 0), ln(e, t), st(e, pe()), r);
      if (r === 6) throw Error(k(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Xn(e, ot, Rr),
        st(e, pe()),
        null
      );
    }
    function bp(e, t) {
      var r = B;
      B |= 1;
      try {
        return e(t);
      } finally {
        (B = r), B === 0 && ((to = pe() + 500), Gs && Sn());
      }
    }
    function oa(e) {
      sn !== null && sn.tag === 0 && !(B & 6) && Ka();
      var t = B;
      B |= 1;
      var r = Bt.transition,
        n = V;
      try {
        if (((Bt.transition = null), (V = 1), e)) return e();
      } finally {
        (V = n), (Bt.transition = r), (B = t), !(B & 6) && Sn();
      }
    }
    function em() {
      (yt = ja.current), Y(ja);
    }
    function bn(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var r = e.timeoutHandle;
      if ((r !== -1 && ((e.timeoutHandle = -1), zk(r)), ye !== null))
        for (r = ye.return; r !== null; ) {
          var n = r;
          switch ((_p(n), n.tag)) {
            case 1:
              (n = n.type.childContextTypes), n != null && ks();
              break;
            case 3:
              ba(), Y(ut), Y(Ve), Wp();
              break;
            case 5:
              jp(n);
              break;
            case 4:
              ba();
              break;
            case 13:
              Y(re);
              break;
            case 19:
              Y(re);
              break;
            case 10:
              Op(n.type._context);
              break;
            case 22:
            case 23:
              em();
          }
          r = r.return;
        }
      if (
        ((ke = e),
        (ye = e = yn(e.current, null)),
        (De = yt = t),
        (we = 0),
        (Fl = null),
        (Yp = Xs = aa = 0),
        (ot = cl = null),
        Yn !== null)
      ) {
        for (t = 0; t < Yn.length; t++)
          if (((r = Yn[t]), (n = r.interleaved), n !== null)) {
            r.interleaved = null;
            var a = n.next,
              o = r.pending;
            if (o !== null) {
              var l = o.next;
              (o.next = a), (n.next = l);
            }
            r.pending = n;
          }
        Yn = null;
      }
      return e;
    }
    function G1(e, t) {
      do {
        var r = ye;
        try {
          if ((Bp(), (ds.current = _s), As)) {
            for (var n = ne.memoizedState; n !== null; ) {
              var a = n.queue;
              a !== null && (a.pending = null), (n = n.next);
            }
            As = !1;
          }
          if (
            ((na = 0),
            (Ie = Le = ne = null),
            (dl = !1),
            (El = 0),
            (Zp.current = null),
            r === null || r.return === null)
          ) {
            (we = 1), (Fl = t), (ye = null);
            break;
          }
          e: {
            var o = e,
              l = r.return,
              u = r,
              i = t;
            if (
              ((t = De),
              (u.flags |= 32768),
              i !== null && typeof i == "object" && typeof i.then == "function")
            ) {
              var f = i,
                p = u,
                h = p.tag;
              if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                var m = p.alternate;
                m
                  ? ((p.updateQueue = m.updateQueue),
                    (p.memoizedState = m.memoizedState),
                    (p.lanes = m.lanes))
                  : ((p.updateQueue = null), (p.memoizedState = null));
              }
              var y = Uv(l);
              if (y !== null) {
                (y.flags &= -257),
                  Hv(y, l, u, o, t),
                  y.mode & 1 && Ov(o, f, t),
                  (t = y),
                  (i = f);
                var x = t.updateQueue;
                if (x === null) {
                  var v = new Set();
                  v.add(i), (t.updateQueue = v);
                } else x.add(i);
                break e;
              } else {
                if (!(t & 1)) {
                  Ov(o, f, t), tm();
                  break e;
                }
                i = Error(k(426));
              }
            } else if (ee && u.mode & 1) {
              var E = Uv(l);
              if (E !== null) {
                !(E.flags & 65536) && (E.flags |= 256),
                  Hv(E, l, u, o, t),
                  zp(eo(i, u));
                break e;
              }
            }
            (o = i = eo(i, u)),
              we !== 4 && (we = 2),
              cl === null ? (cl = [o]) : cl.push(o),
              (o = l);
            do {
              switch (o.tag) {
                case 3:
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var d = T1(o, i, t);
                  Dv(o, d);
                  break e;
                case 1:
                  u = i;
                  var s = o.type,
                    c = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof s.getDerivedStateFromError == "function" ||
                      (c !== null &&
                        typeof c.componentDidCatch == "function" &&
                        (hn === null || !hn.has(c))))
                  ) {
                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                    var g = M1(o, u, t);
                    Dv(o, g);
                    break e;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          K1(r);
        } catch (L) {
          (t = L), ye === r && r !== null && (ye = r = r.return);
          continue;
        }
        break;
      } while (!0);
    }
    function q1() {
      var e = zs.current;
      return (zs.current = _s), e === null ? _s : e;
    }
    function tm() {
      (we === 0 || we === 3 || we === 2) && (we = 4),
        ke === null || (!(aa & 268435455) && !(Xs & 268435455)) || ln(ke, De);
    }
    function Os(e, t) {
      var r = B;
      B |= 2;
      var n = q1();
      (ke !== e || De !== t) && ((Rr = null), bn(e, t));
      do
        try {
          l2();
          break;
        } catch (a) {
          G1(e, a);
        }
      while (!0);
      if ((Bp(), (B = r), (zs.current = n), ye !== null)) throw Error(k(261));
      return (ke = null), (De = 0), we;
    }
    function l2() {
      for (; ye !== null; ) Q1(ye);
    }
    function u2() {
      for (; ye !== null && !_I(); ) Q1(ye);
    }
    function Q1(e) {
      var t = Z1(e.alternate, e, yt);
      (e.memoizedProps = e.pendingProps),
        t === null ? K1(e) : (ye = t),
        (Zp.current = null);
    }
    function K1(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((r = e2(r, t)), r !== null)) {
            (r.flags &= 32767), (ye = r);
            return;
          }
          if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (we = 6), (ye = null);
            return;
          }
        } else if (((r = bk(r, t, yt)), r !== null)) {
          ye = r;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          ye = t;
          return;
        }
        ye = t = e;
      } while (t !== null);
      we === 0 && (we = 5);
    }
    function Xn(e, t, r) {
      var n = V,
        a = Bt.transition;
      try {
        (Bt.transition = null), (V = 1), i2(e, t, r, n);
      } finally {
        (Bt.transition = a), (V = n);
      }
      return null;
    }
    function i2(e, t, r, n) {
      do Ka();
      while (sn !== null);
      if (B & 6) throw Error(k(327));
      r = e.finishedWork;
      var a = e.finishedLanes;
      if (r === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(k(177));
      (e.callbackNode = null), (e.callbackPriority = 0);
      var o = r.lanes | r.childLanes;
      if (
        ($I(e, o),
        e === ke && ((ye = ke = null), (De = 0)),
        (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
          os ||
          ((os = !0),
          Y1(xs, function () {
            return Ka(), null;
          })),
        (o = (r.flags & 15990) !== 0),
        r.subtreeFlags & 15990 || o)
      ) {
        (o = Bt.transition), (Bt.transition = null);
        var l = V;
        V = 1;
        var u = B;
        (B |= 4),
          (Zp.current = null),
          r2(e, r),
          j1(r, e),
          Fk(Qc),
          (ws = !!qc),
          (Qc = qc = null),
          (e.current = r),
          n2(r, e, a),
          zI(),
          (B = u),
          (V = l),
          (Bt.transition = o);
      } else e.current = r;
      if (
        (os && ((os = !1), (sn = e), (Bs = a)),
        (o = e.pendingLanes),
        o === 0 && (hn = null),
        OI(r.stateNode, n),
        st(e, pe()),
        t !== null)
      )
        for (n = e.onRecoverableError, r = 0; r < t.length; r++)
          (a = t[r]), n(a.value, { componentStack: a.stack, digest: a.digest });
      if (Ns) throw ((Ns = !1), (e = pp), (pp = null), e);
      return (
        Bs & 1 && e.tag !== 0 && Ka(),
        (o = e.pendingLanes),
        o & 1 ? (e === mp ? pl++ : ((pl = 0), (mp = e))) : (pl = 0),
        Sn(),
        null
      );
    }
    function Ka() {
      if (sn !== null) {
        var e = E0(Bs),
          t = Bt.transition,
          r = V;
        try {
          if (((Bt.transition = null), (V = 16 > e ? 16 : e), sn === null))
            var n = !1;
          else {
            if (((e = sn), (sn = null), (Bs = 0), B & 6)) throw Error(k(331));
            var a = B;
            for (B |= 4, F = e.current; F !== null; ) {
              var o = F,
                l = o.child;
              if (F.flags & 16) {
                var u = o.deletions;
                if (u !== null) {
                  for (var i = 0; i < u.length; i++) {
                    var f = u[i];
                    for (F = f; F !== null; ) {
                      var p = F;
                      switch (p.tag) {
                        case 0:
                        case 11:
                        case 15:
                          fl(8, p, o);
                      }
                      var h = p.child;
                      if (h !== null) (h.return = p), (F = h);
                      else
                        for (; F !== null; ) {
                          p = F;
                          var m = p.sibling,
                            y = p.return;
                          if ((U1(p), p === f)) {
                            F = null;
                            break;
                          }
                          if (m !== null) {
                            (m.return = y), (F = m);
                            break;
                          }
                          F = y;
                        }
                    }
                  }
                  var x = o.alternate;
                  if (x !== null) {
                    var v = x.child;
                    if (v !== null) {
                      x.child = null;
                      do {
                        var E = v.sibling;
                        (v.sibling = null), (v = E);
                      } while (v !== null);
                    }
                  }
                  F = o;
                }
              }
              if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (F = l);
              else
                e: for (; F !== null; ) {
                  if (((o = F), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fl(9, o, o.return);
                    }
                  var d = o.sibling;
                  if (d !== null) {
                    (d.return = o.return), (F = d);
                    break e;
                  }
                  F = o.return;
                }
            }
            var s = e.current;
            for (F = s; F !== null; ) {
              l = F;
              var c = l.child;
              if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (F = c);
              else
                e: for (l = s; F !== null; ) {
                  if (((u = F), u.flags & 2048))
                    try {
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ks(9, u);
                      }
                    } catch (L) {
                      de(u, u.return, L);
                    }
                  if (u === l) {
                    F = null;
                    break e;
                  }
                  var g = u.sibling;
                  if (g !== null) {
                    (g.return = u.return), (F = g);
                    break e;
                  }
                  F = u.return;
                }
            }
            if (
              ((B = a),
              Sn(),
              vr && typeof vr.onPostCommitFiberRoot == "function")
            )
              try {
                vr.onPostCommitFiberRoot(Hs, e);
              } catch {}
            n = !0;
          }
          return n;
        } finally {
          (V = r), (Bt.transition = t);
        }
      }
      return !1;
    }
    function bv(e, t, r) {
      (t = eo(r, t)),
        (t = T1(e, t, 1)),
        (e = mn(e, t, 1)),
        (t = be()),
        e !== null && (Dl(e, 1, t), st(e, t));
    }
    function de(e, t, r) {
      if (e.tag === 3) bv(e, e, r);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            bv(t, e, r);
            break;
          } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof n.componentDidCatch == "function" &&
                (hn === null || !hn.has(n)))
            ) {
              (e = eo(r, e)),
                (e = M1(t, e, 1)),
                (t = mn(t, e, 1)),
                (e = be()),
                t !== null && (Dl(t, 1, e), st(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function s2(e, t, r) {
      var n = e.pingCache;
      n !== null && n.delete(t),
        (t = be()),
        (e.pingedLanes |= e.suspendedLanes & r),
        ke === e &&
          (De & r) === r &&
          (we === 4 || (we === 3 && (De & 130023424) === De && 500 > pe() - Jp)
            ? bn(e, 0)
            : (Yp |= r)),
        st(e, t);
    }
    function X1(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Gi), (Gi <<= 1), !(Gi & 130023424) && (Gi = 4194304))
          : (t = 1));
      var r = be();
      (e = Ur(e, t)), e !== null && (Dl(e, t, r), st(e, r));
    }
    function d2(e) {
      var t = e.memoizedState,
        r = 0;
      t !== null && (r = t.retryLane), X1(e, r);
    }
    function f2(e, t) {
      var r = 0;
      switch (e.tag) {
        case 13:
          var n = e.stateNode,
            a = e.memoizedState;
          a !== null && (r = a.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        default:
          throw Error(k(314));
      }
      n !== null && n.delete(t), X1(e, r);
    }
    var Z1;
    Z1 = function (e, t, r) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ut.current) lt = !0;
        else {
          if (!(e.lanes & r) && !(t.flags & 128)) return (lt = !1), Jk(e, t, r);
          lt = !!(e.flags & 131072);
        }
      else (lt = !1), ee && t.flags & 1048576 && b0(t, Ts, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var n = t.type;
          cs(e, t), (e = t.pendingProps);
          var a = Za(t, Ve.current);
          Qa(t, r), (a = Gp(null, t, n, e, a, r));
          var o = qp();
          return (
            (t.flags |= 1),
            typeof a == "object" &&
            a !== null &&
            typeof a.render == "function" &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                it(n) ? ((o = !0), Ps(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                Hp(t),
                (a.updater = qs),
                (t.stateNode = a),
                (a._reactInternals = t),
                rp(t, n, e, r),
                (t = op(null, t, n, !0, o, r)))
              : ((t.tag = 0),
                ee && o && Ap(t),
                Je(null, t, a, r),
                (t = t.child)),
            t
          );
        case 16:
          n = t.elementType;
          e: {
            switch (
              (cs(e, t),
              (e = t.pendingProps),
              (a = n._init),
              (n = a(n._payload)),
              (t.type = n),
              (a = t.tag = p2(n)),
              (e = Yt(n, e)),
              a)
            ) {
              case 0:
                t = ap(null, t, n, e, r);
                break e;
              case 1:
                t = Wv(null, t, n, e, r);
                break e;
              case 11:
                t = Vv(null, t, n, e, r);
                break e;
              case 14:
                t = jv(null, t, n, Yt(n.type, e), r);
                break e;
            }
            throw Error(k(306, n, ""));
          }
          return t;
        case 0:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Yt(n, a)),
            ap(e, t, n, a, r)
          );
        case 1:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Yt(n, a)),
            Wv(e, t, n, a, r)
          );
        case 3:
          e: {
            if ((A1(t), e === null)) throw Error(k(387));
            (n = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              n1(e, t),
              Ds(t, n, null, r);
            var l = t.memoizedState;
            if (((n = l.element), o.isDehydrated))
              if (
                ((o = {
                  element: n,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                (a = eo(Error(k(423)), t)), (t = $v(e, t, n, r, a));
                break e;
              } else if (n !== a) {
                (a = eo(Error(k(424)), t)), (t = $v(e, t, n, r, a));
                break e;
              } else
                for (
                  vt = pn(t.stateNode.containerInfo.firstChild),
                    xt = t,
                    ee = !0,
                    bt = null,
                    r = u1(t, null, n, r),
                    t.child = r;
                  r;

                )
                  (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            else {
              if ((Ya(), n === a)) {
                t = Hr(e, t, r);
                break e;
              }
              Je(e, t, n, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            i1(t),
            e === null && bc(t),
            (n = t.type),
            (a = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (l = a.children),
            Kc(n, a) ? (l = null) : o !== null && Kc(n, o) && (t.flags |= 32),
            R1(e, t),
            Je(e, t, l, r),
            t.child
          );
        case 6:
          return e === null && bc(t), null;
        case 13:
          return _1(e, t, r);
        case 4:
          return (
            Vp(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = Ja(t, null, n, r)) : Je(e, t, n, r),
            t.child
          );
        case 11:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Yt(n, a)),
            Vv(e, t, n, a, r)
          );
        case 7:
          return Je(e, t, t.pendingProps, r), t.child;
        case 8:
          return Je(e, t, t.pendingProps.children, r), t.child;
        case 12:
          return Je(e, t, t.pendingProps.children, r), t.child;
        case 10:
          e: {
            if (
              ((n = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (l = a.value),
              $(Ms, n._currentValue),
              (n._currentValue = l),
              o !== null)
            )
              if (rr(o.value, l)) {
                if (o.children === a.children && !ut.current) {
                  t = Hr(e, t, r);
                  break e;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                  var u = o.dependencies;
                  if (u !== null) {
                    l = o.child;
                    for (var i = u.firstContext; i !== null; ) {
                      if (i.context === n) {
                        if (o.tag === 1) {
                          (i = Nr(-1, r & -r)), (i.tag = 2);
                          var f = o.updateQueue;
                          if (f !== null) {
                            f = f.shared;
                            var p = f.pending;
                            p === null
                              ? (i.next = i)
                              : ((i.next = p.next), (p.next = i)),
                              (f.pending = i);
                          }
                        }
                        (o.lanes |= r),
                          (i = o.alternate),
                          i !== null && (i.lanes |= r),
                          ep(o.return, r, t),
                          (u.lanes |= r);
                        break;
                      }
                      i = i.next;
                    }
                  } else if (o.tag === 10)
                    l = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((l = o.return), l === null)) throw Error(k(341));
                    (l.lanes |= r),
                      (u = l.alternate),
                      u !== null && (u.lanes |= r),
                      ep(l, r, t),
                      (l = o.sibling);
                  } else l = o.child;
                  if (l !== null) l.return = o;
                  else
                    for (l = o; l !== null; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (((o = l.sibling), o !== null)) {
                        (o.return = l.return), (l = o);
                        break;
                      }
                      l = l.return;
                    }
                  o = l;
                }
            Je(e, t, a.children, r), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (n = t.pendingProps.children),
            Qa(t, r),
            (a = Ot(a)),
            (n = n(a)),
            (t.flags |= 1),
            Je(e, t, n, r),
            t.child
          );
        case 14:
          return (
            (n = t.type),
            (a = Yt(n, t.pendingProps)),
            (a = Yt(n.type, a)),
            jv(e, t, n, a, r)
          );
        case 15:
          return F1(e, t, t.type, t.pendingProps, r);
        case 17:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Yt(n, a)),
            cs(e, t),
            (t.tag = 1),
            it(n) ? ((e = !0), Ps(t)) : (e = !1),
            Qa(t, r),
            o1(t, n, a),
            rp(t, n, a, r),
            op(null, t, n, !0, e, r)
          );
        case 19:
          return z1(e, t, r);
        case 22:
          return D1(e, t, r);
      }
      throw Error(k(156, t.tag));
    };
    function Y1(e, t) {
      return C0(e, t);
    }
    function c2(e, t, r, n) {
      (this.tag = e),
        (this.key = r),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = n),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Nt(e, t, r, n) {
      return new c2(e, t, r, n);
    }
    function rm(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function p2(e) {
      if (typeof e == "function") return rm(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === wp)) return 11;
        if (e === Sp) return 14;
      }
      return 2;
    }
    function yn(e, t) {
      var r = e.alternate;
      return (
        r === null
          ? ((r = Nt(e.tag, t, e.key, e.mode)),
            (r.elementType = e.elementType),
            (r.type = e.type),
            (r.stateNode = e.stateNode),
            (r.alternate = e),
            (e.alternate = r))
          : ((r.pendingProps = t),
            (r.type = e.type),
            (r.flags = 0),
            (r.subtreeFlags = 0),
            (r.deletions = null)),
        (r.flags = e.flags & 14680064),
        (r.childLanes = e.childLanes),
        (r.lanes = e.lanes),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      );
    }
    function hs(e, t, r, n, a, o) {
      var l = 2;
      if (((n = e), typeof e == "function")) rm(e) && (l = 1);
      else if (typeof e == "string") l = 5;
      else
        e: switch (e) {
          case Ra:
            return ea(r.children, a, o, t);
          case Lp:
            (l = 8), (a |= 8);
            break;
          case Pc:
            return (
              (e = Nt(12, r, t, a | 2)), (e.elementType = Pc), (e.lanes = o), e
            );
          case Ec:
            return (
              (e = Nt(13, r, t, a)), (e.elementType = Ec), (e.lanes = o), e
            );
          case Tc:
            return (
              (e = Nt(19, r, t, a)), (e.elementType = Tc), (e.lanes = o), e
            );
          case l0:
            return Zs(r, a, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case a0:
                  l = 10;
                  break e;
                case o0:
                  l = 9;
                  break e;
                case wp:
                  l = 11;
                  break e;
                case Sp:
                  l = 14;
                  break e;
                case nn:
                  (l = 16), (n = null);
                  break e;
              }
            throw Error(k(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = Nt(l, r, t, a)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = o),
        t
      );
    }
    function ea(e, t, r, n) {
      return (e = Nt(7, e, n, t)), (e.lanes = r), e;
    }
    function Zs(e, t, r, n) {
      return (
        (e = Nt(22, e, n, t)),
        (e.elementType = l0),
        (e.lanes = r),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function Cc(e, t, r) {
      return (e = Nt(6, e, null, t)), (e.lanes = r), e;
    }
    function Ic(e, t, r) {
      return (
        (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function m2(e, t, r, n, a) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = uc(0)),
        (this.expirationTimes = uc(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = uc(0)),
        (this.identifierPrefix = n),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function nm(e, t, r, n, a, o, l, u, i) {
      return (
        (e = new m2(e, t, r, u, i)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Nt(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
          element: n,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Hp(o),
        e
      );
    }
    function h2(e, t, r) {
      var n =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Da,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r,
      };
    }
    function J1(e) {
      if (!e) return xn;
      e = e._reactInternals;
      e: {
        if (ua(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (it(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(k(171));
      }
      if (e.tag === 1) {
        var r = e.type;
        if (it(r)) return Y0(e, r, t);
      }
      return t;
    }
    function b1(e, t, r, n, a, o, l, u, i) {
      return (
        (e = nm(r, n, !0, e, a, o, l, u, i)),
        (e.context = J1(null)),
        (r = e.current),
        (n = be()),
        (a = gn(r)),
        (o = Nr(n, a)),
        (o.callback = t ?? null),
        mn(r, o, a),
        (e.current.lanes = a),
        Dl(e, a, n),
        st(e, n),
        e
      );
    }
    function Ys(e, t, r, n) {
      var a = t.current,
        o = be(),
        l = gn(a);
      return (
        (r = J1(r)),
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Nr(o, l)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        (e = mn(a, t, l)),
        e !== null && (tr(e, a, l, o), ss(e, a, l)),
        l
      );
    }
    function Us(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function e0(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function am(e, t) {
      e0(e, t), (e = e.alternate) && e0(e, t);
    }
    function g2() {
      return null;
    }
    var ex =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function om(e) {
      this._internalRoot = e;
    }
    Js.prototype.render = om.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(k(409));
      Ys(e, t, null, null);
    };
    Js.prototype.unmount = om.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        oa(function () {
          Ys(null, e, null, null);
        }),
          (t[Or] = null);
      }
    };
    function Js(e) {
      this._internalRoot = e;
    }
    Js.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = F0();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < on.length && t !== 0 && t < on[r].priority; r++);
        on.splice(r, 0, e), r === 0 && R0(e);
      }
    };
    function lm(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function bs(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function t0() {}
    function y2(e, t, r, n, a) {
      if (a) {
        if (typeof n == "function") {
          var o = n;
          n = function () {
            var f = Us(l);
            o.call(f);
          };
        }
        var l = b1(t, n, e, 0, null, !1, !1, "", t0);
        return (
          (e._reactRootContainer = l),
          (e[Or] = l.current),
          Sl(e.nodeType === 8 ? e.parentNode : e),
          oa(),
          l
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if (typeof n == "function") {
        var u = n;
        n = function () {
          var f = Us(i);
          u.call(f);
        };
      }
      var i = nm(e, 0, !1, null, null, !1, !1, "", t0);
      return (
        (e._reactRootContainer = i),
        (e[Or] = i.current),
        Sl(e.nodeType === 8 ? e.parentNode : e),
        oa(function () {
          Ys(t, i, r, n);
        }),
        i
      );
    }
    function ed(e, t, r, n, a) {
      var o = r._reactRootContainer;
      if (o) {
        var l = o;
        if (typeof a == "function") {
          var u = a;
          a = function () {
            var i = Us(l);
            u.call(i);
          };
        }
        Ys(t, l, e, a);
      } else l = y2(r, t, e, a, n);
      return Us(l);
    }
    T0 = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = nl(t.pendingLanes);
            r !== 0 &&
              (kp(t, r | 1),
              st(t, pe()),
              !(B & 6) && ((to = pe() + 500), Sn()));
          }
          break;
        case 13:
          oa(function () {
            var n = Ur(e, 1);
            if (n !== null) {
              var a = be();
              tr(n, e, 1, a);
            }
          }),
            am(e, 1);
      }
    };
    Pp = function (e) {
      if (e.tag === 13) {
        var t = Ur(e, 134217728);
        if (t !== null) {
          var r = be();
          tr(t, e, 134217728, r);
        }
        am(e, 134217728);
      }
    };
    M0 = function (e) {
      if (e.tag === 13) {
        var t = gn(e),
          r = Ur(e, t);
        if (r !== null) {
          var n = be();
          tr(r, e, t, n);
        }
        am(e, t);
      }
    };
    F0 = function () {
      return V;
    };
    D0 = function (e, t) {
      var r = V;
      try {
        return (V = e), t();
      } finally {
        V = r;
      }
    };
    Oc = function (e, t, r) {
      switch (t) {
        case "input":
          if ((Dc(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t];
              if (n !== e && n.form === e.form) {
                var a = $s(n);
                if (!a) throw Error(k(90));
                i0(n), Dc(n, a);
              }
            }
          }
          break;
        case "textarea":
          d0(e, r);
          break;
        case "select":
          (t = r.value), t != null && Wa(e, !!r.multiple, t, !1);
      }
    };
    y0 = bp;
    v0 = oa;
    var v2 = { usingClientEntryPoint: !1, Events: [Al, Na, $s, h0, g0, bp] },
      bo = {
        findFiberByHostInstance: Zn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      x2 = {
        bundleType: bo.bundleType,
        version: bo.version,
        rendererPackageName: bo.rendererPackageName,
        rendererConfig: bo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Vr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = w0(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: bo.findFiberByHostInstance || g2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((el = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !el.isDisabled && el.supportsFiber)
    )
      try {
        (Hs = el.inject(x2)), (vr = el);
      } catch {}
    var el;
    St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v2;
    St.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!lm(t)) throw Error(k(200));
      return h2(e, t, null, r);
    };
    St.createRoot = function (e, t) {
      if (!lm(e)) throw Error(k(299));
      var r = !1,
        n = "",
        a = ex;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = nm(e, 1, !1, null, null, r, !1, n, a)),
        (e[Or] = t.current),
        Sl(e.nodeType === 8 ? e.parentNode : e),
        new om(t)
      );
    };
    St.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(k(188))
          : ((e = Object.keys(e).join(",")), Error(k(268, e)));
      return (e = w0(t)), (e = e === null ? null : e.stateNode), e;
    };
    St.flushSync = function (e) {
      return oa(e);
    };
    St.hydrate = function (e, t, r) {
      if (!bs(t)) throw Error(k(200));
      return ed(null, e, t, !0, r);
    };
    St.hydrateRoot = function (e, t, r) {
      if (!lm(e)) throw Error(k(405));
      var n = (r != null && r.hydratedSources) || null,
        a = !1,
        o = "",
        l = ex;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
        (t = b1(t, null, e, 1, r ?? null, a, !1, o, l)),
        (e[Or] = t.current),
        Sl(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          (r = n[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Js(t);
    };
    St.render = function (e, t, r) {
      if (!bs(t)) throw Error(k(200));
      return ed(null, e, t, !1, r);
    };
    St.unmountComponentAtNode = function (e) {
      if (!bs(e)) throw Error(k(40));
      return e._reactRootContainer
        ? (oa(function () {
            ed(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Or] = null);
            });
          }),
          !0)
        : !1;
    };
    St.unstable_batchedUpdates = bp;
    St.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!bs(r)) throw Error(k(200));
      if (e == null || e._reactInternals === void 0) throw Error(k(38));
      return ed(e, t, r, !1, n);
    };
    St.version = "18.2.0-next-9e3b772b8-20220608";
  });
  var ax = Ke((VE, nx) => {
    "use strict";
    function rx() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx);
        } catch (e) {
          console.error(e);
        }
    }
    rx(), (nx.exports = tx());
  });
  var dx = Ke((sx) => {
    "use strict";
    var oo = Kt();
    function D2(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var R2 = typeof Object.is == "function" ? Object.is : D2,
      A2 = oo.useState,
      _2 = oo.useEffect,
      z2 = oo.useLayoutEffect,
      N2 = oo.useDebugValue;
    function B2(e, t) {
      var r = t(),
        n = A2({ inst: { value: r, getSnapshot: t } }),
        a = n[0].inst,
        o = n[1];
      return (
        z2(
          function () {
            (a.value = r), (a.getSnapshot = t), mm(a) && o({ inst: a });
          },
          [e, r, t]
        ),
        _2(
          function () {
            return (
              mm(a) && o({ inst: a }),
              e(function () {
                mm(a) && o({ inst: a });
              })
            );
          },
          [e]
        ),
        N2(r),
        r
      );
    }
    function mm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !R2(e, r);
      } catch {
        return !0;
      }
    }
    function O2(e, t) {
      return t();
    }
    var U2 =
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
        ? O2
        : B2;
    sx.useSyncExternalStore =
      oo.useSyncExternalStore !== void 0 ? oo.useSyncExternalStore : U2;
  });
  var cx = Ke((iM, fx) => {
    "use strict";
    fx.exports = dx();
  });
  var jx = Ke((G) => {
    "use strict";
    function Am(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r; ) {
        var n = (r - 1) >>> 1,
          a = e[n];
        if (0 < pd(a, t)) (e[n] = t), (e[r] = a), (r = n);
        else break e;
      }
    }
    function ar(e) {
      return e.length === 0 ? null : e[0];
    }
    function hd(e) {
      if (e.length === 0) return null;
      var t = e[0],
        r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var n = 0, a = e.length, o = a >>> 1; n < o; ) {
          var l = 2 * (n + 1) - 1,
            u = e[l],
            i = l + 1,
            f = e[i];
          if (0 > pd(u, r))
            i < a && 0 > pd(f, u)
              ? ((e[n] = f), (e[i] = r), (n = i))
              : ((e[n] = u), (e[l] = r), (n = l));
          else if (i < a && 0 > pd(f, r)) (e[n] = f), (e[i] = r), (n = i);
          else break e;
        }
      }
      return t;
    }
    function pd(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Ax = performance),
        (G.unstable_now = function () {
          return Ax.now();
        }))
      : ((Fm = Date),
        (_x = Fm.now()),
        (G.unstable_now = function () {
          return Fm.now() - _x;
        }));
    var Ax,
      Fm,
      _x,
      Sr = [],
      In = [],
      pP = 1,
      Ht = null,
      je = 3,
      gd = !1,
      ia = !1,
      Du = !1,
      Bx = typeof setTimeout == "function" ? setTimeout : null,
      Ox = typeof clearTimeout == "function" ? clearTimeout : null,
      zx = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function _m(e) {
      for (var t = ar(In); t !== null; ) {
        if (t.callback === null) hd(In);
        else if (t.startTime <= e)
          hd(In), (t.sortIndex = t.expirationTime), Am(Sr, t);
        else break;
        t = ar(In);
      }
    }
    function zm(e) {
      if (((Du = !1), _m(e), !ia))
        if (ar(Sr) !== null) (ia = !0), Bm(Nm);
        else {
          var t = ar(In);
          t !== null && Om(zm, t.startTime - e);
        }
    }
    function Nm(e, t) {
      (ia = !1), Du && ((Du = !1), Ox(Ru), (Ru = -1)), (gd = !0);
      var r = je;
      try {
        for (
          _m(t), Ht = ar(Sr);
          Ht !== null && (!(Ht.expirationTime > t) || (e && !Vx()));

        ) {
          var n = Ht.callback;
          if (typeof n == "function") {
            (Ht.callback = null), (je = Ht.priorityLevel);
            var a = n(Ht.expirationTime <= t);
            (t = G.unstable_now()),
              typeof a == "function"
                ? (Ht.callback = a)
                : Ht === ar(Sr) && hd(Sr),
              _m(t);
          } else hd(Sr);
          Ht = ar(Sr);
        }
        if (Ht !== null) var o = !0;
        else {
          var l = ar(In);
          l !== null && Om(zm, l.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (Ht = null), (je = r), (gd = !1);
      }
    }
    var yd = !1,
      md = null,
      Ru = -1,
      Ux = 5,
      Hx = -1;
    function Vx() {
      return !(G.unstable_now() - Hx < Ux);
    }
    function Dm() {
      if (md !== null) {
        var e = G.unstable_now();
        Hx = e;
        var t = !0;
        try {
          t = md(!0, e);
        } finally {
          t ? Fu() : ((yd = !1), (md = null));
        }
      } else yd = !1;
    }
    var Fu;
    typeof zx == "function"
      ? (Fu = function () {
          zx(Dm);
        })
      : typeof MessageChannel < "u"
      ? ((Rm = new MessageChannel()),
        (Nx = Rm.port2),
        (Rm.port1.onmessage = Dm),
        (Fu = function () {
          Nx.postMessage(null);
        }))
      : (Fu = function () {
          Bx(Dm, 0);
        });
    var Rm, Nx;
    function Bm(e) {
      (md = e), yd || ((yd = !0), Fu());
    }
    function Om(e, t) {
      Ru = Bx(function () {
        e(G.unstable_now());
      }, t);
    }
    G.unstable_IdlePriority = 5;
    G.unstable_ImmediatePriority = 1;
    G.unstable_LowPriority = 4;
    G.unstable_NormalPriority = 3;
    G.unstable_Profiling = null;
    G.unstable_UserBlockingPriority = 2;
    G.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    G.unstable_continueExecution = function () {
      ia || gd || ((ia = !0), Bm(Nm));
    };
    G.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Ux = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    G.unstable_getCurrentPriorityLevel = function () {
      return je;
    };
    G.unstable_getFirstCallbackNode = function () {
      return ar(Sr);
    };
    G.unstable_next = function (e) {
      switch (je) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = je;
      }
      var r = je;
      je = t;
      try {
        return e();
      } finally {
        je = r;
      }
    };
    G.unstable_pauseExecution = function () {};
    G.unstable_requestPaint = function () {};
    G.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var r = je;
      je = e;
      try {
        return t();
      } finally {
        je = r;
      }
    };
    G.unstable_scheduleCallback = function (e, t, r) {
      var n = G.unstable_now();
      switch (
        (typeof r == "object" && r !== null
          ? ((r = r.delay), (r = typeof r == "number" && 0 < r ? n + r : n))
          : (r = n),
        e)
      ) {
        case 1:
          var a = -1;
          break;
        case 2:
          a = 250;
          break;
        case 5:
          a = 1073741823;
          break;
        case 4:
          a = 1e4;
          break;
        default:
          a = 5e3;
      }
      return (
        (a = r + a),
        (e = {
          id: pP++,
          callback: t,
          priorityLevel: e,
          startTime: r,
          expirationTime: a,
          sortIndex: -1,
        }),
        r > n
          ? ((e.sortIndex = r),
            Am(In, e),
            ar(Sr) === null &&
              e === ar(In) &&
              (Du ? (Ox(Ru), (Ru = -1)) : (Du = !0), Om(zm, r - n)))
          : ((e.sortIndex = a), Am(Sr, e), ia || gd || ((ia = !0), Bm(Nm))),
        e
      );
    };
    G.unstable_shouldYield = Vx;
    G.unstable_wrapCallback = function (e) {
      var t = je;
      return function () {
        var r = je;
        je = t;
        try {
          return e.apply(this, arguments);
        } finally {
          je = r;
        }
      };
    };
  });
  var $x = Ke((RM, Wx) => {
    "use strict";
    Wx.exports = jx();
  });
  var KS = Ke((Tt) => {
    "use strict";
    var mP = Kt(),
      Pt = $x();
    function P(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var YL = new Set(),
      ei = {};
    function wa(e, t) {
      Fo(e, t), Fo(e + "Capture", t);
    }
    function Fo(e, t) {
      for (ei[e] = t, e = 0; e < t.length; e++) YL.add(t[e]);
    }
    var Qr = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      uh = Object.prototype.hasOwnProperty,
      hP =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Gx = {},
      qx = {};
    function gP(e) {
      return uh.call(qx, e)
        ? !0
        : uh.call(Gx, e)
        ? !1
        : hP.test(e)
        ? (qx[e] = !0)
        : ((Gx[e] = !0), !1);
    }
    function yP(e, t, r, n) {
      if (r !== null && r.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return n
            ? !1
            : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function vP(e, t, r, n) {
      if (t === null || typeof t > "u" || yP(e, t, r, n)) return !0;
      if (n) return !1;
      if (r !== null)
        switch (r.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function nt(e, t, r, n, a, o, l) {
      (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = n),
        (this.attributeNamespace = a),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = l);
    }
    var ze = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        ze[e] = new nt(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ze[t] = new nt(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      ze[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ze[e] = new nt(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ze[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ze[e] = new nt(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      ze[e] = new nt(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ze[e] = new nt(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      ze[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var bh = /[\-:]([a-z])/g;
    function eg(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(bh, eg);
        ze[t] = new nt(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(bh, eg);
        ze[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(bh, eg);
      ze[t] = new nt(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      ze[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ze.xlinkHref = new nt(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ze[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function tg(e, t, r, n) {
      var a = ze.hasOwnProperty(t) ? ze[t] : null;
      (a !== null
        ? a.type !== 0
        : n ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (vP(t, r, a, n) && (r = null),
        n || a === null
          ? gP(t) &&
            (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
          : a.mustUseProperty
          ? (e[a.propertyName] = r === null ? (a.type === 3 ? !1 : "") : r)
          : ((t = a.attributeName),
            (n = a.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((a = a.type),
                (r = a === 3 || (a === 4 && r === !0) ? "" : "" + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
    }
    var Yr = mP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      vd = Symbol.for("react.element"),
      co = Symbol.for("react.portal"),
      po = Symbol.for("react.fragment"),
      rg = Symbol.for("react.strict_mode"),
      ih = Symbol.for("react.profiler"),
      JL = Symbol.for("react.provider"),
      bL = Symbol.for("react.context"),
      ng = Symbol.for("react.forward_ref"),
      sh = Symbol.for("react.suspense"),
      dh = Symbol.for("react.suspense_list"),
      ag = Symbol.for("react.memo"),
      Pn = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var ew = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Qx = Symbol.iterator;
    function Au(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Qx && e[Qx]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var ie = Object.assign,
      Um;
    function Vu(e) {
      if (Um === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          Um = (t && t[1]) || "";
        }
      return (
        `
` +
        Um +
        e
      );
    }
    var Hm = !1;
    function Vm(e, t) {
      if (!e || Hm) return "";
      Hm = !0;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (f) {
              var n = f;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (f) {
              n = f;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (f) {
            n = f;
          }
          e();
        }
      } catch (f) {
        if (f && n && typeof f.stack == "string") {
          for (
            var a = f.stack.split(`
`),
              o = n.stack.split(`
`),
              l = a.length - 1,
              u = o.length - 1;
            1 <= l && 0 <= u && a[l] !== o[u];

          )
            u--;
          for (; 1 <= l && 0 <= u; l--, u--)
            if (a[l] !== o[u]) {
              if (l !== 1 || u !== 1)
                do
                  if ((l--, u--, 0 > u || a[l] !== o[u])) {
                    var i =
                      `
` + a[l].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        i.includes("<anonymous>") &&
                        (i = i.replace("<anonymous>", e.displayName)),
                      i
                    );
                  }
                while (1 <= l && 0 <= u);
              break;
            }
        }
      } finally {
        (Hm = !1), (Error.prepareStackTrace = r);
      }
      return (e = e ? e.displayName || e.name : "") ? Vu(e) : "";
    }
    function xP(e) {
      switch (e.tag) {
        case 5:
          return Vu(e.type);
        case 16:
          return Vu("Lazy");
        case 13:
          return Vu("Suspense");
        case 19:
          return Vu("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = Vm(e.type, !1)), e;
        case 11:
          return (e = Vm(e.type.render, !1)), e;
        case 1:
          return (e = Vm(e.type, !0)), e;
        default:
          return "";
      }
    }
    function fh(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case po:
          return "Fragment";
        case co:
          return "Portal";
        case ih:
          return "Profiler";
        case rg:
          return "StrictMode";
        case sh:
          return "Suspense";
        case dh:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case bL:
            return (e.displayName || "Context") + ".Consumer";
          case JL:
            return (e._context.displayName || "Context") + ".Provider";
          case ng:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case ag:
            return (
              (t = e.displayName || null), t !== null ? t : fh(e.type) || "Memo"
            );
          case Pn:
            (t = e._payload), (e = e._init);
            try {
              return fh(e(t));
            } catch {}
        }
      return null;
    }
    function LP(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return fh(t);
        case 8:
          return t === rg ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function Hn(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function tw(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function wP(e) {
      var t = tw(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof r < "u" &&
        typeof r.get == "function" &&
        typeof r.set == "function"
      ) {
        var a = r.get,
          o = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return a.call(this);
            },
            set: function (l) {
              (n = "" + l), o.call(this, l);
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (l) {
              n = "" + l;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function xd(e) {
      e._valueTracker || (e._valueTracker = wP(e));
    }
    function rw(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var r = t.getValue(),
        n = "";
      return (
        e && (n = tw(e) ? (e.checked ? "true" : "false") : e.value),
        (e = n),
        e !== r ? (t.setValue(e), !0) : !1
      );
    }
    function Qd(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function ch(e, t) {
      var r = t.checked;
      return ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked,
      });
    }
    function Kx(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
      (r = Hn(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        });
    }
    function nw(e, t) {
      (t = t.checked), t != null && tg(e, "checked", t, !1);
    }
    function ph(e, t) {
      nw(e, t);
      var r = Hn(t.value),
        n = t.type;
      if (r != null)
        n === "number"
          ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
          : e.value !== "" + r && (e.value = "" + r);
      else if (n === "submit" || n === "reset") {
        e.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value")
        ? mh(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && mh(e, t.type, Hn(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Xx(e, t, r) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var n = t.type;
        if (
          !(
            (n !== "submit" && n !== "reset") ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          r || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r = e.name),
        r !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        r !== "" && (e.name = r);
    }
    function mh(e, t, r) {
      (t !== "number" || Qd(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    var ju = Array.isArray;
    function Io(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
        for (r = 0; r < e.length; r++)
          (a = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== a && (e[r].selected = a),
            a && n && (e[r].defaultSelected = !0);
      } else {
        for (r = "" + Hn(r), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === r) {
            (e[a].selected = !0), n && (e[a].defaultSelected = !0);
            return;
          }
          t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function hh(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
      return ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function Zx(e, t) {
      var r = t.value;
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(P(92));
          if (ju(r)) {
            if (1 < r.length) throw Error(P(93));
            r = r[0];
          }
          t = r;
        }
        t == null && (t = ""), (r = t);
      }
      e._wrapperState = { initialValue: Hn(r) };
    }
    function aw(e, t) {
      var r = Hn(t.value),
        n = Hn(t.defaultValue);
      r != null &&
        ((r = "" + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = "" + n);
    }
    function Yx(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function ow(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function gh(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? ow(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Ld,
      lw = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, r, n, a) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, r, n, a);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            Ld = Ld || document.createElement("div"),
              Ld.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = Ld.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function ti(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Gu = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      SP = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Gu).forEach(function (e) {
      SP.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gu[t] = Gu[e]);
      });
    });
    function uw(e, t, r) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : r ||
          typeof t != "number" ||
          t === 0 ||
          (Gu.hasOwnProperty(e) && Gu[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function iw(e, t) {
      e = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf("--") === 0,
            a = uw(r, t[r], n);
          r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, a) : (e[r] = a);
        }
    }
    var CP = ie(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function yh(e, t) {
      if (t) {
        if (CP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(P(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(P(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(P(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(P(62));
      }
    }
    function vh(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var xh = null;
    function og(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Lh = null,
      ko = null,
      Po = null;
    function Jx(e) {
      if ((e = xi(e))) {
        if (typeof Lh != "function") throw Error(P(280));
        var t = e.stateNode;
        t && ((t = Sf(t)), Lh(e.stateNode, e.type, t));
      }
    }
    function sw(e) {
      ko ? (Po ? Po.push(e) : (Po = [e])) : (ko = e);
    }
    function dw() {
      if (ko) {
        var e = ko,
          t = Po;
        if (((Po = ko = null), Jx(e), t))
          for (e = 0; e < t.length; e++) Jx(t[e]);
      }
    }
    function fw(e, t) {
      return e(t);
    }
    function cw() {}
    var jm = !1;
    function pw(e, t, r) {
      if (jm) return e(t, r);
      jm = !0;
      try {
        return fw(e, t, r);
      } finally {
        (jm = !1), (ko !== null || Po !== null) && (cw(), dw());
      }
    }
    function ri(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var n = Sf(r);
      if (n === null) return null;
      r = n[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (n = !n.disabled) ||
            ((e = e.type),
            (n = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !n);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (r && typeof r != "function") throw Error(P(231, t, typeof r));
      return r;
    }
    var wh = !1;
    if (Qr)
      try {
        (so = {}),
          Object.defineProperty(so, "passive", {
            get: function () {
              wh = !0;
            },
          }),
          window.addEventListener("test", so, so),
          window.removeEventListener("test", so, so);
      } catch {
        wh = !1;
      }
    var so;
    function IP(e, t, r, n, a, o, l, u, i) {
      var f = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, f);
      } catch (p) {
        this.onError(p);
      }
    }
    var qu = !1,
      Kd = null,
      Xd = !1,
      Sh = null,
      kP = {
        onError: function (e) {
          (qu = !0), (Kd = e);
        },
      };
    function PP(e, t, r, n, a, o, l, u, i) {
      (qu = !1), (Kd = null), IP.apply(kP, arguments);
    }
    function EP(e, t, r, n, a, o, l, u, i) {
      if ((PP.apply(this, arguments), qu)) {
        if (qu) {
          var f = Kd;
          (qu = !1), (Kd = null);
        } else throw Error(P(198));
        Xd || ((Xd = !0), (Sh = f));
      }
    }
    function Sa(e) {
      var t = e,
        r = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? r : null;
    }
    function mw(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function bx(e) {
      if (Sa(e) !== e) throw Error(P(188));
    }
    function TP(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Sa(e)), t === null)) throw Error(P(188));
        return t !== e ? null : e;
      }
      for (var r = e, n = t; ; ) {
        var a = r.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((n = a.return), n !== null)) {
            r = n;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o; ) {
            if (o === r) return bx(a), e;
            if (o === n) return bx(a), t;
            o = o.sibling;
          }
          throw Error(P(188));
        }
        if (r.return !== n.return) (r = a), (n = o);
        else {
          for (var l = !1, u = a.child; u; ) {
            if (u === r) {
              (l = !0), (r = a), (n = o);
              break;
            }
            if (u === n) {
              (l = !0), (n = a), (r = o);
              break;
            }
            u = u.sibling;
          }
          if (!l) {
            for (u = o.child; u; ) {
              if (u === r) {
                (l = !0), (r = o), (n = a);
                break;
              }
              if (u === n) {
                (l = !0), (n = o), (r = a);
                break;
              }
              u = u.sibling;
            }
            if (!l) throw Error(P(189));
          }
        }
        if (r.alternate !== n) throw Error(P(190));
      }
      if (r.tag !== 3) throw Error(P(188));
      return r.stateNode.current === r ? e : t;
    }
    function hw(e) {
      return (e = TP(e)), e !== null ? gw(e) : null;
    }
    function gw(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = gw(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var yw = Pt.unstable_scheduleCallback,
      eL = Pt.unstable_cancelCallback,
      MP = Pt.unstable_shouldYield,
      FP = Pt.unstable_requestPaint,
      he = Pt.unstable_now,
      DP = Pt.unstable_getCurrentPriorityLevel,
      lg = Pt.unstable_ImmediatePriority,
      vw = Pt.unstable_UserBlockingPriority,
      Zd = Pt.unstable_NormalPriority,
      RP = Pt.unstable_LowPriority,
      xw = Pt.unstable_IdlePriority,
      vf = null,
      Pr = null;
    function AP(e) {
      if (Pr && typeof Pr.onCommitFiberRoot == "function")
        try {
          Pr.onCommitFiberRoot(vf, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var sr = Math.clz32 ? Math.clz32 : NP,
      _P = Math.log,
      zP = Math.LN2;
    function NP(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((_P(e) / zP) | 0)) | 0;
    }
    var wd = 64,
      Sd = 4194304;
    function Wu(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Yd(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var n = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = r & 268435455;
      if (l !== 0) {
        var u = l & ~a;
        u !== 0 ? (n = Wu(u)) : ((o &= l), o !== 0 && (n = Wu(o)));
      } else (l = r & ~a), l !== 0 ? (n = Wu(l)) : o !== 0 && (n = Wu(o));
      if (n === 0) return 0;
      if (
        t !== 0 &&
        t !== n &&
        !(t & a) &&
        ((a = n & -n),
        (o = t & -t),
        a >= o || (a === 16 && (o & 4194240) !== 0))
      )
        return t;
      if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= n; 0 < t; )
          (r = 31 - sr(t)), (a = 1 << r), (n |= e[r]), (t &= ~a);
      return n;
    }
    function BP(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function OP(e, t) {
      for (
        var r = e.suspendedLanes,
          n = e.pingedLanes,
          a = e.expirationTimes,
          o = e.pendingLanes;
        0 < o;

      ) {
        var l = 31 - sr(o),
          u = 1 << l,
          i = a[l];
        i === -1
          ? (!(u & r) || u & n) && (a[l] = BP(u, t))
          : i <= t && (e.expiredLanes |= u),
          (o &= ~u);
      }
    }
    function Ch(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function Lw() {
      var e = wd;
      return (wd <<= 1), !(wd & 4194240) && (wd = 64), e;
    }
    function Wm(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function yi(e, t, r) {
      (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - sr(t)),
        (e[t] = r);
    }
    function UP(e, t) {
      var r = e.pendingLanes & ~t;
      (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
      var n = e.eventTimes;
      for (e = e.expirationTimes; 0 < r; ) {
        var a = 31 - sr(r),
          o = 1 << a;
        (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~o);
      }
    }
    function ug(e, t) {
      var r = (e.entangledLanes |= t);
      for (e = e.entanglements; r; ) {
        var n = 31 - sr(r),
          a = 1 << n;
        (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
      }
    }
    var j = 0;
    function ww(e) {
      return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Sw,
      ig,
      Cw,
      Iw,
      kw,
      Ih = !1,
      Cd = [],
      Rn = null,
      An = null,
      _n = null,
      ni = new Map(),
      ai = new Map(),
      Tn = [],
      HP =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function tL(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Rn = null;
          break;
        case "dragenter":
        case "dragleave":
          An = null;
          break;
        case "mouseover":
        case "mouseout":
          _n = null;
          break;
        case "pointerover":
        case "pointerout":
          ni.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ai.delete(t.pointerId);
      }
    }
    function _u(e, t, r, n, a, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = {
            blockedOn: t,
            domEventName: r,
            eventSystemFlags: n,
            nativeEvent: o,
            targetContainers: [a],
          }),
          t !== null && ((t = xi(t)), t !== null && ig(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          a !== null && t.indexOf(a) === -1 && t.push(a),
          e);
    }
    function VP(e, t, r, n, a) {
      switch (t) {
        case "focusin":
          return (Rn = _u(Rn, e, t, r, n, a)), !0;
        case "dragenter":
          return (An = _u(An, e, t, r, n, a)), !0;
        case "mouseover":
          return (_n = _u(_n, e, t, r, n, a)), !0;
        case "pointerover":
          var o = a.pointerId;
          return ni.set(o, _u(ni.get(o) || null, e, t, r, n, a)), !0;
        case "gotpointercapture":
          return (
            (o = a.pointerId),
            ai.set(o, _u(ai.get(o) || null, e, t, r, n, a)),
            !0
          );
      }
      return !1;
    }
    function Pw(e) {
      var t = fa(e.target);
      if (t !== null) {
        var r = Sa(t);
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = mw(r)), t !== null)) {
              (e.blockedOn = t),
                kw(e.priority, function () {
                  Cw(r);
                });
              return;
            }
          } else if (
            t === 3 &&
            r.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Bd(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = kh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var n = new r.constructor(r.type, r);
          (xh = n), r.target.dispatchEvent(n), (xh = null);
        } else return (t = xi(r)), t !== null && ig(t), (e.blockedOn = r), !1;
        t.shift();
      }
      return !0;
    }
    function rL(e, t, r) {
      Bd(e) && r.delete(t);
    }
    function jP() {
      (Ih = !1),
        Rn !== null && Bd(Rn) && (Rn = null),
        An !== null && Bd(An) && (An = null),
        _n !== null && Bd(_n) && (_n = null),
        ni.forEach(rL),
        ai.forEach(rL);
    }
    function zu(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Ih ||
          ((Ih = !0),
          Pt.unstable_scheduleCallback(Pt.unstable_NormalPriority, jP)));
    }
    function oi(e) {
      function t(a) {
        return zu(a, e);
      }
      if (0 < Cd.length) {
        zu(Cd[0], e);
        for (var r = 1; r < Cd.length; r++) {
          var n = Cd[r];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      for (
        Rn !== null && zu(Rn, e),
          An !== null && zu(An, e),
          _n !== null && zu(_n, e),
          ni.forEach(t),
          ai.forEach(t),
          r = 0;
        r < Tn.length;
        r++
      )
        (n = Tn[r]), n.blockedOn === e && (n.blockedOn = null);
      for (; 0 < Tn.length && ((r = Tn[0]), r.blockedOn === null); )
        Pw(r), r.blockedOn === null && Tn.shift();
    }
    var Eo = Yr.ReactCurrentBatchConfig,
      Jd = !0;
    function WP(e, t, r, n) {
      var a = j,
        o = Eo.transition;
      Eo.transition = null;
      try {
        (j = 1), sg(e, t, r, n);
      } finally {
        (j = a), (Eo.transition = o);
      }
    }
    function $P(e, t, r, n) {
      var a = j,
        o = Eo.transition;
      Eo.transition = null;
      try {
        (j = 4), sg(e, t, r, n);
      } finally {
        (j = a), (Eo.transition = o);
      }
    }
    function sg(e, t, r, n) {
      if (Jd) {
        var a = kh(e, t, r, n);
        if (a === null) Zm(e, t, n, bd, r), tL(e, n);
        else if (VP(a, e, t, r, n)) n.stopPropagation();
        else if ((tL(e, n), t & 4 && -1 < HP.indexOf(e))) {
          for (; a !== null; ) {
            var o = xi(a);
            if (
              (o !== null && Sw(o),
              (o = kh(e, t, r, n)),
              o === null && Zm(e, t, n, bd, r),
              o === a)
            )
              break;
            a = o;
          }
          a !== null && n.stopPropagation();
        } else Zm(e, t, n, null, r);
      }
    }
    var bd = null;
    function kh(e, t, r, n) {
      if (((bd = null), (e = og(n)), (e = fa(e)), e !== null))
        if (((t = Sa(e)), t === null)) e = null;
        else if (((r = t.tag), r === 13)) {
          if (((e = mw(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return (bd = e), null;
    }
    function Ew(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (DP()) {
            case lg:
              return 1;
            case vw:
              return 4;
            case Zd:
            case RP:
              return 16;
            case xw:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Fn = null,
      dg = null,
      Od = null;
    function Tw() {
      if (Od) return Od;
      var e,
        t = dg,
        r = t.length,
        n,
        a = "value" in Fn ? Fn.value : Fn.textContent,
        o = a.length;
      for (e = 0; e < r && t[e] === a[e]; e++);
      var l = r - e;
      for (n = 1; n <= l && t[r - n] === a[o - n]; n++);
      return (Od = a.slice(e, 1 < n ? 1 - n : void 0));
    }
    function Ud(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Id() {
      return !0;
    }
    function nL() {
      return !1;
    }
    function Et(e) {
      function t(r, n, a, o, l) {
        (this._reactName = r),
          (this._targetInst = a),
          (this.type = n),
          (this.nativeEvent = o),
          (this.target = l),
          (this.currentTarget = null);
        for (var u in e)
          e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(o) : o[u]));
        return (
          (this.isDefaultPrevented = (
            o.defaultPrevented != null
              ? o.defaultPrevented
              : o.returnValue === !1
          )
            ? Id
            : nL),
          (this.isPropagationStopped = nL),
          this
        );
      }
      return (
        ie(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
              (r.preventDefault
                ? r.preventDefault()
                : typeof r.returnValue != "unknown" && (r.returnValue = !1),
              (this.isDefaultPrevented = Id));
          },
          stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
              (r.stopPropagation
                ? r.stopPropagation()
                : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
              (this.isPropagationStopped = Id));
          },
          persist: function () {},
          isPersistent: Id,
        }),
        t
      );
    }
    var Bo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      fg = Et(Bo),
      vi = ie({}, Bo, { view: 0, detail: 0 }),
      GP = Et(vi),
      $m,
      Gm,
      Nu,
      xf = ie({}, vi, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: cg,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== Nu &&
                (Nu && e.type === "mousemove"
                  ? (($m = e.screenX - Nu.screenX),
                    (Gm = e.screenY - Nu.screenY))
                  : (Gm = $m = 0),
                (Nu = e)),
              $m);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Gm;
        },
      }),
      aL = Et(xf),
      qP = ie({}, xf, { dataTransfer: 0 }),
      QP = Et(qP),
      KP = ie({}, vi, { relatedTarget: 0 }),
      qm = Et(KP),
      XP = ie({}, Bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ZP = Et(XP),
      YP = ie({}, Bo, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      JP = Et(YP),
      bP = ie({}, Bo, { data: 0 }),
      oL = Et(bP),
      e3 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      t3 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      r3 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function n3(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = r3[e])
        ? !!t[e]
        : !1;
    }
    function cg() {
      return n3;
    }
    var a3 = ie({}, vi, {
        key: function (e) {
          if (e.key) {
            var t = e3[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = Ud(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? t3[e.keyCode] || "Unidentified"
            : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: cg,
        charCode: function (e) {
          return e.type === "keypress" ? Ud(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? Ud(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
        },
      }),
      o3 = Et(a3),
      l3 = ie({}, xf, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      lL = Et(l3),
      u3 = ie({}, vi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: cg,
      }),
      i3 = Et(u3),
      s3 = ie({}, Bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      d3 = Et(s3),
      f3 = ie({}, xf, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      c3 = Et(f3),
      p3 = [9, 13, 27, 32],
      pg = Qr && "CompositionEvent" in window,
      Qu = null;
    Qr && "documentMode" in document && (Qu = document.documentMode);
    var m3 = Qr && "TextEvent" in window && !Qu,
      Mw = Qr && (!pg || (Qu && 8 < Qu && 11 >= Qu)),
      uL = " ",
      iL = !1;
    function Fw(e, t) {
      switch (e) {
        case "keyup":
          return p3.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Dw(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var mo = !1;
    function h3(e, t) {
      switch (e) {
        case "compositionend":
          return Dw(t);
        case "keypress":
          return t.which !== 32 ? null : ((iL = !0), uL);
        case "textInput":
          return (e = t.data), e === uL && iL ? null : e;
        default:
          return null;
      }
    }
    function g3(e, t) {
      if (mo)
        return e === "compositionend" || (!pg && Fw(e, t))
          ? ((e = Tw()), (Od = dg = Fn = null), (mo = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Mw && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var y3 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function sL(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!y3[e.type] : t === "textarea";
    }
    function Rw(e, t, r, n) {
      sw(n),
        (t = ef(t, "onChange")),
        0 < t.length &&
          ((r = new fg("onChange", "change", null, r, n)),
          e.push({ event: r, listeners: t }));
    }
    var Ku = null,
      li = null;
    function v3(e) {
      Ww(e, 0);
    }
    function Lf(e) {
      var t = yo(e);
      if (rw(t)) return e;
    }
    function x3(e, t) {
      if (e === "change") return t;
    }
    var Aw = !1;
    Qr &&
      (Qr
        ? ((Pd = "oninput" in document),
          Pd ||
            ((Qm = document.createElement("div")),
            Qm.setAttribute("oninput", "return;"),
            (Pd = typeof Qm.oninput == "function")),
          (kd = Pd))
        : (kd = !1),
      (Aw = kd && (!document.documentMode || 9 < document.documentMode)));
    var kd, Pd, Qm;
    function dL() {
      Ku && (Ku.detachEvent("onpropertychange", _w), (li = Ku = null));
    }
    function _w(e) {
      if (e.propertyName === "value" && Lf(li)) {
        var t = [];
        Rw(t, li, e, og(e)), pw(v3, t);
      }
    }
    function L3(e, t, r) {
      e === "focusin"
        ? (dL(), (Ku = t), (li = r), Ku.attachEvent("onpropertychange", _w))
        : e === "focusout" && dL();
    }
    function w3(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Lf(li);
    }
    function S3(e, t) {
      if (e === "click") return Lf(t);
    }
    function C3(e, t) {
      if (e === "input" || e === "change") return Lf(t);
    }
    function I3(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var fr = typeof Object.is == "function" ? Object.is : I3;
    function ui(e, t) {
      if (fr(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var r = Object.keys(e),
        n = Object.keys(t);
      if (r.length !== n.length) return !1;
      for (n = 0; n < r.length; n++) {
        var a = r[n];
        if (!uh.call(t, a) || !fr(e[a], t[a])) return !1;
      }
      return !0;
    }
    function fL(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function cL(e, t) {
      var r = fL(e);
      e = 0;
      for (var n; r; ) {
        if (r.nodeType === 3) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = fL(r);
      }
    }
    function zw(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? zw(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function Nw() {
      for (var e = window, t = Qd(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == "string";
        } catch {
          r = !1;
        }
        if (r) e = t.contentWindow;
        else break;
        t = Qd(e.document);
      }
      return t;
    }
    function mg(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function k3(e) {
      var t = Nw(),
        r = e.focusedElem,
        n = e.selectionRange;
      if (
        t !== r &&
        r &&
        r.ownerDocument &&
        zw(r.ownerDocument.documentElement, r)
      ) {
        if (n !== null && mg(r)) {
          if (
            ((t = n.start),
            (e = n.end),
            e === void 0 && (e = t),
            "selectionStart" in r)
          )
            (r.selectionStart = t),
              (r.selectionEnd = Math.min(e, r.value.length));
          else if (
            ((e =
              ((t = r.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var a = r.textContent.length,
              o = Math.min(n.start, a);
            (n = n.end === void 0 ? o : Math.min(n.end, a)),
              !e.extend && o > n && ((a = n), (n = o), (o = a)),
              (a = cL(r, o));
            var l = cL(r, n);
            a &&
              l &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== a.node ||
                e.anchorOffset !== a.offset ||
                e.focusNode !== l.node ||
                e.focusOffset !== l.offset) &&
              ((t = t.createRange()),
              t.setStart(a.node, a.offset),
              e.removeAllRanges(),
              o > n
                ? (e.addRange(t), e.extend(l.node, l.offset))
                : (t.setEnd(l.node, l.offset), e.addRange(t)));
          }
        }
        for (t = [], e = r; (e = e.parentNode); )
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof r.focus == "function" && r.focus(), r = 0;
          r < t.length;
          r++
        )
          (e = t[r]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var P3 = Qr && "documentMode" in document && 11 >= document.documentMode,
      ho = null,
      Ph = null,
      Xu = null,
      Eh = !1;
    function pL(e, t, r) {
      var n =
        r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      Eh ||
        ho == null ||
        ho !== Qd(n) ||
        ((n = ho),
        "selectionStart" in n && mg(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = (
              (n.ownerDocument && n.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (Xu && ui(Xu, n)) ||
          ((Xu = n),
          (n = ef(Ph, "onSelect")),
          0 < n.length &&
            ((t = new fg("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: n }),
            (t.target = ho))));
    }
    function Ed(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var go = {
        animationend: Ed("Animation", "AnimationEnd"),
        animationiteration: Ed("Animation", "AnimationIteration"),
        animationstart: Ed("Animation", "AnimationStart"),
        transitionend: Ed("Transition", "TransitionEnd"),
      },
      Km = {},
      Bw = {};
    Qr &&
      ((Bw = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete go.animationend.animation,
        delete go.animationiteration.animation,
        delete go.animationstart.animation),
      "TransitionEvent" in window || delete go.transitionend.transition);
    function wf(e) {
      if (Km[e]) return Km[e];
      if (!go[e]) return e;
      var t = go[e],
        r;
      for (r in t) if (t.hasOwnProperty(r) && r in Bw) return (Km[e] = t[r]);
      return e;
    }
    var Ow = wf("animationend"),
      Uw = wf("animationiteration"),
      Hw = wf("animationstart"),
      Vw = wf("transitionend"),
      jw = new Map(),
      mL =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function jn(e, t) {
      jw.set(e, t), wa(t, [e]);
    }
    for (Td = 0; Td < mL.length; Td++)
      (Md = mL[Td]),
        (hL = Md.toLowerCase()),
        (gL = Md[0].toUpperCase() + Md.slice(1)),
        jn(hL, "on" + gL);
    var Md, hL, gL, Td;
    jn(Ow, "onAnimationEnd");
    jn(Uw, "onAnimationIteration");
    jn(Hw, "onAnimationStart");
    jn("dblclick", "onDoubleClick");
    jn("focusin", "onFocus");
    jn("focusout", "onBlur");
    jn(Vw, "onTransitionEnd");
    Fo("onMouseEnter", ["mouseout", "mouseover"]);
    Fo("onMouseLeave", ["mouseout", "mouseover"]);
    Fo("onPointerEnter", ["pointerout", "pointerover"]);
    Fo("onPointerLeave", ["pointerout", "pointerover"]);
    wa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    );
    wa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    wa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    wa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    wa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    wa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var $u =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      E3 = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat($u)
      );
    function yL(e, t, r) {
      var n = e.type || "unknown-event";
      (e.currentTarget = r), EP(n, t, void 0, e), (e.currentTarget = null);
    }
    function Ww(e, t) {
      t = (t & 4) !== 0;
      for (var r = 0; r < e.length; r++) {
        var n = e[r],
          a = n.event;
        n = n.listeners;
        e: {
          var o = void 0;
          if (t)
            for (var l = n.length - 1; 0 <= l; l--) {
              var u = n[l],
                i = u.instance,
                f = u.currentTarget;
              if (((u = u.listener), i !== o && a.isPropagationStopped()))
                break e;
              yL(a, u, f), (o = i);
            }
          else
            for (l = 0; l < n.length; l++) {
              if (
                ((u = n[l]),
                (i = u.instance),
                (f = u.currentTarget),
                (u = u.listener),
                i !== o && a.isPropagationStopped())
              )
                break e;
              yL(a, u, f), (o = i);
            }
        }
      }
      if (Xd) throw ((e = Sh), (Xd = !1), (Sh = null), e);
    }
    function J(e, t) {
      var r = t[Rh];
      r === void 0 && (r = t[Rh] = new Set());
      var n = e + "__bubble";
      r.has(n) || ($w(t, e, 2, !1), r.add(n));
    }
    function Xm(e, t, r) {
      var n = 0;
      t && (n |= 4), $w(r, e, n, t);
    }
    var Fd = "_reactListening" + Math.random().toString(36).slice(2);
    function ii(e) {
      if (!e[Fd]) {
        (e[Fd] = !0),
          YL.forEach(function (r) {
            r !== "selectionchange" &&
              (E3.has(r) || Xm(r, !1, e), Xm(r, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Fd] || ((t[Fd] = !0), Xm("selectionchange", !1, t));
      }
    }
    function $w(e, t, r, n) {
      switch (Ew(t)) {
        case 1:
          var a = WP;
          break;
        case 4:
          a = $P;
          break;
        default:
          a = sg;
      }
      (r = a.bind(null, t, r, e)),
        (a = void 0),
        !wh ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (a = !0),
        n
          ? a !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: a })
            : e.addEventListener(t, r, !0)
          : a !== void 0
          ? e.addEventListener(t, r, { passive: a })
          : e.addEventListener(t, r, !1);
    }
    function Zm(e, t, r, n, a) {
      var o = n;
      if (!(t & 1) && !(t & 2) && n !== null)
        e: for (;;) {
          if (n === null) return;
          var l = n.tag;
          if (l === 3 || l === 4) {
            var u = n.stateNode.containerInfo;
            if (u === a || (u.nodeType === 8 && u.parentNode === a)) break;
            if (l === 4)
              for (l = n.return; l !== null; ) {
                var i = l.tag;
                if (
                  (i === 3 || i === 4) &&
                  ((i = l.stateNode.containerInfo),
                  i === a || (i.nodeType === 8 && i.parentNode === a))
                )
                  return;
                l = l.return;
              }
            for (; u !== null; ) {
              if (((l = fa(u)), l === null)) return;
              if (((i = l.tag), i === 5 || i === 6)) {
                n = o = l;
                continue e;
              }
              u = u.parentNode;
            }
          }
          n = n.return;
        }
      pw(function () {
        var f = o,
          p = og(r),
          h = [];
        e: {
          var m = jw.get(e);
          if (m !== void 0) {
            var y = fg,
              x = e;
            switch (e) {
              case "keypress":
                if (Ud(r) === 0) break e;
              case "keydown":
              case "keyup":
                y = o3;
                break;
              case "focusin":
                (x = "focus"), (y = qm);
                break;
              case "focusout":
                (x = "blur"), (y = qm);
                break;
              case "beforeblur":
              case "afterblur":
                y = qm;
                break;
              case "click":
                if (r.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                y = aL;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = QP;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = i3;
                break;
              case Ow:
              case Uw:
              case Hw:
                y = ZP;
                break;
              case Vw:
                y = d3;
                break;
              case "scroll":
                y = GP;
                break;
              case "wheel":
                y = c3;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = JP;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = lL;
            }
            var v = (t & 4) !== 0,
              E = !v && e === "scroll",
              d = v ? (m !== null ? m + "Capture" : null) : m;
            v = [];
            for (var s = f, c; s !== null; ) {
              c = s;
              var g = c.stateNode;
              if (
                (c.tag === 5 &&
                  g !== null &&
                  ((c = g),
                  d !== null &&
                    ((g = ri(s, d)), g != null && v.push(si(s, g, c)))),
                E)
              )
                break;
              s = s.return;
            }
            0 < v.length &&
              ((m = new y(m, x, null, r, p)),
              h.push({ event: m, listeners: v }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (
              ((m = e === "mouseover" || e === "pointerover"),
              (y = e === "mouseout" || e === "pointerout"),
              m &&
                r !== xh &&
                (x = r.relatedTarget || r.fromElement) &&
                (fa(x) || x[Kr]))
            )
              break e;
            if (
              (y || m) &&
              ((m =
                p.window === p
                  ? p
                  : (m = p.ownerDocument)
                  ? m.defaultView || m.parentWindow
                  : window),
              y
                ? ((x = r.relatedTarget || r.toElement),
                  (y = f),
                  (x = x ? fa(x) : null),
                  x !== null &&
                    ((E = Sa(x)), x !== E || (x.tag !== 5 && x.tag !== 6)) &&
                    (x = null))
                : ((y = null), (x = f)),
              y !== x)
            ) {
              if (
                ((v = aL),
                (g = "onMouseLeave"),
                (d = "onMouseEnter"),
                (s = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((v = lL),
                  (g = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (s = "pointer")),
                (E = y == null ? m : yo(y)),
                (c = x == null ? m : yo(x)),
                (m = new v(g, s + "leave", y, r, p)),
                (m.target = E),
                (m.relatedTarget = c),
                (g = null),
                fa(p) === f &&
                  ((v = new v(d, s + "enter", x, r, p)),
                  (v.target = c),
                  (v.relatedTarget = E),
                  (g = v)),
                (E = g),
                y && x)
              )
                t: {
                  for (v = y, d = x, s = 0, c = v; c; c = fo(c)) s++;
                  for (c = 0, g = d; g; g = fo(g)) c++;
                  for (; 0 < s - c; ) (v = fo(v)), s--;
                  for (; 0 < c - s; ) (d = fo(d)), c--;
                  for (; s--; ) {
                    if (v === d || (d !== null && v === d.alternate)) break t;
                    (v = fo(v)), (d = fo(d));
                  }
                  v = null;
                }
              else v = null;
              y !== null && vL(h, m, y, v, !1),
                x !== null && E !== null && vL(h, E, x, v, !0);
            }
          }
          e: {
            if (
              ((m = f ? yo(f) : window),
              (y = m.nodeName && m.nodeName.toLowerCase()),
              y === "select" || (y === "input" && m.type === "file"))
            )
              var L = x3;
            else if (sL(m))
              if (Aw) L = C3;
              else {
                L = w3;
                var C = L3;
              }
            else
              (y = m.nodeName) &&
                y.toLowerCase() === "input" &&
                (m.type === "checkbox" || m.type === "radio") &&
                (L = S3);
            if (L && (L = L(e, f))) {
              Rw(h, L, r, p);
              break e;
            }
            C && C(e, m, f),
              e === "focusout" &&
                (C = m._wrapperState) &&
                C.controlled &&
                m.type === "number" &&
                mh(m, "number", m.value);
          }
          switch (((C = f ? yo(f) : window), e)) {
            case "focusin":
              (sL(C) || C.contentEditable === "true") &&
                ((ho = C), (Ph = f), (Xu = null));
              break;
            case "focusout":
              Xu = Ph = ho = null;
              break;
            case "mousedown":
              Eh = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Eh = !1), pL(h, r, p);
              break;
            case "selectionchange":
              if (P3) break;
            case "keydown":
            case "keyup":
              pL(h, r, p);
          }
          var S;
          if (pg)
            e: {
              switch (e) {
                case "compositionstart":
                  var w = "onCompositionStart";
                  break e;
                case "compositionend":
                  w = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  w = "onCompositionUpdate";
                  break e;
              }
              w = void 0;
            }
          else
            mo
              ? Fw(e, r) && (w = "onCompositionEnd")
              : e === "keydown" &&
                r.keyCode === 229 &&
                (w = "onCompositionStart");
          w &&
            (Mw &&
              r.locale !== "ko" &&
              (mo || w !== "onCompositionStart"
                ? w === "onCompositionEnd" && mo && (S = Tw())
                : ((Fn = p),
                  (dg = "value" in Fn ? Fn.value : Fn.textContent),
                  (mo = !0))),
            (C = ef(f, w)),
            0 < C.length &&
              ((w = new oL(w, e, null, r, p)),
              h.push({ event: w, listeners: C }),
              S ? (w.data = S) : ((S = Dw(r)), S !== null && (w.data = S)))),
            (S = m3 ? h3(e, r) : g3(e, r)) &&
              ((f = ef(f, "onBeforeInput")),
              0 < f.length &&
                ((p = new oL("onBeforeInput", "beforeinput", null, r, p)),
                h.push({ event: p, listeners: f }),
                (p.data = S)));
        }
        Ww(h, t);
      });
    }
    function si(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function ef(e, t) {
      for (var r = t + "Capture", n = []; e !== null; ) {
        var a = e,
          o = a.stateNode;
        a.tag === 5 &&
          o !== null &&
          ((a = o),
          (o = ri(e, r)),
          o != null && n.unshift(si(e, o, a)),
          (o = ri(e, t)),
          o != null && n.push(si(e, o, a))),
          (e = e.return);
      }
      return n;
    }
    function fo(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function vL(e, t, r, n, a) {
      for (var o = t._reactName, l = []; r !== null && r !== n; ) {
        var u = r,
          i = u.alternate,
          f = u.stateNode;
        if (i !== null && i === n) break;
        u.tag === 5 &&
          f !== null &&
          ((u = f),
          a
            ? ((i = ri(r, o)), i != null && l.unshift(si(r, i, u)))
            : a || ((i = ri(r, o)), i != null && l.push(si(r, i, u)))),
          (r = r.return);
      }
      l.length !== 0 && e.push({ event: t, listeners: l });
    }
    var T3 = /\r\n?/g,
      M3 = /\u0000|\uFFFD/g;
    function xL(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          T3,
          `
`
        )
        .replace(M3, "");
    }
    function Dd(e, t, r) {
      if (((t = xL(t)), xL(e) !== t && r)) throw Error(P(425));
    }
    function tf() {}
    var Th = null,
      Mh = null;
    function Fh(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Dh = typeof setTimeout == "function" ? setTimeout : void 0,
      F3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
      LL = typeof Promise == "function" ? Promise : void 0,
      D3 =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof LL < "u"
          ? function (e) {
              return LL.resolve(null).then(e).catch(R3);
            }
          : Dh;
    function R3(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Ym(e, t) {
      var r = t,
        n = 0;
      do {
        var a = r.nextSibling;
        if ((e.removeChild(r), a && a.nodeType === 8))
          if (((r = a.data), r === "/$")) {
            if (n === 0) {
              e.removeChild(a), oi(t);
              return;
            }
            n--;
          } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
        r = a;
      } while (r);
      oi(t);
    }
    function zn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function wL(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "$" || r === "$!" || r === "$?") {
            if (t === 0) return e;
            t--;
          } else r === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Oo = Math.random().toString(36).slice(2),
      kr = "__reactFiber$" + Oo,
      di = "__reactProps$" + Oo,
      Kr = "__reactContainer$" + Oo,
      Rh = "__reactEvents$" + Oo,
      A3 = "__reactListeners$" + Oo,
      _3 = "__reactHandles$" + Oo;
    function fa(e) {
      var t = e[kr];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[Kr] || r[kr])) {
          if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
          )
            for (e = wL(e); e !== null; ) {
              if ((r = e[kr])) return r;
              e = wL(e);
            }
          return t;
        }
        (e = r), (r = e.parentNode);
      }
      return null;
    }
    function xi(e) {
      return (
        (e = e[kr] || e[Kr]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function yo(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(P(33));
    }
    function Sf(e) {
      return e[di] || null;
    }
    var Ah = [],
      vo = -1;
    function Wn(e) {
      return { current: e };
    }
    function b(e) {
      0 > vo || ((e.current = Ah[vo]), (Ah[vo] = null), vo--);
    }
    function q(e, t) {
      vo++, (Ah[vo] = e.current), (e.current = t);
    }
    var Vn = {},
      qe = Wn(Vn),
      mt = Wn(!1),
      ga = Vn;
    function Do(e, t) {
      var r = e.type.contextTypes;
      if (!r) return Vn;
      var n = e.stateNode;
      if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
        return n.__reactInternalMemoizedMaskedChildContext;
      var a = {},
        o;
      for (o in r) a[o] = t[o];
      return (
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
      );
    }
    function ht(e) {
      return (e = e.childContextTypes), e != null;
    }
    function rf() {
      b(mt), b(qe);
    }
    function SL(e, t, r) {
      if (qe.current !== Vn) throw Error(P(168));
      q(qe, t), q(mt, r);
    }
    function Gw(e, t, r) {
      var n = e.stateNode;
      if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
        return r;
      n = n.getChildContext();
      for (var a in n)
        if (!(a in t)) throw Error(P(108, LP(e) || "Unknown", a));
      return ie({}, r, n);
    }
    function nf(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Vn),
        (ga = qe.current),
        q(qe, e),
        q(mt, mt.current),
        !0
      );
    }
    function CL(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(P(169));
      r
        ? ((e = Gw(e, t, ga)),
          (n.__reactInternalMemoizedMergedChildContext = e),
          b(mt),
          b(qe),
          q(qe, e))
        : b(mt),
        q(mt, r);
    }
    var Wr = null,
      Cf = !1,
      Jm = !1;
    function qw(e) {
      Wr === null ? (Wr = [e]) : Wr.push(e);
    }
    function z3(e) {
      (Cf = !0), qw(e);
    }
    function $n() {
      if (!Jm && Wr !== null) {
        Jm = !0;
        var e = 0,
          t = j;
        try {
          var r = Wr;
          for (j = 1; e < r.length; e++) {
            var n = r[e];
            do n = n(!0);
            while (n !== null);
          }
          (Wr = null), (Cf = !1);
        } catch (a) {
          throw (Wr !== null && (Wr = Wr.slice(e + 1)), yw(lg, $n), a);
        } finally {
          (j = t), (Jm = !1);
        }
      }
      return null;
    }
    var xo = [],
      Lo = 0,
      af = null,
      of = 0,
      Vt = [],
      jt = 0,
      ya = null,
      $r = 1,
      Gr = "";
    function sa(e, t) {
      (xo[Lo++] = of), (xo[Lo++] = af), (af = e), (of = t);
    }
    function Qw(e, t, r) {
      (Vt[jt++] = $r), (Vt[jt++] = Gr), (Vt[jt++] = ya), (ya = e);
      var n = $r;
      e = Gr;
      var a = 32 - sr(n) - 1;
      (n &= ~(1 << a)), (r += 1);
      var o = 32 - sr(t) + a;
      if (30 < o) {
        var l = a - (a % 5);
        (o = (n & ((1 << l) - 1)).toString(32)),
          (n >>= l),
          (a -= l),
          ($r = (1 << (32 - sr(t) + a)) | (r << a) | n),
          (Gr = o + e);
      } else ($r = (1 << o) | (r << a) | n), (Gr = e);
    }
    function hg(e) {
      e.return !== null && (sa(e, 1), Qw(e, 1, 0));
    }
    function gg(e) {
      for (; e === af; )
        (af = xo[--Lo]), (xo[Lo] = null), (of = xo[--Lo]), (xo[Lo] = null);
      for (; e === ya; )
        (ya = Vt[--jt]),
          (Vt[jt] = null),
          (Gr = Vt[--jt]),
          (Vt[jt] = null),
          ($r = Vt[--jt]),
          (Vt[jt] = null);
    }
    var kt = null,
      It = null,
      te = !1,
      ir = null;
    function Kw(e, t) {
      var r = Wt(5, null, null, 0);
      (r.elementType = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
    }
    function IL(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            (t =
              t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (kt = e), (It = zn(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (kt = e), (It = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((r = ya !== null ? { id: $r, overflow: Gr } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                (r = Wt(18, null, null, 0)),
                (r.stateNode = t),
                (r.return = e),
                (e.child = r),
                (kt = e),
                (It = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function _h(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function zh(e) {
      if (te) {
        var t = It;
        if (t) {
          var r = t;
          if (!IL(e, t)) {
            if (_h(e)) throw Error(P(418));
            t = zn(r.nextSibling);
            var n = kt;
            t && IL(e, t)
              ? Kw(n, r)
              : ((e.flags = (e.flags & -4097) | 2), (te = !1), (kt = e));
          }
        } else {
          if (_h(e)) throw Error(P(418));
          (e.flags = (e.flags & -4097) | 2), (te = !1), (kt = e);
        }
      }
    }
    function kL(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      )
        e = e.return;
      kt = e;
    }
    function Rd(e) {
      if (e !== kt) return !1;
      if (!te) return kL(e), (te = !0), !1;
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !Fh(e.type, e.memoizedProps))),
        t && (t = It))
      ) {
        if (_h(e)) throw (Xw(), Error(P(418)));
        for (; t; ) Kw(e, t), (t = zn(t.nextSibling));
      }
      if ((kL(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(P(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === "/$") {
                if (t === 0) {
                  It = zn(e.nextSibling);
                  break e;
                }
                t--;
              } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          It = null;
        }
      } else It = kt ? zn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Xw() {
      for (var e = It; e; ) e = zn(e.nextSibling);
    }
    function Ro() {
      (It = kt = null), (te = !1);
    }
    function yg(e) {
      ir === null ? (ir = [e]) : ir.push(e);
    }
    var N3 = Yr.ReactCurrentBatchConfig;
    function Bu(e, t, r) {
      if (
        ((e = r.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (r._owner) {
          if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(P(309));
            var n = r.stateNode;
          }
          if (!n) throw Error(P(147, e));
          var a = n,
            o = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (l) {
                var u = a.refs;
                l === null ? delete u[o] : (u[o] = l);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != "string") throw Error(P(284));
        if (!r._owner) throw Error(P(290, e));
      }
      return e;
    }
    function Ad(e, t) {
      throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
          P(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ))
      );
    }
    function PL(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Zw(e) {
      function t(d, s) {
        if (e) {
          var c = d.deletions;
          c === null ? ((d.deletions = [s]), (d.flags |= 16)) : c.push(s);
        }
      }
      function r(d, s) {
        if (!e) return null;
        for (; s !== null; ) t(d, s), (s = s.sibling);
        return null;
      }
      function n(d, s) {
        for (d = new Map(); s !== null; )
          s.key !== null ? d.set(s.key, s) : d.set(s.index, s), (s = s.sibling);
        return d;
      }
      function a(d, s) {
        return (d = Un(d, s)), (d.index = 0), (d.sibling = null), d;
      }
      function o(d, s, c) {
        return (
          (d.index = c),
          e
            ? ((c = d.alternate),
              c !== null
                ? ((c = c.index), c < s ? ((d.flags |= 2), s) : c)
                : ((d.flags |= 2), s))
            : ((d.flags |= 1048576), s)
        );
      }
      function l(d) {
        return e && d.alternate === null && (d.flags |= 2), d;
      }
      function u(d, s, c, g) {
        return s === null || s.tag !== 6
          ? ((s = oh(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function i(d, s, c, g) {
        var L = c.type;
        return L === po
          ? p(d, s, c.props.children, g, c.key)
          : s !== null &&
            (s.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === Pn &&
                PL(L) === s.type))
          ? ((g = a(s, c.props)), (g.ref = Bu(d, s, c)), (g.return = d), g)
          : ((g = qd(c.type, c.key, c.props, null, d.mode, g)),
            (g.ref = Bu(d, s, c)),
            (g.return = d),
            g);
      }
      function f(d, s, c, g) {
        return s === null ||
          s.tag !== 4 ||
          s.stateNode.containerInfo !== c.containerInfo ||
          s.stateNode.implementation !== c.implementation
          ? ((s = lh(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c.children || [])), (s.return = d), s);
      }
      function p(d, s, c, g, L) {
        return s === null || s.tag !== 7
          ? ((s = ha(c, d.mode, g, L)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function h(d, s, c) {
        if ((typeof s == "string" && s !== "") || typeof s == "number")
          return (s = oh("" + s, d.mode, c)), (s.return = d), s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case vd:
              return (
                (c = qd(s.type, s.key, s.props, null, d.mode, c)),
                (c.ref = Bu(d, null, s)),
                (c.return = d),
                c
              );
            case co:
              return (s = lh(s, d.mode, c)), (s.return = d), s;
            case Pn:
              var g = s._init;
              return h(d, g(s._payload), c);
          }
          if (ju(s) || Au(s))
            return (s = ha(s, d.mode, c, null)), (s.return = d), s;
          Ad(d, s);
        }
        return null;
      }
      function m(d, s, c, g) {
        var L = s !== null ? s.key : null;
        if ((typeof c == "string" && c !== "") || typeof c == "number")
          return L !== null ? null : u(d, s, "" + c, g);
        if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
            case vd:
              return c.key === L ? i(d, s, c, g) : null;
            case co:
              return c.key === L ? f(d, s, c, g) : null;
            case Pn:
              return (L = c._init), m(d, s, L(c._payload), g);
          }
          if (ju(c) || Au(c)) return L !== null ? null : p(d, s, c, g, null);
          Ad(d, c);
        }
        return null;
      }
      function y(d, s, c, g, L) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
          return (d = d.get(c) || null), u(s, d, "" + g, L);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case vd:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), i(s, d, g, L)
              );
            case co:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), f(s, d, g, L)
              );
            case Pn:
              var C = g._init;
              return y(d, s, c, C(g._payload), L);
          }
          if (ju(g) || Au(g))
            return (d = d.get(c) || null), p(s, d, g, L, null);
          Ad(s, g);
        }
        return null;
      }
      function x(d, s, c, g) {
        for (
          var L = null, C = null, S = s, w = (s = 0), M = null;
          S !== null && w < c.length;
          w++
        ) {
          S.index > w ? ((M = S), (S = null)) : (M = S.sibling);
          var I = m(d, S, c[w], g);
          if (I === null) {
            S === null && (S = M);
            break;
          }
          e && S && I.alternate === null && t(d, S),
            (s = o(I, s, w)),
            C === null ? (L = I) : (C.sibling = I),
            (C = I),
            (S = M);
        }
        if (w === c.length) return r(d, S), te && sa(d, w), L;
        if (S === null) {
          for (; w < c.length; w++)
            (S = h(d, c[w], g)),
              S !== null &&
                ((s = o(S, s, w)),
                C === null ? (L = S) : (C.sibling = S),
                (C = S));
          return te && sa(d, w), L;
        }
        for (S = n(d, S); w < c.length; w++)
          (M = y(S, d, w, c[w], g)),
            M !== null &&
              (e &&
                M.alternate !== null &&
                S.delete(M.key === null ? w : M.key),
              (s = o(M, s, w)),
              C === null ? (L = M) : (C.sibling = M),
              (C = M));
        return (
          e &&
            S.forEach(function (H) {
              return t(d, H);
            }),
          te && sa(d, w),
          L
        );
      }
      function v(d, s, c, g) {
        var L = Au(c);
        if (typeof L != "function") throw Error(P(150));
        if (((c = L.call(c)), c == null)) throw Error(P(151));
        for (
          var C = (L = null), S = s, w = (s = 0), M = null, I = c.next();
          S !== null && !I.done;
          w++, I = c.next()
        ) {
          S.index > w ? ((M = S), (S = null)) : (M = S.sibling);
          var H = m(d, S, I.value, g);
          if (H === null) {
            S === null && (S = M);
            break;
          }
          e && S && H.alternate === null && t(d, S),
            (s = o(H, s, w)),
            C === null ? (L = H) : (C.sibling = H),
            (C = H),
            (S = M);
        }
        if (I.done) return r(d, S), te && sa(d, w), L;
        if (S === null) {
          for (; !I.done; w++, I = c.next())
            (I = h(d, I.value, g)),
              I !== null &&
                ((s = o(I, s, w)),
                C === null ? (L = I) : (C.sibling = I),
                (C = I));
          return te && sa(d, w), L;
        }
        for (S = n(d, S); !I.done; w++, I = c.next())
          (I = y(S, d, w, I.value, g)),
            I !== null &&
              (e &&
                I.alternate !== null &&
                S.delete(I.key === null ? w : I.key),
              (s = o(I, s, w)),
              C === null ? (L = I) : (C.sibling = I),
              (C = I));
        return (
          e &&
            S.forEach(function (N) {
              return t(d, N);
            }),
          te && sa(d, w),
          L
        );
      }
      function E(d, s, c, g) {
        if (
          (typeof c == "object" &&
            c !== null &&
            c.type === po &&
            c.key === null &&
            (c = c.props.children),
          typeof c == "object" && c !== null)
        ) {
          switch (c.$$typeof) {
            case vd:
              e: {
                for (var L = c.key, C = s; C !== null; ) {
                  if (C.key === L) {
                    if (((L = c.type), L === po)) {
                      if (C.tag === 7) {
                        r(d, C.sibling),
                          (s = a(C, c.props.children)),
                          (s.return = d),
                          (d = s);
                        break e;
                      }
                    } else if (
                      C.elementType === L ||
                      (typeof L == "object" &&
                        L !== null &&
                        L.$$typeof === Pn &&
                        PL(L) === C.type)
                    ) {
                      r(d, C.sibling),
                        (s = a(C, c.props)),
                        (s.ref = Bu(d, C, c)),
                        (s.return = d),
                        (d = s);
                      break e;
                    }
                    r(d, C);
                    break;
                  } else t(d, C);
                  C = C.sibling;
                }
                c.type === po
                  ? ((s = ha(c.props.children, d.mode, g, c.key)),
                    (s.return = d),
                    (d = s))
                  : ((g = qd(c.type, c.key, c.props, null, d.mode, g)),
                    (g.ref = Bu(d, s, c)),
                    (g.return = d),
                    (d = g));
              }
              return l(d);
            case co:
              e: {
                for (C = c.key; s !== null; ) {
                  if (s.key === C)
                    if (
                      s.tag === 4 &&
                      s.stateNode.containerInfo === c.containerInfo &&
                      s.stateNode.implementation === c.implementation
                    ) {
                      r(d, s.sibling),
                        (s = a(s, c.children || [])),
                        (s.return = d),
                        (d = s);
                      break e;
                    } else {
                      r(d, s);
                      break;
                    }
                  else t(d, s);
                  s = s.sibling;
                }
                (s = lh(c, d.mode, g)), (s.return = d), (d = s);
              }
              return l(d);
            case Pn:
              return (C = c._init), E(d, s, C(c._payload), g);
          }
          if (ju(c)) return x(d, s, c, g);
          if (Au(c)) return v(d, s, c, g);
          Ad(d, c);
        }
        return (typeof c == "string" && c !== "") || typeof c == "number"
          ? ((c = "" + c),
            s !== null && s.tag === 6
              ? (r(d, s.sibling), (s = a(s, c)), (s.return = d), (d = s))
              : (r(d, s), (s = oh(c, d.mode, g)), (s.return = d), (d = s)),
            l(d))
          : r(d, s);
      }
      return E;
    }
    var Ao = Zw(!0),
      Yw = Zw(!1),
      lf = Wn(null),
      uf = null,
      wo = null,
      vg = null;
    function xg() {
      vg = wo = uf = null;
    }
    function Lg(e) {
      var t = lf.current;
      b(lf), (e._currentValue = t);
    }
    function Nh(e, t, r) {
      for (; e !== null; ) {
        var n = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
            : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
          e === r)
        )
          break;
        e = e.return;
      }
    }
    function To(e, t) {
      (uf = e),
        (vg = wo = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (pt = !0), (e.firstContext = null));
    }
    function Gt(e) {
      var t = e._currentValue;
      if (vg !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), wo === null)) {
          if (uf === null) throw Error(P(308));
          (wo = e), (uf.dependencies = { lanes: 0, firstContext: e });
        } else wo = wo.next = e;
      return t;
    }
    var ca = null;
    function wg(e) {
      ca === null ? (ca = [e]) : ca.push(e);
    }
    function Jw(e, t, r, n) {
      var a = t.interleaved;
      return (
        a === null ? ((r.next = r), wg(t)) : ((r.next = a.next), (a.next = r)),
        (t.interleaved = r),
        Xr(e, n)
      );
    }
    function Xr(e, t) {
      e.lanes |= t;
      var r = e.alternate;
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
        (e.childLanes |= t),
          (r = e.alternate),
          r !== null && (r.childLanes |= t),
          (r = e),
          (e = e.return);
      return r.tag === 3 ? r.stateNode : null;
    }
    var En = !1;
    function Sg(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function bw(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function qr(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function Nn(e, t, r) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), U & 2)) {
        var a = n.pending;
        return (
          a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (n.pending = t),
          Xr(e, r)
        );
      }
      return (
        (a = n.interleaved),
        a === null ? ((t.next = t), wg(n)) : ((t.next = a.next), (a.next = t)),
        (n.interleaved = t),
        Xr(e, r)
      );
    }
    function Hd(e, t, r) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
      ) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), ug(e, r);
      }
    }
    function EL(e, t) {
      var r = e.updateQueue,
        n = e.alternate;
      if (n !== null && ((n = n.updateQueue), r === n)) {
        var a = null,
          o = null;
        if (((r = r.firstBaseUpdate), r !== null)) {
          do {
            var l = {
              eventTime: r.eventTime,
              lane: r.lane,
              tag: r.tag,
              payload: r.payload,
              callback: r.callback,
              next: null,
            };
            o === null ? (a = o = l) : (o = o.next = l), (r = r.next);
          } while (r !== null);
          o === null ? (a = o = t) : (o = o.next = t);
        } else a = o = t;
        (r = {
          baseState: n.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: o,
          shared: n.shared,
          effects: n.effects,
        }),
          (e.updateQueue = r);
        return;
      }
      (e = r.lastBaseUpdate),
        e === null ? (r.firstBaseUpdate = t) : (e.next = t),
        (r.lastBaseUpdate = t);
    }
    function sf(e, t, r, n) {
      var a = e.updateQueue;
      En = !1;
      var o = a.firstBaseUpdate,
        l = a.lastBaseUpdate,
        u = a.shared.pending;
      if (u !== null) {
        a.shared.pending = null;
        var i = u,
          f = i.next;
        (i.next = null), l === null ? (o = f) : (l.next = f), (l = i);
        var p = e.alternate;
        p !== null &&
          ((p = p.updateQueue),
          (u = p.lastBaseUpdate),
          u !== l &&
            (u === null ? (p.firstBaseUpdate = f) : (u.next = f),
            (p.lastBaseUpdate = i)));
      }
      if (o !== null) {
        var h = a.baseState;
        (l = 0), (p = f = i = null), (u = o);
        do {
          var m = u.lane,
            y = u.eventTime;
          if ((n & m) === m) {
            p !== null &&
              (p = p.next =
                {
                  eventTime: y,
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: u.callback,
                  next: null,
                });
            e: {
              var x = e,
                v = u;
              switch (((m = t), (y = r), v.tag)) {
                case 1:
                  if (((x = v.payload), typeof x == "function")) {
                    h = x.call(y, h, m);
                    break e;
                  }
                  h = x;
                  break e;
                case 3:
                  x.flags = (x.flags & -65537) | 128;
                case 0:
                  if (
                    ((x = v.payload),
                    (m = typeof x == "function" ? x.call(y, h, m) : x),
                    m == null)
                  )
                    break e;
                  h = ie({}, h, m);
                  break e;
                case 2:
                  En = !0;
              }
            }
            u.callback !== null &&
              u.lane !== 0 &&
              ((e.flags |= 64),
              (m = a.effects),
              m === null ? (a.effects = [u]) : m.push(u));
          } else
            (y = {
              eventTime: y,
              lane: m,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            }),
              p === null ? ((f = p = y), (i = h)) : (p = p.next = y),
              (l |= m);
          if (((u = u.next), u === null)) {
            if (((u = a.shared.pending), u === null)) break;
            (m = u),
              (u = m.next),
              (m.next = null),
              (a.lastBaseUpdate = m),
              (a.shared.pending = null);
          }
        } while (!0);
        if (
          (p === null && (i = h),
          (a.baseState = i),
          (a.firstBaseUpdate = f),
          (a.lastBaseUpdate = p),
          (t = a.shared.interleaved),
          t !== null)
        ) {
          a = t;
          do (l |= a.lane), (a = a.next);
          while (a !== t);
        } else o === null && (a.shared.lanes = 0);
        (xa |= l), (e.lanes = l), (e.memoizedState = h);
      }
    }
    function TL(e, t, r) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var n = e[t],
            a = n.callback;
          if (a !== null) {
            if (((n.callback = null), (n = r), typeof a != "function"))
              throw Error(P(191, a));
            a.call(n);
          }
        }
    }
    var Li = {},
      Er = Wn(Li),
      fi = Wn(Li),
      ci = Wn(Li);
    function pa(e) {
      if (e === Li) throw Error(P(174));
      return e;
    }
    function Cg(e, t) {
      switch ((q(ci, t), q(fi, e), q(Er, Li), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : gh(null, "");
          break;
        default:
          (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = gh(t, e));
      }
      b(Er), q(Er, t);
    }
    function _o() {
      b(Er), b(fi), b(ci);
    }
    function eS(e) {
      pa(ci.current);
      var t = pa(Er.current),
        r = gh(t, e.type);
      t !== r && (q(fi, e), q(Er, r));
    }
    function Ig(e) {
      fi.current === e && (b(Er), b(fi));
    }
    var le = Wn(0);
    function df(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var r = t.memoizedState;
          if (
            r !== null &&
            ((r = r.dehydrated),
            r === null || r.data === "$?" || r.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    var bm = [];
    function kg() {
      for (var e = 0; e < bm.length; e++)
        bm[e]._workInProgressVersionPrimary = null;
      bm.length = 0;
    }
    var Vd = Yr.ReactCurrentDispatcher,
      eh = Yr.ReactCurrentBatchConfig,
      va = 0,
      ue = null,
      Se = null,
      Ee = null,
      ff = !1,
      Zu = !1,
      pi = 0,
      B3 = 0;
    function We() {
      throw Error(P(321));
    }
    function Pg(e, t) {
      if (t === null) return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!fr(e[r], t[r])) return !1;
      return !0;
    }
    function Eg(e, t, r, n, a, o) {
      if (
        ((va = o),
        (ue = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Vd.current = e === null || e.memoizedState === null ? V3 : j3),
        (e = r(n, a)),
        Zu)
      ) {
        o = 0;
        do {
          if (((Zu = !1), (pi = 0), 25 <= o)) throw Error(P(301));
          (o += 1),
            (Ee = Se = null),
            (t.updateQueue = null),
            (Vd.current = W3),
            (e = r(n, a));
        } while (Zu);
      }
      if (
        ((Vd.current = cf),
        (t = Se !== null && Se.next !== null),
        (va = 0),
        (Ee = Se = ue = null),
        (ff = !1),
        t)
      )
        throw Error(P(300));
      return e;
    }
    function Tg() {
      var e = pi !== 0;
      return (pi = 0), e;
    }
    function Ir() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Ee === null ? (ue.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
    }
    function qt() {
      if (Se === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Se.next;
      var t = Ee === null ? ue.memoizedState : Ee.next;
      if (t !== null) (Ee = t), (Se = e);
      else {
        if (e === null) throw Error(P(310));
        (Se = e),
          (e = {
            memoizedState: Se.memoizedState,
            baseState: Se.baseState,
            baseQueue: Se.baseQueue,
            queue: Se.queue,
            next: null,
          }),
          Ee === null ? (ue.memoizedState = Ee = e) : (Ee = Ee.next = e);
      }
      return Ee;
    }
    function mi(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function th(e) {
      var t = qt(),
        r = t.queue;
      if (r === null) throw Error(P(311));
      r.lastRenderedReducer = e;
      var n = Se,
        a = n.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var l = a.next;
          (a.next = o.next), (o.next = l);
        }
        (n.baseQueue = a = o), (r.pending = null);
      }
      if (a !== null) {
        (o = a.next), (n = n.baseState);
        var u = (l = null),
          i = null,
          f = o;
        do {
          var p = f.lane;
          if ((va & p) === p)
            i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  action: f.action,
                  hasEagerState: f.hasEagerState,
                  eagerState: f.eagerState,
                  next: null,
                }),
              (n = f.hasEagerState ? f.eagerState : e(n, f.action));
          else {
            var h = {
              lane: p,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            };
            i === null ? ((u = i = h), (l = n)) : (i = i.next = h),
              (ue.lanes |= p),
              (xa |= p);
          }
          f = f.next;
        } while (f !== null && f !== o);
        i === null ? (l = n) : (i.next = u),
          fr(n, t.memoizedState) || (pt = !0),
          (t.memoizedState = n),
          (t.baseState = l),
          (t.baseQueue = i),
          (r.lastRenderedState = n);
      }
      if (((e = r.interleaved), e !== null)) {
        a = e;
        do (o = a.lane), (ue.lanes |= o), (xa |= o), (a = a.next);
        while (a !== e);
      } else a === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch];
    }
    function rh(e) {
      var t = qt(),
        r = t.queue;
      if (r === null) throw Error(P(311));
      r.lastRenderedReducer = e;
      var n = r.dispatch,
        a = r.pending,
        o = t.memoizedState;
      if (a !== null) {
        r.pending = null;
        var l = (a = a.next);
        do (o = e(o, l.action)), (l = l.next);
        while (l !== a);
        fr(o, t.memoizedState) || (pt = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (r.lastRenderedState = o);
      }
      return [o, n];
    }
    function tS() {}
    function rS(e, t) {
      var r = ue,
        n = qt(),
        a = t(),
        o = !fr(n.memoizedState, a);
      if (
        (o && ((n.memoizedState = a), (pt = !0)),
        (n = n.queue),
        Mg(oS.bind(null, r, n, e), [e]),
        n.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          hi(9, aS.bind(null, r, n, a, t), void 0, null),
          Te === null)
        )
          throw Error(P(349));
        va & 30 || nS(r, t, a);
      }
      return a;
    }
    function nS(e, t, r) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: r }),
        (t = ue.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ue.updateQueue = t),
            (t.stores = [e]))
          : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
    }
    function aS(e, t, r, n) {
      (t.value = r), (t.getSnapshot = n), lS(t) && uS(e);
    }
    function oS(e, t, r) {
      return r(function () {
        lS(t) && uS(e);
      });
    }
    function lS(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !fr(e, r);
      } catch {
        return !0;
      }
    }
    function uS(e) {
      var t = Xr(e, 1);
      t !== null && dr(t, e, 1, -1);
    }
    function ML(e) {
      var t = Ir();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: mi,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = H3.bind(null, ue, e)),
        [t.memoizedState, e]
      );
    }
    function hi(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = ue.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ue.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      );
    }
    function iS() {
      return qt().memoizedState;
    }
    function jd(e, t, r, n) {
      var a = Ir();
      (ue.flags |= e),
        (a.memoizedState = hi(1 | t, r, void 0, n === void 0 ? null : n));
    }
    function If(e, t, r, n) {
      var a = qt();
      n = n === void 0 ? null : n;
      var o = void 0;
      if (Se !== null) {
        var l = Se.memoizedState;
        if (((o = l.destroy), n !== null && Pg(n, l.deps))) {
          a.memoizedState = hi(t, r, o, n);
          return;
        }
      }
      (ue.flags |= e), (a.memoizedState = hi(1 | t, r, o, n));
    }
    function FL(e, t) {
      return jd(8390656, 8, e, t);
    }
    function Mg(e, t) {
      return If(2048, 8, e, t);
    }
    function sS(e, t) {
      return If(4, 2, e, t);
    }
    function dS(e, t) {
      return If(4, 4, e, t);
    }
    function fS(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function cS(e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), If(4, 4, fS.bind(null, t, e), r)
      );
    }
    function Fg() {}
    function pS(e, t) {
      var r = qt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && Pg(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function mS(e, t) {
      var r = qt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && Pg(t, n[1])
        ? n[0]
        : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function hS(e, t, r) {
      return va & 21
        ? (fr(r, t) ||
            ((r = Lw()), (ue.lanes |= r), (xa |= r), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (pt = !0)),
          (e.memoizedState = r));
    }
    function O3(e, t) {
      var r = j;
      (j = r !== 0 && 4 > r ? r : 4), e(!0);
      var n = eh.transition;
      eh.transition = {};
      try {
        e(!1), t();
      } finally {
        (j = r), (eh.transition = n);
      }
    }
    function gS() {
      return qt().memoizedState;
    }
    function U3(e, t, r) {
      var n = On(e);
      if (
        ((r = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        yS(e))
      )
        vS(t, r);
      else if (((r = Jw(e, t, r, n)), r !== null)) {
        var a = rt();
        dr(r, e, n, a), xS(r, t, n);
      }
    }
    function H3(e, t, r) {
      var n = On(e),
        a = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (yS(e)) vS(t, a);
      else {
        var o = e.alternate;
        if (
          e.lanes === 0 &&
          (o === null || o.lanes === 0) &&
          ((o = t.lastRenderedReducer), o !== null)
        )
          try {
            var l = t.lastRenderedState,
              u = o(l, r);
            if (((a.hasEagerState = !0), (a.eagerState = u), fr(u, l))) {
              var i = t.interleaved;
              i === null
                ? ((a.next = a), wg(t))
                : ((a.next = i.next), (i.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch {
          } finally {
          }
        (r = Jw(e, t, a, n)),
          r !== null && ((a = rt()), dr(r, e, n, a), xS(r, t, n));
      }
    }
    function yS(e) {
      var t = e.alternate;
      return e === ue || (t !== null && t === ue);
    }
    function vS(e, t) {
      Zu = ff = !0;
      var r = e.pending;
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (e.pending = t);
    }
    function xS(e, t, r) {
      if (r & 4194240) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), ug(e, r);
      }
    }
    var cf = {
        readContext: Gt,
        useCallback: We,
        useContext: We,
        useEffect: We,
        useImperativeHandle: We,
        useInsertionEffect: We,
        useLayoutEffect: We,
        useMemo: We,
        useReducer: We,
        useRef: We,
        useState: We,
        useDebugValue: We,
        useDeferredValue: We,
        useTransition: We,
        useMutableSource: We,
        useSyncExternalStore: We,
        useId: We,
        unstable_isNewReconciler: !1,
      },
      V3 = {
        readContext: Gt,
        useCallback: function (e, t) {
          return (Ir().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Gt,
        useEffect: FL,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = r != null ? r.concat([e]) : null),
            jd(4194308, 4, fS.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return jd(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return jd(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var r = Ir();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = Ir();
          return (
            (t = r !== void 0 ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (n.queue = e),
            (e = e.dispatch = U3.bind(null, ue, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Ir();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: ML,
        useDebugValue: Fg,
        useDeferredValue: function (e) {
          return (Ir().memoizedState = e);
        },
        useTransition: function () {
          var e = ML(!1),
            t = e[0];
          return (e = O3.bind(null, e[1])), (Ir().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var n = ue,
            a = Ir();
          if (te) {
            if (r === void 0) throw Error(P(407));
            r = r();
          } else {
            if (((r = t()), Te === null)) throw Error(P(349));
            va & 30 || nS(n, t, r);
          }
          a.memoizedState = r;
          var o = { value: r, getSnapshot: t };
          return (
            (a.queue = o),
            FL(oS.bind(null, n, o, e), [e]),
            (n.flags |= 2048),
            hi(9, aS.bind(null, n, o, r, t), void 0, null),
            r
          );
        },
        useId: function () {
          var e = Ir(),
            t = Te.identifierPrefix;
          if (te) {
            var r = Gr,
              n = $r;
            (r = (n & ~(1 << (32 - sr(n) - 1))).toString(32) + r),
              (t = ":" + t + "R" + r),
              (r = pi++),
              0 < r && (t += "H" + r.toString(32)),
              (t += ":");
          } else (r = B3++), (t = ":" + t + "r" + r.toString(32) + ":");
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      j3 = {
        readContext: Gt,
        useCallback: pS,
        useContext: Gt,
        useEffect: Mg,
        useImperativeHandle: cS,
        useInsertionEffect: sS,
        useLayoutEffect: dS,
        useMemo: mS,
        useReducer: th,
        useRef: iS,
        useState: function () {
          return th(mi);
        },
        useDebugValue: Fg,
        useDeferredValue: function (e) {
          var t = qt();
          return hS(t, Se.memoizedState, e);
        },
        useTransition: function () {
          var e = th(mi)[0],
            t = qt().memoizedState;
          return [e, t];
        },
        useMutableSource: tS,
        useSyncExternalStore: rS,
        useId: gS,
        unstable_isNewReconciler: !1,
      },
      W3 = {
        readContext: Gt,
        useCallback: pS,
        useContext: Gt,
        useEffect: Mg,
        useImperativeHandle: cS,
        useInsertionEffect: sS,
        useLayoutEffect: dS,
        useMemo: mS,
        useReducer: rh,
        useRef: iS,
        useState: function () {
          return rh(mi);
        },
        useDebugValue: Fg,
        useDeferredValue: function (e) {
          var t = qt();
          return Se === null
            ? (t.memoizedState = e)
            : hS(t, Se.memoizedState, e);
        },
        useTransition: function () {
          var e = rh(mi)[0],
            t = qt().memoizedState;
          return [e, t];
        },
        useMutableSource: tS,
        useSyncExternalStore: rS,
        useId: gS,
        unstable_isNewReconciler: !1,
      };
    function lr(e, t) {
      if (e && e.defaultProps) {
        (t = ie({}, t)), (e = e.defaultProps);
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    function Bh(e, t, r, n) {
      (t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : ie({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var kf = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Sa(e) === e : !1;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = rt(),
          a = On(e),
          o = qr(n, a);
        (o.payload = t),
          r != null && (o.callback = r),
          (t = Nn(e, o, a)),
          t !== null && (dr(t, e, a, n), Hd(t, e, a));
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = rt(),
          a = On(e),
          o = qr(n, a);
        (o.tag = 1),
          (o.payload = t),
          r != null && (o.callback = r),
          (t = Nn(e, o, a)),
          t !== null && (dr(t, e, a, n), Hd(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = rt(),
          n = On(e),
          a = qr(r, n);
        (a.tag = 2),
          t != null && (a.callback = t),
          (t = Nn(e, a, n)),
          t !== null && (dr(t, e, n, r), Hd(t, e, n));
      },
    };
    function DL(e, t, r, n, a, o, l) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(n, o, l)
          : t.prototype && t.prototype.isPureReactComponent
          ? !ui(r, n) || !ui(a, o)
          : !0
      );
    }
    function LS(e, t, r) {
      var n = !1,
        a = Vn,
        o = t.contextType;
      return (
        typeof o == "object" && o !== null
          ? (o = Gt(o))
          : ((a = ht(t) ? ga : qe.current),
            (n = t.contextTypes),
            (o = (n = n != null) ? Do(e, a) : Vn)),
        (t = new t(r, o)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = kf),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function RL(e, t, r, n) {
      (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && kf.enqueueReplaceState(t, t.state, null);
    }
    function Oh(e, t, r, n) {
      var a = e.stateNode;
      (a.props = r), (a.state = e.memoizedState), (a.refs = {}), Sg(e);
      var o = t.contextType;
      typeof o == "object" && o !== null
        ? (a.context = Gt(o))
        : ((o = ht(t) ? ga : qe.current), (a.context = Do(e, o))),
        (a.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (Bh(e, t, o, r), (a.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function" ||
          (typeof a.UNSAFE_componentWillMount != "function" &&
            typeof a.componentWillMount != "function") ||
          ((t = a.state),
          typeof a.componentWillMount == "function" && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == "function" &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && kf.enqueueReplaceState(a, a.state, null),
          sf(e, r, a, n),
          (a.state = e.memoizedState)),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function zo(e, t) {
      try {
        var r = "",
          n = t;
        do (r += xP(n)), (n = n.return);
        while (n);
        var a = r;
      } catch (o) {
        a =
          `
Error generating stack: ` +
          o.message +
          `
` +
          o.stack;
      }
      return { value: e, source: t, stack: a, digest: null };
    }
    function nh(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function Uh(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    var $3 = typeof WeakMap == "function" ? WeakMap : Map;
    function wS(e, t, r) {
      (r = qr(-1, r)), (r.tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          mf || ((mf = !0), (Xh = n)), Uh(e, t);
        }),
        r
      );
    }
    function SS(e, t, r) {
      (r = qr(-1, r)), (r.tag = 3);
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var a = t.value;
        (r.payload = function () {
          return n(a);
        }),
          (r.callback = function () {
            Uh(e, t);
          });
      }
      var o = e.stateNode;
      return (
        o !== null &&
          typeof o.componentDidCatch == "function" &&
          (r.callback = function () {
            Uh(e, t),
              typeof n != "function" &&
                (Bn === null ? (Bn = new Set([this])) : Bn.add(this));
            var l = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: l !== null ? l : "",
            });
          }),
        r
      );
    }
    function AL(e, t, r) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new $3();
        var a = new Set();
        n.set(t, a);
      } else (a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a));
      a.has(r) || (a.add(r), (e = aE.bind(null, e, t, r)), t.then(e, e));
    }
    function _L(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function zL(e, t, r, n, a) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = a), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (r.flags |= 131072),
              (r.flags &= -52805),
              r.tag === 1 &&
                (r.alternate === null
                  ? (r.tag = 17)
                  : ((t = qr(-1, 1)), (t.tag = 2), Nn(r, t, 1))),
              (r.lanes |= 1)),
          e);
    }
    var G3 = Yr.ReactCurrentOwner,
      pt = !1;
    function tt(e, t, r, n) {
      t.child = e === null ? Yw(t, null, r, n) : Ao(t, e.child, r, n);
    }
    function NL(e, t, r, n, a) {
      r = r.render;
      var o = t.ref;
      return (
        To(t, a),
        (n = Eg(e, t, r, n, o, a)),
        (r = Tg()),
        e !== null && !pt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            Zr(e, t, a))
          : (te && r && hg(t), (t.flags |= 1), tt(e, t, n, a), t.child)
      );
    }
    function BL(e, t, r, n, a) {
      if (e === null) {
        var o = r.type;
        return typeof o == "function" &&
          !Og(o) &&
          o.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = o), CS(e, t, o, n, a))
          : ((e = qd(r.type, null, n, t, t.mode, a)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((o = e.child), !(e.lanes & a))) {
        var l = o.memoizedProps;
        if (
          ((r = r.compare),
          (r = r !== null ? r : ui),
          r(l, n) && e.ref === t.ref)
        )
          return Zr(e, t, a);
      }
      return (
        (t.flags |= 1),
        (e = Un(o, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function CS(e, t, r, n, a) {
      if (e !== null) {
        var o = e.memoizedProps;
        if (ui(o, n) && e.ref === t.ref)
          if (((pt = !1), (t.pendingProps = n = o), (e.lanes & a) !== 0))
            e.flags & 131072 && (pt = !0);
          else return (t.lanes = e.lanes), Zr(e, t, a);
      }
      return Hh(e, t, r, n, a);
    }
    function IS(e, t, r) {
      var n = t.pendingProps,
        a = n.children,
        o = e !== null ? e.memoizedState : null;
      if (n.mode === "hidden")
        if (!(t.mode & 1))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            q(Co, Ct),
            (Ct |= r);
        else {
          if (!(r & 1073741824))
            return (
              (e = o !== null ? o.baseLanes | r : r),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              q(Co, Ct),
              (Ct |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (n = o !== null ? o.baseLanes : r),
            q(Co, Ct),
            (Ct |= n);
        }
      else
        o !== null
          ? ((n = o.baseLanes | r), (t.memoizedState = null))
          : (n = r),
          q(Co, Ct),
          (Ct |= n);
      return tt(e, t, a, r), t.child;
    }
    function kS(e, t) {
      var r = t.ref;
      ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Hh(e, t, r, n, a) {
      var o = ht(r) ? ga : qe.current;
      return (
        (o = Do(t, o)),
        To(t, a),
        (r = Eg(e, t, r, n, o, a)),
        (n = Tg()),
        e !== null && !pt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            Zr(e, t, a))
          : (te && n && hg(t), (t.flags |= 1), tt(e, t, r, a), t.child)
      );
    }
    function OL(e, t, r, n, a) {
      if (ht(r)) {
        var o = !0;
        nf(t);
      } else o = !1;
      if ((To(t, a), t.stateNode === null))
        Wd(e, t), LS(t, r, n), Oh(t, r, n, a), (n = !0);
      else if (e === null) {
        var l = t.stateNode,
          u = t.memoizedProps;
        l.props = u;
        var i = l.context,
          f = r.contextType;
        typeof f == "object" && f !== null
          ? (f = Gt(f))
          : ((f = ht(r) ? ga : qe.current), (f = Do(t, f)));
        var p = r.getDerivedStateFromProps,
          h =
            typeof p == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function";
        h ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== n || i !== f) && RL(t, l, n, f)),
          (En = !1);
        var m = t.memoizedState;
        (l.state = m),
          sf(t, n, l, a),
          (i = t.memoizedState),
          u !== n || m !== i || mt.current || En
            ? (typeof p == "function" &&
                (Bh(t, r, p, n), (i = t.memoizedState)),
              (u = En || DL(t, r, u, n, m, i, f))
                ? (h ||
                    (typeof l.UNSAFE_componentWillMount != "function" &&
                      typeof l.componentWillMount != "function") ||
                    (typeof l.componentWillMount == "function" &&
                      l.componentWillMount(),
                    typeof l.UNSAFE_componentWillMount == "function" &&
                      l.UNSAFE_componentWillMount()),
                  typeof l.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof l.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = n),
                  (t.memoizedState = i)),
              (l.props = n),
              (l.state = i),
              (l.context = f),
              (n = u))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (n = !1));
      } else {
        (l = t.stateNode),
          bw(e, t),
          (u = t.memoizedProps),
          (f = t.type === t.elementType ? u : lr(t.type, u)),
          (l.props = f),
          (h = t.pendingProps),
          (m = l.context),
          (i = r.contextType),
          typeof i == "object" && i !== null
            ? (i = Gt(i))
            : ((i = ht(r) ? ga : qe.current), (i = Do(t, i)));
        var y = r.getDerivedStateFromProps;
        (p =
          typeof y == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function") ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== h || m !== i) && RL(t, l, n, i)),
          (En = !1),
          (m = t.memoizedState),
          (l.state = m),
          sf(t, n, l, a);
        var x = t.memoizedState;
        u !== h || m !== x || mt.current || En
          ? (typeof y == "function" && (Bh(t, r, y, n), (x = t.memoizedState)),
            (f = En || DL(t, r, f, n, m, x, i) || !1)
              ? (p ||
                  (typeof l.UNSAFE_componentWillUpdate != "function" &&
                    typeof l.componentWillUpdate != "function") ||
                  (typeof l.componentWillUpdate == "function" &&
                    l.componentWillUpdate(n, x, i),
                  typeof l.UNSAFE_componentWillUpdate == "function" &&
                    l.UNSAFE_componentWillUpdate(n, x, i)),
                typeof l.componentDidUpdate == "function" && (t.flags |= 4),
                typeof l.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof l.componentDidUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
                typeof l.getSnapshotBeforeUpdate != "function" ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = n),
                (t.memoizedState = x)),
            (l.props = n),
            (l.state = x),
            (l.context = i),
            (n = f))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (n = !1));
      }
      return Vh(e, t, r, n, o, a);
    }
    function Vh(e, t, r, n, a, o) {
      kS(e, t);
      var l = (t.flags & 128) !== 0;
      if (!n && !l) return a && CL(t, r, !1), Zr(e, t, o);
      (n = t.stateNode), (G3.current = t);
      var u =
        l && typeof r.getDerivedStateFromError != "function"
          ? null
          : n.render();
      return (
        (t.flags |= 1),
        e !== null && l
          ? ((t.child = Ao(t, e.child, null, o)), (t.child = Ao(t, null, u, o)))
          : tt(e, t, u, o),
        (t.memoizedState = n.state),
        a && CL(t, r, !0),
        t.child
      );
    }
    function PS(e) {
      var t = e.stateNode;
      t.pendingContext
        ? SL(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && SL(e, t.context, !1),
        Cg(e, t.containerInfo);
    }
    function UL(e, t, r, n, a) {
      return Ro(), yg(a), (t.flags |= 256), tt(e, t, r, n), t.child;
    }
    var jh = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Wh(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function ES(e, t, r) {
      var n = t.pendingProps,
        a = le.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        u;
      if (
        ((u = l) ||
          (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        u
          ? ((o = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (a |= 1),
        q(le, a & 1),
        e === null)
      )
        return (
          zh(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                ? e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((l = n.children),
              (e = n.fallback),
              o
                ? ((n = t.mode),
                  (o = t.child),
                  (l = { mode: "hidden", children: l }),
                  !(n & 1) && o !== null
                    ? ((o.childLanes = 0), (o.pendingProps = l))
                    : (o = Tf(l, n, 0, null)),
                  (e = ha(e, n, r, null)),
                  (o.return = t),
                  (e.return = t),
                  (o.sibling = e),
                  (t.child = o),
                  (t.child.memoizedState = Wh(r)),
                  (t.memoizedState = jh),
                  e)
                : Dg(t, l))
        );
      if (
        ((a = e.memoizedState), a !== null && ((u = a.dehydrated), u !== null))
      )
        return q3(e, t, l, n, u, a, r);
      if (o) {
        (o = n.fallback), (l = t.mode), (a = e.child), (u = a.sibling);
        var i = { mode: "hidden", children: n.children };
        return (
          !(l & 1) && t.child !== a
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = i),
              (t.deletions = null))
            : ((n = Un(a, i)), (n.subtreeFlags = a.subtreeFlags & 14680064)),
          u !== null
            ? (o = Un(u, o))
            : ((o = ha(o, l, r, null)), (o.flags |= 2)),
          (o.return = t),
          (n.return = t),
          (n.sibling = o),
          (t.child = n),
          (n = o),
          (o = t.child),
          (l = e.child.memoizedState),
          (l =
            l === null
              ? Wh(r)
              : {
                  baseLanes: l.baseLanes | r,
                  cachePool: null,
                  transitions: l.transitions,
                }),
          (o.memoizedState = l),
          (o.childLanes = e.childLanes & ~r),
          (t.memoizedState = jh),
          n
        );
      }
      return (
        (o = e.child),
        (e = o.sibling),
        (n = Un(o, { mode: "visible", children: n.children })),
        !(t.mode & 1) && (n.lanes = r),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((r = t.deletions),
          r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n
      );
    }
    function Dg(e, t) {
      return (
        (t = Tf({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function _d(e, t, r, n) {
      return (
        n !== null && yg(n),
        Ao(t, e.child, null, r),
        (e = Dg(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function q3(e, t, r, n, a, o, l) {
      if (r)
        return t.flags & 256
          ? ((t.flags &= -257), (n = nh(Error(P(422)))), _d(e, t, l, n))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (a = t.mode),
            (n = Tf({ mode: "visible", children: n.children }, a, 0, null)),
            (o = ha(o, a, l, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            t.mode & 1 && Ao(t, e.child, null, l),
            (t.child.memoizedState = Wh(l)),
            (t.memoizedState = jh),
            o);
      if (!(t.mode & 1)) return _d(e, t, l, null);
      if (a.data === "$!") {
        if (((n = a.nextSibling && a.nextSibling.dataset), n)) var u = n.dgst;
        return (
          (n = u), (o = Error(P(419))), (n = nh(o, n, void 0)), _d(e, t, l, n)
        );
      }
      if (((u = (l & e.childLanes) !== 0), pt || u)) {
        if (((n = Te), n !== null)) {
          switch (l & -l) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          (a = a & (n.suspendedLanes | l) ? 0 : a),
            a !== 0 &&
              a !== o.retryLane &&
              ((o.retryLane = a), Xr(e, a), dr(n, e, a, -1));
        }
        return Bg(), (n = nh(Error(P(421)))), _d(e, t, l, n);
      }
      return a.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = oE.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (It = zn(a.nextSibling)),
          (kt = t),
          (te = !0),
          (ir = null),
          e !== null &&
            ((Vt[jt++] = $r),
            (Vt[jt++] = Gr),
            (Vt[jt++] = ya),
            ($r = e.id),
            (Gr = e.overflow),
            (ya = t)),
          (t = Dg(t, n.children)),
          (t.flags |= 4096),
          t);
    }
    function HL(e, t, r) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), Nh(e.return, t, r);
    }
    function ah(e, t, r, n, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: r,
            tailMode: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = n),
          (o.tail = r),
          (o.tailMode = a));
    }
    function TS(e, t, r) {
      var n = t.pendingProps,
        a = n.revealOrder,
        o = n.tail;
      if ((tt(e, t, n.children, r), (n = le.current), n & 2))
        (n = (n & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && HL(e, r, t);
            else if (e.tag === 19) HL(e, r, t);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        n &= 1;
      }
      if ((q(le, n), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (r = t.child, a = null; r !== null; )
              (e = r.alternate),
                e !== null && df(e) === null && (a = r),
                (r = r.sibling);
            (r = a),
              r === null
                ? ((a = t.child), (t.child = null))
                : ((a = r.sibling), (r.sibling = null)),
              ah(t, !1, a, r, o);
            break;
          case "backwards":
            for (r = null, a = t.child, t.child = null; a !== null; ) {
              if (((e = a.alternate), e !== null && df(e) === null)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = r), (r = a), (a = e);
            }
            ah(t, !0, r, null, o);
            break;
          case "together":
            ah(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Wd(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Zr(e, t, r) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (xa |= t.lanes),
        !(r & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(P(153));
      if (t.child !== null) {
        for (
          e = t.child, r = Un(e, e.pendingProps), t.child = r, r.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (r = r.sibling = Un(e, e.pendingProps)),
            (r.return = t);
        r.sibling = null;
      }
      return t.child;
    }
    function Q3(e, t, r) {
      switch (t.tag) {
        case 3:
          PS(t), Ro();
          break;
        case 5:
          eS(t);
          break;
        case 1:
          ht(t.type) && nf(t);
          break;
        case 4:
          Cg(t, t.stateNode.containerInfo);
          break;
        case 10:
          var n = t.type._context,
            a = t.memoizedProps.value;
          q(lf, n._currentValue), (n._currentValue = a);
          break;
        case 13:
          if (((n = t.memoizedState), n !== null))
            return n.dehydrated !== null
              ? (q(le, le.current & 1), (t.flags |= 128), null)
              : r & t.child.childLanes
              ? ES(e, t, r)
              : (q(le, le.current & 1),
                (e = Zr(e, t, r)),
                e !== null ? e.sibling : null);
          q(le, le.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
            if (n) return TS(e, t, r);
            t.flags |= 128;
          }
          if (
            ((a = t.memoizedState),
            a !== null &&
              ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
            q(le, le.current),
            n)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), IS(e, t, r);
      }
      return Zr(e, t, r);
    }
    var MS, $h, FS, DS;
    MS = function (e, t) {
      for (var r = t.child; r !== null; ) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
          (r.child.return = r), (r = r.child);
          continue;
        }
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    };
    $h = function () {};
    FS = function (e, t, r, n) {
      var a = e.memoizedProps;
      if (a !== n) {
        (e = t.stateNode), pa(Er.current);
        var o = null;
        switch (r) {
          case "input":
            (a = ch(e, a)), (n = ch(e, n)), (o = []);
            break;
          case "select":
            (a = ie({}, a, { value: void 0 })),
              (n = ie({}, n, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (a = hh(e, a)), (n = hh(e, n)), (o = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof n.onClick == "function" &&
              (e.onclick = tf);
        }
        yh(r, n);
        var l;
        r = null;
        for (f in a)
          if (!n.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null)
            if (f === "style") {
              var u = a[f];
              for (l in u) u.hasOwnProperty(l) && (r || (r = {}), (r[l] = ""));
            } else
              f !== "dangerouslySetInnerHTML" &&
                f !== "children" &&
                f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                f !== "autoFocus" &&
                (ei.hasOwnProperty(f)
                  ? o || (o = [])
                  : (o = o || []).push(f, null));
        for (f in n) {
          var i = n[f];
          if (
            ((u = a?.[f]),
            n.hasOwnProperty(f) && i !== u && (i != null || u != null))
          )
            if (f === "style")
              if (u) {
                for (l in u)
                  !u.hasOwnProperty(l) ||
                    (i && i.hasOwnProperty(l)) ||
                    (r || (r = {}), (r[l] = ""));
                for (l in i)
                  i.hasOwnProperty(l) &&
                    u[l] !== i[l] &&
                    (r || (r = {}), (r[l] = i[l]));
              } else r || (o || (o = []), o.push(f, r)), (r = i);
            else
              f === "dangerouslySetInnerHTML"
                ? ((i = i ? i.__html : void 0),
                  (u = u ? u.__html : void 0),
                  i != null && u !== i && (o = o || []).push(f, i))
                : f === "children"
                ? (typeof i != "string" && typeof i != "number") ||
                  (o = o || []).push(f, "" + i)
                : f !== "suppressContentEditableWarning" &&
                  f !== "suppressHydrationWarning" &&
                  (ei.hasOwnProperty(f)
                    ? (i != null && f === "onScroll" && J("scroll", e),
                      o || u === i || (o = []))
                    : (o = o || []).push(f, i));
        }
        r && (o = o || []).push("style", r);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4);
      }
    };
    DS = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    };
    function Ou(e, t) {
      if (!te)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
              t.alternate !== null && (r = t), (t = t.sibling);
            r === null ? (e.tail = null) : (r.sibling = null);
            break;
          case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
              r.alternate !== null && (n = r), (r = r.sibling);
            n === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (n.sibling = null);
        }
    }
    function $e(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        n = 0;
      if (t)
        for (var a = e.child; a !== null; )
          (r |= a.lanes | a.childLanes),
            (n |= a.subtreeFlags & 14680064),
            (n |= a.flags & 14680064),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; a !== null; )
          (r |= a.lanes | a.childLanes),
            (n |= a.subtreeFlags),
            (n |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= n), (e.childLanes = r), t;
    }
    function K3(e, t, r) {
      var n = t.pendingProps;
      switch ((gg(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return $e(t), null;
        case 1:
          return ht(t.type) && rf(), $e(t), null;
        case 3:
          return (
            (n = t.stateNode),
            _o(),
            b(mt),
            b(qe),
            kg(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Rd(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), ir !== null && (Jh(ir), (ir = null)))),
            $h(e, t),
            $e(t),
            null
          );
        case 5:
          Ig(t);
          var a = pa(ci.current);
          if (((r = t.type), e !== null && t.stateNode != null))
            FS(e, t, r, n, a),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(P(166));
              return $e(t), null;
            }
            if (((e = pa(Er.current)), Rd(t))) {
              (n = t.stateNode), (r = t.type);
              var o = t.memoizedProps;
              switch (((n[kr] = t), (n[di] = o), (e = (t.mode & 1) !== 0), r)) {
                case "dialog":
                  J("cancel", n), J("close", n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  J("load", n);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < $u.length; a++) J($u[a], n);
                  break;
                case "source":
                  J("error", n);
                  break;
                case "img":
                case "image":
                case "link":
                  J("error", n), J("load", n);
                  break;
                case "details":
                  J("toggle", n);
                  break;
                case "input":
                  Kx(n, o), J("invalid", n);
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!o.multiple }),
                    J("invalid", n);
                  break;
                case "textarea":
                  Zx(n, o), J("invalid", n);
              }
              yh(r, o), (a = null);
              for (var l in o)
                if (o.hasOwnProperty(l)) {
                  var u = o[l];
                  l === "children"
                    ? typeof u == "string"
                      ? n.textContent !== u &&
                        (o.suppressHydrationWarning !== !0 &&
                          Dd(n.textContent, u, e),
                        (a = ["children", u]))
                      : typeof u == "number" &&
                        n.textContent !== "" + u &&
                        (o.suppressHydrationWarning !== !0 &&
                          Dd(n.textContent, u, e),
                        (a = ["children", "" + u]))
                    : ei.hasOwnProperty(l) &&
                      u != null &&
                      l === "onScroll" &&
                      J("scroll", n);
                }
              switch (r) {
                case "input":
                  xd(n), Xx(n, o, !0);
                  break;
                case "textarea":
                  xd(n), Yx(n);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof o.onClick == "function" && (n.onclick = tf);
              }
              (n = a), (t.updateQueue = n), n !== null && (t.flags |= 4);
            } else {
              (l = a.nodeType === 9 ? a : a.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = ow(r)),
                e === "http://www.w3.org/1999/xhtml"
                  ? r === "script"
                    ? ((e = l.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof n.is == "string"
                    ? (e = l.createElement(r, { is: n.is }))
                    : ((e = l.createElement(r)),
                      r === "select" &&
                        ((l = e),
                        n.multiple
                          ? (l.multiple = !0)
                          : n.size && (l.size = n.size)))
                  : (e = l.createElementNS(e, r)),
                (e[kr] = t),
                (e[di] = n),
                MS(e, t, !1, !1),
                (t.stateNode = e);
              e: {
                switch (((l = vh(r, n)), r)) {
                  case "dialog":
                    J("cancel", e), J("close", e), (a = n);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    J("load", e), (a = n);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < $u.length; a++) J($u[a], e);
                    a = n;
                    break;
                  case "source":
                    J("error", e), (a = n);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    J("error", e), J("load", e), (a = n);
                    break;
                  case "details":
                    J("toggle", e), (a = n);
                    break;
                  case "input":
                    Kx(e, n), (a = ch(e, n)), J("invalid", e);
                    break;
                  case "option":
                    a = n;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!n.multiple }),
                      (a = ie({}, n, { value: void 0 })),
                      J("invalid", e);
                    break;
                  case "textarea":
                    Zx(e, n), (a = hh(e, n)), J("invalid", e);
                    break;
                  default:
                    a = n;
                }
                yh(r, a), (u = a);
                for (o in u)
                  if (u.hasOwnProperty(o)) {
                    var i = u[o];
                    o === "style"
                      ? iw(e, i)
                      : o === "dangerouslySetInnerHTML"
                      ? ((i = i ? i.__html : void 0), i != null && lw(e, i))
                      : o === "children"
                      ? typeof i == "string"
                        ? (r !== "textarea" || i !== "") && ti(e, i)
                        : typeof i == "number" && ti(e, "" + i)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ei.hasOwnProperty(o)
                          ? i != null && o === "onScroll" && J("scroll", e)
                          : i != null && tg(e, o, i, l));
                  }
                switch (r) {
                  case "input":
                    xd(e), Xx(e, n, !1);
                    break;
                  case "textarea":
                    xd(e), Yx(e);
                    break;
                  case "option":
                    n.value != null &&
                      e.setAttribute("value", "" + Hn(n.value));
                    break;
                  case "select":
                    (e.multiple = !!n.multiple),
                      (o = n.value),
                      o != null
                        ? Io(e, !!n.multiple, o, !1)
                        : n.defaultValue != null &&
                          Io(e, !!n.multiple, n.defaultValue, !0);
                    break;
                  default:
                    typeof a.onClick == "function" && (e.onclick = tf);
                }
                switch (r) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    n = !!n.autoFocus;
                    break e;
                  case "img":
                    n = !0;
                    break e;
                  default:
                    n = !1;
                }
              }
              n && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return $e(t), null;
        case 6:
          if (e && t.stateNode != null) DS(e, t, e.memoizedProps, n);
          else {
            if (typeof n != "string" && t.stateNode === null)
              throw Error(P(166));
            if (((r = pa(ci.current)), pa(Er.current), Rd(t))) {
              if (
                ((n = t.stateNode),
                (r = t.memoizedProps),
                (n[kr] = t),
                (o = n.nodeValue !== r) && ((e = kt), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Dd(n.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      Dd(n.nodeValue, r, (e.mode & 1) !== 0);
                }
              o && (t.flags |= 4);
            } else
              (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
                (n[kr] = t),
                (t.stateNode = n);
          }
          return $e(t), null;
        case 13:
          if (
            (b(le),
            (n = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (te && It !== null && t.mode & 1 && !(t.flags & 128))
              Xw(), Ro(), (t.flags |= 98560), (o = !1);
            else if (((o = Rd(t)), n !== null && n.dehydrated !== null)) {
              if (e === null) {
                if (!o) throw Error(P(318));
                if (
                  ((o = t.memoizedState),
                  (o = o !== null ? o.dehydrated : null),
                  !o)
                )
                  throw Error(P(317));
                o[kr] = t;
              } else
                Ro(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              $e(t), (o = !1);
            } else ir !== null && (Jh(ir), (ir = null)), (o = !0);
            if (!o) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = r), t)
            : ((n = n !== null),
              n !== (e !== null && e.memoizedState !== null) &&
                n &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || le.current & 1 ? Ce === 0 && (Ce = 3) : Bg())),
              t.updateQueue !== null && (t.flags |= 4),
              $e(t),
              null);
        case 4:
          return (
            _o(),
            $h(e, t),
            e === null && ii(t.stateNode.containerInfo),
            $e(t),
            null
          );
        case 10:
          return Lg(t.type._context), $e(t), null;
        case 17:
          return ht(t.type) && rf(), $e(t), null;
        case 19:
          if ((b(le), (o = t.memoizedState), o === null)) return $e(t), null;
          if (((n = (t.flags & 128) !== 0), (l = o.rendering), l === null))
            if (n) Ou(o, !1);
            else {
              if (Ce !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((l = df(e)), l !== null)) {
                    for (
                      t.flags |= 128,
                        Ou(o, !1),
                        n = l.updateQueue,
                        n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        n = r,
                        r = t.child;
                      r !== null;

                    )
                      (o = r),
                        (e = n),
                        (o.flags &= 14680066),
                        (l = o.alternate),
                        l === null
                          ? ((o.childLanes = 0),
                            (o.lanes = e),
                            (o.child = null),
                            (o.subtreeFlags = 0),
                            (o.memoizedProps = null),
                            (o.memoizedState = null),
                            (o.updateQueue = null),
                            (o.dependencies = null),
                            (o.stateNode = null))
                          : ((o.childLanes = l.childLanes),
                            (o.lanes = l.lanes),
                            (o.child = l.child),
                            (o.subtreeFlags = 0),
                            (o.deletions = null),
                            (o.memoizedProps = l.memoizedProps),
                            (o.memoizedState = l.memoizedState),
                            (o.updateQueue = l.updateQueue),
                            (o.type = l.type),
                            (e = l.dependencies),
                            (o.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (r = r.sibling);
                    return q(le, (le.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null &&
                he() > No &&
                ((t.flags |= 128), (n = !0), Ou(o, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = df(l)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  Ou(o, !0),
                  o.tail === null &&
                    o.tailMode === "hidden" &&
                    !l.alternate &&
                    !te)
                )
                  return $e(t), null;
              } else
                2 * he() - o.renderingStartTime > No &&
                  r !== 1073741824 &&
                  ((t.flags |= 128), (n = !0), Ou(o, !1), (t.lanes = 4194304));
            o.isBackwards
              ? ((l.sibling = t.child), (t.child = l))
              : ((r = o.last),
                r !== null ? (r.sibling = l) : (t.child = l),
                (o.last = l));
          }
          return o.tail !== null
            ? ((t = o.tail),
              (o.rendering = t),
              (o.tail = t.sibling),
              (o.renderingStartTime = he()),
              (t.sibling = null),
              (r = le.current),
              q(le, n ? (r & 1) | 2 : r & 1),
              t)
            : ($e(t), null);
        case 22:
        case 23:
          return (
            Ng(),
            (n = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
            n && t.mode & 1
              ? Ct & 1073741824 &&
                ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : $e(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(P(156, t.tag));
    }
    function X3(e, t) {
      switch ((gg(t), t.tag)) {
        case 1:
          return (
            ht(t.type) && rf(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            _o(),
            b(mt),
            b(qe),
            kg(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return Ig(t), null;
        case 13:
          if (
            (b(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(P(340));
            Ro();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return b(le), null;
        case 4:
          return _o(), null;
        case 10:
          return Lg(t.type._context), null;
        case 22:
        case 23:
          return Ng(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var zd = !1,
      Ge = !1,
      Z3 = typeof WeakSet == "function" ? WeakSet : Set,
      D = null;
    function So(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == "function")
          try {
            r(null);
          } catch (n) {
            fe(e, t, n);
          }
        else r.current = null;
    }
    function Gh(e, t, r) {
      try {
        r();
      } catch (n) {
        fe(e, t, n);
      }
    }
    var VL = !1;
    function Y3(e, t) {
      if (((Th = Jd), (e = Nw()), mg(e))) {
        if ("selectionStart" in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
              r = n.anchorNode;
              var a = n.anchorOffset,
                o = n.focusNode;
              n = n.focusOffset;
              try {
                r.nodeType, o.nodeType;
              } catch {
                r = null;
                break e;
              }
              var l = 0,
                u = -1,
                i = -1,
                f = 0,
                p = 0,
                h = e,
                m = null;
              t: for (;;) {
                for (
                  var y;
                  h !== r || (a !== 0 && h.nodeType !== 3) || (u = l + a),
                    h !== o || (n !== 0 && h.nodeType !== 3) || (i = l + n),
                    h.nodeType === 3 && (l += h.nodeValue.length),
                    (y = h.firstChild) !== null;

                )
                  (m = h), (h = y);
                for (;;) {
                  if (h === e) break t;
                  if (
                    (m === r && ++f === a && (u = l),
                    m === o && ++p === n && (i = l),
                    (y = h.nextSibling) !== null)
                  )
                    break;
                  (h = m), (m = h.parentNode);
                }
                h = y;
              }
              r = u === -1 || i === -1 ? null : { start: u, end: i };
            } else r = null;
          }
        r = r || { start: 0, end: 0 };
      } else r = null;
      for (
        Mh = { focusedElem: e, selectionRange: r }, Jd = !1, D = t;
        D !== null;

      )
        if (
          ((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          (e.return = t), (D = e);
        else
          for (; D !== null; ) {
            t = D;
            try {
              var x = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (x !== null) {
                      var v = x.memoizedProps,
                        E = x.memoizedState,
                        d = t.stateNode,
                        s = d.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? v : lr(t.type, v),
                          E
                        );
                      d.__reactInternalSnapshotBeforeUpdate = s;
                    }
                    break;
                  case 3:
                    var c = t.stateNode.containerInfo;
                    c.nodeType === 1
                      ? (c.textContent = "")
                      : c.nodeType === 9 &&
                        c.documentElement &&
                        c.removeChild(c.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(P(163));
                }
            } catch (g) {
              fe(t, t.return, g);
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (D = e);
              break;
            }
            D = t.return;
          }
      return (x = VL), (VL = !1), x;
    }
    function Yu(e, t, r) {
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var a = (n = n.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.destroy;
            (a.destroy = void 0), o !== void 0 && Gh(t, r, o);
          }
          a = a.next;
        } while (a !== n);
      }
    }
    function Pf(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var r = (t = t.next);
        do {
          if ((r.tag & e) === e) {
            var n = r.create;
            r.destroy = n();
          }
          r = r.next;
        } while (r !== t);
      }
    }
    function qh(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode;
        switch (e.tag) {
          case 5:
            e = r;
            break;
          default:
            e = r;
        }
        typeof t == "function" ? t(e) : (t.current = e);
      }
    }
    function RS(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), RS(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[kr],
            delete t[di],
            delete t[Rh],
            delete t[A3],
            delete t[_3])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function AS(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function jL(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || AS(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qh(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode),
          t
            ? r.nodeType === 8
              ? r.parentNode.insertBefore(e, t)
              : r.insertBefore(e, t)
            : (r.nodeType === 8
                ? ((t = r.parentNode), t.insertBefore(e, r))
                : ((t = r), t.appendChild(e)),
              (r = r._reactRootContainer),
              r != null || t.onclick !== null || (t.onclick = tf));
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Qh(e, t, r), e = e.sibling; e !== null; )
          Qh(e, t, r), (e = e.sibling);
    }
    function Kh(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Kh(e, t, r), e = e.sibling; e !== null; )
          Kh(e, t, r), (e = e.sibling);
    }
    var Ae = null,
      ur = !1;
    function kn(e, t, r) {
      for (r = r.child; r !== null; ) _S(e, t, r), (r = r.sibling);
    }
    function _S(e, t, r) {
      if (Pr && typeof Pr.onCommitFiberUnmount == "function")
        try {
          Pr.onCommitFiberUnmount(vf, r);
        } catch {}
      switch (r.tag) {
        case 5:
          Ge || So(r, t);
        case 6:
          var n = Ae,
            a = ur;
          (Ae = null),
            kn(e, t, r),
            (Ae = n),
            (ur = a),
            Ae !== null &&
              (ur
                ? ((e = Ae),
                  (r = r.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(r)
                    : e.removeChild(r))
                : Ae.removeChild(r.stateNode));
          break;
        case 18:
          Ae !== null &&
            (ur
              ? ((e = Ae),
                (r = r.stateNode),
                e.nodeType === 8
                  ? Ym(e.parentNode, r)
                  : e.nodeType === 1 && Ym(e, r),
                oi(e))
              : Ym(Ae, r.stateNode));
          break;
        case 4:
          (n = Ae),
            (a = ur),
            (Ae = r.stateNode.containerInfo),
            (ur = !0),
            kn(e, t, r),
            (Ae = n),
            (ur = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !Ge &&
            ((n = r.updateQueue),
            n !== null && ((n = n.lastEffect), n !== null))
          ) {
            a = n = n.next;
            do {
              var o = a,
                l = o.destroy;
              (o = o.tag),
                l !== void 0 && (o & 2 || o & 4) && Gh(r, t, l),
                (a = a.next);
            } while (a !== n);
          }
          kn(e, t, r);
          break;
        case 1:
          if (
            !Ge &&
            (So(r, t),
            (n = r.stateNode),
            typeof n.componentWillUnmount == "function")
          )
            try {
              (n.props = r.memoizedProps),
                (n.state = r.memoizedState),
                n.componentWillUnmount();
            } catch (u) {
              fe(r, t, u);
            }
          kn(e, t, r);
          break;
        case 21:
          kn(e, t, r);
          break;
        case 22:
          r.mode & 1
            ? ((Ge = (n = Ge) || r.memoizedState !== null),
              kn(e, t, r),
              (Ge = n))
            : kn(e, t, r);
          break;
        default:
          kn(e, t, r);
      }
    }
    function WL(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new Z3()),
          t.forEach(function (n) {
            var a = lE.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(a, a));
          });
      }
    }
    function or(e, t) {
      var r = t.deletions;
      if (r !== null)
        for (var n = 0; n < r.length; n++) {
          var a = r[n];
          try {
            var o = e,
              l = t,
              u = l;
            e: for (; u !== null; ) {
              switch (u.tag) {
                case 5:
                  (Ae = u.stateNode), (ur = !1);
                  break e;
                case 3:
                  (Ae = u.stateNode.containerInfo), (ur = !0);
                  break e;
                case 4:
                  (Ae = u.stateNode.containerInfo), (ur = !0);
                  break e;
              }
              u = u.return;
            }
            if (Ae === null) throw Error(P(160));
            _S(o, l, a), (Ae = null), (ur = !1);
            var i = a.alternate;
            i !== null && (i.return = null), (a.return = null);
          } catch (f) {
            fe(a, t, f);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) zS(t, e), (t = t.sibling);
    }
    function zS(e, t) {
      var r = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((or(t, e), Cr(e), n & 4)) {
            try {
              Yu(3, e, e.return), Pf(3, e);
            } catch (v) {
              fe(e, e.return, v);
            }
            try {
              Yu(5, e, e.return);
            } catch (v) {
              fe(e, e.return, v);
            }
          }
          break;
        case 1:
          or(t, e), Cr(e), n & 512 && r !== null && So(r, r.return);
          break;
        case 5:
          if (
            (or(t, e),
            Cr(e),
            n & 512 && r !== null && So(r, r.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              ti(a, "");
            } catch (v) {
              fe(e, e.return, v);
            }
          }
          if (n & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              l = r !== null ? r.memoizedProps : o,
              u = e.type,
              i = e.updateQueue;
            if (((e.updateQueue = null), i !== null))
              try {
                u === "input" &&
                  o.type === "radio" &&
                  o.name != null &&
                  nw(a, o),
                  vh(u, l);
                var f = vh(u, o);
                for (l = 0; l < i.length; l += 2) {
                  var p = i[l],
                    h = i[l + 1];
                  p === "style"
                    ? iw(a, h)
                    : p === "dangerouslySetInnerHTML"
                    ? lw(a, h)
                    : p === "children"
                    ? ti(a, h)
                    : tg(a, p, h, f);
                }
                switch (u) {
                  case "input":
                    ph(a, o);
                    break;
                  case "textarea":
                    aw(a, o);
                    break;
                  case "select":
                    var m = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var y = o.value;
                    y != null
                      ? Io(a, !!o.multiple, y, !1)
                      : m !== !!o.multiple &&
                        (o.defaultValue != null
                          ? Io(a, !!o.multiple, o.defaultValue, !0)
                          : Io(a, !!o.multiple, o.multiple ? [] : "", !1));
                }
                a[di] = o;
              } catch (v) {
                fe(e, e.return, v);
              }
          }
          break;
        case 6:
          if ((or(t, e), Cr(e), n & 4)) {
            if (e.stateNode === null) throw Error(P(162));
            (a = e.stateNode), (o = e.memoizedProps);
            try {
              a.nodeValue = o;
            } catch (v) {
              fe(e, e.return, v);
            }
          }
          break;
        case 3:
          if (
            (or(t, e),
            Cr(e),
            n & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              oi(t.containerInfo);
            } catch (v) {
              fe(e, e.return, v);
            }
          break;
        case 4:
          or(t, e), Cr(e);
          break;
        case 13:
          or(t, e),
            Cr(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (_g = he())),
            n & 4 && WL(e);
          break;
        case 22:
          if (
            ((p = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((Ge = (f = Ge) || p), or(t, e), (Ge = f)) : or(t, e),
            Cr(e),
            n & 8192)
          ) {
            if (
              ((f = e.memoizedState !== null),
              (e.stateNode.isHidden = f) && !p && e.mode & 1)
            )
              for (D = e, p = e.child; p !== null; ) {
                for (h = D = p; D !== null; ) {
                  switch (((m = D), (y = m.child), m.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Yu(4, m, m.return);
                      break;
                    case 1:
                      So(m, m.return);
                      var x = m.stateNode;
                      if (typeof x.componentWillUnmount == "function") {
                        (n = m), (r = m.return);
                        try {
                          (t = n),
                            (x.props = t.memoizedProps),
                            (x.state = t.memoizedState),
                            x.componentWillUnmount();
                        } catch (v) {
                          fe(n, r, v);
                        }
                      }
                      break;
                    case 5:
                      So(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        GL(h);
                        continue;
                      }
                  }
                  y !== null ? ((y.return = m), (D = y)) : GL(h);
                }
                p = p.sibling;
              }
            e: for (p = null, h = e; ; ) {
              if (h.tag === 5) {
                if (p === null) {
                  p = h;
                  try {
                    (a = h.stateNode),
                      f
                        ? ((o = a.style),
                          typeof o.setProperty == "function"
                            ? o.setProperty("display", "none", "important")
                            : (o.display = "none"))
                        : ((u = h.stateNode),
                          (i = h.memoizedProps.style),
                          (l =
                            i != null && i.hasOwnProperty("display")
                              ? i.display
                              : null),
                          (u.style.display = uw("display", l)));
                  } catch (v) {
                    fe(e, e.return, v);
                  }
                }
              } else if (h.tag === 6) {
                if (p === null)
                  try {
                    h.stateNode.nodeValue = f ? "" : h.memoizedProps;
                  } catch (v) {
                    fe(e, e.return, v);
                  }
              } else if (
                ((h.tag !== 22 && h.tag !== 23) ||
                  h.memoizedState === null ||
                  h === e) &&
                h.child !== null
              ) {
                (h.child.return = h), (h = h.child);
                continue;
              }
              if (h === e) break e;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === e) break e;
                p === h && (p = null), (h = h.return);
              }
              p === h && (p = null),
                (h.sibling.return = h.return),
                (h = h.sibling);
            }
          }
          break;
        case 19:
          or(t, e), Cr(e), n & 4 && WL(e);
          break;
        case 21:
          break;
        default:
          or(t, e), Cr(e);
      }
    }
    function Cr(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null; ) {
              if (AS(r)) {
                var n = r;
                break e;
              }
              r = r.return;
            }
            throw Error(P(160));
          }
          switch (n.tag) {
            case 5:
              var a = n.stateNode;
              n.flags & 32 && (ti(a, ""), (n.flags &= -33));
              var o = jL(e);
              Kh(e, o, a);
              break;
            case 3:
            case 4:
              var l = n.stateNode.containerInfo,
                u = jL(e);
              Qh(e, u, l);
              break;
            default:
              throw Error(P(161));
          }
        } catch (i) {
          fe(e, e.return, i);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function J3(e, t, r) {
      (D = e), NS(e, t, r);
    }
    function NS(e, t, r) {
      for (var n = (e.mode & 1) !== 0; D !== null; ) {
        var a = D,
          o = a.child;
        if (a.tag === 22 && n) {
          var l = a.memoizedState !== null || zd;
          if (!l) {
            var u = a.alternate,
              i = (u !== null && u.memoizedState !== null) || Ge;
            u = zd;
            var f = Ge;
            if (((zd = l), (Ge = i) && !f))
              for (D = a; D !== null; )
                (l = D),
                  (i = l.child),
                  l.tag === 22 && l.memoizedState !== null
                    ? qL(a)
                    : i !== null
                    ? ((i.return = l), (D = i))
                    : qL(a);
            for (; o !== null; ) (D = o), NS(o, t, r), (o = o.sibling);
            (D = a), (zd = u), (Ge = f);
          }
          $L(e, t, r);
        } else
          a.subtreeFlags & 8772 && o !== null
            ? ((o.return = a), (D = o))
            : $L(e, t, r);
      }
    }
    function $L(e) {
      for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
          var r = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Ge || Pf(5, t);
                  break;
                case 1:
                  var n = t.stateNode;
                  if (t.flags & 4 && !Ge)
                    if (r === null) n.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? r.memoizedProps
                          : lr(t.type, r.memoizedProps);
                      n.componentDidUpdate(
                        a,
                        r.memoizedState,
                        n.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && TL(t, o, n);
                  break;
                case 3:
                  var l = t.updateQueue;
                  if (l !== null) {
                    if (((r = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                    TL(t, l, r);
                  }
                  break;
                case 5:
                  var u = t.stateNode;
                  if (r === null && t.flags & 4) {
                    r = u;
                    var i = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        i.autoFocus && r.focus();
                        break;
                      case "img":
                        i.src && (r.src = i.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var f = t.alternate;
                    if (f !== null) {
                      var p = f.memoizedState;
                      if (p !== null) {
                        var h = p.dehydrated;
                        h !== null && oi(h);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(P(163));
              }
            Ge || (t.flags & 512 && qh(t));
          } catch (m) {
            fe(t, t.return, m);
          }
        }
        if (t === e) {
          D = null;
          break;
        }
        if (((r = t.sibling), r !== null)) {
          (r.return = t.return), (D = r);
          break;
        }
        D = t.return;
      }
    }
    function GL(e) {
      for (; D !== null; ) {
        var t = D;
        if (t === e) {
          D = null;
          break;
        }
        var r = t.sibling;
        if (r !== null) {
          (r.return = t.return), (D = r);
          break;
        }
        D = t.return;
      }
    }
    function qL(e) {
      for (; D !== null; ) {
        var t = D;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                Pf(4, t);
              } catch (i) {
                fe(t, r, i);
              }
              break;
            case 1:
              var n = t.stateNode;
              if (typeof n.componentDidMount == "function") {
                var a = t.return;
                try {
                  n.componentDidMount();
                } catch (i) {
                  fe(t, a, i);
                }
              }
              var o = t.return;
              try {
                qh(t);
              } catch (i) {
                fe(t, o, i);
              }
              break;
            case 5:
              var l = t.return;
              try {
                qh(t);
              } catch (i) {
                fe(t, l, i);
              }
          }
        } catch (i) {
          fe(t, t.return, i);
        }
        if (t === e) {
          D = null;
          break;
        }
        var u = t.sibling;
        if (u !== null) {
          (u.return = t.return), (D = u);
          break;
        }
        D = t.return;
      }
    }
    var b3 = Math.ceil,
      pf = Yr.ReactCurrentDispatcher,
      Rg = Yr.ReactCurrentOwner,
      $t = Yr.ReactCurrentBatchConfig,
      U = 0,
      Te = null,
      ve = null,
      _e = 0,
      Ct = 0,
      Co = Wn(0),
      Ce = 0,
      gi = null,
      xa = 0,
      Ef = 0,
      Ag = 0,
      Ju = null,
      ct = null,
      _g = 0,
      No = 1 / 0,
      jr = null,
      mf = !1,
      Xh = null,
      Bn = null,
      Nd = !1,
      Dn = null,
      hf = 0,
      bu = 0,
      Zh = null,
      $d = -1,
      Gd = 0;
    function rt() {
      return U & 6 ? he() : $d !== -1 ? $d : ($d = he());
    }
    function On(e) {
      return e.mode & 1
        ? U & 2 && _e !== 0
          ? _e & -_e
          : N3.transition !== null
          ? (Gd === 0 && (Gd = Lw()), Gd)
          : ((e = j),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Ew(e.type))),
            e)
        : 1;
    }
    function dr(e, t, r, n) {
      if (50 < bu) throw ((bu = 0), (Zh = null), Error(P(185)));
      yi(e, r, n),
        (!(U & 2) || e !== Te) &&
          (e === Te && (!(U & 2) && (Ef |= r), Ce === 4 && Mn(e, _e)),
          gt(e, n),
          r === 1 &&
            U === 0 &&
            !(t.mode & 1) &&
            ((No = he() + 500), Cf && $n()));
    }
    function gt(e, t) {
      var r = e.callbackNode;
      OP(e, t);
      var n = Yd(e, e === Te ? _e : 0);
      if (n === 0)
        r !== null && eL(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = n & -n), e.callbackPriority !== t)) {
        if ((r != null && eL(r), t === 1))
          e.tag === 0 ? z3(QL.bind(null, e)) : qw(QL.bind(null, e)),
            D3(function () {
              !(U & 6) && $n();
            }),
            (r = null);
        else {
          switch (ww(n)) {
            case 1:
              r = lg;
              break;
            case 4:
              r = vw;
              break;
            case 16:
              r = Zd;
              break;
            case 536870912:
              r = xw;
              break;
            default:
              r = Zd;
          }
          r = $S(r, BS.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function BS(e, t) {
      if ((($d = -1), (Gd = 0), U & 6)) throw Error(P(327));
      var r = e.callbackNode;
      if (Mo() && e.callbackNode !== r) return null;
      var n = Yd(e, e === Te ? _e : 0);
      if (n === 0) return null;
      if (n & 30 || n & e.expiredLanes || t) t = gf(e, n);
      else {
        t = n;
        var a = U;
        U |= 2;
        var o = US();
        (Te !== e || _e !== t) && ((jr = null), (No = he() + 500), ma(e, t));
        do
          try {
            rE();
            break;
          } catch (u) {
            OS(e, u);
          }
        while (!0);
        xg(),
          (pf.current = o),
          (U = a),
          ve !== null ? (t = 0) : ((Te = null), (_e = 0), (t = Ce));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Ch(e)), a !== 0 && ((n = a), (t = Yh(e, a)))),
          t === 1)
        )
          throw ((r = gi), ma(e, 0), Mn(e, n), gt(e, he()), r);
        if (t === 6) Mn(e, n);
        else {
          if (
            ((a = e.current.alternate),
            !(n & 30) &&
              !eE(a) &&
              ((t = gf(e, n)),
              t === 2 && ((o = Ch(e)), o !== 0 && ((n = o), (t = Yh(e, o)))),
              t === 1))
          )
            throw ((r = gi), ma(e, 0), Mn(e, n), gt(e, he()), r);
          switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
            case 0:
            case 1:
              throw Error(P(345));
            case 2:
              da(e, ct, jr);
              break;
            case 3:
              if (
                (Mn(e, n),
                (n & 130023424) === n && ((t = _g + 500 - he()), 10 < t))
              ) {
                if (Yd(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & n) !== n)) {
                  rt(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Dh(da.bind(null, e, ct, jr), t);
                break;
              }
              da(e, ct, jr);
              break;
            case 4:
              if ((Mn(e, n), (n & 4194240) === n)) break;
              for (t = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - sr(n);
                (o = 1 << l), (l = t[l]), l > a && (a = l), (n &= ~o);
              }
              if (
                ((n = a),
                (n = he() - n),
                (n =
                  (120 > n
                    ? 120
                    : 480 > n
                    ? 480
                    : 1080 > n
                    ? 1080
                    : 1920 > n
                    ? 1920
                    : 3e3 > n
                    ? 3e3
                    : 4320 > n
                    ? 4320
                    : 1960 * b3(n / 1960)) - n),
                10 < n)
              ) {
                e.timeoutHandle = Dh(da.bind(null, e, ct, jr), n);
                break;
              }
              da(e, ct, jr);
              break;
            case 5:
              da(e, ct, jr);
              break;
            default:
              throw Error(P(329));
          }
        }
      }
      return gt(e, he()), e.callbackNode === r ? BS.bind(null, e) : null;
    }
    function Yh(e, t) {
      var r = Ju;
      return (
        e.current.memoizedState.isDehydrated && (ma(e, t).flags |= 256),
        (e = gf(e, t)),
        e !== 2 && ((t = ct), (ct = r), t !== null && Jh(t)),
        e
      );
    }
    function Jh(e) {
      ct === null ? (ct = e) : ct.push.apply(ct, e);
    }
    function eE(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && ((r = r.stores), r !== null))
            for (var n = 0; n < r.length; n++) {
              var a = r[n],
                o = a.getSnapshot;
              a = a.value;
              try {
                if (!fr(o(), a)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
          (r.return = t), (t = r);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function Mn(e, t) {
      for (
        t &= ~Ag,
          t &= ~Ef,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var r = 31 - sr(t),
          n = 1 << r;
        (e[r] = -1), (t &= ~n);
      }
    }
    function QL(e) {
      if (U & 6) throw Error(P(327));
      Mo();
      var t = Yd(e, 0);
      if (!(t & 1)) return gt(e, he()), null;
      var r = gf(e, t);
      if (e.tag !== 0 && r === 2) {
        var n = Ch(e);
        n !== 0 && ((t = n), (r = Yh(e, n)));
      }
      if (r === 1) throw ((r = gi), ma(e, 0), Mn(e, t), gt(e, he()), r);
      if (r === 6) throw Error(P(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        da(e, ct, jr),
        gt(e, he()),
        null
      );
    }
    function zg(e, t) {
      var r = U;
      U |= 1;
      try {
        return e(t);
      } finally {
        (U = r), U === 0 && ((No = he() + 500), Cf && $n());
      }
    }
    function La(e) {
      Dn !== null && Dn.tag === 0 && !(U & 6) && Mo();
      var t = U;
      U |= 1;
      var r = $t.transition,
        n = j;
      try {
        if ((($t.transition = null), (j = 1), e)) return e();
      } finally {
        (j = n), ($t.transition = r), (U = t), !(U & 6) && $n();
      }
    }
    function Ng() {
      (Ct = Co.current), b(Co);
    }
    function ma(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var r = e.timeoutHandle;
      if ((r !== -1 && ((e.timeoutHandle = -1), F3(r)), ve !== null))
        for (r = ve.return; r !== null; ) {
          var n = r;
          switch ((gg(n), n.tag)) {
            case 1:
              (n = n.type.childContextTypes), n != null && rf();
              break;
            case 3:
              _o(), b(mt), b(qe), kg();
              break;
            case 5:
              Ig(n);
              break;
            case 4:
              _o();
              break;
            case 13:
              b(le);
              break;
            case 19:
              b(le);
              break;
            case 10:
              Lg(n.type._context);
              break;
            case 22:
            case 23:
              Ng();
          }
          r = r.return;
        }
      if (
        ((Te = e),
        (ve = e = Un(e.current, null)),
        (_e = Ct = t),
        (Ce = 0),
        (gi = null),
        (Ag = Ef = xa = 0),
        (ct = Ju = null),
        ca !== null)
      ) {
        for (t = 0; t < ca.length; t++)
          if (((r = ca[t]), (n = r.interleaved), n !== null)) {
            r.interleaved = null;
            var a = n.next,
              o = r.pending;
            if (o !== null) {
              var l = o.next;
              (o.next = a), (n.next = l);
            }
            r.pending = n;
          }
        ca = null;
      }
      return e;
    }
    function OS(e, t) {
      do {
        var r = ve;
        try {
          if ((xg(), (Vd.current = cf), ff)) {
            for (var n = ue.memoizedState; n !== null; ) {
              var a = n.queue;
              a !== null && (a.pending = null), (n = n.next);
            }
            ff = !1;
          }
          if (
            ((va = 0),
            (Ee = Se = ue = null),
            (Zu = !1),
            (pi = 0),
            (Rg.current = null),
            r === null || r.return === null)
          ) {
            (Ce = 1), (gi = t), (ve = null);
            break;
          }
          e: {
            var o = e,
              l = r.return,
              u = r,
              i = t;
            if (
              ((t = _e),
              (u.flags |= 32768),
              i !== null && typeof i == "object" && typeof i.then == "function")
            ) {
              var f = i,
                p = u,
                h = p.tag;
              if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                var m = p.alternate;
                m
                  ? ((p.updateQueue = m.updateQueue),
                    (p.memoizedState = m.memoizedState),
                    (p.lanes = m.lanes))
                  : ((p.updateQueue = null), (p.memoizedState = null));
              }
              var y = _L(l);
              if (y !== null) {
                (y.flags &= -257),
                  zL(y, l, u, o, t),
                  y.mode & 1 && AL(o, f, t),
                  (t = y),
                  (i = f);
                var x = t.updateQueue;
                if (x === null) {
                  var v = new Set();
                  v.add(i), (t.updateQueue = v);
                } else x.add(i);
                break e;
              } else {
                if (!(t & 1)) {
                  AL(o, f, t), Bg();
                  break e;
                }
                i = Error(P(426));
              }
            } else if (te && u.mode & 1) {
              var E = _L(l);
              if (E !== null) {
                !(E.flags & 65536) && (E.flags |= 256),
                  zL(E, l, u, o, t),
                  yg(zo(i, u));
                break e;
              }
            }
            (o = i = zo(i, u)),
              Ce !== 4 && (Ce = 2),
              Ju === null ? (Ju = [o]) : Ju.push(o),
              (o = l);
            do {
              switch (o.tag) {
                case 3:
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var d = wS(o, i, t);
                  EL(o, d);
                  break e;
                case 1:
                  u = i;
                  var s = o.type,
                    c = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof s.getDerivedStateFromError == "function" ||
                      (c !== null &&
                        typeof c.componentDidCatch == "function" &&
                        (Bn === null || !Bn.has(c))))
                  ) {
                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                    var g = SS(o, u, t);
                    EL(o, g);
                    break e;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          VS(r);
        } catch (L) {
          (t = L), ve === r && r !== null && (ve = r = r.return);
          continue;
        }
        break;
      } while (!0);
    }
    function US() {
      var e = pf.current;
      return (pf.current = cf), e === null ? cf : e;
    }
    function Bg() {
      (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4),
        Te === null || (!(xa & 268435455) && !(Ef & 268435455)) || Mn(Te, _e);
    }
    function gf(e, t) {
      var r = U;
      U |= 2;
      var n = US();
      (Te !== e || _e !== t) && ((jr = null), ma(e, t));
      do
        try {
          tE();
          break;
        } catch (a) {
          OS(e, a);
        }
      while (!0);
      if ((xg(), (U = r), (pf.current = n), ve !== null)) throw Error(P(261));
      return (Te = null), (_e = 0), Ce;
    }
    function tE() {
      for (; ve !== null; ) HS(ve);
    }
    function rE() {
      for (; ve !== null && !MP(); ) HS(ve);
    }
    function HS(e) {
      var t = WS(e.alternate, e, Ct);
      (e.memoizedProps = e.pendingProps),
        t === null ? VS(e) : (ve = t),
        (Rg.current = null);
    }
    function VS(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((r = X3(r, t)), r !== null)) {
            (r.flags &= 32767), (ve = r);
            return;
          }
          if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (Ce = 6), (ve = null);
            return;
          }
        } else if (((r = K3(r, t, Ct)), r !== null)) {
          ve = r;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          ve = t;
          return;
        }
        ve = t = e;
      } while (t !== null);
      Ce === 0 && (Ce = 5);
    }
    function da(e, t, r) {
      var n = j,
        a = $t.transition;
      try {
        ($t.transition = null), (j = 1), nE(e, t, r, n);
      } finally {
        ($t.transition = a), (j = n);
      }
      return null;
    }
    function nE(e, t, r, n) {
      do Mo();
      while (Dn !== null);
      if (U & 6) throw Error(P(327));
      r = e.finishedWork;
      var a = e.finishedLanes;
      if (r === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(P(177));
      (e.callbackNode = null), (e.callbackPriority = 0);
      var o = r.lanes | r.childLanes;
      if (
        (UP(e, o),
        e === Te && ((ve = Te = null), (_e = 0)),
        (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
          Nd ||
          ((Nd = !0),
          $S(Zd, function () {
            return Mo(), null;
          })),
        (o = (r.flags & 15990) !== 0),
        r.subtreeFlags & 15990 || o)
      ) {
        (o = $t.transition), ($t.transition = null);
        var l = j;
        j = 1;
        var u = U;
        (U |= 4),
          (Rg.current = null),
          Y3(e, r),
          zS(r, e),
          k3(Mh),
          (Jd = !!Th),
          (Mh = Th = null),
          (e.current = r),
          J3(r, e, a),
          FP(),
          (U = u),
          (j = l),
          ($t.transition = o);
      } else e.current = r;
      if (
        (Nd && ((Nd = !1), (Dn = e), (hf = a)),
        (o = e.pendingLanes),
        o === 0 && (Bn = null),
        AP(r.stateNode, n),
        gt(e, he()),
        t !== null)
      )
        for (n = e.onRecoverableError, r = 0; r < t.length; r++)
          (a = t[r]), n(a.value, { componentStack: a.stack, digest: a.digest });
      if (mf) throw ((mf = !1), (e = Xh), (Xh = null), e);
      return (
        hf & 1 && e.tag !== 0 && Mo(),
        (o = e.pendingLanes),
        o & 1 ? (e === Zh ? bu++ : ((bu = 0), (Zh = e))) : (bu = 0),
        $n(),
        null
      );
    }
    function Mo() {
      if (Dn !== null) {
        var e = ww(hf),
          t = $t.transition,
          r = j;
        try {
          if ((($t.transition = null), (j = 16 > e ? 16 : e), Dn === null))
            var n = !1;
          else {
            if (((e = Dn), (Dn = null), (hf = 0), U & 6)) throw Error(P(331));
            var a = U;
            for (U |= 4, D = e.current; D !== null; ) {
              var o = D,
                l = o.child;
              if (D.flags & 16) {
                var u = o.deletions;
                if (u !== null) {
                  for (var i = 0; i < u.length; i++) {
                    var f = u[i];
                    for (D = f; D !== null; ) {
                      var p = D;
                      switch (p.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Yu(8, p, o);
                      }
                      var h = p.child;
                      if (h !== null) (h.return = p), (D = h);
                      else
                        for (; D !== null; ) {
                          p = D;
                          var m = p.sibling,
                            y = p.return;
                          if ((RS(p), p === f)) {
                            D = null;
                            break;
                          }
                          if (m !== null) {
                            (m.return = y), (D = m);
                            break;
                          }
                          D = y;
                        }
                    }
                  }
                  var x = o.alternate;
                  if (x !== null) {
                    var v = x.child;
                    if (v !== null) {
                      x.child = null;
                      do {
                        var E = v.sibling;
                        (v.sibling = null), (v = E);
                      } while (v !== null);
                    }
                  }
                  D = o;
                }
              }
              if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (D = l);
              else
                e: for (; D !== null; ) {
                  if (((o = D), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Yu(9, o, o.return);
                    }
                  var d = o.sibling;
                  if (d !== null) {
                    (d.return = o.return), (D = d);
                    break e;
                  }
                  D = o.return;
                }
            }
            var s = e.current;
            for (D = s; D !== null; ) {
              l = D;
              var c = l.child;
              if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (D = c);
              else
                e: for (l = s; D !== null; ) {
                  if (((u = D), u.flags & 2048))
                    try {
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pf(9, u);
                      }
                    } catch (L) {
                      fe(u, u.return, L);
                    }
                  if (u === l) {
                    D = null;
                    break e;
                  }
                  var g = u.sibling;
                  if (g !== null) {
                    (g.return = u.return), (D = g);
                    break e;
                  }
                  D = u.return;
                }
            }
            if (
              ((U = a),
              $n(),
              Pr && typeof Pr.onPostCommitFiberRoot == "function")
            )
              try {
                Pr.onPostCommitFiberRoot(vf, e);
              } catch {}
            n = !0;
          }
          return n;
        } finally {
          (j = r), ($t.transition = t);
        }
      }
      return !1;
    }
    function KL(e, t, r) {
      (t = zo(r, t)),
        (t = wS(e, t, 1)),
        (e = Nn(e, t, 1)),
        (t = rt()),
        e !== null && (yi(e, 1, t), gt(e, t));
    }
    function fe(e, t, r) {
      if (e.tag === 3) KL(e, e, r);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            KL(t, e, r);
            break;
          } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof n.componentDidCatch == "function" &&
                (Bn === null || !Bn.has(n)))
            ) {
              (e = zo(r, e)),
                (e = SS(t, e, 1)),
                (t = Nn(t, e, 1)),
                (e = rt()),
                t !== null && (yi(t, 1, e), gt(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function aE(e, t, r) {
      var n = e.pingCache;
      n !== null && n.delete(t),
        (t = rt()),
        (e.pingedLanes |= e.suspendedLanes & r),
        Te === e &&
          (_e & r) === r &&
          (Ce === 4 || (Ce === 3 && (_e & 130023424) === _e && 500 > he() - _g)
            ? ma(e, 0)
            : (Ag |= r)),
        gt(e, t);
    }
    function jS(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Sd), (Sd <<= 1), !(Sd & 130023424) && (Sd = 4194304))
          : (t = 1));
      var r = rt();
      (e = Xr(e, t)), e !== null && (yi(e, t, r), gt(e, r));
    }
    function oE(e) {
      var t = e.memoizedState,
        r = 0;
      t !== null && (r = t.retryLane), jS(e, r);
    }
    function lE(e, t) {
      var r = 0;
      switch (e.tag) {
        case 13:
          var n = e.stateNode,
            a = e.memoizedState;
          a !== null && (r = a.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        default:
          throw Error(P(314));
      }
      n !== null && n.delete(t), jS(e, r);
    }
    var WS;
    WS = function (e, t, r) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || mt.current) pt = !0;
        else {
          if (!(e.lanes & r) && !(t.flags & 128)) return (pt = !1), Q3(e, t, r);
          pt = !!(e.flags & 131072);
        }
      else (pt = !1), te && t.flags & 1048576 && Qw(t, of, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var n = t.type;
          Wd(e, t), (e = t.pendingProps);
          var a = Do(t, qe.current);
          To(t, r), (a = Eg(null, t, n, e, a, r));
          var o = Tg();
          return (
            (t.flags |= 1),
            typeof a == "object" &&
            a !== null &&
            typeof a.render == "function" &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ht(n) ? ((o = !0), nf(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                Sg(t),
                (a.updater = kf),
                (t.stateNode = a),
                (a._reactInternals = t),
                Oh(t, n, e, r),
                (t = Vh(null, t, n, !0, o, r)))
              : ((t.tag = 0),
                te && o && hg(t),
                tt(null, t, a, r),
                (t = t.child)),
            t
          );
        case 16:
          n = t.elementType;
          e: {
            switch (
              (Wd(e, t),
              (e = t.pendingProps),
              (a = n._init),
              (n = a(n._payload)),
              (t.type = n),
              (a = t.tag = iE(n)),
              (e = lr(n, e)),
              a)
            ) {
              case 0:
                t = Hh(null, t, n, e, r);
                break e;
              case 1:
                t = OL(null, t, n, e, r);
                break e;
              case 11:
                t = NL(null, t, n, e, r);
                break e;
              case 14:
                t = BL(null, t, n, lr(n.type, e), r);
                break e;
            }
            throw Error(P(306, n, ""));
          }
          return t;
        case 0:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : lr(n, a)),
            Hh(e, t, n, a, r)
          );
        case 1:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : lr(n, a)),
            OL(e, t, n, a, r)
          );
        case 3:
          e: {
            if ((PS(t), e === null)) throw Error(P(387));
            (n = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              bw(e, t),
              sf(t, n, null, r);
            var l = t.memoizedState;
            if (((n = l.element), o.isDehydrated))
              if (
                ((o = {
                  element: n,
                  isDehydrated: !1,
                  cache: l.cache,
                  pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                  transitions: l.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                (a = zo(Error(P(423)), t)), (t = UL(e, t, n, r, a));
                break e;
              } else if (n !== a) {
                (a = zo(Error(P(424)), t)), (t = UL(e, t, n, r, a));
                break e;
              } else
                for (
                  It = zn(t.stateNode.containerInfo.firstChild),
                    kt = t,
                    te = !0,
                    ir = null,
                    r = Yw(t, null, n, r),
                    t.child = r;
                  r;

                )
                  (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            else {
              if ((Ro(), n === a)) {
                t = Zr(e, t, r);
                break e;
              }
              tt(e, t, n, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            eS(t),
            e === null && zh(t),
            (n = t.type),
            (a = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (l = a.children),
            Fh(n, a) ? (l = null) : o !== null && Fh(n, o) && (t.flags |= 32),
            kS(e, t),
            tt(e, t, l, r),
            t.child
          );
        case 6:
          return e === null && zh(t), null;
        case 13:
          return ES(e, t, r);
        case 4:
          return (
            Cg(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = Ao(t, null, n, r)) : tt(e, t, n, r),
            t.child
          );
        case 11:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : lr(n, a)),
            NL(e, t, n, a, r)
          );
        case 7:
          return tt(e, t, t.pendingProps, r), t.child;
        case 8:
          return tt(e, t, t.pendingProps.children, r), t.child;
        case 12:
          return tt(e, t, t.pendingProps.children, r), t.child;
        case 10:
          e: {
            if (
              ((n = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (l = a.value),
              q(lf, n._currentValue),
              (n._currentValue = l),
              o !== null)
            )
              if (fr(o.value, l)) {
                if (o.children === a.children && !mt.current) {
                  t = Zr(e, t, r);
                  break e;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                  var u = o.dependencies;
                  if (u !== null) {
                    l = o.child;
                    for (var i = u.firstContext; i !== null; ) {
                      if (i.context === n) {
                        if (o.tag === 1) {
                          (i = qr(-1, r & -r)), (i.tag = 2);
                          var f = o.updateQueue;
                          if (f !== null) {
                            f = f.shared;
                            var p = f.pending;
                            p === null
                              ? (i.next = i)
                              : ((i.next = p.next), (p.next = i)),
                              (f.pending = i);
                          }
                        }
                        (o.lanes |= r),
                          (i = o.alternate),
                          i !== null && (i.lanes |= r),
                          Nh(o.return, r, t),
                          (u.lanes |= r);
                        break;
                      }
                      i = i.next;
                    }
                  } else if (o.tag === 10)
                    l = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((l = o.return), l === null)) throw Error(P(341));
                    (l.lanes |= r),
                      (u = l.alternate),
                      u !== null && (u.lanes |= r),
                      Nh(l, r, t),
                      (l = o.sibling);
                  } else l = o.child;
                  if (l !== null) l.return = o;
                  else
                    for (l = o; l !== null; ) {
                      if (l === t) {
                        l = null;
                        break;
                      }
                      if (((o = l.sibling), o !== null)) {
                        (o.return = l.return), (l = o);
                        break;
                      }
                      l = l.return;
                    }
                  o = l;
                }
            tt(e, t, a.children, r), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (n = t.pendingProps.children),
            To(t, r),
            (a = Gt(a)),
            (n = n(a)),
            (t.flags |= 1),
            tt(e, t, n, r),
            t.child
          );
        case 14:
          return (
            (n = t.type),
            (a = lr(n, t.pendingProps)),
            (a = lr(n.type, a)),
            BL(e, t, n, a, r)
          );
        case 15:
          return CS(e, t, t.type, t.pendingProps, r);
        case 17:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : lr(n, a)),
            Wd(e, t),
            (t.tag = 1),
            ht(n) ? ((e = !0), nf(t)) : (e = !1),
            To(t, r),
            LS(t, n, a),
            Oh(t, n, a, r),
            Vh(null, t, n, !0, e, r)
          );
        case 19:
          return TS(e, t, r);
        case 22:
          return IS(e, t, r);
      }
      throw Error(P(156, t.tag));
    };
    function $S(e, t) {
      return yw(e, t);
    }
    function uE(e, t, r, n) {
      (this.tag = e),
        (this.key = r),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = n),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Wt(e, t, r, n) {
      return new uE(e, t, r, n);
    }
    function Og(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function iE(e) {
      if (typeof e == "function") return Og(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === ng)) return 11;
        if (e === ag) return 14;
      }
      return 2;
    }
    function Un(e, t) {
      var r = e.alternate;
      return (
        r === null
          ? ((r = Wt(e.tag, t, e.key, e.mode)),
            (r.elementType = e.elementType),
            (r.type = e.type),
            (r.stateNode = e.stateNode),
            (r.alternate = e),
            (e.alternate = r))
          : ((r.pendingProps = t),
            (r.type = e.type),
            (r.flags = 0),
            (r.subtreeFlags = 0),
            (r.deletions = null)),
        (r.flags = e.flags & 14680064),
        (r.childLanes = e.childLanes),
        (r.lanes = e.lanes),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      );
    }
    function qd(e, t, r, n, a, o) {
      var l = 2;
      if (((n = e), typeof e == "function")) Og(e) && (l = 1);
      else if (typeof e == "string") l = 5;
      else
        e: switch (e) {
          case po:
            return ha(r.children, a, o, t);
          case rg:
            (l = 8), (a |= 8);
            break;
          case ih:
            return (
              (e = Wt(12, r, t, a | 2)), (e.elementType = ih), (e.lanes = o), e
            );
          case sh:
            return (
              (e = Wt(13, r, t, a)), (e.elementType = sh), (e.lanes = o), e
            );
          case dh:
            return (
              (e = Wt(19, r, t, a)), (e.elementType = dh), (e.lanes = o), e
            );
          case ew:
            return Tf(r, a, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case JL:
                  l = 10;
                  break e;
                case bL:
                  l = 9;
                  break e;
                case ng:
                  l = 11;
                  break e;
                case ag:
                  l = 14;
                  break e;
                case Pn:
                  (l = 16), (n = null);
                  break e;
              }
            throw Error(P(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = Wt(l, r, t, a)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = o),
        t
      );
    }
    function ha(e, t, r, n) {
      return (e = Wt(7, e, n, t)), (e.lanes = r), e;
    }
    function Tf(e, t, r, n) {
      return (
        (e = Wt(22, e, n, t)),
        (e.elementType = ew),
        (e.lanes = r),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function oh(e, t, r) {
      return (e = Wt(6, e, null, t)), (e.lanes = r), e;
    }
    function lh(e, t, r) {
      return (
        (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function sE(e, t, r, n, a) {
      (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Wm(0)),
        (this.expirationTimes = Wm(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Wm(0)),
        (this.identifierPrefix = n),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Ug(e, t, r, n, a, o, l, u, i) {
      return (
        (e = new sE(e, t, r, u, i)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Wt(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
          element: n,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Sg(o),
        e
      );
    }
    function dE(e, t, r) {
      var n =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: co,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r,
      };
    }
    function GS(e) {
      if (!e) return Vn;
      e = e._reactInternals;
      e: {
        if (Sa(e) !== e || e.tag !== 1) throw Error(P(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (ht(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(P(171));
      }
      if (e.tag === 1) {
        var r = e.type;
        if (ht(r)) return Gw(e, r, t);
      }
      return t;
    }
    function qS(e, t, r, n, a, o, l, u, i) {
      return (
        (e = Ug(r, n, !0, e, a, o, l, u, i)),
        (e.context = GS(null)),
        (r = e.current),
        (n = rt()),
        (a = On(r)),
        (o = qr(n, a)),
        (o.callback = t ?? null),
        Nn(r, o, a),
        (e.current.lanes = a),
        yi(e, a, n),
        gt(e, n),
        e
      );
    }
    function Mf(e, t, r, n) {
      var a = t.current,
        o = rt(),
        l = On(a);
      return (
        (r = GS(r)),
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = qr(o, l)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        (e = Nn(a, t, l)),
        e !== null && (dr(e, a, l, o), Hd(e, a, l)),
        l
      );
    }
    function yf(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function XL(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function Hg(e, t) {
      XL(e, t), (e = e.alternate) && XL(e, t);
    }
    function fE() {
      return null;
    }
    var QS =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function Vg(e) {
      this._internalRoot = e;
    }
    Ff.prototype.render = Vg.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(P(409));
      Mf(e, t, null, null);
    };
    Ff.prototype.unmount = Vg.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        La(function () {
          Mf(null, e, null, null);
        }),
          (t[Kr] = null);
      }
    };
    function Ff(e) {
      this._internalRoot = e;
    }
    Ff.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Iw();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < Tn.length && t !== 0 && t < Tn[r].priority; r++);
        Tn.splice(r, 0, e), r === 0 && Pw(e);
      }
    };
    function jg(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Df(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function ZL() {}
    function cE(e, t, r, n, a) {
      if (a) {
        if (typeof n == "function") {
          var o = n;
          n = function () {
            var f = yf(l);
            o.call(f);
          };
        }
        var l = qS(t, n, e, 0, null, !1, !1, "", ZL);
        return (
          (e._reactRootContainer = l),
          (e[Kr] = l.current),
          ii(e.nodeType === 8 ? e.parentNode : e),
          La(),
          l
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if (typeof n == "function") {
        var u = n;
        n = function () {
          var f = yf(i);
          u.call(f);
        };
      }
      var i = Ug(e, 0, !1, null, null, !1, !1, "", ZL);
      return (
        (e._reactRootContainer = i),
        (e[Kr] = i.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        La(function () {
          Mf(t, i, r, n);
        }),
        i
      );
    }
    function Rf(e, t, r, n, a) {
      var o = r._reactRootContainer;
      if (o) {
        var l = o;
        if (typeof a == "function") {
          var u = a;
          a = function () {
            var i = yf(l);
            u.call(i);
          };
        }
        Mf(t, l, e, a);
      } else l = cE(r, t, e, a, n);
      return yf(l);
    }
    Sw = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = Wu(t.pendingLanes);
            r !== 0 &&
              (ug(t, r | 1),
              gt(t, he()),
              !(U & 6) && ((No = he() + 500), $n()));
          }
          break;
        case 13:
          La(function () {
            var n = Xr(e, 1);
            if (n !== null) {
              var a = rt();
              dr(n, e, 1, a);
            }
          }),
            Hg(e, 1);
      }
    };
    ig = function (e) {
      if (e.tag === 13) {
        var t = Xr(e, 134217728);
        if (t !== null) {
          var r = rt();
          dr(t, e, 134217728, r);
        }
        Hg(e, 134217728);
      }
    };
    Cw = function (e) {
      if (e.tag === 13) {
        var t = On(e),
          r = Xr(e, t);
        if (r !== null) {
          var n = rt();
          dr(r, e, t, n);
        }
        Hg(e, t);
      }
    };
    Iw = function () {
      return j;
    };
    kw = function (e, t) {
      var r = j;
      try {
        return (j = e), t();
      } finally {
        j = r;
      }
    };
    Lh = function (e, t, r) {
      switch (t) {
        case "input":
          if ((ph(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var n = r[t];
              if (n !== e && n.form === e.form) {
                var a = Sf(n);
                if (!a) throw Error(P(90));
                rw(n), ph(n, a);
              }
            }
          }
          break;
        case "textarea":
          aw(e, r);
          break;
        case "select":
          (t = r.value), t != null && Io(e, !!r.multiple, t, !1);
      }
    };
    fw = zg;
    cw = La;
    var pE = { usingClientEntryPoint: !1, Events: [xi, yo, Sf, sw, dw, zg] },
      Uu = {
        findFiberByHostInstance: fa,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      mE = {
        bundleType: Uu.bundleType,
        version: Uu.version,
        rendererPackageName: Uu.rendererPackageName,
        rendererConfig: Uu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Yr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = hw(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Uu.findFiberByHostInstance || fE,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((Hu = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !Hu.isDisabled && Hu.supportsFiber)
    )
      try {
        (vf = Hu.inject(mE)), (Pr = Hu);
      } catch {}
    var Hu;
    Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pE;
    Tt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!jg(t)) throw Error(P(200));
      return dE(e, t, null, r);
    };
    Tt.createRoot = function (e, t) {
      if (!jg(e)) throw Error(P(299));
      var r = !1,
        n = "",
        a = QS;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Ug(e, 1, !1, null, null, r, !1, n, a)),
        (e[Kr] = t.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        new Vg(t)
      );
    };
    Tt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(P(188))
          : ((e = Object.keys(e).join(",")), Error(P(268, e)));
      return (e = hw(t)), (e = e === null ? null : e.stateNode), e;
    };
    Tt.flushSync = function (e) {
      return La(e);
    };
    Tt.hydrate = function (e, t, r) {
      if (!Df(t)) throw Error(P(200));
      return Rf(null, e, t, !0, r);
    };
    Tt.hydrateRoot = function (e, t, r) {
      if (!jg(e)) throw Error(P(405));
      var n = (r != null && r.hydratedSources) || null,
        a = !1,
        o = "",
        l = QS;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
        (t = qS(t, null, e, 1, r ?? null, a, !1, o, l)),
        (e[Kr] = t.current),
        ii(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          (r = n[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new Ff(t);
    };
    Tt.render = function (e, t, r) {
      if (!Df(t)) throw Error(P(200));
      return Rf(null, e, t, !1, r);
    };
    Tt.unmountComponentAtNode = function (e) {
      if (!Df(e)) throw Error(P(40));
      return e._reactRootContainer
        ? (La(function () {
            Rf(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Kr] = null);
            });
          }),
          !0)
        : !1;
    };
    Tt.unstable_batchedUpdates = zg;
    Tt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!Df(r)) throw Error(P(200));
      if (e == null || e._reactInternals === void 0) throw Error(P(38));
      return Rf(e, t, r, !1, n);
    };
    Tt.version = "18.3.1-next-f1338f8080-20240426";
  });
  var Wg = Ke((_M, ZS) => {
    "use strict";
    function XS() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XS);
        } catch (e) {
          console.error(e);
        }
    }
    XS(), (ZS.exports = KS());
  });
  var JS = Ke(($g) => {
    "use strict";
    var YS = Wg();
    ($g.createRoot = YS.createRoot), ($g.hydrateRoot = YS.hydrateRoot);
    var zM;
  });
  var Af = se(Kt());
  var R = se(Kt());
  var Ri = se(Rt());
  function Iy(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (r = Iy(e[t])) && (n && (n += " "), (n += r));
      else for (t in e) e[t] && (n && (n += " "), (n += t));
    return n;
  }
  function ky() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
      (e = arguments[r++]) && (t = Iy(e)) && (n && (n += " "), (n += t));
    return n;
  }
  var Py = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
    Ey = ky,
    Fi = (e, t) => (r) => {
      var n;
      if (t?.variants == null) return Ey(e, r?.class, r?.className);
      let { variants: a, defaultVariants: o } = t,
        l = Object.keys(a).map((f) => {
          let p = r?.[f],
            h = o?.[f];
          if (p === null) return null;
          let m = Py(p) || Py(h);
          return a[f][m];
        }),
        u =
          r &&
          Object.entries(r).reduce((f, p) => {
            let [h, m] = p;
            return m === void 0 || (f[h] = m), f;
          }, {}),
        i =
          t == null || (n = t.compoundVariants) === null || n === void 0
            ? void 0
            : n.reduce((f, p) => {
                let { class: h, className: m, ...y } = p;
                return Object.entries(y).every((x) => {
                  let [v, E] = x;
                  return Array.isArray(E)
                    ? E.includes({ ...o, ...u }[v])
                    : { ...o, ...u }[v] === E;
                })
                  ? [...f, h, m]
                  : f;
              }, []);
      return Ey(e, l, i, r?.class, r?.className);
    };
  var Ea = {
    name: "PlatformAI",
    description:
      "An Open-Source SaaS Platform for Crafting Chatbots with OpenAI's Assistant.",
    url: "https://www.PlatformAI.io/",
    ogImage: "https://www.PlatformAI.io/dashboard.png",
    links: {
      twitter: "https://twitter.com/oassistantgpt",
      github: "https://github.com/marcolivierbouch/PlatformAI",
      productHunt: "https://www.producthunt.com/posts/PlatformAI",
    },
  };
  function Ty(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var a = e.length;
        for (t = 0; t < a; t++)
          e[t] && (r = Ty(e[t])) && (n && (n += " "), (n += r));
      } else for (r in e) e[r] && (n && (n += " "), (n += r));
    return n;
  }
  function My() {
    for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
      (e = arguments[r]) && (t = Ty(e)) && (n && (n += " "), (n += t));
    return n;
  }
  var Qf = "-";
  function VC(e) {
    let t = WC(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    function a(l) {
      let u = l.split(Qf);
      return u[0] === "" && u.length !== 1 && u.shift(), Ry(u, t) || jC(l);
    }
    function o(l, u) {
      let i = r[l] || [];
      return u && n[l] ? [...i, ...n[l]] : i;
    }
    return { getClassGroupId: a, getConflictingClassGroupIds: o };
  }
  function Ry(e, t) {
    if (e.length === 0) return t.classGroupId;
    let r = e[0],
      n = t.nextPart.get(r),
      a = n ? Ry(e.slice(1), n) : void 0;
    if (a) return a;
    if (t.validators.length === 0) return;
    let o = e.join(Qf);
    return t.validators.find(({ validator: l }) => l(o))?.classGroupId;
  }
  var Fy = /^\[(.+)\]$/;
  function jC(e) {
    if (Fy.test(e)) {
      let t = Fy.exec(e)[1],
        r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  }
  function WC(e) {
    let { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      GC(Object.entries(e.classGroups), r).forEach(([o, l]) => {
        qf(l, n, o, t);
      }),
      n
    );
  }
  function qf(e, t, r, n) {
    e.forEach((a) => {
      if (typeof a == "string") {
        let o = a === "" ? t : Dy(t, a);
        o.classGroupId = r;
        return;
      }
      if (typeof a == "function") {
        if ($C(a)) {
          qf(a(n), t, r, n);
          return;
        }
        t.validators.push({ validator: a, classGroupId: r });
        return;
      }
      Object.entries(a).forEach(([o, l]) => {
        qf(l, Dy(t, o), r, n);
      });
    });
  }
  function Dy(e, t) {
    let r = e;
    return (
      t.split(Qf).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  }
  function $C(e) {
    return e.isThemeGetter;
  }
  function GC(e, t) {
    return t
      ? e.map(([r, n]) => {
          let a = n.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([l, u]) => [t + l, u])
                )
              : o
          );
          return [r, a];
        })
      : e;
  }
  function qC(e) {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      r = new Map(),
      n = new Map();
    function a(o, l) {
      r.set(o, l), t++, t > e && ((t = 0), (n = r), (r = new Map()));
    }
    return {
      get(o) {
        let l = r.get(o);
        if (l !== void 0) return l;
        if ((l = n.get(o)) !== void 0) return a(o, l), l;
      },
      set(o, l) {
        r.has(o) ? r.set(o, l) : a(o, l);
      },
    };
  }
  var Ay = "!";
  function QC(e) {
    let t = e.separator,
      r = t.length === 1,
      n = t[0],
      a = t.length;
    return function (l) {
      let u = [],
        i = 0,
        f = 0,
        p;
      for (let v = 0; v < l.length; v++) {
        let E = l[v];
        if (i === 0) {
          if (E === n && (r || l.slice(v, v + a) === t)) {
            u.push(l.slice(f, v)), (f = v + a);
            continue;
          }
          if (E === "/") {
            p = v;
            continue;
          }
        }
        E === "[" ? i++ : E === "]" && i--;
      }
      let h = u.length === 0 ? l : l.substring(f),
        m = h.startsWith(Ay),
        y = m ? h.substring(1) : h,
        x = p && p > f ? p - f : void 0;
      return {
        modifiers: u,
        hasImportantModifier: m,
        baseClassName: y,
        maybePostfixModifierPosition: x,
      };
    };
  }
  function KC(e) {
    if (e.length <= 1) return e;
    let t = [],
      r = [];
    return (
      e.forEach((n) => {
        n[0] === "[" ? (t.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      t.push(...r.sort()),
      t
    );
  }
  function XC(e) {
    return { cache: qC(e.cacheSize), splitModifiers: QC(e), ...VC(e) };
  }
  var ZC = /\s+/;
  function YC(e, t) {
    let {
        splitModifiers: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: a,
      } = t,
      o = new Set();
    return e
      .trim()
      .split(ZC)
      .map((l) => {
        let {
            modifiers: u,
            hasImportantModifier: i,
            baseClassName: f,
            maybePostfixModifierPosition: p,
          } = r(l),
          h = n(p ? f.substring(0, p) : f),
          m = !!p;
        if (!h) {
          if (!p) return { isTailwindClass: !1, originalClassName: l };
          if (((h = n(f)), !h))
            return { isTailwindClass: !1, originalClassName: l };
          m = !1;
        }
        let y = KC(u).join(":");
        return {
          isTailwindClass: !0,
          modifierId: i ? y + Ay : y,
          classGroupId: h,
          originalClassName: l,
          hasPostfixModifier: m,
        };
      })
      .reverse()
      .filter((l) => {
        if (!l.isTailwindClass) return !0;
        let { modifierId: u, classGroupId: i, hasPostfixModifier: f } = l,
          p = u + i;
        return o.has(p)
          ? !1
          : (o.add(p), a(i, f).forEach((h) => o.add(u + h)), !0);
      })
      .reverse()
      .map((l) => l.originalClassName)
      .join(" ");
  }
  function JC() {
    let e = 0,
      t,
      r,
      n = "";
    for (; e < arguments.length; )
      (t = arguments[e++]) && (r = _y(t)) && (n && (n += " "), (n += r));
    return n;
  }
  function _y(e) {
    if (typeof e == "string") return e;
    let t,
      r = "";
    for (let n = 0; n < e.length; n++)
      e[n] && (t = _y(e[n])) && (r && (r += " "), (r += t));
    return r;
  }
  function bC(e, ...t) {
    let r,
      n,
      a,
      o = l;
    function l(i) {
      let f = t.reduce((p, h) => h(p), e());
      return (r = XC(f)), (n = r.cache.get), (a = r.cache.set), (o = u), u(i);
    }
    function u(i) {
      let f = n(i);
      if (f) return f;
      let p = YC(i, r);
      return a(i, p), p;
    }
    return function () {
      return o(JC.apply(null, arguments));
    };
  }
  function X(e) {
    let t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  }
  var zy = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    eI = /^\d+\/\d+$/,
    tI = new Set(["px", "full", "screen"]),
    rI = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    nI =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    aI = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    oI = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    lI =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  function Dr(e) {
    return qn(e) || tI.has(e) || eI.test(e);
  }
  function br(e) {
    return Ta(e, "length", mI);
  }
  function qn(e) {
    return !!e && !Number.isNaN(Number(e));
  }
  function Di(e) {
    return Ta(e, "number", qn);
  }
  function jo(e) {
    return !!e && Number.isInteger(Number(e));
  }
  function uI(e) {
    return e.endsWith("%") && qn(e.slice(0, -1));
  }
  function A(e) {
    return zy.test(e);
  }
  function en(e) {
    return rI.test(e);
  }
  var iI = new Set(["length", "size", "percentage"]);
  function sI(e) {
    return Ta(e, iI, Ny);
  }
  function dI(e) {
    return Ta(e, "position", Ny);
  }
  var fI = new Set(["image", "url"]);
  function cI(e) {
    return Ta(e, fI, gI);
  }
  function pI(e) {
    return Ta(e, "", hI);
  }
  function Wo() {
    return !0;
  }
  function Ta(e, t, r) {
    let n = zy.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  }
  function mI(e) {
    return nI.test(e) && !aI.test(e);
  }
  function Ny() {
    return !1;
  }
  function hI(e) {
    return oI.test(e);
  }
  function gI(e) {
    return lI.test(e);
  }
  function yI() {
    let e = X("colors"),
      t = X("spacing"),
      r = X("blur"),
      n = X("brightness"),
      a = X("borderColor"),
      o = X("borderRadius"),
      l = X("borderSpacing"),
      u = X("borderWidth"),
      i = X("contrast"),
      f = X("grayscale"),
      p = X("hueRotate"),
      h = X("invert"),
      m = X("gap"),
      y = X("gradientColorStops"),
      x = X("gradientColorStopPositions"),
      v = X("inset"),
      E = X("margin"),
      d = X("opacity"),
      s = X("padding"),
      c = X("saturate"),
      g = X("scale"),
      L = X("sepia"),
      C = X("skew"),
      S = X("space"),
      w = X("translate"),
      M = () => ["auto", "contain", "none"],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      H = () => ["auto", A, t],
      N = () => [A, t],
      Tr = () => ["", Dr, br],
      ge = () => ["auto", qn, A],
      Jr = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      xe = () => ["solid", "dashed", "dotted", "double", "none"],
      Ca = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
        "plus-lighter",
      ],
      at = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      Mt = () => ["", "0", A],
      wi = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Ft = () => [qn, Di],
      Qt = () => [qn, A];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Wo],
        spacing: [Dr, br],
        blur: ["none", "", en, A],
        brightness: Ft(),
        borderColor: [e],
        borderRadius: ["none", "", "full", en, A],
        borderSpacing: N(),
        borderWidth: Tr(),
        contrast: Ft(),
        grayscale: Mt(),
        hueRotate: Qt(),
        invert: Mt(),
        gap: N(),
        gradientColorStops: [e],
        gradientColorStopPositions: [uI, br],
        inset: H(),
        margin: H(),
        opacity: Ft(),
        padding: N(),
        saturate: Ft(),
        scale: Ft(),
        sepia: Mt(),
        skew: Qt(),
        space: N(),
        translate: N(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", A] }],
        container: ["container"],
        columns: [{ columns: [en] }],
        "break-after": [{ "break-after": wi() }],
        "break-before": [{ "break-before": wi() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Jr(), A] }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", jo, A] }],
        basis: [{ basis: H() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", A] }],
        grow: [{ grow: Mt() }],
        shrink: [{ shrink: Mt() }],
        order: [{ order: ["first", "last", "none", jo, A] }],
        "grid-cols": [{ "grid-cols": [Wo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", jo, A] }, A] }],
        "col-start": [{ "col-start": ge() }],
        "col-end": [{ "col-end": ge() }],
        "grid-rows": [{ "grid-rows": [Wo] }],
        "row-start-end": [{ row: ["auto", { span: [jo, A] }, A] }],
        "row-start": [{ "row-start": ge() }],
        "row-end": [{ "row-end": ge() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", A] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", A] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...at()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...at(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...at(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [s] }],
        px: [{ px: [s] }],
        py: [{ py: [s] }],
        ps: [{ ps: [s] }],
        pe: [{ pe: [s] }],
        pt: [{ pt: [s] }],
        pr: [{ pr: [s] }],
        pb: [{ pb: [s] }],
        pl: [{ pl: [s] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [S] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [S] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", A, t] }],
        "min-w": [{ "min-w": [A, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              A,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [en] },
              en,
            ],
          },
        ],
        h: [{ h: [A, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [A, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [A, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", en, br] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Di,
            ],
          },
        ],
        "font-family": [{ font: [Wo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              A,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", qn, Di] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Dr,
              A,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", A] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", A] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [d] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [d] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...xe(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Dr, br] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Dr, A] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: N() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              A,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", A] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [d] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Jr(), dI] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", sI] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              cI,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [u] }],
        "border-w-x": [{ "border-x": [u] }],
        "border-w-y": [{ "border-y": [u] }],
        "border-w-s": [{ "border-s": [u] }],
        "border-w-e": [{ "border-e": [u] }],
        "border-w-t": [{ "border-t": [u] }],
        "border-w-r": [{ "border-r": [u] }],
        "border-w-b": [{ "border-b": [u] }],
        "border-w-l": [{ "border-l": [u] }],
        "border-opacity": [{ "border-opacity": [d] }],
        "border-style": [{ border: [...xe(), "hidden"] }],
        "divide-x": [{ "divide-x": [u] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [u] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [d] }],
        "divide-style": [{ divide: xe() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...xe()] }],
        "outline-offset": [{ "outline-offset": [Dr, A] }],
        "outline-w": [{ outline: [Dr, br] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Tr() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [d] }],
        "ring-offset-w": [{ "ring-offset": [Dr, br] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", en, pI] }],
        "shadow-color": [{ shadow: [Wo] }],
        opacity: [{ opacity: [d] }],
        "mix-blend": [{ "mix-blend": Ca() }],
        "bg-blend": [{ "bg-blend": Ca() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [i] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", en, A] }],
        grayscale: [{ grayscale: [f] }],
        "hue-rotate": [{ "hue-rotate": [p] }],
        invert: [{ invert: [h] }],
        saturate: [{ saturate: [c] }],
        sepia: [{ sepia: [L] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [i] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [f] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
        "backdrop-invert": [{ "backdrop-invert": [h] }],
        "backdrop-opacity": [{ "backdrop-opacity": [d] }],
        "backdrop-saturate": [{ "backdrop-saturate": [c] }],
        "backdrop-sepia": [{ "backdrop-sepia": [L] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [l] }],
        "border-spacing-x": [{ "border-spacing-x": [l] }],
        "border-spacing-y": [{ "border-spacing-y": [l] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              A,
            ],
          },
        ],
        duration: [{ duration: Qt() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", A] }],
        delay: [{ delay: Qt() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", A] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [g] }],
        "scale-x": [{ "scale-x": [g] }],
        "scale-y": [{ "scale-y": [g] }],
        rotate: [{ rotate: [jo, A] }],
        "translate-x": [{ "translate-x": [w] }],
        "translate-y": [{ "translate-y": [w] }],
        "skew-x": [{ "skew-x": [C] }],
        "skew-y": [{ "skew-y": [C] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              A,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              A,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": N() }],
        "scroll-mx": [{ "scroll-mx": N() }],
        "scroll-my": [{ "scroll-my": N() }],
        "scroll-ms": [{ "scroll-ms": N() }],
        "scroll-me": [{ "scroll-me": N() }],
        "scroll-mt": [{ "scroll-mt": N() }],
        "scroll-mr": [{ "scroll-mr": N() }],
        "scroll-mb": [{ "scroll-mb": N() }],
        "scroll-ml": [{ "scroll-ml": N() }],
        "scroll-p": [{ "scroll-p": N() }],
        "scroll-px": [{ "scroll-px": N() }],
        "scroll-py": [{ "scroll-py": N() }],
        "scroll-ps": [{ "scroll-ps": N() }],
        "scroll-pe": [{ "scroll-pe": N() }],
        "scroll-pt": [{ "scroll-pt": N() }],
        "scroll-pr": [{ "scroll-pr": N() }],
        "scroll-pb": [{ "scroll-pb": N() }],
        "scroll-pl": [{ "scroll-pl": N() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", A] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Dr, br, Di] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  }
  var By = bC(yI);
  function Ye(...e) {
    return By(My(e));
  }
  var vI = Fi(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline:
              "border border-input hover:bg-accent hover:text-accent-foreground",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "underline-offset-4 hover:underline text-primary",
          },
          size: {
            default: "h-10 py-2 px-4",
            sm: "h-9 px-3 rounded-md",
            lg: "h-11 px-8 rounded-md",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      }
    ),
    Ai = Ri.forwardRef(({ className: e, variant: t, size: r, ...n }, a) =>
      Ri.createElement("button", {
        className: Ye(vI({ variant: t, size: r, className: e })),
        ref: a,
        ...n,
      })
    );
  Ai.displayName = "Button";
  var _i = se(Rt());
  var zi = _i.forwardRef(({ className: e, type: t, ...r }, n) =>
    _i.createElement("input", {
      type: t,
      className: Ye(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r,
    })
  );
  zi.displayName = "Input";
  var rd = se(Rt());
  function pr() {
    return (
      (pr = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      pr.apply(this, arguments)
    );
  }
  var td = se(Rt(), 1);
  var ao = se(Rt(), 1),
    k2 = se(ax(), 1);
  var oe = se(Rt(), 1);
  var L2 = se(Rt(), 1);
  function w2(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function ox(...e) {
    return (t) => e.forEach((r) => w2(r, t));
  }
  var im = (0, oe.forwardRef)((e, t) => {
    let { children: r, ...n } = e,
      a = oe.Children.toArray(r),
      o = a.find(C2);
    if (o) {
      let l = o.props.children,
        u = a.map((i) =>
          i === o
            ? oe.Children.count(l) > 1
              ? oe.Children.only(null)
              : (0, oe.isValidElement)(l)
              ? l.props.children
              : null
            : i
        );
      return (0, oe.createElement)(
        um,
        pr({}, n, { ref: t }),
        (0, oe.isValidElement)(l) ? (0, oe.cloneElement)(l, void 0, u) : null
      );
    }
    return (0, oe.createElement)(um, pr({}, n, { ref: t }), r);
  });
  im.displayName = "Slot";
  var um = (0, oe.forwardRef)((e, t) => {
    let { children: r, ...n } = e;
    return (0, oe.isValidElement)(r)
      ? (0, oe.cloneElement)(r, {
          ...I2(n, r.props),
          ref: t ? ox(t, r.ref) : r.ref,
        })
      : oe.Children.count(r) > 1
      ? oe.Children.only(null)
      : null;
  });
  um.displayName = "SlotClone";
  var S2 = ({ children: e }) => (0, oe.createElement)(oe.Fragment, null, e);
  function C2(e) {
    return (0, oe.isValidElement)(e) && e.type === S2;
  }
  function I2(e, t) {
    let r = { ...t };
    for (let n in t) {
      let a = e[n],
        o = t[n];
      /^on[A-Z]/.test(n)
        ? a && o
          ? (r[n] = (...u) => {
              o(...u), a(...u);
            })
          : a && (r[n] = a)
        : n === "style"
        ? (r[n] = { ...a, ...o })
        : n === "className" && (r[n] = [a, o].filter(Boolean).join(" "));
    }
    return { ...e, ...r };
  }
  var P2 = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "span",
      "svg",
      "ul",
    ],
    lx = P2.reduce((e, t) => {
      let r = (0, ao.forwardRef)((n, a) => {
        let { asChild: o, ...l } = n,
          u = o ? im : t;
        return (
          (0, ao.useEffect)(() => {
            window[Symbol.for("radix-ui")] = !0;
          }, []),
          (0, ao.createElement)(u, pr({}, l, { ref: a }))
        );
      });
      return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
  var E2 = (0, td.forwardRef)((e, t) =>
      (0, td.createElement)(
        lx.label,
        pr({}, e, {
          ref: t,
          onMouseDown: (r) => {
            var n;
            (n = e.onMouseDown) === null || n === void 0 || n.call(e, r),
              !r.defaultPrevented && r.detail > 1 && r.preventDefault();
          },
        })
      )
    ),
    ux = E2;
  var M2 = Fi(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    ),
    nd = rd.forwardRef(({ className: e, ...t }, r) =>
      rd.createElement("label", { ref: r, className: Ye(M2(), e), ...t })
    );
  nd.displayName = ux.displayName;
  var ad = se(Rt());
  var sm = ad.forwardRef(({ className: e, ...t }, r) =>
    ad.createElement("textarea", {
      className: Ye(
        "flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t,
    })
  );
  sm.displayName = "Textarea";
  var zl = se(Rt());
  var ix = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  var F2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    T = (e, t) => {
      let r = (0, zl.forwardRef)(
        (
          {
            color: n = "currentColor",
            size: a = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: l,
            children: u,
            ...i
          },
          f
        ) =>
          (0, zl.createElement)(
            "svg",
            {
              ref: f,
              ...ix,
              width: a,
              height: a,
              stroke: n,
              strokeWidth: l ? (Number(o) * 24) / Number(a) : o,
              className: `lucide lucide-${F2(e)}`,
              ...i,
            },
            [
              ...t.map(([p, h]) => (0, zl.createElement)(p, h)),
              ...((Array.isArray(u) ? u : [u]) || []),
            ]
          )
      );
      return (r.displayName = `${e}`), r;
    };
  var Nl = T("AlertTriangle", [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]);
  var Bl = T("ArrowDown", [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ]);
  var Ol = T("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]);
  var Ul = T("ArrowUp", [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ]);
  var Hl = T("BadgePlus", [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
        key: "3c2336",
      },
    ],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ]);
  var Vl = T("Bot", [
    ["path", { d: "M12 8V4H8", key: "hb8ula" }],
    [
      "rect",
      { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
    ],
    ["path", { d: "M2 14h2", key: "vft8re" }],
    ["path", { d: "M20 14h2", key: "4cs60a" }],
    ["path", { d: "M15 13v2", key: "1xurst" }],
    ["path", { d: "M9 13v2", key: "rq6x2g" }],
  ]);
  var jl = T("CheckCheck", [
    ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
    ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
  ]);
  var Wl = T("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
  var $l = T("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
  var Gl = T("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
  var ql = T("Coins", [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ]);
  var Ql = T("Command", [
    [
      "path",
      {
        d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
        key: "11bfej",
      },
    ],
  ]);
  var Kl = T("CreditCard", [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ]);
  var Xl = T("FileText", [
    [
      "path",
      {
        d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        key: "1nnpy2",
      },
    ],
    ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
    ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
    ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
    ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }],
  ]);
  var Zl = T("File", [
    [
      "path",
      {
        d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        key: "1nnpy2",
      },
    ],
    ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ]);
  var Yl = T("FolderClosed", [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
    ["path", { d: "M2 10h20", key: "1ir3d8" }],
  ]);
  var Jl = T("HelpCircle", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]);
  var bl = T("Image", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ]);
  var eu = T("Import", [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
    [
      "path",
      {
        d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
        key: "1ywtjm",
      },
    ],
  ]);
  var tu = T("Key", [
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
    ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
    ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }],
  ]);
  var ru = T("Laptop", [
    [
      "path",
      {
        d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
        key: "tarvll",
      },
    ],
  ]);
  var nu = T("LayoutDashboard", [
    [
      "rect",
      { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
    ],
    [
      "rect",
      { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
    ],
    [
      "rect",
      { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
    ],
  ]);
  var au = T("Loader2", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]);
  var ou = T("MessageSquare", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ]);
  var lu = T("Moon", [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ]);
  var uu = T("MoreVertical", [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
    ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ]);
  var iu = T("Pizza", [
    ["path", { d: "M15 11h.01", key: "rns66s" }],
    ["path", { d: "M11 15h.01", key: "k85uqc" }],
    ["path", { d: "M16 16h.01", key: "1f9h7w" }],
    ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
    ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }],
  ]);
  var su = T("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]);
  var du = T("Settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]);
  var fu = T("SunMedium", [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 3v1", key: "1asbbs" }],
    ["path", { d: "M12 20v1", key: "1wcdkc" }],
    ["path", { d: "M3 12h1", key: "lp3yf2" }],
    ["path", { d: "M20 12h1", key: "1vloll" }],
    ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
    ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
    ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
    ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }],
  ]);
  var cu = T("Trash", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ]);
  var pu = T("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]);
  var mu = T("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]);
  var hu = T("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]);
  var dm = {
    badgeplus: Hl,
    import: eu,
    logo: Ql,
    folder: Yl,
    dashboard: nu,
    close: hu,
    key: tu,
    checkcheck: jl,
    coin: ql,
    spinner: au,
    chevronLeft: $l,
    chevronRight: Gl,
    trash: cu,
    post: Xl,
    page: Zl,
    media: bl,
    settings: du,
    billing: Kl,
    ellipsis: uu,
    add: su,
    bot: Vl,
    warning: Nl,
    user: mu,
    arrowRight: Ol,
    arrowUp: Ul,
    arrowDown: Bl,
    help: Jl,
    pizza: iu,
    sun: fu,
    moon: lu,
    laptop: ru,
    google: ({ ...e }) =>
      React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "20",
          height: "20",
          viewBox: "0 0 48 48",
        },
        React.createElement("path", {
          fill: "#FFC107",
          d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z",
        }),
        React.createElement("path", {
          fill: "#FF3D00",
          d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z",
        }),
        React.createElement("path", {
          fill: "#4CAF50",
          d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z",
        }),
        React.createElement("path", {
          fill: "#1976D2",
          d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z",
        })
      ),
    gitHub: ({ ...e }) =>
      React.createElement(
        "svg",
        {
          "aria-hidden": "true",
          focusable: "false",
          "data-prefix": "fab",
          "data-icon": "github",
          role: "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 496 512",
          ...e,
        },
        React.createElement("path", {
          fill: "currentColor",
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        })
      ),
    message: ou,
    twitter: pu,
    check: Wl,
  };
  var dt = se(Rt());
  var fm = dt.forwardRef(({ className: e, ...t }, r) =>
    dt.createElement("div", {
      ref: r,
      className: Ye(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
  fm.displayName = "Card";
  var od = dt.forwardRef(({ className: e, ...t }, r) =>
    dt.createElement("div", {
      ref: r,
      className: Ye("flex flex-col space-y-1.5 p-6", e),
      ...t,
    })
  );
  od.displayName = "CardHeader";
  var cm = dt.forwardRef(({ className: e, ...t }, r) =>
    dt.createElement("h3", {
      ref: r,
      className: Ye("text-lg font-semibold leading-none tracking-tight", e),
      ...t,
    })
  );
  cm.displayName = "CardTitle";
  var pm = dt.forwardRef(({ className: e, ...t }, r) =>
    dt.createElement("p", {
      ref: r,
      className: Ye("text-sm text-muted-foreground", e),
      ...t,
    })
  );
  pm.displayName = "CardDescription";
  var ld = dt.forwardRef(({ className: e, ...t }, r) =>
    dt.createElement("div", { ref: r, className: Ye("p-6 pt-0", e), ...t })
  );
  ld.displayName = "CardContent";
  var ud = dt.forwardRef(({ className: e, ...t }, r) =>
    dt.createElement("div", {
      ref: r,
      className: Ye(" flex items-center p-6 pt-0", e),
      ...t,
    })
  );
  ud.displayName = "CardFooter";
  var Tu = se(Kt(), 1);
  var Pe = se(Kt(), 1),
    Tx = se(cx(), 1);
  var me = se(Kt(), 1),
    Cn = () => {},
    ft = Cn(),
    gu = Object,
    O = (e) => e === ft,
    nr = (e) => typeof e == "function",
    wr = (e, t) => ({ ...e, ...t }),
    H2 = (e) => nr(e.then),
    id = new WeakMap(),
    V2 = 0,
    yu = (e) => {
      let t = typeof e,
        r = e && e.constructor,
        n = r == Date,
        a,
        o;
      if (gu(e) === e && !n && r != RegExp) {
        if (((a = id.get(e)), a)) return a;
        if (((a = ++V2 + "~"), id.set(e, a), r == Array)) {
          for (a = "@", o = 0; o < e.length; o++) a += yu(e[o]) + ",";
          id.set(e, a);
        }
        if (r == gu) {
          a = "#";
          let l = gu.keys(e).sort();
          for (; !O((o = l.pop())); )
            O(e[o]) || (a += o + ":" + yu(e[o]) + ",");
          id.set(e, a);
        }
      } else
        a = n
          ? e.toJSON()
          : t == "symbol"
          ? e.toString()
          : t == "string"
          ? JSON.stringify(e)
          : "" + e;
      return a;
    },
    Lr = new WeakMap(),
    hm = {},
    sd = {},
    Sm = "undefined",
    fd = typeof window != Sm,
    ym = typeof document != Sm,
    j2 = () => fd && typeof window.requestAnimationFrame != Sm,
    Cm = (e, t) => {
      let r = Lr.get(e);
      return [
        () => (!O(t) && e.get(t)) || hm,
        (n) => {
          if (!O(t)) {
            let a = e.get(t);
            t in sd || (sd[t] = a), r[5](t, wr(a, n), a || hm);
          }
        },
        r[6],
        () => (!O(t) && t in sd ? sd[t] : (!O(t) && e.get(t)) || hm),
      ];
    },
    vm = !0,
    W2 = () => vm,
    [xm, Lm] =
      fd && window.addEventListener
        ? [
            window.addEventListener.bind(window),
            window.removeEventListener.bind(window),
          ]
        : [Cn, Cn],
    $2 = () => {
      let e = ym && document.visibilityState;
      return O(e) || e !== "hidden";
    },
    G2 = (e) => (
      ym && document.addEventListener("visibilitychange", e),
      xm("focus", e),
      () => {
        ym && document.removeEventListener("visibilitychange", e),
          Lm("focus", e);
      }
    ),
    q2 = (e) => {
      let t = () => {
          (vm = !0), e();
        },
        r = () => {
          vm = !1;
        };
      return (
        xm("online", t),
        xm("offline", r),
        () => {
          Lm("online", t), Lm("offline", r);
        }
      );
    },
    Q2 = { isOnline: W2, isVisible: $2 },
    K2 = { initFocus: G2, initReconnect: q2 },
    Im = !me.default.useId,
    lo = !fd || "Deno" in window,
    hx = (e) => (j2() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
    vu = lo ? me.useEffect : me.useLayoutEffect,
    gm = typeof navigator < "u" && navigator.connection,
    px =
      !lo &&
      gm &&
      (["slow-2g", "2g"].includes(gm.effectiveType) || gm.saveData),
    cd = (e) => {
      if (nr(e))
        try {
          e = e();
        } catch {
          e = "";
        }
      let t = e;
      return (
        (e =
          typeof e == "string"
            ? e
            : (Array.isArray(e) ? e.length : e)
            ? yu(e)
            : ""),
        [e, t]
      );
    },
    X2 = 0,
    dd = () => ++X2,
    gx = 0,
    yx = 1,
    vx = 2,
    Z2 = 3,
    uo = {
      __proto__: null,
      ERROR_REVALIDATE_EVENT: Z2,
      FOCUS_EVENT: gx,
      MUTATE_EVENT: vx,
      RECONNECT_EVENT: yx,
    };
  async function km(...e) {
    let [t, r, n, a] = e,
      o = wr(
        { populateCache: !0, throwOnError: !0 },
        typeof a == "boolean" ? { revalidate: a } : a || {}
      ),
      l = o.populateCache,
      u = o.rollbackOnError,
      i = o.optimisticData,
      f = o.revalidate !== !1,
      p = (y) => (typeof u == "function" ? u(y) : u !== !1),
      h = o.throwOnError;
    if (nr(r)) {
      let y = r,
        x = [],
        v = t.keys();
      for (let E of v) !/^\$(inf|sub)\$/.test(E) && y(t.get(E)._k) && x.push(E);
      return Promise.all(x.map(m));
    }
    return m(r);
    async function m(y) {
      let [x] = cd(y);
      if (!x) return;
      let [v, E] = Cm(t, x),
        [d, s, c, g] = Lr.get(t),
        L = d[x],
        C = () =>
          f && (delete c[x], delete g[x], L && L[0])
            ? L[0](vx).then(() => v().data)
            : v().data;
      if (e.length < 3) return C();
      let S = n,
        w,
        M = dd();
      s[x] = [M, 0];
      let I = !O(i),
        H = v(),
        N = H.data,
        Tr = H._c,
        ge = O(Tr) ? N : Tr;
      if ((I && ((i = nr(i) ? i(ge, N) : i), E({ data: i, _c: ge })), nr(S)))
        try {
          S = S(ge);
        } catch (xe) {
          w = xe;
        }
      if (S && H2(S))
        if (
          ((S = await S.catch((xe) => {
            w = xe;
          })),
          M !== s[x][0])
        ) {
          if (w) throw w;
          return S;
        } else w && I && p(w) && ((l = !0), (S = ge), E({ data: S, _c: ft }));
      l && (w || (nr(l) && (S = l(S, ge)), E({ data: S, error: ft, _c: ft }))),
        (s[x][1] = dd());
      let Jr = await C();
      if ((E({ _c: ft }), w)) {
        if (h) throw w;
        return;
      }
      return l ? Jr : S;
    }
  }
  var mx = (e, t) => {
      for (let r in e) e[r][0] && e[r][0](t);
    },
    xx = (e, t) => {
      if (!Lr.has(e)) {
        let r = wr(K2, t),
          n = {},
          a = km.bind(ft, e),
          o = Cn,
          l = {},
          u = (p, h) => {
            let m = l[p] || [];
            return (l[p] = m), m.push(h), () => m.splice(m.indexOf(h), 1);
          },
          i = (p, h, m) => {
            e.set(p, h);
            let y = l[p];
            if (y) for (let x of y) x(h, m);
          },
          f = () => {
            if (!Lr.has(e) && (Lr.set(e, [n, {}, {}, {}, a, i, u]), !lo)) {
              let p = r.initFocus(setTimeout.bind(ft, mx.bind(ft, n, gx))),
                h = r.initReconnect(setTimeout.bind(ft, mx.bind(ft, n, yx)));
              o = () => {
                p && p(), h && h(), Lr.delete(e);
              };
            }
          };
        return f(), [e, a, f, o];
      }
      return [e, Lr.get(e)[4]];
    },
    Y2 = (e, t, r, n, a) => {
      let o = r.errorRetryCount,
        l = a.retryCount,
        u =
          ~~((Math.random() + 0.5) * (1 << (l < 8 ? l : 8))) *
          r.errorRetryInterval;
      (!O(o) && l > o) || setTimeout(n, u, a);
    },
    J2 = (e, t) => yu(e) == yu(t),
    [Pm, Lx] = xx(new Map()),
    Em = wr(
      {
        onLoadingSlow: Cn,
        onSuccess: Cn,
        onError: Cn,
        onErrorRetry: Y2,
        onDiscarded: Cn,
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
        revalidateIfStale: !0,
        shouldRetryOnError: !0,
        errorRetryInterval: px ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: px ? 5e3 : 3e3,
        compare: J2,
        isPaused: () => !1,
        cache: Pm,
        mutate: Lx,
        fallback: {},
      },
      Q2
    ),
    wx = (e, t) => {
      let r = wr(e, t);
      if (t) {
        let { use: n, fallback: a } = e,
          { use: o, fallback: l } = t;
        n && o && (r.use = n.concat(o)), a && l && (r.fallback = wr(a, l));
      }
      return r;
    },
    wm = (0, me.createContext)({}),
    Sx = (e) => {
      let { value: t } = e,
        r = (0, me.useContext)(wm),
        n = nr(t),
        a = (0, me.useMemo)(() => (n ? t(r) : t), [n, r, t]),
        o = (0, me.useMemo)(() => (n ? a : wx(r, a)), [n, r, a]),
        l = a && a.provider,
        u = (0, me.useRef)(ft);
      l && !u.current && (u.current = xx(l(o.cache || Pm), a));
      let i = u.current;
      return (
        i && ((o.cache = i[0]), (o.mutate = i[1])),
        vu(() => {
          if (i) return i[2] && i[2](), i[3];
        }, []),
        (0, me.createElement)(wm.Provider, wr(e, { value: o }))
      );
    },
    Cx = fd && window.__SWR_DEVTOOLS_USE__,
    b2 = Cx ? window.__SWR_DEVTOOLS_USE__ : [],
    eP = () => {
      Cx && (window.__SWR_DEVTOOLS_REACT__ = me.default);
    },
    tP = (e) =>
      nr(e[1])
        ? [e[0], e[1], e[2] || {}]
        : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
    Ix = () => wr(Em, (0, me.useContext)(wm));
  var rP = (e) => (t, r, n) =>
      e(
        t,
        r &&
          ((...o) => {
            let [l] = cd(t),
              [, , , u] = Lr.get(Pm),
              i = u[l];
            return O(i) ? r(...o) : (delete u[l], i);
          }),
        n
      ),
    nP = b2.concat(rP),
    kx = (e) =>
      function (...r) {
        let n = Ix(),
          [a, o, l] = tP(r),
          u = wx(n, l),
          i = e,
          { use: f } = u,
          p = (f || []).concat(nP);
        for (let h = p.length; h--; ) i = p[h](i);
        return i(a, o || u.fetcher || null, u);
      };
  var Px = (e, t, r) => {
    let n = t[e] || (t[e] = []);
    return (
      n.push(r),
      () => {
        let a = n.indexOf(r);
        a >= 0 && ((n[a] = n[n.length - 1]), n.pop());
      }
    );
  };
  eP();
  var Ex =
      Pe.default.use ||
      ((e) => {
        if (e.status === "pending") throw e;
        if (e.status === "fulfilled") return e.value;
        throw e.status === "rejected"
          ? e.reason
          : ((e.status = "pending"),
            e.then(
              (t) => {
                (e.status = "fulfilled"), (e.value = t);
              },
              (t) => {
                (e.status = "rejected"), (e.reason = t);
              }
            ),
            e);
      }),
    Tm = { dedupe: !0 },
    aP = (e, t, r) => {
      let {
          cache: n,
          compare: a,
          suspense: o,
          fallbackData: l,
          revalidateOnMount: u,
          revalidateIfStale: i,
          refreshInterval: f,
          refreshWhenHidden: p,
          refreshWhenOffline: h,
          keepPreviousData: m,
        } = r,
        [y, x, v, E] = Lr.get(n),
        [d, s] = cd(e),
        c = (0, Pe.useRef)(!1),
        g = (0, Pe.useRef)(!1),
        L = (0, Pe.useRef)(d),
        C = (0, Pe.useRef)(t),
        S = (0, Pe.useRef)(r),
        w = () => S.current,
        M = () => w().isVisible() && w().isOnline(),
        [I, H, N, Tr] = Cm(n, d),
        ge = (0, Pe.useRef)({}).current,
        Jr = O(l) ? r.fallback[d] : l,
        xe = (Q, K) => {
          for (let Ne in ge) {
            let ce = Ne;
            if (ce === "data") {
              if (!a(Q[ce], K[ce]) && (!O(Q[ce]) || !a(Ci, K[ce]))) return !1;
            } else if (K[ce] !== Q[ce]) return !1;
          }
          return !0;
        },
        Ca = (0, Pe.useMemo)(() => {
          let Q =
              !d || !t
                ? !1
                : O(u)
                ? w().isPaused() || o
                  ? !1
                  : O(i)
                  ? !0
                  : i
                : u,
            K = (Qe) => {
              let Mr = wr(Qe);
              return (
                delete Mr._k,
                Q ? { isValidating: !0, isLoading: !0, ...Mr } : Mr
              );
            },
            Ne = I(),
            ce = Tr(),
            cr = K(Ne),
            Ia = Ne === ce ? cr : K(ce),
            Me = cr;
          return [
            () => {
              let Qe = K(I());
              return xe(Qe, Me)
                ? ((Me.data = Qe.data),
                  (Me.isLoading = Qe.isLoading),
                  (Me.isValidating = Qe.isValidating),
                  (Me.error = Qe.error),
                  Me)
                : ((Me = Qe), Qe);
            },
            () => Ia,
          ];
        }, [n, d]),
        at = (0, Tx.useSyncExternalStore)(
          (0, Pe.useCallback)(
            (Q) =>
              N(d, (K, Ne) => {
                xe(Ne, K) || Q();
              }),
            [n, d]
          ),
          Ca[0],
          Ca[1]
        ),
        Mt = !c.current,
        wi = y[d] && y[d].length > 0,
        Ft = at.data,
        Qt = O(Ft) ? Jr : Ft,
        Si = at.error,
        Gg = (0, Pe.useRef)(Qt),
        Ci = m ? (O(Ft) ? Gg.current : Ft) : Qt,
        qg =
          wi && !O(Si)
            ? !1
            : Mt && !O(u)
            ? u
            : w().isPaused()
            ? !1
            : o
            ? O(Qt)
              ? !1
              : i
            : O(Qt) || i,
        Qg = !!(d && t && Mt && qg),
        rC = O(at.isValidating) ? Qg : at.isValidating,
        nC = O(at.isLoading) ? Qg : at.isLoading,
        Uo = (0, Pe.useCallback)(
          async (Q) => {
            let K = C.current;
            if (!d || !K || g.current || w().isPaused()) return !1;
            let Ne,
              ce,
              cr = !0,
              Ia = Q || {},
              Me = !v[d] || !Ia.dedupe,
              Qe = () =>
                Im
                  ? !g.current && d === L.current && c.current
                  : d === L.current,
              Mr = { isValidating: !1, isLoading: !1 },
              Xg = () => {
                H(Mr);
              },
              Zg = () => {
                let Dt = v[d];
                Dt && Dt[1] === ce && delete v[d];
              },
              Yg = { isValidating: !0 };
            O(I().data) && (Yg.isLoading = !0);
            try {
              if (
                (Me &&
                  (H(Yg),
                  r.loadingTimeout &&
                    O(I().data) &&
                    setTimeout(() => {
                      cr && Qe() && w().onLoadingSlow(d, r);
                    }, r.loadingTimeout),
                  (v[d] = [K(s), dd()])),
                ([Ne, ce] = v[d]),
                (Ne = await Ne),
                Me && setTimeout(Zg, r.dedupingInterval),
                !v[d] || v[d][1] !== ce)
              )
                return Me && Qe() && w().onDiscarded(d), !1;
              Mr.error = ft;
              let Dt = x[d];
              if (!O(Dt) && (ce <= Dt[0] || ce <= Dt[1] || Dt[1] === 0))
                return Xg(), Me && Qe() && w().onDiscarded(d), !1;
              let Fr = I().data;
              (Mr.data = a(Fr, Ne) ? Fr : Ne),
                Me && Qe() && w().onSuccess(Ne, d, r);
            } catch (Dt) {
              Zg();
              let Fr = w(),
                { shouldRetryOnError: _f } = Fr;
              Fr.isPaused() ||
                ((Mr.error = Dt),
                Me &&
                  Qe() &&
                  (Fr.onError(Dt, d, Fr),
                  (_f === !0 || (nr(_f) && _f(Dt))) &&
                    M() &&
                    Fr.onErrorRetry(
                      Dt,
                      d,
                      Fr,
                      (aC) => {
                        let zf = y[d];
                        zf && zf[0] && zf[0](uo.ERROR_REVALIDATE_EVENT, aC);
                      },
                      { retryCount: (Ia.retryCount || 0) + 1, dedupe: !0 }
                    )));
            }
            return (cr = !1), Xg(), !0;
          },
          [d, n]
        ),
        Kg = (0, Pe.useCallback)((...Q) => km(n, L.current, ...Q), []);
      if (
        (vu(() => {
          (C.current = t), (S.current = r), O(Ft) || (Gg.current = Ft);
        }),
        vu(() => {
          if (!d) return;
          let Q = Uo.bind(ft, Tm),
            K = 0,
            ce = Px(d, y, (cr, Ia = {}) => {
              if (cr == uo.FOCUS_EVENT) {
                let Me = Date.now();
                w().revalidateOnFocus &&
                  Me > K &&
                  M() &&
                  ((K = Me + w().focusThrottleInterval), Q());
              } else if (cr == uo.RECONNECT_EVENT)
                w().revalidateOnReconnect && M() && Q();
              else {
                if (cr == uo.MUTATE_EVENT) return Uo();
                if (cr == uo.ERROR_REVALIDATE_EVENT) return Uo(Ia);
              }
            });
          return (
            (g.current = !1),
            (L.current = d),
            (c.current = !0),
            H({ _k: s }),
            qg && (O(Qt) || lo ? Q() : hx(Q)),
            () => {
              (g.current = !0), ce();
            }
          );
        }, [d]),
        vu(() => {
          let Q;
          function K() {
            let ce = nr(f) ? f(I().data) : f;
            ce && Q !== -1 && (Q = setTimeout(Ne, ce));
          }
          function Ne() {
            !I().error && (p || w().isVisible()) && (h || w().isOnline())
              ? Uo(Tm).then(K)
              : K();
          }
          return (
            K(),
            () => {
              Q && (clearTimeout(Q), (Q = -1));
            }
          );
        }, [f, p, h, d]),
        (0, Pe.useDebugValue)(Ci),
        o && O(Qt) && d)
      ) {
        if (!Im && lo)
          throw new Error(
            "Fallback data is required when using suspense in SSR."
          );
        (C.current = t), (S.current = r), (g.current = !1);
        let Q = E[d];
        if (!O(Q)) {
          let K = Kg(Q);
          Ex(K);
        }
        if (O(Si)) {
          let K = Uo(Tm);
          O(Ci) || ((K.status = "fulfilled"), (K.value = !0)), Ex(K);
        } else throw Si;
      }
      return {
        mutate: Kg,
        get data() {
          return (ge.data = !0), Ci;
        },
        get error() {
          return (ge.error = !0), Si;
        },
        get isValidating() {
          return (ge.isValidating = !0), rC;
        },
        get isLoading() {
          return (ge.isLoading = !0), nC;
        },
      };
    },
    cM = gu.defineProperty(Sx, "defaultValue", { value: Em }),
    Mx = kx(aP);
  var Fx =
    (e, t = 21) =>
    (r = t) => {
      let n = "",
        a = r;
      for (; a--; ) n += e[(Math.random() * e.length) | 0];
      return n;
    };
  var Mu = se(Kt(), 1);
  var io = se(Kt(), 1),
    xu = {
      code: "0",
      name: "text",
      parse: (e) => {
        if (typeof e != "string")
          throw new Error('"text" parts expect a string value.');
        return { type: "text", value: e };
      },
    },
    Lu = {
      code: "1",
      name: "function_call",
      parse: (e) => {
        if (
          e == null ||
          typeof e != "object" ||
          !("function_call" in e) ||
          typeof e.function_call != "object" ||
          e.function_call == null ||
          !("name" in e.function_call) ||
          !("arguments" in e.function_call) ||
          typeof e.function_call.name != "string" ||
          typeof e.function_call.arguments != "string"
        )
          throw new Error(
            '"function_call" parts expect an object with a "function_call" property.'
          );
        return { type: "function_call", value: e };
      },
    },
    wu = {
      code: "2",
      name: "data",
      parse: (e) => {
        if (!Array.isArray(e))
          throw new Error('"data" parts expect an array value.');
        return { type: "data", value: e };
      },
    },
    Su = {
      code: "3",
      name: "error",
      parse: (e) => {
        if (typeof e != "string")
          throw new Error('"error" parts expect a string value.');
        return { type: "error", value: e };
      },
    },
    Cu = {
      code: "4",
      name: "assistant_message",
      parse: (e) => {
        if (
          e == null ||
          typeof e != "object" ||
          !("id" in e) ||
          !("role" in e) ||
          !("content" in e) ||
          typeof e.id != "string" ||
          typeof e.role != "string" ||
          e.role !== "assistant" ||
          !Array.isArray(e.content) ||
          !e.content.every(
            (t) =>
              t != null &&
              typeof t == "object" &&
              "type" in t &&
              t.type === "text" &&
              "text" in t &&
              t.text != null &&
              typeof t.text == "object" &&
              "value" in t.text &&
              typeof t.text.value == "string"
          )
        )
          throw new Error(
            '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
          );
        return { type: "assistant_message", value: e };
      },
    },
    Iu = {
      code: "5",
      name: "assistant_control_data",
      parse: (e) => {
        if (
          e == null ||
          typeof e != "object" ||
          !("threadId" in e) ||
          !("messageId" in e) ||
          typeof e.threadId != "string" ||
          typeof e.messageId != "string"
        )
          throw new Error(
            '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
          );
        return {
          type: "assistant_control_data",
          value: { threadId: e.threadId, messageId: e.messageId },
        };
      },
    },
    ku = {
      code: "6",
      name: "data_message",
      parse: (e) => {
        if (
          e == null ||
          typeof e != "object" ||
          !("role" in e) ||
          !("data" in e) ||
          typeof e.role != "string" ||
          e.role !== "data"
        )
          throw new Error(
            '"data_message" parts expect an object with a "role" and "data" property.'
          );
        return { type: "data_message", value: e };
      },
    },
    Pu = {
      code: "7",
      name: "tool_calls",
      parse: (e) => {
        if (
          e == null ||
          typeof e != "object" ||
          !("tool_calls" in e) ||
          typeof e.tool_calls != "object" ||
          e.tool_calls == null ||
          !Array.isArray(e.tool_calls) ||
          e.tool_calls.some(
            (t) =>
              t == null ||
              typeof t != "object" ||
              !("id" in t) ||
              typeof t.id != "string" ||
              !("type" in t) ||
              typeof t.type != "string" ||
              !("function" in t) ||
              t.function == null ||
              typeof t.function != "object" ||
              !("arguments" in t.function) ||
              typeof t.function.name != "string" ||
              typeof t.function.arguments != "string"
          )
        )
          throw new Error(
            '"tool_calls" parts expect an object with a ToolCallPayload.'
          );
        return { type: "tool_calls", value: e };
      },
    },
    Eu = {
      code: "8",
      name: "message_annotations",
      parse: (e) => {
        if (!Array.isArray(e))
          throw new Error('"message_annotations" parts expect an array value.');
        return { type: "message_annotations", value: e };
      },
    },
    oP = [xu, Lu, wu, Su, Cu, Iu, ku, Pu, Eu],
    lP = {
      [xu.code]: xu,
      [Lu.code]: Lu,
      [wu.code]: wu,
      [Su.code]: Su,
      [Cu.code]: Cu,
      [Iu.code]: Iu,
      [ku.code]: ku,
      [Pu.code]: Pu,
      [Eu.code]: Eu,
    },
    yM = {
      [xu.name]: xu.code,
      [Lu.name]: Lu.code,
      [wu.name]: wu.code,
      [Su.name]: Su.code,
      [Cu.name]: Cu.code,
      [Iu.name]: Iu.code,
      [ku.name]: ku.code,
      [Pu.name]: Pu.code,
      [Eu.name]: Eu.code,
    },
    uP = oP.map((e) => e.code),
    iP = (e) => {
      let t = e.indexOf(":");
      if (t === -1)
        throw new Error("Failed to parse stream string. No separator found.");
      let r = e.slice(0, t);
      if (!uP.includes(r))
        throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
      let n = r,
        a = e.slice(t + 1),
        o = JSON.parse(a);
      return lP[n].parse(o);
    },
    sP = 10;
  function dP(e, t) {
    let r = new Uint8Array(t),
      n = 0;
    for (let a of e) r.set(a, n), (n += a.length);
    return (e.length = 0), r;
  }
  async function* fP(e, { isAborted: t } = {}) {
    let r = new TextDecoder(),
      n = [],
      a = 0;
    for (;;) {
      let { value: o } = await e.read();
      if (o && (n.push(o), (a += o.length), o[o.length - 1] !== sP)) continue;
      if (n.length === 0) break;
      let l = dP(n, a);
      a = 0;
      let u = r
        .decode(l, { stream: !0 })
        .split(
          `
`
        )
        .filter((i) => i !== "")
        .map(iP);
      for (let i of u) yield i;
      if (t?.()) {
        e.cancel();
        break;
      }
    }
  }
  var Dx = Fx(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    7
  );
  function cP({
    api: e,
    threadId: t,
    credentials: r,
    headers: n,
    body: a,
    onError: o,
  }) {
    let [l, u] = (0, io.useState)([]),
      [i, f] = (0, io.useState)(""),
      [p, h] = (0, io.useState)(void 0),
      [m, y] = (0, io.useState)("awaiting_message"),
      [x, v] = (0, io.useState)(void 0),
      E = (c) => {
        f(c.target.value);
      },
      d = async (c, g) => {
        var L;
        y("in_progress"),
          u((C) => {
            var S;
            return [...C, { ...c, id: (S = c.id) != null ? S : Dx() }];
          }),
          f("");
        try {
          let C = await fetch(e, {
            method: "POST",
            credentials: r,
            headers: { "Content-Type": "application/json", ...n },
            body: JSON.stringify({
              ...a,
              threadId: (L = t ?? p) != null ? L : null,
              message: c.content,
              data: g?.data,
            }),
          });
          if (C.body == null) throw new Error("The response body is empty.");
          for await (let { type: S, value: w } of fP(C.body.getReader()))
            switch (S) {
              case "assistant_message": {
                u((M) => [
                  ...M,
                  { id: w.id, role: w.role, content: w.content[0].text.value },
                ]);
                break;
              }
              case "text": {
                u((M) => {
                  let I = M[M.length - 1];
                  return [
                    ...M.slice(0, M.length - 1),
                    { id: I.id, role: I.role, content: I.content + w },
                  ];
                });
                break;
              }
              case "data_message": {
                u((M) => {
                  var I;
                  return [
                    ...M,
                    {
                      id: (I = w.id) != null ? I : Dx(),
                      role: "data",
                      content: "",
                      data: w.data,
                    },
                  ];
                });
                break;
              }
              case "assistant_control_data": {
                h(w.threadId),
                  u((M) => {
                    let I = M[M.length - 1];
                    return (
                      (I.id = w.messageId), [...M.slice(0, M.length - 1), I]
                    );
                  });
                break;
              }
              case "error": {
                let M = new Error(w);
                v(M);
                break;
              }
            }
        } catch (C) {
          o && C instanceof Error && o(C), v(C);
        }
        y("awaiting_message");
      };
    return {
      append: d,
      messages: l,
      setMessages: u,
      threadId: p,
      input: i,
      setInput: f,
      handleInputChange: E,
      submitMessage: async (c, g) => {
        var L;
        (L = c?.preventDefault) == null || L.call(c),
          i !== "" && d({ role: "user", content: i }, g);
      },
      status: m,
      error: x,
    };
  }
  var Rx = cP;
  function Mm() {
    let [e, t] = (0, R.useState)(),
      [r, n] = (0, R.useState)(),
      [a, o] = (0, R.useState)(!1),
      [l, u] = (0, R.useState)(""),
      [i, f] = (0, R.useState)(""),
      [p, h] = (0, R.useState)(!1),
      {
        status: m,
        messages: y,
        input: x,
        submitMessage: v,
        handleInputChange: E,
        threadId: d,
      } = Rx({
        api: `${Ea.url}api/chatbots/${window.chatbotConfig.chatbotId}/chat`,
      });
    (0, R.useEffect)(() => {
      (async () => {
        let g = window.chatbotConfig.chatbotId;
        n(g);
        let C = await (await fetch(`${Ea.url}api/chatbots/${g}/config`)).json();
        t(C);
      })();
    }, []);
    async function s(c) {
      c.preventDefault(), h(!0);
      let g = await fetch(`${Ea.url}api/chatbots/${r}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatbotId: r,
          threadId: d || "",
          email: l,
          inquiry: i,
        }),
      });
      g.ok
        ? (o(!1),
          y.push({
            id: String(y.length + 1),
            role: "assistant",
            content: e.inquiryAutomaticReplyText,
          }))
        : console.error(`Failed to send inquiry: ${g}`),
        h(!1);
    }
    return R.default.createElement(
      "div",
      {
        className:
          "border rounded-lg bg-card text-card-foreground shadow-sm flex border-none bg-white shadow-lg flex-col w-full overflow-hidden",
      },
      R.default.createElement(
        od,
        {
          style: { background: e ? e.chatHeaderBackgroundColor : "" },
          className: "shadow border-b p-4",
        },
        R.default.createElement(
          "h2",
          {
            style: { color: e ? e.chatHeaderTextColor : "" },
            className: "text-xl font-bold flex items-center gap-2",
          },
          R.default.createElement("div", null, e ? e.chatTitle : "")
        )
      ),
      R.default.createElement(
        ld,
        { className: "border-b overflow-auto p-4 flex-grow overflow-y-auto" },
        R.default.createElement(
          "div",
          { className: "space-y-4" },
          R.default.createElement(
            "div",
            { key: "0", className: "flex items-end gap-2" },
            R.default.createElement(
              "div",
              {
                className: "rounded-lg bg-zinc-200 p-2",
                style: { background: e ? e.chatbotReplyBackgroundColor : "" },
              },
              R.default.createElement(
                "p",
                {
                  className: "text-md",
                  style: { color: e ? e.chatbotReplyTextColor : "" },
                },
                e ? e.welcomeMessage : ""
              )
            )
          ),
          y.map((c) => {
            let g = y.filter((L) => L.role === "assistant").indexOf(c) + 1;
            return c.role === "assistant"
              ? R.default.createElement(
                  "div",
                  { key: c.id, className: "flex items-end gap-2" },
                  R.default.createElement(
                    "div",
                    {
                      className: "rounded-lg bg-zinc-200 p-2",
                      style: {
                        color: e ? e.chatbotReplyTextColor : "",
                        background: e ? e.chatbotReplyBackgroundColor : "",
                      },
                    },
                    c.content
                      .replace(/\【.*?】/g, "")
                      .split("```")
                      .map((L, C) =>
                        C % 2 === 1
                          ? R.default.createElement(
                              "pre",
                              { key: C },
                              R.default.createElement("code", null, L)
                            )
                          : L.split(
                              `
`
                            ).map((S, w, M) =>
                              R.default.createElement(
                                "p",
                                {
                                  key: `${C}-${w}`,
                                  className: `text-md ${
                                    w < M.length - 1 ? "mb-4" : ""
                                  }`,
                                },
                                S.split("**").map((I, H) => {
                                  if (H % 2 === 1)
                                    return R.default.createElement(
                                      "strong",
                                      { key: H },
                                      I
                                    );
                                  {
                                    let N =
                                        /\[([^\]]+)\]\((https?:\/\/[^\s]+[^.])\)/g,
                                      Tr = /(https?:\/\/[^\s]+[^.])/g,
                                      ge = I.split(N);
                                    return ge.map((Jr, xe) =>
                                      xe % 3 === 1
                                        ? R.default.createElement(
                                            "a",
                                            {
                                              className: "underline",
                                              target: "_blank",
                                              key: xe,
                                              href: ge[xe + 1],
                                            },
                                            ge[xe]
                                          )
                                        : xe % 2 === 0
                                        ? Jr.split(Tr).map((at, Mt) =>
                                            Mt % 2 === 1
                                              ? R.default.createElement(
                                                  "a",
                                                  {
                                                    className: "underline",
                                                    target: "_blank",
                                                    key: `${xe}-${Mt}`,
                                                    href: at,
                                                  },
                                                  at
                                                )
                                              : R.default.createElement(
                                                  "span",
                                                  { key: `${xe}-${Mt}` },
                                                  at
                                                )
                                          )
                                        : null
                                    );
                                  }
                                })
                              )
                            )
                      ),
                    g > 0 &&
                      g == e.inquiryDisplayLinkAfterXMessage &&
                      m !== "in_progress" &&
                      e.inquiryEnabled &&
                      R.default.createElement(
                        "button",
                        {
                          className:
                            "mt-4 flex flex-row items-center text-sm justify-center text-blue-600 hover:text-blue-800 focus:outline-none focus:underline",
                          type: "button",
                          onClick: () => o(!a),
                        },
                        e.inquiryLinkText
                      )
                  )
                )
              : R.default.createElement(
                  "div",
                  { key: c.id, className: "flex items-end gap-2 justify-end" },
                  R.default.createElement(
                    "div",
                    {
                      className:
                        "rounded-lg flex max-w-5/6 bg-blue-500 text-white p-2 self-end",
                      style: {
                        background: e ? e.userReplyBackgroundColor : "",
                      },
                    },
                    R.default.createElement(
                      "p",
                      {
                        className: "text-md",
                        style: { color: e ? e.userReplyTextColor : "" },
                      },
                      c.content
                    )
                  )
                );
          }),
          m !== "in_progress" &&
            a &&
            R.default.createElement(
              "div",
              { className: "bg-white border-t-2 rounded-lg shadow-md w-5/6" },
              R.default.createElement(
                "form",
                { onSubmit: s },
                R.default.createElement(
                  fm,
                  { className: "border-0 h-full shadow-none" },
                  R.default.createElement(
                    od,
                    null,
                    R.default.createElement(cm, null, e.inquiryTitle),
                    R.default.createElement(pm, null, e.inquirySubtitle)
                  ),
                  R.default.createElement(
                    ld,
                    null,
                    R.default.createElement(
                      "div",
                      { className: "space-y-4" },
                      R.default.createElement(
                        "div",
                        { className: "space-y-2" },
                        R.default.createElement(
                          nd,
                          { htmlFor: "email" },
                          e.inquiryEmailLabel
                        ),
                        R.default.createElement(zi, {
                          onChange: (c) => u(c.target.value),
                          className: "bg-white",
                          id: "email",
                          type: "email",
                        })
                      ),
                      R.default.createElement(
                        "div",
                        { className: "space-y-2" },
                        R.default.createElement(
                          nd,
                          { htmlFor: "message" },
                          e.inquiryMessageLabel
                        ),
                        R.default.createElement(sm, {
                          onChange: (c) => f(c.target.value),
                          className: "min-h-[100px]",
                          id: "message",
                        })
                      )
                    )
                  ),
                  R.default.createElement(
                    ud,
                    null,
                    R.default.createElement(
                      Ai,
                      {
                        type: "submit",
                        disabled: p,
                        className: "bg-black text-white",
                      },
                      e.inquirySendButtonText,
                      p &&
                        R.default.createElement(dm.spinner, {
                          className: "mr-2 h-5 w-5 animate-spin",
                        })
                    )
                  )
                )
              )
            )
        )
      ),
      R.default.createElement(
        ud,
        { className: "p-4" },
        R.default.createElement(
          "div",
          { className: "flex flex-col w-full space-y-2" },
          R.default.createElement(
            "div",
            { className: "w-full flex items-center gap-2" },
            R.default.createElement(
              "form",
              {
                onSubmit: v,
                className: "flex align-right gap-2 items-end w-full",
              },
              R.default.createElement(zi, {
                disabled: m !== "awaiting_message",
                className: "w-full border border-gray-300 rounded shadow-sm",
                value: x,
                placeholder: e ? e.chatMessagePlaceHolder : "",
                onChange: E,
              }),
              R.default.createElement(
                Ai,
                {
                  type: "submit",
                  variant: "outline",
                  disabled: m !== "awaiting_message",
                  className: "flex-none w-1/3",
                },
                m !== "awaiting_message" &&
                  R.default.createElement(dm.spinner, {
                    className: "mr-2 h-4 w-4 animate-spin",
                  }),
                "Send"
              )
            )
          ),
          e?.displayBranding === !0 &&
            R.default.createElement(
              "div",
              { className: "text-center text-zinc-400 text-sm mb-2" },
              "Powered by ",
              R.default.createElement(
                "a",
                { href: "https://www.PlatformAI.io/" },
                Ea.name
              )
            )
        )
      )
    );
  }
  var tC = se(JS());
  var Gn = se(Kt()),
    bS = se(Wg()),
    hE = ({ children: e, styleUrl: t }) => {
      let r = (0, Gn.useRef)(null),
        [n, a] = (0, Gn.useState)(null);
      return (
        (0, Gn.useEffect)(() => {
          if (r.current && !n) {
            let o = r.current.attachShadow({ mode: "open" });
            if ((a(o), t)) {
              let l = document.createElement("link");
              (l.rel = "stylesheet"), (l.href = t), o.appendChild(l);
            }
          }
        }, [t, n]),
        Gn.default.createElement(
          "div",
          { ref: r },
          n && bS.default.createPortal(e, n)
        )
      );
    },
    eC = hE;
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("PlatformAI-chatbot");
    console.log(e);
    let t = document.createElement("div");
    (t.id = "chatbot-root"),
      e.appendChild(t),
      (0, tC.createRoot)(document.getElementById("chatbot-root")).render(
        Af.default.createElement(
          eC,
          { styleUrl: "https://www.PlatformAI.io/chatwindow.css" },
          Af.default.createElement(
            "noscript",
            null,
            "This chatbot is built using PlatformAI https://www.PlatformAI.io/"
          ),
          Af.default.createElement(Mm, null)
        )
      );
  });
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
