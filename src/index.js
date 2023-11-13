import nx from '@jswork/next';

nx.toggleTo = function (inArray, inItem, inValue, inPath) {
  var idx = inArray.findIndex(function (item) {
    return typeof inPath === 'undefined'
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.toggleTo;
}

export default nx.toggleTo;
