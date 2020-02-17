let array1 = ["a", "b", "c", "d"];
let array2 = ["z", "y", "d"];

/*
 Solution 1:: => Faster in terms of "time complexity" as we did not use nested loop,
 but is heavy in terms of space complexity as we have declared object inside the function */
const containCommonItem1 = (arr1, arr2) => {
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    let item = arr1[i];
    if (!map[item]) {
      map[item] = true;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let item = arr2[i];
    if (map[item]) {
      return true;
    }
  }
  return false;
};

/*
 Solution 2:: => Slower in terms of "time complexity" as we used nested loop,
 but is light in terms of space complexity as we haven't declared any object/array inside the function */

const containCommonItem2 = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

// using ES6 functions
const commonItem = array1.some(val => array2.includes(val));
//console.log(commonItem);

console.log(containCommonItem2(array1, array2));
