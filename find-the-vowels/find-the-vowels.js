/*  Write a function that returns the number of vovels in a string */

/* Example:

vovels("Hi, There") --> 3
vovels("Why do you ask?") --> 4
vovels("Why?") --> 0

*/

/* 

ITERATIVE APPROACH
-------------------

function vowels(str) {
  let count = 0;
  let checker = "aeiou";

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
} */

/* Best case */
function vowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

module.exports = vowels;
