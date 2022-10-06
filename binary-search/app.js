const binarySearch = require('./binarySearch');

const orderedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(orderedArr);

const value = 1;
const findIndex = binarySearch(orderedArr, value);
console.log(findIndex);
