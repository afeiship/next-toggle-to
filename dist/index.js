/*!
 * name: @jswork/next-toggle-to
 * description: Toggle to some value for next.
 * homepage: https://js.work
 * version: 1.0.1
 * date: 2023-11-13 21:57:22
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
_next['default'].toggleTo = function (inArray, inItem, inValue, inPath) {
  var idx = inArray.findIndex(function (item) {
    return typeof inPath === 'undefined'
      ? inItem === item
      : _next['default'].get(item, inPath) === _next['default'].get(inItem, inPath);
  });
  if (inValue) {
    inArray.push(inItem);
  } else {
    if (idx !== -1 && !inValue) {
      inArray.splice(idx, 1);
    }
  }
  return inArray;
};
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = _next['default'].toggleTo;
}
var _default = (exports['default'] = _next['default'].toggleTo);
