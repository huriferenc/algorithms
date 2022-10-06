const LinkedList = require('./LinkedList');

// 342 + 465 = 807
// (2 -> 4 -> 3) + (5 -> 6 -> 4) = (7 -> 0 -> 8)
function addingTwoList(list1, list2) {
  const maxLength = Math.max(list1.length, list2.length);

  let result = [];
  let remainder = 0;
  for (let i = 0; i < maxLength; i++) {
    const val1 = list1.getByIndex(i)?.value || 0;
    const val2 = list2.getByIndex(i)?.value || 0;

    const sum = val1 + val2;

    const value = sum % 10;

    result.push(value + remainder);

    remainder = Math.floor(sum / 10);
  }

  return LinkedList.fromArray(result);
}

module.exports = addingTwoList;
