/* 
"Memoization": store the argument of each function call along with the
result. if the function is called again with the same argument, return
the pre-computed result rather than running the function again.
*/

/* Example: Memoizationto improve recursive solution of fibonacci series */

function memoization(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);
}

const fib = memoization(slowFib);
console.log(fib(6));
