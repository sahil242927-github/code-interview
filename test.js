function* generator() {
  console.log('a');
  console.log('b');
}

const a = generator();

a.next(); // will print a and b
