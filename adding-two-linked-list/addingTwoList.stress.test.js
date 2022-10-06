const LinkedList = require('./LinkedList');
const addingTwoList = require('./addingTwoList');

function runningTime(n = 100000000) {
  const ints = new Array(n);
  ints[n - 1] = 0;

  for (let i = 0; i < n - 1; i++) {
    ints[i] = i;
  }

  const list = LinkedList.fromArray(ints);
  const list2 = LinkedList.fromArray(ints);

  // Start time
  const time = Date.now();

  // Testing algorithm
  addingTwoList(list, list2);

  // Printing end time
  console.log(Date.now() - time + ' msec');

  // Empty memory
  ints.length = 0;
  list.clear();
  list2.clear();
}

describe('addingTwoList stress test:', () => {
  test('Size: 10', () => {
    runningTime(10);
  });
  test('Size: 100', () => {
    runningTime(100);
  });
  test('Size: 1000', () => {
    runningTime(1000);
  });
  test('Size: 10000', () => {
    runningTime(10000);
  });
  test('Size: 100000', () => {
    runningTime(100000);
  });
});
