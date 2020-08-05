(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var UNDEFINED = 'undefined';

  nx.toggleTo = function (inArray, inItem, inValue, inPath) {
    var value = inValue || false;
    var idx = inArray.findIndex(function (item) {
      return typeof inPath === UNDEFINED
        ? inItem === item
        : nx.get(item, inPath) === nx.get(inItem, inPath);
    });

    if (value) {
      inArray.push(inItem);
    } else {
      if (idx !== -1 && !value) {
        inArray.splice(idx, 1);
      }
    }

    return inArray;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toggleTo;
  }
})();
