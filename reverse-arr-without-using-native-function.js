const arr = [1, 2, 3, 4, 5];

const reverseArr = [];
arr.reduce((reverse, item) => reverseArr.unshift(item), 0);
console.log(reverseArr);
