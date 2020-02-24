/* compose function executes right to left */

const add10 = num => (num += 10);
const add5 = num => (num += 5);
const multiplyBy5 = num => num * 5;

const compose = (f, g) => (...args) => f(g(...args));

function getCalculatedNumber(...fns) {
  return fns.reduce(compose);
}

console.log(getCalculatedNumber(add10, add5, multiplyBy5)(10));
