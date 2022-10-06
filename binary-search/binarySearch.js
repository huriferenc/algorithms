/**
 * logN
 */
function binarySearch(arr = [], target = NaN, startIndex = 0, endIndex = NaN) {
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
