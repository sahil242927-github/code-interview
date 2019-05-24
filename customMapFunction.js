const myMapFunc = (arr, operation) => {
  const cusArr = [];
  for (let i = 0; i < arr.length; i++) {
    cusArr.push(operation(arr[i]));
  }
  return cusArr;
};
const fruits = ["apple", "banana", "mango"];
const newFruits = myMapFunc(fruits, fruit => {
  return "new" + fruit;
});

console.log(newFruits);
