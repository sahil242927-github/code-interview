const arr = [1, 2, 3, 4];
function myMap(arr, action) {
  const newArr = [];
  arr.forEach(element => {
    newArr.push(action(element));
  });
  return newArr;
}

const ModifiedArr = myMap(arr, ele => {
  return ele * 2;
});

console.log(ModifiedArr);
