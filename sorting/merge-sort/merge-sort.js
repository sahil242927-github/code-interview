const arr = [2, 14, 99, 100, 40, 43, 20];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  // get the mid point
  let mid = Math.floor(arr.length / 2);

  // spilitting the array into halves till end
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // merging back the array
  return merge(left, right);
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const mergedArr = [];
  while (i < arr1.length && i < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j]);
      j++;
    } else {
      mergedArr.push(arr1[i]);
      i++;
    }
  }
  // if arrays have different length then merge the rest of the elements of biggest array
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}
console.log(mergeSort(arr));
