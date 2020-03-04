/* 
write a function which accepts 2 arrays. The function should return true if 
every value in the array has its corresponding value squared in the second 
array. The frequency of values must be same

Note: The below solution is O(n^2), because "indexOf" iterates the entire array
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
