const search = require('./binarySearch');

function stressTest(n = 100000000, order = 'asc') {
  const arr = new Array(n);

  if (order === 'desc') {
    arr[0] = 0;
    for (let i = 1; i < n; i++) {
      arr[i] = n - i;
    }
  } else {
    arr[n - 1] = 0;
    for (let i = 0; i < n - 2; i++) {
      arr[i] = i;
    }
  }

  // Start
  // const time = Date.now();

  // Running
  search(arr, 1);

  // End
  // console.log(Date.now() - time + 'msec');
}

describe('binarySearch stress test:', () => {
  test('10 elements:', () => {
    stressTest(10);
  });
  test('100 elements:', () => {
    stressTest(100);
  });
  test('1000 elements:', () => {
    stressTest(1000);
  });
  test('10000 elements:', () => {
    stressTest(10000);
  });
  test('100000 elements:', () => {
    stressTest(100000);
  });
});
