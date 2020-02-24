const arr = [1, 2, 3, 4];

const total = arr.reduce((prevValue, nextValue) => {
  return prevValue * nextValue;
}, 1);

const add10 = num => (num += 10);
const add5 = num => (num += 5);
const multiplyBy5 = num => num * 5;

const fns = [add10];

fns.reduce((prevFn, nextFuc) => {
  const updatedValue = { prevFn, nextFuc };
  console.log(updatedValue);
  return updatedValue;
}, {});
//console.log(total);
