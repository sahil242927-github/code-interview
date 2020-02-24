const compose = (f, k) => data => f(k(data));

const multiplyBy5 = num => num * 5;
const absolute = num => Math.abs(num);
const add5 = num => (num += 5);

console.log(compose(add5, absolute)(-10));
