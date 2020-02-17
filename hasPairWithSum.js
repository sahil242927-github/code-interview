// find the sum of 2 elements in the array which is equal to given value.

// Solution 1 :: => Heavy in terms of time complexity
const arr = [2, 4, 5, 3, 7, 9];
const sum = 16;

const hasPairWithSum1 = (arr, sum) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j + 1] === sum) {
        return [arr[i], arr[j + 1]];
      }
    }
  }
};

// Solution 2 :: => faster in terms of time complexity
const hasPairWithSum2 = (arr, sum) => {
  const pair = { elem1: sum - arr[0] };
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    console.log(pair["elem1"], arr[i]);
    if (pair["elem1"] + arr[i] === sum) {
      const pair = { elem1: sum - arr[0] };
      return [pair["elem1"], arr[i]];
    }
    pair["elem1"] = sum - arr[i];
  }
  return false;
};

console.log(hasPairWithSum2(arr, sum));
