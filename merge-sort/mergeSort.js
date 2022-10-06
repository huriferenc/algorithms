/**
 *  n*log(n)
 */
function mergeSort(A = []) {
  if (!Array.isArray(A) || A.length === 0 || A.length === 1) {
    return A;
  }

  const leftArray = mergeSort(A.slice(0, Math.ceil(A.length / 2)));
  const rightArray = mergeSort(A.slice(Math.ceil(A.length / 2)));

  return merge(leftArray, rightArray);
}

function merge(leftArray = [], rightArray = []) {
  const sortedArr = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArr.push(leftArray.shift());
    } else {
      sortedArr.push(rightArray.shift());
    }
  }

  return [...sortedArr, ...leftArray, ...rightArray];
}

module.exports = mergeSort;
