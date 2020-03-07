function countUniqueValues(arr) {
  let first = 0;
  let second = 1;
  let uniqueValues = 0;

  for (let val of arr) {
    if (arr[first] !== arr[second]) {
      uniqueValues++;
    }
    first++;
    second++;
  }
  return uniqueValues;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
