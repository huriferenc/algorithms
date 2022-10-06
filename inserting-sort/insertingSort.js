/**
 *  n^2
 */
function insertingSort(A) {
  if (!Array.isArray(A) || A.length === 0 || A.length === 1) {
    return A;
  }

  for (let i = 1; i < A.length; i++) {
    const elem = A[i];

    let j = i - 1;

    while (j >= 0 && A[j] > elem) {
      A[j + 1] = A[j];
      j--;
    }

    A[j + 1] = elem;
  }
}

module.exports = insertingSort;
