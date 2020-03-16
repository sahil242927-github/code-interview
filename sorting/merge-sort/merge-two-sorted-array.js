const arr1 = [1, 10, 50];
const arr2 = [2, 14, 99, 100];

function mergeTwoSortedArray(arr1, arr2) {
  let smallArray = arr1.length < arr2.length ? arr1.length : arr2.length;
  let i = 0;
  let j = 0;
  const mergedArr = [];
  while (smallArray >= 0) {
    console.log(arr1[i], arr2[j], i);
    if (arr1[i] > arr2[j]) {
      if (arr2[j]) mergedArr.push(arr2[j]);
      j++;
    } else {
      if (arr1[i]) mergedArr.push(arr1[i]);
      i++;
      smallArray--;
    }
  }
  // if arrays have different length then merge the rest of the elements of biggest array
  smallArray === arr2.length
    ? mergedArr.push(...arr1.splice(smallArray - 1))
    : mergedArr.push(...arr2.splice(smallArray - 1));

  return mergedArr;
}

console.log(mergeTwoSortedArray(arr1, arr2));
