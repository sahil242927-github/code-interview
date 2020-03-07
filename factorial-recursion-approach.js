function factorial(num) {
  console.log("num => ", num);
  if (num === 0) return 1;

  /* Note : num-- works in loop, but there is no loop here so we have to use "--num OR num -1" */
  return num * factorial(--num);
}

console.log(factorial(5));
