(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.toggleTo with true should add', function () {
      var a1 = [1, 2, 3];
      nx.toggleTo(a1, 4, true);
      expect(a1).toEqual([1, 2, 3, 4]);
    });

    test('nx.ToggleTo with false value should delete or not changed', () => {
      var a1 = [1, 2, 3];
      var a2 = [1, 2, 3, 5];
      nx.toggleTo(a1, 1, false);
      nx.toggleTo(a2, 5, false);

      expect(a1).toEqual([2, 3]);
      expect(a2).toEqual([1, 2, 3]);
    });

    test('nx.toggleTo value in path', () => {
      var items = [
        { value: 'deposit', label: '保证金帐户', price: '2000' },
        { value: 'extra', label: '使用余额', price: '1000' },
        { value: 'de1', label: '使用余额xxx', price: '1000' },
        { value: 'de2', label: '使用余额yyy', price: '1000' }
      ];
      var target = { value: 'de1', label: '使用余额xxx', price: '1000' };
      var res = nx.toggleTo(items, target, false, 'value');

      expect(res).toEqual([
        { value: 'deposit', label: '保证金帐户', price: '2000' },
        { value: 'extra', label: '使用余额', price: '1000' },
        { value: 'de2', label: '使用余额yyy', price: '1000' }
      ]);
    });
  });
})();
