//const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];
const arr = [9, 2, 1, 8, 4, 23, 19, 7, 6, 3];

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIdx - 1);

    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

function pivot(arr, start = 0, end = arr.length + 1) {
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

quickSort(arr);
console.log(arr);
