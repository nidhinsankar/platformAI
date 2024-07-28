"use strict";
(() => {
  var uC = Object.create;
  var ey = Object.defineProperty;
  var iC = Object.getOwnPropertyDescriptor;
  var sC = Object.getOwnPropertyNames;
  var dC = Object.getPrototypeOf,
    fC = Object.prototype.hasOwnProperty;
  var Ze = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  var cC = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let a of sC(t))
        !fC.call(e, a) &&
          a !== r &&
          ey(e, a, {
            get: () => t[a],
            enumerable: !(n = iC(t, a)) || n.enumerable,
          });
    return e;
  };
  var de = (e, t, r) => (
    (r = e != null ? uC(dC(e)) : {}),
    cC(
      t || !e || !e.__esModule
        ? ey(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  var fy = Ze((_) => {
    "use strict";
    var Ko = Symbol.for("react.element"),
      pC = Symbol.for("react.portal"),
      mC = Symbol.for("react.fragment"),
      hC = Symbol.for("react.strict_mode"),
      gC = Symbol.for("react.profiler"),
      yC = Symbol.for("react.provider"),
      vC = Symbol.for("react.context"),
      xC = Symbol.for("react.forward_ref"),
      LC = Symbol.for("react.suspense"),
      wC = Symbol.for("react.memo"),
      SC = Symbol.for("react.lazy"),
      ty = Symbol.iterator;
    function CC(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (ty && e[ty]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var ay = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      oy = Object.assign,
      ly = {};
    function Aa(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = ly),
        (this.updater = r || ay);
    }
    Aa.prototype.isReactComponent = {};
    Aa.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    Aa.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function uy() {}
    uy.prototype = Aa.prototype;
    function jf(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = ly),
        (this.updater = r || ay);
    }
    var Wf = (jf.prototype = new uy());
    Wf.constructor = jf;
    oy(Wf, Aa.prototype);
    Wf.isPureReactComponent = !0;
    var ry = Array.isArray,
      iy = Object.prototype.hasOwnProperty,
      $f = { current: null },
      sy = { key: !0, ref: !0, __self: !0, __source: !0 };
    function dy(e, t, r) {
      var n,
        a = {},
        o = null,
        l = null;
      if (t != null)
        for (n in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
          iy.call(t, n) && !sy.hasOwnProperty(n) && (a[n] = t[n]);
      var u = arguments.length - 2;
      if (u === 1) a.children = r;
      else if (1 < u) {
        for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
        a.children = i;
      }
      if (e && e.defaultProps)
        for (n in ((u = e.defaultProps), u)) a[n] === void 0 && (a[n] = u[n]);
      return {
        $$typeof: Ko,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: $f.current,
      };
    }
    function IC(e, t) {
      return {
        $$typeof: Ko,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function Gf(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Ko;
    }
    function kC(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (r) {
          return t[r];
        })
      );
    }
    var ny = /\/+/g;
    function Vf(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? kC("" + e.key)
        : t.toString(36);
    }
    function Ri(e, t, r, n, a) {
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
              case Ko:
              case pC:
                l = !0;
            }
        }
      if (l)
        return (
          (l = e),
          (a = a(l)),
          (e = n === "" ? "." + Vf(l, 0) : n),
          ry(a)
            ? ((r = ""),
              e != null && (r = e.replace(ny, "$&/") + "/"),
              Ri(a, t, r, "", function (f) {
                return f;
              }))
            : a != null &&
              (Gf(a) &&
                (a = IC(
                  a,
                  r +
                    (!a.key || (l && l.key === a.key)
                      ? ""
                      : ("" + a.key).replace(ny, "$&/") + "/") +
                    e
                )),
              t.push(a)),
          1
        );
      if (((l = 0), (n = n === "" ? "." : n + ":"), ry(e)))
        for (var u = 0; u < e.length; u++) {
          o = e[u];
          var i = n + Vf(o, u);
          l += Ri(o, t, r, i, a);
        }
      else if (((i = CC(e)), typeof i == "function"))
        for (e = i.call(e), u = 0; !(o = e.next()).done; )
          (o = o.value), (i = n + Vf(o, u++)), (l += Ri(o, t, r, i, a));
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
    function Di(e, t, r) {
      if (e == null) return e;
      var n = [],
        a = 0;
      return (
        Ri(e, n, "", "", function (o) {
          return t.call(r, o, a++);
        }),
        n
      );
    }
    function PC(e) {
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
    var Ye = { current: null },
      Ai = { transition: null },
      EC = {
        ReactCurrentDispatcher: Ye,
        ReactCurrentBatchConfig: Ai,
        ReactCurrentOwner: $f,
      };
    _.Children = {
      map: Di,
      forEach: function (e, t, r) {
        Di(
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
          Di(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          Di(e, function (t) {
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
    _.Component = Aa;
    _.Fragment = mC;
    _.Profiler = gC;
    _.PureComponent = jf;
    _.StrictMode = hC;
    _.Suspense = LC;
    _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = EC;
    _.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var n = oy({}, e.props),
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
          iy.call(t, i) &&
            !sy.hasOwnProperty(i) &&
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
        $$typeof: Ko,
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
          $$typeof: vC,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: yC, _context: e }),
        (e.Consumer = e)
      );
    };
    _.createElement = dy;
    _.createFactory = function (e) {
      var t = dy.bind(null, e);
      return (t.type = e), t;
    };
    _.createRef = function () {
      return { current: null };
    };
    _.forwardRef = function (e) {
      return { $$typeof: xC, render: e };
    };
    _.isValidElement = Gf;
    _.lazy = function (e) {
      return { $$typeof: SC, _payload: { _status: -1, _result: e }, _init: PC };
    };
    _.memo = function (e, t) {
      return { $$typeof: wC, type: e, compare: t === void 0 ? null : t };
    };
    _.startTransition = function (e) {
      var t = Ai.transition;
      Ai.transition = {};
      try {
        e();
      } finally {
        Ai.transition = t;
      }
    };
    _.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    _.useCallback = function (e, t) {
      return Ye.current.useCallback(e, t);
    };
    _.useContext = function (e) {
      return Ye.current.useContext(e);
    };
    _.useDebugValue = function () {};
    _.useDeferredValue = function (e) {
      return Ye.current.useDeferredValue(e);
    };
    _.useEffect = function (e, t) {
      return Ye.current.useEffect(e, t);
    };
    _.useId = function () {
      return Ye.current.useId();
    };
    _.useImperativeHandle = function (e, t, r) {
      return Ye.current.useImperativeHandle(e, t, r);
    };
    _.useInsertionEffect = function (e, t) {
      return Ye.current.useInsertionEffect(e, t);
    };
    _.useLayoutEffect = function (e, t) {
      return Ye.current.useLayoutEffect(e, t);
    };
    _.useMemo = function (e, t) {
      return Ye.current.useMemo(e, t);
    };
    _.useReducer = function (e, t, r) {
      return Ye.current.useReducer(e, t, r);
    };
    _.useRef = function (e) {
      return Ye.current.useRef(e);
    };
    _.useState = function (e) {
      return Ye.current.useState(e);
    };
    _.useSyncExternalStore = function (e, t, r) {
      return Ye.current.useSyncExternalStore(e, t, r);
    };
    _.useTransition = function () {
      return Ye.current.useTransition();
    };
    _.version = "18.2.0";
  });
  var Xt = Ze((wE, cy) => {
    "use strict";
    cy.exports = fy();
  });
  var Cy = Ze((z) => {
    "use strict";
    var Xo = Symbol.for("react.element"),
      TC = Symbol.for("react.portal"),
      MC = Symbol.for("react.fragment"),
      FC = Symbol.for("react.strict_mode"),
      DC = Symbol.for("react.profiler"),
      RC = Symbol.for("react.provider"),
      AC = Symbol.for("react.context"),
      _C = Symbol.for("react.forward_ref"),
      zC = Symbol.for("react.suspense"),
      NC = Symbol.for("react.memo"),
      BC = Symbol.for("react.lazy"),
      py = Symbol.iterator;
    function OC(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (py && e[py]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var gy = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      yy = Object.assign,
      vy = {};
    function _a(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = vy),
        (this.updater = r || gy);
    }
    _a.prototype.isReactComponent = {};
    _a.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    _a.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function xy() {}
    xy.prototype = _a.prototype;
    function Qf(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = vy),
        (this.updater = r || gy);
    }
    var Kf = (Qf.prototype = new xy());
    Kf.constructor = Qf;
    yy(Kf, _a.prototype);
    Kf.isPureReactComponent = !0;
    var my = Array.isArray,
      Ly = Object.prototype.hasOwnProperty,
      Xf = { current: null },
      wy = { key: !0, ref: !0, __self: !0, __source: !0 };
    function Sy(e, t, r) {
      var n,
        a = {},
        o = null,
        l = null;
      if (t != null)
        for (n in (t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t))
          Ly.call(t, n) && !wy.hasOwnProperty(n) && (a[n] = t[n]);
      var u = arguments.length - 2;
      if (u === 1) a.children = r;
      else if (1 < u) {
        for (var i = Array(u), f = 0; f < u; f++) i[f] = arguments[f + 2];
        a.children = i;
      }
      if (e && e.defaultProps)
        for (n in ((u = e.defaultProps), u)) a[n] === void 0 && (a[n] = u[n]);
      return {
        $$typeof: Xo,
        type: e,
        key: o,
        ref: l,
        props: a,
        _owner: Xf.current,
      };
    }
    function UC(e, t) {
      return {
        $$typeof: Xo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function Zf(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Xo;
    }
    function HC(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (r) {
          return t[r];
        })
      );
    }
    var hy = /\/+/g;
    function qf(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? HC("" + e.key)
        : t.toString(36);
    }
    function zi(e, t, r, n, a) {
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
              case Xo:
              case TC:
                l = !0;
            }
        }
      if (l)
        return (
          (l = e),
          (a = a(l)),
          (e = n === "" ? "." + qf(l, 0) : n),
          my(a)
            ? ((r = ""),
              e != null && (r = e.replace(hy, "$&/") + "/"),
              zi(a, t, r, "", function (f) {
                return f;
              }))
            : a != null &&
              (Zf(a) &&
                (a = UC(
                  a,
                  r +
                    (!a.key || (l && l.key === a.key)
                      ? ""
                      : ("" + a.key).replace(hy, "$&/") + "/") +
                    e
                )),
              t.push(a)),
          1
        );
      if (((l = 0), (n = n === "" ? "." : n + ":"), my(e)))
        for (var u = 0; u < e.length; u++) {
          o = e[u];
          var i = n + qf(o, u);
          l += zi(o, t, r, i, a);
        }
      else if (((i = OC(e)), typeof i == "function"))
        for (e = i.call(e), u = 0; !(o = e.next()).done; )
          (o = o.value), (i = n + qf(o, u++)), (l += zi(o, t, r, i, a));
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
    function _i(e, t, r) {
      if (e == null) return e;
      var n = [],
        a = 0;
      return (
        zi(e, n, "", "", function (o) {
          return t.call(r, o, a++);
        }),
        n
      );
    }
    function VC(e) {
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
    var Je = { current: null },
      Ni = { transition: null },
      jC = {
        ReactCurrentDispatcher: Je,
        ReactCurrentBatchConfig: Ni,
        ReactCurrentOwner: Xf,
      };
    z.Children = {
      map: _i,
      forEach: function (e, t, r) {
        _i(
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
          _i(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          _i(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!Zf(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    };
    z.Component = _a;
    z.Fragment = MC;
    z.Profiler = DC;
    z.PureComponent = Qf;
    z.StrictMode = FC;
    z.Suspense = zC;
    z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jC;
    z.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
        );
      var n = yy({}, e.props),
        a = e.key,
        o = e.ref,
        l = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((o = t.ref), (l = Xf.current)),
          t.key !== void 0 && (a = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var u = e.type.defaultProps;
        for (i in t)
          Ly.call(t, i) &&
            !wy.hasOwnProperty(i) &&
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
        $$typeof: Xo,
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
          $$typeof: AC,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: RC, _context: e }),
        (e.Consumer = e)
      );
    };
    z.createElement = Sy;
    z.createFactory = function (e) {
      var t = Sy.bind(null, e);
      return (t.type = e), t;
    };
    z.createRef = function () {
      return { current: null };
    };
    z.forwardRef = function (e) {
      return { $$typeof: _C, render: e };
    };
    z.isValidElement = Zf;
    z.lazy = function (e) {
      return { $$typeof: BC, _payload: { _status: -1, _result: e }, _init: VC };
    };
    z.memo = function (e, t) {
      return { $$typeof: NC, type: e, compare: t === void 0 ? null : t };
    };
    z.startTransition = function (e) {
      var t = Ni.transition;
      Ni.transition = {};
      try {
        e();
      } finally {
        Ni.transition = t;
      }
    };
    z.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    z.useCallback = function (e, t) {
      return Je.current.useCallback(e, t);
    };
    z.useContext = function (e) {
      return Je.current.useContext(e);
    };
    z.useDebugValue = function () {};
    z.useDeferredValue = function (e) {
      return Je.current.useDeferredValue(e);
    };
    z.useEffect = function (e, t) {
      return Je.current.useEffect(e, t);
    };
    z.useId = function () {
      return Je.current.useId();
    };
    z.useImperativeHandle = function (e, t, r) {
      return Je.current.useImperativeHandle(e, t, r);
    };
    z.useInsertionEffect = function (e, t) {
      return Je.current.useInsertionEffect(e, t);
    };
    z.useLayoutEffect = function (e, t) {
      return Je.current.useLayoutEffect(e, t);
    };
    z.useMemo = function (e, t) {
      return Je.current.useMemo(e, t);
    };
    z.useReducer = function (e, t, r) {
      return Je.current.useReducer(e, t, r);
    };
    z.useRef = function (e) {
      return Je.current.useRef(e);
    };
    z.useState = function (e) {
      return Je.current.useState(e);
    };
    z.useSyncExternalStore = function (e, t, r) {
      return Je.current.useSyncExternalStore(e, t, r);
    };
    z.useTransition = function () {
      return Je.current.useTransition();
    };
    z.version = "18.2.0";
  });
  var _t = Ze((CE, Iy) => {
    "use strict";
    Iy.exports = Cy();
  });
  var Ky = Ze((G) => {
    "use strict";
    function uc(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r; ) {
        var n = (r - 1) >>> 1,
          a = e[n];
        if (0 < Wi(a, t)) (e[n] = t), (e[r] = a), (r = n);
        else break e;
      }
    }
    function Zt(e) {
      return e.length === 0 ? null : e[0];
    }
    function Gi(e) {
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
          if (0 > Wi(u, r))
            i < a && 0 > Wi(f, u)
              ? ((e[n] = f), (e[i] = r), (n = i))
              : ((e[n] = u), (e[l] = r), (n = l));
          else if (i < a && 0 > Wi(f, r)) (e[n] = f), (e[i] = r), (n = i);
          else break e;
        }
      }
      return t;
    }
    function Wi(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((Uy = performance),
        (G.unstable_now = function () {
          return Uy.now();
        }))
      : ((ac = Date),
        (Hy = ac.now()),
        (G.unstable_now = function () {
          return ac.now() - Hy;
        }));
    var Uy,
      ac,
      Hy,
      hr = [],
      rn = [],
      wI = 1,
      zt = null,
      Oe = 3,
      qi = !1,
      Yn = !1,
      el = !1,
      Wy = typeof setTimeout == "function" ? setTimeout : null,
      $y = typeof clearTimeout == "function" ? clearTimeout : null,
      Vy = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ic(e) {
      for (var t = Zt(rn); t !== null; ) {
        if (t.callback === null) Gi(rn);
        else if (t.startTime <= e)
          Gi(rn), (t.sortIndex = t.expirationTime), uc(hr, t);
        else break;
        t = Zt(rn);
      }
    }
    function sc(e) {
      if (((el = !1), ic(e), !Yn))
        if (Zt(hr) !== null) (Yn = !0), fc(dc);
        else {
          var t = Zt(rn);
          t !== null && cc(sc, t.startTime - e);
        }
    }
    function dc(e, t) {
      (Yn = !1), el && ((el = !1), $y(tl), (tl = -1)), (qi = !0);
      var r = Oe;
      try {
        for (
          ic(t), zt = Zt(hr);
          zt !== null && (!(zt.expirationTime > t) || (e && !Qy()));

        ) {
          var n = zt.callback;
          if (typeof n == "function") {
            (zt.callback = null), (Oe = zt.priorityLevel);
            var a = n(zt.expirationTime <= t);
            (t = G.unstable_now()),
              typeof a == "function"
                ? (zt.callback = a)
                : zt === Zt(hr) && Gi(hr),
              ic(t);
          } else Gi(hr);
          zt = Zt(hr);
        }
        if (zt !== null) var o = !0;
        else {
          var l = Zt(rn);
          l !== null && cc(sc, l.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (zt = null), (Oe = r), (qi = !1);
      }
    }
    var Qi = !1,
      $i = null,
      tl = -1,
      Gy = 5,
      qy = -1;
    function Qy() {
      return !(G.unstable_now() - qy < Gy);
    }
    function oc() {
      if ($i !== null) {
        var e = G.unstable_now();
        qy = e;
        var t = !0;
        try {
          t = $i(!0, e);
        } finally {
          t ? bo() : ((Qi = !1), ($i = null));
        }
      } else Qi = !1;
    }
    var bo;
    typeof Vy == "function"
      ? (bo = function () {
          Vy(oc);
        })
      : typeof MessageChannel < "u"
      ? ((lc = new MessageChannel()),
        (jy = lc.port2),
        (lc.port1.onmessage = oc),
        (bo = function () {
          jy.postMessage(null);
        }))
      : (bo = function () {
          Wy(oc, 0);
        });
    var lc, jy;
    function fc(e) {
      ($i = e), Qi || ((Qi = !0), bo());
    }
    function cc(e, t) {
      tl = Wy(function () {
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
      Yn || qi || ((Yn = !0), fc(dc));
    };
    G.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Gy = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    G.unstable_getCurrentPriorityLevel = function () {
      return Oe;
    };
    G.unstable_getFirstCallbackNode = function () {
      return Zt(hr);
    };
    G.unstable_next = function (e) {
      switch (Oe) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = Oe;
      }
      var r = Oe;
      Oe = t;
      try {
        return e();
      } finally {
        Oe = r;
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
      var r = Oe;
      Oe = e;
      try {
        return t();
      } finally {
        Oe = r;
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
          id: wI++,
          callback: t,
          priorityLevel: e,
          startTime: r,
          expirationTime: a,
          sortIndex: -1,
        }),
        r > n
          ? ((e.sortIndex = r),
            uc(rn, e),
            Zt(hr) === null &&
              e === Zt(rn) &&
              (el ? ($y(tl), (tl = -1)) : (el = !0), cc(sc, r - n)))
          : ((e.sortIndex = a), uc(hr, e), Yn || qi || ((Yn = !0), fc(dc))),
        e
      );
    };
    G.unstable_shouldYield = Qy;
    G.unstable_wrapCallback = function (e) {
      var t = Oe;
      return function () {
        var r = Oe;
        Oe = t;
        try {
          return e.apply(this, arguments);
        } finally {
          Oe = r;
        }
      };
    };
  });
  var Zy = Ze(($E, Xy) => {
    "use strict";
    Xy.exports = Ky();
  });
  var rx = Ze((Pt) => {
    "use strict";
    var n0 = _t(),
      It = Zy();
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
    var a0 = new Set(),
      Cl = {};
    function da(e, t) {
      no(e, t), no(e + "Capture", t);
    }
    function no(e, t) {
      for (Cl[e] = t, e = 0; e < t.length; e++) a0.add(t[e]);
    }
    var Ur = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      zc = Object.prototype.hasOwnProperty,
      SI =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Yy = {},
      Jy = {};
    function CI(e) {
      return zc.call(Jy, e)
        ? !0
        : zc.call(Yy, e)
        ? !1
        : SI.test(e)
        ? (Jy[e] = !0)
        : ((Yy[e] = !0), !1);
    }
    function II(e, t, r, n) {
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
    function kI(e, t, r, n) {
      if (t === null || typeof t > "u" || II(e, t, r, n)) return !0;
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
    function rt(e, t, r, n, a, o, l) {
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
        Re[e] = new rt(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Re[t] = new rt(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      Re[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Re[e] = new rt(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Re[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Re[e] = new rt(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      Re[e] = new rt(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Re[e] = new rt(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      Re[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Ep = /[\-:]([a-z])/g;
    function Tp(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ep, Tp);
        Re[t] = new rt(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ep, Tp);
        Re[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ep, Tp);
      Re[t] = new rt(
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
      Re[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Re.xlinkHref = new rt(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Re[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Mp(e, t, r, n) {
      var a = Re.hasOwnProperty(t) ? Re[t] : null;
      (a !== null
        ? a.type !== 0
        : n ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (kI(t, r, a, n) && (r = null),
        n || a === null
          ? CI(t) &&
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
    var Wr = n0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Ki = Symbol.for("react.element"),
      Ua = Symbol.for("react.portal"),
      Ha = Symbol.for("react.fragment"),
      Fp = Symbol.for("react.strict_mode"),
      Nc = Symbol.for("react.profiler"),
      o0 = Symbol.for("react.provider"),
      l0 = Symbol.for("react.context"),
      Dp = Symbol.for("react.forward_ref"),
      Bc = Symbol.for("react.suspense"),
      Oc = Symbol.for("react.suspense_list"),
      Rp = Symbol.for("react.memo"),
      an = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var u0 = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var by = Symbol.iterator;
    function rl(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (by && e[by]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var oe = Object.assign,
      pc;
    function dl(e) {
      if (pc === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          pc = (t && t[1]) || "";
        }
      return (
        `
` +
        pc +
        e
      );
    }
    var mc = !1;
    function hc(e, t) {
      if (!e || mc) return "";
      mc = !0;
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
        (mc = !1), (Error.prepareStackTrace = r);
      }
      return (e = e ? e.displayName || e.name : "") ? dl(e) : "";
    }
    function PI(e) {
      switch (e.tag) {
        case 5:
          return dl(e.type);
        case 16:
          return dl("Lazy");
        case 13:
          return dl("Suspense");
        case 19:
          return dl("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = hc(e.type, !1)), e;
        case 11:
          return (e = hc(e.type.render, !1)), e;
        case 1:
          return (e = hc(e.type, !0)), e;
        default:
          return "";
      }
    }
    function Uc(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ha:
          return "Fragment";
        case Ua:
          return "Portal";
        case Nc:
          return "Profiler";
        case Fp:
          return "StrictMode";
        case Bc:
          return "Suspense";
        case Oc:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l0:
            return (e.displayName || "Context") + ".Consumer";
          case o0:
            return (e._context.displayName || "Context") + ".Provider";
          case Dp:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case Rp:
            return (
              (t = e.displayName || null), t !== null ? t : Uc(e.type) || "Memo"
            );
          case an:
            (t = e._payload), (e = e._init);
            try {
              return Uc(e(t));
            } catch {}
        }
      return null;
    }
    function EI(e) {
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
          return Uc(t);
        case 8:
          return t === Fp ? "StrictMode" : "Mode";
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
    function xn(e) {
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
    function i0(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function TI(e) {
      var t = i0(e) ? "checked" : "value",
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
    function Xi(e) {
      e._valueTracker || (e._valueTracker = TI(e));
    }
    function s0(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var r = t.getValue(),
        n = "";
      return (
        e && (n = i0(e) ? (e.checked ? "true" : "false") : e.value),
        (e = n),
        e !== r ? (t.setValue(e), !0) : !1
      );
    }
    function Cs(e) {
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
    function Hc(e, t) {
      var r = t.checked;
      return oe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked,
      });
    }
    function ev(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
      (r = xn(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        });
    }
    function d0(e, t) {
      (t = t.checked), t != null && Mp(e, "checked", t, !1);
    }
    function Vc(e, t) {
      d0(e, t);
      var r = xn(t.value),
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
        ? jc(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && jc(e, t.type, xn(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function tv(e, t, r) {
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
    function jc(e, t, r) {
      (t !== "number" || Cs(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    var fl = Array.isArray;
    function Ya(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
        for (r = 0; r < e.length; r++)
          (a = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== a && (e[r].selected = a),
            a && n && (e[r].defaultSelected = !0);
      } else {
        for (r = "" + xn(r), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === r) {
            (e[a].selected = !0), n && (e[a].defaultSelected = !0);
            return;
          }
          t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Wc(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
      return oe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function rv(e, t) {
      var r = t.value;
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(k(92));
          if (fl(r)) {
            if (1 < r.length) throw Error(k(93));
            r = r[0];
          }
          t = r;
        }
        t == null && (t = ""), (r = t);
      }
      e._wrapperState = { initialValue: xn(r) };
    }
    function f0(e, t) {
      var r = xn(t.value),
        n = xn(t.defaultValue);
      r != null &&
        ((r = "" + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = "" + n);
    }
    function nv(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function c0(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function $c(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? c0(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Zi,
      p0 = (function (e) {
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
            Zi = Zi || document.createElement("div"),
              Zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = Zi.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Il(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var ml = {
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
      MI = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ml).forEach(function (e) {
      MI.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ml[t] = ml[e]);
      });
    });
    function m0(e, t, r) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : r ||
          typeof t != "number" ||
          t === 0 ||
          (ml.hasOwnProperty(e) && ml[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function h0(e, t) {
      e = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf("--") === 0,
            a = m0(r, t[r], n);
          r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, a) : (e[r] = a);
        }
    }
    var FI = oe(
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
    function Gc(e, t) {
      if (t) {
        if (FI[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    function qc(e, t) {
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
    var Qc = null;
    function Ap(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Kc = null,
      Ja = null,
      ba = null;
    function av(e) {
      if ((e = jl(e))) {
        if (typeof Kc != "function") throw Error(k(280));
        var t = e.stateNode;
        t && ((t = Ys(t)), Kc(e.stateNode, e.type, t));
      }
    }
    function g0(e) {
      Ja ? (ba ? ba.push(e) : (ba = [e])) : (Ja = e);
    }
    function y0() {
      if (Ja) {
        var e = Ja,
          t = ba;
        if (((ba = Ja = null), av(e), t))
          for (e = 0; e < t.length; e++) av(t[e]);
      }
    }
    function v0(e, t) {
      return e(t);
    }
    function x0() {}
    var gc = !1;
    function L0(e, t, r) {
      if (gc) return e(t, r);
      gc = !0;
      try {
        return v0(e, t, r);
      } finally {
        (gc = !1), (Ja !== null || ba !== null) && (x0(), y0());
      }
    }
    function kl(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var n = Ys(r);
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
    var Xc = !1;
    if (Ur)
      try {
        (Ba = {}),
          Object.defineProperty(Ba, "passive", {
            get: function () {
              Xc = !0;
            },
          }),
          window.addEventListener("test", Ba, Ba),
          window.removeEventListener("test", Ba, Ba);
      } catch {
        Xc = !1;
      }
    var Ba;
    function DI(e, t, r, n, a, o, l, u, i) {
      var f = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, f);
      } catch (p) {
        this.onError(p);
      }
    }
    var hl = !1,
      Is = null,
      ks = !1,
      Zc = null,
      RI = {
        onError: function (e) {
          (hl = !0), (Is = e);
        },
      };
    function AI(e, t, r, n, a, o, l, u, i) {
      (hl = !1), (Is = null), DI.apply(RI, arguments);
    }
    function _I(e, t, r, n, a, o, l, u, i) {
      if ((AI.apply(this, arguments), hl)) {
        if (hl) {
          var f = Is;
          (hl = !1), (Is = null);
        } else throw Error(k(198));
        ks || ((ks = !0), (Zc = f));
      }
    }
    function fa(e) {
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
    function w0(e) {
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
    function ov(e) {
      if (fa(e) !== e) throw Error(k(188));
    }
    function zI(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = fa(e)), t === null)) throw Error(k(188));
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
            if (o === r) return ov(a), e;
            if (o === n) return ov(a), t;
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
    function S0(e) {
      return (e = zI(e)), e !== null ? C0(e) : null;
    }
    function C0(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = C0(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var I0 = It.unstable_scheduleCallback,
      lv = It.unstable_cancelCallback,
      NI = It.unstable_shouldYield,
      BI = It.unstable_requestPaint,
      me = It.unstable_now,
      OI = It.unstable_getCurrentPriorityLevel,
      _p = It.unstable_ImmediatePriority,
      k0 = It.unstable_UserBlockingPriority,
      Ps = It.unstable_NormalPriority,
      UI = It.unstable_LowPriority,
      P0 = It.unstable_IdlePriority,
      Qs = null,
      xr = null;
    function HI(e) {
      if (xr && typeof xr.onCommitFiberRoot == "function")
        try {
          xr.onCommitFiberRoot(Qs, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var tr = Math.clz32 ? Math.clz32 : WI,
      VI = Math.log,
      jI = Math.LN2;
    function WI(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((VI(e) / jI) | 0)) | 0;
    }
    var Yi = 64,
      Ji = 4194304;
    function cl(e) {
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
    function Es(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var n = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = r & 268435455;
      if (l !== 0) {
        var u = l & ~a;
        u !== 0 ? (n = cl(u)) : ((o &= l), o !== 0 && (n = cl(o)));
      } else (l = r & ~a), l !== 0 ? (n = cl(l)) : o !== 0 && (n = cl(o));
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
          (r = 31 - tr(t)), (a = 1 << r), (n |= e[r]), (t &= ~a);
      return n;
    }
    function $I(e, t) {
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
    function GI(e, t) {
      for (
        var r = e.suspendedLanes,
          n = e.pingedLanes,
          a = e.expirationTimes,
          o = e.pendingLanes;
        0 < o;

      ) {
        var l = 31 - tr(o),
          u = 1 << l,
          i = a[l];
        i === -1
          ? (!(u & r) || u & n) && (a[l] = $I(u, t))
          : i <= t && (e.expiredLanes |= u),
          (o &= ~u);
      }
    }
    function Yc(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function E0() {
      var e = Yi;
      return (Yi <<= 1), !(Yi & 4194240) && (Yi = 64), e;
    }
    function yc(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function Hl(e, t, r) {
      (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - tr(t)),
        (e[t] = r);
    }
    function qI(e, t) {
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
        var a = 31 - tr(r),
          o = 1 << a;
        (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~o);
      }
    }
    function zp(e, t) {
      var r = (e.entangledLanes |= t);
      for (e = e.entanglements; r; ) {
        var n = 31 - tr(r),
          a = 1 << n;
        (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
      }
    }
    var j = 0;
    function T0(e) {
      return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var M0,
      Np,
      F0,
      D0,
      R0,
      Jc = !1,
      bi = [],
      fn = null,
      cn = null,
      pn = null,
      Pl = new Map(),
      El = new Map(),
      ln = [],
      QI =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function uv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          fn = null;
          break;
        case "dragenter":
        case "dragleave":
          cn = null;
          break;
        case "mouseover":
        case "mouseout":
          pn = null;
          break;
        case "pointerover":
        case "pointerout":
          Pl.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          El.delete(t.pointerId);
      }
    }
    function nl(e, t, r, n, a, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = {
            blockedOn: t,
            domEventName: r,
            eventSystemFlags: n,
            nativeEvent: o,
            targetContainers: [a],
          }),
          t !== null && ((t = jl(t)), t !== null && Np(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          a !== null && t.indexOf(a) === -1 && t.push(a),
          e);
    }
    function KI(e, t, r, n, a) {
      switch (t) {
        case "focusin":
          return (fn = nl(fn, e, t, r, n, a)), !0;
        case "dragenter":
          return (cn = nl(cn, e, t, r, n, a)), !0;
        case "mouseover":
          return (pn = nl(pn, e, t, r, n, a)), !0;
        case "pointerover":
          var o = a.pointerId;
          return Pl.set(o, nl(Pl.get(o) || null, e, t, r, n, a)), !0;
        case "gotpointercapture":
          return (
            (o = a.pointerId),
            El.set(o, nl(El.get(o) || null, e, t, r, n, a)),
            !0
          );
      }
      return !1;
    }
    function A0(e) {
      var t = ea(e.target);
      if (t !== null) {
        var r = fa(t);
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = w0(r)), t !== null)) {
              (e.blockedOn = t),
                R0(e.priority, function () {
                  F0(r);
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
    function ps(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = bc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var n = new r.constructor(r.type, r);
          (Qc = n), r.target.dispatchEvent(n), (Qc = null);
        } else return (t = jl(r)), t !== null && Np(t), (e.blockedOn = r), !1;
        t.shift();
      }
      return !0;
    }
    function iv(e, t, r) {
      ps(e) && r.delete(t);
    }
    function XI() {
      (Jc = !1),
        fn !== null && ps(fn) && (fn = null),
        cn !== null && ps(cn) && (cn = null),
        pn !== null && ps(pn) && (pn = null),
        Pl.forEach(iv),
        El.forEach(iv);
    }
    function al(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Jc ||
          ((Jc = !0),
          It.unstable_scheduleCallback(It.unstable_NormalPriority, XI)));
    }
    function Tl(e) {
      function t(a) {
        return al(a, e);
      }
      if (0 < bi.length) {
        al(bi[0], e);
        for (var r = 1; r < bi.length; r++) {
          var n = bi[r];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      for (
        fn !== null && al(fn, e),
          cn !== null && al(cn, e),
          pn !== null && al(pn, e),
          Pl.forEach(t),
          El.forEach(t),
          r = 0;
        r < ln.length;
        r++
      )
        (n = ln[r]), n.blockedOn === e && (n.blockedOn = null);
      for (; 0 < ln.length && ((r = ln[0]), r.blockedOn === null); )
        A0(r), r.blockedOn === null && ln.shift();
    }
    var eo = Wr.ReactCurrentBatchConfig,
      Ts = !0;
    function ZI(e, t, r, n) {
      var a = j,
        o = eo.transition;
      eo.transition = null;
      try {
        (j = 1), Bp(e, t, r, n);
      } finally {
        (j = a), (eo.transition = o);
      }
    }
    function YI(e, t, r, n) {
      var a = j,
        o = eo.transition;
      eo.transition = null;
      try {
        (j = 4), Bp(e, t, r, n);
      } finally {
        (j = a), (eo.transition = o);
      }
    }
    function Bp(e, t, r, n) {
      if (Ts) {
        var a = bc(e, t, r, n);
        if (a === null) Ic(e, t, n, Ms, r), uv(e, n);
        else if (KI(a, e, t, r, n)) n.stopPropagation();
        else if ((uv(e, n), t & 4 && -1 < QI.indexOf(e))) {
          for (; a !== null; ) {
            var o = jl(a);
            if (
              (o !== null && M0(o),
              (o = bc(e, t, r, n)),
              o === null && Ic(e, t, n, Ms, r),
              o === a)
            )
              break;
            a = o;
          }
          a !== null && n.stopPropagation();
        } else Ic(e, t, n, null, r);
      }
    }
    var Ms = null;
    function bc(e, t, r, n) {
      if (((Ms = null), (e = Ap(n)), (e = ea(e)), e !== null))
        if (((t = fa(e)), t === null)) e = null;
        else if (((r = t.tag), r === 13)) {
          if (((e = w0(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return (Ms = e), null;
    }
    function _0(e) {
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
          switch (OI()) {
            case _p:
              return 1;
            case k0:
              return 4;
            case Ps:
            case UI:
              return 16;
            case P0:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var sn = null,
      Op = null,
      ms = null;
    function z0() {
      if (ms) return ms;
      var e,
        t = Op,
        r = t.length,
        n,
        a = "value" in sn ? sn.value : sn.textContent,
        o = a.length;
      for (e = 0; e < r && t[e] === a[e]; e++);
      var l = r - e;
      for (n = 1; n <= l && t[r - n] === a[o - n]; n++);
      return (ms = a.slice(e, 1 < n ? 1 - n : void 0));
    }
    function hs(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function es() {
      return !0;
    }
    function sv() {
      return !1;
    }
    function kt(e) {
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
            ? es
            : sv),
          (this.isPropagationStopped = sv),
          this
        );
      }
      return (
        oe(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
              (r.preventDefault
                ? r.preventDefault()
                : typeof r.returnValue != "unknown" && (r.returnValue = !1),
              (this.isDefaultPrevented = es));
          },
          stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
              (r.stopPropagation
                ? r.stopPropagation()
                : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
              (this.isPropagationStopped = es));
          },
          persist: function () {},
          isPersistent: es,
        }),
        t
      );
    }
    var fo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Up = kt(fo),
      Vl = oe({}, fo, { view: 0, detail: 0 }),
      JI = kt(Vl),
      vc,
      xc,
      ol,
      Ks = oe({}, Vl, {
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
        getModifierState: Hp,
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
            : (e !== ol &&
                (ol && e.type === "mousemove"
                  ? ((vc = e.screenX - ol.screenX),
                    (xc = e.screenY - ol.screenY))
                  : (xc = vc = 0),
                (ol = e)),
              vc);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : xc;
        },
      }),
      dv = kt(Ks),
      bI = oe({}, Ks, { dataTransfer: 0 }),
      ek = kt(bI),
      tk = oe({}, Vl, { relatedTarget: 0 }),
      Lc = kt(tk),
      rk = oe({}, fo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      nk = kt(rk),
      ak = oe({}, fo, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      ok = kt(ak),
      lk = oe({}, fo, { data: 0 }),
      fv = kt(lk),
      uk = {
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
      ik = {
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
      sk = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function dk(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = sk[e])
        ? !!t[e]
        : !1;
    }
    function Hp() {
      return dk;
    }
    var fk = oe({}, Vl, {
        key: function (e) {
          if (e.key) {
            var t = uk[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = hs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? ik[e.keyCode] || "Unidentified"
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
        getModifierState: Hp,
        charCode: function (e) {
          return e.type === "keypress" ? hs(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? hs(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
        },
      }),
      ck = kt(fk),
      pk = oe({}, Ks, {
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
      cv = kt(pk),
      mk = oe({}, Vl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Hp,
      }),
      hk = kt(mk),
      gk = oe({}, fo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      yk = kt(gk),
      vk = oe({}, Ks, {
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
      xk = kt(vk),
      Lk = [9, 13, 27, 32],
      Vp = Ur && "CompositionEvent" in window,
      gl = null;
    Ur && "documentMode" in document && (gl = document.documentMode);
    var wk = Ur && "TextEvent" in window && !gl,
      N0 = Ur && (!Vp || (gl && 8 < gl && 11 >= gl)),
      pv = " ",
      mv = !1;
    function B0(e, t) {
      switch (e) {
        case "keyup":
          return Lk.indexOf(t.keyCode) !== -1;
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
    function O0(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var Va = !1;
    function Sk(e, t) {
      switch (e) {
        case "compositionend":
          return O0(t);
        case "keypress":
          return t.which !== 32 ? null : ((mv = !0), pv);
        case "textInput":
          return (e = t.data), e === pv && mv ? null : e;
        default:
          return null;
      }
    }
    function Ck(e, t) {
      if (Va)
        return e === "compositionend" || (!Vp && B0(e, t))
          ? ((e = z0()), (ms = Op = sn = null), (Va = !1), e)
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
          return N0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Ik = {
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
    function hv(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ik[e.type] : t === "textarea";
    }
    function U0(e, t, r, n) {
      g0(n),
        (t = Fs(t, "onChange")),
        0 < t.length &&
          ((r = new Up("onChange", "change", null, r, n)),
          e.push({ event: r, listeners: t }));
    }
    var yl = null,
      Ml = null;
    function kk(e) {
      Z0(e, 0);
    }
    function Xs(e) {
      var t = $a(e);
      if (s0(t)) return e;
    }
    function Pk(e, t) {
      if (e === "change") return t;
    }
    var H0 = !1;
    Ur &&
      (Ur
        ? ((rs = "oninput" in document),
          rs ||
            ((wc = document.createElement("div")),
            wc.setAttribute("oninput", "return;"),
            (rs = typeof wc.oninput == "function")),
          (ts = rs))
        : (ts = !1),
      (H0 = ts && (!document.documentMode || 9 < document.documentMode)));
    var ts, rs, wc;
    function gv() {
      yl && (yl.detachEvent("onpropertychange", V0), (Ml = yl = null));
    }
    function V0(e) {
      if (e.propertyName === "value" && Xs(Ml)) {
        var t = [];
        U0(t, Ml, e, Ap(e)), L0(kk, t);
      }
    }
    function Ek(e, t, r) {
      e === "focusin"
        ? (gv(), (yl = t), (Ml = r), yl.attachEvent("onpropertychange", V0))
        : e === "focusout" && gv();
    }
    function Tk(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Xs(Ml);
    }
    function Mk(e, t) {
      if (e === "click") return Xs(t);
    }
    function Fk(e, t) {
      if (e === "input" || e === "change") return Xs(t);
    }
    function Dk(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var nr = typeof Object.is == "function" ? Object.is : Dk;
    function Fl(e, t) {
      if (nr(e, t)) return !0;
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
        if (!zc.call(t, a) || !nr(e[a], t[a])) return !1;
      }
      return !0;
    }
    function yv(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function vv(e, t) {
      var r = yv(e);
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
        r = yv(r);
      }
    }
    function j0(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? j0(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function W0() {
      for (var e = window, t = Cs(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == "string";
        } catch {
          r = !1;
        }
        if (r) e = t.contentWindow;
        else break;
        t = Cs(e.document);
      }
      return t;
    }
    function jp(e) {
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
    function Rk(e) {
      var t = W0(),
        r = e.focusedElem,
        n = e.selectionRange;
      if (
        t !== r &&
        r &&
        r.ownerDocument &&
        j0(r.ownerDocument.documentElement, r)
      ) {
        if (n !== null && jp(r)) {
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
              (a = vv(r, o));
            var l = vv(r, n);
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
    var Ak = Ur && "documentMode" in document && 11 >= document.documentMode,
      ja = null,
      ep = null,
      vl = null,
      tp = !1;
    function xv(e, t, r) {
      var n =
        r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      tp ||
        ja == null ||
        ja !== Cs(n) ||
        ((n = ja),
        "selectionStart" in n && jp(n)
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
        (vl && Fl(vl, n)) ||
          ((vl = n),
          (n = Fs(ep, "onSelect")),
          0 < n.length &&
            ((t = new Up("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: n }),
            (t.target = ja))));
    }
    function ns(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var Wa = {
        animationend: ns("Animation", "AnimationEnd"),
        animationiteration: ns("Animation", "AnimationIteration"),
        animationstart: ns("Animation", "AnimationStart"),
        transitionend: ns("Transition", "TransitionEnd"),
      },
      Sc = {},
      $0 = {};
    Ur &&
      (($0 = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Wa.animationend.animation,
        delete Wa.animationiteration.animation,
        delete Wa.animationstart.animation),
      "TransitionEvent" in window || delete Wa.transitionend.transition);
    function Zs(e) {
      if (Sc[e]) return Sc[e];
      if (!Wa[e]) return e;
      var t = Wa[e],
        r;
      for (r in t) if (t.hasOwnProperty(r) && r in $0) return (Sc[e] = t[r]);
      return e;
    }
    var G0 = Zs("animationend"),
      q0 = Zs("animationiteration"),
      Q0 = Zs("animationstart"),
      K0 = Zs("transitionend"),
      X0 = new Map(),
      Lv =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function wn(e, t) {
      X0.set(e, t), da(t, [e]);
    }
    for (as = 0; as < Lv.length; as++)
      (os = Lv[as]),
        (wv = os.toLowerCase()),
        (Sv = os[0].toUpperCase() + os.slice(1)),
        wn(wv, "on" + Sv);
    var os, wv, Sv, as;
    wn(G0, "onAnimationEnd");
    wn(q0, "onAnimationIteration");
    wn(Q0, "onAnimationStart");
    wn("dblclick", "onDoubleClick");
    wn("focusin", "onFocus");
    wn("focusout", "onBlur");
    wn(K0, "onTransitionEnd");
    no("onMouseEnter", ["mouseout", "mouseover"]);
    no("onMouseLeave", ["mouseout", "mouseover"]);
    no("onPointerEnter", ["pointerout", "pointerover"]);
    no("onPointerLeave", ["pointerout", "pointerover"]);
    da(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    );
    da(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    da(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    da(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    da(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var pl =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      _k = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(pl)
      );
    function Cv(e, t, r) {
      var n = e.type || "unknown-event";
      (e.currentTarget = r), _I(n, t, void 0, e), (e.currentTarget = null);
    }
    function Z0(e, t) {
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
              Cv(a, u, f), (o = i);
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
              Cv(a, u, f), (o = i);
            }
        }
      }
      if (ks) throw ((e = Zc), (ks = !1), (Zc = null), e);
    }
    function Y(e, t) {
      var r = t[lp];
      r === void 0 && (r = t[lp] = new Set());
      var n = e + "__bubble";
      r.has(n) || (Y0(t, e, 2, !1), r.add(n));
    }
    function Cc(e, t, r) {
      var n = 0;
      t && (n |= 4), Y0(r, e, n, t);
    }
    var ls = "_reactListening" + Math.random().toString(36).slice(2);
    function Dl(e) {
      if (!e[ls]) {
        (e[ls] = !0),
          a0.forEach(function (r) {
            r !== "selectionchange" &&
              (_k.has(r) || Cc(r, !1, e), Cc(r, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ls] || ((t[ls] = !0), Cc("selectionchange", !1, t));
      }
    }
    function Y0(e, t, r, n) {
      switch (_0(t)) {
        case 1:
          var a = ZI;
          break;
        case 4:
          a = YI;
          break;
        default:
          a = Bp;
      }
      (r = a.bind(null, t, r, e)),
        (a = void 0),
        !Xc ||
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
    function Ic(e, t, r, n, a) {
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
              if (((l = ea(u)), l === null)) return;
              if (((i = l.tag), i === 5 || i === 6)) {
                n = o = l;
                continue e;
              }
              u = u.parentNode;
            }
          }
          n = n.return;
        }
      L0(function () {
        var f = o,
          p = Ap(r),
          h = [];
        e: {
          var m = X0.get(e);
          if (m !== void 0) {
            var y = Up,
              x = e;
            switch (e) {
              case "keypress":
                if (hs(r) === 0) break e;
              case "keydown":
              case "keyup":
                y = ck;
                break;
              case "focusin":
                (x = "focus"), (y = Lc);
                break;
              case "focusout":
                (x = "blur"), (y = Lc);
                break;
              case "beforeblur":
              case "afterblur":
                y = Lc;
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
                y = dv;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = ek;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = hk;
                break;
              case G0:
              case q0:
              case Q0:
                y = nk;
                break;
              case K0:
                y = yk;
                break;
              case "scroll":
                y = JI;
                break;
              case "wheel":
                y = xk;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = ok;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = cv;
            }
            var v = (t & 4) !== 0,
              T = !v && e === "scroll",
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
                    ((g = kl(s, d)), g != null && v.push(Rl(s, g, c)))),
                T)
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
                r !== Qc &&
                (x = r.relatedTarget || r.fromElement) &&
                (ea(x) || x[Hr]))
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
                  (x = x ? ea(x) : null),
                  x !== null &&
                    ((T = fa(x)), x !== T || (x.tag !== 5 && x.tag !== 6)) &&
                    (x = null))
                : ((y = null), (x = f)),
              y !== x)
            ) {
              if (
                ((v = dv),
                (g = "onMouseLeave"),
                (d = "onMouseEnter"),
                (s = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((v = cv),
                  (g = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (s = "pointer")),
                (T = y == null ? m : $a(y)),
                (c = x == null ? m : $a(x)),
                (m = new v(g, s + "leave", y, r, p)),
                (m.target = T),
                (m.relatedTarget = c),
                (g = null),
                ea(p) === f &&
                  ((v = new v(d, s + "enter", x, r, p)),
                  (v.target = c),
                  (v.relatedTarget = T),
                  (g = v)),
                (T = g),
                y && x)
              )
                t: {
                  for (v = y, d = x, s = 0, c = v; c; c = Oa(c)) s++;
                  for (c = 0, g = d; g; g = Oa(g)) c++;
                  for (; 0 < s - c; ) (v = Oa(v)), s--;
                  for (; 0 < c - s; ) (d = Oa(d)), c--;
                  for (; s--; ) {
                    if (v === d || (d !== null && v === d.alternate)) break t;
                    (v = Oa(v)), (d = Oa(d));
                  }
                  v = null;
                }
              else v = null;
              y !== null && Iv(h, m, y, v, !1),
                x !== null && T !== null && Iv(h, T, x, v, !0);
            }
          }
          e: {
            if (
              ((m = f ? $a(f) : window),
              (y = m.nodeName && m.nodeName.toLowerCase()),
              y === "select" || (y === "input" && m.type === "file"))
            )
              var L = Pk;
            else if (hv(m))
              if (H0) L = Fk;
              else {
                L = Tk;
                var C = Ek;
              }
            else
              (y = m.nodeName) &&
                y.toLowerCase() === "input" &&
                (m.type === "checkbox" || m.type === "radio") &&
                (L = Mk);
            if (L && (L = L(e, f))) {
              U0(h, L, r, p);
              break e;
            }
            C && C(e, m, f),
              e === "focusout" &&
                (C = m._wrapperState) &&
                C.controlled &&
                m.type === "number" &&
                jc(m, "number", m.value);
          }
          switch (((C = f ? $a(f) : window), e)) {
            case "focusin":
              (hv(C) || C.contentEditable === "true") &&
                ((ja = C), (ep = f), (vl = null));
              break;
            case "focusout":
              vl = ep = ja = null;
              break;
            case "mousedown":
              tp = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (tp = !1), xv(h, r, p);
              break;
            case "selectionchange":
              if (Ak) break;
            case "keydown":
            case "keyup":
              xv(h, r, p);
          }
          var S;
          if (Vp)
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
            Va
              ? B0(e, r) && (w = "onCompositionEnd")
              : e === "keydown" &&
                r.keyCode === 229 &&
                (w = "onCompositionStart");
          w &&
            (N0 &&
              r.locale !== "ko" &&
              (Va || w !== "onCompositionStart"
                ? w === "onCompositionEnd" && Va && (S = z0())
                : ((sn = p),
                  (Op = "value" in sn ? sn.value : sn.textContent),
                  (Va = !0))),
            (C = Fs(f, w)),
            0 < C.length &&
              ((w = new fv(w, e, null, r, p)),
              h.push({ event: w, listeners: C }),
              S ? (w.data = S) : ((S = O0(r)), S !== null && (w.data = S)))),
            (S = wk ? Sk(e, r) : Ck(e, r)) &&
              ((f = Fs(f, "onBeforeInput")),
              0 < f.length &&
                ((p = new fv("onBeforeInput", "beforeinput", null, r, p)),
                h.push({ event: p, listeners: f }),
                (p.data = S)));
        }
        Z0(h, t);
      });
    }
    function Rl(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function Fs(e, t) {
      for (var r = t + "Capture", n = []; e !== null; ) {
        var a = e,
          o = a.stateNode;
        a.tag === 5 &&
          o !== null &&
          ((a = o),
          (o = kl(e, r)),
          o != null && n.unshift(Rl(e, o, a)),
          (o = kl(e, t)),
          o != null && n.push(Rl(e, o, a))),
          (e = e.return);
      }
      return n;
    }
    function Oa(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Iv(e, t, r, n, a) {
      for (var o = t._reactName, l = []; r !== null && r !== n; ) {
        var u = r,
          i = u.alternate,
          f = u.stateNode;
        if (i !== null && i === n) break;
        u.tag === 5 &&
          f !== null &&
          ((u = f),
          a
            ? ((i = kl(r, o)), i != null && l.unshift(Rl(r, i, u)))
            : a || ((i = kl(r, o)), i != null && l.push(Rl(r, i, u)))),
          (r = r.return);
      }
      l.length !== 0 && e.push({ event: t, listeners: l });
    }
    var zk = /\r\n?/g,
      Nk = /\u0000|\uFFFD/g;
    function kv(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          zk,
          `
`
        )
        .replace(Nk, "");
    }
    function us(e, t, r) {
      if (((t = kv(t)), kv(e) !== t && r)) throw Error(k(425));
    }
    function Ds() {}
    var rp = null,
      np = null;
    function ap(e, t) {
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
    var op = typeof setTimeout == "function" ? setTimeout : void 0,
      Bk = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Pv = typeof Promise == "function" ? Promise : void 0,
      Ok =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Pv < "u"
          ? function (e) {
              return Pv.resolve(null).then(e).catch(Uk);
            }
          : op;
    function Uk(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function kc(e, t) {
      var r = t,
        n = 0;
      do {
        var a = r.nextSibling;
        if ((e.removeChild(r), a && a.nodeType === 8))
          if (((r = a.data), r === "/$")) {
            if (n === 0) {
              e.removeChild(a), Tl(t);
              return;
            }
            n--;
          } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
        r = a;
      } while (r);
      Tl(t);
    }
    function mn(e) {
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
    function Ev(e) {
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
    var co = Math.random().toString(36).slice(2),
      vr = "__reactFiber$" + co,
      Al = "__reactProps$" + co,
      Hr = "__reactContainer$" + co,
      lp = "__reactEvents$" + co,
      Hk = "__reactListeners$" + co,
      Vk = "__reactHandles$" + co;
    function ea(e) {
      var t = e[vr];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[Hr] || r[vr])) {
          if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
          )
            for (e = Ev(e); e !== null; ) {
              if ((r = e[vr])) return r;
              e = Ev(e);
            }
          return t;
        }
        (e = r), (r = e.parentNode);
      }
      return null;
    }
    function jl(e) {
      return (
        (e = e[vr] || e[Hr]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function $a(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(k(33));
    }
    function Ys(e) {
      return e[Al] || null;
    }
    var up = [],
      Ga = -1;
    function Sn(e) {
      return { current: e };
    }
    function J(e) {
      0 > Ga || ((e.current = up[Ga]), (up[Ga] = null), Ga--);
    }
    function q(e, t) {
      Ga++, (up[Ga] = e.current), (e.current = t);
    }
    var Ln = {},
      je = Sn(Ln),
      ft = Sn(!1),
      oa = Ln;
    function ao(e, t) {
      var r = e.type.contextTypes;
      if (!r) return Ln;
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
    function ct(e) {
      return (e = e.childContextTypes), e != null;
    }
    function Rs() {
      J(ft), J(je);
    }
    function Tv(e, t, r) {
      if (je.current !== Ln) throw Error(k(168));
      q(je, t), q(ft, r);
    }
    function J0(e, t, r) {
      var n = e.stateNode;
      if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
        return r;
      n = n.getChildContext();
      for (var a in n)
        if (!(a in t)) throw Error(k(108, EI(e) || "Unknown", a));
      return oe({}, r, n);
    }
    function As(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Ln),
        (oa = je.current),
        q(je, e),
        q(ft, ft.current),
        !0
      );
    }
    function Mv(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(k(169));
      r
        ? ((e = J0(e, t, oa)),
          (n.__reactInternalMemoizedMergedChildContext = e),
          J(ft),
          J(je),
          q(je, e))
        : J(ft),
        q(ft, r);
    }
    var zr = null,
      Js = !1,
      Pc = !1;
    function b0(e) {
      zr === null ? (zr = [e]) : zr.push(e);
    }
    function jk(e) {
      (Js = !0), b0(e);
    }
    function Cn() {
      if (!Pc && zr !== null) {
        Pc = !0;
        var e = 0,
          t = j;
        try {
          var r = zr;
          for (j = 1; e < r.length; e++) {
            var n = r[e];
            do n = n(!0);
            while (n !== null);
          }
          (zr = null), (Js = !1);
        } catch (a) {
          throw (zr !== null && (zr = zr.slice(e + 1)), I0(_p, Cn), a);
        } finally {
          (j = t), (Pc = !1);
        }
      }
      return null;
    }
    var qa = [],
      Qa = 0,
      _s = null,
      zs = 0,
      Nt = [],
      Bt = 0,
      la = null,
      Nr = 1,
      Br = "";
    function Jn(e, t) {
      (qa[Qa++] = zs), (qa[Qa++] = _s), (_s = e), (zs = t);
    }
    function e1(e, t, r) {
      (Nt[Bt++] = Nr), (Nt[Bt++] = Br), (Nt[Bt++] = la), (la = e);
      var n = Nr;
      e = Br;
      var a = 32 - tr(n) - 1;
      (n &= ~(1 << a)), (r += 1);
      var o = 32 - tr(t) + a;
      if (30 < o) {
        var l = a - (a % 5);
        (o = (n & ((1 << l) - 1)).toString(32)),
          (n >>= l),
          (a -= l),
          (Nr = (1 << (32 - tr(t) + a)) | (r << a) | n),
          (Br = o + e);
      } else (Nr = (1 << o) | (r << a) | n), (Br = e);
    }
    function Wp(e) {
      e.return !== null && (Jn(e, 1), e1(e, 1, 0));
    }
    function $p(e) {
      for (; e === _s; )
        (_s = qa[--Qa]), (qa[Qa] = null), (zs = qa[--Qa]), (qa[Qa] = null);
      for (; e === la; )
        (la = Nt[--Bt]),
          (Nt[Bt] = null),
          (Br = Nt[--Bt]),
          (Nt[Bt] = null),
          (Nr = Nt[--Bt]),
          (Nt[Bt] = null);
    }
    var Ct = null,
      St = null,
      te = !1,
      er = null;
    function t1(e, t) {
      var r = Ot(5, null, null, 0);
      (r.elementType = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
    }
    function Fv(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            (t =
              t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (Ct = e), (St = mn(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (Ct = e), (St = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((r = la !== null ? { id: Nr, overflow: Br } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                (r = Ot(18, null, null, 0)),
                (r.stateNode = t),
                (r.return = e),
                (e.child = r),
                (Ct = e),
                (St = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function ip(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function sp(e) {
      if (te) {
        var t = St;
        if (t) {
          var r = t;
          if (!Fv(e, t)) {
            if (ip(e)) throw Error(k(418));
            t = mn(r.nextSibling);
            var n = Ct;
            t && Fv(e, t)
              ? t1(n, r)
              : ((e.flags = (e.flags & -4097) | 2), (te = !1), (Ct = e));
          }
        } else {
          if (ip(e)) throw Error(k(418));
          (e.flags = (e.flags & -4097) | 2), (te = !1), (Ct = e);
        }
      }
    }
    function Dv(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      )
        e = e.return;
      Ct = e;
    }
    function is(e) {
      if (e !== Ct) return !1;
      if (!te) return Dv(e), (te = !0), !1;
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !ap(e.type, e.memoizedProps))),
        t && (t = St))
      ) {
        if (ip(e)) throw (r1(), Error(k(418)));
        for (; t; ) t1(e, t), (t = mn(t.nextSibling));
      }
      if ((Dv(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(k(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === "/$") {
                if (t === 0) {
                  St = mn(e.nextSibling);
                  break e;
                }
                t--;
              } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          St = null;
        }
      } else St = Ct ? mn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function r1() {
      for (var e = St; e; ) e = mn(e.nextSibling);
    }
    function oo() {
      (St = Ct = null), (te = !1);
    }
    function Gp(e) {
      er === null ? (er = [e]) : er.push(e);
    }
    var Wk = Wr.ReactCurrentBatchConfig;
    function Jt(e, t) {
      if (e && e.defaultProps) {
        (t = oe({}, t)), (e = e.defaultProps);
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    var Ns = Sn(null),
      Bs = null,
      Ka = null,
      qp = null;
    function Qp() {
      qp = Ka = Bs = null;
    }
    function Kp(e) {
      var t = Ns.current;
      J(Ns), (e._currentValue = t);
    }
    function dp(e, t, r) {
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
    function to(e, t) {
      (Bs = e),
        (qp = Ka = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (dt = !0), (e.firstContext = null));
    }
    function Ht(e) {
      var t = e._currentValue;
      if (qp !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Ka === null)) {
          if (Bs === null) throw Error(k(308));
          (Ka = e), (Bs.dependencies = { lanes: 0, firstContext: e });
        } else Ka = Ka.next = e;
      return t;
    }
    var ta = null;
    function Xp(e) {
      ta === null ? (ta = [e]) : ta.push(e);
    }
    function n1(e, t, r, n) {
      var a = t.interleaved;
      return (
        a === null ? ((r.next = r), Xp(t)) : ((r.next = a.next), (a.next = r)),
        (t.interleaved = r),
        Vr(e, n)
      );
    }
    function Vr(e, t) {
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
    var on = !1;
    function Zp(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function a1(e, t) {
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
    function Or(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function hn(e, t, r) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), B & 2)) {
        var a = n.pending;
        return (
          a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (n.pending = t),
          Vr(e, r)
        );
      }
      return (
        (a = n.interleaved),
        a === null ? ((t.next = t), Xp(n)) : ((t.next = a.next), (a.next = t)),
        (n.interleaved = t),
        Vr(e, r)
      );
    }
    function gs(e, t, r) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
      ) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), zp(e, r);
      }
    }
    function Rv(e, t) {
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
    function Os(e, t, r, n) {
      var a = e.updateQueue;
      on = !1;
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
                  h = oe({}, h, m);
                  break e;
                case 2:
                  on = !0;
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
        (ia |= l), (e.lanes = l), (e.memoizedState = h);
      }
    }
    function Av(e, t, r) {
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
    var o1 = new n0.Component().refs;
    function fp(e, t, r, n) {
      (t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : oe({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var bs = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? fa(e) === e : !1;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = tt(),
          a = yn(e),
          o = Or(n, a);
        (o.payload = t),
          r != null && (o.callback = r),
          (t = hn(e, o, a)),
          t !== null && (rr(t, e, a, n), gs(t, e, a));
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = tt(),
          a = yn(e),
          o = Or(n, a);
        (o.tag = 1),
          (o.payload = t),
          r != null && (o.callback = r),
          (t = hn(e, o, a)),
          t !== null && (rr(t, e, a, n), gs(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = tt(),
          n = yn(e),
          a = Or(r, n);
        (a.tag = 2),
          t != null && (a.callback = t),
          (t = hn(e, a, n)),
          t !== null && (rr(t, e, n, r), gs(t, e, n));
      },
    };
    function _v(e, t, r, n, a, o, l) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(n, o, l)
          : t.prototype && t.prototype.isPureReactComponent
          ? !Fl(r, n) || !Fl(a, o)
          : !0
      );
    }
    function l1(e, t, r) {
      var n = !1,
        a = Ln,
        o = t.contextType;
      return (
        typeof o == "object" && o !== null
          ? (o = Ht(o))
          : ((a = ct(t) ? oa : je.current),
            (n = t.contextTypes),
            (o = (n = n != null) ? ao(e, a) : Ln)),
        (t = new t(r, o)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = bs),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function zv(e, t, r, n) {
      (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && bs.enqueueReplaceState(t, t.state, null);
    }
    function cp(e, t, r, n) {
      var a = e.stateNode;
      (a.props = r), (a.state = e.memoizedState), (a.refs = o1), Zp(e);
      var o = t.contextType;
      typeof o == "object" && o !== null
        ? (a.context = Ht(o))
        : ((o = ct(t) ? oa : je.current), (a.context = ao(e, o))),
        (a.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (fp(e, t, o, r), (a.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function" ||
          (typeof a.UNSAFE_componentWillMount != "function" &&
            typeof a.componentWillMount != "function") ||
          ((t = a.state),
          typeof a.componentWillMount == "function" && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == "function" &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && bs.enqueueReplaceState(a, a.state, null),
          Os(e, r, a, n),
          (a.state = e.memoizedState)),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function ll(e, t, r) {
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
                u === o1 && (u = a.refs = {}),
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
    function ss(e, t) {
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
    function Nv(e) {
      var t = e._init;
      return t(e._payload);
    }
    function u1(e) {
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
        return (d = vn(d, s)), (d.index = 0), (d.sibling = null), d;
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
          ? ((s = Ac(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function i(d, s, c, g) {
        var L = c.type;
        return L === Ha
          ? p(d, s, c.props.children, g, c.key)
          : s !== null &&
            (s.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === an &&
                Nv(L) === s.type))
          ? ((g = a(s, c.props)), (g.ref = ll(d, s, c)), (g.return = d), g)
          : ((g = Ss(c.type, c.key, c.props, null, d.mode, g)),
            (g.ref = ll(d, s, c)),
            (g.return = d),
            g);
      }
      function f(d, s, c, g) {
        return s === null ||
          s.tag !== 4 ||
          s.stateNode.containerInfo !== c.containerInfo ||
          s.stateNode.implementation !== c.implementation
          ? ((s = _c(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c.children || [])), (s.return = d), s);
      }
      function p(d, s, c, g, L) {
        return s === null || s.tag !== 7
          ? ((s = aa(c, d.mode, g, L)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function h(d, s, c) {
        if ((typeof s == "string" && s !== "") || typeof s == "number")
          return (s = Ac("" + s, d.mode, c)), (s.return = d), s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case Ki:
              return (
                (c = Ss(s.type, s.key, s.props, null, d.mode, c)),
                (c.ref = ll(d, null, s)),
                (c.return = d),
                c
              );
            case Ua:
              return (s = _c(s, d.mode, c)), (s.return = d), s;
            case an:
              var g = s._init;
              return h(d, g(s._payload), c);
          }
          if (fl(s) || rl(s))
            return (s = aa(s, d.mode, c, null)), (s.return = d), s;
          ss(d, s);
        }
        return null;
      }
      function m(d, s, c, g) {
        var L = s !== null ? s.key : null;
        if ((typeof c == "string" && c !== "") || typeof c == "number")
          return L !== null ? null : u(d, s, "" + c, g);
        if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
            case Ki:
              return c.key === L ? i(d, s, c, g) : null;
            case Ua:
              return c.key === L ? f(d, s, c, g) : null;
            case an:
              return (L = c._init), m(d, s, L(c._payload), g);
          }
          if (fl(c) || rl(c)) return L !== null ? null : p(d, s, c, g, null);
          ss(d, c);
        }
        return null;
      }
      function y(d, s, c, g, L) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
          return (d = d.get(c) || null), u(s, d, "" + g, L);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case Ki:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), i(s, d, g, L)
              );
            case Ua:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), f(s, d, g, L)
              );
            case an:
              var C = g._init;
              return y(d, s, c, C(g._payload), L);
          }
          if (fl(g) || rl(g))
            return (d = d.get(c) || null), p(s, d, g, L, null);
          ss(s, g);
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
        if (w === c.length) return r(d, S), te && Jn(d, w), L;
        if (S === null) {
          for (; w < c.length; w++)
            (S = h(d, c[w], g)),
              S !== null &&
                ((s = o(S, s, w)),
                C === null ? (L = S) : (C.sibling = S),
                (C = S));
          return te && Jn(d, w), L;
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
          te && Jn(d, w),
          L
        );
      }
      function v(d, s, c, g) {
        var L = rl(c);
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
        if (I.done) return r(d, S), te && Jn(d, w), L;
        if (S === null) {
          for (; !I.done; w++, I = c.next())
            (I = h(d, I.value, g)),
              I !== null &&
                ((s = o(I, s, w)),
                C === null ? (L = I) : (C.sibling = I),
                (C = I));
          return te && Jn(d, w), L;
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
          te && Jn(d, w),
          L
        );
      }
      function T(d, s, c, g) {
        if (
          (typeof c == "object" &&
            c !== null &&
            c.type === Ha &&
            c.key === null &&
            (c = c.props.children),
          typeof c == "object" && c !== null)
        ) {
          switch (c.$$typeof) {
            case Ki:
              e: {
                for (var L = c.key, C = s; C !== null; ) {
                  if (C.key === L) {
                    if (((L = c.type), L === Ha)) {
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
                        L.$$typeof === an &&
                        Nv(L) === C.type)
                    ) {
                      r(d, C.sibling),
                        (s = a(C, c.props)),
                        (s.ref = ll(d, C, c)),
                        (s.return = d),
                        (d = s);
                      break e;
                    }
                    r(d, C);
                    break;
                  } else t(d, C);
                  C = C.sibling;
                }
                c.type === Ha
                  ? ((s = aa(c.props.children, d.mode, g, c.key)),
                    (s.return = d),
                    (d = s))
                  : ((g = Ss(c.type, c.key, c.props, null, d.mode, g)),
                    (g.ref = ll(d, s, c)),
                    (g.return = d),
                    (d = g));
              }
              return l(d);
            case Ua:
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
                (s = _c(c, d.mode, g)), (s.return = d), (d = s);
              }
              return l(d);
            case an:
              return (C = c._init), T(d, s, C(c._payload), g);
          }
          if (fl(c)) return x(d, s, c, g);
          if (rl(c)) return v(d, s, c, g);
          ss(d, c);
        }
        return (typeof c == "string" && c !== "") || typeof c == "number"
          ? ((c = "" + c),
            s !== null && s.tag === 6
              ? (r(d, s.sibling), (s = a(s, c)), (s.return = d), (d = s))
              : (r(d, s), (s = Ac(c, d.mode, g)), (s.return = d), (d = s)),
            l(d))
          : r(d, s);
      }
      return T;
    }
    var lo = u1(!0),
      i1 = u1(!1),
      Wl = {},
      Lr = Sn(Wl),
      _l = Sn(Wl),
      zl = Sn(Wl);
    function ra(e) {
      if (e === Wl) throw Error(k(174));
      return e;
    }
    function Yp(e, t) {
      switch ((q(zl, t), q(_l, e), q(Lr, Wl), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : $c(null, "");
          break;
        default:
          (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = $c(t, e));
      }
      J(Lr), q(Lr, t);
    }
    function uo() {
      J(Lr), J(_l), J(zl);
    }
    function s1(e) {
      ra(zl.current);
      var t = ra(Lr.current),
        r = $c(t, e.type);
      t !== r && (q(_l, e), q(Lr, r));
    }
    function Jp(e) {
      _l.current === e && (J(Lr), J(_l));
    }
    var ne = Sn(0);
    function Us(e) {
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
    var Ec = [];
    function bp() {
      for (var e = 0; e < Ec.length; e++)
        Ec[e]._workInProgressVersionPrimary = null;
      Ec.length = 0;
    }
    var ys = Wr.ReactCurrentDispatcher,
      Tc = Wr.ReactCurrentBatchConfig,
      ua = 0,
      ae = null,
      xe = null,
      Ie = null,
      Hs = !1,
      xl = !1,
      Nl = 0,
      $k = 0;
    function Ue() {
      throw Error(k(321));
    }
    function em(e, t) {
      if (t === null) return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!nr(e[r], t[r])) return !1;
      return !0;
    }
    function tm(e, t, r, n, a, o) {
      if (
        ((ua = o),
        (ae = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ys.current = e === null || e.memoizedState === null ? Kk : Xk),
        (e = r(n, a)),
        xl)
      ) {
        o = 0;
        do {
          if (((xl = !1), (Nl = 0), 25 <= o)) throw Error(k(301));
          (o += 1),
            (Ie = xe = null),
            (t.updateQueue = null),
            (ys.current = Zk),
            (e = r(n, a));
        } while (xl);
      }
      if (
        ((ys.current = Vs),
        (t = xe !== null && xe.next !== null),
        (ua = 0),
        (Ie = xe = ae = null),
        (Hs = !1),
        t)
      )
        throw Error(k(300));
      return e;
    }
    function rm() {
      var e = Nl !== 0;
      return (Nl = 0), e;
    }
    function yr() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Ie === null ? (ae.memoizedState = Ie = e) : (Ie = Ie.next = e), Ie;
    }
    function Vt() {
      if (xe === null) {
        var e = ae.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = xe.next;
      var t = Ie === null ? ae.memoizedState : Ie.next;
      if (t !== null) (Ie = t), (xe = e);
      else {
        if (e === null) throw Error(k(310));
        (xe = e),
          (e = {
            memoizedState: xe.memoizedState,
            baseState: xe.baseState,
            baseQueue: xe.baseQueue,
            queue: xe.queue,
            next: null,
          }),
          Ie === null ? (ae.memoizedState = Ie = e) : (Ie = Ie.next = e);
      }
      return Ie;
    }
    function Bl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Mc(e) {
      var t = Vt(),
        r = t.queue;
      if (r === null) throw Error(k(311));
      r.lastRenderedReducer = e;
      var n = xe,
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
          if ((ua & p) === p)
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
              (ae.lanes |= p),
              (ia |= p);
          }
          f = f.next;
        } while (f !== null && f !== o);
        i === null ? (l = n) : (i.next = u),
          nr(n, t.memoizedState) || (dt = !0),
          (t.memoizedState = n),
          (t.baseState = l),
          (t.baseQueue = i),
          (r.lastRenderedState = n);
      }
      if (((e = r.interleaved), e !== null)) {
        a = e;
        do (o = a.lane), (ae.lanes |= o), (ia |= o), (a = a.next);
        while (a !== e);
      } else a === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch];
    }
    function Fc(e) {
      var t = Vt(),
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
        nr(o, t.memoizedState) || (dt = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (r.lastRenderedState = o);
      }
      return [o, n];
    }
    function d1() {}
    function f1(e, t) {
      var r = ae,
        n = Vt(),
        a = t(),
        o = !nr(n.memoizedState, a);
      if (
        (o && ((n.memoizedState = a), (dt = !0)),
        (n = n.queue),
        nm(m1.bind(null, r, n, e), [e]),
        n.getSnapshot !== t || o || (Ie !== null && Ie.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Ol(9, p1.bind(null, r, n, a, t), void 0, null),
          ke === null)
        )
          throw Error(k(349));
        ua & 30 || c1(r, t, a);
      }
      return a;
    }
    function c1(e, t, r) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: r }),
        (t = ae.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ae.updateQueue = t),
            (t.stores = [e]))
          : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
    }
    function p1(e, t, r, n) {
      (t.value = r), (t.getSnapshot = n), h1(t) && g1(e);
    }
    function m1(e, t, r) {
      return r(function () {
        h1(t) && g1(e);
      });
    }
    function h1(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !nr(e, r);
      } catch {
        return !0;
      }
    }
    function g1(e) {
      var t = Vr(e, 1);
      t !== null && rr(t, e, 1, -1);
    }
    function Bv(e) {
      var t = yr();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bl,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Qk.bind(null, ae, e)),
        [t.memoizedState, e]
      );
    }
    function Ol(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = ae.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ae.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      );
    }
    function y1() {
      return Vt().memoizedState;
    }
    function vs(e, t, r, n) {
      var a = yr();
      (ae.flags |= e),
        (a.memoizedState = Ol(1 | t, r, void 0, n === void 0 ? null : n));
    }
    function ed(e, t, r, n) {
      var a = Vt();
      n = n === void 0 ? null : n;
      var o = void 0;
      if (xe !== null) {
        var l = xe.memoizedState;
        if (((o = l.destroy), n !== null && em(n, l.deps))) {
          a.memoizedState = Ol(t, r, o, n);
          return;
        }
      }
      (ae.flags |= e), (a.memoizedState = Ol(1 | t, r, o, n));
    }
    function Ov(e, t) {
      return vs(8390656, 8, e, t);
    }
    function nm(e, t) {
      return ed(2048, 8, e, t);
    }
    function v1(e, t) {
      return ed(4, 2, e, t);
    }
    function x1(e, t) {
      return ed(4, 4, e, t);
    }
    function L1(e, t) {
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
    function w1(e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), ed(4, 4, L1.bind(null, t, e), r)
      );
    }
    function am() {}
    function S1(e, t) {
      var r = Vt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && em(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function C1(e, t) {
      var r = Vt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && em(t, n[1])
        ? n[0]
        : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function I1(e, t, r) {
      return ua & 21
        ? (nr(r, t) ||
            ((r = E0()), (ae.lanes |= r), (ia |= r), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (dt = !0)),
          (e.memoizedState = r));
    }
    function Gk(e, t) {
      var r = j;
      (j = r !== 0 && 4 > r ? r : 4), e(!0);
      var n = Tc.transition;
      Tc.transition = {};
      try {
        e(!1), t();
      } finally {
        (j = r), (Tc.transition = n);
      }
    }
    function k1() {
      return Vt().memoizedState;
    }
    function qk(e, t, r) {
      var n = yn(e);
      if (
        ((r = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        P1(e))
      )
        E1(t, r);
      else if (((r = n1(e, t, r, n)), r !== null)) {
        var a = tt();
        rr(r, e, n, a), T1(r, t, n);
      }
    }
    function Qk(e, t, r) {
      var n = yn(e),
        a = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (P1(e)) E1(t, a);
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
            if (((a.hasEagerState = !0), (a.eagerState = u), nr(u, l))) {
              var i = t.interleaved;
              i === null
                ? ((a.next = a), Xp(t))
                : ((a.next = i.next), (i.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch {
          } finally {
          }
        (r = n1(e, t, a, n)),
          r !== null && ((a = tt()), rr(r, e, n, a), T1(r, t, n));
      }
    }
    function P1(e) {
      var t = e.alternate;
      return e === ae || (t !== null && t === ae);
    }
    function E1(e, t) {
      xl = Hs = !0;
      var r = e.pending;
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (e.pending = t);
    }
    function T1(e, t, r) {
      if (r & 4194240) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), zp(e, r);
      }
    }
    var Vs = {
        readContext: Ht,
        useCallback: Ue,
        useContext: Ue,
        useEffect: Ue,
        useImperativeHandle: Ue,
        useInsertionEffect: Ue,
        useLayoutEffect: Ue,
        useMemo: Ue,
        useReducer: Ue,
        useRef: Ue,
        useState: Ue,
        useDebugValue: Ue,
        useDeferredValue: Ue,
        useTransition: Ue,
        useMutableSource: Ue,
        useSyncExternalStore: Ue,
        useId: Ue,
        unstable_isNewReconciler: !1,
      },
      Kk = {
        readContext: Ht,
        useCallback: function (e, t) {
          return (yr().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ht,
        useEffect: Ov,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = r != null ? r.concat([e]) : null),
            vs(4194308, 4, L1.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return vs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return vs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var r = yr();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = yr();
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
            (e = e.dispatch = qk.bind(null, ae, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = yr();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Bv,
        useDebugValue: am,
        useDeferredValue: function (e) {
          return (yr().memoizedState = e);
        },
        useTransition: function () {
          var e = Bv(!1),
            t = e[0];
          return (e = Gk.bind(null, e[1])), (yr().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var n = ae,
            a = yr();
          if (te) {
            if (r === void 0) throw Error(k(407));
            r = r();
          } else {
            if (((r = t()), ke === null)) throw Error(k(349));
            ua & 30 || c1(n, t, r);
          }
          a.memoizedState = r;
          var o = { value: r, getSnapshot: t };
          return (
            (a.queue = o),
            Ov(m1.bind(null, n, o, e), [e]),
            (n.flags |= 2048),
            Ol(9, p1.bind(null, n, o, r, t), void 0, null),
            r
          );
        },
        useId: function () {
          var e = yr(),
            t = ke.identifierPrefix;
          if (te) {
            var r = Br,
              n = Nr;
            (r = (n & ~(1 << (32 - tr(n) - 1))).toString(32) + r),
              (t = ":" + t + "R" + r),
              (r = Nl++),
              0 < r && (t += "H" + r.toString(32)),
              (t += ":");
          } else (r = $k++), (t = ":" + t + "r" + r.toString(32) + ":");
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      Xk = {
        readContext: Ht,
        useCallback: S1,
        useContext: Ht,
        useEffect: nm,
        useImperativeHandle: w1,
        useInsertionEffect: v1,
        useLayoutEffect: x1,
        useMemo: C1,
        useReducer: Mc,
        useRef: y1,
        useState: function () {
          return Mc(Bl);
        },
        useDebugValue: am,
        useDeferredValue: function (e) {
          var t = Vt();
          return I1(t, xe.memoizedState, e);
        },
        useTransition: function () {
          var e = Mc(Bl)[0],
            t = Vt().memoizedState;
          return [e, t];
        },
        useMutableSource: d1,
        useSyncExternalStore: f1,
        useId: k1,
        unstable_isNewReconciler: !1,
      },
      Zk = {
        readContext: Ht,
        useCallback: S1,
        useContext: Ht,
        useEffect: nm,
        useImperativeHandle: w1,
        useInsertionEffect: v1,
        useLayoutEffect: x1,
        useMemo: C1,
        useReducer: Fc,
        useRef: y1,
        useState: function () {
          return Fc(Bl);
        },
        useDebugValue: am,
        useDeferredValue: function (e) {
          var t = Vt();
          return xe === null
            ? (t.memoizedState = e)
            : I1(t, xe.memoizedState, e);
        },
        useTransition: function () {
          var e = Fc(Bl)[0],
            t = Vt().memoizedState;
          return [e, t];
        },
        useMutableSource: d1,
        useSyncExternalStore: f1,
        useId: k1,
        unstable_isNewReconciler: !1,
      };
    function io(e, t) {
      try {
        var r = "",
          n = t;
        do (r += PI(n)), (n = n.return);
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
    function Dc(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function pp(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    var Yk = typeof WeakMap == "function" ? WeakMap : Map;
    function M1(e, t, r) {
      (r = Or(-1, r)), (r.tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          Ws || ((Ws = !0), (Cp = n)), pp(e, t);
        }),
        r
      );
    }
    function F1(e, t, r) {
      (r = Or(-1, r)), (r.tag = 3);
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var a = t.value;
        (r.payload = function () {
          return n(a);
        }),
          (r.callback = function () {
            pp(e, t);
          });
      }
      var o = e.stateNode;
      return (
        o !== null &&
          typeof o.componentDidCatch == "function" &&
          (r.callback = function () {
            pp(e, t),
              typeof n != "function" &&
                (gn === null ? (gn = new Set([this])) : gn.add(this));
            var l = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: l !== null ? l : "",
            });
          }),
        r
      );
    }
    function Uv(e, t, r) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new Yk();
        var a = new Set();
        n.set(t, a);
      } else (a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a));
      a.has(r) || (a.add(r), (e = f2.bind(null, e, t, r)), t.then(e, e));
    }
    function Hv(e) {
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
    function Vv(e, t, r, n, a) {
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
                  : ((t = Or(-1, 1)), (t.tag = 2), hn(r, t, 1))),
              (r.lanes |= 1)),
          e);
    }
    var Jk = Wr.ReactCurrentOwner,
      dt = !1;
    function et(e, t, r, n) {
      t.child = e === null ? i1(t, null, r, n) : lo(t, e.child, r, n);
    }
    function jv(e, t, r, n, a) {
      r = r.render;
      var o = t.ref;
      return (
        to(t, a),
        (n = tm(e, t, r, n, o, a)),
        (r = rm()),
        e !== null && !dt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            jr(e, t, a))
          : (te && r && Wp(t), (t.flags |= 1), et(e, t, n, a), t.child)
      );
    }
    function Wv(e, t, r, n, a) {
      if (e === null) {
        var o = r.type;
        return typeof o == "function" &&
          !cm(o) &&
          o.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = o), D1(e, t, o, n, a))
          : ((e = Ss(r.type, null, n, t, t.mode, a)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((o = e.child), !(e.lanes & a))) {
        var l = o.memoizedProps;
        if (
          ((r = r.compare),
          (r = r !== null ? r : Fl),
          r(l, n) && e.ref === t.ref)
        )
          return jr(e, t, a);
      }
      return (
        (t.flags |= 1),
        (e = vn(o, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function D1(e, t, r, n, a) {
      if (e !== null) {
        var o = e.memoizedProps;
        if (Fl(o, n) && e.ref === t.ref)
          if (((dt = !1), (t.pendingProps = n = o), (e.lanes & a) !== 0))
            e.flags & 131072 && (dt = !0);
          else return (t.lanes = e.lanes), jr(e, t, a);
      }
      return mp(e, t, r, n, a);
    }
    function R1(e, t, r) {
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
            q(Za, wt),
            (wt |= r);
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
              q(Za, wt),
              (wt |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (n = o !== null ? o.baseLanes : r),
            q(Za, wt),
            (wt |= n);
        }
      else
        o !== null
          ? ((n = o.baseLanes | r), (t.memoizedState = null))
          : (n = r),
          q(Za, wt),
          (wt |= n);
      return et(e, t, a, r), t.child;
    }
    function A1(e, t) {
      var r = t.ref;
      ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function mp(e, t, r, n, a) {
      var o = ct(r) ? oa : je.current;
      return (
        (o = ao(t, o)),
        to(t, a),
        (r = tm(e, t, r, n, o, a)),
        (n = rm()),
        e !== null && !dt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            jr(e, t, a))
          : (te && n && Wp(t), (t.flags |= 1), et(e, t, r, a), t.child)
      );
    }
    function $v(e, t, r, n, a) {
      if (ct(r)) {
        var o = !0;
        As(t);
      } else o = !1;
      if ((to(t, a), t.stateNode === null))
        xs(e, t), l1(t, r, n), cp(t, r, n, a), (n = !0);
      else if (e === null) {
        var l = t.stateNode,
          u = t.memoizedProps;
        l.props = u;
        var i = l.context,
          f = r.contextType;
        typeof f == "object" && f !== null
          ? (f = Ht(f))
          : ((f = ct(r) ? oa : je.current), (f = ao(t, f)));
        var p = r.getDerivedStateFromProps,
          h =
            typeof p == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function";
        h ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== n || i !== f) && zv(t, l, n, f)),
          (on = !1);
        var m = t.memoizedState;
        (l.state = m),
          Os(t, n, l, a),
          (i = t.memoizedState),
          u !== n || m !== i || ft.current || on
            ? (typeof p == "function" &&
                (fp(t, r, p, n), (i = t.memoizedState)),
              (u = on || _v(t, r, u, n, m, i, f))
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
          a1(e, t),
          (u = t.memoizedProps),
          (f = t.type === t.elementType ? u : Jt(t.type, u)),
          (l.props = f),
          (h = t.pendingProps),
          (m = l.context),
          (i = r.contextType),
          typeof i == "object" && i !== null
            ? (i = Ht(i))
            : ((i = ct(r) ? oa : je.current), (i = ao(t, i)));
        var y = r.getDerivedStateFromProps;
        (p =
          typeof y == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function") ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== h || m !== i) && zv(t, l, n, i)),
          (on = !1),
          (m = t.memoizedState),
          (l.state = m),
          Os(t, n, l, a);
        var x = t.memoizedState;
        u !== h || m !== x || ft.current || on
          ? (typeof y == "function" && (fp(t, r, y, n), (x = t.memoizedState)),
            (f = on || _v(t, r, f, n, m, x, i) || !1)
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
      return hp(e, t, r, n, o, a);
    }
    function hp(e, t, r, n, a, o) {
      A1(e, t);
      var l = (t.flags & 128) !== 0;
      if (!n && !l) return a && Mv(t, r, !1), jr(e, t, o);
      (n = t.stateNode), (Jk.current = t);
      var u =
        l && typeof r.getDerivedStateFromError != "function"
          ? null
          : n.render();
      return (
        (t.flags |= 1),
        e !== null && l
          ? ((t.child = lo(t, e.child, null, o)), (t.child = lo(t, null, u, o)))
          : et(e, t, u, o),
        (t.memoizedState = n.state),
        a && Mv(t, r, !0),
        t.child
      );
    }
    function _1(e) {
      var t = e.stateNode;
      t.pendingContext
        ? Tv(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Tv(e, t.context, !1),
        Yp(e, t.containerInfo);
    }
    function Gv(e, t, r, n, a) {
      return oo(), Gp(a), (t.flags |= 256), et(e, t, r, n), t.child;
    }
    var gp = { dehydrated: null, treeContext: null, retryLane: 0 };
    function yp(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function z1(e, t, r) {
      var n = t.pendingProps,
        a = ne.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        u;
      if (
        ((u = l) ||
          (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        u
          ? ((o = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (a |= 1),
        q(ne, a & 1),
        e === null)
      )
        return (
          sp(t),
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
                    : (o = nd(l, n, 0, null)),
                  (e = aa(e, n, r, null)),
                  (o.return = t),
                  (e.return = t),
                  (o.sibling = e),
                  (t.child = o),
                  (t.child.memoizedState = yp(r)),
                  (t.memoizedState = gp),
                  e)
                : om(t, l))
        );
      if (
        ((a = e.memoizedState), a !== null && ((u = a.dehydrated), u !== null))
      )
        return bk(e, t, l, n, u, a, r);
      if (o) {
        (o = n.fallback), (l = t.mode), (a = e.child), (u = a.sibling);
        var i = { mode: "hidden", children: n.children };
        return (
          !(l & 1) && t.child !== a
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = i),
              (t.deletions = null))
            : ((n = vn(a, i)), (n.subtreeFlags = a.subtreeFlags & 14680064)),
          u !== null
            ? (o = vn(u, o))
            : ((o = aa(o, l, r, null)), (o.flags |= 2)),
          (o.return = t),
          (n.return = t),
          (n.sibling = o),
          (t.child = n),
          (n = o),
          (o = t.child),
          (l = e.child.memoizedState),
          (l =
            l === null
              ? yp(r)
              : {
                  baseLanes: l.baseLanes | r,
                  cachePool: null,
                  transitions: l.transitions,
                }),
          (o.memoizedState = l),
          (o.childLanes = e.childLanes & ~r),
          (t.memoizedState = gp),
          n
        );
      }
      return (
        (o = e.child),
        (e = o.sibling),
        (n = vn(o, { mode: "visible", children: n.children })),
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
    function om(e, t) {
      return (
        (t = nd({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function ds(e, t, r, n) {
      return (
        n !== null && Gp(n),
        lo(t, e.child, null, r),
        (e = om(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function bk(e, t, r, n, a, o, l) {
      if (r)
        return t.flags & 256
          ? ((t.flags &= -257), (n = Dc(Error(k(422)))), ds(e, t, l, n))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (a = t.mode),
            (n = nd({ mode: "visible", children: n.children }, a, 0, null)),
            (o = aa(o, a, l, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            t.mode & 1 && lo(t, e.child, null, l),
            (t.child.memoizedState = yp(l)),
            (t.memoizedState = gp),
            o);
      if (!(t.mode & 1)) return ds(e, t, l, null);
      if (a.data === "$!") {
        if (((n = a.nextSibling && a.nextSibling.dataset), n)) var u = n.dgst;
        return (
          (n = u), (o = Error(k(419))), (n = Dc(o, n, void 0)), ds(e, t, l, n)
        );
      }
      if (((u = (l & e.childLanes) !== 0), dt || u)) {
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
              ((o.retryLane = a), Vr(e, a), rr(n, e, a, -1));
        }
        return fm(), (n = Dc(Error(k(421)))), ds(e, t, l, n);
      }
      return a.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = c2.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (St = mn(a.nextSibling)),
          (Ct = t),
          (te = !0),
          (er = null),
          e !== null &&
            ((Nt[Bt++] = Nr),
            (Nt[Bt++] = Br),
            (Nt[Bt++] = la),
            (Nr = e.id),
            (Br = e.overflow),
            (la = t)),
          (t = om(t, n.children)),
          (t.flags |= 4096),
          t);
    }
    function qv(e, t, r) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), dp(e.return, t, r);
    }
    function Rc(e, t, r, n, a) {
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
    function N1(e, t, r) {
      var n = t.pendingProps,
        a = n.revealOrder,
        o = n.tail;
      if ((et(e, t, n.children, r), (n = ne.current), n & 2))
        (n = (n & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && qv(e, r, t);
            else if (e.tag === 19) qv(e, r, t);
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
      if ((q(ne, n), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (r = t.child, a = null; r !== null; )
              (e = r.alternate),
                e !== null && Us(e) === null && (a = r),
                (r = r.sibling);
            (r = a),
              r === null
                ? ((a = t.child), (t.child = null))
                : ((a = r.sibling), (r.sibling = null)),
              Rc(t, !1, a, r, o);
            break;
          case "backwards":
            for (r = null, a = t.child, t.child = null; a !== null; ) {
              if (((e = a.alternate), e !== null && Us(e) === null)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = r), (r = a), (a = e);
            }
            Rc(t, !0, r, null, o);
            break;
          case "together":
            Rc(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function xs(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function jr(e, t, r) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (ia |= t.lanes),
        !(r & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(k(153));
      if (t.child !== null) {
        for (
          e = t.child, r = vn(e, e.pendingProps), t.child = r, r.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (r = r.sibling = vn(e, e.pendingProps)),
            (r.return = t);
        r.sibling = null;
      }
      return t.child;
    }
    function e2(e, t, r) {
      switch (t.tag) {
        case 3:
          _1(t), oo();
          break;
        case 5:
          s1(t);
          break;
        case 1:
          ct(t.type) && As(t);
          break;
        case 4:
          Yp(t, t.stateNode.containerInfo);
          break;
        case 10:
          var n = t.type._context,
            a = t.memoizedProps.value;
          q(Ns, n._currentValue), (n._currentValue = a);
          break;
        case 13:
          if (((n = t.memoizedState), n !== null))
            return n.dehydrated !== null
              ? (q(ne, ne.current & 1), (t.flags |= 128), null)
              : r & t.child.childLanes
              ? z1(e, t, r)
              : (q(ne, ne.current & 1),
                (e = jr(e, t, r)),
                e !== null ? e.sibling : null);
          q(ne, ne.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
            if (n) return N1(e, t, r);
            t.flags |= 128;
          }
          if (
            ((a = t.memoizedState),
            a !== null &&
              ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
            q(ne, ne.current),
            n)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), R1(e, t, r);
      }
      return jr(e, t, r);
    }
    var B1, vp, O1, U1;
    B1 = function (e, t) {
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
    vp = function () {};
    O1 = function (e, t, r, n) {
      var a = e.memoizedProps;
      if (a !== n) {
        (e = t.stateNode), ra(Lr.current);
        var o = null;
        switch (r) {
          case "input":
            (a = Hc(e, a)), (n = Hc(e, n)), (o = []);
            break;
          case "select":
            (a = oe({}, a, { value: void 0 })),
              (n = oe({}, n, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (a = Wc(e, a)), (n = Wc(e, n)), (o = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof n.onClick == "function" &&
              (e.onclick = Ds);
        }
        Gc(r, n);
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
                (Cl.hasOwnProperty(f)
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
                  (Cl.hasOwnProperty(f)
                    ? (i != null && f === "onScroll" && Y("scroll", e),
                      o || u === i || (o = []))
                    : (o = o || []).push(f, i));
        }
        r && (o = o || []).push("style", r);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4);
      }
    };
    U1 = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    };
    function ul(e, t) {
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
    function He(e) {
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
    function t2(e, t, r) {
      var n = t.pendingProps;
      switch (($p(t), t.tag)) {
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
          return He(t), null;
        case 1:
          return ct(t.type) && Rs(), He(t), null;
        case 3:
          return (
            (n = t.stateNode),
            uo(),
            J(ft),
            J(je),
            bp(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (is(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), er !== null && (Pp(er), (er = null)))),
            vp(e, t),
            He(t),
            null
          );
        case 5:
          Jp(t);
          var a = ra(zl.current);
          if (((r = t.type), e !== null && t.stateNode != null))
            O1(e, t, r, n, a),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(k(166));
              return He(t), null;
            }
            if (((e = ra(Lr.current)), is(t))) {
              (n = t.stateNode), (r = t.type);
              var o = t.memoizedProps;
              switch (((n[vr] = t), (n[Al] = o), (e = (t.mode & 1) !== 0), r)) {
                case "dialog":
                  Y("cancel", n), Y("close", n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Y("load", n);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < pl.length; a++) Y(pl[a], n);
                  break;
                case "source":
                  Y("error", n);
                  break;
                case "img":
                case "image":
                case "link":
                  Y("error", n), Y("load", n);
                  break;
                case "details":
                  Y("toggle", n);
                  break;
                case "input":
                  ev(n, o), Y("invalid", n);
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!o.multiple }),
                    Y("invalid", n);
                  break;
                case "textarea":
                  rv(n, o), Y("invalid", n);
              }
              Gc(r, o), (a = null);
              for (var l in o)
                if (o.hasOwnProperty(l)) {
                  var u = o[l];
                  l === "children"
                    ? typeof u == "string"
                      ? n.textContent !== u &&
                        (o.suppressHydrationWarning !== !0 &&
                          us(n.textContent, u, e),
                        (a = ["children", u]))
                      : typeof u == "number" &&
                        n.textContent !== "" + u &&
                        (o.suppressHydrationWarning !== !0 &&
                          us(n.textContent, u, e),
                        (a = ["children", "" + u]))
                    : Cl.hasOwnProperty(l) &&
                      u != null &&
                      l === "onScroll" &&
                      Y("scroll", n);
                }
              switch (r) {
                case "input":
                  Xi(n), tv(n, o, !0);
                  break;
                case "textarea":
                  Xi(n), nv(n);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof o.onClick == "function" && (n.onclick = Ds);
              }
              (n = a), (t.updateQueue = n), n !== null && (t.flags |= 4);
            } else {
              (l = a.nodeType === 9 ? a : a.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = c0(r)),
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
                (e[vr] = t),
                (e[Al] = n),
                B1(e, t, !1, !1),
                (t.stateNode = e);
              e: {
                switch (((l = qc(r, n)), r)) {
                  case "dialog":
                    Y("cancel", e), Y("close", e), (a = n);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Y("load", e), (a = n);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < pl.length; a++) Y(pl[a], e);
                    a = n;
                    break;
                  case "source":
                    Y("error", e), (a = n);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Y("error", e), Y("load", e), (a = n);
                    break;
                  case "details":
                    Y("toggle", e), (a = n);
                    break;
                  case "input":
                    ev(e, n), (a = Hc(e, n)), Y("invalid", e);
                    break;
                  case "option":
                    a = n;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!n.multiple }),
                      (a = oe({}, n, { value: void 0 })),
                      Y("invalid", e);
                    break;
                  case "textarea":
                    rv(e, n), (a = Wc(e, n)), Y("invalid", e);
                    break;
                  default:
                    a = n;
                }
                Gc(r, a), (u = a);
                for (o in u)
                  if (u.hasOwnProperty(o)) {
                    var i = u[o];
                    o === "style"
                      ? h0(e, i)
                      : o === "dangerouslySetInnerHTML"
                      ? ((i = i ? i.__html : void 0), i != null && p0(e, i))
                      : o === "children"
                      ? typeof i == "string"
                        ? (r !== "textarea" || i !== "") && Il(e, i)
                        : typeof i == "number" && Il(e, "" + i)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Cl.hasOwnProperty(o)
                          ? i != null && o === "onScroll" && Y("scroll", e)
                          : i != null && Mp(e, o, i, l));
                  }
                switch (r) {
                  case "input":
                    Xi(e), tv(e, n, !1);
                    break;
                  case "textarea":
                    Xi(e), nv(e);
                    break;
                  case "option":
                    n.value != null &&
                      e.setAttribute("value", "" + xn(n.value));
                    break;
                  case "select":
                    (e.multiple = !!n.multiple),
                      (o = n.value),
                      o != null
                        ? Ya(e, !!n.multiple, o, !1)
                        : n.defaultValue != null &&
                          Ya(e, !!n.multiple, n.defaultValue, !0);
                    break;
                  default:
                    typeof a.onClick == "function" && (e.onclick = Ds);
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
          return He(t), null;
        case 6:
          if (e && t.stateNode != null) U1(e, t, e.memoizedProps, n);
          else {
            if (typeof n != "string" && t.stateNode === null)
              throw Error(k(166));
            if (((r = ra(zl.current)), ra(Lr.current), is(t))) {
              if (
                ((n = t.stateNode),
                (r = t.memoizedProps),
                (n[vr] = t),
                (o = n.nodeValue !== r) && ((e = Ct), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    us(n.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      us(n.nodeValue, r, (e.mode & 1) !== 0);
                }
              o && (t.flags |= 4);
            } else
              (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
                (n[vr] = t),
                (t.stateNode = n);
          }
          return He(t), null;
        case 13:
          if (
            (J(ne),
            (n = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (te && St !== null && t.mode & 1 && !(t.flags & 128))
              r1(), oo(), (t.flags |= 98560), (o = !1);
            else if (((o = is(t)), n !== null && n.dehydrated !== null)) {
              if (e === null) {
                if (!o) throw Error(k(318));
                if (
                  ((o = t.memoizedState),
                  (o = o !== null ? o.dehydrated : null),
                  !o)
                )
                  throw Error(k(317));
                o[vr] = t;
              } else
                oo(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              He(t), (o = !1);
            } else er !== null && (Pp(er), (er = null)), (o = !0);
            if (!o) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = r), t)
            : ((n = n !== null),
              n !== (e !== null && e.memoizedState !== null) &&
                n &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || ne.current & 1 ? Le === 0 && (Le = 3) : fm())),
              t.updateQueue !== null && (t.flags |= 4),
              He(t),
              null);
        case 4:
          return (
            uo(),
            vp(e, t),
            e === null && Dl(t.stateNode.containerInfo),
            He(t),
            null
          );
        case 10:
          return Kp(t.type._context), He(t), null;
        case 17:
          return ct(t.type) && Rs(), He(t), null;
        case 19:
          if ((J(ne), (o = t.memoizedState), o === null)) return He(t), null;
          if (((n = (t.flags & 128) !== 0), (l = o.rendering), l === null))
            if (n) ul(o, !1);
            else {
              if (Le !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((l = Us(e)), l !== null)) {
                    for (
                      t.flags |= 128,
                        ul(o, !1),
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
                    return q(ne, (ne.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null &&
                me() > so &&
                ((t.flags |= 128), (n = !0), ul(o, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = Us(l)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  ul(o, !0),
                  o.tail === null &&
                    o.tailMode === "hidden" &&
                    !l.alternate &&
                    !te)
                )
                  return He(t), null;
              } else
                2 * me() - o.renderingStartTime > so &&
                  r !== 1073741824 &&
                  ((t.flags |= 128), (n = !0), ul(o, !1), (t.lanes = 4194304));
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
              (o.renderingStartTime = me()),
              (t.sibling = null),
              (r = ne.current),
              q(ne, n ? (r & 1) | 2 : r & 1),
              t)
            : (He(t), null);
        case 22:
        case 23:
          return (
            dm(),
            (n = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
            n && t.mode & 1
              ? wt & 1073741824 &&
                (He(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : He(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(k(156, t.tag));
    }
    function r2(e, t) {
      switch (($p(t), t.tag)) {
        case 1:
          return (
            ct(t.type) && Rs(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            uo(),
            J(ft),
            J(je),
            bp(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return Jp(t), null;
        case 13:
          if (
            (J(ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(k(340));
            oo();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return J(ne), null;
        case 4:
          return uo(), null;
        case 10:
          return Kp(t.type._context), null;
        case 22:
        case 23:
          return dm(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var fs = !1,
      Ve = !1,
      n2 = typeof WeakSet == "function" ? WeakSet : Set,
      D = null;
    function Xa(e, t) {
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
    function xp(e, t, r) {
      try {
        r();
      } catch (n) {
        fe(e, t, n);
      }
    }
    var Qv = !1;
    function a2(e, t) {
      if (((rp = Ts), (e = W0()), jp(e))) {
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
        np = { focusedElem: e, selectionRange: r }, Ts = !1, D = t;
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
                        T = x.memoizedState,
                        d = t.stateNode,
                        s = d.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? v : Jt(t.type, v),
                          T
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
              fe(t, t.return, g);
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (D = e);
              break;
            }
            D = t.return;
          }
      return (x = Qv), (Qv = !1), x;
    }
    function Ll(e, t, r) {
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var a = (n = n.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.destroy;
            (a.destroy = void 0), o !== void 0 && xp(t, r, o);
          }
          a = a.next;
        } while (a !== n);
      }
    }
    function td(e, t) {
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
    function Lp(e) {
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
    function H1(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), H1(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[vr],
            delete t[Al],
            delete t[lp],
            delete t[Hk],
            delete t[Vk])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function V1(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Kv(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || V1(e.return)) return null;
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
    function wp(e, t, r) {
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
              r != null || t.onclick !== null || (t.onclick = Ds));
      else if (n !== 4 && ((e = e.child), e !== null))
        for (wp(e, t, r), e = e.sibling; e !== null; )
          wp(e, t, r), (e = e.sibling);
    }
    function Sp(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (n !== 4 && ((e = e.child), e !== null))
        for (Sp(e, t, r), e = e.sibling; e !== null; )
          Sp(e, t, r), (e = e.sibling);
    }
    var Fe = null,
      bt = !1;
    function nn(e, t, r) {
      for (r = r.child; r !== null; ) j1(e, t, r), (r = r.sibling);
    }
    function j1(e, t, r) {
      if (xr && typeof xr.onCommitFiberUnmount == "function")
        try {
          xr.onCommitFiberUnmount(Qs, r);
        } catch {}
      switch (r.tag) {
        case 5:
          Ve || Xa(r, t);
        case 6:
          var n = Fe,
            a = bt;
          (Fe = null),
            nn(e, t, r),
            (Fe = n),
            (bt = a),
            Fe !== null &&
              (bt
                ? ((e = Fe),
                  (r = r.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(r)
                    : e.removeChild(r))
                : Fe.removeChild(r.stateNode));
          break;
        case 18:
          Fe !== null &&
            (bt
              ? ((e = Fe),
                (r = r.stateNode),
                e.nodeType === 8
                  ? kc(e.parentNode, r)
                  : e.nodeType === 1 && kc(e, r),
                Tl(e))
              : kc(Fe, r.stateNode));
          break;
        case 4:
          (n = Fe),
            (a = bt),
            (Fe = r.stateNode.containerInfo),
            (bt = !0),
            nn(e, t, r),
            (Fe = n),
            (bt = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !Ve &&
            ((n = r.updateQueue),
            n !== null && ((n = n.lastEffect), n !== null))
          ) {
            a = n = n.next;
            do {
              var o = a,
                l = o.destroy;
              (o = o.tag),
                l !== void 0 && (o & 2 || o & 4) && xp(r, t, l),
                (a = a.next);
            } while (a !== n);
          }
          nn(e, t, r);
          break;
        case 1:
          if (
            !Ve &&
            (Xa(r, t),
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
          nn(e, t, r);
          break;
        case 21:
          nn(e, t, r);
          break;
        case 22:
          r.mode & 1
            ? ((Ve = (n = Ve) || r.memoizedState !== null),
              nn(e, t, r),
              (Ve = n))
            : nn(e, t, r);
          break;
        default:
          nn(e, t, r);
      }
    }
    function Xv(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new n2()),
          t.forEach(function (n) {
            var a = p2.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(a, a));
          });
      }
    }
    function Yt(e, t) {
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
                  (Fe = u.stateNode), (bt = !1);
                  break e;
                case 3:
                  (Fe = u.stateNode.containerInfo), (bt = !0);
                  break e;
                case 4:
                  (Fe = u.stateNode.containerInfo), (bt = !0);
                  break e;
              }
              u = u.return;
            }
            if (Fe === null) throw Error(k(160));
            j1(o, l, a), (Fe = null), (bt = !1);
            var i = a.alternate;
            i !== null && (i.return = null), (a.return = null);
          } catch (f) {
            fe(a, t, f);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) W1(t, e), (t = t.sibling);
    }
    function W1(e, t) {
      var r = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Yt(t, e), gr(e), n & 4)) {
            try {
              Ll(3, e, e.return), td(3, e);
            } catch (v) {
              fe(e, e.return, v);
            }
            try {
              Ll(5, e, e.return);
            } catch (v) {
              fe(e, e.return, v);
            }
          }
          break;
        case 1:
          Yt(t, e), gr(e), n & 512 && r !== null && Xa(r, r.return);
          break;
        case 5:
          if (
            (Yt(t, e),
            gr(e),
            n & 512 && r !== null && Xa(r, r.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              Il(a, "");
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
                  d0(a, o),
                  qc(u, l);
                var f = qc(u, o);
                for (l = 0; l < i.length; l += 2) {
                  var p = i[l],
                    h = i[l + 1];
                  p === "style"
                    ? h0(a, h)
                    : p === "dangerouslySetInnerHTML"
                    ? p0(a, h)
                    : p === "children"
                    ? Il(a, h)
                    : Mp(a, p, h, f);
                }
                switch (u) {
                  case "input":
                    Vc(a, o);
                    break;
                  case "textarea":
                    f0(a, o);
                    break;
                  case "select":
                    var m = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var y = o.value;
                    y != null
                      ? Ya(a, !!o.multiple, y, !1)
                      : m !== !!o.multiple &&
                        (o.defaultValue != null
                          ? Ya(a, !!o.multiple, o.defaultValue, !0)
                          : Ya(a, !!o.multiple, o.multiple ? [] : "", !1));
                }
                a[Al] = o;
              } catch (v) {
                fe(e, e.return, v);
              }
          }
          break;
        case 6:
          if ((Yt(t, e), gr(e), n & 4)) {
            if (e.stateNode === null) throw Error(k(162));
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
            (Yt(t, e),
            gr(e),
            n & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Tl(t.containerInfo);
            } catch (v) {
              fe(e, e.return, v);
            }
          break;
        case 4:
          Yt(t, e), gr(e);
          break;
        case 13:
          Yt(t, e),
            gr(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (im = me())),
            n & 4 && Xv(e);
          break;
        case 22:
          if (
            ((p = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((Ve = (f = Ve) || p), Yt(t, e), (Ve = f)) : Yt(t, e),
            gr(e),
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
                      Ll(4, m, m.return);
                      break;
                    case 1:
                      Xa(m, m.return);
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
                      Xa(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        Yv(h);
                        continue;
                      }
                  }
                  y !== null ? ((y.return = m), (D = y)) : Yv(h);
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
                          (u.style.display = m0("display", l)));
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
          Yt(t, e), gr(e), n & 4 && Xv(e);
          break;
        case 21:
          break;
        default:
          Yt(t, e), gr(e);
      }
    }
    function gr(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null; ) {
              if (V1(r)) {
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
              n.flags & 32 && (Il(a, ""), (n.flags &= -33));
              var o = Kv(e);
              Sp(e, o, a);
              break;
            case 3:
            case 4:
              var l = n.stateNode.containerInfo,
                u = Kv(e);
              wp(e, u, l);
              break;
            default:
              throw Error(k(161));
          }
        } catch (i) {
          fe(e, e.return, i);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function o2(e, t, r) {
      (D = e), $1(e, t, r);
    }
    function $1(e, t, r) {
      for (var n = (e.mode & 1) !== 0; D !== null; ) {
        var a = D,
          o = a.child;
        if (a.tag === 22 && n) {
          var l = a.memoizedState !== null || fs;
          if (!l) {
            var u = a.alternate,
              i = (u !== null && u.memoizedState !== null) || Ve;
            u = fs;
            var f = Ve;
            if (((fs = l), (Ve = i) && !f))
              for (D = a; D !== null; )
                (l = D),
                  (i = l.child),
                  l.tag === 22 && l.memoizedState !== null
                    ? Jv(a)
                    : i !== null
                    ? ((i.return = l), (D = i))
                    : Jv(a);
            for (; o !== null; ) (D = o), $1(o, t, r), (o = o.sibling);
            (D = a), (fs = u), (Ve = f);
          }
          Zv(e, t, r);
        } else
          a.subtreeFlags & 8772 && o !== null
            ? ((o.return = a), (D = o))
            : Zv(e, t, r);
      }
    }
    function Zv(e) {
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
                  Ve || td(5, t);
                  break;
                case 1:
                  var n = t.stateNode;
                  if (t.flags & 4 && !Ve)
                    if (r === null) n.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? r.memoizedProps
                          : Jt(t.type, r.memoizedProps);
                      n.componentDidUpdate(
                        a,
                        r.memoizedState,
                        n.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var o = t.updateQueue;
                  o !== null && Av(t, o, n);
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
                    Av(t, l, r);
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
                        h !== null && Tl(h);
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
            Ve || (t.flags & 512 && Lp(t));
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
    function Yv(e) {
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
    function Jv(e) {
      for (; D !== null; ) {
        var t = D;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                td(4, t);
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
                Lp(t);
              } catch (i) {
                fe(t, o, i);
              }
              break;
            case 5:
              var l = t.return;
              try {
                Lp(t);
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
    var l2 = Math.ceil,
      js = Wr.ReactCurrentDispatcher,
      lm = Wr.ReactCurrentOwner,
      Ut = Wr.ReactCurrentBatchConfig,
      B = 0,
      ke = null,
      ye = null,
      De = 0,
      wt = 0,
      Za = Sn(0),
      Le = 0,
      Ul = null,
      ia = 0,
      rd = 0,
      um = 0,
      wl = null,
      st = null,
      im = 0,
      so = 1 / 0,
      _r = null,
      Ws = !1,
      Cp = null,
      gn = null,
      cs = !1,
      dn = null,
      $s = 0,
      Sl = 0,
      Ip = null,
      Ls = -1,
      ws = 0;
    function tt() {
      return B & 6 ? me() : Ls !== -1 ? Ls : (Ls = me());
    }
    function yn(e) {
      return e.mode & 1
        ? B & 2 && De !== 0
          ? De & -De
          : Wk.transition !== null
          ? (ws === 0 && (ws = E0()), ws)
          : ((e = j),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : _0(e.type))),
            e)
        : 1;
    }
    function rr(e, t, r, n) {
      if (50 < Sl) throw ((Sl = 0), (Ip = null), Error(k(185)));
      Hl(e, r, n),
        (!(B & 2) || e !== ke) &&
          (e === ke && (!(B & 2) && (rd |= r), Le === 4 && un(e, De)),
          pt(e, n),
          r === 1 &&
            B === 0 &&
            !(t.mode & 1) &&
            ((so = me() + 500), Js && Cn()));
    }
    function pt(e, t) {
      var r = e.callbackNode;
      GI(e, t);
      var n = Es(e, e === ke ? De : 0);
      if (n === 0)
        r !== null && lv(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = n & -n), e.callbackPriority !== t)) {
        if ((r != null && lv(r), t === 1))
          e.tag === 0 ? jk(bv.bind(null, e)) : b0(bv.bind(null, e)),
            Ok(function () {
              !(B & 6) && Cn();
            }),
            (r = null);
        else {
          switch (T0(n)) {
            case 1:
              r = _p;
              break;
            case 4:
              r = k0;
              break;
            case 16:
              r = Ps;
              break;
            case 536870912:
              r = P0;
              break;
            default:
              r = Ps;
          }
          r = J1(r, G1.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function G1(e, t) {
      if (((Ls = -1), (ws = 0), B & 6)) throw Error(k(327));
      var r = e.callbackNode;
      if (ro() && e.callbackNode !== r) return null;
      var n = Es(e, e === ke ? De : 0);
      if (n === 0) return null;
      if (n & 30 || n & e.expiredLanes || t) t = Gs(e, n);
      else {
        t = n;
        var a = B;
        B |= 2;
        var o = Q1();
        (ke !== e || De !== t) && ((_r = null), (so = me() + 500), na(e, t));
        do
          try {
            s2();
            break;
          } catch (u) {
            q1(e, u);
          }
        while (!0);
        Qp(),
          (js.current = o),
          (B = a),
          ye !== null ? (t = 0) : ((ke = null), (De = 0), (t = Le));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Yc(e)), a !== 0 && ((n = a), (t = kp(e, a)))),
          t === 1)
        )
          throw ((r = Ul), na(e, 0), un(e, n), pt(e, me()), r);
        if (t === 6) un(e, n);
        else {
          if (
            ((a = e.current.alternate),
            !(n & 30) &&
              !u2(a) &&
              ((t = Gs(e, n)),
              t === 2 && ((o = Yc(e)), o !== 0 && ((n = o), (t = kp(e, o)))),
              t === 1))
          )
            throw ((r = Ul), na(e, 0), un(e, n), pt(e, me()), r);
          switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
            case 0:
            case 1:
              throw Error(k(345));
            case 2:
              bn(e, st, _r);
              break;
            case 3:
              if (
                (un(e, n),
                (n & 130023424) === n && ((t = im + 500 - me()), 10 < t))
              ) {
                if (Es(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & n) !== n)) {
                  tt(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = op(bn.bind(null, e, st, _r), t);
                break;
              }
              bn(e, st, _r);
              break;
            case 4:
              if ((un(e, n), (n & 4194240) === n)) break;
              for (t = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - tr(n);
                (o = 1 << l), (l = t[l]), l > a && (a = l), (n &= ~o);
              }
              if (
                ((n = a),
                (n = me() - n),
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
                    : 1960 * l2(n / 1960)) - n),
                10 < n)
              ) {
                e.timeoutHandle = op(bn.bind(null, e, st, _r), n);
                break;
              }
              bn(e, st, _r);
              break;
            case 5:
              bn(e, st, _r);
              break;
            default:
              throw Error(k(329));
          }
        }
      }
      return pt(e, me()), e.callbackNode === r ? G1.bind(null, e) : null;
    }
    function kp(e, t) {
      var r = wl;
      return (
        e.current.memoizedState.isDehydrated && (na(e, t).flags |= 256),
        (e = Gs(e, t)),
        e !== 2 && ((t = st), (st = r), t !== null && Pp(t)),
        e
      );
    }
    function Pp(e) {
      st === null ? (st = e) : st.push.apply(st, e);
    }
    function u2(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && ((r = r.stores), r !== null))
            for (var n = 0; n < r.length; n++) {
              var a = r[n],
                o = a.getSnapshot;
              a = a.value;
              try {
                if (!nr(o(), a)) return !1;
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
    function un(e, t) {
      for (
        t &= ~um,
          t &= ~rd,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var r = 31 - tr(t),
          n = 1 << r;
        (e[r] = -1), (t &= ~n);
      }
    }
    function bv(e) {
      if (B & 6) throw Error(k(327));
      ro();
      var t = Es(e, 0);
      if (!(t & 1)) return pt(e, me()), null;
      var r = Gs(e, t);
      if (e.tag !== 0 && r === 2) {
        var n = Yc(e);
        n !== 0 && ((t = n), (r = kp(e, n)));
      }
      if (r === 1) throw ((r = Ul), na(e, 0), un(e, t), pt(e, me()), r);
      if (r === 6) throw Error(k(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        bn(e, st, _r),
        pt(e, me()),
        null
      );
    }
    function sm(e, t) {
      var r = B;
      B |= 1;
      try {
        return e(t);
      } finally {
        (B = r), B === 0 && ((so = me() + 500), Js && Cn());
      }
    }
    function sa(e) {
      dn !== null && dn.tag === 0 && !(B & 6) && ro();
      var t = B;
      B |= 1;
      var r = Ut.transition,
        n = j;
      try {
        if (((Ut.transition = null), (j = 1), e)) return e();
      } finally {
        (j = n), (Ut.transition = r), (B = t), !(B & 6) && Cn();
      }
    }
    function dm() {
      (wt = Za.current), J(Za);
    }
    function na(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var r = e.timeoutHandle;
      if ((r !== -1 && ((e.timeoutHandle = -1), Bk(r)), ye !== null))
        for (r = ye.return; r !== null; ) {
          var n = r;
          switch (($p(n), n.tag)) {
            case 1:
              (n = n.type.childContextTypes), n != null && Rs();
              break;
            case 3:
              uo(), J(ft), J(je), bp();
              break;
            case 5:
              Jp(n);
              break;
            case 4:
              uo();
              break;
            case 13:
              J(ne);
              break;
            case 19:
              J(ne);
              break;
            case 10:
              Kp(n.type._context);
              break;
            case 22:
            case 23:
              dm();
          }
          r = r.return;
        }
      if (
        ((ke = e),
        (ye = e = vn(e.current, null)),
        (De = wt = t),
        (Le = 0),
        (Ul = null),
        (um = rd = ia = 0),
        (st = wl = null),
        ta !== null)
      ) {
        for (t = 0; t < ta.length; t++)
          if (((r = ta[t]), (n = r.interleaved), n !== null)) {
            r.interleaved = null;
            var a = n.next,
              o = r.pending;
            if (o !== null) {
              var l = o.next;
              (o.next = a), (n.next = l);
            }
            r.pending = n;
          }
        ta = null;
      }
      return e;
    }
    function q1(e, t) {
      do {
        var r = ye;
        try {
          if ((Qp(), (ys.current = Vs), Hs)) {
            for (var n = ae.memoizedState; n !== null; ) {
              var a = n.queue;
              a !== null && (a.pending = null), (n = n.next);
            }
            Hs = !1;
          }
          if (
            ((ua = 0),
            (Ie = xe = ae = null),
            (xl = !1),
            (Nl = 0),
            (lm.current = null),
            r === null || r.return === null)
          ) {
            (Le = 1), (Ul = t), (ye = null);
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
              var y = Hv(l);
              if (y !== null) {
                (y.flags &= -257),
                  Vv(y, l, u, o, t),
                  y.mode & 1 && Uv(o, f, t),
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
                  Uv(o, f, t), fm();
                  break e;
                }
                i = Error(k(426));
              }
            } else if (te && u.mode & 1) {
              var T = Hv(l);
              if (T !== null) {
                !(T.flags & 65536) && (T.flags |= 256),
                  Vv(T, l, u, o, t),
                  Gp(io(i, u));
                break e;
              }
            }
            (o = i = io(i, u)),
              Le !== 4 && (Le = 2),
              wl === null ? (wl = [o]) : wl.push(o),
              (o = l);
            do {
              switch (o.tag) {
                case 3:
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var d = M1(o, i, t);
                  Rv(o, d);
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
                        (gn === null || !gn.has(c))))
                  ) {
                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                    var g = F1(o, u, t);
                    Rv(o, g);
                    break e;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          X1(r);
        } catch (L) {
          (t = L), ye === r && r !== null && (ye = r = r.return);
          continue;
        }
        break;
      } while (!0);
    }
    function Q1() {
      var e = js.current;
      return (js.current = Vs), e === null ? Vs : e;
    }
    function fm() {
      (Le === 0 || Le === 3 || Le === 2) && (Le = 4),
        ke === null || (!(ia & 268435455) && !(rd & 268435455)) || un(ke, De);
    }
    function Gs(e, t) {
      var r = B;
      B |= 2;
      var n = Q1();
      (ke !== e || De !== t) && ((_r = null), na(e, t));
      do
        try {
          i2();
          break;
        } catch (a) {
          q1(e, a);
        }
      while (!0);
      if ((Qp(), (B = r), (js.current = n), ye !== null)) throw Error(k(261));
      return (ke = null), (De = 0), Le;
    }
    function i2() {
      for (; ye !== null; ) K1(ye);
    }
    function s2() {
      for (; ye !== null && !NI(); ) K1(ye);
    }
    function K1(e) {
      var t = Y1(e.alternate, e, wt);
      (e.memoizedProps = e.pendingProps),
        t === null ? X1(e) : (ye = t),
        (lm.current = null);
    }
    function X1(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((r = r2(r, t)), r !== null)) {
            (r.flags &= 32767), (ye = r);
            return;
          }
          if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (Le = 6), (ye = null);
            return;
          }
        } else if (((r = t2(r, t, wt)), r !== null)) {
          ye = r;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          ye = t;
          return;
        }
        ye = t = e;
      } while (t !== null);
      Le === 0 && (Le = 5);
    }
    function bn(e, t, r) {
      var n = j,
        a = Ut.transition;
      try {
        (Ut.transition = null), (j = 1), d2(e, t, r, n);
      } finally {
        (Ut.transition = a), (j = n);
      }
      return null;
    }
    function d2(e, t, r, n) {
      do ro();
      while (dn !== null);
      if (B & 6) throw Error(k(327));
      r = e.finishedWork;
      var a = e.finishedLanes;
      if (r === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(k(177));
      (e.callbackNode = null), (e.callbackPriority = 0);
      var o = r.lanes | r.childLanes;
      if (
        (qI(e, o),
        e === ke && ((ye = ke = null), (De = 0)),
        (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
          cs ||
          ((cs = !0),
          J1(Ps, function () {
            return ro(), null;
          })),
        (o = (r.flags & 15990) !== 0),
        r.subtreeFlags & 15990 || o)
      ) {
        (o = Ut.transition), (Ut.transition = null);
        var l = j;
        j = 1;
        var u = B;
        (B |= 4),
          (lm.current = null),
          a2(e, r),
          W1(r, e),
          Rk(np),
          (Ts = !!rp),
          (np = rp = null),
          (e.current = r),
          o2(r, e, a),
          BI(),
          (B = u),
          (j = l),
          (Ut.transition = o);
      } else e.current = r;
      if (
        (cs && ((cs = !1), (dn = e), ($s = a)),
        (o = e.pendingLanes),
        o === 0 && (gn = null),
        HI(r.stateNode, n),
        pt(e, me()),
        t !== null)
      )
        for (n = e.onRecoverableError, r = 0; r < t.length; r++)
          (a = t[r]), n(a.value, { componentStack: a.stack, digest: a.digest });
      if (Ws) throw ((Ws = !1), (e = Cp), (Cp = null), e);
      return (
        $s & 1 && e.tag !== 0 && ro(),
        (o = e.pendingLanes),
        o & 1 ? (e === Ip ? Sl++ : ((Sl = 0), (Ip = e))) : (Sl = 0),
        Cn(),
        null
      );
    }
    function ro() {
      if (dn !== null) {
        var e = T0($s),
          t = Ut.transition,
          r = j;
        try {
          if (((Ut.transition = null), (j = 16 > e ? 16 : e), dn === null))
            var n = !1;
          else {
            if (((e = dn), (dn = null), ($s = 0), B & 6)) throw Error(k(331));
            var a = B;
            for (B |= 4, D = e.current; D !== null; ) {
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
                          Ll(8, p, o);
                      }
                      var h = p.child;
                      if (h !== null) (h.return = p), (D = h);
                      else
                        for (; D !== null; ) {
                          p = D;
                          var m = p.sibling,
                            y = p.return;
                          if ((H1(p), p === f)) {
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
                        var T = v.sibling;
                        (v.sibling = null), (v = T);
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
                        Ll(9, o, o.return);
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
                          td(9, u);
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
              ((B = a),
              Cn(),
              xr && typeof xr.onPostCommitFiberRoot == "function")
            )
              try {
                xr.onPostCommitFiberRoot(Qs, e);
              } catch {}
            n = !0;
          }
          return n;
        } finally {
          (j = r), (Ut.transition = t);
        }
      }
      return !1;
    }
    function e0(e, t, r) {
      (t = io(r, t)),
        (t = M1(e, t, 1)),
        (e = hn(e, t, 1)),
        (t = tt()),
        e !== null && (Hl(e, 1, t), pt(e, t));
    }
    function fe(e, t, r) {
      if (e.tag === 3) e0(e, e, r);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            e0(t, e, r);
            break;
          } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof n.componentDidCatch == "function" &&
                (gn === null || !gn.has(n)))
            ) {
              (e = io(r, e)),
                (e = F1(t, e, 1)),
                (t = hn(t, e, 1)),
                (e = tt()),
                t !== null && (Hl(t, 1, e), pt(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function f2(e, t, r) {
      var n = e.pingCache;
      n !== null && n.delete(t),
        (t = tt()),
        (e.pingedLanes |= e.suspendedLanes & r),
        ke === e &&
          (De & r) === r &&
          (Le === 4 || (Le === 3 && (De & 130023424) === De && 500 > me() - im)
            ? na(e, 0)
            : (um |= r)),
        pt(e, t);
    }
    function Z1(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Ji), (Ji <<= 1), !(Ji & 130023424) && (Ji = 4194304))
          : (t = 1));
      var r = tt();
      (e = Vr(e, t)), e !== null && (Hl(e, t, r), pt(e, r));
    }
    function c2(e) {
      var t = e.memoizedState,
        r = 0;
      t !== null && (r = t.retryLane), Z1(e, r);
    }
    function p2(e, t) {
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
      n !== null && n.delete(t), Z1(e, r);
    }
    var Y1;
    Y1 = function (e, t, r) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ft.current) dt = !0;
        else {
          if (!(e.lanes & r) && !(t.flags & 128)) return (dt = !1), e2(e, t, r);
          dt = !!(e.flags & 131072);
        }
      else (dt = !1), te && t.flags & 1048576 && e1(t, zs, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var n = t.type;
          xs(e, t), (e = t.pendingProps);
          var a = ao(t, je.current);
          to(t, r), (a = tm(null, t, n, e, a, r));
          var o = rm();
          return (
            (t.flags |= 1),
            typeof a == "object" &&
            a !== null &&
            typeof a.render == "function" &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ct(n) ? ((o = !0), As(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                Zp(t),
                (a.updater = bs),
                (t.stateNode = a),
                (a._reactInternals = t),
                cp(t, n, e, r),
                (t = hp(null, t, n, !0, o, r)))
              : ((t.tag = 0),
                te && o && Wp(t),
                et(null, t, a, r),
                (t = t.child)),
            t
          );
        case 16:
          n = t.elementType;
          e: {
            switch (
              (xs(e, t),
              (e = t.pendingProps),
              (a = n._init),
              (n = a(n._payload)),
              (t.type = n),
              (a = t.tag = h2(n)),
              (e = Jt(n, e)),
              a)
            ) {
              case 0:
                t = mp(null, t, n, e, r);
                break e;
              case 1:
                t = $v(null, t, n, e, r);
                break e;
              case 11:
                t = jv(null, t, n, e, r);
                break e;
              case 14:
                t = Wv(null, t, n, Jt(n.type, e), r);
                break e;
            }
            throw Error(k(306, n, ""));
          }
          return t;
        case 0:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Jt(n, a)),
            mp(e, t, n, a, r)
          );
        case 1:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Jt(n, a)),
            $v(e, t, n, a, r)
          );
        case 3:
          e: {
            if ((_1(t), e === null)) throw Error(k(387));
            (n = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              a1(e, t),
              Os(t, n, null, r);
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
                (a = io(Error(k(423)), t)), (t = Gv(e, t, n, r, a));
                break e;
              } else if (n !== a) {
                (a = io(Error(k(424)), t)), (t = Gv(e, t, n, r, a));
                break e;
              } else
                for (
                  St = mn(t.stateNode.containerInfo.firstChild),
                    Ct = t,
                    te = !0,
                    er = null,
                    r = i1(t, null, n, r),
                    t.child = r;
                  r;

                )
                  (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            else {
              if ((oo(), n === a)) {
                t = jr(e, t, r);
                break e;
              }
              et(e, t, n, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            s1(t),
            e === null && sp(t),
            (n = t.type),
            (a = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (l = a.children),
            ap(n, a) ? (l = null) : o !== null && ap(n, o) && (t.flags |= 32),
            A1(e, t),
            et(e, t, l, r),
            t.child
          );
        case 6:
          return e === null && sp(t), null;
        case 13:
          return z1(e, t, r);
        case 4:
          return (
            Yp(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = lo(t, null, n, r)) : et(e, t, n, r),
            t.child
          );
        case 11:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Jt(n, a)),
            jv(e, t, n, a, r)
          );
        case 7:
          return et(e, t, t.pendingProps, r), t.child;
        case 8:
          return et(e, t, t.pendingProps.children, r), t.child;
        case 12:
          return et(e, t, t.pendingProps.children, r), t.child;
        case 10:
          e: {
            if (
              ((n = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (l = a.value),
              q(Ns, n._currentValue),
              (n._currentValue = l),
              o !== null)
            )
              if (nr(o.value, l)) {
                if (o.children === a.children && !ft.current) {
                  t = jr(e, t, r);
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
                          (i = Or(-1, r & -r)), (i.tag = 2);
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
                          dp(o.return, r, t),
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
                      dp(l, r, t),
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
            et(e, t, a.children, r), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (n = t.pendingProps.children),
            to(t, r),
            (a = Ht(a)),
            (n = n(a)),
            (t.flags |= 1),
            et(e, t, n, r),
            t.child
          );
        case 14:
          return (
            (n = t.type),
            (a = Jt(n, t.pendingProps)),
            (a = Jt(n.type, a)),
            Wv(e, t, n, a, r)
          );
        case 15:
          return D1(e, t, t.type, t.pendingProps, r);
        case 17:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : Jt(n, a)),
            xs(e, t),
            (t.tag = 1),
            ct(n) ? ((e = !0), As(t)) : (e = !1),
            to(t, r),
            l1(t, n, a),
            cp(t, n, a, r),
            hp(null, t, n, !0, e, r)
          );
        case 19:
          return N1(e, t, r);
        case 22:
          return R1(e, t, r);
      }
      throw Error(k(156, t.tag));
    };
    function J1(e, t) {
      return I0(e, t);
    }
    function m2(e, t, r, n) {
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
    function Ot(e, t, r, n) {
      return new m2(e, t, r, n);
    }
    function cm(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function h2(e) {
      if (typeof e == "function") return cm(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === Dp)) return 11;
        if (e === Rp) return 14;
      }
      return 2;
    }
    function vn(e, t) {
      var r = e.alternate;
      return (
        r === null
          ? ((r = Ot(e.tag, t, e.key, e.mode)),
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
    function Ss(e, t, r, n, a, o) {
      var l = 2;
      if (((n = e), typeof e == "function")) cm(e) && (l = 1);
      else if (typeof e == "string") l = 5;
      else
        e: switch (e) {
          case Ha:
            return aa(r.children, a, o, t);
          case Fp:
            (l = 8), (a |= 8);
            break;
          case Nc:
            return (
              (e = Ot(12, r, t, a | 2)), (e.elementType = Nc), (e.lanes = o), e
            );
          case Bc:
            return (
              (e = Ot(13, r, t, a)), (e.elementType = Bc), (e.lanes = o), e
            );
          case Oc:
            return (
              (e = Ot(19, r, t, a)), (e.elementType = Oc), (e.lanes = o), e
            );
          case u0:
            return nd(r, a, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case o0:
                  l = 10;
                  break e;
                case l0:
                  l = 9;
                  break e;
                case Dp:
                  l = 11;
                  break e;
                case Rp:
                  l = 14;
                  break e;
                case an:
                  (l = 16), (n = null);
                  break e;
              }
            throw Error(k(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = Ot(l, r, t, a)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = o),
        t
      );
    }
    function aa(e, t, r, n) {
      return (e = Ot(7, e, n, t)), (e.lanes = r), e;
    }
    function nd(e, t, r, n) {
      return (
        (e = Ot(22, e, n, t)),
        (e.elementType = u0),
        (e.lanes = r),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function Ac(e, t, r) {
      return (e = Ot(6, e, null, t)), (e.lanes = r), e;
    }
    function _c(e, t, r) {
      return (
        (t = Ot(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function g2(e, t, r, n, a) {
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
        (this.eventTimes = yc(0)),
        (this.expirationTimes = yc(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = yc(0)),
        (this.identifierPrefix = n),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function pm(e, t, r, n, a, o, l, u, i) {
      return (
        (e = new g2(e, t, r, u, i)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Ot(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
          element: n,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Zp(o),
        e
      );
    }
    function y2(e, t, r) {
      var n =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Ua,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r,
      };
    }
    function b1(e) {
      if (!e) return Ln;
      e = e._reactInternals;
      e: {
        if (fa(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (ct(t.type)) {
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
        if (ct(r)) return J0(e, r, t);
      }
      return t;
    }
    function ex(e, t, r, n, a, o, l, u, i) {
      return (
        (e = pm(r, n, !0, e, a, o, l, u, i)),
        (e.context = b1(null)),
        (r = e.current),
        (n = tt()),
        (a = yn(r)),
        (o = Or(n, a)),
        (o.callback = t ?? null),
        hn(r, o, a),
        (e.current.lanes = a),
        Hl(e, a, n),
        pt(e, n),
        e
      );
    }
    function ad(e, t, r, n) {
      var a = t.current,
        o = tt(),
        l = yn(a);
      return (
        (r = b1(r)),
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Or(o, l)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        (e = hn(a, t, l)),
        e !== null && (rr(e, a, l, o), gs(e, a, l)),
        l
      );
    }
    function qs(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function t0(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function mm(e, t) {
      t0(e, t), (e = e.alternate) && t0(e, t);
    }
    function v2() {
      return null;
    }
    var tx =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function hm(e) {
      this._internalRoot = e;
    }
    od.prototype.render = hm.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(k(409));
      ad(e, t, null, null);
    };
    od.prototype.unmount = hm.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        sa(function () {
          ad(null, e, null, null);
        }),
          (t[Hr] = null);
      }
    };
    function od(e) {
      this._internalRoot = e;
    }
    od.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = D0();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < ln.length && t !== 0 && t < ln[r].priority; r++);
        ln.splice(r, 0, e), r === 0 && A0(e);
      }
    };
    function gm(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function ld(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function r0() {}
    function x2(e, t, r, n, a) {
      if (a) {
        if (typeof n == "function") {
          var o = n;
          n = function () {
            var f = qs(l);
            o.call(f);
          };
        }
        var l = ex(t, n, e, 0, null, !1, !1, "", r0);
        return (
          (e._reactRootContainer = l),
          (e[Hr] = l.current),
          Dl(e.nodeType === 8 ? e.parentNode : e),
          sa(),
          l
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if (typeof n == "function") {
        var u = n;
        n = function () {
          var f = qs(i);
          u.call(f);
        };
      }
      var i = pm(e, 0, !1, null, null, !1, !1, "", r0);
      return (
        (e._reactRootContainer = i),
        (e[Hr] = i.current),
        Dl(e.nodeType === 8 ? e.parentNode : e),
        sa(function () {
          ad(t, i, r, n);
        }),
        i
      );
    }
    function ud(e, t, r, n, a) {
      var o = r._reactRootContainer;
      if (o) {
        var l = o;
        if (typeof a == "function") {
          var u = a;
          a = function () {
            var i = qs(l);
            u.call(i);
          };
        }
        ad(t, l, e, a);
      } else l = x2(r, t, e, a, n);
      return qs(l);
    }
    M0 = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = cl(t.pendingLanes);
            r !== 0 &&
              (zp(t, r | 1),
              pt(t, me()),
              !(B & 6) && ((so = me() + 500), Cn()));
          }
          break;
        case 13:
          sa(function () {
            var n = Vr(e, 1);
            if (n !== null) {
              var a = tt();
              rr(n, e, 1, a);
            }
          }),
            mm(e, 1);
      }
    };
    Np = function (e) {
      if (e.tag === 13) {
        var t = Vr(e, 134217728);
        if (t !== null) {
          var r = tt();
          rr(t, e, 134217728, r);
        }
        mm(e, 134217728);
      }
    };
    F0 = function (e) {
      if (e.tag === 13) {
        var t = yn(e),
          r = Vr(e, t);
        if (r !== null) {
          var n = tt();
          rr(r, e, t, n);
        }
        mm(e, t);
      }
    };
    D0 = function () {
      return j;
    };
    R0 = function (e, t) {
      var r = j;
      try {
        return (j = e), t();
      } finally {
        j = r;
      }
    };
    Kc = function (e, t, r) {
      switch (t) {
        case "input":
          if ((Vc(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
                var a = Ys(n);
                if (!a) throw Error(k(90));
                s0(n), Vc(n, a);
              }
            }
          }
          break;
        case "textarea":
          f0(e, r);
          break;
        case "select":
          (t = r.value), t != null && Ya(e, !!r.multiple, t, !1);
      }
    };
    v0 = sm;
    x0 = sa;
    var L2 = { usingClientEntryPoint: !1, Events: [jl, $a, Ys, g0, y0, sm] },
      il = {
        findFiberByHostInstance: ea,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      w2 = {
        bundleType: il.bundleType,
        version: il.version,
        rendererPackageName: il.rendererPackageName,
        rendererConfig: il.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Wr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = S0(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: il.findFiberByHostInstance || v2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((sl = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !sl.isDisabled && sl.supportsFiber)
    )
      try {
        (Qs = sl.inject(w2)), (xr = sl);
      } catch {}
    var sl;
    Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L2;
    Pt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!gm(t)) throw Error(k(200));
      return y2(e, t, null, r);
    };
    Pt.createRoot = function (e, t) {
      if (!gm(e)) throw Error(k(299));
      var r = !1,
        n = "",
        a = tx;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = pm(e, 1, !1, null, null, r, !1, n, a)),
        (e[Hr] = t.current),
        Dl(e.nodeType === 8 ? e.parentNode : e),
        new hm(t)
      );
    };
    Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(k(188))
          : ((e = Object.keys(e).join(",")), Error(k(268, e)));
      return (e = S0(t)), (e = e === null ? null : e.stateNode), e;
    };
    Pt.flushSync = function (e) {
      return sa(e);
    };
    Pt.hydrate = function (e, t, r) {
      if (!ld(t)) throw Error(k(200));
      return ud(null, e, t, !0, r);
    };
    Pt.hydrateRoot = function (e, t, r) {
      if (!gm(e)) throw Error(k(405));
      var n = (r != null && r.hydratedSources) || null,
        a = !1,
        o = "",
        l = tx;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
        (t = ex(t, null, e, 1, r ?? null, a, !1, o, l)),
        (e[Hr] = t.current),
        Dl(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          (r = n[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new od(t);
    };
    Pt.render = function (e, t, r) {
      if (!ld(t)) throw Error(k(200));
      return ud(null, e, t, !1, r);
    };
    Pt.unmountComponentAtNode = function (e) {
      if (!ld(e)) throw Error(k(40));
      return e._reactRootContainer
        ? (sa(function () {
            ud(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Hr] = null);
            });
          }),
          !0)
        : !1;
    };
    Pt.unstable_batchedUpdates = sm;
    Pt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!ld(r)) throw Error(k(200));
      if (e == null || e._reactInternals === void 0) throw Error(k(38));
      return ud(e, t, r, !1, n);
    };
    Pt.version = "18.2.0-next-9e3b772b8-20220608";
  });
  var ox = Ze((qE, ax) => {
    "use strict";
    function nx() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx);
        } catch (e) {
          console.error(e);
        }
    }
    nx(), (ax.exports = rx());
  });
  var fx = Ze((dx) => {
    "use strict";
    var mo = Xt();
    function A2(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var _2 = typeof Object.is == "function" ? Object.is : A2,
      z2 = mo.useState,
      N2 = mo.useEffect,
      B2 = mo.useLayoutEffect,
      O2 = mo.useDebugValue;
    function U2(e, t) {
      var r = t(),
        n = z2({ inst: { value: r, getSnapshot: t } }),
        a = n[0].inst,
        o = n[1];
      return (
        B2(
          function () {
            (a.value = r), (a.getSnapshot = t), Lm(a) && o({ inst: a });
          },
          [e, r, t]
        ),
        N2(
          function () {
            return (
              Lm(a) && o({ inst: a }),
              e(function () {
                Lm(a) && o({ inst: a });
              })
            );
          },
          [e]
        ),
        O2(r),
        r
      );
    }
    function Lm(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !_2(e, r);
      } catch {
        return !0;
      }
    }
    function H2(e, t) {
      return t();
    }
    var V2 =
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
        ? H2
        : U2;
    dx.useSyncExternalStore =
      mo.useSyncExternalStore !== void 0 ? mo.useSyncExternalStore : V2;
  });
  var px = Ze((fM, cx) => {
    "use strict";
    cx.exports = fx();
  });
  var Wx = Ze((Q) => {
    "use strict";
    function Um(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r; ) {
        var n = (r - 1) >>> 1,
          a = e[n];
        if (0 < yd(a, t)) (e[n] = t), (e[r] = a), (r = n);
        else break e;
      }
    }
    function or(e) {
      return e.length === 0 ? null : e[0];
    }
    function xd(e) {
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
          if (0 > yd(u, r))
            i < a && 0 > yd(f, u)
              ? ((e[n] = f), (e[i] = r), (n = i))
              : ((e[n] = u), (e[l] = r), (n = l));
          else if (i < a && 0 > yd(f, r)) (e[n] = f), (e[i] = r), (n = i);
          else break e;
        }
      }
      return t;
    }
    function yd(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((_x = performance),
        (Q.unstable_now = function () {
          return _x.now();
        }))
      : ((Nm = Date),
        (zx = Nm.now()),
        (Q.unstable_now = function () {
          return Nm.now() - zx;
        }));
    var _x,
      Nm,
      zx,
      Cr = [],
      Pn = [],
      gP = 1,
      jt = null,
      We = 3,
      Ld = !1,
      ca = !1,
      Hu = !1,
      Ox = typeof setTimeout == "function" ? setTimeout : null,
      Ux = typeof clearTimeout == "function" ? clearTimeout : null,
      Nx = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Hm(e) {
      for (var t = or(Pn); t !== null; ) {
        if (t.callback === null) xd(Pn);
        else if (t.startTime <= e)
          xd(Pn), (t.sortIndex = t.expirationTime), Um(Cr, t);
        else break;
        t = or(Pn);
      }
    }
    function Vm(e) {
      if (((Hu = !1), Hm(e), !ca))
        if (or(Cr) !== null) (ca = !0), Wm(jm);
        else {
          var t = or(Pn);
          t !== null && $m(Vm, t.startTime - e);
        }
    }
    function jm(e, t) {
      (ca = !1), Hu && ((Hu = !1), Ux(Vu), (Vu = -1)), (Ld = !0);
      var r = We;
      try {
        for (
          Hm(t), jt = or(Cr);
          jt !== null && (!(jt.expirationTime > t) || (e && !jx()));

        ) {
          var n = jt.callback;
          if (typeof n == "function") {
            (jt.callback = null), (We = jt.priorityLevel);
            var a = n(jt.expirationTime <= t);
            (t = Q.unstable_now()),
              typeof a == "function"
                ? (jt.callback = a)
                : jt === or(Cr) && xd(Cr),
              Hm(t);
          } else xd(Cr);
          jt = or(Cr);
        }
        if (jt !== null) var o = !0;
        else {
          var l = or(Pn);
          l !== null && $m(Vm, l.startTime - t), (o = !1);
        }
        return o;
      } finally {
        (jt = null), (We = r), (Ld = !1);
      }
    }
    var wd = !1,
      vd = null,
      Vu = -1,
      Hx = 5,
      Vx = -1;
    function jx() {
      return !(Q.unstable_now() - Vx < Hx);
    }
    function Bm() {
      if (vd !== null) {
        var e = Q.unstable_now();
        Vx = e;
        var t = !0;
        try {
          t = vd(!0, e);
        } finally {
          t ? Uu() : ((wd = !1), (vd = null));
        }
      } else wd = !1;
    }
    var Uu;
    typeof Nx == "function"
      ? (Uu = function () {
          Nx(Bm);
        })
      : typeof MessageChannel < "u"
      ? ((Om = new MessageChannel()),
        (Bx = Om.port2),
        (Om.port1.onmessage = Bm),
        (Uu = function () {
          Bx.postMessage(null);
        }))
      : (Uu = function () {
          Ox(Bm, 0);
        });
    var Om, Bx;
    function Wm(e) {
      (vd = e), wd || ((wd = !0), Uu());
    }
    function $m(e, t) {
      Vu = Ox(function () {
        e(Q.unstable_now());
      }, t);
    }
    Q.unstable_IdlePriority = 5;
    Q.unstable_ImmediatePriority = 1;
    Q.unstable_LowPriority = 4;
    Q.unstable_NormalPriority = 3;
    Q.unstable_Profiling = null;
    Q.unstable_UserBlockingPriority = 2;
    Q.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    Q.unstable_continueExecution = function () {
      ca || Ld || ((ca = !0), Wm(jm));
    };
    Q.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Hx = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    Q.unstable_getCurrentPriorityLevel = function () {
      return We;
    };
    Q.unstable_getFirstCallbackNode = function () {
      return or(Cr);
    };
    Q.unstable_next = function (e) {
      switch (We) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = We;
      }
      var r = We;
      We = t;
      try {
        return e();
      } finally {
        We = r;
      }
    };
    Q.unstable_pauseExecution = function () {};
    Q.unstable_requestPaint = function () {};
    Q.unstable_runWithPriority = function (e, t) {
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
      var r = We;
      We = e;
      try {
        return t();
      } finally {
        We = r;
      }
    };
    Q.unstable_scheduleCallback = function (e, t, r) {
      var n = Q.unstable_now();
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
          id: gP++,
          callback: t,
          priorityLevel: e,
          startTime: r,
          expirationTime: a,
          sortIndex: -1,
        }),
        r > n
          ? ((e.sortIndex = r),
            Um(Pn, e),
            or(Cr) === null &&
              e === or(Pn) &&
              (Hu ? (Ux(Vu), (Vu = -1)) : (Hu = !0), $m(Vm, r - n)))
          : ((e.sortIndex = a), Um(Cr, e), ca || Ld || ((ca = !0), Wm(jm))),
        e
      );
    };
    Q.unstable_shouldYield = jx;
    Q.unstable_wrapCallback = function (e) {
      var t = We;
      return function () {
        var r = We;
        We = t;
        try {
          return e.apply(this, arguments);
        } finally {
          We = r;
        }
      };
    };
  });
  var Gx = Ze((zM, $x) => {
    "use strict";
    $x.exports = Wx();
  });
  var YS = Ze((Rt) => {
    "use strict";
    var JL = Xt(),
      Ft = Gx();
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
    var bL = new Set(),
      si = {};
    function ka(e, t) {
      Oo(e, t), Oo(e + "Capture", t);
    }
    function Oo(e, t) {
      for (si[e] = t, e = 0; e < t.length; e++) bL.add(t[e]);
    }
    var Xr = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      ph = Object.prototype.hasOwnProperty,
      yP =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      qx = {},
      Qx = {};
    function vP(e) {
      return ph.call(Qx, e)
        ? !0
        : ph.call(qx, e)
        ? !1
        : yP.test(e)
        ? (Qx[e] = !0)
        : ((qx[e] = !0), !1);
    }
    function xP(e, t, r, n) {
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
    function LP(e, t, r, n) {
      if (t === null || typeof t > "u" || xP(e, t, r, n)) return !0;
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
    function ot(e, t, r, n, a, o, l) {
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
        ze[e] = new ot(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      ze[t] = new ot(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      ze[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      ze[e] = new ot(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        ze[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      ze[e] = new ot(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      ze[e] = new ot(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      ze[e] = new ot(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      ze[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var og = /[\-:]([a-z])/g;
    function lg(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(og, lg);
        ze[t] = new ot(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(og, lg);
        ze[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(og, lg);
      ze[t] = new ot(
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
      ze[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    ze.xlinkHref = new ot(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      ze[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function ug(e, t, r, n) {
      var a = ze.hasOwnProperty(t) ? ze[t] : null;
      (a !== null
        ? a.type !== 0
        : n ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (LP(t, r, a, n) && (r = null),
        n || a === null
          ? vP(t) &&
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
    var br = JL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Sd = Symbol.for("react.element"),
      Lo = Symbol.for("react.portal"),
      wo = Symbol.for("react.fragment"),
      ig = Symbol.for("react.strict_mode"),
      mh = Symbol.for("react.profiler"),
      ew = Symbol.for("react.provider"),
      tw = Symbol.for("react.context"),
      sg = Symbol.for("react.forward_ref"),
      hh = Symbol.for("react.suspense"),
      gh = Symbol.for("react.suspense_list"),
      dg = Symbol.for("react.memo"),
      Tn = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var rw = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Kx = Symbol.iterator;
    function ju(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Kx && e[Kx]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var se = Object.assign,
      Gm;
    function Zu(e) {
      if (Gm === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          Gm = (t && t[1]) || "";
        }
      return (
        `
` +
        Gm +
        e
      );
    }
    var qm = !1;
    function Qm(e, t) {
      if (!e || qm) return "";
      qm = !0;
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
        (qm = !1), (Error.prepareStackTrace = r);
      }
      return (e = e ? e.displayName || e.name : "") ? Zu(e) : "";
    }
    function wP(e) {
      switch (e.tag) {
        case 5:
          return Zu(e.type);
        case 16:
          return Zu("Lazy");
        case 13:
          return Zu("Suspense");
        case 19:
          return Zu("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = Qm(e.type, !1)), e;
        case 11:
          return (e = Qm(e.type.render, !1)), e;
        case 1:
          return (e = Qm(e.type, !0)), e;
        default:
          return "";
      }
    }
    function yh(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case wo:
          return "Fragment";
        case Lo:
          return "Portal";
        case mh:
          return "Profiler";
        case ig:
          return "StrictMode";
        case hh:
          return "Suspense";
        case gh:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case tw:
            return (e.displayName || "Context") + ".Consumer";
          case ew:
            return (e._context.displayName || "Context") + ".Provider";
          case sg:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case dg:
            return (
              (t = e.displayName || null), t !== null ? t : yh(e.type) || "Memo"
            );
          case Tn:
            (t = e._payload), (e = e._init);
            try {
              return yh(e(t));
            } catch {}
        }
      return null;
    }
    function SP(e) {
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
          return yh(t);
        case 8:
          return t === ig ? "StrictMode" : "Mode";
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
    function jn(e) {
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
    function nw(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function CP(e) {
      var t = nw(e) ? "checked" : "value",
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
    function Cd(e) {
      e._valueTracker || (e._valueTracker = CP(e));
    }
    function aw(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var r = t.getValue(),
        n = "";
      return (
        e && (n = nw(e) ? (e.checked ? "true" : "false") : e.value),
        (e = n),
        e !== r ? (t.setValue(e), !0) : !1
      );
    }
    function Yd(e) {
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
    function vh(e, t) {
      var r = t.checked;
      return se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked,
      });
    }
    function Xx(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue,
        n = t.checked != null ? t.checked : t.defaultChecked;
      (r = jn(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: n,
          initialValue: r,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        });
    }
    function ow(e, t) {
      (t = t.checked), t != null && ug(e, "checked", t, !1);
    }
    function xh(e, t) {
      ow(e, t);
      var r = jn(t.value),
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
        ? Lh(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && Lh(e, t.type, jn(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Zx(e, t, r) {
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
    function Lh(e, t, r) {
      (t !== "number" || Yd(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    var Yu = Array.isArray;
    function Ro(e, t, r, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < r.length; a++) t["$" + r[a]] = !0;
        for (r = 0; r < e.length; r++)
          (a = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== a && (e[r].selected = a),
            a && n && (e[r].defaultSelected = !0);
      } else {
        for (r = "" + jn(r), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === r) {
            (e[a].selected = !0), n && (e[a].defaultSelected = !0);
            return;
          }
          t !== null || e[a].disabled || (t = e[a]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function wh(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
      return se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function Yx(e, t) {
      var r = t.value;
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(P(92));
          if (Yu(r)) {
            if (1 < r.length) throw Error(P(93));
            r = r[0];
          }
          t = r;
        }
        t == null && (t = ""), (r = t);
      }
      e._wrapperState = { initialValue: jn(r) };
    }
    function lw(e, t) {
      var r = jn(t.value),
        n = jn(t.defaultValue);
      r != null &&
        ((r = "" + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        n != null && (e.defaultValue = "" + n);
    }
    function Jx(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function uw(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Sh(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? uw(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Id,
      iw = (function (e) {
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
            Id = Id || document.createElement("div"),
              Id.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = Id.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function di(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var ei = {
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
      IP = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ei).forEach(function (e) {
      IP.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ei[t] = ei[e]);
      });
    });
    function sw(e, t, r) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : r ||
          typeof t != "number" ||
          t === 0 ||
          (ei.hasOwnProperty(e) && ei[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function dw(e, t) {
      e = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var n = r.indexOf("--") === 0,
            a = sw(r, t[r], n);
          r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, a) : (e[r] = a);
        }
    }
    var kP = se(
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
    function Ch(e, t) {
      if (t) {
        if (kP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
    function Ih(e, t) {
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
    var kh = null;
    function fg(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Ph = null,
      Ao = null,
      _o = null;
    function bx(e) {
      if ((e = Ti(e))) {
        if (typeof Ph != "function") throw Error(P(280));
        var t = e.stateNode;
        t && ((t = Pf(t)), Ph(e.stateNode, e.type, t));
      }
    }
    function fw(e) {
      Ao ? (_o ? _o.push(e) : (_o = [e])) : (Ao = e);
    }
    function cw() {
      if (Ao) {
        var e = Ao,
          t = _o;
        if (((_o = Ao = null), bx(e), t))
          for (e = 0; e < t.length; e++) bx(t[e]);
      }
    }
    function pw(e, t) {
      return e(t);
    }
    function mw() {}
    var Km = !1;
    function hw(e, t, r) {
      if (Km) return e(t, r);
      Km = !0;
      try {
        return pw(e, t, r);
      } finally {
        (Km = !1), (Ao !== null || _o !== null) && (mw(), cw());
      }
    }
    function fi(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var n = Pf(r);
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
    var Eh = !1;
    if (Xr)
      try {
        (vo = {}),
          Object.defineProperty(vo, "passive", {
            get: function () {
              Eh = !0;
            },
          }),
          window.addEventListener("test", vo, vo),
          window.removeEventListener("test", vo, vo);
      } catch {
        Eh = !1;
      }
    var vo;
    function PP(e, t, r, n, a, o, l, u, i) {
      var f = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, f);
      } catch (p) {
        this.onError(p);
      }
    }
    var ti = !1,
      Jd = null,
      bd = !1,
      Th = null,
      EP = {
        onError: function (e) {
          (ti = !0), (Jd = e);
        },
      };
    function TP(e, t, r, n, a, o, l, u, i) {
      (ti = !1), (Jd = null), PP.apply(EP, arguments);
    }
    function MP(e, t, r, n, a, o, l, u, i) {
      if ((TP.apply(this, arguments), ti)) {
        if (ti) {
          var f = Jd;
          (ti = !1), (Jd = null);
        } else throw Error(P(198));
        bd || ((bd = !0), (Th = f));
      }
    }
    function Pa(e) {
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
    function gw(e) {
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
    function eL(e) {
      if (Pa(e) !== e) throw Error(P(188));
    }
    function FP(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Pa(e)), t === null)) throw Error(P(188));
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
            if (o === r) return eL(a), e;
            if (o === n) return eL(a), t;
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
    function yw(e) {
      return (e = FP(e)), e !== null ? vw(e) : null;
    }
    function vw(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = vw(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var xw = Ft.unstable_scheduleCallback,
      tL = Ft.unstable_cancelCallback,
      DP = Ft.unstable_shouldYield,
      RP = Ft.unstable_requestPaint,
      ge = Ft.unstable_now,
      AP = Ft.unstable_getCurrentPriorityLevel,
      cg = Ft.unstable_ImmediatePriority,
      Lw = Ft.unstable_UserBlockingPriority,
      ef = Ft.unstable_NormalPriority,
      _P = Ft.unstable_LowPriority,
      ww = Ft.unstable_IdlePriority,
      Sf = null,
      Er = null;
    function zP(e) {
      if (Er && typeof Er.onCommitFiberRoot == "function")
        try {
          Er.onCommitFiberRoot(Sf, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var dr = Math.clz32 ? Math.clz32 : OP,
      NP = Math.log,
      BP = Math.LN2;
    function OP(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((NP(e) / BP) | 0)) | 0;
    }
    var kd = 64,
      Pd = 4194304;
    function Ju(e) {
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
    function tf(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var n = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes,
        l = r & 268435455;
      if (l !== 0) {
        var u = l & ~a;
        u !== 0 ? (n = Ju(u)) : ((o &= l), o !== 0 && (n = Ju(o)));
      } else (l = r & ~a), l !== 0 ? (n = Ju(l)) : o !== 0 && (n = Ju(o));
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
          (r = 31 - dr(t)), (a = 1 << r), (n |= e[r]), (t &= ~a);
      return n;
    }
    function UP(e, t) {
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
    function HP(e, t) {
      for (
        var r = e.suspendedLanes,
          n = e.pingedLanes,
          a = e.expirationTimes,
          o = e.pendingLanes;
        0 < o;

      ) {
        var l = 31 - dr(o),
          u = 1 << l,
          i = a[l];
        i === -1
          ? (!(u & r) || u & n) && (a[l] = UP(u, t))
          : i <= t && (e.expiredLanes |= u),
          (o &= ~u);
      }
    }
    function Mh(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function Sw() {
      var e = kd;
      return (kd <<= 1), !(kd & 4194240) && (kd = 64), e;
    }
    function Xm(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function Pi(e, t, r) {
      (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - dr(t)),
        (e[t] = r);
    }
    function VP(e, t) {
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
        var a = 31 - dr(r),
          o = 1 << a;
        (t[a] = 0), (n[a] = -1), (e[a] = -1), (r &= ~o);
      }
    }
    function pg(e, t) {
      var r = (e.entangledLanes |= t);
      for (e = e.entanglements; r; ) {
        var n = 31 - dr(r),
          a = 1 << n;
        (a & t) | (e[n] & t) && (e[n] |= t), (r &= ~a);
      }
    }
    var W = 0;
    function Cw(e) {
      return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var Iw,
      mg,
      kw,
      Pw,
      Ew,
      Fh = !1,
      Ed = [],
      _n = null,
      zn = null,
      Nn = null,
      ci = new Map(),
      pi = new Map(),
      Fn = [],
      jP =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function rL(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          _n = null;
          break;
        case "dragenter":
        case "dragleave":
          zn = null;
          break;
        case "mouseover":
        case "mouseout":
          Nn = null;
          break;
        case "pointerover":
        case "pointerout":
          ci.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          pi.delete(t.pointerId);
      }
    }
    function Wu(e, t, r, n, a, o) {
      return e === null || e.nativeEvent !== o
        ? ((e = {
            blockedOn: t,
            domEventName: r,
            eventSystemFlags: n,
            nativeEvent: o,
            targetContainers: [a],
          }),
          t !== null && ((t = Ti(t)), t !== null && mg(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          a !== null && t.indexOf(a) === -1 && t.push(a),
          e);
    }
    function WP(e, t, r, n, a) {
      switch (t) {
        case "focusin":
          return (_n = Wu(_n, e, t, r, n, a)), !0;
        case "dragenter":
          return (zn = Wu(zn, e, t, r, n, a)), !0;
        case "mouseover":
          return (Nn = Wu(Nn, e, t, r, n, a)), !0;
        case "pointerover":
          var o = a.pointerId;
          return ci.set(o, Wu(ci.get(o) || null, e, t, r, n, a)), !0;
        case "gotpointercapture":
          return (
            (o = a.pointerId),
            pi.set(o, Wu(pi.get(o) || null, e, t, r, n, a)),
            !0
          );
      }
      return !1;
    }
    function Tw(e) {
      var t = ha(e.target);
      if (t !== null) {
        var r = Pa(t);
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = gw(r)), t !== null)) {
              (e.blockedOn = t),
                Ew(e.priority, function () {
                  kw(r);
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
    function Vd(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var r = Dh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var n = new r.constructor(r.type, r);
          (kh = n), r.target.dispatchEvent(n), (kh = null);
        } else return (t = Ti(r)), t !== null && mg(t), (e.blockedOn = r), !1;
        t.shift();
      }
      return !0;
    }
    function nL(e, t, r) {
      Vd(e) && r.delete(t);
    }
    function $P() {
      (Fh = !1),
        _n !== null && Vd(_n) && (_n = null),
        zn !== null && Vd(zn) && (zn = null),
        Nn !== null && Vd(Nn) && (Nn = null),
        ci.forEach(nL),
        pi.forEach(nL);
    }
    function $u(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Fh ||
          ((Fh = !0),
          Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, $P)));
    }
    function mi(e) {
      function t(a) {
        return $u(a, e);
      }
      if (0 < Ed.length) {
        $u(Ed[0], e);
        for (var r = 1; r < Ed.length; r++) {
          var n = Ed[r];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      for (
        _n !== null && $u(_n, e),
          zn !== null && $u(zn, e),
          Nn !== null && $u(Nn, e),
          ci.forEach(t),
          pi.forEach(t),
          r = 0;
        r < Fn.length;
        r++
      )
        (n = Fn[r]), n.blockedOn === e && (n.blockedOn = null);
      for (; 0 < Fn.length && ((r = Fn[0]), r.blockedOn === null); )
        Tw(r), r.blockedOn === null && Fn.shift();
    }
    var zo = br.ReactCurrentBatchConfig,
      rf = !0;
    function GP(e, t, r, n) {
      var a = W,
        o = zo.transition;
      zo.transition = null;
      try {
        (W = 1), hg(e, t, r, n);
      } finally {
        (W = a), (zo.transition = o);
      }
    }
    function qP(e, t, r, n) {
      var a = W,
        o = zo.transition;
      zo.transition = null;
      try {
        (W = 4), hg(e, t, r, n);
      } finally {
        (W = a), (zo.transition = o);
      }
    }
    function hg(e, t, r, n) {
      if (rf) {
        var a = Dh(e, t, r, n);
        if (a === null) rh(e, t, n, nf, r), rL(e, n);
        else if (WP(a, e, t, r, n)) n.stopPropagation();
        else if ((rL(e, n), t & 4 && -1 < jP.indexOf(e))) {
          for (; a !== null; ) {
            var o = Ti(a);
            if (
              (o !== null && Iw(o),
              (o = Dh(e, t, r, n)),
              o === null && rh(e, t, n, nf, r),
              o === a)
            )
              break;
            a = o;
          }
          a !== null && n.stopPropagation();
        } else rh(e, t, n, null, r);
      }
    }
    var nf = null;
    function Dh(e, t, r, n) {
      if (((nf = null), (e = fg(n)), (e = ha(e)), e !== null))
        if (((t = Pa(e)), t === null)) e = null;
        else if (((r = t.tag), r === 13)) {
          if (((e = gw(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return (nf = e), null;
    }
    function Mw(e) {
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
          switch (AP()) {
            case cg:
              return 1;
            case Lw:
              return 4;
            case ef:
            case _P:
              return 16;
            case ww:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Rn = null,
      gg = null,
      jd = null;
    function Fw() {
      if (jd) return jd;
      var e,
        t = gg,
        r = t.length,
        n,
        a = "value" in Rn ? Rn.value : Rn.textContent,
        o = a.length;
      for (e = 0; e < r && t[e] === a[e]; e++);
      var l = r - e;
      for (n = 1; n <= l && t[r - n] === a[o - n]; n++);
      return (jd = a.slice(e, 1 < n ? 1 - n : void 0));
    }
    function Wd(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Td() {
      return !0;
    }
    function aL() {
      return !1;
    }
    function Dt(e) {
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
            ? Td
            : aL),
          (this.isPropagationStopped = aL),
          this
        );
      }
      return (
        se(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
              (r.preventDefault
                ? r.preventDefault()
                : typeof r.returnValue != "unknown" && (r.returnValue = !1),
              (this.isDefaultPrevented = Td));
          },
          stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
              (r.stopPropagation
                ? r.stopPropagation()
                : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
              (this.isPropagationStopped = Td));
          },
          persist: function () {},
          isPersistent: Td,
        }),
        t
      );
    }
    var Go = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      yg = Dt(Go),
      Ei = se({}, Go, { view: 0, detail: 0 }),
      QP = Dt(Ei),
      Zm,
      Ym,
      Gu,
      Cf = se({}, Ei, {
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
        getModifierState: vg,
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
            : (e !== Gu &&
                (Gu && e.type === "mousemove"
                  ? ((Zm = e.screenX - Gu.screenX),
                    (Ym = e.screenY - Gu.screenY))
                  : (Ym = Zm = 0),
                (Gu = e)),
              Zm);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Ym;
        },
      }),
      oL = Dt(Cf),
      KP = se({}, Cf, { dataTransfer: 0 }),
      XP = Dt(KP),
      ZP = se({}, Ei, { relatedTarget: 0 }),
      Jm = Dt(ZP),
      YP = se({}, Go, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      JP = Dt(YP),
      bP = se({}, Go, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      e3 = Dt(bP),
      t3 = se({}, Go, { data: 0 }),
      lL = Dt(t3),
      r3 = {
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
      n3 = {
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
      a3 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function o3(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = a3[e])
        ? !!t[e]
        : !1;
    }
    function vg() {
      return o3;
    }
    var l3 = se({}, Ei, {
        key: function (e) {
          if (e.key) {
            var t = r3[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = Wd(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? n3[e.keyCode] || "Unidentified"
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
        getModifierState: vg,
        charCode: function (e) {
          return e.type === "keypress" ? Wd(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? Wd(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
        },
      }),
      u3 = Dt(l3),
      i3 = se({}, Cf, {
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
      uL = Dt(i3),
      s3 = se({}, Ei, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: vg,
      }),
      d3 = Dt(s3),
      f3 = se({}, Go, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      c3 = Dt(f3),
      p3 = se({}, Cf, {
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
      m3 = Dt(p3),
      h3 = [9, 13, 27, 32],
      xg = Xr && "CompositionEvent" in window,
      ri = null;
    Xr && "documentMode" in document && (ri = document.documentMode);
    var g3 = Xr && "TextEvent" in window && !ri,
      Dw = Xr && (!xg || (ri && 8 < ri && 11 >= ri)),
      iL = " ",
      sL = !1;
    function Rw(e, t) {
      switch (e) {
        case "keyup":
          return h3.indexOf(t.keyCode) !== -1;
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
    function Aw(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var So = !1;
    function y3(e, t) {
      switch (e) {
        case "compositionend":
          return Aw(t);
        case "keypress":
          return t.which !== 32 ? null : ((sL = !0), iL);
        case "textInput":
          return (e = t.data), e === iL && sL ? null : e;
        default:
          return null;
      }
    }
    function v3(e, t) {
      if (So)
        return e === "compositionend" || (!xg && Rw(e, t))
          ? ((e = Fw()), (jd = gg = Rn = null), (So = !1), e)
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
          return Dw && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var x3 = {
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
    function dL(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!x3[e.type] : t === "textarea";
    }
    function _w(e, t, r, n) {
      fw(n),
        (t = af(t, "onChange")),
        0 < t.length &&
          ((r = new yg("onChange", "change", null, r, n)),
          e.push({ event: r, listeners: t }));
    }
    var ni = null,
      hi = null;
    function L3(e) {
      Gw(e, 0);
    }
    function If(e) {
      var t = ko(e);
      if (aw(t)) return e;
    }
    function w3(e, t) {
      if (e === "change") return t;
    }
    var zw = !1;
    Xr &&
      (Xr
        ? ((Fd = "oninput" in document),
          Fd ||
            ((bm = document.createElement("div")),
            bm.setAttribute("oninput", "return;"),
            (Fd = typeof bm.oninput == "function")),
          (Md = Fd))
        : (Md = !1),
      (zw = Md && (!document.documentMode || 9 < document.documentMode)));
    var Md, Fd, bm;
    function fL() {
      ni && (ni.detachEvent("onpropertychange", Nw), (hi = ni = null));
    }
    function Nw(e) {
      if (e.propertyName === "value" && If(hi)) {
        var t = [];
        _w(t, hi, e, fg(e)), hw(L3, t);
      }
    }
    function S3(e, t, r) {
      e === "focusin"
        ? (fL(), (ni = t), (hi = r), ni.attachEvent("onpropertychange", Nw))
        : e === "focusout" && fL();
    }
    function C3(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return If(hi);
    }
    function I3(e, t) {
      if (e === "click") return If(t);
    }
    function k3(e, t) {
      if (e === "input" || e === "change") return If(t);
    }
    function P3(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var cr = typeof Object.is == "function" ? Object.is : P3;
    function gi(e, t) {
      if (cr(e, t)) return !0;
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
        if (!ph.call(t, a) || !cr(e[a], t[a])) return !1;
      }
      return !0;
    }
    function cL(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function pL(e, t) {
      var r = cL(e);
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
        r = cL(r);
      }
    }
    function Bw(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
          ? Bw(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : e.compareDocumentPosition
          ? !!(e.compareDocumentPosition(t) & 16)
          : !1
        : !1;
    }
    function Ow() {
      for (var e = window, t = Yd(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var r = typeof t.contentWindow.location.href == "string";
        } catch {
          r = !1;
        }
        if (r) e = t.contentWindow;
        else break;
        t = Yd(e.document);
      }
      return t;
    }
    function Lg(e) {
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
    function E3(e) {
      var t = Ow(),
        r = e.focusedElem,
        n = e.selectionRange;
      if (
        t !== r &&
        r &&
        r.ownerDocument &&
        Bw(r.ownerDocument.documentElement, r)
      ) {
        if (n !== null && Lg(r)) {
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
              (a = pL(r, o));
            var l = pL(r, n);
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
    var T3 = Xr && "documentMode" in document && 11 >= document.documentMode,
      Co = null,
      Rh = null,
      ai = null,
      Ah = !1;
    function mL(e, t, r) {
      var n =
        r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      Ah ||
        Co == null ||
        Co !== Yd(n) ||
        ((n = Co),
        "selectionStart" in n && Lg(n)
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
        (ai && gi(ai, n)) ||
          ((ai = n),
          (n = af(Rh, "onSelect")),
          0 < n.length &&
            ((t = new yg("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: n }),
            (t.target = Co))));
    }
    function Dd(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var Io = {
        animationend: Dd("Animation", "AnimationEnd"),
        animationiteration: Dd("Animation", "AnimationIteration"),
        animationstart: Dd("Animation", "AnimationStart"),
        transitionend: Dd("Transition", "TransitionEnd"),
      },
      eh = {},
      Uw = {};
    Xr &&
      ((Uw = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Io.animationend.animation,
        delete Io.animationiteration.animation,
        delete Io.animationstart.animation),
      "TransitionEvent" in window || delete Io.transitionend.transition);
    function kf(e) {
      if (eh[e]) return eh[e];
      if (!Io[e]) return e;
      var t = Io[e],
        r;
      for (r in t) if (t.hasOwnProperty(r) && r in Uw) return (eh[e] = t[r]);
      return e;
    }
    var Hw = kf("animationend"),
      Vw = kf("animationiteration"),
      jw = kf("animationstart"),
      Ww = kf("transitionend"),
      $w = new Map(),
      hL =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function $n(e, t) {
      $w.set(e, t), ka(t, [e]);
    }
    for (Rd = 0; Rd < hL.length; Rd++)
      (Ad = hL[Rd]),
        (gL = Ad.toLowerCase()),
        (yL = Ad[0].toUpperCase() + Ad.slice(1)),
        $n(gL, "on" + yL);
    var Ad, gL, yL, Rd;
    $n(Hw, "onAnimationEnd");
    $n(Vw, "onAnimationIteration");
    $n(jw, "onAnimationStart");
    $n("dblclick", "onDoubleClick");
    $n("focusin", "onFocus");
    $n("focusout", "onBlur");
    $n(Ww, "onTransitionEnd");
    Oo("onMouseEnter", ["mouseout", "mouseover"]);
    Oo("onMouseLeave", ["mouseout", "mouseover"]);
    Oo("onPointerEnter", ["pointerout", "pointerover"]);
    Oo("onPointerLeave", ["pointerout", "pointerover"]);
    ka(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    );
    ka(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    );
    ka("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    ka(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    );
    ka(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    );
    ka(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var bu =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      M3 = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(bu)
      );
    function vL(e, t, r) {
      var n = e.type || "unknown-event";
      (e.currentTarget = r), MP(n, t, void 0, e), (e.currentTarget = null);
    }
    function Gw(e, t) {
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
              vL(a, u, f), (o = i);
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
              vL(a, u, f), (o = i);
            }
        }
      }
      if (bd) throw ((e = Th), (bd = !1), (Th = null), e);
    }
    function b(e, t) {
      var r = t[Oh];
      r === void 0 && (r = t[Oh] = new Set());
      var n = e + "__bubble";
      r.has(n) || (qw(t, e, 2, !1), r.add(n));
    }
    function th(e, t, r) {
      var n = 0;
      t && (n |= 4), qw(r, e, n, t);
    }
    var _d = "_reactListening" + Math.random().toString(36).slice(2);
    function yi(e) {
      if (!e[_d]) {
        (e[_d] = !0),
          bL.forEach(function (r) {
            r !== "selectionchange" &&
              (M3.has(r) || th(r, !1, e), th(r, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_d] || ((t[_d] = !0), th("selectionchange", !1, t));
      }
    }
    function qw(e, t, r, n) {
      switch (Mw(t)) {
        case 1:
          var a = GP;
          break;
        case 4:
          a = qP;
          break;
        default:
          a = hg;
      }
      (r = a.bind(null, t, r, e)),
        (a = void 0),
        !Eh ||
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
    function rh(e, t, r, n, a) {
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
              if (((l = ha(u)), l === null)) return;
              if (((i = l.tag), i === 5 || i === 6)) {
                n = o = l;
                continue e;
              }
              u = u.parentNode;
            }
          }
          n = n.return;
        }
      hw(function () {
        var f = o,
          p = fg(r),
          h = [];
        e: {
          var m = $w.get(e);
          if (m !== void 0) {
            var y = yg,
              x = e;
            switch (e) {
              case "keypress":
                if (Wd(r) === 0) break e;
              case "keydown":
              case "keyup":
                y = u3;
                break;
              case "focusin":
                (x = "focus"), (y = Jm);
                break;
              case "focusout":
                (x = "blur"), (y = Jm);
                break;
              case "beforeblur":
              case "afterblur":
                y = Jm;
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
                y = oL;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                y = XP;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                y = d3;
                break;
              case Hw:
              case Vw:
              case jw:
                y = JP;
                break;
              case Ww:
                y = c3;
                break;
              case "scroll":
                y = QP;
                break;
              case "wheel":
                y = m3;
                break;
              case "copy":
              case "cut":
              case "paste":
                y = e3;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                y = uL;
            }
            var v = (t & 4) !== 0,
              T = !v && e === "scroll",
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
                    ((g = fi(s, d)), g != null && v.push(vi(s, g, c)))),
                T)
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
                r !== kh &&
                (x = r.relatedTarget || r.fromElement) &&
                (ha(x) || x[Zr]))
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
                  (x = x ? ha(x) : null),
                  x !== null &&
                    ((T = Pa(x)), x !== T || (x.tag !== 5 && x.tag !== 6)) &&
                    (x = null))
                : ((y = null), (x = f)),
              y !== x)
            ) {
              if (
                ((v = oL),
                (g = "onMouseLeave"),
                (d = "onMouseEnter"),
                (s = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((v = uL),
                  (g = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (s = "pointer")),
                (T = y == null ? m : ko(y)),
                (c = x == null ? m : ko(x)),
                (m = new v(g, s + "leave", y, r, p)),
                (m.target = T),
                (m.relatedTarget = c),
                (g = null),
                ha(p) === f &&
                  ((v = new v(d, s + "enter", x, r, p)),
                  (v.target = c),
                  (v.relatedTarget = T),
                  (g = v)),
                (T = g),
                y && x)
              )
                t: {
                  for (v = y, d = x, s = 0, c = v; c; c = xo(c)) s++;
                  for (c = 0, g = d; g; g = xo(g)) c++;
                  for (; 0 < s - c; ) (v = xo(v)), s--;
                  for (; 0 < c - s; ) (d = xo(d)), c--;
                  for (; s--; ) {
                    if (v === d || (d !== null && v === d.alternate)) break t;
                    (v = xo(v)), (d = xo(d));
                  }
                  v = null;
                }
              else v = null;
              y !== null && xL(h, m, y, v, !1),
                x !== null && T !== null && xL(h, T, x, v, !0);
            }
          }
          e: {
            if (
              ((m = f ? ko(f) : window),
              (y = m.nodeName && m.nodeName.toLowerCase()),
              y === "select" || (y === "input" && m.type === "file"))
            )
              var L = w3;
            else if (dL(m))
              if (zw) L = k3;
              else {
                L = C3;
                var C = S3;
              }
            else
              (y = m.nodeName) &&
                y.toLowerCase() === "input" &&
                (m.type === "checkbox" || m.type === "radio") &&
                (L = I3);
            if (L && (L = L(e, f))) {
              _w(h, L, r, p);
              break e;
            }
            C && C(e, m, f),
              e === "focusout" &&
                (C = m._wrapperState) &&
                C.controlled &&
                m.type === "number" &&
                Lh(m, "number", m.value);
          }
          switch (((C = f ? ko(f) : window), e)) {
            case "focusin":
              (dL(C) || C.contentEditable === "true") &&
                ((Co = C), (Rh = f), (ai = null));
              break;
            case "focusout":
              ai = Rh = Co = null;
              break;
            case "mousedown":
              Ah = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (Ah = !1), mL(h, r, p);
              break;
            case "selectionchange":
              if (T3) break;
            case "keydown":
            case "keyup":
              mL(h, r, p);
          }
          var S;
          if (xg)
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
            So
              ? Rw(e, r) && (w = "onCompositionEnd")
              : e === "keydown" &&
                r.keyCode === 229 &&
                (w = "onCompositionStart");
          w &&
            (Dw &&
              r.locale !== "ko" &&
              (So || w !== "onCompositionStart"
                ? w === "onCompositionEnd" && So && (S = Fw())
                : ((Rn = p),
                  (gg = "value" in Rn ? Rn.value : Rn.textContent),
                  (So = !0))),
            (C = af(f, w)),
            0 < C.length &&
              ((w = new lL(w, e, null, r, p)),
              h.push({ event: w, listeners: C }),
              S ? (w.data = S) : ((S = Aw(r)), S !== null && (w.data = S)))),
            (S = g3 ? y3(e, r) : v3(e, r)) &&
              ((f = af(f, "onBeforeInput")),
              0 < f.length &&
                ((p = new lL("onBeforeInput", "beforeinput", null, r, p)),
                h.push({ event: p, listeners: f }),
                (p.data = S)));
        }
        Gw(h, t);
      });
    }
    function vi(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function af(e, t) {
      for (var r = t + "Capture", n = []; e !== null; ) {
        var a = e,
          o = a.stateNode;
        a.tag === 5 &&
          o !== null &&
          ((a = o),
          (o = fi(e, r)),
          o != null && n.unshift(vi(e, o, a)),
          (o = fi(e, t)),
          o != null && n.push(vi(e, o, a))),
          (e = e.return);
      }
      return n;
    }
    function xo(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function xL(e, t, r, n, a) {
      for (var o = t._reactName, l = []; r !== null && r !== n; ) {
        var u = r,
          i = u.alternate,
          f = u.stateNode;
        if (i !== null && i === n) break;
        u.tag === 5 &&
          f !== null &&
          ((u = f),
          a
            ? ((i = fi(r, o)), i != null && l.unshift(vi(r, i, u)))
            : a || ((i = fi(r, o)), i != null && l.push(vi(r, i, u)))),
          (r = r.return);
      }
      l.length !== 0 && e.push({ event: t, listeners: l });
    }
    var F3 = /\r\n?/g,
      D3 = /\u0000|\uFFFD/g;
    function LL(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          F3,
          `
`
        )
        .replace(D3, "");
    }
    function zd(e, t, r) {
      if (((t = LL(t)), LL(e) !== t && r)) throw Error(P(425));
    }
    function of() {}
    var _h = null,
      zh = null;
    function Nh(e, t) {
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
    var Bh = typeof setTimeout == "function" ? setTimeout : void 0,
      R3 = typeof clearTimeout == "function" ? clearTimeout : void 0,
      wL = typeof Promise == "function" ? Promise : void 0,
      A3 =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof wL < "u"
          ? function (e) {
              return wL.resolve(null).then(e).catch(_3);
            }
          : Bh;
    function _3(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function nh(e, t) {
      var r = t,
        n = 0;
      do {
        var a = r.nextSibling;
        if ((e.removeChild(r), a && a.nodeType === 8))
          if (((r = a.data), r === "/$")) {
            if (n === 0) {
              e.removeChild(a), mi(t);
              return;
            }
            n--;
          } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
        r = a;
      } while (r);
      mi(t);
    }
    function Bn(e) {
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
    function SL(e) {
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
    var qo = Math.random().toString(36).slice(2),
      Pr = "__reactFiber$" + qo,
      xi = "__reactProps$" + qo,
      Zr = "__reactContainer$" + qo,
      Oh = "__reactEvents$" + qo,
      z3 = "__reactListeners$" + qo,
      N3 = "__reactHandles$" + qo;
    function ha(e) {
      var t = e[Pr];
      if (t) return t;
      for (var r = e.parentNode; r; ) {
        if ((t = r[Zr] || r[Pr])) {
          if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
          )
            for (e = SL(e); e !== null; ) {
              if ((r = e[Pr])) return r;
              e = SL(e);
            }
          return t;
        }
        (e = r), (r = e.parentNode);
      }
      return null;
    }
    function Ti(e) {
      return (
        (e = e[Pr] || e[Zr]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function ko(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(P(33));
    }
    function Pf(e) {
      return e[xi] || null;
    }
    var Uh = [],
      Po = -1;
    function Gn(e) {
      return { current: e };
    }
    function ee(e) {
      0 > Po || ((e.current = Uh[Po]), (Uh[Po] = null), Po--);
    }
    function K(e, t) {
      Po++, (Uh[Po] = e.current), (e.current = t);
    }
    var Wn = {},
      Qe = Gn(Wn),
      yt = Gn(!1),
      La = Wn;
    function Uo(e, t) {
      var r = e.type.contextTypes;
      if (!r) return Wn;
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
    function vt(e) {
      return (e = e.childContextTypes), e != null;
    }
    function lf() {
      ee(yt), ee(Qe);
    }
    function CL(e, t, r) {
      if (Qe.current !== Wn) throw Error(P(168));
      K(Qe, t), K(yt, r);
    }
    function Qw(e, t, r) {
      var n = e.stateNode;
      if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
        return r;
      n = n.getChildContext();
      for (var a in n)
        if (!(a in t)) throw Error(P(108, SP(e) || "Unknown", a));
      return se({}, r, n);
    }
    function uf(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Wn),
        (La = Qe.current),
        K(Qe, e),
        K(yt, yt.current),
        !0
      );
    }
    function IL(e, t, r) {
      var n = e.stateNode;
      if (!n) throw Error(P(169));
      r
        ? ((e = Qw(e, t, La)),
          (n.__reactInternalMemoizedMergedChildContext = e),
          ee(yt),
          ee(Qe),
          K(Qe, e))
        : ee(yt),
        K(yt, r);
    }
    var Gr = null,
      Ef = !1,
      ah = !1;
    function Kw(e) {
      Gr === null ? (Gr = [e]) : Gr.push(e);
    }
    function B3(e) {
      (Ef = !0), Kw(e);
    }
    function qn() {
      if (!ah && Gr !== null) {
        ah = !0;
        var e = 0,
          t = W;
        try {
          var r = Gr;
          for (W = 1; e < r.length; e++) {
            var n = r[e];
            do n = n(!0);
            while (n !== null);
          }
          (Gr = null), (Ef = !1);
        } catch (a) {
          throw (Gr !== null && (Gr = Gr.slice(e + 1)), xw(cg, qn), a);
        } finally {
          (W = t), (ah = !1);
        }
      }
      return null;
    }
    var Eo = [],
      To = 0,
      sf = null,
      df = 0,
      Wt = [],
      $t = 0,
      wa = null,
      qr = 1,
      Qr = "";
    function pa(e, t) {
      (Eo[To++] = df), (Eo[To++] = sf), (sf = e), (df = t);
    }
    function Xw(e, t, r) {
      (Wt[$t++] = qr), (Wt[$t++] = Qr), (Wt[$t++] = wa), (wa = e);
      var n = qr;
      e = Qr;
      var a = 32 - dr(n) - 1;
      (n &= ~(1 << a)), (r += 1);
      var o = 32 - dr(t) + a;
      if (30 < o) {
        var l = a - (a % 5);
        (o = (n & ((1 << l) - 1)).toString(32)),
          (n >>= l),
          (a -= l),
          (qr = (1 << (32 - dr(t) + a)) | (r << a) | n),
          (Qr = o + e);
      } else (qr = (1 << o) | (r << a) | n), (Qr = e);
    }
    function wg(e) {
      e.return !== null && (pa(e, 1), Xw(e, 1, 0));
    }
    function Sg(e) {
      for (; e === sf; )
        (sf = Eo[--To]), (Eo[To] = null), (df = Eo[--To]), (Eo[To] = null);
      for (; e === wa; )
        (wa = Wt[--$t]),
          (Wt[$t] = null),
          (Qr = Wt[--$t]),
          (Wt[$t] = null),
          (qr = Wt[--$t]),
          (Wt[$t] = null);
    }
    var Mt = null,
      Tt = null,
      re = !1,
      sr = null;
    function Zw(e, t) {
      var r = Gt(5, null, null, 0);
      (r.elementType = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
    }
    function kL(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            (t =
              t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (Mt = e), (Tt = Bn(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (Mt = e), (Tt = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((r = wa !== null ? { id: qr, overflow: Qr } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                (r = Gt(18, null, null, 0)),
                (r.stateNode = t),
                (r.return = e),
                (e.child = r),
                (Mt = e),
                (Tt = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function Hh(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Vh(e) {
      if (re) {
        var t = Tt;
        if (t) {
          var r = t;
          if (!kL(e, t)) {
            if (Hh(e)) throw Error(P(418));
            t = Bn(r.nextSibling);
            var n = Mt;
            t && kL(e, t)
              ? Zw(n, r)
              : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Mt = e));
          }
        } else {
          if (Hh(e)) throw Error(P(418));
          (e.flags = (e.flags & -4097) | 2), (re = !1), (Mt = e);
        }
      }
    }
    function PL(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

      )
        e = e.return;
      Mt = e;
    }
    function Nd(e) {
      if (e !== Mt) return !1;
      if (!re) return PL(e), (re = !0), !1;
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !Nh(e.type, e.memoizedProps))),
        t && (t = Tt))
      ) {
        if (Hh(e)) throw (Yw(), Error(P(418)));
        for (; t; ) Zw(e, t), (t = Bn(t.nextSibling));
      }
      if ((PL(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(P(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === "/$") {
                if (t === 0) {
                  Tt = Bn(e.nextSibling);
                  break e;
                }
                t--;
              } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          Tt = null;
        }
      } else Tt = Mt ? Bn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Yw() {
      for (var e = Tt; e; ) e = Bn(e.nextSibling);
    }
    function Ho() {
      (Tt = Mt = null), (re = !1);
    }
    function Cg(e) {
      sr === null ? (sr = [e]) : sr.push(e);
    }
    var O3 = br.ReactCurrentBatchConfig;
    function ur(e, t) {
      if (e && e.defaultProps) {
        (t = se({}, t)), (e = e.defaultProps);
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    var ff = Gn(null),
      cf = null,
      Mo = null,
      Ig = null;
    function kg() {
      Ig = Mo = cf = null;
    }
    function Pg(e) {
      var t = ff.current;
      ee(ff), (e._currentValue = t);
    }
    function jh(e, t, r) {
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
    function No(e, t) {
      (cf = e),
        (Ig = Mo = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (gt = !0), (e.firstContext = null));
    }
    function Qt(e) {
      var t = e._currentValue;
      if (Ig !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Mo === null)) {
          if (cf === null) throw Error(P(308));
          (Mo = e), (cf.dependencies = { lanes: 0, firstContext: e });
        } else Mo = Mo.next = e;
      return t;
    }
    var ga = null;
    function Eg(e) {
      ga === null ? (ga = [e]) : ga.push(e);
    }
    function Jw(e, t, r, n) {
      var a = t.interleaved;
      return (
        a === null ? ((r.next = r), Eg(t)) : ((r.next = a.next), (a.next = r)),
        (t.interleaved = r),
        Yr(e, n)
      );
    }
    function Yr(e, t) {
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
    var Mn = !1;
    function Tg(e) {
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
    function Kr(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function On(e, t, r) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), U & 2)) {
        var a = n.pending;
        return (
          a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (n.pending = t),
          Yr(e, r)
        );
      }
      return (
        (a = n.interleaved),
        a === null ? ((t.next = t), Eg(n)) : ((t.next = a.next), (a.next = t)),
        (n.interleaved = t),
        Yr(e, r)
      );
    }
    function $d(e, t, r) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
      ) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), pg(e, r);
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
    function pf(e, t, r, n) {
      var a = e.updateQueue;
      Mn = !1;
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
                  h = se({}, h, m);
                  break e;
                case 2:
                  Mn = !0;
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
        (Ca |= l), (e.lanes = l), (e.memoizedState = h);
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
    var eS = new JL.Component().refs;
    function Wh(e, t, r, n) {
      (t = e.memoizedState),
        (r = r(n, t)),
        (r = r == null ? t : se({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r);
    }
    var Tf = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Pa(e) === e : !1;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var n = at(),
          a = Hn(e),
          o = Kr(n, a);
        (o.payload = t),
          r != null && (o.callback = r),
          (t = On(e, o, a)),
          t !== null && (fr(t, e, a, n), $d(t, e, a));
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var n = at(),
          a = Hn(e),
          o = Kr(n, a);
        (o.tag = 1),
          (o.payload = t),
          r != null && (o.callback = r),
          (t = On(e, o, a)),
          t !== null && (fr(t, e, a, n), $d(t, e, a));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = at(),
          n = Hn(e),
          a = Kr(r, n);
        (a.tag = 2),
          t != null && (a.callback = t),
          (t = On(e, a, n)),
          t !== null && (fr(t, e, n, r), $d(t, e, n));
      },
    };
    function ML(e, t, r, n, a, o, l) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(n, o, l)
          : t.prototype && t.prototype.isPureReactComponent
          ? !gi(r, n) || !gi(a, o)
          : !0
      );
    }
    function tS(e, t, r) {
      var n = !1,
        a = Wn,
        o = t.contextType;
      return (
        typeof o == "object" && o !== null
          ? (o = Qt(o))
          : ((a = vt(t) ? La : Qe.current),
            (n = t.contextTypes),
            (o = (n = n != null) ? Uo(e, a) : Wn)),
        (t = new t(r, o)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Tf),
        (e.stateNode = t),
        (t._reactInternals = e),
        n &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = a),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function FL(e, t, r, n) {
      (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(r, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(r, n),
        t.state !== e && Tf.enqueueReplaceState(t, t.state, null);
    }
    function $h(e, t, r, n) {
      var a = e.stateNode;
      (a.props = r), (a.state = e.memoizedState), (a.refs = eS), Tg(e);
      var o = t.contextType;
      typeof o == "object" && o !== null
        ? (a.context = Qt(o))
        : ((o = vt(t) ? La : Qe.current), (a.context = Uo(e, o))),
        (a.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == "function" && (Wh(e, t, o, r), (a.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof a.getSnapshotBeforeUpdate == "function" ||
          (typeof a.UNSAFE_componentWillMount != "function" &&
            typeof a.componentWillMount != "function") ||
          ((t = a.state),
          typeof a.componentWillMount == "function" && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == "function" &&
            a.UNSAFE_componentWillMount(),
          t !== a.state && Tf.enqueueReplaceState(a, a.state, null),
          pf(e, r, a, n),
          (a.state = e.memoizedState)),
        typeof a.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function qu(e, t, r) {
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
                u === eS && (u = a.refs = {}),
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
    function Bd(e, t) {
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
    function DL(e) {
      var t = e._init;
      return t(e._payload);
    }
    function rS(e) {
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
        return (d = Vn(d, s)), (d.index = 0), (d.sibling = null), d;
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
          ? ((s = fh(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function i(d, s, c, g) {
        var L = c.type;
        return L === wo
          ? p(d, s, c.props.children, g, c.key)
          : s !== null &&
            (s.elementType === L ||
              (typeof L == "object" &&
                L !== null &&
                L.$$typeof === Tn &&
                DL(L) === s.type))
          ? ((g = a(s, c.props)), (g.ref = qu(d, s, c)), (g.return = d), g)
          : ((g = Zd(c.type, c.key, c.props, null, d.mode, g)),
            (g.ref = qu(d, s, c)),
            (g.return = d),
            g);
      }
      function f(d, s, c, g) {
        return s === null ||
          s.tag !== 4 ||
          s.stateNode.containerInfo !== c.containerInfo ||
          s.stateNode.implementation !== c.implementation
          ? ((s = ch(c, d.mode, g)), (s.return = d), s)
          : ((s = a(s, c.children || [])), (s.return = d), s);
      }
      function p(d, s, c, g, L) {
        return s === null || s.tag !== 7
          ? ((s = xa(c, d.mode, g, L)), (s.return = d), s)
          : ((s = a(s, c)), (s.return = d), s);
      }
      function h(d, s, c) {
        if ((typeof s == "string" && s !== "") || typeof s == "number")
          return (s = fh("" + s, d.mode, c)), (s.return = d), s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case Sd:
              return (
                (c = Zd(s.type, s.key, s.props, null, d.mode, c)),
                (c.ref = qu(d, null, s)),
                (c.return = d),
                c
              );
            case Lo:
              return (s = ch(s, d.mode, c)), (s.return = d), s;
            case Tn:
              var g = s._init;
              return h(d, g(s._payload), c);
          }
          if (Yu(s) || ju(s))
            return (s = xa(s, d.mode, c, null)), (s.return = d), s;
          Bd(d, s);
        }
        return null;
      }
      function m(d, s, c, g) {
        var L = s !== null ? s.key : null;
        if ((typeof c == "string" && c !== "") || typeof c == "number")
          return L !== null ? null : u(d, s, "" + c, g);
        if (typeof c == "object" && c !== null) {
          switch (c.$$typeof) {
            case Sd:
              return c.key === L ? i(d, s, c, g) : null;
            case Lo:
              return c.key === L ? f(d, s, c, g) : null;
            case Tn:
              return (L = c._init), m(d, s, L(c._payload), g);
          }
          if (Yu(c) || ju(c)) return L !== null ? null : p(d, s, c, g, null);
          Bd(d, c);
        }
        return null;
      }
      function y(d, s, c, g, L) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
          return (d = d.get(c) || null), u(s, d, "" + g, L);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case Sd:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), i(s, d, g, L)
              );
            case Lo:
              return (
                (d = d.get(g.key === null ? c : g.key) || null), f(s, d, g, L)
              );
            case Tn:
              var C = g._init;
              return y(d, s, c, C(g._payload), L);
          }
          if (Yu(g) || ju(g))
            return (d = d.get(c) || null), p(s, d, g, L, null);
          Bd(s, g);
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
        if (w === c.length) return r(d, S), re && pa(d, w), L;
        if (S === null) {
          for (; w < c.length; w++)
            (S = h(d, c[w], g)),
              S !== null &&
                ((s = o(S, s, w)),
                C === null ? (L = S) : (C.sibling = S),
                (C = S));
          return re && pa(d, w), L;
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
          re && pa(d, w),
          L
        );
      }
      function v(d, s, c, g) {
        var L = ju(c);
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
        if (I.done) return r(d, S), re && pa(d, w), L;
        if (S === null) {
          for (; !I.done; w++, I = c.next())
            (I = h(d, I.value, g)),
              I !== null &&
                ((s = o(I, s, w)),
                C === null ? (L = I) : (C.sibling = I),
                (C = I));
          return re && pa(d, w), L;
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
          re && pa(d, w),
          L
        );
      }
      function T(d, s, c, g) {
        if (
          (typeof c == "object" &&
            c !== null &&
            c.type === wo &&
            c.key === null &&
            (c = c.props.children),
          typeof c == "object" && c !== null)
        ) {
          switch (c.$$typeof) {
            case Sd:
              e: {
                for (var L = c.key, C = s; C !== null; ) {
                  if (C.key === L) {
                    if (((L = c.type), L === wo)) {
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
                        L.$$typeof === Tn &&
                        DL(L) === C.type)
                    ) {
                      r(d, C.sibling),
                        (s = a(C, c.props)),
                        (s.ref = qu(d, C, c)),
                        (s.return = d),
                        (d = s);
                      break e;
                    }
                    r(d, C);
                    break;
                  } else t(d, C);
                  C = C.sibling;
                }
                c.type === wo
                  ? ((s = xa(c.props.children, d.mode, g, c.key)),
                    (s.return = d),
                    (d = s))
                  : ((g = Zd(c.type, c.key, c.props, null, d.mode, g)),
                    (g.ref = qu(d, s, c)),
                    (g.return = d),
                    (d = g));
              }
              return l(d);
            case Lo:
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
                (s = ch(c, d.mode, g)), (s.return = d), (d = s);
              }
              return l(d);
            case Tn:
              return (C = c._init), T(d, s, C(c._payload), g);
          }
          if (Yu(c)) return x(d, s, c, g);
          if (ju(c)) return v(d, s, c, g);
          Bd(d, c);
        }
        return (typeof c == "string" && c !== "") || typeof c == "number"
          ? ((c = "" + c),
            s !== null && s.tag === 6
              ? (r(d, s.sibling), (s = a(s, c)), (s.return = d), (d = s))
              : (r(d, s), (s = fh(c, d.mode, g)), (s.return = d), (d = s)),
            l(d))
          : r(d, s);
      }
      return T;
    }
    var Vo = rS(!0),
      nS = rS(!1),
      Mi = {},
      Tr = Gn(Mi),
      Li = Gn(Mi),
      wi = Gn(Mi);
    function ya(e) {
      if (e === Mi) throw Error(P(174));
      return e;
    }
    function Mg(e, t) {
      switch ((K(wi, t), K(Li, e), K(Tr, Mi), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Sh(null, "");
          break;
        default:
          (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Sh(t, e));
      }
      ee(Tr), K(Tr, t);
    }
    function jo() {
      ee(Tr), ee(Li), ee(wi);
    }
    function aS(e) {
      ya(wi.current);
      var t = ya(Tr.current),
        r = Sh(t, e.type);
      t !== r && (K(Li, e), K(Tr, r));
    }
    function Fg(e) {
      Li.current === e && (ee(Tr), ee(Li));
    }
    var ue = Gn(0);
    function mf(e) {
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
    var oh = [];
    function Dg() {
      for (var e = 0; e < oh.length; e++)
        oh[e]._workInProgressVersionPrimary = null;
      oh.length = 0;
    }
    var Gd = br.ReactCurrentDispatcher,
      lh = br.ReactCurrentBatchConfig,
      Sa = 0,
      ie = null,
      we = null,
      Ee = null,
      hf = !1,
      oi = !1,
      Si = 0,
      U3 = 0;
    function $e() {
      throw Error(P(321));
    }
    function Rg(e, t) {
      if (t === null) return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!cr(e[r], t[r])) return !1;
      return !0;
    }
    function Ag(e, t, r, n, a, o) {
      if (
        ((Sa = o),
        (ie = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Gd.current = e === null || e.memoizedState === null ? W3 : $3),
        (e = r(n, a)),
        oi)
      ) {
        o = 0;
        do {
          if (((oi = !1), (Si = 0), 25 <= o)) throw Error(P(301));
          (o += 1),
            (Ee = we = null),
            (t.updateQueue = null),
            (Gd.current = G3),
            (e = r(n, a));
        } while (oi);
      }
      if (
        ((Gd.current = gf),
        (t = we !== null && we.next !== null),
        (Sa = 0),
        (Ee = we = ie = null),
        (hf = !1),
        t)
      )
        throw Error(P(300));
      return e;
    }
    function _g() {
      var e = Si !== 0;
      return (Si = 0), e;
    }
    function kr() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return Ee === null ? (ie.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
    }
    function Kt() {
      if (we === null) {
        var e = ie.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = we.next;
      var t = Ee === null ? ie.memoizedState : Ee.next;
      if (t !== null) (Ee = t), (we = e);
      else {
        if (e === null) throw Error(P(310));
        (we = e),
          (e = {
            memoizedState: we.memoizedState,
            baseState: we.baseState,
            baseQueue: we.baseQueue,
            queue: we.queue,
            next: null,
          }),
          Ee === null ? (ie.memoizedState = Ee = e) : (Ee = Ee.next = e);
      }
      return Ee;
    }
    function Ci(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function uh(e) {
      var t = Kt(),
        r = t.queue;
      if (r === null) throw Error(P(311));
      r.lastRenderedReducer = e;
      var n = we,
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
          if ((Sa & p) === p)
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
              (ie.lanes |= p),
              (Ca |= p);
          }
          f = f.next;
        } while (f !== null && f !== o);
        i === null ? (l = n) : (i.next = u),
          cr(n, t.memoizedState) || (gt = !0),
          (t.memoizedState = n),
          (t.baseState = l),
          (t.baseQueue = i),
          (r.lastRenderedState = n);
      }
      if (((e = r.interleaved), e !== null)) {
        a = e;
        do (o = a.lane), (ie.lanes |= o), (Ca |= o), (a = a.next);
        while (a !== e);
      } else a === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch];
    }
    function ih(e) {
      var t = Kt(),
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
        cr(o, t.memoizedState) || (gt = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (r.lastRenderedState = o);
      }
      return [o, n];
    }
    function oS() {}
    function lS(e, t) {
      var r = ie,
        n = Kt(),
        a = t(),
        o = !cr(n.memoizedState, a);
      if (
        (o && ((n.memoizedState = a), (gt = !0)),
        (n = n.queue),
        zg(sS.bind(null, r, n, e), [e]),
        n.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Ii(9, iS.bind(null, r, n, a, t), void 0, null),
          Te === null)
        )
          throw Error(P(349));
        Sa & 30 || uS(r, t, a);
      }
      return a;
    }
    function uS(e, t, r) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: r }),
        (t = ie.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ie.updateQueue = t),
            (t.stores = [e]))
          : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
    }
    function iS(e, t, r, n) {
      (t.value = r), (t.getSnapshot = n), dS(t) && fS(e);
    }
    function sS(e, t, r) {
      return r(function () {
        dS(t) && fS(e);
      });
    }
    function dS(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !cr(e, r);
      } catch {
        return !0;
      }
    }
    function fS(e) {
      var t = Yr(e, 1);
      t !== null && fr(t, e, 1, -1);
    }
    function RL(e) {
      var t = kr();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ci,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = j3.bind(null, ie, e)),
        [t.memoizedState, e]
      );
    }
    function Ii(e, t, r, n) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
        (t = ie.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ie.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
        e
      );
    }
    function cS() {
      return Kt().memoizedState;
    }
    function qd(e, t, r, n) {
      var a = kr();
      (ie.flags |= e),
        (a.memoizedState = Ii(1 | t, r, void 0, n === void 0 ? null : n));
    }
    function Mf(e, t, r, n) {
      var a = Kt();
      n = n === void 0 ? null : n;
      var o = void 0;
      if (we !== null) {
        var l = we.memoizedState;
        if (((o = l.destroy), n !== null && Rg(n, l.deps))) {
          a.memoizedState = Ii(t, r, o, n);
          return;
        }
      }
      (ie.flags |= e), (a.memoizedState = Ii(1 | t, r, o, n));
    }
    function AL(e, t) {
      return qd(8390656, 8, e, t);
    }
    function zg(e, t) {
      return Mf(2048, 8, e, t);
    }
    function pS(e, t) {
      return Mf(4, 2, e, t);
    }
    function mS(e, t) {
      return Mf(4, 4, e, t);
    }
    function hS(e, t) {
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
    function gS(e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null), Mf(4, 4, hS.bind(null, t, e), r)
      );
    }
    function Ng() {}
    function yS(e, t) {
      var r = Kt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && Rg(t, n[1])
        ? n[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function vS(e, t) {
      var r = Kt();
      t = t === void 0 ? null : t;
      var n = r.memoizedState;
      return n !== null && t !== null && Rg(t, n[1])
        ? n[0]
        : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function xS(e, t, r) {
      return Sa & 21
        ? (cr(r, t) ||
            ((r = Sw()), (ie.lanes |= r), (Ca |= r), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (gt = !0)),
          (e.memoizedState = r));
    }
    function H3(e, t) {
      var r = W;
      (W = r !== 0 && 4 > r ? r : 4), e(!0);
      var n = lh.transition;
      lh.transition = {};
      try {
        e(!1), t();
      } finally {
        (W = r), (lh.transition = n);
      }
    }
    function LS() {
      return Kt().memoizedState;
    }
    function V3(e, t, r) {
      var n = Hn(e);
      if (
        ((r = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        wS(e))
      )
        SS(t, r);
      else if (((r = Jw(e, t, r, n)), r !== null)) {
        var a = at();
        fr(r, e, n, a), CS(r, t, n);
      }
    }
    function j3(e, t, r) {
      var n = Hn(e),
        a = {
          lane: n,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (wS(e)) SS(t, a);
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
            if (((a.hasEagerState = !0), (a.eagerState = u), cr(u, l))) {
              var i = t.interleaved;
              i === null
                ? ((a.next = a), Eg(t))
                : ((a.next = i.next), (i.next = a)),
                (t.interleaved = a);
              return;
            }
          } catch {
          } finally {
          }
        (r = Jw(e, t, a, n)),
          r !== null && ((a = at()), fr(r, e, n, a), CS(r, t, n));
      }
    }
    function wS(e) {
      var t = e.alternate;
      return e === ie || (t !== null && t === ie);
    }
    function SS(e, t) {
      oi = hf = !0;
      var r = e.pending;
      r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (e.pending = t);
    }
    function CS(e, t, r) {
      if (r & 4194240) {
        var n = t.lanes;
        (n &= e.pendingLanes), (r |= n), (t.lanes = r), pg(e, r);
      }
    }
    var gf = {
        readContext: Qt,
        useCallback: $e,
        useContext: $e,
        useEffect: $e,
        useImperativeHandle: $e,
        useInsertionEffect: $e,
        useLayoutEffect: $e,
        useMemo: $e,
        useReducer: $e,
        useRef: $e,
        useState: $e,
        useDebugValue: $e,
        useDeferredValue: $e,
        useTransition: $e,
        useMutableSource: $e,
        useSyncExternalStore: $e,
        useId: $e,
        unstable_isNewReconciler: !1,
      },
      W3 = {
        readContext: Qt,
        useCallback: function (e, t) {
          return (kr().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Qt,
        useEffect: AL,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = r != null ? r.concat([e]) : null),
            qd(4194308, 4, hS.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return qd(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return qd(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var r = kr();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var n = kr();
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
            (e = e.dispatch = V3.bind(null, ie, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = kr();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: RL,
        useDebugValue: Ng,
        useDeferredValue: function (e) {
          return (kr().memoizedState = e);
        },
        useTransition: function () {
          var e = RL(!1),
            t = e[0];
          return (e = H3.bind(null, e[1])), (kr().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var n = ie,
            a = kr();
          if (re) {
            if (r === void 0) throw Error(P(407));
            r = r();
          } else {
            if (((r = t()), Te === null)) throw Error(P(349));
            Sa & 30 || uS(n, t, r);
          }
          a.memoizedState = r;
          var o = { value: r, getSnapshot: t };
          return (
            (a.queue = o),
            AL(sS.bind(null, n, o, e), [e]),
            (n.flags |= 2048),
            Ii(9, iS.bind(null, n, o, r, t), void 0, null),
            r
          );
        },
        useId: function () {
          var e = kr(),
            t = Te.identifierPrefix;
          if (re) {
            var r = Qr,
              n = qr;
            (r = (n & ~(1 << (32 - dr(n) - 1))).toString(32) + r),
              (t = ":" + t + "R" + r),
              (r = Si++),
              0 < r && (t += "H" + r.toString(32)),
              (t += ":");
          } else (r = U3++), (t = ":" + t + "r" + r.toString(32) + ":");
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      $3 = {
        readContext: Qt,
        useCallback: yS,
        useContext: Qt,
        useEffect: zg,
        useImperativeHandle: gS,
        useInsertionEffect: pS,
        useLayoutEffect: mS,
        useMemo: vS,
        useReducer: uh,
        useRef: cS,
        useState: function () {
          return uh(Ci);
        },
        useDebugValue: Ng,
        useDeferredValue: function (e) {
          var t = Kt();
          return xS(t, we.memoizedState, e);
        },
        useTransition: function () {
          var e = uh(Ci)[0],
            t = Kt().memoizedState;
          return [e, t];
        },
        useMutableSource: oS,
        useSyncExternalStore: lS,
        useId: LS,
        unstable_isNewReconciler: !1,
      },
      G3 = {
        readContext: Qt,
        useCallback: yS,
        useContext: Qt,
        useEffect: zg,
        useImperativeHandle: gS,
        useInsertionEffect: pS,
        useLayoutEffect: mS,
        useMemo: vS,
        useReducer: ih,
        useRef: cS,
        useState: function () {
          return ih(Ci);
        },
        useDebugValue: Ng,
        useDeferredValue: function (e) {
          var t = Kt();
          return we === null
            ? (t.memoizedState = e)
            : xS(t, we.memoizedState, e);
        },
        useTransition: function () {
          var e = ih(Ci)[0],
            t = Kt().memoizedState;
          return [e, t];
        },
        useMutableSource: oS,
        useSyncExternalStore: lS,
        useId: LS,
        unstable_isNewReconciler: !1,
      };
    function Wo(e, t) {
      try {
        var r = "",
          n = t;
        do (r += wP(n)), (n = n.return);
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
    function sh(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function Gh(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    var q3 = typeof WeakMap == "function" ? WeakMap : Map;
    function IS(e, t, r) {
      (r = Kr(-1, r)), (r.tag = 3), (r.payload = { element: null });
      var n = t.value;
      return (
        (r.callback = function () {
          vf || ((vf = !0), (tg = n)), Gh(e, t);
        }),
        r
      );
    }
    function kS(e, t, r) {
      (r = Kr(-1, r)), (r.tag = 3);
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var a = t.value;
        (r.payload = function () {
          return n(a);
        }),
          (r.callback = function () {
            Gh(e, t);
          });
      }
      var o = e.stateNode;
      return (
        o !== null &&
          typeof o.componentDidCatch == "function" &&
          (r.callback = function () {
            Gh(e, t),
              typeof n != "function" &&
                (Un === null ? (Un = new Set([this])) : Un.add(this));
            var l = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: l !== null ? l : "",
            });
          }),
        r
      );
    }
    function _L(e, t, r) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new q3();
        var a = new Set();
        n.set(t, a);
      } else (a = n.get(t)), a === void 0 && ((a = new Set()), n.set(t, a));
      a.has(r) || (a.add(r), (e = lE.bind(null, e, t, r)), t.then(e, e));
    }
    function zL(e) {
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
    function NL(e, t, r, n, a) {
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
                  : ((t = Kr(-1, 1)), (t.tag = 2), On(r, t, 1))),
              (r.lanes |= 1)),
          e);
    }
    var Q3 = br.ReactCurrentOwner,
      gt = !1;
    function nt(e, t, r, n) {
      t.child = e === null ? nS(t, null, r, n) : Vo(t, e.child, r, n);
    }
    function BL(e, t, r, n, a) {
      r = r.render;
      var o = t.ref;
      return (
        No(t, a),
        (n = Ag(e, t, r, n, o, a)),
        (r = _g()),
        e !== null && !gt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            Jr(e, t, a))
          : (re && r && wg(t), (t.flags |= 1), nt(e, t, n, a), t.child)
      );
    }
    function OL(e, t, r, n, a) {
      if (e === null) {
        var o = r.type;
        return typeof o == "function" &&
          !$g(o) &&
          o.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = o), PS(e, t, o, n, a))
          : ((e = Zd(r.type, null, n, t, t.mode, a)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((o = e.child), !(e.lanes & a))) {
        var l = o.memoizedProps;
        if (
          ((r = r.compare),
          (r = r !== null ? r : gi),
          r(l, n) && e.ref === t.ref)
        )
          return Jr(e, t, a);
      }
      return (
        (t.flags |= 1),
        (e = Vn(o, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function PS(e, t, r, n, a) {
      if (e !== null) {
        var o = e.memoizedProps;
        if (gi(o, n) && e.ref === t.ref)
          if (((gt = !1), (t.pendingProps = n = o), (e.lanes & a) !== 0))
            e.flags & 131072 && (gt = !0);
          else return (t.lanes = e.lanes), Jr(e, t, a);
      }
      return qh(e, t, r, n, a);
    }
    function ES(e, t, r) {
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
            K(Do, Et),
            (Et |= r);
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
              K(Do, Et),
              (Et |= e),
              null
            );
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (n = o !== null ? o.baseLanes : r),
            K(Do, Et),
            (Et |= n);
        }
      else
        o !== null
          ? ((n = o.baseLanes | r), (t.memoizedState = null))
          : (n = r),
          K(Do, Et),
          (Et |= n);
      return nt(e, t, a, r), t.child;
    }
    function TS(e, t) {
      var r = t.ref;
      ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function qh(e, t, r, n, a) {
      var o = vt(r) ? La : Qe.current;
      return (
        (o = Uo(t, o)),
        No(t, a),
        (r = Ag(e, t, r, n, o, a)),
        (n = _g()),
        e !== null && !gt
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~a),
            Jr(e, t, a))
          : (re && n && wg(t), (t.flags |= 1), nt(e, t, r, a), t.child)
      );
    }
    function UL(e, t, r, n, a) {
      if (vt(r)) {
        var o = !0;
        uf(t);
      } else o = !1;
      if ((No(t, a), t.stateNode === null))
        Qd(e, t), tS(t, r, n), $h(t, r, n, a), (n = !0);
      else if (e === null) {
        var l = t.stateNode,
          u = t.memoizedProps;
        l.props = u;
        var i = l.context,
          f = r.contextType;
        typeof f == "object" && f !== null
          ? (f = Qt(f))
          : ((f = vt(r) ? La : Qe.current), (f = Uo(t, f)));
        var p = r.getDerivedStateFromProps,
          h =
            typeof p == "function" ||
            typeof l.getSnapshotBeforeUpdate == "function";
        h ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== n || i !== f) && FL(t, l, n, f)),
          (Mn = !1);
        var m = t.memoizedState;
        (l.state = m),
          pf(t, n, l, a),
          (i = t.memoizedState),
          u !== n || m !== i || yt.current || Mn
            ? (typeof p == "function" &&
                (Wh(t, r, p, n), (i = t.memoizedState)),
              (u = Mn || ML(t, r, u, n, m, i, f))
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
          (f = t.type === t.elementType ? u : ur(t.type, u)),
          (l.props = f),
          (h = t.pendingProps),
          (m = l.context),
          (i = r.contextType),
          typeof i == "object" && i !== null
            ? (i = Qt(i))
            : ((i = vt(r) ? La : Qe.current), (i = Uo(t, i)));
        var y = r.getDerivedStateFromProps;
        (p =
          typeof y == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function") ||
          (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
            typeof l.componentWillReceiveProps != "function") ||
          ((u !== h || m !== i) && FL(t, l, n, i)),
          (Mn = !1),
          (m = t.memoizedState),
          (l.state = m),
          pf(t, n, l, a);
        var x = t.memoizedState;
        u !== h || m !== x || yt.current || Mn
          ? (typeof y == "function" && (Wh(t, r, y, n), (x = t.memoizedState)),
            (f = Mn || ML(t, r, f, n, m, x, i) || !1)
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
      return Qh(e, t, r, n, o, a);
    }
    function Qh(e, t, r, n, a, o) {
      TS(e, t);
      var l = (t.flags & 128) !== 0;
      if (!n && !l) return a && IL(t, r, !1), Jr(e, t, o);
      (n = t.stateNode), (Q3.current = t);
      var u =
        l && typeof r.getDerivedStateFromError != "function"
          ? null
          : n.render();
      return (
        (t.flags |= 1),
        e !== null && l
          ? ((t.child = Vo(t, e.child, null, o)), (t.child = Vo(t, null, u, o)))
          : nt(e, t, u, o),
        (t.memoizedState = n.state),
        a && IL(t, r, !0),
        t.child
      );
    }
    function MS(e) {
      var t = e.stateNode;
      t.pendingContext
        ? CL(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && CL(e, t.context, !1),
        Mg(e, t.containerInfo);
    }
    function HL(e, t, r, n, a) {
      return Ho(), Cg(a), (t.flags |= 256), nt(e, t, r, n), t.child;
    }
    var Kh = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Xh(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function FS(e, t, r) {
      var n = t.pendingProps,
        a = ue.current,
        o = !1,
        l = (t.flags & 128) !== 0,
        u;
      if (
        ((u = l) ||
          (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
        u
          ? ((o = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (a |= 1),
        K(ue, a & 1),
        e === null)
      )
        return (
          Vh(t),
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
                    : (o = Rf(l, n, 0, null)),
                  (e = xa(e, n, r, null)),
                  (o.return = t),
                  (e.return = t),
                  (o.sibling = e),
                  (t.child = o),
                  (t.child.memoizedState = Xh(r)),
                  (t.memoizedState = Kh),
                  e)
                : Bg(t, l))
        );
      if (
        ((a = e.memoizedState), a !== null && ((u = a.dehydrated), u !== null))
      )
        return K3(e, t, l, n, u, a, r);
      if (o) {
        (o = n.fallback), (l = t.mode), (a = e.child), (u = a.sibling);
        var i = { mode: "hidden", children: n.children };
        return (
          !(l & 1) && t.child !== a
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = i),
              (t.deletions = null))
            : ((n = Vn(a, i)), (n.subtreeFlags = a.subtreeFlags & 14680064)),
          u !== null
            ? (o = Vn(u, o))
            : ((o = xa(o, l, r, null)), (o.flags |= 2)),
          (o.return = t),
          (n.return = t),
          (n.sibling = o),
          (t.child = n),
          (n = o),
          (o = t.child),
          (l = e.child.memoizedState),
          (l =
            l === null
              ? Xh(r)
              : {
                  baseLanes: l.baseLanes | r,
                  cachePool: null,
                  transitions: l.transitions,
                }),
          (o.memoizedState = l),
          (o.childLanes = e.childLanes & ~r),
          (t.memoizedState = Kh),
          n
        );
      }
      return (
        (o = e.child),
        (e = o.sibling),
        (n = Vn(o, { mode: "visible", children: n.children })),
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
    function Bg(e, t) {
      return (
        (t = Rf({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Od(e, t, r, n) {
      return (
        n !== null && Cg(n),
        Vo(t, e.child, null, r),
        (e = Bg(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function K3(e, t, r, n, a, o, l) {
      if (r)
        return t.flags & 256
          ? ((t.flags &= -257), (n = sh(Error(P(422)))), Od(e, t, l, n))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = n.fallback),
            (a = t.mode),
            (n = Rf({ mode: "visible", children: n.children }, a, 0, null)),
            (o = xa(o, a, l, null)),
            (o.flags |= 2),
            (n.return = t),
            (o.return = t),
            (n.sibling = o),
            (t.child = n),
            t.mode & 1 && Vo(t, e.child, null, l),
            (t.child.memoizedState = Xh(l)),
            (t.memoizedState = Kh),
            o);
      if (!(t.mode & 1)) return Od(e, t, l, null);
      if (a.data === "$!") {
        if (((n = a.nextSibling && a.nextSibling.dataset), n)) var u = n.dgst;
        return (
          (n = u), (o = Error(P(419))), (n = sh(o, n, void 0)), Od(e, t, l, n)
        );
      }
      if (((u = (l & e.childLanes) !== 0), gt || u)) {
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
              ((o.retryLane = a), Yr(e, a), fr(n, e, a, -1));
        }
        return Wg(), (n = sh(Error(P(421)))), Od(e, t, l, n);
      }
      return a.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = uE.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (Tt = Bn(a.nextSibling)),
          (Mt = t),
          (re = !0),
          (sr = null),
          e !== null &&
            ((Wt[$t++] = qr),
            (Wt[$t++] = Qr),
            (Wt[$t++] = wa),
            (qr = e.id),
            (Qr = e.overflow),
            (wa = t)),
          (t = Bg(t, n.children)),
          (t.flags |= 4096),
          t);
    }
    function VL(e, t, r) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), jh(e.return, t, r);
    }
    function dh(e, t, r, n, a) {
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
    function DS(e, t, r) {
      var n = t.pendingProps,
        a = n.revealOrder,
        o = n.tail;
      if ((nt(e, t, n.children, r), (n = ue.current), n & 2))
        (n = (n & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && VL(e, r, t);
            else if (e.tag === 19) VL(e, r, t);
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
      if ((K(ue, n), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (a) {
          case "forwards":
            for (r = t.child, a = null; r !== null; )
              (e = r.alternate),
                e !== null && mf(e) === null && (a = r),
                (r = r.sibling);
            (r = a),
              r === null
                ? ((a = t.child), (t.child = null))
                : ((a = r.sibling), (r.sibling = null)),
              dh(t, !1, a, r, o);
            break;
          case "backwards":
            for (r = null, a = t.child, t.child = null; a !== null; ) {
              if (((e = a.alternate), e !== null && mf(e) === null)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = r), (r = a), (a = e);
            }
            dh(t, !0, r, null, o);
            break;
          case "together":
            dh(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Qd(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Jr(e, t, r) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ca |= t.lanes),
        !(r & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(P(153));
      if (t.child !== null) {
        for (
          e = t.child, r = Vn(e, e.pendingProps), t.child = r, r.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (r = r.sibling = Vn(e, e.pendingProps)),
            (r.return = t);
        r.sibling = null;
      }
      return t.child;
    }
    function X3(e, t, r) {
      switch (t.tag) {
        case 3:
          MS(t), Ho();
          break;
        case 5:
          aS(t);
          break;
        case 1:
          vt(t.type) && uf(t);
          break;
        case 4:
          Mg(t, t.stateNode.containerInfo);
          break;
        case 10:
          var n = t.type._context,
            a = t.memoizedProps.value;
          K(ff, n._currentValue), (n._currentValue = a);
          break;
        case 13:
          if (((n = t.memoizedState), n !== null))
            return n.dehydrated !== null
              ? (K(ue, ue.current & 1), (t.flags |= 128), null)
              : r & t.child.childLanes
              ? FS(e, t, r)
              : (K(ue, ue.current & 1),
                (e = Jr(e, t, r)),
                e !== null ? e.sibling : null);
          K(ue, ue.current & 1);
          break;
        case 19:
          if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
            if (n) return DS(e, t, r);
            t.flags |= 128;
          }
          if (
            ((a = t.memoizedState),
            a !== null &&
              ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
            K(ue, ue.current),
            n)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), ES(e, t, r);
      }
      return Jr(e, t, r);
    }
    var RS, Zh, AS, _S;
    RS = function (e, t) {
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
    Zh = function () {};
    AS = function (e, t, r, n) {
      var a = e.memoizedProps;
      if (a !== n) {
        (e = t.stateNode), ya(Tr.current);
        var o = null;
        switch (r) {
          case "input":
            (a = vh(e, a)), (n = vh(e, n)), (o = []);
            break;
          case "select":
            (a = se({}, a, { value: void 0 })),
              (n = se({}, n, { value: void 0 })),
              (o = []);
            break;
          case "textarea":
            (a = wh(e, a)), (n = wh(e, n)), (o = []);
            break;
          default:
            typeof a.onClick != "function" &&
              typeof n.onClick == "function" &&
              (e.onclick = of);
        }
        Ch(r, n);
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
                (si.hasOwnProperty(f)
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
                  (si.hasOwnProperty(f)
                    ? (i != null && f === "onScroll" && b("scroll", e),
                      o || u === i || (o = []))
                    : (o = o || []).push(f, i));
        }
        r && (o = o || []).push("style", r);
        var f = o;
        (t.updateQueue = f) && (t.flags |= 4);
      }
    };
    _S = function (e, t, r, n) {
      r !== n && (t.flags |= 4);
    };
    function Qu(e, t) {
      if (!re)
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
    function Ge(e) {
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
    function Z3(e, t, r) {
      var n = t.pendingProps;
      switch ((Sg(t), t.tag)) {
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
          return Ge(t), null;
        case 1:
          return vt(t.type) && lf(), Ge(t), null;
        case 3:
          return (
            (n = t.stateNode),
            jo(),
            ee(yt),
            ee(Qe),
            Dg(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Nd(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), sr !== null && (ag(sr), (sr = null)))),
            Zh(e, t),
            Ge(t),
            null
          );
        case 5:
          Fg(t);
          var a = ya(wi.current);
          if (((r = t.type), e !== null && t.stateNode != null))
            AS(e, t, r, n, a),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(P(166));
              return Ge(t), null;
            }
            if (((e = ya(Tr.current)), Nd(t))) {
              (n = t.stateNode), (r = t.type);
              var o = t.memoizedProps;
              switch (((n[Pr] = t), (n[xi] = o), (e = (t.mode & 1) !== 0), r)) {
                case "dialog":
                  b("cancel", n), b("close", n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  b("load", n);
                  break;
                case "video":
                case "audio":
                  for (a = 0; a < bu.length; a++) b(bu[a], n);
                  break;
                case "source":
                  b("error", n);
                  break;
                case "img":
                case "image":
                case "link":
                  b("error", n), b("load", n);
                  break;
                case "details":
                  b("toggle", n);
                  break;
                case "input":
                  Xx(n, o), b("invalid", n);
                  break;
                case "select":
                  (n._wrapperState = { wasMultiple: !!o.multiple }),
                    b("invalid", n);
                  break;
                case "textarea":
                  Yx(n, o), b("invalid", n);
              }
              Ch(r, o), (a = null);
              for (var l in o)
                if (o.hasOwnProperty(l)) {
                  var u = o[l];
                  l === "children"
                    ? typeof u == "string"
                      ? n.textContent !== u &&
                        (o.suppressHydrationWarning !== !0 &&
                          zd(n.textContent, u, e),
                        (a = ["children", u]))
                      : typeof u == "number" &&
                        n.textContent !== "" + u &&
                        (o.suppressHydrationWarning !== !0 &&
                          zd(n.textContent, u, e),
                        (a = ["children", "" + u]))
                    : si.hasOwnProperty(l) &&
                      u != null &&
                      l === "onScroll" &&
                      b("scroll", n);
                }
              switch (r) {
                case "input":
                  Cd(n), Zx(n, o, !0);
                  break;
                case "textarea":
                  Cd(n), Jx(n);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof o.onClick == "function" && (n.onclick = of);
              }
              (n = a), (t.updateQueue = n), n !== null && (t.flags |= 4);
            } else {
              (l = a.nodeType === 9 ? a : a.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = uw(r)),
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
                (e[Pr] = t),
                (e[xi] = n),
                RS(e, t, !1, !1),
                (t.stateNode = e);
              e: {
                switch (((l = Ih(r, n)), r)) {
                  case "dialog":
                    b("cancel", e), b("close", e), (a = n);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    b("load", e), (a = n);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < bu.length; a++) b(bu[a], e);
                    a = n;
                    break;
                  case "source":
                    b("error", e), (a = n);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    b("error", e), b("load", e), (a = n);
                    break;
                  case "details":
                    b("toggle", e), (a = n);
                    break;
                  case "input":
                    Xx(e, n), (a = vh(e, n)), b("invalid", e);
                    break;
                  case "option":
                    a = n;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!n.multiple }),
                      (a = se({}, n, { value: void 0 })),
                      b("invalid", e);
                    break;
                  case "textarea":
                    Yx(e, n), (a = wh(e, n)), b("invalid", e);
                    break;
                  default:
                    a = n;
                }
                Ch(r, a), (u = a);
                for (o in u)
                  if (u.hasOwnProperty(o)) {
                    var i = u[o];
                    o === "style"
                      ? dw(e, i)
                      : o === "dangerouslySetInnerHTML"
                      ? ((i = i ? i.__html : void 0), i != null && iw(e, i))
                      : o === "children"
                      ? typeof i == "string"
                        ? (r !== "textarea" || i !== "") && di(e, i)
                        : typeof i == "number" && di(e, "" + i)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (si.hasOwnProperty(o)
                          ? i != null && o === "onScroll" && b("scroll", e)
                          : i != null && ug(e, o, i, l));
                  }
                switch (r) {
                  case "input":
                    Cd(e), Zx(e, n, !1);
                    break;
                  case "textarea":
                    Cd(e), Jx(e);
                    break;
                  case "option":
                    n.value != null &&
                      e.setAttribute("value", "" + jn(n.value));
                    break;
                  case "select":
                    (e.multiple = !!n.multiple),
                      (o = n.value),
                      o != null
                        ? Ro(e, !!n.multiple, o, !1)
                        : n.defaultValue != null &&
                          Ro(e, !!n.multiple, n.defaultValue, !0);
                    break;
                  default:
                    typeof a.onClick == "function" && (e.onclick = of);
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
          return Ge(t), null;
        case 6:
          if (e && t.stateNode != null) _S(e, t, e.memoizedProps, n);
          else {
            if (typeof n != "string" && t.stateNode === null)
              throw Error(P(166));
            if (((r = ya(wi.current)), ya(Tr.current), Nd(t))) {
              if (
                ((n = t.stateNode),
                (r = t.memoizedProps),
                (n[Pr] = t),
                (o = n.nodeValue !== r) && ((e = Mt), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    zd(n.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      zd(n.nodeValue, r, (e.mode & 1) !== 0);
                }
              o && (t.flags |= 4);
            } else
              (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
                (n[Pr] = t),
                (t.stateNode = n);
          }
          return Ge(t), null;
        case 13:
          if (
            (ee(ue),
            (n = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (re && Tt !== null && t.mode & 1 && !(t.flags & 128))
              Yw(), Ho(), (t.flags |= 98560), (o = !1);
            else if (((o = Nd(t)), n !== null && n.dehydrated !== null)) {
              if (e === null) {
                if (!o) throw Error(P(318));
                if (
                  ((o = t.memoizedState),
                  (o = o !== null ? o.dehydrated : null),
                  !o)
                )
                  throw Error(P(317));
                o[Pr] = t;
              } else
                Ho(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4);
              Ge(t), (o = !1);
            } else sr !== null && (ag(sr), (sr = null)), (o = !0);
            if (!o) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = r), t)
            : ((n = n !== null),
              n !== (e !== null && e.memoizedState !== null) &&
                n &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || ue.current & 1 ? Se === 0 && (Se = 3) : Wg())),
              t.updateQueue !== null && (t.flags |= 4),
              Ge(t),
              null);
        case 4:
          return (
            jo(),
            Zh(e, t),
            e === null && yi(t.stateNode.containerInfo),
            Ge(t),
            null
          );
        case 10:
          return Pg(t.type._context), Ge(t), null;
        case 17:
          return vt(t.type) && lf(), Ge(t), null;
        case 19:
          if ((ee(ue), (o = t.memoizedState), o === null)) return Ge(t), null;
          if (((n = (t.flags & 128) !== 0), (l = o.rendering), l === null))
            if (n) Qu(o, !1);
            else {
              if (Se !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((l = mf(e)), l !== null)) {
                    for (
                      t.flags |= 128,
                        Qu(o, !1),
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
                    return K(ue, (ue.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null &&
                ge() > $o &&
                ((t.flags |= 128), (n = !0), Qu(o, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = mf(l)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  Qu(o, !0),
                  o.tail === null &&
                    o.tailMode === "hidden" &&
                    !l.alternate &&
                    !re)
                )
                  return Ge(t), null;
              } else
                2 * ge() - o.renderingStartTime > $o &&
                  r !== 1073741824 &&
                  ((t.flags |= 128), (n = !0), Qu(o, !1), (t.lanes = 4194304));
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
              (o.renderingStartTime = ge()),
              (t.sibling = null),
              (r = ue.current),
              K(ue, n ? (r & 1) | 2 : r & 1),
              t)
            : (Ge(t), null);
        case 22:
        case 23:
          return (
            jg(),
            (n = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
            n && t.mode & 1
              ? Et & 1073741824 &&
                (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Ge(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(P(156, t.tag));
    }
    function Y3(e, t) {
      switch ((Sg(t), t.tag)) {
        case 1:
          return (
            vt(t.type) && lf(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            jo(),
            ee(yt),
            ee(Qe),
            Dg(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return Fg(t), null;
        case 13:
          if (
            (ee(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(P(340));
            Ho();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return ee(ue), null;
        case 4:
          return jo(), null;
        case 10:
          return Pg(t.type._context), null;
        case 22:
        case 23:
          return jg(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Ud = !1,
      qe = !1,
      J3 = typeof WeakSet == "function" ? WeakSet : Set,
      R = null;
    function Fo(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == "function")
          try {
            r(null);
          } catch (n) {
            ce(e, t, n);
          }
        else r.current = null;
    }
    function Yh(e, t, r) {
      try {
        r();
      } catch (n) {
        ce(e, t, n);
      }
    }
    var jL = !1;
    function b3(e, t) {
      if (((_h = rf), (e = Ow()), Lg(e))) {
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
        zh = { focusedElem: e, selectionRange: r }, rf = !1, R = t;
        R !== null;

      )
        if (
          ((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          (e.return = t), (R = e);
        else
          for (; R !== null; ) {
            t = R;
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
                        T = x.memoizedState,
                        d = t.stateNode,
                        s = d.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? v : ur(t.type, v),
                          T
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
              ce(t, t.return, g);
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (R = e);
              break;
            }
            R = t.return;
          }
      return (x = jL), (jL = !1), x;
    }
    function li(e, t, r) {
      var n = t.updateQueue;
      if (((n = n !== null ? n.lastEffect : null), n !== null)) {
        var a = (n = n.next);
        do {
          if ((a.tag & e) === e) {
            var o = a.destroy;
            (a.destroy = void 0), o !== void 0 && Yh(t, r, o);
          }
          a = a.next;
        } while (a !== n);
      }
    }
    function Ff(e, t) {
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
    function Jh(e) {
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
    function zS(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), zS(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[Pr],
            delete t[xi],
            delete t[Oh],
            delete t[z3],
            delete t[N3])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function NS(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function WL(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || NS(e.return)) return null;
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
    function bh(e, t, r) {
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
              r != null || t.onclick !== null || (t.onclick = of));
      else if (n !== 4 && ((e = e.child), e !== null))
        for (bh(e, t, r), e = e.sibling; e !== null; )
          bh(e, t, r), (e = e.sibling);
    }
    function eg(e, t, r) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
      else if (n !== 4 && ((e = e.child), e !== null))
        for (eg(e, t, r), e = e.sibling; e !== null; )
          eg(e, t, r), (e = e.sibling);
    }
    var Ae = null,
      ir = !1;
    function En(e, t, r) {
      for (r = r.child; r !== null; ) BS(e, t, r), (r = r.sibling);
    }
    function BS(e, t, r) {
      if (Er && typeof Er.onCommitFiberUnmount == "function")
        try {
          Er.onCommitFiberUnmount(Sf, r);
        } catch {}
      switch (r.tag) {
        case 5:
          qe || Fo(r, t);
        case 6:
          var n = Ae,
            a = ir;
          (Ae = null),
            En(e, t, r),
            (Ae = n),
            (ir = a),
            Ae !== null &&
              (ir
                ? ((e = Ae),
                  (r = r.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(r)
                    : e.removeChild(r))
                : Ae.removeChild(r.stateNode));
          break;
        case 18:
          Ae !== null &&
            (ir
              ? ((e = Ae),
                (r = r.stateNode),
                e.nodeType === 8
                  ? nh(e.parentNode, r)
                  : e.nodeType === 1 && nh(e, r),
                mi(e))
              : nh(Ae, r.stateNode));
          break;
        case 4:
          (n = Ae),
            (a = ir),
            (Ae = r.stateNode.containerInfo),
            (ir = !0),
            En(e, t, r),
            (Ae = n),
            (ir = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !qe &&
            ((n = r.updateQueue),
            n !== null && ((n = n.lastEffect), n !== null))
          ) {
            a = n = n.next;
            do {
              var o = a,
                l = o.destroy;
              (o = o.tag),
                l !== void 0 && (o & 2 || o & 4) && Yh(r, t, l),
                (a = a.next);
            } while (a !== n);
          }
          En(e, t, r);
          break;
        case 1:
          if (
            !qe &&
            (Fo(r, t),
            (n = r.stateNode),
            typeof n.componentWillUnmount == "function")
          )
            try {
              (n.props = r.memoizedProps),
                (n.state = r.memoizedState),
                n.componentWillUnmount();
            } catch (u) {
              ce(r, t, u);
            }
          En(e, t, r);
          break;
        case 21:
          En(e, t, r);
          break;
        case 22:
          r.mode & 1
            ? ((qe = (n = qe) || r.memoizedState !== null),
              En(e, t, r),
              (qe = n))
            : En(e, t, r);
          break;
        default:
          En(e, t, r);
      }
    }
    function $L(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new J3()),
          t.forEach(function (n) {
            var a = iE.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(a, a));
          });
      }
    }
    function lr(e, t) {
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
                  (Ae = u.stateNode), (ir = !1);
                  break e;
                case 3:
                  (Ae = u.stateNode.containerInfo), (ir = !0);
                  break e;
                case 4:
                  (Ae = u.stateNode.containerInfo), (ir = !0);
                  break e;
              }
              u = u.return;
            }
            if (Ae === null) throw Error(P(160));
            BS(o, l, a), (Ae = null), (ir = !1);
            var i = a.alternate;
            i !== null && (i.return = null), (a.return = null);
          } catch (f) {
            ce(a, t, f);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) OS(t, e), (t = t.sibling);
    }
    function OS(e, t) {
      var r = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((lr(t, e), Ir(e), n & 4)) {
            try {
              li(3, e, e.return), Ff(3, e);
            } catch (v) {
              ce(e, e.return, v);
            }
            try {
              li(5, e, e.return);
            } catch (v) {
              ce(e, e.return, v);
            }
          }
          break;
        case 1:
          lr(t, e), Ir(e), n & 512 && r !== null && Fo(r, r.return);
          break;
        case 5:
          if (
            (lr(t, e),
            Ir(e),
            n & 512 && r !== null && Fo(r, r.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              di(a, "");
            } catch (v) {
              ce(e, e.return, v);
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
                  ow(a, o),
                  Ih(u, l);
                var f = Ih(u, o);
                for (l = 0; l < i.length; l += 2) {
                  var p = i[l],
                    h = i[l + 1];
                  p === "style"
                    ? dw(a, h)
                    : p === "dangerouslySetInnerHTML"
                    ? iw(a, h)
                    : p === "children"
                    ? di(a, h)
                    : ug(a, p, h, f);
                }
                switch (u) {
                  case "input":
                    xh(a, o);
                    break;
                  case "textarea":
                    lw(a, o);
                    break;
                  case "select":
                    var m = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var y = o.value;
                    y != null
                      ? Ro(a, !!o.multiple, y, !1)
                      : m !== !!o.multiple &&
                        (o.defaultValue != null
                          ? Ro(a, !!o.multiple, o.defaultValue, !0)
                          : Ro(a, !!o.multiple, o.multiple ? [] : "", !1));
                }
                a[xi] = o;
              } catch (v) {
                ce(e, e.return, v);
              }
          }
          break;
        case 6:
          if ((lr(t, e), Ir(e), n & 4)) {
            if (e.stateNode === null) throw Error(P(162));
            (a = e.stateNode), (o = e.memoizedProps);
            try {
              a.nodeValue = o;
            } catch (v) {
              ce(e, e.return, v);
            }
          }
          break;
        case 3:
          if (
            (lr(t, e),
            Ir(e),
            n & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              mi(t.containerInfo);
            } catch (v) {
              ce(e, e.return, v);
            }
          break;
        case 4:
          lr(t, e), Ir(e);
          break;
        case 13:
          lr(t, e),
            Ir(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (Hg = ge())),
            n & 4 && $L(e);
          break;
        case 22:
          if (
            ((p = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((qe = (f = qe) || p), lr(t, e), (qe = f)) : lr(t, e),
            Ir(e),
            n & 8192)
          ) {
            if (
              ((f = e.memoizedState !== null),
              (e.stateNode.isHidden = f) && !p && e.mode & 1)
            )
              for (R = e, p = e.child; p !== null; ) {
                for (h = R = p; R !== null; ) {
                  switch (((m = R), (y = m.child), m.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      li(4, m, m.return);
                      break;
                    case 1:
                      Fo(m, m.return);
                      var x = m.stateNode;
                      if (typeof x.componentWillUnmount == "function") {
                        (n = m), (r = m.return);
                        try {
                          (t = n),
                            (x.props = t.memoizedProps),
                            (x.state = t.memoizedState),
                            x.componentWillUnmount();
                        } catch (v) {
                          ce(n, r, v);
                        }
                      }
                      break;
                    case 5:
                      Fo(m, m.return);
                      break;
                    case 22:
                      if (m.memoizedState !== null) {
                        qL(h);
                        continue;
                      }
                  }
                  y !== null ? ((y.return = m), (R = y)) : qL(h);
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
                          (u.style.display = sw("display", l)));
                  } catch (v) {
                    ce(e, e.return, v);
                  }
                }
              } else if (h.tag === 6) {
                if (p === null)
                  try {
                    h.stateNode.nodeValue = f ? "" : h.memoizedProps;
                  } catch (v) {
                    ce(e, e.return, v);
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
          lr(t, e), Ir(e), n & 4 && $L(e);
          break;
        case 21:
          break;
        default:
          lr(t, e), Ir(e);
      }
    }
    function Ir(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null; ) {
              if (NS(r)) {
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
              n.flags & 32 && (di(a, ""), (n.flags &= -33));
              var o = WL(e);
              eg(e, o, a);
              break;
            case 3:
            case 4:
              var l = n.stateNode.containerInfo,
                u = WL(e);
              bh(e, u, l);
              break;
            default:
              throw Error(P(161));
          }
        } catch (i) {
          ce(e, e.return, i);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function eE(e, t, r) {
      (R = e), US(e, t, r);
    }
    function US(e, t, r) {
      for (var n = (e.mode & 1) !== 0; R !== null; ) {
        var a = R,
          o = a.child;
        if (a.tag === 22 && n) {
          var l = a.memoizedState !== null || Ud;
          if (!l) {
            var u = a.alternate,
              i = (u !== null && u.memoizedState !== null) || qe;
            u = Ud;
            var f = qe;
            if (((Ud = l), (qe = i) && !f))
              for (R = a; R !== null; )
                (l = R),
                  (i = l.child),
                  l.tag === 22 && l.memoizedState !== null
                    ? QL(a)
                    : i !== null
                    ? ((i.return = l), (R = i))
                    : QL(a);
            for (; o !== null; ) (R = o), US(o, t, r), (o = o.sibling);
            (R = a), (Ud = u), (qe = f);
          }
          GL(e, t, r);
        } else
          a.subtreeFlags & 8772 && o !== null
            ? ((o.return = a), (R = o))
            : GL(e, t, r);
      }
    }
    function GL(e) {
      for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
          var r = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  qe || Ff(5, t);
                  break;
                case 1:
                  var n = t.stateNode;
                  if (t.flags & 4 && !qe)
                    if (r === null) n.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? r.memoizedProps
                          : ur(t.type, r.memoizedProps);
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
                        h !== null && mi(h);
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
            qe || (t.flags & 512 && Jh(t));
          } catch (m) {
            ce(t, t.return, m);
          }
        }
        if (t === e) {
          R = null;
          break;
        }
        if (((r = t.sibling), r !== null)) {
          (r.return = t.return), (R = r);
          break;
        }
        R = t.return;
      }
    }
    function qL(e) {
      for (; R !== null; ) {
        var t = R;
        if (t === e) {
          R = null;
          break;
        }
        var r = t.sibling;
        if (r !== null) {
          (r.return = t.return), (R = r);
          break;
        }
        R = t.return;
      }
    }
    function QL(e) {
      for (; R !== null; ) {
        var t = R;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                Ff(4, t);
              } catch (i) {
                ce(t, r, i);
              }
              break;
            case 1:
              var n = t.stateNode;
              if (typeof n.componentDidMount == "function") {
                var a = t.return;
                try {
                  n.componentDidMount();
                } catch (i) {
                  ce(t, a, i);
                }
              }
              var o = t.return;
              try {
                Jh(t);
              } catch (i) {
                ce(t, o, i);
              }
              break;
            case 5:
              var l = t.return;
              try {
                Jh(t);
              } catch (i) {
                ce(t, l, i);
              }
          }
        } catch (i) {
          ce(t, t.return, i);
        }
        if (t === e) {
          R = null;
          break;
        }
        var u = t.sibling;
        if (u !== null) {
          (u.return = t.return), (R = u);
          break;
        }
        R = t.return;
      }
    }
    var tE = Math.ceil,
      yf = br.ReactCurrentDispatcher,
      Og = br.ReactCurrentOwner,
      qt = br.ReactCurrentBatchConfig,
      U = 0,
      Te = null,
      ve = null,
      _e = 0,
      Et = 0,
      Do = Gn(0),
      Se = 0,
      ki = null,
      Ca = 0,
      Df = 0,
      Ug = 0,
      ui = null,
      ht = null,
      Hg = 0,
      $o = 1 / 0,
      $r = null,
      vf = !1,
      tg = null,
      Un = null,
      Hd = !1,
      An = null,
      xf = 0,
      ii = 0,
      rg = null,
      Kd = -1,
      Xd = 0;
    function at() {
      return U & 6 ? ge() : Kd !== -1 ? Kd : (Kd = ge());
    }
    function Hn(e) {
      return e.mode & 1
        ? U & 2 && _e !== 0
          ? _e & -_e
          : O3.transition !== null
          ? (Xd === 0 && (Xd = Sw()), Xd)
          : ((e = W),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Mw(e.type))),
            e)
        : 1;
    }
    function fr(e, t, r, n) {
      if (50 < ii) throw ((ii = 0), (rg = null), Error(P(185)));
      Pi(e, r, n),
        (!(U & 2) || e !== Te) &&
          (e === Te && (!(U & 2) && (Df |= r), Se === 4 && Dn(e, _e)),
          xt(e, n),
          r === 1 &&
            U === 0 &&
            !(t.mode & 1) &&
            (($o = ge() + 500), Ef && qn()));
    }
    function xt(e, t) {
      var r = e.callbackNode;
      HP(e, t);
      var n = tf(e, e === Te ? _e : 0);
      if (n === 0)
        r !== null && tL(r), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((t = n & -n), e.callbackPriority !== t)) {
        if ((r != null && tL(r), t === 1))
          e.tag === 0 ? B3(KL.bind(null, e)) : Kw(KL.bind(null, e)),
            A3(function () {
              !(U & 6) && qn();
            }),
            (r = null);
        else {
          switch (Cw(n)) {
            case 1:
              r = cg;
              break;
            case 4:
              r = Lw;
              break;
            case 16:
              r = ef;
              break;
            case 536870912:
              r = ww;
              break;
            default:
              r = ef;
          }
          r = QS(r, HS.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = r);
      }
    }
    function HS(e, t) {
      if (((Kd = -1), (Xd = 0), U & 6)) throw Error(P(327));
      var r = e.callbackNode;
      if (Bo() && e.callbackNode !== r) return null;
      var n = tf(e, e === Te ? _e : 0);
      if (n === 0) return null;
      if (n & 30 || n & e.expiredLanes || t) t = Lf(e, n);
      else {
        t = n;
        var a = U;
        U |= 2;
        var o = jS();
        (Te !== e || _e !== t) && (($r = null), ($o = ge() + 500), va(e, t));
        do
          try {
            aE();
            break;
          } catch (u) {
            VS(e, u);
          }
        while (!0);
        kg(),
          (yf.current = o),
          (U = a),
          ve !== null ? (t = 0) : ((Te = null), (_e = 0), (t = Se));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Mh(e)), a !== 0 && ((n = a), (t = ng(e, a)))),
          t === 1)
        )
          throw ((r = ki), va(e, 0), Dn(e, n), xt(e, ge()), r);
        if (t === 6) Dn(e, n);
        else {
          if (
            ((a = e.current.alternate),
            !(n & 30) &&
              !rE(a) &&
              ((t = Lf(e, n)),
              t === 2 && ((o = Mh(e)), o !== 0 && ((n = o), (t = ng(e, o)))),
              t === 1))
          )
            throw ((r = ki), va(e, 0), Dn(e, n), xt(e, ge()), r);
          switch (((e.finishedWork = a), (e.finishedLanes = n), t)) {
            case 0:
            case 1:
              throw Error(P(345));
            case 2:
              ma(e, ht, $r);
              break;
            case 3:
              if (
                (Dn(e, n),
                (n & 130023424) === n && ((t = Hg + 500 - ge()), 10 < t))
              ) {
                if (tf(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & n) !== n)) {
                  at(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Bh(ma.bind(null, e, ht, $r), t);
                break;
              }
              ma(e, ht, $r);
              break;
            case 4:
              if ((Dn(e, n), (n & 4194240) === n)) break;
              for (t = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - dr(n);
                (o = 1 << l), (l = t[l]), l > a && (a = l), (n &= ~o);
              }
              if (
                ((n = a),
                (n = ge() - n),
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
                    : 1960 * tE(n / 1960)) - n),
                10 < n)
              ) {
                e.timeoutHandle = Bh(ma.bind(null, e, ht, $r), n);
                break;
              }
              ma(e, ht, $r);
              break;
            case 5:
              ma(e, ht, $r);
              break;
            default:
              throw Error(P(329));
          }
        }
      }
      return xt(e, ge()), e.callbackNode === r ? HS.bind(null, e) : null;
    }
    function ng(e, t) {
      var r = ui;
      return (
        e.current.memoizedState.isDehydrated && (va(e, t).flags |= 256),
        (e = Lf(e, t)),
        e !== 2 && ((t = ht), (ht = r), t !== null && ag(t)),
        e
      );
    }
    function ag(e) {
      ht === null ? (ht = e) : ht.push.apply(ht, e);
    }
    function rE(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && ((r = r.stores), r !== null))
            for (var n = 0; n < r.length; n++) {
              var a = r[n],
                o = a.getSnapshot;
              a = a.value;
              try {
                if (!cr(o(), a)) return !1;
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
    function Dn(e, t) {
      for (
        t &= ~Ug,
          t &= ~Df,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var r = 31 - dr(t),
          n = 1 << r;
        (e[r] = -1), (t &= ~n);
      }
    }
    function KL(e) {
      if (U & 6) throw Error(P(327));
      Bo();
      var t = tf(e, 0);
      if (!(t & 1)) return xt(e, ge()), null;
      var r = Lf(e, t);
      if (e.tag !== 0 && r === 2) {
        var n = Mh(e);
        n !== 0 && ((t = n), (r = ng(e, n)));
      }
      if (r === 1) throw ((r = ki), va(e, 0), Dn(e, t), xt(e, ge()), r);
      if (r === 6) throw Error(P(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        ma(e, ht, $r),
        xt(e, ge()),
        null
      );
    }
    function Vg(e, t) {
      var r = U;
      U |= 1;
      try {
        return e(t);
      } finally {
        (U = r), U === 0 && (($o = ge() + 500), Ef && qn());
      }
    }
    function Ia(e) {
      An !== null && An.tag === 0 && !(U & 6) && Bo();
      var t = U;
      U |= 1;
      var r = qt.transition,
        n = W;
      try {
        if (((qt.transition = null), (W = 1), e)) return e();
      } finally {
        (W = n), (qt.transition = r), (U = t), !(U & 6) && qn();
      }
    }
    function jg() {
      (Et = Do.current), ee(Do);
    }
    function va(e, t) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var r = e.timeoutHandle;
      if ((r !== -1 && ((e.timeoutHandle = -1), R3(r)), ve !== null))
        for (r = ve.return; r !== null; ) {
          var n = r;
          switch ((Sg(n), n.tag)) {
            case 1:
              (n = n.type.childContextTypes), n != null && lf();
              break;
            case 3:
              jo(), ee(yt), ee(Qe), Dg();
              break;
            case 5:
              Fg(n);
              break;
            case 4:
              jo();
              break;
            case 13:
              ee(ue);
              break;
            case 19:
              ee(ue);
              break;
            case 10:
              Pg(n.type._context);
              break;
            case 22:
            case 23:
              jg();
          }
          r = r.return;
        }
      if (
        ((Te = e),
        (ve = e = Vn(e.current, null)),
        (_e = Et = t),
        (Se = 0),
        (ki = null),
        (Ug = Df = Ca = 0),
        (ht = ui = null),
        ga !== null)
      ) {
        for (t = 0; t < ga.length; t++)
          if (((r = ga[t]), (n = r.interleaved), n !== null)) {
            r.interleaved = null;
            var a = n.next,
              o = r.pending;
            if (o !== null) {
              var l = o.next;
              (o.next = a), (n.next = l);
            }
            r.pending = n;
          }
        ga = null;
      }
      return e;
    }
    function VS(e, t) {
      do {
        var r = ve;
        try {
          if ((kg(), (Gd.current = gf), hf)) {
            for (var n = ie.memoizedState; n !== null; ) {
              var a = n.queue;
              a !== null && (a.pending = null), (n = n.next);
            }
            hf = !1;
          }
          if (
            ((Sa = 0),
            (Ee = we = ie = null),
            (oi = !1),
            (Si = 0),
            (Og.current = null),
            r === null || r.return === null)
          ) {
            (Se = 1), (ki = t), (ve = null);
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
              var y = zL(l);
              if (y !== null) {
                (y.flags &= -257),
                  NL(y, l, u, o, t),
                  y.mode & 1 && _L(o, f, t),
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
                  _L(o, f, t), Wg();
                  break e;
                }
                i = Error(P(426));
              }
            } else if (re && u.mode & 1) {
              var T = zL(l);
              if (T !== null) {
                !(T.flags & 65536) && (T.flags |= 256),
                  NL(T, l, u, o, t),
                  Cg(Wo(i, u));
                break e;
              }
            }
            (o = i = Wo(i, u)),
              Se !== 4 && (Se = 2),
              ui === null ? (ui = [o]) : ui.push(o),
              (o = l);
            do {
              switch (o.tag) {
                case 3:
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var d = IS(o, i, t);
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
                        (Un === null || !Un.has(c))))
                  ) {
                    (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                    var g = kS(o, u, t);
                    EL(o, g);
                    break e;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          $S(r);
        } catch (L) {
          (t = L), ve === r && r !== null && (ve = r = r.return);
          continue;
        }
        break;
      } while (!0);
    }
    function jS() {
      var e = yf.current;
      return (yf.current = gf), e === null ? gf : e;
    }
    function Wg() {
      (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
        Te === null || (!(Ca & 268435455) && !(Df & 268435455)) || Dn(Te, _e);
    }
    function Lf(e, t) {
      var r = U;
      U |= 2;
      var n = jS();
      (Te !== e || _e !== t) && (($r = null), va(e, t));
      do
        try {
          nE();
          break;
        } catch (a) {
          VS(e, a);
        }
      while (!0);
      if ((kg(), (U = r), (yf.current = n), ve !== null)) throw Error(P(261));
      return (Te = null), (_e = 0), Se;
    }
    function nE() {
      for (; ve !== null; ) WS(ve);
    }
    function aE() {
      for (; ve !== null && !DP(); ) WS(ve);
    }
    function WS(e) {
      var t = qS(e.alternate, e, Et);
      (e.memoizedProps = e.pendingProps),
        t === null ? $S(e) : (ve = t),
        (Og.current = null);
    }
    function $S(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((r = Y3(r, t)), r !== null)) {
            (r.flags &= 32767), (ve = r);
            return;
          }
          if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          else {
            (Se = 6), (ve = null);
            return;
          }
        } else if (((r = Z3(r, t, Et)), r !== null)) {
          ve = r;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          ve = t;
          return;
        }
        ve = t = e;
      } while (t !== null);
      Se === 0 && (Se = 5);
    }
    function ma(e, t, r) {
      var n = W,
        a = qt.transition;
      try {
        (qt.transition = null), (W = 1), oE(e, t, r, n);
      } finally {
        (qt.transition = a), (W = n);
      }
      return null;
    }
    function oE(e, t, r, n) {
      do Bo();
      while (An !== null);
      if (U & 6) throw Error(P(327));
      r = e.finishedWork;
      var a = e.finishedLanes;
      if (r === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(P(177));
      (e.callbackNode = null), (e.callbackPriority = 0);
      var o = r.lanes | r.childLanes;
      if (
        (VP(e, o),
        e === Te && ((ve = Te = null), (_e = 0)),
        (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
          Hd ||
          ((Hd = !0),
          QS(ef, function () {
            return Bo(), null;
          })),
        (o = (r.flags & 15990) !== 0),
        r.subtreeFlags & 15990 || o)
      ) {
        (o = qt.transition), (qt.transition = null);
        var l = W;
        W = 1;
        var u = U;
        (U |= 4),
          (Og.current = null),
          b3(e, r),
          OS(r, e),
          E3(zh),
          (rf = !!_h),
          (zh = _h = null),
          (e.current = r),
          eE(r, e, a),
          RP(),
          (U = u),
          (W = l),
          (qt.transition = o);
      } else e.current = r;
      if (
        (Hd && ((Hd = !1), (An = e), (xf = a)),
        (o = e.pendingLanes),
        o === 0 && (Un = null),
        zP(r.stateNode, n),
        xt(e, ge()),
        t !== null)
      )
        for (n = e.onRecoverableError, r = 0; r < t.length; r++)
          (a = t[r]), n(a.value, { componentStack: a.stack, digest: a.digest });
      if (vf) throw ((vf = !1), (e = tg), (tg = null), e);
      return (
        xf & 1 && e.tag !== 0 && Bo(),
        (o = e.pendingLanes),
        o & 1 ? (e === rg ? ii++ : ((ii = 0), (rg = e))) : (ii = 0),
        qn(),
        null
      );
    }
    function Bo() {
      if (An !== null) {
        var e = Cw(xf),
          t = qt.transition,
          r = W;
        try {
          if (((qt.transition = null), (W = 16 > e ? 16 : e), An === null))
            var n = !1;
          else {
            if (((e = An), (An = null), (xf = 0), U & 6)) throw Error(P(331));
            var a = U;
            for (U |= 4, R = e.current; R !== null; ) {
              var o = R,
                l = o.child;
              if (R.flags & 16) {
                var u = o.deletions;
                if (u !== null) {
                  for (var i = 0; i < u.length; i++) {
                    var f = u[i];
                    for (R = f; R !== null; ) {
                      var p = R;
                      switch (p.tag) {
                        case 0:
                        case 11:
                        case 15:
                          li(8, p, o);
                      }
                      var h = p.child;
                      if (h !== null) (h.return = p), (R = h);
                      else
                        for (; R !== null; ) {
                          p = R;
                          var m = p.sibling,
                            y = p.return;
                          if ((zS(p), p === f)) {
                            R = null;
                            break;
                          }
                          if (m !== null) {
                            (m.return = y), (R = m);
                            break;
                          }
                          R = y;
                        }
                    }
                  }
                  var x = o.alternate;
                  if (x !== null) {
                    var v = x.child;
                    if (v !== null) {
                      x.child = null;
                      do {
                        var T = v.sibling;
                        (v.sibling = null), (v = T);
                      } while (v !== null);
                    }
                  }
                  R = o;
                }
              }
              if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (R = l);
              else
                e: for (; R !== null; ) {
                  if (((o = R), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        li(9, o, o.return);
                    }
                  var d = o.sibling;
                  if (d !== null) {
                    (d.return = o.return), (R = d);
                    break e;
                  }
                  R = o.return;
                }
            }
            var s = e.current;
            for (R = s; R !== null; ) {
              l = R;
              var c = l.child;
              if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (R = c);
              else
                e: for (l = s; R !== null; ) {
                  if (((u = R), u.flags & 2048))
                    try {
                      switch (u.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ff(9, u);
                      }
                    } catch (L) {
                      ce(u, u.return, L);
                    }
                  if (u === l) {
                    R = null;
                    break e;
                  }
                  var g = u.sibling;
                  if (g !== null) {
                    (g.return = u.return), (R = g);
                    break e;
                  }
                  R = u.return;
                }
            }
            if (
              ((U = a),
              qn(),
              Er && typeof Er.onPostCommitFiberRoot == "function")
            )
              try {
                Er.onPostCommitFiberRoot(Sf, e);
              } catch {}
            n = !0;
          }
          return n;
        } finally {
          (W = r), (qt.transition = t);
        }
      }
      return !1;
    }
    function XL(e, t, r) {
      (t = Wo(r, t)),
        (t = IS(e, t, 1)),
        (e = On(e, t, 1)),
        (t = at()),
        e !== null && (Pi(e, 1, t), xt(e, t));
    }
    function ce(e, t, r) {
      if (e.tag === 3) XL(e, e, r);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            XL(t, e, r);
            break;
          } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof n.componentDidCatch == "function" &&
                (Un === null || !Un.has(n)))
            ) {
              (e = Wo(r, e)),
                (e = kS(t, e, 1)),
                (t = On(t, e, 1)),
                (e = at()),
                t !== null && (Pi(t, 1, e), xt(t, e));
              break;
            }
          }
          t = t.return;
        }
    }
    function lE(e, t, r) {
      var n = e.pingCache;
      n !== null && n.delete(t),
        (t = at()),
        (e.pingedLanes |= e.suspendedLanes & r),
        Te === e &&
          (_e & r) === r &&
          (Se === 4 || (Se === 3 && (_e & 130023424) === _e && 500 > ge() - Hg)
            ? va(e, 0)
            : (Ug |= r)),
        xt(e, t);
    }
    function GS(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Pd), (Pd <<= 1), !(Pd & 130023424) && (Pd = 4194304))
          : (t = 1));
      var r = at();
      (e = Yr(e, t)), e !== null && (Pi(e, t, r), xt(e, r));
    }
    function uE(e) {
      var t = e.memoizedState,
        r = 0;
      t !== null && (r = t.retryLane), GS(e, r);
    }
    function iE(e, t) {
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
      n !== null && n.delete(t), GS(e, r);
    }
    var qS;
    qS = function (e, t, r) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || yt.current) gt = !0;
        else {
          if (!(e.lanes & r) && !(t.flags & 128)) return (gt = !1), X3(e, t, r);
          gt = !!(e.flags & 131072);
        }
      else (gt = !1), re && t.flags & 1048576 && Xw(t, df, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var n = t.type;
          Qd(e, t), (e = t.pendingProps);
          var a = Uo(t, Qe.current);
          No(t, r), (a = Ag(null, t, n, e, a, r));
          var o = _g();
          return (
            (t.flags |= 1),
            typeof a == "object" &&
            a !== null &&
            typeof a.render == "function" &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                vt(n) ? ((o = !0), uf(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                Tg(t),
                (a.updater = Tf),
                (t.stateNode = a),
                (a._reactInternals = t),
                $h(t, n, e, r),
                (t = Qh(null, t, n, !0, o, r)))
              : ((t.tag = 0),
                re && o && wg(t),
                nt(null, t, a, r),
                (t = t.child)),
            t
          );
        case 16:
          n = t.elementType;
          e: {
            switch (
              (Qd(e, t),
              (e = t.pendingProps),
              (a = n._init),
              (n = a(n._payload)),
              (t.type = n),
              (a = t.tag = dE(n)),
              (e = ur(n, e)),
              a)
            ) {
              case 0:
                t = qh(null, t, n, e, r);
                break e;
              case 1:
                t = UL(null, t, n, e, r);
                break e;
              case 11:
                t = BL(null, t, n, e, r);
                break e;
              case 14:
                t = OL(null, t, n, ur(n.type, e), r);
                break e;
            }
            throw Error(P(306, n, ""));
          }
          return t;
        case 0:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : ur(n, a)),
            qh(e, t, n, a, r)
          );
        case 1:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : ur(n, a)),
            UL(e, t, n, a, r)
          );
        case 3:
          e: {
            if ((MS(t), e === null)) throw Error(P(387));
            (n = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              bw(e, t),
              pf(t, n, null, r);
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
                (a = Wo(Error(P(423)), t)), (t = HL(e, t, n, r, a));
                break e;
              } else if (n !== a) {
                (a = Wo(Error(P(424)), t)), (t = HL(e, t, n, r, a));
                break e;
              } else
                for (
                  Tt = Bn(t.stateNode.containerInfo.firstChild),
                    Mt = t,
                    re = !0,
                    sr = null,
                    r = nS(t, null, n, r),
                    t.child = r;
                  r;

                )
                  (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            else {
              if ((Ho(), n === a)) {
                t = Jr(e, t, r);
                break e;
              }
              nt(e, t, n, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            aS(t),
            e === null && Vh(t),
            (n = t.type),
            (a = t.pendingProps),
            (o = e !== null ? e.memoizedProps : null),
            (l = a.children),
            Nh(n, a) ? (l = null) : o !== null && Nh(n, o) && (t.flags |= 32),
            TS(e, t),
            nt(e, t, l, r),
            t.child
          );
        case 6:
          return e === null && Vh(t), null;
        case 13:
          return FS(e, t, r);
        case 4:
          return (
            Mg(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = Vo(t, null, n, r)) : nt(e, t, n, r),
            t.child
          );
        case 11:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : ur(n, a)),
            BL(e, t, n, a, r)
          );
        case 7:
          return nt(e, t, t.pendingProps, r), t.child;
        case 8:
          return nt(e, t, t.pendingProps.children, r), t.child;
        case 12:
          return nt(e, t, t.pendingProps.children, r), t.child;
        case 10:
          e: {
            if (
              ((n = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (l = a.value),
              K(ff, n._currentValue),
              (n._currentValue = l),
              o !== null)
            )
              if (cr(o.value, l)) {
                if (o.children === a.children && !yt.current) {
                  t = Jr(e, t, r);
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
                          (i = Kr(-1, r & -r)), (i.tag = 2);
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
                          jh(o.return, r, t),
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
                      jh(l, r, t),
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
            nt(e, t, a.children, r), (t = t.child);
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (n = t.pendingProps.children),
            No(t, r),
            (a = Qt(a)),
            (n = n(a)),
            (t.flags |= 1),
            nt(e, t, n, r),
            t.child
          );
        case 14:
          return (
            (n = t.type),
            (a = ur(n, t.pendingProps)),
            (a = ur(n.type, a)),
            OL(e, t, n, a, r)
          );
        case 15:
          return PS(e, t, t.type, t.pendingProps, r);
        case 17:
          return (
            (n = t.type),
            (a = t.pendingProps),
            (a = t.elementType === n ? a : ur(n, a)),
            Qd(e, t),
            (t.tag = 1),
            vt(n) ? ((e = !0), uf(t)) : (e = !1),
            No(t, r),
            tS(t, n, a),
            $h(t, n, a, r),
            Qh(null, t, n, !0, e, r)
          );
        case 19:
          return DS(e, t, r);
        case 22:
          return ES(e, t, r);
      }
      throw Error(P(156, t.tag));
    };
    function QS(e, t) {
      return xw(e, t);
    }
    function sE(e, t, r, n) {
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
    function Gt(e, t, r, n) {
      return new sE(e, t, r, n);
    }
    function $g(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function dE(e) {
      if (typeof e == "function") return $g(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === sg)) return 11;
        if (e === dg) return 14;
      }
      return 2;
    }
    function Vn(e, t) {
      var r = e.alternate;
      return (
        r === null
          ? ((r = Gt(e.tag, t, e.key, e.mode)),
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
    function Zd(e, t, r, n, a, o) {
      var l = 2;
      if (((n = e), typeof e == "function")) $g(e) && (l = 1);
      else if (typeof e == "string") l = 5;
      else
        e: switch (e) {
          case wo:
            return xa(r.children, a, o, t);
          case ig:
            (l = 8), (a |= 8);
            break;
          case mh:
            return (
              (e = Gt(12, r, t, a | 2)), (e.elementType = mh), (e.lanes = o), e
            );
          case hh:
            return (
              (e = Gt(13, r, t, a)), (e.elementType = hh), (e.lanes = o), e
            );
          case gh:
            return (
              (e = Gt(19, r, t, a)), (e.elementType = gh), (e.lanes = o), e
            );
          case rw:
            return Rf(r, a, o, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ew:
                  l = 10;
                  break e;
                case tw:
                  l = 9;
                  break e;
                case sg:
                  l = 11;
                  break e;
                case dg:
                  l = 14;
                  break e;
                case Tn:
                  (l = 16), (n = null);
                  break e;
              }
            throw Error(P(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = Gt(l, r, t, a)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = o),
        t
      );
    }
    function xa(e, t, r, n) {
      return (e = Gt(7, e, n, t)), (e.lanes = r), e;
    }
    function Rf(e, t, r, n) {
      return (
        (e = Gt(22, e, n, t)),
        (e.elementType = rw),
        (e.lanes = r),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function fh(e, t, r) {
      return (e = Gt(6, e, null, t)), (e.lanes = r), e;
    }
    function ch(e, t, r) {
      return (
        (t = Gt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function fE(e, t, r, n, a) {
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
        (this.eventTimes = Xm(0)),
        (this.expirationTimes = Xm(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Xm(0)),
        (this.identifierPrefix = n),
        (this.onRecoverableError = a),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Gg(e, t, r, n, a, o, l, u, i) {
      return (
        (e = new fE(e, t, r, u, i)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Gt(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
          element: n,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Tg(o),
        e
      );
    }
    function cE(e, t, r) {
      var n =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Lo,
        key: n == null ? null : "" + n,
        children: e,
        containerInfo: t,
        implementation: r,
      };
    }
    function KS(e) {
      if (!e) return Wn;
      e = e._reactInternals;
      e: {
        if (Pa(e) !== e || e.tag !== 1) throw Error(P(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (vt(t.type)) {
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
        if (vt(r)) return Qw(e, r, t);
      }
      return t;
    }
    function XS(e, t, r, n, a, o, l, u, i) {
      return (
        (e = Gg(r, n, !0, e, a, o, l, u, i)),
        (e.context = KS(null)),
        (r = e.current),
        (n = at()),
        (a = Hn(r)),
        (o = Kr(n, a)),
        (o.callback = t ?? null),
        On(r, o, a),
        (e.current.lanes = a),
        Pi(e, a, n),
        xt(e, n),
        e
      );
    }
    function Af(e, t, r, n) {
      var a = t.current,
        o = at(),
        l = Hn(a);
      return (
        (r = KS(r)),
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Kr(o, l)),
        (t.payload = { element: e }),
        (n = n === void 0 ? null : n),
        n !== null && (t.callback = n),
        (e = On(a, t, l)),
        e !== null && (fr(e, a, l, o), $d(e, a, l)),
        l
      );
    }
    function wf(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function ZL(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function qg(e, t) {
      ZL(e, t), (e = e.alternate) && ZL(e, t);
    }
    function pE() {
      return null;
    }
    var ZS =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function Qg(e) {
      this._internalRoot = e;
    }
    _f.prototype.render = Qg.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(P(409));
      Af(e, t, null, null);
    };
    _f.prototype.unmount = Qg.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ia(function () {
          Af(null, e, null, null);
        }),
          (t[Zr] = null);
      }
    };
    function _f(e) {
      this._internalRoot = e;
    }
    _f.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Pw();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < Fn.length && t !== 0 && t < Fn[r].priority; r++);
        Fn.splice(r, 0, e), r === 0 && Tw(e);
      }
    };
    function Kg(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function zf(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function YL() {}
    function mE(e, t, r, n, a) {
      if (a) {
        if (typeof n == "function") {
          var o = n;
          n = function () {
            var f = wf(l);
            o.call(f);
          };
        }
        var l = XS(t, n, e, 0, null, !1, !1, "", YL);
        return (
          (e._reactRootContainer = l),
          (e[Zr] = l.current),
          yi(e.nodeType === 8 ? e.parentNode : e),
          Ia(),
          l
        );
      }
      for (; (a = e.lastChild); ) e.removeChild(a);
      if (typeof n == "function") {
        var u = n;
        n = function () {
          var f = wf(i);
          u.call(f);
        };
      }
      var i = Gg(e, 0, !1, null, null, !1, !1, "", YL);
      return (
        (e._reactRootContainer = i),
        (e[Zr] = i.current),
        yi(e.nodeType === 8 ? e.parentNode : e),
        Ia(function () {
          Af(t, i, r, n);
        }),
        i
      );
    }
    function Nf(e, t, r, n, a) {
      var o = r._reactRootContainer;
      if (o) {
        var l = o;
        if (typeof a == "function") {
          var u = a;
          a = function () {
            var i = wf(l);
            u.call(i);
          };
        }
        Af(t, l, e, a);
      } else l = mE(r, t, e, a, n);
      return wf(l);
    }
    Iw = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = Ju(t.pendingLanes);
            r !== 0 &&
              (pg(t, r | 1),
              xt(t, ge()),
              !(U & 6) && (($o = ge() + 500), qn()));
          }
          break;
        case 13:
          Ia(function () {
            var n = Yr(e, 1);
            if (n !== null) {
              var a = at();
              fr(n, e, 1, a);
            }
          }),
            qg(e, 1);
      }
    };
    mg = function (e) {
      if (e.tag === 13) {
        var t = Yr(e, 134217728);
        if (t !== null) {
          var r = at();
          fr(t, e, 134217728, r);
        }
        qg(e, 134217728);
      }
    };
    kw = function (e) {
      if (e.tag === 13) {
        var t = Hn(e),
          r = Yr(e, t);
        if (r !== null) {
          var n = at();
          fr(r, e, t, n);
        }
        qg(e, t);
      }
    };
    Pw = function () {
      return W;
    };
    Ew = function (e, t) {
      var r = W;
      try {
        return (W = e), t();
      } finally {
        W = r;
      }
    };
    Ph = function (e, t, r) {
      switch (t) {
        case "input":
          if ((xh(e, r), (t = r.name), r.type === "radio" && t != null)) {
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
                var a = Pf(n);
                if (!a) throw Error(P(90));
                aw(n), xh(n, a);
              }
            }
          }
          break;
        case "textarea":
          lw(e, r);
          break;
        case "select":
          (t = r.value), t != null && Ro(e, !!r.multiple, t, !1);
      }
    };
    pw = Vg;
    mw = Ia;
    var hE = { usingClientEntryPoint: !1, Events: [Ti, ko, Pf, fw, cw, Vg] },
      Ku = {
        findFiberByHostInstance: ha,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
      },
      gE = {
        bundleType: Ku.bundleType,
        version: Ku.version,
        rendererPackageName: Ku.rendererPackageName,
        rendererConfig: Ku.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: br.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return (e = yw(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ku.findFiberByHostInstance || pE,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !Xu.isDisabled && Xu.supportsFiber)
    )
      try {
        (Sf = Xu.inject(gE)), (Er = Xu);
      } catch {}
    var Xu;
    Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hE;
    Rt.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Kg(t)) throw Error(P(200));
      return cE(e, t, null, r);
    };
    Rt.createRoot = function (e, t) {
      if (!Kg(e)) throw Error(P(299));
      var r = !1,
        n = "",
        a = ZS;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
        (t = Gg(e, 1, !1, null, null, r, !1, n, a)),
        (e[Zr] = t.current),
        yi(e.nodeType === 8 ? e.parentNode : e),
        new Qg(t)
      );
    };
    Rt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(P(188))
          : ((e = Object.keys(e).join(",")), Error(P(268, e)));
      return (e = yw(t)), (e = e === null ? null : e.stateNode), e;
    };
    Rt.flushSync = function (e) {
      return Ia(e);
    };
    Rt.hydrate = function (e, t, r) {
      if (!zf(t)) throw Error(P(200));
      return Nf(null, e, t, !0, r);
    };
    Rt.hydrateRoot = function (e, t, r) {
      if (!Kg(e)) throw Error(P(405));
      var n = (r != null && r.hydratedSources) || null,
        a = !1,
        o = "",
        l = ZS;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (a = !0),
          r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (l = r.onRecoverableError)),
        (t = XS(t, null, e, 1, r ?? null, a, !1, o, l)),
        (e[Zr] = t.current),
        yi(e),
        n)
      )
        for (e = 0; e < n.length; e++)
          (r = n[e]),
            (a = r._getVersion),
            (a = a(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, a])
              : t.mutableSourceEagerHydrationData.push(r, a);
      return new _f(t);
    };
    Rt.render = function (e, t, r) {
      if (!zf(t)) throw Error(P(200));
      return Nf(null, e, t, !1, r);
    };
    Rt.unmountComponentAtNode = function (e) {
      if (!zf(e)) throw Error(P(40));
      return e._reactRootContainer
        ? (Ia(function () {
            Nf(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Zr] = null);
            });
          }),
          !0)
        : !1;
    };
    Rt.unstable_batchedUpdates = Vg;
    Rt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
      if (!zf(r)) throw Error(P(200));
      if (e == null || e._reactInternals === void 0) throw Error(P(38));
      return Nf(e, t, r, !1, n);
    };
    Rt.version = "18.2.0-next-9e3b772b8-20220608";
  });
  var Xg = Ze((BM, bS) => {
    "use strict";
    function JS() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JS);
        } catch (e) {
          console.error(e);
        }
    }
    JS(), (bS.exports = YS());
  });
  var tC = Ze((Zg) => {
    "use strict";
    var eC = Xg();
    (Zg.createRoot = eC.createRoot), (Zg.hydrateRoot = eC.hydrateRoot);
    var OM;
  });
  var Bf = de(Xt());
  var E = de(Xt());
  var Ui = de(_t());
  function ky(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (r = ky(e[t])) && (n && (n += " "), (n += r));
      else for (t in e) e[t] && (n && (n += " "), (n += t));
    return n;
  }
  function Py() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
      (e = arguments[r++]) && (t = ky(e)) && (n && (n += " "), (n += t));
    return n;
  }
  var Ey = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
    Ty = Py,
    Bi = (e, t) => (r) => {
      var n;
      if (t?.variants == null) return Ty(e, r?.class, r?.className);
      let { variants: a, defaultVariants: o } = t,
        l = Object.keys(a).map((f) => {
          let p = r?.[f],
            h = o?.[f];
          if (p === null) return null;
          let m = Ey(p) || Ey(h);
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
                  let [v, T] = x;
                  return Array.isArray(T)
                    ? T.includes({ ...o, ...u }[v])
                    : { ...o, ...u }[v] === T;
                })
                  ? [...f, h, m]
                  : f;
              }, []);
      return Ty(e, l, i, r?.class, r?.className);
    };
  var za = {
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
  function My(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var a = e.length;
        for (t = 0; t < a; t++)
          e[t] && (r = My(e[t])) && (n && (n += " "), (n += r));
      } else for (r in e) e[r] && (n && (n += " "), (n += r));
    return n;
  }
  function Fy() {
    for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
      (e = arguments[r]) && (t = My(e)) && (n && (n += " "), (n += t));
    return n;
  }
  var Jf = "-";
  function WC(e) {
    let t = GC(e),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e;
    function a(l) {
      let u = l.split(Jf);
      return u[0] === "" && u.length !== 1 && u.shift(), Ay(u, t) || $C(l);
    }
    function o(l, u) {
      let i = r[l] || [];
      return u && n[l] ? [...i, ...n[l]] : i;
    }
    return { getClassGroupId: a, getConflictingClassGroupIds: o };
  }
  function Ay(e, t) {
    if (e.length === 0) return t.classGroupId;
    let r = e[0],
      n = t.nextPart.get(r),
      a = n ? Ay(e.slice(1), n) : void 0;
    if (a) return a;
    if (t.validators.length === 0) return;
    let o = e.join(Jf);
    return t.validators.find(({ validator: l }) => l(o))?.classGroupId;
  }
  var Dy = /^\[(.+)\]$/;
  function $C(e) {
    if (Dy.test(e)) {
      let t = Dy.exec(e)[1],
        r = t?.substring(0, t.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  }
  function GC(e) {
    let { theme: t, prefix: r } = e,
      n = { nextPart: new Map(), validators: [] };
    return (
      QC(Object.entries(e.classGroups), r).forEach(([o, l]) => {
        Yf(l, n, o, t);
      }),
      n
    );
  }
  function Yf(e, t, r, n) {
    e.forEach((a) => {
      if (typeof a == "string") {
        let o = a === "" ? t : Ry(t, a);
        o.classGroupId = r;
        return;
      }
      if (typeof a == "function") {
        if (qC(a)) {
          Yf(a(n), t, r, n);
          return;
        }
        t.validators.push({ validator: a, classGroupId: r });
        return;
      }
      Object.entries(a).forEach(([o, l]) => {
        Yf(l, Ry(t, o), r, n);
      });
    });
  }
  function Ry(e, t) {
    let r = e;
    return (
      t.split(Jf).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  }
  function qC(e) {
    return e.isThemeGetter;
  }
  function QC(e, t) {
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
  function KC(e) {
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
  var _y = "!";
  function XC(e) {
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
        let T = l[v];
        if (i === 0) {
          if (T === n && (r || l.slice(v, v + a) === t)) {
            u.push(l.slice(f, v)), (f = v + a);
            continue;
          }
          if (T === "/") {
            p = v;
            continue;
          }
        }
        T === "[" ? i++ : T === "]" && i--;
      }
      let h = u.length === 0 ? l : l.substring(f),
        m = h.startsWith(_y),
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
  function ZC(e) {
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
  function YC(e) {
    return { cache: KC(e.cacheSize), splitModifiers: XC(e), ...WC(e) };
  }
  var JC = /\s+/;
  function bC(e, t) {
    let {
        splitModifiers: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: a,
      } = t,
      o = new Set();
    return e
      .trim()
      .split(JC)
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
        let y = ZC(u).join(":");
        return {
          isTailwindClass: !0,
          modifierId: i ? y + _y : y,
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
  function eI() {
    let e = 0,
      t,
      r,
      n = "";
    for (; e < arguments.length; )
      (t = arguments[e++]) && (r = zy(t)) && (n && (n += " "), (n += r));
    return n;
  }
  function zy(e) {
    if (typeof e == "string") return e;
    let t,
      r = "";
    for (let n = 0; n < e.length; n++)
      e[n] && (t = zy(e[n])) && (r && (r += " "), (r += t));
    return r;
  }
  function tI(e, ...t) {
    let r,
      n,
      a,
      o = l;
    function l(i) {
      let f = t.reduce((p, h) => h(p), e());
      return (r = YC(f)), (n = r.cache.get), (a = r.cache.set), (o = u), u(i);
    }
    function u(i) {
      let f = n(i);
      if (f) return f;
      let p = bC(i, r);
      return a(i, p), p;
    }
    return function () {
      return o(eI.apply(null, arguments));
    };
  }
  function Z(e) {
    let t = (r) => r[e] || [];
    return (t.isThemeGetter = !0), t;
  }
  var Ny = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    rI = /^\d+\/\d+$/,
    nI = new Set(["px", "full", "screen"]),
    aI = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    oI =
      /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    lI = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    uI = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    iI =
      /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  function Ar(e) {
    return Zn(e) || nI.has(e) || rI.test(e);
  }
  function en(e) {
    return Na(e, "length", gI);
  }
  function Zn(e) {
    return !!e && !Number.isNaN(Number(e));
  }
  function Oi(e) {
    return Na(e, "number", Zn);
  }
  function Zo(e) {
    return !!e && Number.isInteger(Number(e));
  }
  function sI(e) {
    return e.endsWith("%") && Zn(e.slice(0, -1));
  }
  function A(e) {
    return Ny.test(e);
  }
  function tn(e) {
    return aI.test(e);
  }
  var dI = new Set(["length", "size", "percentage"]);
  function fI(e) {
    return Na(e, dI, By);
  }
  function cI(e) {
    return Na(e, "position", By);
  }
  var pI = new Set(["image", "url"]);
  function mI(e) {
    return Na(e, pI, vI);
  }
  function hI(e) {
    return Na(e, "", yI);
  }
  function Yo() {
    return !0;
  }
  function Na(e, t, r) {
    let n = Ny.exec(e);
    return n
      ? n[1]
        ? typeof t == "string"
          ? n[1] === t
          : t.has(n[1])
        : r(n[2])
      : !1;
  }
  function gI(e) {
    return oI.test(e) && !lI.test(e);
  }
  function By() {
    return !1;
  }
  function yI(e) {
    return uI.test(e);
  }
  function vI(e) {
    return iI.test(e);
  }
  function xI() {
    let e = Z("colors"),
      t = Z("spacing"),
      r = Z("blur"),
      n = Z("brightness"),
      a = Z("borderColor"),
      o = Z("borderRadius"),
      l = Z("borderSpacing"),
      u = Z("borderWidth"),
      i = Z("contrast"),
      f = Z("grayscale"),
      p = Z("hueRotate"),
      h = Z("invert"),
      m = Z("gap"),
      y = Z("gradientColorStops"),
      x = Z("gradientColorStopPositions"),
      v = Z("inset"),
      T = Z("margin"),
      d = Z("opacity"),
      s = Z("padding"),
      c = Z("saturate"),
      g = Z("scale"),
      L = Z("sepia"),
      C = Z("skew"),
      S = Z("space"),
      w = Z("translate"),
      M = () => ["auto", "contain", "none"],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      H = () => ["auto", A, t],
      N = () => [A, t],
      Mr = () => ["", Ar, en],
      Ce = () => ["auto", Zn, A],
      Kn = () => [
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
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      lt = () => [
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
      Ne = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      ut = () => ["", "0", A],
      Ea = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Ke = () => [Zn, Oi],
      Lt = () => [Zn, A];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Yo],
        spacing: [Ar, en],
        blur: ["none", "", tn, A],
        brightness: Ke(),
        borderColor: [e],
        borderRadius: ["none", "", "full", tn, A],
        borderSpacing: N(),
        borderWidth: Mr(),
        contrast: Ke(),
        grayscale: ut(),
        hueRotate: Lt(),
        invert: ut(),
        gap: N(),
        gradientColorStops: [e],
        gradientColorStopPositions: [sI, en],
        inset: H(),
        margin: H(),
        opacity: Ke(),
        padding: N(),
        saturate: Ke(),
        scale: Ke(),
        sepia: ut(),
        skew: Lt(),
        space: N(),
        translate: N(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", A] }],
        container: ["container"],
        columns: [{ columns: [tn] }],
        "break-after": [{ "break-after": Ea() }],
        "break-before": [{ "break-before": Ea() }],
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
        "object-position": [{ object: [...Kn(), A] }],
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
        z: [{ z: ["auto", Zo, A] }],
        basis: [{ basis: H() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", A] }],
        grow: [{ grow: ut() }],
        shrink: [{ shrink: ut() }],
        order: [{ order: ["first", "last", "none", Zo, A] }],
        "grid-cols": [{ "grid-cols": [Yo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Zo, A] }, A] }],
        "col-start": [{ "col-start": Ce() }],
        "col-end": [{ "col-end": Ce() }],
        "grid-rows": [{ "grid-rows": [Yo] }],
        "row-start-end": [{ row: ["auto", { span: [Zo, A] }, A] }],
        "row-start": [{ "row-start": Ce() }],
        "row-end": [{ "row-end": Ce() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", A] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", A] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...Ne()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...Ne(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...Ne(), "baseline"] }],
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
        m: [{ m: [T] }],
        mx: [{ mx: [T] }],
        my: [{ my: [T] }],
        ms: [{ ms: [T] }],
        me: [{ me: [T] }],
        mt: [{ mt: [T] }],
        mr: [{ mr: [T] }],
        mb: [{ mb: [T] }],
        ml: [{ ml: [T] }],
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
              { screen: [tn] },
              tn,
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
        "font-size": [{ text: ["base", tn, en] }],
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
              Oi,
            ],
          },
        ],
        "font-family": [{ font: [Yo] }],
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
        "line-clamp": [{ "line-clamp": ["none", Zn, Oi] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ar,
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
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ar, en] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ar, A] }],
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
        "bg-position": [{ bg: [...Kn(), cI] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", fI] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              mI,
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
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [u] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [u] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [d] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [Ar, A] }],
        "outline-w": [{ outline: [Ar, en] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Mr() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [d] }],
        "ring-offset-w": [{ "ring-offset": [Ar, en] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", tn, hI] }],
        "shadow-color": [{ shadow: [Yo] }],
        opacity: [{ opacity: [d] }],
        "mix-blend": [{ "mix-blend": lt() }],
        "bg-blend": [{ "bg-blend": lt() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [i] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", tn, A] }],
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
        duration: [{ duration: Lt() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", A] }],
        delay: [{ delay: Lt() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", A] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [g] }],
        "scale-x": [{ "scale-x": [g] }],
        "scale-y": [{ "scale-y": [g] }],
        rotate: [{ rotate: [Zo, A] }],
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
        "stroke-w": [{ stroke: [Ar, en, Oi] }],
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
  var Oy = tI(xI);
  function be(...e) {
    return Oy(Fy(e));
  }
  var LI = Bi(
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
    Jo = Ui.forwardRef(({ className: e, variant: t, size: r, ...n }, a) =>
      Ui.createElement("button", {
        className: be(LI({ variant: t, size: r, className: e })),
        ref: a,
        ...n,
      })
    );
  Jo.displayName = "Button";
  var Hi = de(_t());
  var Vi = Hi.forwardRef(({ className: e, type: t, ...r }, n) =>
    Hi.createElement("input", {
      type: t,
      className: be(
        "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r,
    })
  );
  Vi.displayName = "Input";
  var it = de(_t());
  var ji = it.forwardRef(({ className: e, ...t }, r) =>
    it.createElement("div", {
      ref: r,
      className: be(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
  ji.displayName = "Card";
  var bf = it.forwardRef(({ className: e, ...t }, r) =>
    it.createElement("div", {
      ref: r,
      className: be("flex flex-col space-y-1.5 p-6", e),
      ...t,
    })
  );
  bf.displayName = "CardHeader";
  var ec = it.forwardRef(({ className: e, ...t }, r) =>
    it.createElement("h3", {
      ref: r,
      className: be("text-lg font-semibold leading-none tracking-tight", e),
      ...t,
    })
  );
  ec.displayName = "CardTitle";
  var tc = it.forwardRef(({ className: e, ...t }, r) =>
    it.createElement("p", {
      ref: r,
      className: be("text-sm text-muted-foreground", e),
      ...t,
    })
  );
  tc.displayName = "CardDescription";
  var rc = it.forwardRef(({ className: e, ...t }, r) =>
    it.createElement("div", { ref: r, className: be("p-6 pt-0", e), ...t })
  );
  rc.displayName = "CardContent";
  var nc = it.forwardRef(({ className: e, ...t }, r) =>
    it.createElement("div", {
      ref: r,
      className: be(" flex items-center p-6 pt-0", e),
      ...t,
    })
  );
  nc.displayName = "CardFooter";
  var sd = de(_t());
  function mr() {
    return (
      (mr = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      mr.apply(this, arguments)
    );
  }
  var id = de(_t(), 1);
  var po = de(_t(), 1),
    E2 = de(ox(), 1);
  var le = de(_t(), 1);
  var S2 = de(_t(), 1);
  function C2(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t);
  }
  function lx(...e) {
    return (t) => e.forEach((r) => C2(r, t));
  }
  var vm = (0, le.forwardRef)((e, t) => {
    let { children: r, ...n } = e,
      a = le.Children.toArray(r),
      o = a.find(k2);
    if (o) {
      let l = o.props.children,
        u = a.map((i) =>
          i === o
            ? le.Children.count(l) > 1
              ? le.Children.only(null)
              : (0, le.isValidElement)(l)
              ? l.props.children
              : null
            : i
        );
      return (0, le.createElement)(
        ym,
        mr({}, n, { ref: t }),
        (0, le.isValidElement)(l) ? (0, le.cloneElement)(l, void 0, u) : null
      );
    }
    return (0, le.createElement)(ym, mr({}, n, { ref: t }), r);
  });
  vm.displayName = "Slot";
  var ym = (0, le.forwardRef)((e, t) => {
    let { children: r, ...n } = e;
    return (0, le.isValidElement)(r)
      ? (0, le.cloneElement)(r, {
          ...P2(n, r.props),
          ref: t ? lx(t, r.ref) : r.ref,
        })
      : le.Children.count(r) > 1
      ? le.Children.only(null)
      : null;
  });
  ym.displayName = "SlotClone";
  var I2 = ({ children: e }) => (0, le.createElement)(le.Fragment, null, e);
  function k2(e) {
    return (0, le.isValidElement)(e) && e.type === I2;
  }
  function P2(e, t) {
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
  var T2 = [
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
    ux = T2.reduce((e, t) => {
      let r = (0, po.forwardRef)((n, a) => {
        let { asChild: o, ...l } = n,
          u = o ? vm : t;
        return (
          (0, po.useEffect)(() => {
            window[Symbol.for("radix-ui")] = !0;
          }, []),
          (0, po.createElement)(u, mr({}, l, { ref: a }))
        );
      });
      return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
  var M2 = (0, id.forwardRef)((e, t) =>
      (0, id.createElement)(
        ux.label,
        mr({}, e, {
          ref: t,
          onMouseDown: (r) => {
            var n;
            (n = e.onMouseDown) === null || n === void 0 || n.call(e, r),
              !r.defaultPrevented && r.detail > 1 && r.preventDefault();
          },
        })
      )
    ),
    ix = M2;
  var D2 = Bi(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    ),
    dd = sd.forwardRef(({ className: e, ...t }, r) =>
      sd.createElement("label", { ref: r, className: be(D2(), e), ...t })
    );
  dd.displayName = ix.displayName;
  var fd = de(_t());
  var xm = fd.forwardRef(({ className: e, ...t }, r) =>
    fd.createElement("textarea", {
      className: be(
        "flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t,
    })
  );
  xm.displayName = "Textarea";
  var $l = de(_t());
  var sx = {
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
  var R2 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    F = (e, t) => {
      let r = (0, $l.forwardRef)(
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
          (0, $l.createElement)(
            "svg",
            {
              ref: f,
              ...sx,
              width: a,
              height: a,
              stroke: n,
              strokeWidth: l ? (Number(o) * 24) / Number(a) : o,
              className: `lucide lucide-${R2(e)}`,
              ...i,
            },
            [
              ...t.map(([p, h]) => (0, $l.createElement)(p, h)),
              ...((Array.isArray(u) ? u : [u]) || []),
            ]
          )
      );
      return (r.displayName = `${e}`), r;
    };
  var Gl = F("AlertTriangle", [
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
  var ql = F("ArrowDown", [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ]);
  var Ql = F("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ]);
  var Kl = F("ArrowUp", [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }],
  ]);
  var Xl = F("BadgePlus", [
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
  var Zl = F("Bot", [
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
  var Yl = F("CheckCheck", [
    ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
    ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }],
  ]);
  var Jl = F("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
  var bl = F("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
  var eu = F("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
  var tu = F("Coins", [
    ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
    ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
    ["path", { d: "M7 6h1v4", key: "1obek4" }],
    ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
  ]);
  var ru = F("Command", [
    [
      "path",
      {
        d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
        key: "11bfej",
      },
    ],
  ]);
  var nu = F("CreditCard", [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ]);
  var au = F("FileText", [
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
  var ou = F("File", [
    [
      "path",
      {
        d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        key: "1nnpy2",
      },
    ],
    ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ]);
  var lu = F("FolderClosed", [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360",
      },
    ],
    ["path", { d: "M2 10h20", key: "1ir3d8" }],
  ]);
  var uu = F("HelpCircle", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ]);
  var iu = F("Image", [
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
  var su = F("Import", [
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
  var du = F("Key", [
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
    ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
    ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }],
  ]);
  var fu = F("Laptop", [
    [
      "path",
      {
        d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
        key: "tarvll",
      },
    ],
  ]);
  var cu = F("LayoutDashboard", [
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
  var pu = F("Loader2", [
    ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
  ]);
  var mu = F("MessageSquare", [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ]);
  var hu = F("Moon", [
    ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ]);
  var gu = F("MoreVertical", [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
    ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ]);
  var yu = F("Pizza", [
    ["path", { d: "M15 11h.01", key: "rns66s" }],
    ["path", { d: "M11 15h.01", key: "k85uqc" }],
    ["path", { d: "M16 16h.01", key: "1f9h7w" }],
    ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
    ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }],
  ]);
  var vu = F("Plus", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ]);
  var xu = F("Settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ]);
  var Lu = F("SunMedium", [
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
  var wu = F("Trash", [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ]);
  var Su = F("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]);
  var Cu = F("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ]);
  var Iu = F("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]);
  var In = {
    badgeplus: Xl,
    import: su,
    logo: ru,
    folder: lu,
    dashboard: cu,
    close: Iu,
    key: du,
    checkcheck: Yl,
    coin: tu,
    spinner: pu,
    chevronLeft: bl,
    chevronRight: eu,
    trash: wu,
    post: au,
    page: ou,
    media: iu,
    settings: xu,
    billing: nu,
    ellipsis: gu,
    add: vu,
    bot: Zl,
    warning: Gl,
    user: Cu,
    arrowRight: Ql,
    arrowUp: Kl,
    arrowDown: ql,
    help: uu,
    pizza: yu,
    sun: Lu,
    moon: hu,
    laptop: fu,
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
    message: mu,
    twitter: Su,
    check: Jl,
  };
  var Bu = de(Xt(), 1);
  var Pe = de(Xt(), 1),
    Mx = de(px(), 1);
  var he = de(Xt(), 1),
    kn = () => {},
    mt = kn(),
    ku = Object,
    O = (e) => e === mt,
    ar = (e) => typeof e == "function",
    Sr = (e, t) => ({ ...e, ...t }),
    j2 = (e) => ar(e.then),
    cd = new WeakMap(),
    W2 = 0,
    Pu = (e) => {
      let t = typeof e,
        r = e && e.constructor,
        n = r == Date,
        a,
        o;
      if (ku(e) === e && !n && r != RegExp) {
        if (((a = cd.get(e)), a)) return a;
        if (((a = ++W2 + "~"), cd.set(e, a), r == Array)) {
          for (a = "@", o = 0; o < e.length; o++) a += Pu(e[o]) + ",";
          cd.set(e, a);
        }
        if (r == ku) {
          a = "#";
          let l = ku.keys(e).sort();
          for (; !O((o = l.pop())); )
            O(e[o]) || (a += o + ":" + Pu(e[o]) + ",");
          cd.set(e, a);
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
    wr = new WeakMap(),
    wm = {},
    pd = {},
    Tm = "undefined",
    hd = typeof window != Tm,
    Cm = typeof document != Tm,
    $2 = () => hd && typeof window.requestAnimationFrame != Tm,
    Mm = (e, t) => {
      let r = wr.get(e);
      return [
        () => (!O(t) && e.get(t)) || wm,
        (n) => {
          if (!O(t)) {
            let a = e.get(t);
            t in pd || (pd[t] = a), r[5](t, Sr(a, n), a || wm);
          }
        },
        r[6],
        () => (!O(t) && t in pd ? pd[t] : (!O(t) && e.get(t)) || wm),
      ];
    },
    Im = !0,
    G2 = () => Im,
    [km, Pm] =
      hd && window.addEventListener
        ? [
            window.addEventListener.bind(window),
            window.removeEventListener.bind(window),
          ]
        : [kn, kn],
    q2 = () => {
      let e = Cm && document.visibilityState;
      return O(e) || e !== "hidden";
    },
    Q2 = (e) => (
      Cm && document.addEventListener("visibilitychange", e),
      km("focus", e),
      () => {
        Cm && document.removeEventListener("visibilitychange", e),
          Pm("focus", e);
      }
    ),
    K2 = (e) => {
      let t = () => {
          (Im = !0), e();
        },
        r = () => {
          Im = !1;
        };
      return (
        km("online", t),
        km("offline", r),
        () => {
          Pm("online", t), Pm("offline", r);
        }
      );
    },
    X2 = { isOnline: G2, isVisible: q2 },
    Z2 = { initFocus: Q2, initReconnect: K2 },
    Fm = !he.default.useId,
    ho = !hd || "Deno" in window,
    gx = (e) => ($2() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
    Eu = ho ? he.useEffect : he.useLayoutEffect,
    Sm = typeof navigator < "u" && navigator.connection,
    mx =
      !ho &&
      Sm &&
      (["slow-2g", "2g"].includes(Sm.effectiveType) || Sm.saveData),
    gd = (e) => {
      if (ar(e))
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
            ? Pu(e)
            : ""),
        [e, t]
      );
    },
    Y2 = 0,
    md = () => ++Y2,
    yx = 0,
    vx = 1,
    xx = 2,
    J2 = 3,
    go = {
      __proto__: null,
      ERROR_REVALIDATE_EVENT: J2,
      FOCUS_EVENT: yx,
      MUTATE_EVENT: xx,
      RECONNECT_EVENT: vx,
    };
  async function Dm(...e) {
    let [t, r, n, a] = e,
      o = Sr(
        { populateCache: !0, throwOnError: !0 },
        typeof a == "boolean" ? { revalidate: a } : a || {}
      ),
      l = o.populateCache,
      u = o.rollbackOnError,
      i = o.optimisticData,
      f = o.revalidate !== !1,
      p = (y) => (typeof u == "function" ? u(y) : u !== !1),
      h = o.throwOnError;
    if (ar(r)) {
      let y = r,
        x = [],
        v = t.keys();
      for (let T of v) !/^\$(inf|sub)\$/.test(T) && y(t.get(T)._k) && x.push(T);
      return Promise.all(x.map(m));
    }
    return m(r);
    async function m(y) {
      let [x] = gd(y);
      if (!x) return;
      let [v, T] = Mm(t, x),
        [d, s, c, g] = wr.get(t),
        L = d[x],
        C = () =>
          f && (delete c[x], delete g[x], L && L[0])
            ? L[0](xx).then(() => v().data)
            : v().data;
      if (e.length < 3) return C();
      let S = n,
        w,
        M = md();
      s[x] = [M, 0];
      let I = !O(i),
        H = v(),
        N = H.data,
        Mr = H._c,
        Ce = O(Mr) ? N : Mr;
      if ((I && ((i = ar(i) ? i(Ce, N) : i), T({ data: i, _c: Ce })), ar(S)))
        try {
          S = S(Ce);
        } catch ($) {
          w = $;
        }
      if (S && j2(S))
        if (
          ((S = await S.catch(($) => {
            w = $;
          })),
          M !== s[x][0])
        ) {
          if (w) throw w;
          return S;
        } else w && I && p(w) && ((l = !0), (S = Ce), T({ data: S, _c: mt }));
      l && (w || (ar(l) && (S = l(S, Ce)), T({ data: S, error: mt, _c: mt }))),
        (s[x][1] = md());
      let Kn = await C();
      if ((T({ _c: mt }), w)) {
        if (h) throw w;
        return;
      }
      return l ? Kn : S;
    }
  }
  var hx = (e, t) => {
      for (let r in e) e[r][0] && e[r][0](t);
    },
    Lx = (e, t) => {
      if (!wr.has(e)) {
        let r = Sr(Z2, t),
          n = {},
          a = Dm.bind(mt, e),
          o = kn,
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
            if (!wr.has(e) && (wr.set(e, [n, {}, {}, {}, a, i, u]), !ho)) {
              let p = r.initFocus(setTimeout.bind(mt, hx.bind(mt, n, yx))),
                h = r.initReconnect(setTimeout.bind(mt, hx.bind(mt, n, vx)));
              o = () => {
                p && p(), h && h(), wr.delete(e);
              };
            }
          };
        return f(), [e, a, f, o];
      }
      return [e, wr.get(e)[4]];
    },
    b2 = (e, t, r, n, a) => {
      let o = r.errorRetryCount,
        l = a.retryCount,
        u =
          ~~((Math.random() + 0.5) * (1 << (l < 8 ? l : 8))) *
          r.errorRetryInterval;
      (!O(o) && l > o) || setTimeout(n, u, a);
    },
    eP = (e, t) => Pu(e) == Pu(t),
    [Rm, wx] = Lx(new Map()),
    Am = Sr(
      {
        onLoadingSlow: kn,
        onSuccess: kn,
        onError: kn,
        onErrorRetry: b2,
        onDiscarded: kn,
        revalidateOnFocus: !0,
        revalidateOnReconnect: !0,
        revalidateIfStale: !0,
        shouldRetryOnError: !0,
        errorRetryInterval: mx ? 1e4 : 5e3,
        focusThrottleInterval: 5 * 1e3,
        dedupingInterval: 2 * 1e3,
        loadingTimeout: mx ? 5e3 : 3e3,
        compare: eP,
        isPaused: () => !1,
        cache: Rm,
        mutate: wx,
        fallback: {},
      },
      X2
    ),
    Sx = (e, t) => {
      let r = Sr(e, t);
      if (t) {
        let { use: n, fallback: a } = e,
          { use: o, fallback: l } = t;
        n && o && (r.use = n.concat(o)), a && l && (r.fallback = Sr(a, l));
      }
      return r;
    },
    Em = (0, he.createContext)({}),
    Cx = (e) => {
      let { value: t } = e,
        r = (0, he.useContext)(Em),
        n = ar(t),
        a = (0, he.useMemo)(() => (n ? t(r) : t), [n, r, t]),
        o = (0, he.useMemo)(() => (n ? a : Sx(r, a)), [n, r, a]),
        l = a && a.provider,
        u = (0, he.useRef)(mt);
      l && !u.current && (u.current = Lx(l(o.cache || Rm), a));
      let i = u.current;
      return (
        i && ((o.cache = i[0]), (o.mutate = i[1])),
        Eu(() => {
          if (i) return i[2] && i[2](), i[3];
        }, []),
        (0, he.createElement)(Em.Provider, Sr(e, { value: o }))
      );
    },
    Ix = hd && window.__SWR_DEVTOOLS_USE__,
    tP = Ix ? window.__SWR_DEVTOOLS_USE__ : [],
    rP = () => {
      Ix && (window.__SWR_DEVTOOLS_REACT__ = he.default);
    },
    nP = (e) =>
      ar(e[1])
        ? [e[0], e[1], e[2] || {}]
        : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}],
    kx = () => Sr(Am, (0, he.useContext)(Em));
  var aP = (e) => (t, r, n) =>
      e(
        t,
        r &&
          ((...o) => {
            let [l] = gd(t),
              [, , , u] = wr.get(Rm),
              i = u[l];
            return O(i) ? r(...o) : (delete u[l], i);
          }),
        n
      ),
    oP = tP.concat(aP),
    Px = (e) =>
      function (...r) {
        let n = kx(),
          [a, o, l] = nP(r),
          u = Sx(n, l),
          i = e,
          { use: f } = u,
          p = (f || []).concat(oP);
        for (let h = p.length; h--; ) i = p[h](i);
        return i(a, o || u.fetcher || null, u);
      };
  var Ex = (e, t, r) => {
    let n = t[e] || (t[e] = []);
    return (
      n.push(r),
      () => {
        let a = n.indexOf(r);
        a >= 0 && ((n[a] = n[n.length - 1]), n.pop());
      }
    );
  };
  rP();
  var Tx =
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
    _m = { dedupe: !0 },
    lP = (e, t, r) => {
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
        [y, x, v, T] = wr.get(n),
        [d, s] = gd(e),
        c = (0, Pe.useRef)(!1),
        g = (0, Pe.useRef)(!1),
        L = (0, Pe.useRef)(d),
        C = (0, Pe.useRef)(t),
        S = (0, Pe.useRef)(r),
        w = () => S.current,
        M = () => w().isVisible() && w().isOnline(),
        [I, H, N, Mr] = Mm(n, d),
        Ce = (0, Pe.useRef)({}).current,
        Kn = O(l) ? r.fallback[d] : l,
        $ = (V, X) => {
          for (let Be in Ce) {
            let pe = Be;
            if (pe === "data") {
              if (!a(V[pe], X[pe]) && (!O(V[pe]) || !a(Ta, X[pe]))) return !1;
            } else if (X[pe] !== V[pe]) return !1;
          }
          return !0;
        },
        lt = (0, Pe.useMemo)(() => {
          let V =
              !d || !t
                ? !1
                : O(u)
                ? w().isPaused() || o
                  ? !1
                  : O(i)
                  ? !0
                  : i
                : u,
            X = (Xe) => {
              let Dr = Sr(Xe);
              return (
                delete Dr._k,
                V ? { isValidating: !0, isLoading: !0, ...Dr } : Dr
              );
            },
            Be = I(),
            pe = Mr(),
            pr = X(Be),
            Ra = Be === pe ? pr : X(pe),
            Me = pr;
          return [
            () => {
              let Xe = X(I());
              return $(Xe, Me)
                ? ((Me.data = Xe.data),
                  (Me.isLoading = Xe.isLoading),
                  (Me.isValidating = Xe.isValidating),
                  (Me.error = Xe.error),
                  Me)
                : ((Me = Xe), Xe);
            },
            () => Ra,
          ];
        }, [n, d]),
        Ne = (0, Mx.useSyncExternalStore)(
          (0, Pe.useCallback)(
            (V) =>
              N(d, (X, Be) => {
                $(Be, X) || V();
              }),
            [n, d]
          ),
          lt[0],
          lt[1]
        ),
        ut = !c.current,
        Ea = y[d] && y[d].length > 0,
        Ke = Ne.data,
        Lt = O(Ke) ? Kn : Ke,
        Xn = Ne.error,
        Qo = (0, Pe.useRef)(Lt),
        Ta = m ? (O(Ke) ? Qo.current : Ke) : Lt,
        Fi =
          Ea && !O(Xn)
            ? !1
            : ut && !O(u)
            ? u
            : w().isPaused()
            ? !1
            : o
            ? O(Lt)
              ? !1
              : i
            : O(Lt) || i,
        Ma = !!(d && t && ut && Fi),
        Of = O(Ne.isValidating) ? Ma : Ne.isValidating,
        Fr = O(Ne.isLoading) ? Ma : Ne.isLoading,
        Fa = (0, Pe.useCallback)(
          async (V) => {
            let X = C.current;
            if (!d || !X || g.current || w().isPaused()) return !1;
            let Be,
              pe,
              pr = !0,
              Ra = V || {},
              Me = !v[d] || !Ra.dedupe,
              Xe = () =>
                Fm
                  ? !g.current && d === L.current && c.current
                  : d === L.current,
              Dr = { isValidating: !1, isLoading: !1 },
              Yg = () => {
                H(Dr);
              },
              Jg = () => {
                let At = v[d];
                At && At[1] === pe && delete v[d];
              },
              bg = { isValidating: !0 };
            O(I().data) && (bg.isLoading = !0);
            try {
              if (
                (Me &&
                  (H(bg),
                  r.loadingTimeout &&
                    O(I().data) &&
                    setTimeout(() => {
                      pr && Xe() && w().onLoadingSlow(d, r);
                    }, r.loadingTimeout),
                  (v[d] = [X(s), md()])),
                ([Be, pe] = v[d]),
                (Be = await Be),
                Me && setTimeout(Jg, r.dedupingInterval),
                !v[d] || v[d][1] !== pe)
              )
                return Me && Xe() && w().onDiscarded(d), !1;
              Dr.error = mt;
              let At = x[d];
              if (!O(At) && (pe <= At[0] || pe <= At[1] || At[1] === 0))
                return Yg(), Me && Xe() && w().onDiscarded(d), !1;
              let Rr = I().data;
              (Dr.data = a(Rr, Be) ? Rr : Be),
                Me && Xe() && w().onSuccess(Be, d, r);
            } catch (At) {
              Jg();
              let Rr = w(),
                { shouldRetryOnError: Uf } = Rr;
              Rr.isPaused() ||
                ((Dr.error = At),
                Me &&
                  Xe() &&
                  (Rr.onError(At, d, Rr),
                  (Uf === !0 || (ar(Uf) && Uf(At))) &&
                    M() &&
                    Rr.onErrorRetry(
                      At,
                      d,
                      Rr,
                      (lC) => {
                        let Hf = y[d];
                        Hf && Hf[0] && Hf[0](go.ERROR_REVALIDATE_EVENT, lC);
                      },
                      { retryCount: (Ra.retryCount || 0) + 1, dedupe: !0 }
                    )));
            }
            return (pr = !1), Yg(), !0;
          },
          [d, n]
        ),
        Da = (0, Pe.useCallback)((...V) => Dm(n, L.current, ...V), []);
      if (
        (Eu(() => {
          (C.current = t), (S.current = r), O(Ke) || (Qo.current = Ke);
        }),
        Eu(() => {
          if (!d) return;
          let V = Fa.bind(mt, _m),
            X = 0,
            pe = Ex(d, y, (pr, Ra = {}) => {
              if (pr == go.FOCUS_EVENT) {
                let Me = Date.now();
                w().revalidateOnFocus &&
                  Me > X &&
                  M() &&
                  ((X = Me + w().focusThrottleInterval), V());
              } else if (pr == go.RECONNECT_EVENT)
                w().revalidateOnReconnect && M() && V();
              else {
                if (pr == go.MUTATE_EVENT) return Fa();
                if (pr == go.ERROR_REVALIDATE_EVENT) return Fa(Ra);
              }
            });
          return (
            (g.current = !1),
            (L.current = d),
            (c.current = !0),
            H({ _k: s }),
            Fi && (O(Lt) || ho ? V() : gx(V)),
            () => {
              (g.current = !0), pe();
            }
          );
        }, [d]),
        Eu(() => {
          let V;
          function X() {
            let pe = ar(f) ? f(I().data) : f;
            pe && V !== -1 && (V = setTimeout(Be, pe));
          }
          function Be() {
            !I().error && (p || w().isVisible()) && (h || w().isOnline())
              ? Fa(_m).then(X)
              : X();
          }
          return (
            X(),
            () => {
              V && (clearTimeout(V), (V = -1));
            }
          );
        }, [f, p, h, d]),
        (0, Pe.useDebugValue)(Ta),
        o && O(Lt) && d)
      ) {
        if (!Fm && ho)
          throw new Error(
            "Fallback data is required when using suspense in SSR."
          );
        (C.current = t), (S.current = r), (g.current = !1);
        let V = T[d];
        if (!O(V)) {
          let X = Da(V);
          Tx(X);
        }
        if (O(Xn)) {
          let X = Fa(_m);
          O(Ta) || ((X.status = "fulfilled"), (X.value = !0)), Tx(X);
        } else throw Xn;
      }
      return {
        mutate: Da,
        get data() {
          return (Ce.data = !0), Ta;
        },
        get error() {
          return (Ce.error = !0), Xn;
        },
        get isValidating() {
          return (Ce.isValidating = !0), Of;
        },
        get isLoading() {
          return (Ce.isLoading = !0), Fr;
        },
      };
    },
    hM = ku.defineProperty(Cx, "defaultValue", { value: Am }),
    Fx = Px(lP);
  var Dx =
    (e, t = 21) =>
    (r = t) => {
      let n = "",
        a = r;
      for (; a--; ) n += e[(Math.random() * e.length) | 0];
      return n;
    };
  var Ou = de(Xt(), 1);
  var yo = de(Xt(), 1),
    Tu = {
      code: "0",
      name: "text",
      parse: (e) => {
        if (typeof e != "string")
          throw new Error('"text" parts expect a string value.');
        return { type: "text", value: e };
      },
    },
    Mu = {
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
    Fu = {
      code: "2",
      name: "data",
      parse: (e) => {
        if (!Array.isArray(e))
          throw new Error('"data" parts expect an array value.');
        return { type: "data", value: e };
      },
    },
    Du = {
      code: "3",
      name: "error",
      parse: (e) => {
        if (typeof e != "string")
          throw new Error('"error" parts expect a string value.');
        return { type: "error", value: e };
      },
    },
    Ru = {
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
    Au = {
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
    _u = {
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
    zu = {
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
    Nu = {
      code: "8",
      name: "message_annotations",
      parse: (e) => {
        if (!Array.isArray(e))
          throw new Error('"message_annotations" parts expect an array value.');
        return { type: "message_annotations", value: e };
      },
    },
    uP = [Tu, Mu, Fu, Du, Ru, Au, _u, zu, Nu],
    iP = {
      [Tu.code]: Tu,
      [Mu.code]: Mu,
      [Fu.code]: Fu,
      [Du.code]: Du,
      [Ru.code]: Ru,
      [Au.code]: Au,
      [_u.code]: _u,
      [zu.code]: zu,
      [Nu.code]: Nu,
    },
    LM = {
      [Tu.name]: Tu.code,
      [Mu.name]: Mu.code,
      [Fu.name]: Fu.code,
      [Du.name]: Du.code,
      [Ru.name]: Ru.code,
      [Au.name]: Au.code,
      [_u.name]: _u.code,
      [zu.name]: zu.code,
      [Nu.name]: Nu.code,
    },
    sP = uP.map((e) => e.code),
    dP = (e) => {
      let t = e.indexOf(":");
      if (t === -1)
        throw new Error("Failed to parse stream string. No separator found.");
      let r = e.slice(0, t);
      if (!sP.includes(r))
        throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
      let n = r,
        a = e.slice(t + 1),
        o = JSON.parse(a);
      return iP[n].parse(o);
    },
    fP = 10;
  function cP(e, t) {
    let r = new Uint8Array(t),
      n = 0;
    for (let a of e) r.set(a, n), (n += a.length);
    return (e.length = 0), r;
  }
  async function* pP(e, { isAborted: t } = {}) {
    let r = new TextDecoder(),
      n = [],
      a = 0;
    for (;;) {
      let { value: o } = await e.read();
      if (o && (n.push(o), (a += o.length), o[o.length - 1] !== fP)) continue;
      if (n.length === 0) break;
      let l = cP(n, a);
      a = 0;
      let u = r
        .decode(l, { stream: !0 })
        .split(
          `
`
        )
        .filter((i) => i !== "")
        .map(dP);
      for (let i of u) yield i;
      if (t?.()) {
        e.cancel();
        break;
      }
    }
  }
  var Rx = Dx(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    7
  );
  function mP({
    api: e,
    threadId: t,
    credentials: r,
    headers: n,
    body: a,
    onError: o,
  }) {
    let [l, u] = (0, yo.useState)([]),
      [i, f] = (0, yo.useState)(""),
      [p, h] = (0, yo.useState)(void 0),
      [m, y] = (0, yo.useState)("awaiting_message"),
      [x, v] = (0, yo.useState)(void 0),
      T = (c) => {
        f(c.target.value);
      },
      d = async (c, g) => {
        var L;
        y("in_progress"),
          u((C) => {
            var S;
            return [...C, { ...c, id: (S = c.id) != null ? S : Rx() }];
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
          for await (let { type: S, value: w } of pP(C.body.getReader()))
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
                      id: (I = w.id) != null ? I : Rx(),
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
      handleInputChange: T,
      submitMessage: async (c, g) => {
        var L;
        (L = c?.preventDefault) == null || L.call(c),
          i !== "" && d({ role: "user", content: i }, g);
      },
      status: m,
      error: x,
    };
  }
  var Ax = mP;
  function zm() {
    let [e, t] = (0, E.useState)(!0),
      [r, n] = (0, E.useState)(),
      [a, o] = (0, E.useState)(),
      [l, u] = (0, E.useState)(!1),
      [i, f] = (0, E.useState)(!1),
      [p, h] = (0, E.useState)(""),
      [m, y] = (0, E.useState)(""),
      [x, v] = (0, E.useState)(!1),
      [T, d] = (0, E.useState)(window.innerWidth < 640),
      {
        status: s,
        messages: c,
        input: g,
        submitMessage: L,
        handleInputChange: C,
        threadId: S,
      } = Ax({
        api: `${za.url}api/chatbots/${window.chatbotConfig.chatbotId}/chat`,
      }),
      w = () => {
        u(!l);
      },
      M = (0, E.useRef)(null),
      I = (0, E.useRef)(null),
      H = (0, E.useRef)(null);
    (0, E.useEffect)(() => {
      s === "awaiting_message" && I.current && I.current.focus();
    }, [s]),
      (0, E.useEffect)(() => {
        M.current && (M.current.scrollTop = M.current.scrollHeight);
      }, [c]),
      (0, E.useEffect)(() => {
        i && H.current && H.current.scrollIntoView({ behavior: "smooth" });
      }, [i]),
      (0, E.useEffect)(() => {
        function $() {
          d(window.innerWidth < 640);
        }
        return (
          window.addEventListener("resize", $),
          () => window.removeEventListener("resize", $)
        );
      }, []),
      (0, E.useEffect)(() => {
        (async () => {
          t(!0);
          let lt = window.chatbotConfig.chatbotId;
          o(lt);
          let ut = await (
            await fetch(`${za.url}api/chatbots/${lt}/config`)
          ).json();
          n(ut), t(!1);
        })();
      }, []);
    async function N($) {
      $.preventDefault(), v(!0);
      let lt = await fetch(`${za.url}api/chatbots/${a}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatbotId: a,
          threadId: S || "",
          email: p,
          inquiry: m,
        }),
      });
      lt.ok
        ? (f(!1),
          c.push({
            id: String(c.length + 1),
            role: "assistant",
            content: r.inquiryAutomaticReplyText,
          }))
        : console.error(`Failed to send inquiry: ${lt}`),
        v(!1);
    }
    let Mr = T
        ? "fixed inset-0 flex flex-col"
        : "mr-3 flex flex-col min-w-[400px] max-w-md min-h-[65vh] max-h-[65vh]",
      Ce = T ? "fixed bottom-0 left-0 w-full bg-white" : "";
    return E.default.createElement(
      "div",
      { className: "fixed bottom-0 right-0 mb-4 z-50 flex items-end" },
      l &&
        E.default.createElement(
          ji,
          {
            className:
              Mr +
              " bg-white shadow-lg" +
              (l ? " slide-in" : "") +
              (T ? " overflow-auto" : ""),
          },
          E.default.createElement(
            "div",
            {
              style: { background: r ? r.chatHeaderBackgroundColor : "" },
              className:
                "flex rounded-t-lg shadow justify-between items-center p-4",
            },
            E.default.createElement(
              "h3",
              {
                style: { color: r ? r.chatHeaderTextColor : "" },
                className: "text-xl font-semibold",
              },
              r ? r.chatTitle : ""
            ),
            E.default.createElement(
              "div",
              null,
              E.default.createElement(
                Jo,
                { onClick: w, variant: "ghost" },
                E.default.createElement(In.close, {
                  style: { color: r ? r.chatHeaderTextColor : "" },
                  className: "h-5 w-5 text-gray-500",
                })
              )
            )
          ),
          E.default.createElement(
            "div",
            {
              className:
                "p-4 space-y-4 flex-grow overflow-auto custom-scrollbar w-full",
              style: { marginBottom: T ? "70px" : "0" },
              ref: M,
            },
            E.default.createElement(
              "div",
              { className: "space-y-4" },
              E.default.createElement(
                "div",
                { key: "0", className: "flex w-5/6 items-end gap-2" },
                E.default.createElement(
                  "div",
                  {
                    className: "rounded-lg bg-zinc-200 p-2",
                    style: {
                      background: r ? r.chatbotReplyBackgroundColor : "",
                    },
                  },
                  E.default.createElement(
                    "p",
                    {
                      className: "text-md",
                      style: { color: r ? r.chatbotReplyTextColor : "" },
                    },
                    r ? r.welcomeMessage : ""
                  )
                )
              )
            ),
            c.map(($) => {
              if ($.role === "assistant") {
                let lt =
                  c.filter((Ne) => Ne.role === "assistant").indexOf($) + 1;
                return E.default.createElement(
                  "div",
                  { key: $.id, className: "flex w-5/6 items-end gap-2" },
                  E.default.createElement(
                    "div",
                    {
                      className: "rounded-lg bg-zinc-200 p-2",
                      style: {
                        color: r ? r.chatbotReplyTextColor : "",
                        background: r ? r.chatbotReplyBackgroundColor : "",
                      },
                    },
                    $.content
                      .replace(/\【.*?】/g, "")
                      .split("```")
                      .map((Ne, ut) =>
                        ut % 2 === 1
                          ? E.default.createElement(
                              "pre",
                              { key: ut },
                              E.default.createElement("code", null, Ne)
                            )
                          : Ne.split(
                              `
`
                            ).map((Ea, Ke, Lt) =>
                              E.default.createElement(
                                "p",
                                {
                                  key: `${ut}-${Ke}`,
                                  className: `text-md ${
                                    Ke < Lt.length - 1 ? "mb-4" : ""
                                  }`,
                                },
                                Ea.split("**").map((Xn, Qo) => {
                                  if (Qo % 2 === 1)
                                    return E.default.createElement(
                                      "strong",
                                      { key: Qo },
                                      Xn
                                    );
                                  {
                                    let Ta =
                                        /\[([^\]]+)\]\((https?:\/\/[^\s]+[^.])\)/g,
                                      Fi = /(https?:\/\/[^\s]+[^.])/g,
                                      Ma = Xn.split(Ta);
                                    return Ma.map((Of, Fr) =>
                                      Fr % 3 === 1
                                        ? E.default.createElement(
                                            "a",
                                            {
                                              className: "underline",
                                              target: "_blank",
                                              key: Fr,
                                              href: Ma[Fr + 1],
                                            },
                                            Ma[Fr]
                                          )
                                        : Fr % 2 === 0
                                        ? Of.split(Fi).map((Da, V) =>
                                            V % 2 === 1
                                              ? E.default.createElement(
                                                  "a",
                                                  {
                                                    className: "underline",
                                                    target: "_blank",
                                                    key: `${Fr}-${V}`,
                                                    href: Da,
                                                  },
                                                  Da
                                                )
                                              : E.default.createElement(
                                                  "span",
                                                  { key: `${Fr}-${V}` },
                                                  Da
                                                )
                                          )
                                        : null
                                    );
                                  }
                                })
                              )
                            )
                      ),
                    lt > 0 &&
                      lt == r.inquiryDisplayLinkAfterXMessage &&
                      s !== "in_progress" &&
                      r.inquiryEnabled &&
                      E.default.createElement(
                        "button",
                        {
                          className:
                            "mt-4 flex flex-row items-center text-sm justify-center text-blue-600 hover:text-blue-800 focus:outline-none focus:underline",
                          type: "button",
                          onClick: () => f(!i),
                        },
                        r.inquiryLinkText
                      )
                  )
                );
              } else
                return E.default.createElement(
                  "div",
                  { key: $.id, className: "flex items-end gap-2 justify-end" },
                  E.default.createElement("div", { className: "w-1/6" }),
                  E.default.createElement(
                    "div",
                    {
                      className:
                        "rounded-lg flex max-w-5/6 bg-blue-500 text-white p-2 self-end",
                      style: {
                        background: r ? r.userReplyBackgroundColor : "",
                      },
                    },
                    E.default.createElement(
                      "p",
                      {
                        className: "text-md",
                        style: { color: r ? r.userReplyTextColor : "" },
                      },
                      $.content
                    )
                  )
                );
            }),
            s !== "in_progress" &&
              i &&
              E.default.createElement(
                "div",
                {
                  ref: H,
                  className: "bg-white border-t-2 rounded-lg shadow-md w-5/6",
                },
                E.default.createElement(
                  "form",
                  { onSubmit: N },
                  E.default.createElement(
                    ji,
                    { className: "border-0 h-full shadow-none" },
                    E.default.createElement(
                      bf,
                      null,
                      E.default.createElement(ec, null, r.inquiryTitle),
                      E.default.createElement(tc, null, r.inquirySubtitle)
                    ),
                    E.default.createElement(
                      rc,
                      null,
                      E.default.createElement(
                        "div",
                        { className: "space-y-4" },
                        E.default.createElement(
                          "div",
                          { className: "space-y-2" },
                          E.default.createElement(
                            dd,
                            { htmlFor: "email" },
                            r.inquiryEmailLabel
                          ),
                          E.default.createElement(Vi, {
                            onChange: ($) => h($.target.value),
                            className: "bg-white",
                            id: "email",
                            type: "email",
                          })
                        ),
                        E.default.createElement(
                          "div",
                          { className: "space-y-2" },
                          E.default.createElement(
                            dd,
                            { htmlFor: "message" },
                            r.inquiryMessageLabel
                          ),
                          E.default.createElement(xm, {
                            onChange: ($) => y($.target.value),
                            className: "min-h-[100px]",
                            id: "message",
                          })
                        )
                      )
                    ),
                    E.default.createElement(
                      nc,
                      null,
                      E.default.createElement(
                        Jo,
                        {
                          type: "submit",
                          disabled: x,
                          className: "bg-black text-white",
                        },
                        r.inquirySendButtonText,
                        x &&
                          E.default.createElement(In.spinner, {
                            className: "mr-2 h-5 w-5 animate-spin",
                          })
                      )
                    )
                  )
                )
              )
          ),
          E.default.createElement(
            "div",
            { className: Ce },
            r?.displayBranding === !0 &&
              E.default.createElement(
                "div",
                { className: "text-center text-zinc-400 text-md mb-2" },
                "Powered by ",
                E.default.createElement(
                  "a",
                  { href: "https://www.PlatformAI.io/" },
                  za.name
                )
              ),
            E.default.createElement(
              "div",
              { className: "border-t border-gray-200 p-2" },
              E.default.createElement(
                "div",
                { className: "w-full flex items-center gap-2" },
                E.default.createElement(
                  "form",
                  {
                    onSubmit: L,
                    className: "flex align-right items-end w-full",
                  },
                  E.default.createElement(Vi, {
                    ref: I,
                    disabled: s !== "awaiting_message",
                    className: "w-full border-0 text-md",
                    value: g,
                    placeholder: r ? r.chatMessagePlaceHolder : "",
                    onChange: C,
                  }),
                  E.default.createElement(
                    Jo,
                    {
                      type: "submit",
                      disabled: s !== "awaiting_message",
                      className: "flex-none w-1/6 text-md",
                    },
                    s !== "awaiting_message" &&
                      E.default.createElement(In.spinner, {
                        className: "mr-2 h-5 w-5 animate-spin",
                      }),
                    s === "awaiting_message" &&
                      E.default.createElement(hP, {
                        className: "mr-2 h-5 w-5 text-gray-500",
                      })
                  )
                )
              )
            )
          )
        ),
      !e &&
        !l &&
        E.default.createElement(
          "button",
          {
            className:
              "ml-4 mr-4 shadow-lg border bg-white border-gray-200 rounded-full p-4",
            style: { background: r ? r.bubbleColor : "" },
            onClick: w,
          },
          !l &&
            E.default.createElement(In.message, {
              style: { color: r ? r.bubbleTextColor : "" },
            }),
          l &&
            E.default.createElement(In.close, {
              style: { color: r ? r.bubbleTextColor : "" },
            })
        ),
      !e &&
        l &&
        !T &&
        E.default.createElement(
          "button",
          {
            className:
              "ml-4 mr-4 shadow-lg border bg-white border-gray-200 rounded-full p-4",
            style: { background: r ? r.bubbleColor : "" },
            onClick: w,
          },
          !l &&
            E.default.createElement(In.message, {
              style: { color: r ? r.bubbleTextColor : "" },
            }),
          l &&
            E.default.createElement(In.close, {
              style: { color: r ? r.bubbleTextColor : "" },
            })
        )
    );
  }
  function hP(e) {
    return E.default.createElement(
      "svg",
      {
        ...e,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      E.default.createElement("path", { d: "m22 2-7 20-4-9-9-4Z" }),
      E.default.createElement("path", { d: "M22 2 11 13" })
    );
  }
  var aC = de(tC());
  var Qn = de(Xt()),
    rC = de(Xg()),
    yE = ({ children: e, styleUrl: t }) => {
      let r = (0, Qn.useRef)(null),
        [n, a] = (0, Qn.useState)(null);
      return (
        (0, Qn.useEffect)(() => {
          if (r.current && !n) {
            let o = r.current.attachShadow({ mode: "open" });
            if ((a(o), t)) {
              let l = document.createElement("link");
              (l.rel = "stylesheet"), (l.href = t), o.appendChild(l);
            }
          }
        }, [t, n]),
        Qn.default.createElement(
          "div",
          { ref: r },
          n && rC.default.createPortal(e, n)
        )
      );
    },
    nC = yE;
  var oC = document.createElement("div");
  oC.id = "chatbot-root";
  document.body.appendChild(oC);
  var vE = (0, aC.createRoot)(document.getElementById("chatbot-root"));
  vE.render(
    Bf.default.createElement(
      nC,
      { styleUrl: "https://www.PlatformAI.io/chatbot.css" },
      Bf.default.createElement(
        "noscript",
        null,
        "This chatbot is built using PlatformAI https://www.PlatformAI.io/"
      ),
      Bf.default.createElement(zm, null)
    )
  );
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
