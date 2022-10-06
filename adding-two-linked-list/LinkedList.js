class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // insert at head
  insert(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.length++;
  }

  insertAtIndex(index, value) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.insert(value);
      return;
    }

    const prev = this.getByIndex(index - 1);

    const newNode = new LinkedListNode(value, prev.next);

    prev.next = newNode;

    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  removeHead() {
    if (this.length === 0) {
      return;
    }

    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.removeHead();
      return;
    }

    const prev = this.getByIndex(index - 1);

    prev.next = prev.next.next;

    this.length--;
  }

  print() {
    let msg = '';
    let current = this.head;
    while (!!current) {
      msg += `[${current.value}| ] -> `;
      current = current.next;
    }

    console.log(msg + 'null');
  }

  clear() {
    if (this.length === 0) {
      return;
    }

    while (!!this.head) {
      this.removeHead();
    }
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// For tests
LinkedList.fromValues = function (...values) {
  const list = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    list.insert(values[i]);
  }

  return list;
};

// For tests
LinkedList.fromArray = function (values) {
  const list = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    list.insert(values[i]);
  }

  return list;
};

// For tests
LinkedList.equal = function (list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }

  for (let i = 0; i < list1.length; i++) {
    const val1 = list1.getByIndex(i).value || 0;
    const val2 = list2.getByIndex(i).value || 0;
    if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = LinkedList;
