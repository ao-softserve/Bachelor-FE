/* eslint-disable no-unused-expressions */
// @ts-ignore no-usused-expressions
export var edua = (function(r) {
  var t = {};
  function n(e) {
    if (t[e]) return t[e].exports;
    var a = (t[e] = { i: e, l: !1, exports: {} });
    return r[e].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  return (
    (n.m = r),
    (n.c = t),
    (n.d = function(r, t, e) {
      n.o(r, t) || Object.defineProperty(r, t, { enumerable: !0, get: e });
    }),
    (n.r = function(r) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(r, "__esModule", { value: !0 });
    }),
    (n.t = function(r, t) {
      if ((1 & t && (r = n(r)), 8 & t)) return r;
      if (4 & t && "object" == typeof r && r && r.__esModule) return r;
      var e = Object.create(null);
      if (
        (n.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: r }),
        2 & t && "string" != typeof r)
      )
        for (var a in r)
          n.d(
            e,
            a,
            function(t) {
              return r[t];
            }.bind(null, a)
          );
      return e;
    }),
    (n.n = function(r) {
      var t =
        r && r.__esModule
          ? function() {
              return r.default;
            }
          : function() {
              return r;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(r, t) {
      return Object.prototype.hasOwnProperty.call(r, t);
    }),
    (n.p = ""),
    n((n.s = 13))
  );
})([
  function(r, t, n) {
    "use strict";
    var e = ["Out_of_memory", 0],
      a = ["Sys_error", -1],
      u = ["Failure", -2],
      i = ["Invalid_argument", -3],
      o = ["End_of_file", -4],
      c = ["Division_by_zero", -5],
      f = ["Not_found", -6],
      s = ["Match_failure", -7],
      l = ["Stack_overflow", -8],
      v = ["Sys_blocked_io", -9],
      _ = ["Assert_failure", -10],
      m = ["Undefined_recursive_module", -11];
    (e.tag = 248),
      (a.tag = 248),
      (u.tag = 248),
      (i.tag = 248),
      (o.tag = 248),
      (c.tag = 248),
      (f.tag = 248),
      (s.tag = 248),
      (l.tag = 248),
      (v.tag = 248),
      (_.tag = 248),
      (m.tag = 248),
      (t.out_of_memory = e),
      (t.sys_error = a),
      (t.failure = u),
      (t.invalid_argument = i),
      (t.end_of_file = o),
      (t.division_by_zero = c),
      (t.not_found = f),
      (t.match_failure = s),
      (t.stack_overflow = l),
      (t.sys_blocked_io = v),
      (t.assert_failure = _),
      (t.undefined_recursive_module = m);
  },
  function(r, t, n) {
    "use strict";
    var e = n(2);
    function a(r, t) {
      for (;;) {
        var n = t,
          u = r,
          i = u.length,
          o = 0 === i ? 1 : i,
          c = (o - n.length) | 0;
        if (0 === c) return u.apply(null, n);
        if (!(c < 0))
          return (function(r, t) {
            return function(n) {
              return a(r, t.concat([n]));
            };
          })(u, n);
        (t = e.caml_array_sub(n, o, 0 | -c)),
          (r = u.apply(null, e.caml_array_sub(n, 0, o)));
      }
    }
    function u(r, t, n) {
      switch (n) {
        case 1:
          return r(t);
        case 2:
          return function(n) {
            return r(t, n);
          };
        case 3:
          return function(n, e) {
            return r(t, n, e);
          };
        case 4:
          return function(n, e, a) {
            return r(t, n, e, a);
          };
        case 5:
          return function(n, e, a, u) {
            return r(t, n, e, a, u);
          };
        case 6:
          return function(n, e, a, u, i) {
            return r(t, n, e, a, u, i);
          };
        case 7:
          return function(n, e, a, u, i, o) {
            return r(t, n, e, a, u, i, o);
          };
        default:
          return a(r, [t]);
      }
    }
    function i(r, t) {
      var n = r.length;
      return 1 === n ? r(t) : u(r, t, n);
    }
    function o(r, t, n, e) {
      switch (e) {
        case 1:
          return a(r(t), [n]);
        case 2:
          return r(t, n);
        case 3:
          return function(e) {
            return r(t, n, e);
          };
        case 4:
          return function(e, a) {
            return r(t, n, e, a);
          };
        case 5:
          return function(e, a, u) {
            return r(t, n, e, a, u);
          };
        case 6:
          return function(e, a, u, i) {
            return r(t, n, e, a, u, i);
          };
        case 7:
          return function(e, a, u, i, o) {
            return r(t, n, e, a, u, i, o);
          };
        default:
          return a(r, [t, n]);
      }
    }
    function c(r, t, n) {
      var e = r.length;
      return 2 === e ? r(t, n) : o(r, t, n, e);
    }
    function f(r, t, n, e, u) {
      switch (u) {
        case 1:
          return a(r(t), [n, e]);
        case 2:
          return a(r(t, n), [e]);
        case 3:
          return r(t, n, e);
        case 4:
          return function(a) {
            return r(t, n, e, a);
          };
        case 5:
          return function(a, u) {
            return r(t, n, e, a, u);
          };
        case 6:
          return function(a, u, i) {
            return r(t, n, e, a, u, i);
          };
        case 7:
          return function(a, u, i, o) {
            return r(t, n, e, a, u, i, o);
          };
        default:
          return a(r, [t, n, e]);
      }
    }
    function s(r, t, n, e) {
      var a = r.length;
      return 3 === a ? r(t, n, e) : f(r, t, n, e, a);
    }
    function l(r, t, n, e, u, i) {
      switch (i) {
        case 1:
          return a(r(t), [n, e, u]);
        case 2:
          return a(r(t, n), [e, u]);
        case 3:
          return a(r(t, n, e), [u]);
        case 4:
          return r(t, n, e, u);
        case 5:
          return function(a) {
            return r(t, n, e, u, a);
          };
        case 6:
          return function(a, i) {
            return r(t, n, e, u, a, i);
          };
        case 7:
          return function(a, i, o) {
            return r(t, n, e, u, a, i, o);
          };
        default:
          return a(r, [t, n, e, u]);
      }
    }
    function v(r, t, n, e, a) {
      var u = r.length;
      return 4 === u ? r(t, n, e, a) : l(r, t, n, e, a, u);
    }
    function _(r, t, n, e, u, i, o) {
      switch (o) {
        case 1:
          return a(r(t), [n, e, u, i]);
        case 2:
          return a(r(t, n), [e, u, i]);
        case 3:
          return a(r(t, n, e), [u, i]);
        case 4:
          return a(r(t, n, e, u), [i]);
        case 5:
          return r(t, n, e, u, i);
        case 6:
          return function(a) {
            return r(t, n, e, u, i, a);
          };
        case 7:
          return function(a, o) {
            return r(t, n, e, u, i, a, o);
          };
        default:
          return a(r, [t, n, e, u, i]);
      }
    }
    function m(r, t, n, e, a, u) {
      var i = r.length;
      return 5 === i ? r(t, n, e, a, u) : _(r, t, n, e, a, u, i);
    }
    function d(r, t, n, e, u, i, o, c) {
      switch (c) {
        case 1:
          return a(r(t), [n, e, u, i, o]);
        case 2:
          return a(r(t, n), [e, u, i, o]);
        case 3:
          return a(r(t, n, e), [u, i, o]);
        case 4:
          return a(r(t, n, e, u), [i, o]);
        case 5:
          return a(r(t, n, e, u, i), [o]);
        case 6:
          return r(t, n, e, u, i, o);
        case 7:
          return function(a) {
            return r(t, n, e, u, i, o, a);
          };
        default:
          return a(r, [t, n, e, u, i, o]);
      }
    }
    function p(r, t, n, e, a, u, i) {
      var o = r.length;
      return 6 === o ? r(t, n, e, a, u, i) : d(r, t, n, e, a, u, i, o);
    }
    function g(r, t, n, e, u, i, o, c, f) {
      switch (f) {
        case 1:
          return a(r(t), [n, e, u, i, o, c]);
        case 2:
          return a(r(t, n), [e, u, i, o, c]);
        case 3:
          return a(r(t, n, e), [u, i, o, c]);
        case 4:
          return a(r(t, n, e, u), [i, o, c]);
        case 5:
          return a(r(t, n, e, u, i), [o, c]);
        case 6:
          return a(r(t, n, e, u, i, o), [c]);
        case 7:
          return r(t, n, e, u, i, o, c);
        default:
          return a(r, [t, n, e, u, i, o, c]);
      }
    }
    function h(r, t, n, e, a, u, i, o) {
      var c = r.length;
      return 7 === c ? r(t, n, e, a, u, i, o) : g(r, t, n, e, a, u, i, o, c);
    }
    function y(r, t, n, e, u, i, o, c, f, s) {
      switch (s) {
        case 1:
          return a(r(t), [n, e, u, i, o, c, f]);
        case 2:
          return a(r(t, n), [e, u, i, o, c, f]);
        case 3:
          return a(r(t, n, e), [u, i, o, c, f]);
        case 4:
          return a(r(t, n, e, u), [i, o, c, f]);
        case 5:
          return a(r(t, n, e, u, i), [o, c, f]);
        case 6:
          return a(r(t, n, e, u, i, o), [c, f]);
        case 7:
          return a(r(t, n, e, u, i, o, c), [f]);
        default:
          return a(r, [t, n, e, u, i, o, c, f]);
      }
    }
    function $(r, t, n, e, a, u, i, o, c) {
      var f = r.length;
      return 8 === f
        ? r(t, n, e, a, u, i, o, c)
        : y(r, t, n, e, a, u, i, o, c, f);
    }
    (t.app = a),
      (t.curry_1 = u),
      (t._1 = i),
      (t.__1 = function(r) {
        return 1 === r.length
          ? r
          : function(t) {
              return i(r, t);
            };
      }),
      (t.curry_2 = o),
      (t._2 = c),
      (t.__2 = function(r) {
        return 2 === r.length
          ? r
          : function(t, n) {
              return c(r, t, n);
            };
      }),
      (t.curry_3 = f),
      (t._3 = s),
      (t.__3 = function(r) {
        return 3 === r.length
          ? r
          : function(t, n, e) {
              return s(r, t, n, e);
            };
      }),
      (t.curry_4 = l),
      (t._4 = v),
      (t.__4 = function(r) {
        return 4 === r.length
          ? r
          : function(t, n, e, a) {
              return v(r, t, n, e, a);
            };
      }),
      (t.curry_5 = _),
      (t._5 = m),
      (t.__5 = function(r) {
        return 5 === r.length
          ? r
          : function(t, n, e, a, u) {
              return m(r, t, n, e, a, u);
            };
      }),
      (t.curry_6 = d),
      (t._6 = p),
      (t.__6 = function(r) {
        return 6 === r.length
          ? r
          : function(t, n, e, a, u, i) {
              return p(r, t, n, e, a, u, i);
            };
      }),
      (t.curry_7 = g),
      (t._7 = h),
      (t.__7 = function(r) {
        return 7 === r.length
          ? r
          : function(t, n, e, a, u, i, o) {
              return h(r, t, n, e, a, u, i, o);
            };
      }),
      (t.curry_8 = y),
      (t._8 = $),
      (t.__8 = function(r) {
        return 8 === r.length
          ? r
          : function(t, n, e, a, u, i, o, c) {
              return $(r, t, n, e, a, u, i, o, c);
            };
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(0);
    (t.caml_array_dup = function(r) {
      return r.slice(0);
    }),
      (t.caml_array_sub = function(r, t, n) {
        for (var e = new Array(n), a = 0, u = t; a < n; )
          (e[a] = r[u]), (a = (a + 1) | 0), (u = (u + 1) | 0);
        return e;
      }),
      (t.caml_array_concat = function(r) {
        var t = (function(r, t) {
            for (;;) {
              var n = t,
                e = r;
              if (!n) return e;
              (t = n[1]), (r = (n[0].length + e) | 0);
            }
          })(0, r),
          n = new Array(t);
        return (
          (function(r, t, n) {
            for (;;) {
              var e = n,
                a = t;
              if (!e) return 0;
              for (var u = e[0], i = u.length, o = a, c = 0; c < i; )
                (r[o] = u[c]), (o = (o + 1) | 0), (c = (c + 1) | 0);
              (n = e[1]), (t = o);
            }
          })(n, 0, r),
          n
        );
      }),
      (t.caml_make_vect = function(r, t) {
        for (var n = new Array(r), e = 0, a = (r - 1) | 0; e <= a; ++e)
          n[e] = t;
        return n;
      }),
      (t.caml_make_float_vect = function(r) {
        for (var t = new Array(r), n = 0, e = (r - 1) | 0; n <= e; ++n)
          t[n] = 0;
        return t;
      }),
      (t.caml_array_blit = function(r, t, n, e, a) {
        if (e <= t) {
          for (var u = 0, i = (a - 1) | 0; u <= i; ++u)
            n[(u + e) | 0] = r[(u + t) | 0];
          return 0;
        }
        for (var o = (a - 1) | 0; o >= 0; --o) n[(o + e) | 0] = r[(o + t) | 0];
        return 0;
      }),
      (t.caml_array_get = function(r, t) {
        if (t < 0 || t >= r.length)
          throw [e.invalid_argument, "index out of bounds"];
        return r[t];
      }),
      (t.caml_array_set = function(r, t, n) {
        if (t < 0 || t >= r.length)
          throw [e.invalid_argument, "index out of bounds"];
        return (r[t] = n), 0;
      });
  },
  function(r, t, n) {
    "use strict";
    t.__ = function(r, t) {
      return (t.tag = r), t;
    };
  },
  function(r, t, n) {
    "use strict";
    var e = [];
    function a(r) {
      if (void 0 === r) {
        var t = [e, 0];
        return (t.tag = 256), t;
      }
      if (null !== r && r[0] === e) {
        var n = (r[1] + 1) | 0,
          a = [e, n];
        return (a.tag = 256), a;
      }
      return r;
    }
    function u(r) {
      if (null !== r && r[0] === e) {
        var t = r[1];
        return 0 === t ? void 0 : [e, (t - 1) | 0];
      }
      return r;
    }
    (t.nullable_to_opt = function(r) {
      return null == r ? void 0 : a(r);
    }),
      (t.undefined_to_opt = function(r) {
        return void 0 === r ? void 0 : a(r);
      }),
      (t.null_to_opt = function(r) {
        return null === r ? void 0 : a(r);
      }),
      (t.valFromOption = u),
      (t.some = a),
      (t.option_get = function(r) {
        return void 0 === r ? void 0 : u(r);
      }),
      (t.option_get_unwrap = function(r) {
        return void 0 === r ? void 0 : u(r)[1];
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(1),
      a = n(6),
      u = n(2),
      i = n(7),
      o = n(10),
      c = n(0),
      f = u.caml_make_float_vect;
    function s(r, t, n) {
      for (var e = u.caml_make_vect(r, []), a = 0, i = (r - 1) | 0; a <= i; ++a)
        e[a] = u.caml_make_vect(t, n);
      return e;
    }
    function l(r) {
      var t = r.length;
      return 0 === t ? [] : u.caml_array_sub(r, 0, t);
    }
    function v(r, t, n, e, a) {
      if (
        a < 0 ||
        t < 0 ||
        t > ((r.length - a) | 0) ||
        e < 0 ||
        e > ((n.length - a) | 0)
      )
        throw [c.invalid_argument, "Array.blit"];
      return u.caml_array_blit(r, t, n, e, a);
    }
    var _ = i.create("Array.Bottom");
    function m(r, t) {
      var n = function(n, a, i, o, c, f, s) {
          for (
            var l = (n + a) | 0,
              _ = (o + c) | 0,
              m = n,
              d = u.caml_array_get(t, n),
              p = o,
              g = u.caml_array_get(i, o),
              h = s;
            ;

          ) {
            var y = h,
              $ = g,
              b = p,
              k = d,
              w = m;
            if (e._2(r, k, $) <= 0) {
              u.caml_array_set(f, y, k);
              var A = (w + 1) | 0;
              if (A < l) {
                (h = (y + 1) | 0), (d = u.caml_array_get(t, A)), (m = A);
                continue;
              }
              return v(i, b, f, (y + 1) | 0, (_ - b) | 0);
            }
            u.caml_array_set(f, y, $);
            var q = (b + 1) | 0;
            if (!(q < _)) return v(t, w, f, (y + 1) | 0, (l - w) | 0);
            (h = (y + 1) | 0), (g = u.caml_array_get(i, q)), (p = q);
          }
        },
        a = function(n, a, i, o) {
          for (var c = 0, f = (o - 1) | 0; c <= f; ++c) {
            for (
              var s = u.caml_array_get(t, (n + c) | 0),
                l = (((i + c) | 0) - 1) | 0;
              l >= i && e._2(r, u.caml_array_get(a, l), s) > 0;

            )
              u.caml_array_set(a, (l + 1) | 0, u.caml_array_get(a, l)),
                (l = (l - 1) | 0);
            u.caml_array_set(a, (l + 1) | 0, s);
          }
          return 0;
        },
        i = function(r, e, u, o) {
          if (o <= 5) return a(r, e, u, o);
          var c = (o / 2) | 0,
            f = (o - c) | 0;
          return (
            i((r + c) | 0, e, (u + c) | 0, f),
            i(r, t, (r + f) | 0, c),
            n((r + f) | 0, c, e, (u + c) | 0, f, e, u)
          );
        },
        o = t.length;
      if (o <= 5) return a(0, t, 0, o);
      var c = (o / 2) | 0,
        f = (o - c) | 0,
        s = u.caml_make_vect(f, u.caml_array_get(t, 0));
      return i(c, s, 0, f), i(0, t, f, c), n(f, c, s, 0, f, t, 0);
    }
    var d = s,
      p = u.caml_array_concat,
      g = m;
    (t.make_float = f),
      (t.init = function(r, t) {
        if (0 === r) return [];
        if (r < 0) throw [c.invalid_argument, "Array.init"];
        for (
          var n = u.caml_make_vect(r, e._1(t, 0)), a = 1, i = (r - 1) | 0;
          a <= i;
          ++a
        )
          n[a] = e._1(t, a);
        return n;
      }),
      (t.make_matrix = s),
      (t.create_matrix = d),
      (t.append = function(r, t) {
        var n = r.length;
        return 0 === n
          ? l(t)
          : 0 === t.length
          ? u.caml_array_sub(r, 0, n)
          : r.concat(t);
      }),
      (t.concat = p),
      (t.sub = function(r, t, n) {
        if (t < 0 || n < 0 || t > ((r.length - n) | 0))
          throw [c.invalid_argument, "Array.sub"];
        return u.caml_array_sub(r, t, n);
      }),
      (t.copy = l),
      (t.fill = function(r, t, n, e) {
        if (t < 0 || n < 0 || t > ((r.length - n) | 0))
          throw [c.invalid_argument, "Array.fill"];
        for (var a = t, u = (((t + n) | 0) - 1) | 0; a <= u; ++a) r[a] = e;
        return 0;
      }),
      (t.blit = v),
      (t.to_list = function(r) {
        for (var t = (r.length - 1) | 0, n = 0; ; ) {
          var e = n,
            a = t;
          if (a < 0) return e;
          (n = [r[a], e]), (t = (a - 1) | 0);
        }
      }),
      (t.of_list = function(r) {
        if (!r) return [];
        for (
          var t = u.caml_make_vect(
              (function(r, t) {
                for (;;) {
                  var n = r;
                  if (!t) return n;
                  (t = t[1]), (r = (n + 1) | 0);
                }
              })(0, r),
              r[0]
            ),
            n = 1,
            e = r[1];
          ;

        ) {
          var a = e,
            i = n;
          if (!a) return t;
          (t[i] = a[0]), (e = a[1]), (n = (i + 1) | 0);
        }
      }),
      (t.iter = function(r, t) {
        for (var n = 0, a = (t.length - 1) | 0; n <= a; ++n) e._1(r, t[n]);
        return 0;
      }),
      (t.iteri = function(r, t) {
        for (var n = 0, a = (t.length - 1) | 0; n <= a; ++n) e._2(r, n, t[n]);
        return 0;
      }),
      (t.map = function(r, t) {
        var n = t.length;
        if (0 === n) return [];
        for (
          var a = u.caml_make_vect(n, e._1(r, t[0])), i = 1, o = (n - 1) | 0;
          i <= o;
          ++i
        )
          a[i] = e._1(r, t[i]);
        return a;
      }),
      (t.mapi = function(r, t) {
        var n = t.length;
        if (0 === n) return [];
        for (
          var a = u.caml_make_vect(n, e._2(r, 0, t[0])), i = 1, o = (n - 1) | 0;
          i <= o;
          ++i
        )
          a[i] = e._2(r, i, t[i]);
        return a;
      }),
      (t.fold_left = function(r, t, n) {
        for (var a = t, u = 0, i = (n.length - 1) | 0; u <= i; ++u)
          a = e._2(r, a, n[u]);
        return a;
      }),
      (t.fold_right = function(r, t, n) {
        for (var a = n, u = (t.length - 1) | 0; u >= 0; --u)
          a = e._2(r, t[u], a);
        return a;
      }),
      (t.iter2 = function(r, t, n) {
        if (t.length !== n.length)
          throw [
            c.invalid_argument,
            "Array.iter2: arrays must have the same length"
          ];
        for (var a = 0, u = (t.length - 1) | 0; a <= u; ++a)
          e._2(r, t[a], n[a]);
        return 0;
      }),
      (t.map2 = function(r, t, n) {
        var a = t.length;
        if (a !== n.length)
          throw [
            c.invalid_argument,
            "Array.map2: arrays must have the same length"
          ];
        if (0 === a) return [];
        for (
          var i = u.caml_make_vect(a, e._2(r, t[0], n[0])),
            o = 1,
            f = (a - 1) | 0;
          o <= f;
          ++o
        )
          i[o] = e._2(r, t[o], n[o]);
        return i;
      }),
      (t.for_all = function(r, t) {
        for (var n = t.length, a = 0; ; ) {
          var u = a;
          if (u === n) return !0;
          if (!e._1(r, t[u])) return !1;
          a = (u + 1) | 0;
        }
      }),
      (t.exists = function(r, t) {
        for (var n = t.length, a = 0; ; ) {
          var u = a;
          if (u === n) return !1;
          if (e._1(r, t[u])) return !0;
          a = (u + 1) | 0;
        }
      }),
      (t.mem = function(r, t) {
        for (var n = t.length, e = 0; ; ) {
          var u = e;
          if (u === n) return !1;
          if (a.caml_equal(t[u], r)) return !0;
          e = (u + 1) | 0;
        }
      }),
      (t.memq = function(r, t) {
        for (var n = t.length, e = 0; ; ) {
          var a = e;
          if (a === n) return !1;
          if (r === t[a]) return !0;
          e = (a + 1) | 0;
        }
      }),
      (t.sort = function(r, t) {
        for (
          var n = function(n, a) {
              var i = (1 + ((((a + a) | 0) + a) | 0)) | 0,
                o = i;
              if (((i + 2) | 0) < n)
                return (
                  e._2(
                    r,
                    u.caml_array_get(t, i),
                    u.caml_array_get(t, (i + 1) | 0)
                  ) < 0 && (o = (i + 1) | 0),
                  e._2(
                    r,
                    u.caml_array_get(t, o),
                    u.caml_array_get(t, (i + 2) | 0)
                  ) < 0 && (o = (i + 2) | 0),
                  o
                );
              if (
                ((i + 1) | 0) < n &&
                e._2(
                  r,
                  u.caml_array_get(t, i),
                  u.caml_array_get(t, (i + 1) | 0)
                ) < 0
              )
                return (i + 1) | 0;
              if (i < n) return i;
              throw [_, a];
            },
            a = function(a, i, c) {
              try {
                for (var f = a, s = i, l = c; ; ) {
                  var v = s,
                    m = n(f, v);
                  if (!(e._2(r, u.caml_array_get(t, m), l) > 0))
                    return u.caml_array_set(t, v, l);
                  u.caml_array_set(t, v, u.caml_array_get(t, m)), (s = m);
                }
              } catch (r) {
                var d = o.internalToOCamlException(r);
                if (d[0] === _) return u.caml_array_set(t, d[1], c);
                throw d;
              }
            },
            i = function(r, e) {
              try {
                for (var a = r, i = e; ; ) {
                  var c = i,
                    f = n(a, c);
                  u.caml_array_set(t, c, u.caml_array_get(t, f)), (i = f);
                }
              } catch (r) {
                var s = o.internalToOCamlException(r);
                if (s[0] === _) return s[1];
                throw s;
              }
            },
            f = function(n, a) {
              for (;;) {
                var i = n,
                  o = (((i - 1) | 0) / 3) | 0;
                if (i === o) throw [c.assert_failure, ["array.ml", 238, 4]];
                if (e._2(r, u.caml_array_get(t, o), a) < 0) {
                  if ((u.caml_array_set(t, i, u.caml_array_get(t, o)), o > 0)) {
                    n = o;
                    continue;
                  }
                  return u.caml_array_set(t, 0, a);
                }
                return u.caml_array_set(t, i, a);
              }
            },
            s = t.length,
            l = (((((s + 1) | 0) / 3) | 0) - 1) | 0;
          l >= 0;
          --l
        )
          a(s, l, u.caml_array_get(t, l));
        for (var v = (s - 1) | 0; v >= 2; --v) {
          var m = u.caml_array_get(t, v);
          u.caml_array_set(t, v, u.caml_array_get(t, 0)), f(i(v, 0), m);
        }
        if (s > 1) {
          var d = u.caml_array_get(t, 1);
          return (
            u.caml_array_set(t, 1, u.caml_array_get(t, 0)),
            u.caml_array_set(t, 0, d)
          );
        }
        return 0;
      }),
      (t.stable_sort = m),
      (t.fast_sort = g),
      (t.Floatarray = {});
  },
  function(r, t, n) {
    "use strict";
    var e = n(3),
      a = n(9),
      u = n(0);
    function i(r, t) {
      for (var n in r) t(n);
    }
    function o(r, t) {
      for (;;) {
        var n = t,
          e = r;
        if (e === n) return 0;
        var c = typeof e,
          f = typeof n;
        switch (c) {
          case "boolean":
            if ("boolean" === f) return a.caml_bool_compare(e, n);
            break;
          case "function":
            if ("function" === f)
              throw [u.invalid_argument, "compare: functional value"];
            break;
          case "number":
            if ("number" === f) return a.caml_int_compare(e, n);
            break;
          case "string":
            return "string" === f ? a.caml_string_compare(e, n) : 1;
          case "undefined":
            return -1;
        }
        switch (f) {
          case "string":
            return -1;
          case "undefined":
            return 1;
          default:
            if ("boolean" === c) return 1;
            if ("boolean" === f) return -1;
            if ("function" === c) return 1;
            if ("function" === f) return -1;
            if ("number" === c) return null === n || 256 === n.tag ? 1 : -1;
            if ("number" === f) return null === e || 256 === e.tag ? -1 : 1;
            if (null === e) return 256 === n.tag ? 1 : -1;
            if (null === n) return 256 === e.tag ? -1 : 1;
            var s = 0 | e.tag,
              l = 0 | n.tag;
            if (250 === s) {
              r = e[0];
              continue;
            }
            if (250 === l) {
              t = n[0];
              continue;
            }
            if (256 === s)
              return 256 === l ? a.caml_int_compare(e[1], n[1]) : -1;
            if (248 === s) return a.caml_int_compare(e[1], n[1]);
            if (251 === s) throw [u.invalid_argument, "equal: abstract value"];
            if (s !== l) return s < l ? -1 : 1;
            var v = 0 | e.length,
              _ = 0 | n.length;
            if (v === _) {
              if (!Array.isArray(e)) {
                if (e instanceof Date && n instanceof Date) return e - n;
                var m = e,
                  d = n,
                  p = [void 0],
                  g = [void 0],
                  h = function(r, t) {
                    var n = r[2],
                      e = r[1];
                    if (!e.hasOwnProperty(t) || o(r[0][t], e[t]) > 0) {
                      var a = n[0];
                      return void 0 !== a && t >= a ? 0 : ((n[0] = t), 0);
                    }
                    return 0;
                  },
                  y = (function(r) {
                    return function(t) {
                      return h(r, t);
                    };
                  })([m, d, g]),
                  $ = (function(r) {
                    return function(t) {
                      return h(r, t);
                    };
                  })([d, m, p]);
                i(m, y), i(d, $);
                var b = p[0],
                  k = g[0];
                return void 0 !== b
                  ? void 0 !== k
                    ? a.caml_string_compare(b, k)
                    : -1
                  : void 0 !== k
                  ? 1
                  : 0;
              }
              for (var w = e, A = n, q = 0, O = v; ; ) {
                var S = q;
                if (S === O) return 0;
                var C = o(w[S], A[S]);
                if (0 !== C) return C;
                q = (S + 1) | 0;
              }
            } else if (v < _)
              for (var x = e, M = n, R = 0, F = v; ; ) {
                var E = R;
                if (E === F) return -1;
                var T = o(x[E], M[E]);
                if (0 !== T) return T;
                R = (E + 1) | 0;
              }
            else
              for (var I = e, P = n, W = 0, B = _; ; ) {
                var j = W;
                if (j === B) return 1;
                var Q = o(I[j], P[j]);
                if (0 !== Q) return Q;
                W = (j + 1) | 0;
              }
        }
      }
    }
    function c(r, t) {
      for (;;) {
        var n = t,
          e = r;
        if (e === n) return !0;
        var a = typeof e;
        if (
          "string" === a ||
          "number" === a ||
          "boolean" === a ||
          "undefined" === a ||
          null === e
        )
          return !1;
        var o = typeof n;
        if ("function" === a || "function" === o)
          throw [u.invalid_argument, "equal: functional value"];
        if ("number" === o || "undefined" === o || null === n) return !1;
        var f = 0 | e.tag,
          s = 0 | n.tag;
        if (250 !== f)
          if (250 !== s) {
            if (248 === f) return e[1] === n[1];
            if (251 === f) throw [u.invalid_argument, "equal: abstract value"];
            if (f !== s) return !1;
            if (256 === f) return e[1] === n[1];
            var l = 0 | e.length;
            if (l !== (0 | n.length)) return !1;
            if (!Array.isArray(e)) {
              if (e instanceof Date && n instanceof Date)
                return !(e > n || e < n);
              var v = e,
                _ = n,
                m = [!0],
                d = (function(r, t) {
                  return function(n) {
                    return r.hasOwnProperty(n) ? 0 : ((t[0] = !1), 0);
                  };
                })(_, m),
                p = (function(r, t, n) {
                  return function(e) {
                    return r.hasOwnProperty(e) && c(t[e], r[e])
                      ? 0
                      : ((n[0] = !1), 0);
                  };
                })(v, _, m);
              return i(v, d), m[0] && i(_, p), m[0];
            }
            for (var g = e, h = n, y = 0, $ = l; ; ) {
              var b = y;
              if (b === $) return !0;
              if (!c(g[b], h[b])) return !1;
              y = (b + 1) | 0;
            }
          } else t = n[0];
        else r = e[0];
      }
    }
    (t.caml_obj_block = function(r, t) {
      var n = new Array(t);
      return (n.tag = r), n;
    }),
      (t.caml_obj_dup = function(r) {
        for (
          var t = 0 | r.length, n = new Array(t), e = 0, a = (t - 1) | 0;
          e <= a;
          ++e
        )
          n[e] = r[e];
        return (n.tag = 0 | r.tag), n;
      }),
      (t.caml_obj_truncate = function(r, t) {
        var n = 0 | r.length;
        if (t <= 0 || t > n) throw [u.invalid_argument, "Obj.truncate"];
        if (n !== t) {
          for (var e = t, a = (n - 1) | 0; e <= a; ++e) r[e] = 0;
          return (r.length = t), 0;
        }
        return 0;
      }),
      (t.caml_lazy_make_forward = function(r) {
        return e.__(250, [r]);
      }),
      (t.caml_lazy_make = function(r) {
        var t = [r];
        return (t.tag = 246), t;
      }),
      (t.caml_update_dummy = function(r, t) {
        for (var n = 0, e = ((0 | t.length) - 1) | 0; n <= e; ++n) r[n] = t[n];
        var a = 0 | t.tag;
        return 0 !== a ? ((r.tag = a), 0) : 0;
      }),
      (t.caml_compare = o),
      (t.caml_equal = c),
      (t.caml_equal_null = function(r, t) {
        return null !== t ? c(r, t) : r === t;
      }),
      (t.caml_equal_undefined = function(r, t) {
        return void 0 !== t ? c(r, t) : r === t;
      }),
      (t.caml_equal_nullable = function(r, t) {
        return null == t ? r === t : c(r, t);
      }),
      (t.caml_notequal = function(r, t) {
        return !c(r, t);
      }),
      (t.caml_greaterequal = function(r, t) {
        return o(r, t) >= 0;
      }),
      (t.caml_greaterthan = function(r, t) {
        return o(r, t) > 0;
      }),
      (t.caml_lessthan = function(r, t) {
        return o(r, t) < 0;
      }),
      (t.caml_lessequal = function(r, t) {
        return o(r, t) <= 0;
      }),
      (t.caml_min = function(r, t) {
        return o(r, t) <= 0 ? r : t;
      }),
      (t.caml_max = function(r, t) {
        return o(r, t) >= 0 ? r : t;
      }),
      (t.caml_obj_set_tag = function(r, t) {
        return (r.tag = t), 0;
      });
  },
  function(r, t, n) {
    "use strict";
    var e = [0];
    function a(r) {
      return (e[0] += 1), e[0];
    }
    (t.caml_set_oo_id = function(r) {
      return (r[1] = e[0]), (e[0] += 1), r;
    }),
      (t.caml_fresh_oo_id = a),
      (t.create = function(r) {
        var t = [r, a()];
        return (t.tag = 248), t;
      }),
      (t.caml_is_extension = function(r) {
        if (void 0 === r) return !1;
        if (248 === r.tag) return !0;
        var t = r[0];
        return void 0 !== t && 248 === t.tag;
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(5),
      a = n(1),
      u = n(6),
      i = n(2),
      o = n(4);
    function c(r, t) {
      if (void 0 !== r) return a._1(t, o.valFromOption(r));
    }
    function f(r, t) {
      for (var n, a = e.to_list(r[0][5]), u = e.to_list(t); ; ) {
        var i = u;
        if (!i) return !0;
        var o = i[0],
          c = (o[0], (n = a) ? n[0][2] : 0);
        if (o[1] > c) return !1;
        u = i[1];
      }
    }
    function s(r, t) {
      return t.reduce(function(t, n) {
        return r === n[0] ? n[1] : t;
      }, 0);
    }
    function l(r) {
      return (function(r, t) {
        for (;;) {
          var n = t,
            e = r;
          if (e === n.length) return n;
          var a = i.caml_array_get(n, e)[0],
            o = n.filter(
              (function(r) {
                return function(t) {
                  return u.caml_equal(t[0], r);
                };
              })(a)
            );
          if (1 !== o.length) {
            var c = n.filter(
                (function(r) {
                  return function(t) {
                    return u.caml_notequal(t[0], r);
                  };
                })(a)
              ),
              f = o.reduce(function(r, t) {
                return (r + t[1]) | 0;
              }, 0);
            c.push([a, f]), (t = c), (r = 0);
          } else r = (e + 1) | 0;
        }
      })(0, r).filter(function(r) {
        return 0 !== r[1];
      });
    }
    (t.$pipe$great = c),
      (t.$pipe$pipe$great = function(r, t) {
        if (void 0 !== r) {
          var n = o.valFromOption(r),
            e = a._1(t, n);
          return void 0 !== e ? [n, o.valFromOption(e)] : void 0;
        }
      }),
      (t.$pipe$eq$great = function(r, t) {
        return void 0 !== r ? o.valFromOption(r) : t;
      }),
      (t.$$great = function(r, t) {
        return a._1(t, r);
      }),
      (t.$$eq$great = function(r, t) {
        return [t, r];
      }),
      (t.enoughResources = f),
      (t.howMuchOfAsset = s),
      (t.enoughAssets = function(r, t) {
        for (var n = e.to_list(t); ; ) {
          var a = n;
          if (!a) return !0;
          var u = a[0],
            i = s(u[0], r[1]);
          if (u[1] > i) return !1;
          n = a[1];
        }
      }),
      (t.readyMode = function(r, t, n, e) {
        if (void 0 !== e) {
          var a = e[2];
          return f(
            r,
            n[2]
              .map(function(r) {
                var t = r[1],
                  n = r[0],
                  e = a.filter(function(r) {
                    return r[0] === n;
                  });
                if (0 !== e.length) {
                  var u = (t - i.caml_array_get(e, 0)[1]) | 0;
                  return u > 0 ? [n, u] : [n, 0];
                }
                return [n, t];
              })
              .filter(function(r) {
                return r[1] > 0;
              })
          );
        }
        return f(r, n[2].concat(t[3]));
      }),
      (t.operationInMode = function(r, t) {
        return c(
          o.undefined_to_opt(
            t[1][2].find(function(t) {
              return t[0] === r;
            })
          ),
          function(r) {
            return t;
          }
        );
      }),
      (t.normIdQty = l),
      (t.addIdQty = function(r, t) {
        return l(t.concat(r));
      }),
      (t.subIdQty = function(r, t) {
        return l(
          t
            .map(function(r) {
              return [r[0], 0 | -r[1]];
            })
            .concat(r)
        );
      }),
      (t.isNegativeIdQty = function(r) {
        return r.some(function(r) {
          return r[1] < 0;
        });
      });
  },
  function(r, t, n) {
    "use strict";
    function e(r, t) {
      return r < t ? -1 : r === t ? 0 : 1;
    }
    function a(r, t, n, e, a) {
      for (;;) {
        var u = n;
        if (!(u < e)) return a;
        var i = r[u],
          o = t[u];
        if (i > o) return 1;
        if (i < o) return -1;
        n = (u + 1) | 0;
      }
    }
    var u = e,
      i = e;
    (t.caml_bytes_compare = function(r, t) {
      var n = r.length,
        e = t.length;
      return n === e
        ? a(r, t, 0, n, 0)
        : n < e
        ? a(r, t, 0, n, -1)
        : a(r, t, 0, e, 1);
    }),
      (t.caml_bytes_equal = function(r, t) {
        var n = r.length;
        if (n !== t.length) return !1;
        for (var e = r, a = t, u = 0, i = n; ; ) {
          var o = u;
          if (o === i) return !0;
          if (e[o] !== a[o]) return !1;
          u = (o + 1) | 0;
        }
      }),
      (t.caml_int_compare = e),
      (t.caml_bool_compare = function(r, t) {
        return r ? (t ? 0 : 1) : t ? -1 : 0;
      }),
      (t.caml_float_compare = function(r, t) {
        return r === t ? 0 : r < t ? -1 : r > t || r == r ? 1 : t == t ? -1 : 0;
      }),
      (t.caml_nativeint_compare = u),
      (t.caml_string_compare = function(r, t) {
        return r === t ? 0 : r < t ? -1 : 1;
      }),
      (t.caml_int32_compare = i),
      (t.caml_bool_min = function(r, t) {
        return r ? t : r;
      }),
      (t.caml_int_min = function(r, t) {
        return r < t ? r : t;
      }),
      (t.caml_float_min = function(r, t) {
        return r < t ? r : t;
      }),
      (t.caml_string_min = function(r, t) {
        return r < t ? r : t;
      }),
      (t.caml_nativeint_min = function(r, t) {
        return r < t ? r : t;
      }),
      (t.caml_int32_min = function(r, t) {
        return r < t ? r : t;
      }),
      (t.caml_bool_max = function(r, t) {
        return r || t;
      }),
      (t.caml_int_max = function(r, t) {
        return r > t ? r : t;
      }),
      (t.caml_float_max = function(r, t) {
        return r > t ? r : t;
      }),
      (t.caml_string_max = function(r, t) {
        return r > t ? r : t;
      }),
      (t.caml_nativeint_max = function(r, t) {
        return r > t ? r : t;
      }),
      (t.caml_int32_max = function(r, t) {
        return r > t ? r : t;
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(4),
      a = n(7),
      u = a.create("Caml_js_exceptions.Error");
    (t.$$Error = u),
      (t.internalToOCamlException = function(r) {
        return a.caml_is_extension(r) ? r : [u, r];
      }),
      (t.caml_as_js_exn = function(r) {
        if (r[0] === u) return e.some(r[1]);
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(0);
    function a(r) {
      return (
        ((255 & r) << 24) |
        ((65280 & r) << 8) |
        ((16711680 & r) >>> 8) |
        ((4278190080 & r) >>> 24)
      );
    }
    var u =
        Math.imul ||
        function(r, t) {
          return ((((r >> 16) * (t |= 0)) << 16) + (65535 & r) * t) | 0;
        },
      i = a;
    (t.div = function(r, t) {
      if (0 === t) throw e.division_by_zero;
      return (r / t) | 0;
    }),
      (t.mod_ = function(r, t) {
        if (0 === t) throw e.division_by_zero;
        return r % t;
      }),
      (t.caml_bswap16 = function(r) {
        return ((255 & r) << 8) | ((65280 & r) >>> 8);
      }),
      (t.caml_int32_bswap = a),
      (t.caml_nativeint_bswap = i),
      (t.imul = u);
  },
  function(r, t, n) {
    "use strict";
    t.repeat = function(r, t) {
      if (t.repeat) return t.repeat(r);
      if (0 == t.length || 0 == r) return "";
      if (t.length * r >= 1 << 28)
        throw new RangeError(
          "repeat count must not overflow maximum string size"
        );
      for (var n = ""; 1 == (1 & r) && (n += t), 0 != (r >>>= 1); ) t += t;
      return n;
    };
  },
  function(r, t, n) {
    "use strict";
    var e = n(3),
      a = n(1),
      u = n(14),
      i = n(8),
      o = n(2),
      c = n(15),
      f = n(4);
    function s(r) {
      return { id: r[0], name: r[1], available: r[2], operation_time: r[3] };
    }
    function l(r) {
      return { product_id: r[0], qty: r[1] };
    }
    function v(r) {
      var t = r[2].map(l);
      return { id: r[0], name: r[1], products: t };
    }
    function _(r) {
      var t = r[1];
      return r[0][1].map(function(r) {
        var n = t.filter(function(t) {
            var n = t;
            return r[0] === n[0];
          }),
          e = o.caml_array_get(n, 0);
        return { id: r[0], name: r[1], value: e[1] };
      });
    }
    function m(r) {
      var t = r[5],
        n = void 0 !== t ? t : null,
        e = r[2].map(function(r) {
          var t = r;
          return { resource_id: t[0], qty: t[1] };
        }),
        a = r[6];
      return "number" == typeof a
        ? 0 === a
          ? {
              id: r[0],
              name: r[1],
              resources: e,
              buffer_id: r[3],
              machine_mode: n,
              status: "not ready"
            }
          : {
              id: r[0],
              name: r[1],
              resources: e,
              buffer_id: r[3],
              machine_mode: n,
              status: "idle"
            }
        : a.tag
        ? {
            id: r[0],
            name: r[1],
            resources: e,
            buffer_id: r[3],
            machine_mode: n,
            status: "operation",
            time: a[0],
            totalTime: a[1],
            operation_id: a[2]
          }
        : {
            id: r[0],
            name: r[1],
            resources: e,
            buffer_id: r[3],
            machine_mode: n,
            status: "setup",
            time: a[0],
            totalTime: a[1],
            mode_id: a[2]
          };
    }
    function d(r) {
      var t = function(r, t) {
          return { pa: r, id: t[0], qty: t[1] };
        },
        n = r[2];
      if (n.tag) {
        var e = n[0],
          a = e[3].map(function(r) {
            return t("asset", r);
          }),
          u = e[4].map(function(r) {
            return t("asset", r);
          }),
          i = e[1].map(function(r) {
            return t("product", r);
          }),
          o = e[2].map(function(r) {
            return t("product", r);
          });
        return {
          id: r[0],
          name: r[1],
          requirements: i.concat(a),
          results: o.concat(u),
          buffer_id: e[0]
        };
      }
      var c = n[0],
        f = c[0].map(function(r) {
          return t("asset", r);
        }),
        s = c[1].map(function(r) {
          return t("asset", r);
        });
      return { id: r[0], name: r[1], requirements: f, results: s };
    }
    function p(r) {
      var t = r[3];
      return void 0 !== t
        ? { id: r[0], buffer_from: r[1], buffer_to: r[2], products: t }
        : { id: r[0], buffer_from: r[1], buffer_to: r[2] };
    }
    function g(r) {
      return { id: r[0], qty: r[1] };
    }
    function h(r) {
      var t = r[1],
        n = r[0];
      return n.tag
        ? { id: n[0], type: "asset", qty: t }
        : { id: n[0], type: "product", qty: t };
    }
    var y = { resources: [], modes: [] };
    function $(r, t) {
      return i.$pipe$pipe$great(u.workstationOfSimulation(r, t), function(t) {
        var n = t[6],
          e = t[5];
        if ("number" == typeof n && 0 !== n && void 0 !== e)
          return u.modeOfSimulation(r, e);
      });
    }
    function b(r, t) {
      return u.bufferOfSimulation(r, t[0][3]);
    }
    var k = c.parse,
      w = c.parseTables;
    (t.parse = k),
      (t.parseTables = w),
      (t.newSim = function(r) {
        return [
          r,
          r[1].map(function(r) {
            return [r[0], r[2]];
          }),
          [],
          1,
          0
        ];
      }),
      (t.visInfo = function(r) {
        var t = function(t) {
            var n = r[0][8].filter(function(r) {
              return r[3] === t;
            });
            return 1 === n.length ? [o.caml_array_get(n, 0)[0]] : 0;
          },
          n = function(n) {
            return r[0][9].reduce(
              function(r, e) {
                var a = e[2],
                  u = e[1];
                if (n === u) {
                  var i = r[1],
                    o = t(a),
                    c = o ? ["workstation", o[0]] : ["buffer", a],
                    f = { type: c[0], id: c[1] };
                  return i.push(f), [r[0], i];
                }
                if (n === a) {
                  var s = r[0],
                    l = t(u),
                    v = l ? ["workstation", l[0]] : ["buffer", u],
                    _ = { type: v[0], id: v[1] };
                  return s.push(_), [s, r[1]];
                }
                return r;
              },
              [[], []]
            );
          },
          e = r[0][7].reduce(function(r, t) {
            var e = t[3];
            if (void 0 !== e) {
              var a = e,
                u = n(t[0]),
                i = {
                  type: "buffer",
                  id: t[0],
                  x: a[0],
                  y: a[1],
                  inputs: u[0],
                  outputs: u[1]
                };
              return r.push(i), r;
            }
            return r;
          }, []);
        return r[0][8]
          .reduce(function(r, t) {
            var e = t[7];
            if (void 0 !== e) {
              var a = e,
                u = n(t[3]),
                i = {
                  type: "workstation",
                  id: t[0],
                  x: a[0],
                  y: a[1],
                  inputs: u[0],
                  outputs: u[1]
                };
              return r.push(i), r;
            }
            return r;
          }, [])
          .concat(e);
      }),
      (t.info = function(r) {
        return {
          resources: r[0][5].map(s),
          buffers: r[0][7].map(v),
          assets: _(r),
          workstations: r[0][8].map(m)
        };
      }),
      (t.allActions = function(r) {
        return r[0][2].map(d);
      }),
      (t.readyActions = function(r) {
        return r[0][2]
          .filter(function(t) {
            return u.actionReady(r, t);
          })
          .map(function(r) {
            return r[0];
          });
      }),
      (t.allTransports = function(r) {
        return r[0][9].map(p);
      }),
      (t.readyTransports = function(r) {
        var t = [];
        return (
          r[0][9].forEach(function(n) {
            var e = [],
              a = u.bufferOfSimulation(r, n[1]);
            return (
              void 0 !== a &&
                a[2].forEach(function(t) {
                  var a = t[0];
                  return u.transportReady(r, n, a) ? (e.push(a), 0) : 0;
                }),
              e.length > 0
                ? (t.push({
                    id: n[0],
                    buffer_from: n[1],
                    buffer_to: n[2],
                    products: e
                  }),
                  0)
                : 0
            );
          }),
          t
        );
      }),
      (t.workstationInfo = function(r, t) {
        var n = u.workstationOfSimulation(r, t);
        if (void 0 !== n) {
          var e = u.machineOfSimulation(r, n[4]);
          if (void 0 !== e) {
            var a = e;
            return {
              resources: a[3].map(g),
              modes: a[2].map(function(t) {
                var n = r,
                  e = t,
                  a = e[2].map(g),
                  i = u.modeOfSimulation(n, e[0]);
                if (void 0 !== i) {
                  var o = i[2].map(function(r) {
                    var t = n,
                      e = r,
                      a = e[0],
                      i = u.operationOfSimulation(t, a);
                    if (void 0 !== i) {
                      var o = i,
                        c = o[2][0].map(h),
                        f = o[2][1].map(h);
                      return { id: a, time: e[1], requirements: c, results: f };
                    }
                    return { id: a, time: -1, requirements: [], results: [] };
                  });
                  return { id: e[0], time: e[1], resources: a, operations: o };
                }
                return { id: e[0], time: e[1], resources: a, operations: [] };
              })
            };
          }
          return y;
        }
        return y;
      }),
      (t.readyModes = function(r, t) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$pipe$great(
              i.$pipe$pipe$great(u.workstationOfSimulation(r, t), function(t) {
                return u.machineOfSimulation(r, t[4]);
              }),
              function(r) {
                var t = r[1],
                  n = r[0],
                  e = n[6];
                if ("number" == typeof e) {
                  if (0 === e) return f.some(void 0);
                } else if (!e.tag) return f.some(u.modeOfMachine(t, e[2]));
                var a = n[5];
                return void 0 !== a
                  ? f.some(u.modeOfMachine(t, a))
                  : f.some(void 0);
              }
            ),
            function(t) {
              var n,
                e = t[1],
                a = t[0][1];
              if (void 0 !== e) {
                var u = e;
                n = a[2].filter(function(r) {
                  return r[0] !== u[0];
                });
              } else n = a[2];
              return n
                .filter(function(t) {
                  return i.readyMode(r, a, t, e);
                })
                .map(function(r) {
                  return r[0];
                });
            }
          ),
          []
        );
      }),
      (t.readyOperations = function(r, t) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$pipe$great($(r, t), function(t) {
              return b(r, t);
            }),
            function(t) {
              var n = t[1];
              return t[0][1][2].reduce(function(t, e) {
                var a = e[0];
                return u.readyOperation(r, a, n) ? t.concat(a) : t;
              }, []);
            }
          ),
          []
        );
      }),
      (t.execAction = function(r, t) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$great(
              i.$pipe$great(u.actionOfSimulation(r, t), function(t) {
                if (u.actionReady(r, t)) return t;
              }),
              function(n) {
                var e,
                  o = _(r),
                  c = n[2];
                return (
                  (e = c.tag
                    ? f.some(
                        i.$pipe$eq$great(
                          i.$pipe$great(
                            u.bufferOfSimulation(r, c[0][0]),
                            function(r) {
                              return f.some(v(r));
                            }
                          ),
                          { id: -1, name: "", products: [] }
                        )
                      )
                    : void 0),
                  r[2].some(function(r) {
                    var n = r[1];
                    return !n.tag && n[0] === t && !a._3(n[1], o, e, t);
                  })
                    ? void 0
                    : n
                );
              }
            ),
            function(t) {
              var n,
                e = t[2];
              if (e.tag) {
                var a = e[0],
                  o = a[3],
                  c = a[1],
                  f = a[0],
                  s = a[4],
                  l = a[2],
                  v = a[0];
                n = i.$$eq$great(
                  i.$$great(
                    i.$$great(
                      i.$$great(
                        i.$$great(r, function(r) {
                          return u.takeFromAssets(o, r);
                        }),
                        function(r) {
                          return u.takeFromBuffer(f, c, r);
                        }
                      ),
                      function(r) {
                        return u.addToAssets(s, r);
                      }
                    ),
                    function(r) {
                      return u.addToBuffer(v, l, r);
                    }
                  ),
                  !0
                );
              } else {
                var _ = e[0],
                  m = _[0],
                  d = _[1];
                n = i.$$eq$great(
                  i.$$great(
                    i.$$great(r, function(r) {
                      return u.takeFromAssets(m, r);
                    }),
                    function(r) {
                      return u.addToAssets(d, r);
                    }
                  ),
                  !0
                );
              }
              return n;
            }
          ),
          [!1, r]
        );
      }),
      (t.assignResource = function(r, t, n, e) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$great(u.checkSimResources(r, n, e), function(n) {
              return u.workstationOfSimulation(r, t);
            }),
            function(t) {
              return i.$$eq$great(
                i.$$great(
                  i.$$great(r, function(r) {
                    return u.takeFromResources(n, e, r);
                  }),
                  function(r) {
                    return u.assignResToWorkstation(t, n, e, r);
                  }
                ),
                !0
              );
            }
          ),
          [!1, r]
        );
      }),
      (t.releaseResource = function(r, t, n, e) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$great(u.workstationOfSimulation(r, t), function(r) {
              return u.checkWorkstationResources(n, e, r);
            }),
            function(a) {
              return i.$$eq$great(
                i.$$great(
                  i.$$great(
                    i.$$great(r, function(r) {
                      return u.releaseResFromWorkstation(a, n, e, r);
                    }),
                    function(r) {
                      return u.updateWorkstationMode(t, r);
                    }
                  ),
                  function(r) {
                    return u.addToResources(n, e, r);
                  }
                ),
                !0
              );
            }
          ),
          [!1, r]
        );
      }),
      (t.transfer = function(r, t, n, e) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$great(
              i.$pipe$great(
                i.$pipe$great(u.connectionOfSimulation(r, t), function(t) {
                  var n = u.bufferOfSimulation(r, t[1]),
                    e = u.bufferOfSimulation(r, t[2]);
                  if (void 0 !== n && void 0 !== e) return [t, n, e];
                }),
                function(r) {
                  return void 0 !== r[0][3]
                    ? r[1][2].some(function(r) {
                        return r[0] === n;
                      })
                      ? r
                      : void 0
                    : r;
                }
              ),
              function(r) {
                var t = [[n, e]],
                  a = i.subIdQty(r[1][2], t);
                return i.isNegativeIdQty(a) ? void 0 : r;
              }
            ),
            function(t) {
              var a = [[n, e]],
                o = t[1][0],
                c = t[2][0];
              return i.$$eq$great(
                i.$$great(
                  i.$$great(r, function(r) {
                    return u.takeFromBuffer(o, a, r);
                  }),
                  function(r) {
                    return u.addToBuffer(c, a, r);
                  }
                ),
                !0
              );
            }
          ),
          [!1, r]
        );
      }),
      (t.startOperation = function(r, t, n) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$great(
              i.$pipe$great(
                i.$pipe$pipe$great(
                  i.$pipe$great($(r, t), function(r) {
                    return i.operationInMode(n, r);
                  }),
                  function(t) {
                    return b(r, t);
                  }
                ),
                function(t) {
                  var e = t[1],
                    a = t[0];
                  if (u.readyOperation(r, n, e)) return [a[0], a[1], e];
                }
              ),
              function(t) {
                var e = u.operationOfSimulation(r, n);
                if (void 0 !== e) return [t[0], t[1], t[2], e];
              }
            ),
            function(t) {
              var n = t[3],
                e = t[1],
                a = t[0],
                o = u.operationReqs(n),
                c = o[1],
                f = o[0],
                s = t[2][0];
              return i.$$eq$great(
                i.$$great(
                  i.$$great(
                    i.$$great(r, function(r) {
                      return u.takeFromAssets(f, r);
                    }),
                    function(r) {
                      return u.takeFromBuffer(s, c, r);
                    }
                  ),
                  function(r) {
                    return u.simStartOperation(a, e, n, r);
                  }
                ),
                !0
              );
            }
          ),
          [!1, r]
        );
      }),
      (t.startMode = function(r, t, n) {
        return i.$pipe$eq$great(
          i.$pipe$great(
            i.$pipe$great(
              i.$pipe$great(u.workstationOfSimulation(r, t), function(t) {
                return u.checkWorkstationValidMode(r, n, t);
              }),
              function(t) {
                return u.checkWorkstationResourcesForMode(r, n, t);
              }
            ),
            function(t) {
              return u.startWorkstationMode(r, n, t);
            }
          ),
          [!1, r]
        );
      }),
      (t.tick = function(r) {
        return i.$pipe$eq$great(i.$pipe$great(r, u.tickWorkstations), r);
      }),
      (t.addBeforeAction = function(r, t, n) {
        return i.$pipe$eq$great(
          i.$pipe$great(u.actionOfSimulation(r, t), function(a) {
            var i = e.__(0, [t, n]),
              o = u.simAddHandler(r, i);
            return [!0, o[0], o[1]];
          }),
          [!1, -1, r]
        );
      }),
      (t.removeHandler = function(r, t) {
        return i.$$eq$great(
          i.$$great(r, function(r) {
            return u.simRemoveHandler(t, r);
          }),
          !0
        );
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(5),
      a = n(3),
      u = n(1),
      i = n(8),
      o = n(4);
    function c(r, t) {
      return o.undefined_to_opt(
        r[0][7].find(function(r) {
          return r[0] === t;
        })
      );
    }
    function f(r, t) {
      return o.undefined_to_opt(
        r[0][5].find(function(r) {
          return r[0] === t;
        })
      );
    }
    function s(r, t) {
      return o.undefined_to_opt(
        r[0][8].find(function(r) {
          return r[0] === t;
        })
      );
    }
    function l(r, t) {
      return o.undefined_to_opt(
        r[0][6].find(function(r) {
          return r[0] === t;
        })
      );
    }
    function v(r, t) {
      return o.undefined_to_opt(
        r[2].find(function(r) {
          return r[0] === t;
        })
      );
    }
    function _(r, t) {
      return r[2].reduce(function(r, n) {
        return void 0 !== r ? r : n[0] === t ? n[1] : r;
      }, void 0);
    }
    function m(r, t) {
      return o.undefined_to_opt(
        r[0][3].find(function(r) {
          return r[0] === t;
        })
      );
    }
    function d(r, t) {
      return t.reduce(function(t, n) {
        return n[0] === r ? n[1] : t;
      }, 0);
    }
    function p(r, t, n) {
      var e = n[1].map(function(n) {
        var e = n[0],
          a = i.howMuchOfAsset(e, t);
        return 0 === a ? n : [e, u._2(r, n[1], a)];
      });
      return [n[0], e, n[2], n[3], n[4]];
    }
    function g(r, t) {
      return p(
        function(r, t) {
          return (r + t) | 0;
        },
        r,
        t
      );
    }
    function h(r, t, n, e) {
      return i.$pipe$eq$great(
        i.$pipe$great(c(e, r), function(r) {
          var a = u._2(n, r[2], t),
            i = r[0],
            o = r[1],
            c = r[3],
            f = [i, o, a, c],
            s = e[0][7].map(function(r) {
              return r[0] === i ? f : r;
            }),
            l = e[0];
          return [
            [l[0], l[1], l[2], l[3], l[4], l[5], l[6], s, l[8], l[9]],
            e[1],
            e[2],
            e[3],
            e[4]
          ];
        }),
        e
      );
    }
    function y(r, t, n) {
      return h(r, t, i.addIdQty, n);
    }
    function $(r, t) {
      return t.reduce(
        function(r, t) {
          var n = t[0],
            e = r[1],
            a = r[0];
          return n.tag
            ? [[[n[0], t[1]]].concat(a), e]
            : [a, [[n[0], t[1]]].concat(e)];
        },
        [[], []]
      );
    }
    function b(r) {
      return $(0, r[2][1]);
    }
    function k(r, t) {
      var n = t[0][8].map(function(t) {
          return t[0] === r[0] ? r : t;
        }),
        e = t[0];
      return [
        [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], n, e[9]],
        t[1],
        t[2],
        t[3],
        t[4]
      ];
    }
    function w(r, t, n) {
      return k([r[0], r[1], r[2], r[3], r[4], r[5], t, r[7]], n);
    }
    function A(r, t, n) {
      var a = c(r, t);
      if (void 0 === a) return !1;
      for (var u = a, i = e.to_list(n); ; ) {
        var o = i;
        if (!o) return !0;
        var f = o[0],
          s = d(f[0], u[2]);
        if (f[1] > s) return !1;
        i = o[1];
      }
    }
    function q(r, t, n) {
      return i.$pipe$eq$great(
        i.$pipe$great(f(n, t), function(e) {
          var a = u._1(r, e[2]),
            i = [e[0], e[1], a, e[3]],
            o = n[0][5].map(function(r) {
              return r[0] === t ? i : r;
            }),
            c = n[0];
          return [
            [c[0], c[1], c[2], c[3], c[4], o, c[6], c[7], c[8], c[9]],
            n[1],
            n[2],
            n[3],
            n[4]
          ];
        }),
        n
      );
    }
    function O(r, t, n) {
      return i.$pipe$eq$great(
        i.$pipe$great(l(r, n[4]), function(r) {
          return i.$pipe$great(v(r, t), function(t) {
            var e = r[3],
              a = t[2],
              u = i.addIdQty(e, a),
              o = n[2],
              c = i.subIdQty(o, u);
            return !i.isNegativeIdQty(c);
          });
        }),
        !1
      );
    }
    function S(r, t, n, e) {
      var a = [t, n],
        u = i.addIdQty(r[2], [a]);
      return k([r[0], r[1], u, r[3], r[4], r[5], r[6], r[7]], e);
    }
    var C = S;
    (t.connectionOfSimulation = function(r, t) {
      return o.undefined_to_opt(
        r[0][9].find(function(r) {
          return r[0] === t;
        })
      );
    }),
      (t.bufferOfSimulation = c),
      (t.resourceOfSimulation = f),
      (t.actionOfSimulation = function(r, t) {
        return o.undefined_to_opt(
          r[0][2].find(function(r) {
            return r[0] === t;
          })
        );
      }),
      (t.workstationOfSimulation = s),
      (t.machineOfSimulation = l),
      (t.modeOfMachine = v),
      (t.modeOfSimulation = function(r, t) {
        return o.undefined_to_opt(
          r[0][4].find(function(r) {
            return r[0] === t;
          })
        );
      }),
      (t.operationTimeOfMode = _),
      (t.operationOfSimulation = m),
      (t.howManyProducts = d),
      (t.changeAssets = p),
      (t.takeFromAssets = function(r, t) {
        return p(
          function(r, t) {
            return (r - t) | 0;
          },
          r,
          t
        );
      }),
      (t.addToAssets = g),
      (t.changeBuffer = h),
      (t.takeFromBuffer = function(r, t, n) {
        return h(r, t, i.subIdQty, n);
      }),
      (t.addToBuffer = y),
      (t.operationInfo = $),
      (t.operationReqs = function(r) {
        return $(0, r[2][0]);
      }),
      (t.operationResults = b),
      (t.substWorkstation = k),
      (t.substWorkstationStatus = w),
      (t.simStartOperation = function(r, t, n, e) {
        return i.$pipe$eq$great(
          i.$pipe$great(_(t, n[0]), function(t) {
            return w(r, a.__(1, [t, t, n[0]]), e);
          }),
          e
        );
      }),
      (t.areProductsInBuffer = A),
      (t.actionReady = function(r, t) {

        var n = t[2];
        if (n.tag) {
          var e = n[0],
            a = i.enoughAssets(r, e[3]),
            u = A(r, e[0], e[1]);
          return !!a && u;
        }
        return i.enoughAssets(r, n[0][0]);
      }),
      (t.transportReady = function(r, t, n) {
        var e = function(r, t, n) {
            return A(r, t[1], [[n, 1]]);
          },
          a = t[3];
        return void 0 !== a
          ? !!a.some(function(r) {
              return r === n;
            }) && e(r, t, n)
          : e(r, t, n);
      }),
      (t.readyOperation = function(r, t, n) {
        return i.$pipe$eq$great(
          i.$pipe$great(m(r, t), function(t) {
            var e = t[2][0].reduce(
                function(r, t) {
                  var n = t[0];
                  if (n.tag) {
                    var e = [[n[0], t[1]]].concat(r[1]);
                    return [r[0], e];
                  }
                  return [[[n[0], t[1]]].concat(r[0]), r[1]];
                },
                [[], []]
              ),
              a = A(r, n[0], e[0]),
              u = i.enoughAssets(r, e[1]);
            return a && u;
          }),
          !1
        );
      }),
      (t.checkSimResources = function(r, t, n) {
        return n < 0
          ? void 0
          : i.$pipe$great(f(r, t), function(r) {
              return !(r[2] < n) || void 0;
            });
      }),
      (t.changeResource = q),
      (t.takeFromResources = function(r, t, n) {
        return q(
          function(r) {
            return (t - r) | 0;
          },
          r,
          n
        );
      }),
      (t.addToResources = function(r, t, n) {
        return q(
          function(r) {
            return (t + r) | 0;
          },
          r,
          n
        );
      }),
      (t.areResOkForWorkstationMode = O),
      (t.changeWorkstationRes = S),
      (t.assignResToWorkstation = C),
      (t.releaseResFromWorkstation = function(r, t, n, e) {
        return S(r, t, 0 | -n, e);
      }),
      (t.updateWorkstationMode = function(r, t) {
        return i.$pipe$eq$great(
          i.$pipe$great(s(t, r), function(r) {
            var n = r[5];
            return void 0 === n || O(t, n, r)
              ? t
              : k([r[0], r[1], r[2], r[3], r[4], void 0, 0, r[7]], t);
          }),
          t
        );
      }),
      (t.checkWorkstationResources = function(r, t, n) {
        var e = [[r, t]],
          a = i.subIdQty(n[2], e);
        return i.isNegativeIdQty(a) ? void 0 : n;
      }),
      (t.checkWorkstationValidMode = function(r, t, n) {
        return i.$pipe$great(
          i.$pipe$great(l(r, n[4]), function(r) {
            return v(r, t);
          }),
          function(r) {
            return n;
          }
        );
      }),
      (t.checkWorkstationResourcesForMode = function(r, t, n) {
        if (O(r, t, n)) return n;
      }),
      (t.startWorkstationMode = function(r, t, n) {
        return i.$pipe$great(
          i.$pipe$great(l(r, n[4]), function(r) {
            return v(r, t);
          }),
          function(e) {
            var u = e[1],
              i = e[1],
              o = a.__(0, [u, i, t]);
            return [!0, k([n[0], n[1], n[2], n[3], n[4], void 0, o, n[7]], r)];
          }
        );
      }),
      (t.tickWorkstations = function(r) {
        return r[0][8].reduce(function(r, t) {
          var n = t[6];
          if ("number" == typeof n) return r;
          if (n.tag) {
            var e = n[2],
              u = n[0];
            if (1 === u) {
              var o = [t[0], t[1], t[2], t[3], t[4], t[5], 1, t[7]];
              return i.$pipe$eq$great(
                i.$pipe$great(m(r, e), function(n) {
                  var e = b(n),
                    a = e[1],
                    u = e[0],
                    c = t[3],
                    f = i.$$eq$great(
                      i.$$great(
                        i.$$great(
                          i.$$great(r, function(r) {
                            return g(u, r);
                          }),
                          function(r) {
                            return y(c, a, r);
                          }
                        ),
                        function(r) {
                          return k(o, r);
                        }
                      ),
                      !0
                    );
                  return f[0] ? f[1] : r;
                }),
                r
              );
            }
            return k(
              [
                t[0],
                t[1],
                t[2],
                t[3],
                t[4],
                t[5],
                a.__(1, [(u - 1) | 0, n[1], e]),
                t[7]
              ],
              r
            );
          }
          var c = n[2],
            f = n[0];
          if (1 === f) return k([t[0], t[1], t[2], t[3], t[4], c, 1, t[7]], r);
          var s = (f - 1) | 0,
            l = n[1],
            v = a.__(0, [s, l, c]);
          return k([t[0], t[1], t[2], t[3], t[4], t[5], v, t[7]], r);
        }, r);
      }),
      (t.simRemoveHandler = function(r, t) {
        var n = t[2].reduce(function(t, n) {
          return n[0] === r ? t : [n].concat(t);
        }, []);
        return [t[0], t[1], n, t[3], t[4]];
      }),
      (t.simAddHandler = function(r, t) {
        var n = [[r[3], t]].concat(r[2]),
          e = [r[0], r[1], n, (r[3] + 1) | 0, r[4]];
        return [r[3], e];
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(5),
      a = n(3),
      u = n(1),
      i = n(6),
      o = n(8),
      c = n(2),
      f = n(16),
      s = n(18),
      l = n(10),
      v = n(0);
    function _(r, t) {
      return r.map(function(r) {
        var n = r,
          e = t,
          u = n[1],
          i = n[0];
        if (u.length === e.length) {
          var o = u.map(function(r, t) {
            var n = c.caml_array_get(e, t),
              u = i,
              o = r,
              l = n;
            if ("null" === o) return 0;
            if ("number" != typeof l) {
              if (l[0].indexOf(o) > -1) return a.__(1, [o]);
              var v =
                "Line " + u.toString() + ": the value " + o + " is incorrect.";
              throw [s.ParseException, [v]];
            }
            if (0 !== l) return a.__(1, [o]);
            try {
              return a.__(0, [f.caml_int32_of_string(o)]);
            } catch (r) {
              var _ =
                "Line " + u.toString() + ": the value " + o + " is not an int.";
              throw [s.ParseException, [_]];
            }
          });
          return [i, o];
        }
        var l = "Line " + i.toString() + ": incorrect number of columns.";
        throw [s.ParseException, [l]];
      });
    }
    function m(r, t) {
      var n = r.filter(function(r) {
        var n = t;
        return r[0] === n;
      });
      return c.caml_array_get(n, 0);
    }
    function d(r, t, n, e) {
      return m(r, t)[1].filter(function(r) {
        var t = r,
          a = n,
          u = e,
          o = c.caml_array_get(t[1], a);
        return i.caml_equal(o, u);
      });
    }
    function p(r, t) {
      var n = r.toString();
      return a.__(1, ["Line " + n + ": " + t]);
    }
    function g(r) {
      return r.reduce(
        function(r, t) {
          var n = r[1],
            e = r[0];
          return t.tag ? (n.push(t[0]), [e, n]) : (e.push(t[0]), [e, n]);
        },
        [[], []]
      );
    }
    function h(r, t) {
      return r
        .trim()
        .split(t)
        .map(function(r) {
          return r.trim();
        });
    }
    var y = [["req", "res"]],
      $ = [["asset", "product"]];
    function b(r, t) {
      var n = 0;
      switch (r) {
        case "Actions":
        case "Assets":
          n = 1;
          break;
        case "ConnectionConstraints":
          return [r, _(t, [0, 0])];
        case "MachineModeResources":
          return [r, _(t, [0, 0, 0, 0])];
        case "BufferProducts":
        case "Connections":
        case "MachineModes":
        case "MachineResources":
        case "ModeOperations":
          n = 3;
          break;
        case "ActionsReqsResults":
        case "OperationsReqsResults":
          n = 2;
          break;
        case "Buffers":
        case "Machines":
        case "Modes":
        case "Operations":
        case "Products":
          n = 4;
          break;
        case "Resources":
          return [r, _(t, [0, 1, 0, 0])];
        case "Visualization":
          return [r, _(t, [[["buf", "wst"]], 0, 0, 0])];
        case "Workstations":
          return [
            r,
            _(t, [
              0,
              1,
              0,
              0,
              0,
              0,
              [["not ready", "setup", "idle", "operation"]],
              0
            ])
          ];
        default:
          var e = "Unexpected table: " + r;
          throw [s.ParseException, [e]];
      }
      switch (n) {
        case 1:
          return [r, _(t, [0, 1, 0])];
        case 2:
          return [r, _(t, [0, y, $, 0, 0])];
        case 3:
          return [r, _(t, [0, 0, 0])];
        case 4:
          return [r, _(t, [0, 1])];
      }
    }
    function k(r, t) {
      if (t) {
        var n = h(r, ",");
        return 0 !== n.length ? a.__(1, [n]) : 0;
      }
      if (r.startsWith("-- ")) {
        var e = h(r, " ");
        return a.__(0, [c.caml_array_get(e, 1)]);
      }
      return 0;
    }
    function w(r) {
      for (var t = 1, n = e.to_list(r), a = 0, u = []; ; ) {
        var i = a,
          o = n,
          c = t;
        if (!o) return u;
        var f = o[1],
          s = o[0].trim();
        if ("" !== s) {
          var l = k(s, i);
          if ("number" != typeof l) {
            if (l.tag) {
              if (i) {
                var v = i[0],
                  _ = v[1],
                  m = [c, l[0]];
                _.push(m), (a = [[v[0], _]]), (n = f), (t = (c + 1) | 0);
                continue;
              }
            } else if (!i) {
              (a = [[l[0], []]]), (n = f), (t = (c + 1) | 0);
              continue;
            }
            (a = 0), (n = f), (t = (c + 1) | 0);
          } else {
            if (i) {
              var d = i[0],
                p = b(d[0], d[1]);
              u.push(p), (a = 0), (n = f), (t = (c + 1) | 0);
              continue;
            }
            (a = 0), (n = f), (t = (c + 1) | 0);
          }
        } else {
          if (i) {
            var g = i[0],
              h = b(g[0], g[1]);
            u.push(h), (a = 0), (n = f), (t = (c + 1) | 0);
            continue;
          }
          (a = 0), (n = f), (t = (c + 1) | 0);
        }
      }
    }
    function A(r, t) {
      if (0 !== r[1].length) return r;
      var n = u._1(t, r[0]);
      return [n[0], n[1]];
    }
    (t.parse = function(r) {
      var t = w(r),
        n = A(
          A(
            A(
              A(
                A(
                  A(
                    A(
                      A(
                        A(
                          A(
                            A(
                              [
                                [
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0,
                                  void 0
                                ],
                                []
                              ],
                              function(r) {
                                var n = r,
                                  e = g(
                                    m(t, "Products")[1].map(function(r) {
                                      var t = r[1],
                                        n = r[0];
                                      if (2 !== t.length)
                                        return p(n, "incorrect format");
                                      var e = t[0];
                                      if ("number" == typeof e || e.tag)
                                        return p(n, "incorrect format");
                                      var u = t[1];
                                      return "number" == typeof u || 1 !== u.tag
                                        ? p(n, "incorrect format")
                                        : a.__(0, [[e[0], u[0]]]);
                                    })
                                  );
                                return [
                                  [
                                    e[0],
                                    n[1],
                                    n[2],
                                    n[3],
                                    n[4],
                                    n[5],
                                    n[6],
                                    n[7],
                                    n[8],
                                    n[9]
                                  ],
                                  e[1]
                                ];
                              }
                            ),
                            function(r) {
                              var n = r,
                                e = g(
                                  m(t, "Assets")[1].map(function(r) {
                                    var t = r[1],
                                      n = r[0];
                                    if (3 !== t.length)
                                      return p(n, "incorrect format");
                                    var e = t[0];
                                    if ("number" == typeof e || e.tag)
                                      return p(n, "incorrect format");
                                    var u = t[1];
                                    if ("number" == typeof u || 1 !== u.tag)
                                      return p(n, "incorrect format");
                                    var i = t[2];
                                    return "number" == typeof i || i.tag
                                      ? p(n, "incorrect format")
                                      : a.__(0, [[e[0], u[0], i[0]]]);
                                  })
                                );
                              return [
                                [
                                  n[0],
                                  e[0],
                                  n[2],
                                  n[3],
                                  n[4],
                                  n[5],
                                  n[6],
                                  n[7],
                                  n[8],
                                  n[9]
                                ],
                                e[1]
                              ];
                            }
                          ),
                          function(r) {
                            var n = t,
                              e = r,
                              u = g(
                                m(n, "Actions")[1].map(function(r) {
                                  var t = r[1],
                                    e = r[0];
                                  if (3 !== t.length)
                                    return p(e, "incorrect format");
                                  var u = t[0];
                                  if ("number" == typeof u || u.tag)
                                    return p(e, "incorrect format");
                                  var i = u[0],
                                    o = t[1];
                                  if ("number" == typeof o || 1 !== o.tag)
                                    return p(e, "incorrect format");
                                  var c = o[0],
                                    f = t[2];
                                  if ("number" == typeof f || f.tag)
                                    return p(e, "incorrect format");
                                  var s = d(
                                      n,
                                      "ActionsReqsResults",
                                      0,
                                      a.__(0, [i])
                                    ),
                                    l = [],
                                    v = [],
                                    _ = [],
                                    m = [];
                                  if (
                                    (s.forEach(function(r) {
                                      var t = r[1];
                                      if (5 !== t.length) return 0;
                                      var n = t[1];
                                      if ("number" == typeof n || 1 !== n.tag)
                                        return 0;
                                      var e = t[2];
                                      if ("number" == typeof e || 1 !== e.tag)
                                        return 0;
                                      var a = e[0],
                                        u = t[3];
                                      if ("number" == typeof u || u.tag)
                                        return 0;
                                      var i = t[4];
                                      if ("number" == typeof i || i.tag)
                                        return 0;
                                      var o,
                                        c = [u[0], i[0]];
                                      switch (n[0]) {
                                        case "req":
                                          switch (a) {
                                            case "asset":
                                              o = v;
                                              break;
                                            case "product":
                                              o = l;
                                              break;
                                            default:
                                              o = v;
                                          }
                                          break;
                                        case "res":
                                          switch (a) {
                                            case "asset":
                                              o = m;
                                              break;
                                            case "product":
                                              o = _;
                                              break;
                                            default:
                                              o = v;
                                          }
                                          break;
                                        default:
                                          o = v;
                                      }
                                      return o.push(c), 0;
                                    }),
                                    v.length > 0 &&
                                      m.length > 0 &&
                                      !(l.length > 0) &&
                                      !(_.length > 0))
                                  ) {
                                    var g = [v, m];
                                    return a.__(0, [[i, c, a.__(0, [g])]]);
                                  }
                                  var h = [f[0], l, _, v, m];
                                  return a.__(0, [[i, c, a.__(1, [h])]]);
                                })
                              );
                            return [
                              [
                                e[0],
                                e[1],
                                u[0],
                                e[3],
                                e[4],
                                e[5],
                                e[6],
                                e[7],
                                e[8],
                                e[9]
                              ],
                              u[1]
                            ];
                          }
                        ),
                        function(r) {
                          var n = t,
                            e = r,
                            u = g(
                              m(n, "Operations")[1].map(function(r) {
                                var t = r[1],
                                  e = r[0];
                                if (2 !== t.length)
                                  return p(e, "incorrect format");
                                var u = t[0];
                                if ("number" == typeof u || u.tag)
                                  return p(e, "incorrect format");
                                var i = u[0],
                                  o = t[1];
                                if ("number" == typeof o || 1 !== o.tag)
                                  return p(e, "incorrect format");
                                var c = d(
                                    n,
                                    "OperationsReqsResults",
                                    0,
                                    a.__(0, [i])
                                  ),
                                  f = [],
                                  s = [];
                                c.forEach(function(r) {
                                  var t = r[1];
                                  if (5 !== t.length) return 0;
                                  var n = t[1];
                                  if ("number" == typeof n || 1 !== n.tag)
                                    return 0;
                                  var e = t[2];
                                  if ("number" == typeof e || 1 !== e.tag)
                                    return 0;
                                  var u = t[3];
                                  if ("number" == typeof u || u.tag) return 0;
                                  var i = u[0],
                                    o = t[4];
                                  if ("number" == typeof o || o.tag) return 0;
                                  var c,
                                    l,
                                    v = o[0];
                                  switch (e[0]) {
                                    case "asset":
                                      c = [a.__(1, [i]), v];
                                      break;
                                    case "product":
                                      c = [a.__(0, [i]), v];
                                      break;
                                    default:
                                      c = [a.__(1, [i]), v];
                                  }
                                  switch (n[0]) {
                                    case "req":
                                      l = f;
                                      break;
                                    case "res":
                                      l = s;
                                      break;
                                    default:
                                      l = f;
                                  }
                                  return l.push(c), 0;
                                });
                                var l = [f, s];
                                return a.__(0, [[i, o[0], l]]);
                              })
                            );
                          return [
                            [
                              e[0],
                              e[1],
                              e[2],
                              u[0],
                              e[4],
                              e[5],
                              e[6],
                              e[7],
                              e[8],
                              e[9]
                            ],
                            u[1]
                          ];
                        }
                      ),
                      function(r) {
                        var n = t,
                          e = r,
                          u = g(
                            m(n, "Modes")[1].map(function(r) {
                              var t = r[1],
                                e = r[0];
                              if (2 !== t.length)
                                return p(e, "incorrect format");
                              var u = t[0];
                              if ("number" == typeof u || u.tag)
                                return p(e, "incorrect format");
                              var i = u[0],
                                o = t[1];
                              if ("number" == typeof o || 1 !== o.tag)
                                return p(e, "incorrect format");
                              var c = d(n, "ModeOperations", 0, a.__(0, [i])),
                                f = [];
                              return (
                                c.forEach(function(r) {
                                  var t = r[1];
                                  if (3 !== t.length) return 0;
                                  var n = t[1];
                                  if ("number" == typeof n || n.tag) return 0;
                                  var e = t[2];
                                  if ("number" == typeof e || e.tag) return 0;
                                  var a = [n[0], e[0]];
                                  return f.push(a), 0;
                                }),
                                a.__(0, [[i, o[0], f]])
                              );
                            })
                          );
                        return [
                          [
                            e[0],
                            e[1],
                            e[2],
                            e[3],
                            u[0],
                            e[5],
                            e[6],
                            e[7],
                            e[8],
                            e[9]
                          ],
                          u[1]
                        ];
                      }
                    ),
                    function(r) {
                      var n = r,
                        e = g(
                          m(t, "Resources")[1].map(function(r) {
                            var t = r[1],
                              n = r[0];
                            if (4 !== t.length) return p(n, "incorrect format");
                            var e = t[0];
                            if ("number" == typeof e || e.tag)
                              return p(n, "incorrect format");
                            var u = t[1];
                            if ("number" == typeof u || 1 !== u.tag)
                              return p(n, "incorrect format");
                            var i = t[2];
                            if ("number" == typeof i || i.tag)
                              return p(n, "incorrect format");
                            var o = t[3];
                            return "number" == typeof o || o.tag
                              ? p(n, "incorrect format")
                              : a.__(0, [[e[0], u[0], i[0], o[0]]]);
                          })
                        );
                      return [
                        [
                          n[0],
                          n[1],
                          n[2],
                          n[3],
                          n[4],
                          e[0],
                          n[6],
                          n[7],
                          n[8],
                          n[9]
                        ],
                        e[1]
                      ];
                    }
                  ),
                  function(r) {
                    var n = t,
                      e = r,
                      u = g(
                        m(n, "Machines")[1].map(function(r) {
                          var t = r[1],
                            e = r[0];
                          if (2 !== t.length) return p(e, "incorrect format");
                          var u = t[0];
                          if ("number" == typeof u || u.tag)
                            return p(e, "incorrect format");
                          var i = u[0],
                            o = t[1];
                          if ("number" == typeof o || 1 !== o.tag)
                            return p(e, "incorrect format");
                          var c = d(n, "MachineModes", 0, a.__(0, [i])),
                            f = d(n, "MachineResources", 0, a.__(0, [i])),
                            s = [],
                            l = [];
                          return (
                            f.forEach(function(r) {
                              var t = r[1];
                              if (3 !== t.length) return 0;
                              var n = t[1];
                              if ("number" == typeof n || n.tag) return 0;
                              var e = t[2];
                              if ("number" == typeof e || e.tag) return 0;
                              var a = [n[0], e[0]];
                              return l.push(a), 0;
                            }),
                            c.forEach(function(r) {
                              var t = r[1];
                              if (3 !== t.length) return 0;
                              var e = t[1];
                              if ("number" == typeof e || e.tag) return 0;
                              var u = t[2];
                              if ("number" == typeof u || u.tag) return 0;
                              var o = d(
                                  n,
                                  "MachineModeResources",
                                  0,
                                  a.__(0, [i])
                                ),
                                c = [];
                              o.forEach(function(r) {
                                var t = r[1];
                                if (4 !== t.length) return 0;
                                var n = t[2];
                                if ("number" == typeof n || n.tag) return 0;
                                var e = t[3];
                                if ("number" == typeof e || e.tag) return 0;
                                var a = [n[0], e[0]];
                                return c.push(a), 0;
                              });
                              var f = [e[0], u[0], c];
                              return s.push(f), 0;
                            }),
                            a.__(0, [[i, o[0], s, l]])
                          );
                        })
                      );
                    return [
                      [
                        e[0],
                        e[1],
                        e[2],
                        e[3],
                        e[4],
                        e[5],
                        u[0],
                        e[7],
                        e[8],
                        e[9]
                      ],
                      u[1]
                    ];
                  }
                ),
                function(r) {
                  var n = t,
                    e = r,
                    u = g(
                      m(n, "Buffers")[1].map(function(r) {
                        var t = r[1],
                          e = r[0];
                        if (2 !== t.length) return p(e, "incorrect format");
                        var u = t[0];
                        if ("number" == typeof u || u.tag)
                          return p(e, "incorrect format");
                        var i = u[0],
                          o = t[1];
                        if ("number" == typeof o || 1 !== o.tag)
                          return p(e, "incorrect format");
                        var c = d(n, "BufferProducts", 0, a.__(0, [i])),
                          f = [];
                        return (
                          c.forEach(function(r) {
                            var t = r[1];
                            if (3 !== t.length) return 0;
                            var n = t[1];
                            if ("number" == typeof n || n.tag) return 0;
                            var e = t[2];
                            if ("number" == typeof e || e.tag) return 0;
                            var a = [n[0], e[0]];
                            return f.push(a), 0;
                          }),
                          a.__(0, [[i, o[0], f, void 0]])
                        );
                      })
                    );
                  return [
                    [
                      e[0],
                      e[1],
                      e[2],
                      e[3],
                      e[4],
                      e[5],
                      e[6],
                      u[0],
                      e[8],
                      e[9]
                    ],
                    u[1]
                  ];
                }
              ),
              function(r) {
                var n = r,
                  e = g(
                    m(t, "Workstations")[1].map(function(r) {
                      var t = r[1],
                        n = r[0];
                      if (8 !== t.length) return p(n, "incorrect format");
                      var e = t[0];
                      if ("number" == typeof e || e.tag)
                        return p(n, "incorrect format");
                      var u = e[0],
                        i = t[1];
                      if ("number" == typeof i || 1 !== i.tag)
                        return p(n, "incorrect format");
                      var o = i[0],
                        c = t[2];
                      if ("number" == typeof c || c.tag)
                        return p(n, "incorrect format");
                      var f = c[0],
                        s = t[3];
                      if ("number" == typeof s || s.tag)
                        return p(n, "incorrect format");
                      var l = s[0],
                        v = t[4],
                        _ = t[5],
                        m = t[6];
                      if ("number" == typeof m || 1 !== m.tag)
                        return p(n, "incorrect format");
                      var d = t[7];
                      switch (m[0]) {
                        case "idle":
                          return "number" == typeof v || v.tag
                            ? p(n, "incorrect idle state")
                            : a.__(0, [[u, o, [], f, l, v[0], 1, void 0]]);
                        case "not ready":
                          return a.__(0, [[u, o, [], f, l, void 0, 0, void 0]]);
                        case "operation":
                          if (
                            "number" == typeof _ ||
                            _.tag ||
                            "number" == typeof d ||
                            d.tag ||
                            "number" == typeof v ||
                            v.tag
                          )
                            return p(n, "incorrect operation");
                          var g = d[0];
                          return a.__(0, [
                            [
                              u,
                              o,
                              [],
                              f,
                              l,
                              v[0],
                              a.__(1, [g, g, _[0]]),
                              void 0
                            ]
                          ]);
                        case "setup":
                          if (
                            "number" == typeof _ ||
                            _.tag ||
                            "number" == typeof d ||
                            d.tag
                          )
                            return p(n, "incorrect setup");
                          var h = d[0];
                          return a.__(0, [
                            [
                              u,
                              o,
                              [],
                              f,
                              l,
                              void 0,
                              a.__(0, [h, h, _[0]]),
                              void 0
                            ]
                          ]);
                        default:
                          return p(n, "incorrect format");
                      }
                    })
                  );
                return [
                  [n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7], e[0], n[9]],
                  e[1]
                ];
              }
            ),
            function(r) {
              var n = t,
                e = r,
                u = g(
                  m(n, "Connections")[1].map(function(r) {
                    return o.$pipe$eq$great(
                      o.$pipe$great(
                        o.$pipe$great(r[1], function(r) {
                          if (3 === r.length) {
                            var t = r[0];
                            if ("number" != typeof t && !t.tag) {
                              var n = r[1];
                              if ("number" != typeof n && !n.tag) {
                                var e = r[2];
                                return "number" == typeof e || e.tag
                                  ? void 0
                                  : [t[0], n[0], e[0]];
                              }
                            }
                          }
                        }),
                        function(r) {
                          var t = r[0],
                            e = d(n, "ConnectionConstraints", 0, a.__(0, [t])),
                            u = [];
                          e.forEach(function(r) {
                            var t = r[1];
                            if (2 !== t.length) return 0;
                            var n = t[1];
                            return "number" == typeof n || n.tag
                              ? 0
                              : (u.push(n[0]), 0);
                          });
                          var i = 0 !== u.length ? u : void 0;
                          return a.__(0, [[t, r[1], r[2], i]]);
                        }
                      ),
                      p(r[0], "incorrect format")
                    );
                  })
                );
              return [
                [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], u[0]],
                u[1]
              ];
            }
          ),
          function(r) {
            var n = r,
              e = (function(r, t) {
                try {
                  return m(r, t);
                } catch (r) {
                  var n = l.internalToOCamlException(r);
                  if (n[0] === v.invalid_argument) return;
                  throw n;
                }
              })(t, "Visualization");
            if (void 0 !== e) {
              var a = e[1],
                u = function(r, t) {
                  return a.reduce(function(n, e) {
                    var a = e[1];
                    if (void 0 !== n) return n;
                    if (4 === a.length) {
                      var u = a[0];
                      if ("number" != typeof u && 1 === u.tag) {
                        var i = a[1];
                        if ("number" != typeof i && !i.tag) {
                          var o = a[2];
                          if ("number" != typeof o && !o.tag) {
                            var c = a[3];
                            if ("number" != typeof c && !c.tag)
                              return r === u[0] && t === i[0]
                                ? [o[0], c[0]]
                                : void 0;
                          }
                        }
                      }
                    }
                    throw [v.match_failure, ["EduAParser.re", 521, 24]];
                  }, void 0);
                },
                i = n[7],
                o = n[8];
              if (void 0 !== i) {
                if (void 0 !== o) {
                  var c = i.map(function(r) {
                      var t = u("buf", r[0]);
                      if (void 0 !== t) {
                        var n = t;
                        return [r[0], r[1], r[2], [n[0], n[1]]];
                      }
                      return r;
                    }),
                    f = o.map(function(r) {
                      var t = u("wst", r[0]);
                      if (void 0 !== t) {
                        var n = t;
                        return [
                          r[0],
                          r[1],
                          r[2],
                          r[3],
                          r[4],
                          r[5],
                          r[6],
                          [n[0], n[1]]
                        ];
                      }
                      return r;
                    });
                  return [
                    [n[0], n[1], n[2], n[3], n[4], n[5], n[6], c, f, n[9]],
                    []
                  ];
                }
                return [n, []];
              }
              return [n, []];
            }
            return [n, []];
          }
        ),
        e = n[1],
        u = n[0];
      if (0 !== e.length) throw [s.ParseException, e];
      var i = u[9],
        c = u[8],
        f = u[7],
        _ = u[6],
        h = u[5],
        y = u[4],
        $ = u[3],
        b = u[2],
        k = u[1],
        q = u[0];
      if (
        void 0 !== q &&
        void 0 !== k &&
        void 0 !== b &&
        void 0 !== $ &&
        void 0 !== y &&
        void 0 !== h &&
        void 0 !== _ &&
        void 0 !== f &&
        void 0 !== c &&
        void 0 !== i
      )
        return [q, k, b, $, y, h, _, f, c, i];
    }),
      (t.parseTables = w);
  },
  function(r, t, n) {
    "use strict";
    var e = n(11),
      a = n(17),
      u = n(12),
      i = n(0);
    function o(r) {
      return r >= 65
        ? r >= 97
          ? r >= 123
            ? -1
            : (r - 87) | 0
          : r >= 91
          ? -1
          : (r - 55) | 0
        : r > 57 || r < 48
        ? -1
        : (r - 48) | 0;
    }
    function c(r) {
      switch (r) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
        case 3:
          return 2;
      }
    }
    function f(r) {
      var t = 1,
        n = 2,
        e = 0;
      switch (r.charCodeAt(e)) {
        case 43:
          e = (e + 1) | 0;
          break;
        case 44:
          break;
        case 45:
          (t = -1), (e = (e + 1) | 0);
      }
      if ("0" === r[e]) {
        var a = r.charCodeAt((e + 1) | 0);
        if (a >= 89)
          if (a >= 111) {
            if (a < 121)
              switch ((a - 111) | 0) {
                case 0:
                  (n = 0), (e = (e + 2) | 0);
                  break;
                case 6:
                  e = (e + 2) | 0;
                  break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 7:
                case 8:
                  break;
                case 9:
                  (n = 1), (e = (e + 2) | 0);
              }
          } else 98 === a && ((n = 3), (e = (e + 2) | 0));
        else if (66 !== a) {
          if (a >= 79)
            switch ((a - 79) | 0) {
              case 0:
                (n = 0), (e = (e + 2) | 0);
                break;
              case 6:
                e = (e + 2) | 0;
                break;
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 7:
              case 8:
                break;
              case 9:
                (n = 1), (e = (e + 2) | 0);
            }
        } else (n = 3), (e = (e + 2) | 0);
      }
      return [e, t, n];
    }
    function s(r) {
      var t = f(r),
        n = t[0],
        e = c(t[2]),
        a = r.length,
        u = o(n < a ? r.charCodeAt(n) : 0);
      if (u < 0 || u >= e) throw [i.failure, "int_of_string"];
      var s =
          t[1] *
          (function(t, n) {
            for (;;) {
              var u = n,
                c = t;
              if (u === a) return c;
              var f = r.charCodeAt(u);
              if (95 !== f) {
                var s = o(f);
                if (s < 0 || s >= e) throw [i.failure, "int_of_string"];
                var l = e * c + s;
                if (l > 4294967295) throw [i.failure, "int_of_string"];
                (n = (u + 1) | 0), (t = l);
              } else n = (u + 1) | 0;
            }
          })(u, (n + 1) | 0),
        l = 0 | s;
      if (10 === e && s !== l) throw [i.failure, "int_of_string"];
      return l;
    }
    function l(r) {
      return (r >= 65 && r <= 90) ||
        (r >= 192 && r <= 214) ||
        (r >= 216 && r <= 222)
        ? (r + 32) | 0
        : r;
    }
    function v(r) {
      var t = r.length;
      if (t > 31) throw [i.invalid_argument, "format_int: format too long"];
      for (var n = ["+", "-", " ", !1, 2, !1, 0, !1, 1, -1, "f"], a = 0; ; ) {
        var u = a;
        if (u >= t) return n;
        var o = r.charCodeAt(u),
          c = 0;
        if (o >= 69)
          if (o >= 88)
            if (o >= 121) c = 1;
            else
              switch ((o - 88) | 0) {
                case 0:
                  (n[4] = 1), (n[7] = !0), (a = (u + 1) | 0);
                  continue;
                case 13:
                case 14:
                case 15:
                  c = 5;
                  break;
                case 12:
                case 17:
                  c = 4;
                  break;
                case 23:
                  (n[4] = 0), (a = (u + 1) | 0);
                  continue;
                case 29:
                  (n[4] = 2), (a = (u + 1) | 0);
                  continue;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 16:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 24:
                case 25:
                case 26:
                case 27:
                case 28:
                case 30:
                case 31:
                  c = 1;
                  break;
                case 32:
                  (n[4] = 1), (a = (u + 1) | 0);
                  continue;
              }
          else {
            if (!(o >= 72)) {
              (n[5] = !0),
                (n[7] = !0),
                (n[10] = String.fromCharCode(l(o))),
                (a = (u + 1) | 0);
              continue;
            }
            c = 1;
          }
        else
          switch (o) {
            case 35:
              (n[3] = !0), (a = (u + 1) | 0);
              continue;
            case 32:
            case 43:
              c = 2;
              break;
            case 45:
              (n[0] = "-"), (a = (u + 1) | 0);
              continue;
            case 46:
              n[9] = 0;
              for (
                var f = (u + 1) | 0;
                (function(t) {
                  return function() {
                    var n = (r.charCodeAt(t) - 48) | 0;
                    return n >= 0 && n <= 9;
                  };
                })(f)();

              )
                (n[9] = (((e.imul(n[9], 10) + r.charCodeAt(f)) | 0) - 48) | 0),
                  (f = (f + 1) | 0);
              a = f;
              continue;
            case 33:
            case 34:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 44:
            case 47:
              c = 1;
              break;
            case 48:
              (n[2] = "0"), (a = (u + 1) | 0);
              continue;
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              c = 3;
              break;
            default:
              c = 1;
          }
        switch (c) {
          case 1:
            a = (u + 1) | 0;
            continue;
          case 2:
            (n[1] = String.fromCharCode(o)), (a = (u + 1) | 0);
            continue;
          case 3:
            n[6] = 0;
            for (
              var s = u;
              (function(t) {
                return function() {
                  var n = (r.charCodeAt(t) - 48) | 0;
                  return n >= 0 && n <= 9;
                };
              })(s)();

            )
              (n[6] = (((e.imul(n[6], 10) + r.charCodeAt(s)) | 0) - 48) | 0),
                (s = (s + 1) | 0);
            a = s;
            continue;
          case 4:
            (n[5] = !0), (n[4] = 2), (a = (u + 1) | 0);
            continue;
          case 5:
            (n[5] = !0), (n[10] = String.fromCharCode(o)), (a = (u + 1) | 0);
            continue;
        }
      }
    }
    function _(r, t) {
      var n = r[0],
        e = r[1],
        a = r[2],
        u = r[3],
        i = r[4],
        o = r[5],
        c = r[6],
        f = r[7],
        s = r[8],
        l = t.length;
      o && (s < 0 || "-" !== e) && (l = (l + 1) | 0),
        u && (0 === i ? (l = (l + 1) | 0) : 1 === i && (l = (l + 2) | 0));
      var v = "";
      if ("+" === n && " " === a)
        for (var _ = l, m = (c - 1) | 0; _ <= m; ++_) v += a;
      if (
        (o && (s < 0 ? (v += "-") : "-" !== e && (v += e)),
        u && 0 === i && (v += "0"),
        u && 1 === i && (v += "0x"),
        "+" === n && "0" === a)
      )
        for (var d = l, p = (c - 1) | 0; d <= p; ++d) v += a;
      if (((v = f ? v + t.toUpperCase() : v + t), "-" === n))
        for (var g = l, h = (c - 1) | 0; g <= h; ++g) v += " ";
      return v;
    }
    function m(r, t) {
      if ("%d" === r) return String(t);
      var n = v(r),
        e = t,
        a = (e < 0 ? (n[5] ? ((n[8] = -1), -e) : e >>> 0) : e).toString(
          (function(r) {
            switch (r) {
              case 0:
                return 8;
              case 1:
                return 16;
              case 2:
                return 10;
            }
          })(n[4])
        );
      if (n[9] >= 0) {
        n[2] = " ";
        var i = (n[9] - a.length) | 0;
        i > 0 && (a = u.repeat(i, "0") + a);
      }
      return _(n, a);
    }
    var d = m,
      p = m,
      g = s,
      h = s;
    (t.caml_format_float = function(r, t) {
      var n = v(r),
        e = n[9] < 0 ? 6 : n[9],
        a = t < 0 ? ((n[8] = -1), -t) : t,
        u = "";
      if (isNaN(a)) (u = "nan"), (n[2] = " ");
      else if (isFinite(a)) {
        switch (n[10]) {
          case "e":
            var i = (u = a.toExponential(e)).length;
            "e" === u[(i - 3) | 0] &&
              (u = u.slice(0, (i - 1) | 0) + "0" + u.slice((i - 1) | 0));
            break;
          case "f":
            u = a.toFixed(e);
            break;
          case "g":
            var o = 0 !== e ? e : 1,
              c = (u = a.toExponential((o - 1) | 0)).indexOf("e"),
              f = 0 | Number(u.slice((c + 1) | 0));
            if (f < -4 || a >= 1e21 || a.toFixed().length > o) {
              for (var s = (c - 1) | 0; "0" === u[s]; ) s = (s - 1) | 0;
              "." === u[s] && (s = (s - 1) | 0);
              var l = (u = u.slice(0, (s + 1) | 0) + u.slice(c)).length;
              "e" === u[(l - 3) | 0] &&
                (u = u.slice(0, (l - 1) | 0) + "0" + u.slice((l - 1) | 0));
            } else {
              var m = o;
              if (f < 0) (m = (m - ((f + 1) | 0)) | 0), (u = a.toFixed(m));
              else
                for (; (u = a.toFixed(m)).length > ((o + 1) | 0); )
                  m = (m - 1) | 0;
              if (0 !== m) {
                for (var d = (u.length - 1) | 0; "0" === u[d]; )
                  d = (d - 1) | 0;
                "." === u[d] && (d = (d - 1) | 0),
                  (u = u.slice(0, (d + 1) | 0));
              }
            }
        }
      } else (u = "inf"), (n[2] = " ");
      return _(n, u);
    }),
      (t.caml_hexstring_of_float = function(r, t, n) {
        if (!isFinite(r))
          return isNaN(r) ? "nan" : r > 0 ? "infinity" : "-infinity";
        var e = 0 == r && 1 / r == -1 / 0 ? 1 : r >= 0 ? 0 : 1;
        e && (r = -r);
        var a = 0;
        if (0 == r);
        else if (r < 1) for (; r < 1 && a > -1022; ) (r *= 2), a--;
        else for (; r >= 2; ) (r /= 2), a++;
        var u = a < 0 ? "" : "+",
          i = "";
        if (e) i = "-";
        else
          switch (n) {
            case 43:
              i = "+";
              break;
            case 32:
              i = " ";
          }
        if (t >= 0 && t < 13) {
          var o = Math.pow(2, 4 * t);
          r = Math.round(r * o) / o;
        }
        var c = r.toString(16);
        if (t >= 0) {
          var f = c.indexOf(".");
          if (f < 0) c += "." + "0".repeat(t);
          else {
            var s = f + 1 + t;
            c.length < s
              ? (c += "0".repeat(s - c.length))
              : (c = c.substr(0, s));
          }
        }
        return i + "0x" + c + "p" + u + a.toString(10);
      }),
      (t.caml_format_int = m),
      (t.caml_nativeint_format = d),
      (t.caml_int32_format = p),
      (t.caml_float_of_string = function(r) {
        return (function(r, t) {
          var n = +r;
          if (r.length > 0 && n == n) return n;
          if (
            ((n = +(r = r.replace(/_/g, ""))),
            (r.length > 0 && n == n) || /^[+-]?nan$/i.test(r))
          )
            return n;
          var e = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(
            r
          );
          if (e) {
            var a = e[3].replace(/0+$/, ""),
              u = parseInt(e[1] + e[2] + a, 16),
              i = (0 | e[4]) - 4 * a.length;
            return (n = u * Math.pow(2, i));
          }
          if (/^\+?inf(inity)?$/i.test(r)) return 1 / 0;
          if (/^-inf(inity)?$/i.test(r)) return -1 / 0;
          throw t;
        })(r, [i.failure, "float_of_string"]);
      }),
      (t.caml_int64_format = function(r, t) {
        var n = v(r),
          e = n[5] && a.lt(t, [0, 0]) ? ((n[8] = -1), a.neg(t)) : t,
          i = "";
        switch (n[4]) {
          case 0:
            var o = [0, 8],
              c = "01234567";
            if (a.lt(e, [0, 0])) {
              var f = a.discard_sign(e),
                s = a.div_mod(f, o),
                l = a.add([268435456, 0], s[0]),
                m = s[1];
              for (
                i = String.fromCharCode(c.charCodeAt(0 | m[1])) + i;
                a.neq(l, [0, 0]);

              ) {
                var d = a.div_mod(l, o);
                (l = d[0]),
                  (m = d[1]),
                  (i = String.fromCharCode(c.charCodeAt(0 | m[1])) + i);
              }
            } else {
              var p = a.div_mod(e, o),
                g = p[0],
                h = p[1];
              for (
                i = String.fromCharCode(c.charCodeAt(0 | h[1])) + i;
                a.neq(g, [0, 0]);

              ) {
                var y = a.div_mod(g, o);
                (g = y[0]),
                  (h = y[1]),
                  (i = String.fromCharCode(c.charCodeAt(0 | h[1])) + i);
              }
            }
            break;
          case 1:
            i = a.to_hex(e) + i;
            break;
          case 2:
            var $ = [0, 10];
            if (a.lt(e, [0, 0])) {
              var b = a.discard_sign(e),
                k = a.div_mod(b, $),
                w = a.div_mod(a.add([0, 8], k[1]), $),
                A = a.add(a.add([214748364, 3435973836], k[0]), w[0]),
                q = w[1];
              for (
                i = String.fromCharCode("0123456789".charCodeAt(0 | q[1])) + i;
                a.neq(A, [0, 0]);

              ) {
                var O = a.div_mod(A, $);
                (A = O[0]),
                  (q = O[1]),
                  (i =
                    String.fromCharCode("0123456789".charCodeAt(0 | q[1])) + i);
              }
            } else {
              var S = a.div_mod(e, $),
                C = S[0],
                x = S[1];
              for (
                i = String.fromCharCode("0123456789".charCodeAt(0 | x[1])) + i;
                a.neq(C, [0, 0]);

              ) {
                var M = a.div_mod(C, $);
                (C = M[0]),
                  (x = M[1]),
                  (i =
                    String.fromCharCode("0123456789".charCodeAt(0 | x[1])) + i);
              }
            }
        }
        if (n[9] >= 0) {
          n[2] = " ";
          var R = (n[9] - i.length) | 0;
          R > 0 && (i = u.repeat(R, "0") + i);
        }
        return _(n, i);
      }),
      (t.caml_int_of_string = s),
      (t.caml_int32_of_string = g),
      (t.caml_int64_of_string = function(r) {
        var t,
          n = f(r),
          e = n[2],
          u = n[0],
          s = a.of_int32(c(e)),
          l = a.of_int32(n[1]);
        switch (e) {
          case 0:
            t = [536870911, 4294967295];
            break;
          case 1:
            t = [268435455, 4294967295];
            break;
          case 2:
            t = [429496729, 2576980377];
            break;
          case 3:
            t = [2147483647, 4294967295];
        }
        var v = r.length,
          _ = u < v ? r.charCodeAt(u) : 0,
          m = a.of_int32(o(_));
        if (a.lt(m, [0, 0]) || a.ge(m, s)) throw [i.failure, "int64_of_string"];
        var d = a.mul(
            l,
            (function(n, e) {
              for (;;) {
                var u = e,
                  c = n;
                if (u === v) return c;
                var f = r.charCodeAt(u);
                if (95 !== f) {
                  var l = a.of_int32(o(f));
                  if (a.lt(l, [0, 0]) || a.ge(l, s) || a.gt(c, t))
                    throw [i.failure, "int64_of_string"];
                  (e = (u + 1) | 0), (n = a.add(a.mul(s, c), l));
                } else e = (u + 1) | 0;
              }
            })(m, (u + 1) | 0)
          ),
          p = a.or_(d, [0, 0]);
        if (a.eq(s, [0, 10]) && a.neq(d, p))
          throw [i.failure, "int64_of_string"];
        return p;
      }),
      (t.caml_nativeint_of_string = h);
  },
  function(r, t, n) {
    "use strict";
    var e = n(11),
      a = n(12),
      u = n(9),
      i = n(0),
      o = [-2147483648, 0],
      c = [2147483647, 1],
      f = [0, 1],
      s = [0, 0],
      l = [-1, 4294967295];
    function v(r) {
      return 0 != (2147483648 & r);
    }
    function _(r, t) {
      var n = t[1],
        e = r[1],
        a = (e + n) & 4294967295,
        u = (v(e) && (v(n) || !v(a))) || (v(n) && !v(a)) ? 1 : 0;
      return [(r[0] + t[0] + u) & 4294967295, a >>> 0];
    }
    function m(r) {
      return [-1 ^ r[0], (-1 ^ r[1]) >>> 0];
    }
    function d(r, t) {
      return r[0] === t[0] && r[1] === t[1];
    }
    function p(r) {
      return d(r, o) ? o : _(m(r), f);
    }
    function g(r, t) {
      if (0 === t) return r;
      var n = r[1];
      return t >= 32
        ? [n << ((t - 32) | 0), 0]
        : [(n >>> ((32 - t) | 0)) | (r[0] << t), (n << t) >>> 0];
    }
    function h(r, t) {
      if (0 === t) return r;
      var n = r[0];
      return t < 32
        ? [n >> t, ((n << ((32 - t) | 0)) | (r[1] >>> t)) >>> 0]
        : [n >= 0 ? 0 : -1, (n >> ((t - 32) | 0)) >>> 0];
    }
    function y(r) {
      return 0 === r[0] && 0 === r[1];
    }
    function $(r, t) {
      for (;;) {
        var n,
          e = t,
          a = r,
          u = a[0],
          i = 0,
          c = 0;
        if (0 === u && 0 === a[1]) return s;
        if (4 === 4) {
          if (0 === e[0] && 0 === e[1]) return s;
          c = 3;
        }
        if (
          (3 === c && (-2147483648 !== u || 0 !== a[1] ? (i = 2) : (n = e[1])),
          2 === i)
        ) {
          var f = e[0],
            l = a[1],
            v = 0;
          if ((-2147483648 !== f || 0 !== e[1] ? (v = 3) : (n = l), 3 === v)) {
            var _ = e[1];
            if (u < 0) {
              if (f < 0) {
                (t = p(e)), (r = p(a));
                continue;
              }
              return p($(p(a), e));
            }
            if (f < 0) return p($(a, p(e)));
            var m = 65535 & u,
              d = l >>> 16,
              g = 65535 & l,
              h = 65535 & f,
              y = _ >>> 16,
              b = 65535 & _,
              k = 0,
              w = 0,
              A = 0,
              q = g * b;
            return (
              (k =
                (w =
                  (w = (A = (q >>> 16) + d * b) >>> 16) +
                  ((A = (65535 & A) + g * y) >>> 16) +
                  m * b) >>> 16),
              (k += (w = (65535 & w) + d * y) >>> 16),
              (k += (w = (65535 & w) + g * h) >>> 16),
              [
                (w &= 65535) |
                  ((k =
                    (k + ((u >>> 16) * b + m * y + d * h + g * (f >>> 16))) &
                    65535) <<
                    16),
                ((65535 & q) | ((65535 & A) << 16)) >>> 0
              ]
            );
          }
        }
        return 0 == (1 & n) ? s : o;
      }
    }
    function b(r, t) {
      var n = t[0],
        e = r[0];
      return e > n || (!(e < n) && r[1] >= t[1]);
    }
    function k(r, t) {
      return r[0] > t[0] || (!(r[0] < t[0]) && r[1] > t[1]);
    }
    function w(r) {
      return 4294967296 * r[0] + r[1];
    }
    function A(r) {
      return isNaN(r) || !isFinite(r)
        ? s
        : r <= -0x8000000000000000
        ? o
        : r + 1 >= 0x8000000000000000
        ? c
        : r < 0
        ? p(A(-r))
        : [(r / 4294967296) | 0, (r % 4294967296 | 0) >>> 0];
    }
    function q(r, t) {
      for (;;) {
        var n = t,
          e = r,
          a = e[0],
          c = 0;
        if (0 === n[0] && 0 === n[1]) throw i.division_by_zero;
        if (2 === 2)
          if (-2147483648 !== a) {
            if (0 === a && 0 === e[1]) return s;
            c = 1;
          } else {
            if (0 === e[1]) {
              if (d(n, f) || d(n, l)) return e;
              if (d(n, o)) return f;
              var v = n[0],
                m = g(q(h(e, 1), n), 1);
              if (0 === m[0] && 0 === m[1]) return v < 0 ? f : p(f);
              var O = _(e, p($(n, m)));
              return _(m, q(O, n));
            }
            c = 1;
          }
        if (1 === c) {
          var S = n[0];
          if (-2147483648 === S && 0 === n[1]) return s;
          if (a < 0) {
            if (S < 0) {
              (t = p(n)), (r = p(e));
              continue;
            }
            return p(q(p(e), n));
          }
          if (S < 0) return p(q(e, p(n)));
          for (var C = s, x = e; b(x, n); ) {
            for (
              var M = u.caml_float_max(1, Math.floor(w(x) / w(n))),
                R = Math.ceil(Math.log(M) / Math.LN2),
                F = R <= 48 ? 1 : Math.pow(2, R - 48),
                E = A(M),
                T = $(E, n);
              T[0] < 0 || k(T, x);

            )
              T = $((E = A((M -= F))), n);
            y(E) && (E = f), (C = _(C, E)), (x = _(x, p(T)));
          }
          return C;
        }
      }
    }
    (t.min_int = o),
      (t.max_int = c),
      (t.one = f),
      (t.zero = s),
      (t.not = m),
      (t.of_int32 = function(r) {
        return [r < 0 ? -1 : 0, r >>> 0];
      }),
      (t.to_int32 = function(r) {
        return 0 | r[1];
      }),
      (t.add = _),
      (t.neg = p),
      (t.sub = function(r, t) {
        return _(r, p(t));
      }),
      (t.lsl_ = g),
      (t.lsr_ = function(r, t) {
        if (0 === t) return r;
        var n = r[0],
          e = (t - 32) | 0;
        return 0 === e
          ? [0, n >>> 0]
          : e > 0
          ? [0, (n >>> e) >>> 0]
          : [n >>> t, ((n << (0 | -e)) | (r[1] >>> t)) >>> 0];
      }),
      (t.asr_ = h),
      (t.is_zero = y),
      (t.mul = $),
      (t.xor = function(r, t) {
        return [r[0] ^ t[0], (r[1] ^ t[1]) >>> 0];
      }),
      (t.or_ = function(r, t) {
        return [r[0] | t[0], (r[1] | t[1]) >>> 0];
      }),
      (t.and_ = function(r, t) {
        return [r[0] & t[0], (r[1] & t[1]) >>> 0];
      }),
      (t.swap = function(r) {
        return [e.caml_int32_bswap(r[1]), e.caml_int32_bswap(r[0]) >>> 0];
      }),
      (t.ge = b),
      (t.eq = d),
      (t.neq = function(r, t) {
        return !d(r, t);
      }),
      (t.lt = function(r, t) {
        return !b(r, t);
      }),
      (t.gt = k),
      (t.le = function(r, t) {
        return !k(r, t);
      }),
      (t.equal_null = function(r, t) {
        return null !== t && d(r, t);
      }),
      (t.equal_undefined = function(r, t) {
        return void 0 !== t && d(r, t);
      }),
      (t.equal_nullable = function(r, t) {
        return null != t && d(r, t);
      }),
      (t.min = function(r, t) {
        return b(r, t) ? t : r;
      }),
      (t.max = function(r, t) {
        return k(r, t) ? r : t;
      }),
      (t.to_float = w),
      (t.of_float = A),
      (t.div = q),
      (t.mod_ = function(r, t) {
        return _(r, p($(q(r, t), t)));
      }),
      (t.compare = function(r, t) {
        var n = u.caml_nativeint_compare(r[0], t[0]);
        return 0 === n ? u.caml_nativeint_compare(r[1], t[1]) : n;
      }),
      (t.float_of_bits = function(r) {
        return new Float64Array(new Int32Array([r[1], r[0]]).buffer)[0];
      }),
      (t.bits_of_float = function(r) {
        var t = new Int32Array(new Float64Array([r]).buffer);
        return [t[1], t[0] >>> 0];
      }),
      (t.get64 = function(r, t) {
        return [
          (r.charCodeAt((t + 4) | 0) << 32) |
            (r.charCodeAt((t + 5) | 0) << 40) |
            (r.charCodeAt((t + 6) | 0) << 48) |
            (r.charCodeAt((t + 7) | 0) << 56),
          (r.charCodeAt(t) |
            (r.charCodeAt((t + 1) | 0) << 8) |
            (r.charCodeAt((t + 2) | 0) << 16) |
            (r.charCodeAt((t + 3) | 0) << 24)) >>>
            0
        ];
      }),
      (t.div_mod = function(r, t) {
        var n = q(r, t);
        return [n, _(r, p($(n, t)))];
      }),
      (t.to_hex = function(r) {
        var t = r[1],
          n = r[0],
          e = function(r) {
            return (r >>> 0).toString(16);
          };
        if (0 === n && 0 === t) return "0";
        if (0 !== t) {
          if (0 !== n) {
            var u = e(t),
              i = (8 - u.length) | 0;
            return i <= 0 ? e(n) + u : e(n) + (a.repeat(i, "0") + u);
          }
          return e(t);
        }
        return e(n) + "00000000";
      }),
      (t.discard_sign = function(r) {
        return [2147483647 & r[0], r[1]];
      });
  },
  function(r, t, n) {
    "use strict";
    var e = n(7).create("EduAParserTypes.ParseException");
    t.ParseException = e;
  }
]);
