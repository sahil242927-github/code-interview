/* 
 write a function call maxSubArraySum which accepts an "array of integers" and a number called "n".
 The function should calculate the maximum sum of "n" consecutive elements in the array.
 Example: 
 maxSubArraySum([1,2,5,2,8,1,5], 2) // 10 
 maxSubArraySum([1,2,5,2,8,1,5], 4) // 17 
*/

function maxSubArraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
