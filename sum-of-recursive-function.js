function sum(a) {
  return function (b) {
    while (!b) {
      return sum(a);
    }
    return a + b;
  };
}

sum(10)()()()(20); // 30
