/* 
Given an array and chunk size, divide the array into many subarrays 
where each subarray is of length size

Example: 

chunk([1,2,3,4], 2) --> [[1,2], [3,4]]
chunk([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
chunk([1,2,3,4,5,6,7,8], 3) --> [[1,2,3], [4,5,6], [7,8]]
*/

/* MY SOLUTION */
/* function chunk(arr, size) {
  let subArray = [],
    subArrayLength = subArray.length;
  let arrLength = arr.length;

  let chunkArray = [];
  arr.forEach((elem, i) => {
    if (subArray.length < size) {
      subArray.push(elem);
    } 
    if (arrLength - 1 === i && subArray.length > 0) {
      chunkArray.push([...subArray]);
      subArray = [];
    }
  });
  return chunkArray;
} */

/* SOLUTION #1 */

/* function chunk(arr, size) {
  const chunked = [];

  for (let elem of arr) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([elem]);
    } else {
      last.push(elem);
    }
  }
  return chunked;
} */

/* SOLUTION #2 */

function chunk(arr, size) {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
