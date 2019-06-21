!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react')))
    : 'function' == typeof define && define.amd
    ? define(['react'], t)
    : 'object' == typeof exports
    ? (exports.Formsy = t(require('react')))
    : (e.Formsy = t(e.React));
})('undefined' != typeof self ? self : this, function(e) {
  return (function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var i = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function(e, r, n) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.n = function(e) {
        var r =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return t.d(r, 'a', r), r;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ''),
      t((t.s = 3))
    );
  })([
    function(e, t, r) {
      e.exports = r(5)();
    },
    function(t, r) {
      t.exports = e;
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e;
            };
      t.default = {
        arraysDiffer: function(e, t) {
          var r = this,
            n = !1;
          return (
            e.length !== t.length
              ? (n = !0)
              : e.forEach(function(e, i) {
                  r.isSame(e, t[i]) || (n = !0);
                }, this),
            n
          );
        },
        objectsDiffer: function(e, t) {
          var r = this,
            n = !1;
          return (
            Object.keys(e).length !== Object.keys(t).length
              ? (n = !0)
              : Object.keys(e).forEach(function(i) {
                  r.isSame(e[i], t[i]) || (n = !0);
                }, this),
            n
          );
        },
        isSame: function(e, t) {
          return (
            (void 0 === e ? 'undefined' : n(e)) ===
              (void 0 === t ? 'undefined' : n(t)) &&
            (Array.isArray(e) && Array.isArray(t)
              ? !this.arraysDiffer(e, t)
              : 'function' == typeof e
              ? e.toString() === t.toString()
              : null !== e &&
                null !== t &&
                e instanceof Date &&
                t instanceof Date
              ? e.toString() === t.toString()
              : 'object' === (void 0 === e ? 'undefined' : n(e)) &&
                null !== e &&
                null !== t
              ? !this.objectsDiffer(e, t)
              : e === t)
          );
        },
        find: function(e, t) {
          for (var r = 0, n = e.length; r < n; r += 1) {
            var i = e[r];
            if (t(i)) return i;
          }
          return null;
        },
        runRules: function(e, t, r, n) {
          var i = { errors: [], failed: [], success: [] };
          return (
            Object.keys(r).length &&
              Object.keys(r).forEach(function(o) {
                if (n[o] && 'function' == typeof r[o])
                  throw new Error(
                    'Formsy does not allow you to override default validations: ' +
                      o,
                  );
                if (!n[o] && 'function' != typeof r[o])
                  throw new Error(
                    'Formsy does not have the validation rule: ' + o,
                  );
                if ('function' == typeof r[o]) {
                  var a = r[o](t, e);
                  return void ('string' == typeof a
                    ? (i.errors.push(a), i.failed.push(o))
                    : a || i.failed.push(o));
                }
                if ('function' != typeof r[o]) {
                  var s = n[o](t, e, r[o]);
                  return void ('string' == typeof s
                    ? (i.errors.push(s), i.failed.push(o))
                    : s
                    ? i.success.push(o)
                    : i.failed.push(o));
                }
                i.success.push(o);
              }),
            i
          );
        },
      };
    },
    function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        var r = {};
        for (var n in e)
          t.indexOf(n) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function a(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function s(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.withFormsy = t.validationRules = t.propTypes = t.addValidationRule = void 0);
      var u =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        l =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        f = r(4),
        c = n(f),
        d = r(0),
        p = n(d),
        m = r(1),
        h = n(m),
        v = r(2),
        y = n(v),
        b = r(7),
        g = n(b),
        V = r(8),
        E = n(V),
        S = (function(e) {
          function t(e) {
            o(this, t);
            var r = a(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e),
            );
            return (
              (r.getChildContext = function() {
                return {
                  formsy: {
                    attachToForm: r.attachToForm,
                    detachFromForm: r.detachFromForm,
                    validate: r.validate,
                    isFormDisabled: r.isFormDisabled,
                    isValidValue: function(e, t) {
                      return r.runValidation(e, t).isValid;
                    },
                  },
                };
              }),
              (r.componentDidMount = function() {
                r.validateForm();
              }),
              (r.componentWillUpdate = function() {
                r.prevInputNames = r.inputs.map(function(e) {
                  return e.props.name;
                });
              }),
              (r.componentDidUpdate = function() {
                r.props.validationErrors &&
                  'object' === l(r.props.validationErrors) &&
                  Object.keys(r.props.validationErrors).length > 0 &&
                  r.setInputValidationErrors(r.props.validationErrors);
                var e = r.inputs.map(function(e) {
                  return e.props.name;
                });
                y.default.arraysDiffer(r.prevInputNames, e) && r.validateForm();
              }),
              (r.getCurrentValues = function() {
                return r.inputs.reduce(function(e, t) {
                  var r =
                    'object' === l(t.state.value) ? Object.assign({}, e) : e;
                  return (r[t.props.name] = t.state.value), r;
                }, {});
              }),
              (r.getModel = function() {
                var e = r.getCurrentValues();
                return r.mapModel(e);
              }),
              (r.getPristineValues = function() {
                return r.inputs.reduce(function(e, t) {
                  var r = t.props.name,
                    n =
                      'object' === l(t.state.value) ? Object.assign({}, e) : e;
                  return (n[r] = t.props.value), n;
                }, {});
              }),
              (r.setFormPristine = function(e) {
                r.setState({ formSubmitted: !e }),
                  r.inputs.forEach(function(t) {
                    t.setState({ formSubmitted: !e, isPristine: e });
                  });
              }),
              (r.setInputValidationErrors = function(e) {
                r.inputs.forEach(function(t) {
                  var r = t.props.name,
                    n = [
                      {
                        isValid: !(r in e),
                        validationError:
                          'string' == typeof e[r] ? [e[r]] : e[r],
                      },
                    ];
                  t.setState.apply(t, n);
                }),
                  !r.props.preventExternalInvalidation &&
                    r.state.isValid &&
                    r.setFormValidState(!1);
              }),
              (r.setFormValidState = function(e) {
                r.setState({ isValid: e }),
                  e ? r.props.onValid() : r.props.onInvalid();
              }),
              (r.isFormDisabled = function() {
                return r.props.disabled;
              }),
              (r.mapModel = function(e) {
                return r.props.mapping
                  ? r.props.mapping(e)
                  : c.default.toObj(
                      Object.keys(e).reduce(function(t, r) {
                        for (var n = r.split('.'), i = t; n.length; ) {
                          var o = n.shift();
                          (i[o] = n.length ? i[o] || {} : e[r]), (i = i[o]);
                        }
                        return t;
                      }, {}),
                    );
              }),
              (r.reset = function(e) {
                r.setFormPristine(!0), r.resetModel(e);
              }),
              (r.resetInternal = function(e) {
                e.preventDefault(),
                  r.reset(),
                  r.props.onReset && r.props.onReset();
              }),
              (r.resetModel = function(e) {
                r.inputs.forEach(function(t) {
                  var r = t.props.name;
                  e && Object.prototype.hasOwnProperty.call(e, r)
                    ? t.setValue(e[r])
                    : t.resetValue();
                }),
                  r.validateForm();
              }),
              (r.runValidation = function(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : e.state.value,
                  n = r.getCurrentValues(),
                  i = e.props,
                  o = i.validationError,
                  a = i.validationErrors,
                  s = y.default.runRules(t, n, e.validations, g.default),
                  u = y.default.runRules(
                    t,
                    n,
                    e.requiredValidations,
                    g.default,
                  ),
                  l =
                    !!Object.keys(e.requiredValidations).length &&
                    !!u.success.length,
                  f = !(
                    s.failed.length ||
                    (r.props.validationErrors &&
                      r.props.validationErrors[e.props.name])
                  );
                return {
                  isRequired: l,
                  isValid: !l && f,
                  error: (function() {
                    if (f && !l) return r.emptyArray;
                    if (s.errors.length) return s.errors;
                    if (
                      r.props.validationErrors &&
                      r.props.validationErrors[e.props.name]
                    )
                      return 'string' ==
                        typeof r.props.validationErrors[e.props.name]
                        ? [r.props.validationErrors[e.props.name]]
                        : r.props.validationErrors[e.props.name];
                    if (l) {
                      var t = a[u.success[0]] || o;
                      return t ? [t] : null;
                    }
                    return s.failed.length
                      ? s.failed
                          .map(function(e) {
                            return a[e] ? a[e] : o;
                          })
                          .filter(function(e, t, r) {
                            return r.indexOf(e) === t;
                          })
                      : void 0;
                  })(),
                };
              }),
              (r.attachToForm = function(e) {
                -1 === r.inputs.indexOf(e) && r.inputs.push(e), r.validate(e);
              }),
              (r.detachFromForm = function(e) {
                var t = r.inputs.indexOf(e);
                -1 !== t &&
                  (r.inputs = r.inputs
                    .slice(0, t)
                    .concat(r.inputs.slice(t + 1))),
                  r.validateForm();
              }),
              (r.isChanged = function() {
                return !y.default.isSame(
                  r.getPristineValues(),
                  r.getCurrentValues(),
                );
              }),
              (r.submit = function(e) {
                e && e.preventDefault && e.preventDefault(),
                  r.setFormPristine(!1);
                var t = r.getModel();
                r.props.onSubmit(t, r.resetModel, r.updateInputsWithError),
                  r.state.isValid
                    ? r.props.onValidSubmit(
                        t,
                        r.resetModel,
                        r.updateInputsWithError,
                      )
                    : r.props.onInvalidSubmit(
                        t,
                        r.resetModel,
                        r.updateInputsWithError,
                      );
              }),
              (r.updateInputsWithError = function(e, t) {
                Object.keys(e).forEach(function(t) {
                  var n = y.default.find(r.inputs, function(e) {
                    return e.props.name === t;
                  });
                  if (!n)
                    throw new Error(
                      'You are trying to update an input that does not exist. Verify errors object with input names. ' +
                        JSON.stringify(e),
                    );
                  var i = [
                    {
                      isValid: r.props.preventExternalInvalidation,
                      externalError: 'string' == typeof e[t] ? [e[t]] : e[t],
                    },
                  ];
                  n.setState.apply(n, i);
                }),
                  t && r.state.isValid && r.setFormValidState(!1);
              }),
              (r.validate = function(e) {
                r.state.canChange &&
                  r.props.onChange(r.getModel(), r.isChanged());
                var t = r.runValidation(e);
                e.setState(
                  {
                    isValid: t.isValid,
                    isRequired: t.isRequired,
                    validationError: t.error,
                    externalError: null,
                  },
                  r.validateForm,
                );
              }),
              (r.validateForm = function() {
                var e = function() {
                  var e = r.inputs.every(function(e) {
                    return e.state.isValid;
                  });
                  r.setFormValidState(e), r.setState({ canChange: !0 });
                };
                r.inputs.forEach(function(t, n) {
                  var i = r.runValidation(t);
                  i.isValid && t.state.externalError && (i.isValid = !1),
                    t.setState(
                      {
                        isValid: i.isValid,
                        isRequired: i.isRequired,
                        validationError: i.error,
                        externalError:
                          !i.isValid && t.state.externalError
                            ? t.state.externalError
                            : null,
                      },
                      n === r.inputs.length - 1 ? e : null,
                    );
                }),
                  r.inputs.length || r.setState({ canChange: !0 });
              }),
              (r.render = function() {
                var e = r.props,
                  t =
                    (e.getErrorMessage,
                    e.getErrorMessages,
                    e.getValue,
                    e.hasValue,
                    e.isFormDisabled,
                    e.isFormSubmitted,
                    e.isPristine,
                    e.isRequired,
                    e.isValid,
                    e.isValidValue,
                    e.mapping,
                    e.onChange,
                    e.onInvalidSubmit,
                    e.onInvalid,
                    e.onReset,
                    e.onSubmit,
                    e.onValid,
                    e.onValidSubmit,
                    e.preventExternalInvalidation,
                    e.resetValue,
                    e.setValidations,
                    e.setValue,
                    e.showError,
                    e.showRequired,
                    e.validationErrors,
                    i(e, [
                      'getErrorMessage',
                      'getErrorMessages',
                      'getValue',
                      'hasValue',
                      'isFormDisabled',
                      'isFormSubmitted',
                      'isPristine',
                      'isRequired',
                      'isValid',
                      'isValidValue',
                      'mapping',
                      'onChange',
                      'onInvalidSubmit',
                      'onInvalid',
                      'onReset',
                      'onSubmit',
                      'onValid',
                      'onValidSubmit',
                      'preventExternalInvalidation',
                      'resetValue',
                      'setValidations',
                      'setValue',
                      'showError',
                      'showRequired',
                      'validationErrors',
                    ]));
                return h.default.createElement(
                  'form',
                  u({ onReset: r.resetInternal, onSubmit: r.submit }, t, {
                    disabled: !1,
                  }),
                  r.props.children,
                );
              }),
              (r.state = { isValid: !0, isSubmitting: !1, canChange: !1 }),
              (r.inputs = []),
              (r.emptyArray = []),
              r
            );
          }
          return s(t, e), t;
        })(h.default.Component);
      (S.displayName = 'Formsy'),
        (S.defaultProps = {
          children: null,
          disabled: !1,
          getErrorMessage: function() {},
          getErrorMessages: function() {},
          getValue: function() {},
          hasValue: function() {},
          isFormDisabled: function() {},
          isFormSubmitted: function() {},
          isPristine: function() {},
          isRequired: function() {},
          isValid: function() {},
          isValidValue: function() {},
          mapping: null,
          onChange: function() {},
          onError: function() {},
          onInvalid: function() {},
          onInvalidSubmit: function() {},
          onReset: function() {},
          onSubmit: function() {},
          onValid: function() {},
          onValidSubmit: function() {},
          preventExternalInvalidation: !1,
          resetValue: function() {},
          setValidations: function() {},
          setValue: function() {},
          showError: function() {},
          showRequired: function() {},
          validationErrors: null,
        }),
        (S.propTypes = {
          children: p.default.node,
          disabled: p.default.bool,
          getErrorMessage: p.default.func,
          getErrorMessages: p.default.func,
          getValue: p.default.func,
          hasValue: p.default.func,
          isFormDisabled: p.default.func,
          isFormSubmitted: p.default.func,
          isPristine: p.default.func,
          isRequired: p.default.func,
          isValid: p.default.func,
          isValidValue: p.default.func,
          mapping: p.default.func,
          onChange: p.default.func,
          onInvalid: p.default.func,
          onInvalidSubmit: p.default.func,
          onReset: p.default.func,
          onSubmit: p.default.func,
          onValid: p.default.func,
          onValidSubmit: p.default.func,
          preventExternalInvalidation: p.default.bool,
          resetValue: p.default.func,
          setValidations: p.default.func,
          setValue: p.default.func,
          showError: p.default.func,
          showRequired: p.default.func,
          validationErrors: p.default.object,
        }),
        (S.childContextTypes = { formsy: p.default.object });
      var O = function(e, t) {
        g.default[e] = t;
      };
      (t.addValidationRule = O),
        (t.propTypes = V.propTypes),
        (t.validationRules = g.default),
        (t.withFormsy = E.default),
        (t.default = S);
    },
    function(e, t) {
      function r(e) {
        return Object.keys(e).reduce(function(t, r) {
          var n = r.match(/[^\[]*/i),
            i = r.match(/\[.*?\]/g) || [];
          i = [n[0]].concat(i).map(function(e) {
            return e.replace(/\[|\]/g, '');
          });
          for (var o = t; i.length; ) {
            var a = i.shift();
            a in o
              ? (o = o[a])
              : ((o[a] = i.length ? (isNaN(i[0]) ? {} : []) : e[r]),
                (o = o[a]));
          }
          return t;
        }, {});
      }
      function n(e) {
        function t(e, r, n) {
          return Array.isArray(n) ||
            '[object Object]' === Object.prototype.toString.call(n)
            ? (Object.keys(n).forEach(function(i) {
                t(e, r + '[' + i + ']', n[i]);
              }),
              e)
            : ((e[r] = n), e);
        }
        return Object.keys(e).reduce(function(r, n) {
          return t(r, n, e[n]);
        }, {});
      }
      e.exports = { fromObj: n, toObj: r };
    },
    function(e, t, r) {
      'use strict';
      function n() {}
      function i() {}
      var o = r(6);
      (i.resetWarningCache = n),
        (e.exports = function() {
          function e(e, t, r, n, i, a) {
            if (a !== o) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
              throw ((s.name = 'Invariant Violation'), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: n,
          };
          return (r.PropTypes = r), r;
        });
    },
    function(e, t, r) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = function(e) {
          return null !== e && void 0 !== e;
        },
        i = function(e) {
          return '' === e;
        },
        o = {
          isDefaultRequiredValue: function(e, t) {
            return void 0 === t || null === t || '' === t;
          },
          isExisty: function(e, t) {
            return n(t);
          },
          matchRegexp: function(e, t, r) {
            return !n(t) || i(t) || r.test(t);
          },
          isUndefined: function(e, t) {
            return void 0 === t;
          },
          isEmptyString: function(e, t) {
            return i(t);
          },
          isEmail: function(e, t) {
            return o.matchRegexp(
              e,
              t,
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
            );
          },
          isUrl: function(e, t) {
            return o.matchRegexp(
              e,
              t,
              /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/i,
            );
          },
          isTrue: function(e, t) {
            return !0 === t;
          },
          isFalse: function(e, t) {
            return !1 === t;
          },
          isNumeric: function(e, t) {
            return (
              'number' == typeof t ||
              o.matchRegexp(e, t, /^[-+]?(?:\d*[.])?\d+$/)
            );
          },
          isAlpha: function(e, t) {
            return o.matchRegexp(e, t, /^[A-Z]+$/i);
          },
          isAlphanumeric: function(e, t) {
            return o.matchRegexp(e, t, /^[0-9A-Z]+$/i);
          },
          isInt: function(e, t) {
            return o.matchRegexp(e, t, /^(?:[-+]?(?:0|[1-9]\d*))$/);
          },
          isFloat: function(e, t) {
            return o.matchRegexp(
              e,
              t,
              /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][+-]?(?:\d+))?$/,
            );
          },
          isWords: function(e, t) {
            return o.matchRegexp(e, t, /^[A-Z\s]+$/i);
          },
          isSpecialWords: function(e, t) {
            return o.matchRegexp(e, t, /^[A-Z\s\u00C0-\u017F]+$/i);
          },
          isLength: function(e, t, r) {
            return !n(t) || i(t) || t.length === r;
          },
          equals: function(e, t, r) {
            return !n(t) || i(t) || t === r;
          },
          equalsField: function(e, t, r) {
            return t === e[r];
          },
          maxLength: function(e, t, r) {
            return !n(t) || t.length <= r;
          },
          minLength: function(e, t, r) {
            return !n(t) || i(t) || t.length >= r;
          },
        };
      t.default = o;
    },
    function(e, t, r) {
      'use strict';
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      function a(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.propTypes = void 0);
      var s =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        u = (function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        l = r(0),
        f = n(l),
        c = r(1),
        d = n(c),
        p = r(2),
        m = n(p),
        h = function(e) {
          return 'string' == typeof e
            ? e.split(/,(?![^{[]*[}\]])/g).reduce(function(e, t) {
                var r = t.split(':'),
                  n = r.shift();
                if (
                  ((r = r.map(function(e) {
                    try {
                      return JSON.parse(e);
                    } catch (t) {
                      return e;
                    }
                  })),
                  r.length > 1)
                )
                  throw new Error(
                    'Formsy does not support multiple args on string validations. Use object format of validations instead.',
                  );
                var i = Object.assign({}, e);
                return (i[n] = !r.length || r[0]), i;
              }, {})
            : e || {};
        },
        v = {
          innerRef: f.default.func,
          name: f.default.string.isRequired,
          required: f.default.oneOfType([
            f.default.bool,
            f.default.object,
            f.default.string,
          ]),
          validations: f.default.oneOfType([
            f.default.object,
            f.default.string,
          ]),
          value: f.default.any,
        };
      (t.propTypes = v),
        (t.default = function(e) {
          var t = (function(t) {
            function r(e) {
              i(this, r);
              var t = o(
                this,
                (r.__proto__ || Object.getPrototypeOf(r)).call(this, e),
              );
              return (
                (t.getErrorMessage = function() {
                  var e = t.getErrorMessages();
                  return e.length ? e[0] : null;
                }),
                (t.getErrorMessages = function() {
                  return !t.isValid() || t.showRequired()
                    ? t.state.externalError || t.state.validationError || []
                    : [];
                }),
                (t.getValue = function() {
                  return t.state.value;
                }),
                (t.setValidations = function(e, r) {
                  (t.validations = h(e) || {}),
                    (t.requiredValidations =
                      !0 === r ? { isDefaultRequiredValue: !0 } : h(r));
                }),
                (t.setValue = function(e) {
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  !arguments[1]
                    ? t.setState({ value: e })
                    : t.setState({ value: e, isPristine: !1 }, function() {
                        t.context.formsy.validate(t);
                      });
                }),
                (t.hasValue = function() {
                  return '' !== t.state.value;
                }),
                (t.isFormDisabled = function() {
                  return t.context.formsy.isFormDisabled();
                }),
                (t.isFormSubmitted = function() {
                  return t.state.formSubmitted;
                }),
                (t.isPristine = function() {
                  return t.state.isPristine;
                }),
                (t.isRequired = function() {
                  return !!t.props.required;
                }),
                (t.isValid = function() {
                  return t.state.isValid;
                }),
                (t.isValidValue = function(e) {
                  return t.context.formsy.isValidValue.call(null, t, e);
                }),
                (t.resetValue = function() {
                  t.setState(
                    { value: t.state.pristineValue, isPristine: !0 },
                    function() {
                      t.context.formsy.validate(t);
                    },
                  );
                }),
                (t.showError = function() {
                  return !t.showRequired() && !t.isValid();
                }),
                (t.showRequired = function() {
                  return t.state.isRequired;
                }),
                (t.state = {
                  value: e.value,
                  isRequired: !1,
                  isValid: !0,
                  isPristine: !0,
                  pristineValue: e.value,
                  validationError: [],
                  externalError: null,
                  formSubmitted: !1,
                }),
                t
              );
            }
            return (
              a(r, t),
              u(r, [
                {
                  key: 'componentWillMount',
                  value: function() {
                    var e = this;
                    if (!this.props.name)
                      throw new Error(
                        'Form Input requires a name property when used',
                      );
                    !(function() {
                      e.setValidations(e.props.validations, e.props.required),
                        e.context.formsy.attachToForm(e);
                    })();
                  },
                },
                {
                  key: 'componentWillReceiveProps',
                  value: function(e) {
                    this.setValidations(e.validations, e.required);
                  },
                },
                {
                  key: 'shouldComponentUpdate',
                  value: function(e, t) {
                    var r = this,
                      n = Object.keys(this.props).some(function(t) {
                        return r.props[t] !== e[t];
                      }),
                      i = Object.keys(this.state).some(function(e) {
                        return r.state[e] !== t[e];
                      });
                    return n || i;
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function(e) {
                    m.default.isSame(this.props.value, e.value) ||
                      this.setValue(this.props.value),
                      (m.default.isSame(
                        this.props.validations,
                        e.validations,
                      ) &&
                        m.default.isSame(this.props.required, e.required)) ||
                        this.context.formsy.validate(this);
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function() {
                    this.context.formsy.detachFromForm(this);
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = this.props.innerRef,
                      r = s({}, this.props, {
                        errorMessage: this.getErrorMessage(),
                        errorMessages: this.getErrorMessages(),
                        hasValue: this.hasValue(),
                        isFormDisabled: this.isFormDisabled(),
                        isFormSubmitted: this.isFormSubmitted(),
                        isPristine: this.isPristine(),
                        isRequired: this.isRequired(),
                        isValid: this.isValid(),
                        isValidValue: this.isValidValue,
                        resetValue: this.resetValue,
                        setValidations: this.setValidations,
                        setValue: this.setValue,
                        showError: this.showError(),
                        showRequired: this.showRequired(),
                        value: this.getValue(),
                      });
                    return t && (r.ref = t), d.default.createElement(e, r);
                  },
                },
              ]),
              r
            );
          })(d.default.Component);
          return (
            (t.displayName =
              'Formsy(' +
              (function(e) {
                return (
                  e.displayName ||
                  e.name ||
                  ('string' == typeof e ? e : 'Component')
                );
              })(e) +
              ')'),
            (t.contextTypes = { formsy: f.default.object }),
            (t.defaultProps = {
              innerRef: null,
              required: !1,
              validationError: '',
              validationErrors: {},
              validations: null,
              value: e.defaultValue,
            }),
            (t.propTypes = v),
            t
          );
        });
    },
  ]);
});
//# sourceMappingURL=formsy-react.js.map
