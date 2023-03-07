const sort = require('./bubbleSort');

function stressTest(n = 100000000, order = 'asc') {
  const arr = new Array(n);

  if (order === 'desc') {
    arr[0] = 0;
    for (let i = 1; i < n; i++) {
      arr[i] = n - i;
    }
  } else {
    arr[n - 1] = 0;
    for (let i = 0; i < n - 1; i++) {
      arr[i] = i;
    }
  }

  // Start
  // const time = Date.now();

  // Running
  sort(arr);

  // End
  // console.log(Date.now() - time + 'msec');
}

describe('bubbleSort stress test:', () => {
  describe('10 elemets:', () => {
    test('all elements are in descending order:', () => {
      stressTest(10, 'desc');
    });
    test("it's already sorted:", () => {
      stressTest(10);
    });
  });
  describe('100 elemets:', () => {
    test('all elements are in descending order:', () => {
      stressTest(100, 'desc');
    });
    test("it's already sorted:", () => {
      stressTest(100);
    });
  });
  describe('1000 elemets:', () => {
    test('all elements are in descending order:', () => {
      stressTest(1000, 'desc');
    });
    test("it's already sorted:", () => {
      stressTest(1000);
    });
  });
  describe('10000 elemets:', () => {
    test('all elements are in descending order:', () => {
      stressTest(10000, 'desc');
    });
    test("it's already sorted:", () => {
      stressTest(10000);
    });
  });
  describe('100000 elemets:', () => {
    test('all elements are in descending order:', () => {
      stressTest(100000, 'desc');
    });
    test("it's already sorted:", () => {
      stressTest(100000);
    });
  });
});
