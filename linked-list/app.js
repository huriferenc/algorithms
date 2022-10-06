const LinkedList = require('./LinkedList');

const list = new LinkedList.fromValues(10, 20, 30, 40);

list.print();

list.removeAtIndex(2);

list.print();
