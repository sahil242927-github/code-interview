function countUniqueValues(arr) {
  const uniqueVal = {};

  for (let val of arr) {
    uniqueVal[val] = val;
  }
  return Object.values(uniqueVal).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 2, 3, 12, 12]));
