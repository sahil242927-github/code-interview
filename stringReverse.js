/* String reverse problem */

/* for of loop : 
      1. Iterating the string by each character 
      2. Iterrating Array
*/

/*====== Solution 2 ======  */
function reverse(str) {
  let reversed = "";

  for (const character of str) {
    console.log(`${character} + ${reversed}`);
    reversed = character + reversed;
  }
  console.log(reversed);
  return reversed;
}
reverse("main");

/*====== Solution 3 ======  */

/* reduce() function: 
        1. it takes all the different values of the array and
            condence them all down to one single value 

        2. it takes the initial value which is same as passed in arrowFunc. 
           we passed empty string as initial value and it become the whatever the return value will be            
*/

/* split('') function: 
        1. converting the given string into array           
*/

function reverse2(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
console.log(reverse2("main"));

const str = "i am done";


function reverseStr(str) {
  return str.split("").reduce((rev, character) => character + rev, "")
}

console.log(reverseStr(str))


