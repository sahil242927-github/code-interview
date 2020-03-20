//const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
const arr = [9, 2, 1, 8, 4, 23, 19, 7, 6, 3];

function getPivot(arr, start = 0, end = arr.length + 1) {
  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

getPivot(arr);
console.log(arr);
