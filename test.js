function printSteps(n) {
  /* Check the base case */
  if (n === 0) {
    return;
  }

  let row = 0;
  let col = 0;
  let cell = 0;
  for (row = 0; row < n; row++) {}
  /* Calling function again. Making sure the arguments have changed*/
  printSteps(n - 1);
}

printSteps(10);
