const arr = [10, 13, 5, 3, 1];
const arr2 = [10, 13, 5, 3, 1];
const strArr = ["steel", "colt", "data structure", "algorithms"];

// ascending sort
function sortAsc(num1, num2) {
  return num1 - num2; //
}
// descending sort
function sortDesc(num1, num2) {
  return num2 - num1;
}

// sort ascending shortest to longest string
function sortDesc(num1, num2) {
  return num2.length - num1.length;
}

// sort ascending shortest to longest string
function sortShortToLongString(str1, str2) {
  return str1.length - str2.length;
}

arr.sort(sortAsc);
arr2.sort(sortDesc);
strArr.sort(sortShortToLongString);

console.log(arr);
console.log(arr2);
console.log(strArr);
