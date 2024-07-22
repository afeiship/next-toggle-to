/*!
 * name: @jswork/next-toggle-to
 * description: Toggle to some value for next.
 * homepage: https://js.work
 * version: 1.1.4
 * date: 2024-07-22 23:09:57
 * license: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _next = _interopRequireDefault(require('@jswork/next'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var defaults = {
  path: null,
  value: null
};
var getIdx = function getIdx(items, item, path) {
  return typeof path === 'string'
    ? items.findIndex(function (it) {
        return _next['default'].get(it, path) === _next['default'].get(item, path);
      })
    : items.indexOf(item);
};
_next['default'].toggleTo = function (inArray, inItem, inOptions) {
  var options = _next['default'].mix(null, defaults, inOptions);
  var idx = getIdx(inArray, inItem, options.path);
  var has = idx === -1;

  // if no options
  if (typeof inOptions === 'undefined') {
    if (has) {
      inArray.push(inItem);
    } else {
      inArray.splice(idx, 1);
    }
    return inArray;
  }
  if (options.value) {
    inArray.push(inItem);
  } else {
    if (!has && options.value === false) {
      inArray.splice(idx, 1);
    }
  }
  return inArray;
};
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = _next['default'].toggleTo;
}
var _default = (exports['default'] = _next['default'].toggleTo);
