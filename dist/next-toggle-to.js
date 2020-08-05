/*!
 * name: @feizheng/next-toggle-to
 * description: Toggle to some value for next.
 * homepage: https://github.com/afeiship/next-toggle-to
 * version: 1.0.1
 * date: 2020-08-05T01:26:45.147Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var UNDEFINED = 'undefined';

  nx.toggleTo = function (inArray, inItem, inValue, inPath) {
    var idx = inArray.findIndex(function (item) {
      return typeof inPath === UNDEFINED
        ? inItem === item
        : nx.get(item, inPath) === nx.get(inItem, inPath);
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

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toggleTo;
  }
})();
