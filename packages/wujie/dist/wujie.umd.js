!(function (e, o) {
  'object' == typeof exports && 'undefined' != typeof module
    ? o(exports)
    : 'function' == typeof define && define.amd
      ? define(['exports'], o)
      : o(((e = 'undefined' != typeof globalThis ? globalThis : e || self).wujie = {}))
})(this, function (e) {
  'use strict'
  'function' == typeof SuppressedError && SuppressedError
  var o = window.__POWERED_BY_WUJIE__,
    n = ''
  o && document.body.classList.add('is_wujie')
  var i = window.$wujie.props
  function u(e) {
    for (var i, u = [], t = 1; t < arguments.length; t++) u[t - 1] = arguments[t]
    o &&
      n &&
      (i = window.$wujie.bus).$emit.apply(
        i,
        (function (e, o, n) {
          if (n || 2 === arguments.length)
            for (var i, u = 0, t = o.length; u < t; u++) (!i && u in o) || (i || (i = Array.prototype.slice.call(o, 0, u)), (i[u] = o[u]))
          return e.concat(i || Array.prototype.slice.call(o))
        })([e, n], u, !1)
      )
  }
  ;(e.isInWujie = o),
    (e.useWujie = function (e, o, i) {
      n = e
      var t = o.push
      ;(o.rowPush = t),
        window.$wujie.bus.$on('routeChange', function (e, i) {
          e === n && o.rowPush(i)
        }),
        ((i ? i.prototype : o).push = function (e, o, n) {
          if (!o && !n)
            return new Promise(function (o, n) {
              u('push', e, o, n)
            })
          u('push', e, o, n)
        })
    }),
    (e.wujieEmit = u),
    (e.wujieOn = function (e, o) {
      window.$wujie.bus.$on(e, function (e) {
        for (var i = [], u = 1; u < arguments.length; u++) i[u - 1] = arguments[u]
        e === n && o.apply(void 0, i)
      })
    }),
    (e.wujieProps = i)
})
