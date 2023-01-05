/**
 * logN
 */
function binarySearch(arr = [], target = NaN) {
  if (!Array.isArray(arr) || arr.length === 0 || !Number.isSafeInteger(target)) {
    return -1;
  }

  let minIndex = 0;
  let maxIndex = arr.length - 1;
  while (minIndex <= maxIndex) {
    const guessIndex = Math.floor((minIndex + maxIndex) / 2);

    if (arr[guessIndex] === target) {
      return guessIndex;
    } else if (arr[guessIndex] < target) {
      minIndex = guessIndex + 1;
    } else {
      maxIndex = guessIndex - 1;
    }
  }

  return -1;
}

function binarySearchRecursive(arr = [], target = NaN, startIndex = 0, endIndex = NaN) {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    !Number.isSafeInteger(target) ||
    startIndex >= arr.length ||
    endIndex < 0
  ) {
    return -1;
  }

  if (Number.isNaN(endIndex)) {
    endIndex = arr.length - 1;
  }

  const middleIndex = Math.ceil((startIndex + endIndex) / 2);
  const middleElement = arr[middleIndex];

  if (middleElement === target) {
    return middleIndex;
  }

  // Right side
  if (middleElement < target) {
    return binarySearch(arr, target, middleIndex + 1, endIndex);
  }

  // Left side
  if (middleElement > target) {
    return binarySearch(arr, target, startIndex, middleIndex - 1);
  }
}

module.exports = binarySearch;
