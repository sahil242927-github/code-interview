const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100];

function mergeTwoSortedArray(arr1, arr2) {
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

console.log(mergeTwoSortedArray(arr1, arr2));
