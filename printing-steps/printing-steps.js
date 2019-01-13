/* 
PROBLEM : PRINTING STEPS

Write a function that accept positive number N.
The function should console a log a step shape
with N levels using the # characters. Make sure
the step has shapes on the right hand side. 

Examples:
steps(2)
  '# '
  '##'

steps(3)
  '#  '
  '## '
  '###'

steps(4)
  '#   '
  '##  '
  '### '
  '####'
*/

/* 
#####
####
###
##
# */
/* function steps(n) {
  let steps = "";
  while (n > 0) {
    let j = n;
    for (let i = 0; i < j; j--) {
      steps += "#";
    }
    steps += "\n";
    n--;
  }
  return steps.trim();
} */

/* 
#
##
###
####
#####
*/
/* function steps(n) {
  let steps = "";
  for (let i = 0; i < n; i++) {
    let j = i;
    for (let i = 0; i <= j; i++) {
      steps += "#";
    }
    steps += "\n";
  }
  return steps.trim();
} */

/* 
#----
##---
###--
####-
##### */
/* Adding - sign for empty space */
/* function steps(n) {
  let steps = "";
  for (let i = 0; i < n; i++) {
    let j = n;
    for (let counter = 0; counter < j; counter++) {
      steps = counter <= i ? (steps += "#") : (steps += "-");
    }
    steps += "\n";
  }
  return steps.trim();
}
console.log(steps(5)); */
//module.exports();

/* Print Steps with Recursion */
function printStepsWithRecursion(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  /* if colum cell are equal n, print the row */
  if (n === stair.length) {
    console.log(stair);
    return printStepsWithRecursion(n, row + 1);
  }

  /* If the cell is less then row, add # else " " */
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  printStepsWithRecursion(n, row, stair);
}

console.log(printStepsWithRecursion(6));
