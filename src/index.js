import nx from '@jswork/next';

const defaults = { path: null, value: null };
const getIdx = (items, item, path) => {
  return typeof path === 'string'
    ? items.findIndex((it) => nx.get(it, path) === nx.get(item, path))
    : items.indexOf(item);
};

nx.toggleTo = function (inArray, inItem, inOptions) {
  const options = nx.mix(null, defaults, inOptions);
  const idx = getIdx(inArray, inItem, options.path);
  const has = idx === -1;

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
  module.exports = nx.toggleTo;
}

export default nx.toggleTo;
