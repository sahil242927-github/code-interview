// Constant space meaning not using an extra array
// n(1)
let arr = [1, 2, 2, 3, 3, 4, 4, 5];
const arrLength = arr.length;

const removeDuplicatFromArray = arr => {
  let j = 0;
  for (let i = 0; i < arrLength - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  arr[j] = arr[arrLength - 1];

  arr.splice(j + 1, arr[j]);
  return arr;
};

console.log(removeDuplicatFromArray(arr));
