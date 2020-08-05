# next-toggle-to
> Toggle to some value for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-toggle-to
```

## usage
```js
import '@feizheng/next-toggle-to';

const items = [
  { value: 'deposit', label: '保证金帐户', price: '2000' },
  { value: 'extra', label: '使用余额', price: '1000' },
  { value: 'de1', label: '使用余额xxx', price: '1000' },
  { value: 'de2', label: '使用余额yyy', price: '1000' }
];
const target = { value: 'de1', label: '使用余额xxx', price: '1000' };
const res = nx.toggleTo(items, target, false, 'value');

/*
[
  { value: 'deposit', label: '保证金帐户', price: '2000' },
  { value: 'extra', label: '使用余额', price: '1000' },
  { value: 'de2', label: '使用余额yyy', price: '1000' }
]
*/
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-toggle-to/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-toggle-to
[version-url]: https://npmjs.org/package/@feizheng/next-toggle-to

[license-image]: https://img.shields.io/npm/l/@feizheng/next-toggle-to
[license-url]: https://github.com/afeiship/next-toggle-to/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-toggle-to
[size-url]: https://github.com/afeiship/next-toggle-to/blob/master/dist/next-toggle-to.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-toggle-to
[download-url]: https://www.npmjs.com/package/@feizheng/next-toggle-to
