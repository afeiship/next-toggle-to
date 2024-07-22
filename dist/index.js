/*!
 * name: @jswork/next-toggle-to
 * description: Toggle to some value for next.
 * homepage: https://js.work
 * version: 1.1.2
 * date: 2024-07-22 23:00:46
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
_next['default'].toggleTo = function (inArray, inItem, inOptions) {
  var options = _next['default'].mix(null, defaults, inOptions);
  var idx = inArray.findIndex(function (item) {
    return options.path === null
      ? inItem === item
      : _next['default'].get(item, options.path) === _next['default'].get(inItem, options.path);
  });
  var hasValue = idx === -1;

  // if no options
  if (typeof inOptions === 'undefined') {
    if (hasValue) {
      inArray.push(inItem);
    } else {
      inArray.splice(idx, 1);
    }
    return inArray;
  }
  if (options.value) {
    inArray.push(inItem);
  } else {
    if (!hasValue && options.value === false) {
      inArray.splice(idx, 1);
    }
  }
  return inArray;
};
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = _next['default'].toggleTo;
}
var _default = (exports['default'] = _next['default'].toggleTo);
