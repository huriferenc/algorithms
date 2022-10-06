const sort = require('./bubbleSort');

function isEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

describe('bubbleSort', () => {
  describe('return the original object when:', () => {
    test("if it's not a valid array", () => {
      const list = null;

      const sortedList = sort(list);

      expect(sortedList).toBe(null);
    });
    test("if it's an empty array", () => {
      const list = [];

      const sortedList = sort(list);

      expect(sortedList.length).toBe(0);
    });
    test('if the length of array is not greater than 1', () => {
      const expectedList = [1];

      const sortedList = sort(expectedList);

      expect(isEqual(sortedList, expectedList)).toBe(true);
    });
  });
  describe('#Sorting:', () => {
    test('some elements are not in the right position in the original array', () => {
      const list = [2, 4, 5, 3, 8, 9, 7, 1];
      const expectedList = [1, 2, 3, 4, 5, 7, 8, 9];

      const sortedList = sort(list);

      expect(isEqual(sortedList, expectedList)).toBe(true);
    });
    test('all elements are in wrong position in the original array', () => {
      const list = [9, 8, 7, 6, 5, 4, 3, 2, 1];
      const expectedList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const sortedList = sort(list);

      expect(isEqual(sortedList, expectedList)).toBe(true);
    });
  });
});
