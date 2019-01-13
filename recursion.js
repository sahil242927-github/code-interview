function printNumber(n) {
  /* Check the base case */
  if (n === 0) {
    return;
  }
  console.log(n);

  /* Calling function again. Making sure the arguments have changed*/
  printNumber(n - 1);
}

printNumber(10);
