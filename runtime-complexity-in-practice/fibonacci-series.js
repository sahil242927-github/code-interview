function fibonacci(num) {
  let result = [0, 1];

  for (let index = 2; index < num; index++) {
    let a = result[index - 1];
    let b = result[index - 2];
    result.push(a + b);
  }
  return result;
}

console.log(fibonacci(10));
