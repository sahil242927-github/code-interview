/* Function Expression: => this function defines at "runtime" when we actually call the function */
const canada = () => {
  console.log("canada");
};

/* Function Declaration: => this function gets defines at "parseTime" that is when compiler the initially looks at the code and starts hoisting and allocating memory */
function india() {
  console.log("india");
}

/* When a function is created, we get the access of "argument key" automatically */
function marry(first, last) {
  console.log(arguments);
}
marry("mohd", "sahil");

// using spread operator in a function

function usingSpreadOperator(...args) {
  console.log(args); // [ 'first', 'second' ]
}
usingSpreadOperator("first", "second");
