import nx from '@jswork/next';

const defaults = {
  path: null,
  value: null
};

nx.toggleTo = function (inArray, inItem, inOptions) {
  var options = nx.mix(null, defaults, inOptions);
  var idx = inArray.findIndex(function (item) {
    return options.path === null
      ? inItem === item
      : nx.get(item, options.path) === nx.get(inItem, options.path);
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
  module.exports = nx.toggleTo;
}

export default nx.toggleTo;
