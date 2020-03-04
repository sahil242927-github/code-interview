setTimeout(() => {
  console.log(1);
}, 0);

setTimeout(() => {
  console.log(2);
}, 10);

// Job queue has higher priority then callback queue
// so it will print before all the setTimeout
Promise.resolve(3).then(result => console.log(result));

console.log(4);

/* The output of the above code
    4
    3
    1
    2
*/
