/* Problem:

if number is multiple of 3, console.log "fizz"
if number is multiple of 5, console.log "buzz"
if number is multiple of 3 and 5, console.log "fizzBuzz"
else print the number

Example:
1
2
fizz
4
buzz

*/

function fizzbuzz(num) {
  if (num <= 0) {
    return "Number is not a valid positive whole number";
  }

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(15);
