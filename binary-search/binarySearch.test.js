const search = require('./binarySearch');

describe('binarySearch', () => {
  describe('Validity:', () => {
    describe('return -1 when:', () => {
      test('array is invalid', () => {
        const arr = null;
        const target = 1;

        const findIndex = search(arr, target);

        expect(findIndex).toBe(-1);
      });
      test('array is empty', () => {
        const arr = [];
        const target = 1;

        const findIndex = search(arr, target);

        expect(findIndex).toBe(-1);
      });
      test('target value is invalid', () => {
        const arr = [1];
        const target = NaN;

        const findIndex = search(arr, target);

        expect(findIndex).toBe(-1);
      });
    });
  });
  describe('Infinite recursion:', () => {
    test('return -1 on searching the value of 0 in array [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = 0;
      const expected = -1;

      const findIndex = search(arr, target);

      expect(findIndex).toBe(expected);
    });
    test('return -1 on searching the value of 10 in array [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = 10;
      const expected = -1;

      const findIndex = search(arr, target);

      expect(findIndex).toBe(expected);
    });
  });
  describe('Searching:', () => {
    test('return index of 4 on searching value of 5 in array [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = 5;
      const expected = 4;

      const findIndex = search(arr, target);

      expect(findIndex).toBe(expected);
    });
    test('return index of 0 on searching value of 1 in array [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const target = 1;
      const expected = 0;

      const findIndex = search(arr, target);

      expect(findIndex).toBe(expected);
    });
  });
});
