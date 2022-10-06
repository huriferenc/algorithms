const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
  test('it adds the element to the beginning of the list', () => {
    const list = new LinkedList();
    list.insertAtHead(10);
    const oldHead = list.head;
    list.insertAtHead(20);

    expect(list.head.value).toBe(20);
    expect(list.head.next).toBe(oldHead);
    expect(list.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.getByIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const list = LinkedList.fromValues(10, 20);

      expect(list.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('it returns the element at that index', () => {
      const list = LinkedList.fromValues(10, 20, 30, 40);

      expect(list.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not insert anything', () => {
      const list = LinkedList.fromValues(10, 20);
      list.insertAtIndex(-1, 30);

      expect(list.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not insert anything', () => {
      const list = LinkedList.fromValues(10, 20);
      list.insertAtIndex(5, 30);

      expect(list.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('insert at the head', () => {
      const list = LinkedList.fromValues(10, 20);
      list.insertAtIndex(0, 30);

      expect(list.head.value).toBe(30);
      expect(list.head.next.value).toBe(10);
      expect(list.length).toBe(3);
    });
  });

  describe('with index in the middle', () => {
    test('insert at the given index', () => {
      const list = LinkedList.fromValues(10, 20, 30, 40);
      list.insertAtIndex(2, 50);

      const node = list.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(list.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  test('removes the head', () => {
    const list = LinkedList.fromValues(10, 20, 30);
    list.removeHead();

    expect(list.head.value).toBe(20);
    expect(list.length).toBe(2);
  });
});

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not remove anything', () => {
      const list = LinkedList.fromValues(10, 20);
      list.removeAtIndex(-1);

      expect(list.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not remove anything', () => {
      const list = LinkedList.fromValues(10, 20);
      list.removeAtIndex(5);

      expect(list.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('remove the head', () => {
      const list = LinkedList.fromValues(10, 20, 30);
      list.removeAtIndex(0);

      expect(list.head.value).toBe(20);
      expect(list.head.next.value).toBe(30);
      expect(list.length).toBe(2);
    });
  });

  describe('with index in the middle', () => {
    test('remove at the given index', () => {
      const list = LinkedList.fromValues(10, 20, 30, 40);
      list.removeAtIndex(2);

      const node = list.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(list.length).toBe(3);
    });
  });
});
