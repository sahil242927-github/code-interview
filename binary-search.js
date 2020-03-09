/* 
 Given a sorted array of interger, write a function that accepts a value and returns the index
 where the value passed to the function is located. if the value if not found return -1
 banarySearch([1,2,3,4,5,6,7,8], 3) // 4
*/

/* We created 3 pointers for binary search
  start
  middle
  end
*/
function banarySearch(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(banarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
