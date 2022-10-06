/**
 *  n^2
 */
function bubbleSort(A = []) {
  if (!Array.isArray(A) || A.length === 0 || A.length === 1) {
    return A;
  }

  const sortedList = [...A];

  for (let endIndex = sortedList.length - 1; endIndex >= 1; endIndex--) {
    let isAlreadyOrdered = true;
    for (let i = 0; i <= endIndex - 1; i++) {
      if (sortedList[i] > sortedList[i + 1]) {
        swap(i, i + 1, sortedList);
        isAlreadyOrdered = false;
      }
    }

    if (isAlreadyOrdered) {
      break;
    }
  }

  return sortedList;
}

function swap(index1, index2, arr) {
  const tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

module.exports = bubbleSort;
