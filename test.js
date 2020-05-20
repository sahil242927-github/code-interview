function search(arr, num) {
  if (arr.length === 0) return null;
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    console.log(`min : ${min} , max: ${max}, middle: ${middle}`);

    if (arr[middle] < num) {
      min = middle + 1;
    } else if (arr[middle] > num) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 6));
