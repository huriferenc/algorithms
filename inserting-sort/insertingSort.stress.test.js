const insertingSort = require('./insertingSort');

function stressTest(n = 100000000) {
  const arr = new Array(n);
  arr[0] = 0;

  for (let i = 1; i < n; i++) {
    arr[i] = n - i;
  }

  // Start
  const time = Date.now();

  // Running
  insertingSort(arr);

  // End
  console.log(Date.now() - time + 'msec');
}

describe('insertingSort stress test:', () => {
  test('10 elemets:', () => {
    stressTest(10);
  });
  test('100 elemets:', () => {
    stressTest(100);
  });
  test('1000 elemets:', () => {
    stressTest(1000);
  });
  test('10000 elemets:', () => {
    stressTest(10000);
  });
  test('10000 elemets:', () => {
    stressTest(10000);
  });
});
