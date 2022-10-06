const LinkedList = require('./LinkedList');
const addingTwoList = require('./addingTwoList');

const list = LinkedList.fromValues(2, 4, 3);
// const list = new LinkedList();
// list.insert(3);
// list.insert(2);
// list.insert(1);
list.print();

const list2 = LinkedList.fromValues(5, 6, 4);
// const list2 = new LinkedList();
// list2.insert(2);
// list2.insert(8);
// list2.insert(5);
list2.print();

const sumList = addingTwoList(list, list2);
sumList.print();

console.log(LinkedList.equal(list, list2));

list.clear();
console.log(list);
list.print();
