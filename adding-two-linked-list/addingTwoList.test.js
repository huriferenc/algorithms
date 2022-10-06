const LinkedList = require('./LinkedList');
const addingTwoList = require('./addingTwoList');

describe('addingTwoList', () => {
  describe('with two lists of the same length', () => {
    test('return an empty list', () => {
      const list = new LinkedList();
      const list2 = new LinkedList();

      const sumList = addingTwoList(list, list2);

      expect(sumList.length).toBe(0);
    });

    // (2 -> 4 -> 3) + (5 -> 6 -> 4) = (7 -> 0 -> 8)
    test('return a non-empty list (342 + 465 = 807)', () => {
      const expectedList = LinkedList.fromValues(7, 0, 8);

      const list = LinkedList.fromValues(2, 4, 3);
      const list2 = LinkedList.fromValues(5, 6, 4);

      const sumList = addingTwoList(list, list2);

      expect(sumList.length).toEqual(expectedList.length);
      expect(LinkedList.equal(sumList, expectedList)).toEqual(true);
    });
  });
  describe('with two lists of different lengths', () => {
    test('return the first list', () => {
      const expectedList = LinkedList.fromValues(1, 2, 3);

      const list = LinkedList.fromValues(1, 2, 3);
      const list2 = new LinkedList();

      const sumList = addingTwoList(list, list2);

      expect(LinkedList.equal(sumList, expectedList)).toEqual(true);
    });
    test('return the second list', () => {
      const expectedList = LinkedList.fromValues(5, 8, 2);

      const list = new LinkedList();
      const list2 = LinkedList.fromValues(5, 8, 2);

      const sumList = addingTwoList(list, list2);

      expect(LinkedList.equal(sumList, expectedList)).toEqual(true);
    });

    test('return a non-empty list (285 + 21 = 306)', () => {
      const expectedList = LinkedList.fromValues(6, 0, 3);

      const list2 = LinkedList.fromValues(5, 8, 2);
      const list = LinkedList.fromValues(1, 2);

      const sumList = addingTwoList(list, list2);

      expect(LinkedList.equal(sumList, expectedList)).toEqual(true);
    });
    test('return a non-empty list (21 + 285 = 306)', () => {
      const expectedList = LinkedList.fromValues(6, 0, 3);

      const list2 = LinkedList.fromValues(5, 8, 2);
      const list = LinkedList.fromValues(1, 2);

      const sumList = addingTwoList(list, list2);

      expect(LinkedList.equal(sumList, expectedList)).toEqual(true);
    });
  });
});
