/* The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth */

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatArray(arr) {
  let cloneArr = [...arr];
  let cloneArrLength = cloneArr.length;
  const flatenArray = [];
  let i = 0;

  for (let i = 0; i <= cloneArrLength; i++) {
    if (Array.isArray(cloneArr[i])) {
      cloneArr = cloneArr[i];
      i = 0;
      cloneArrLength = cloneArr.length;
    } else {
      flatenArray.push(cloneArr[i]);
    }
  }
  return flatenArray;
}

console.log(flatArray(arr4));
