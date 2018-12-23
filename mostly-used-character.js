/* 
Problem: Given a string, return the character that is most commonly used  in the string

----Examples: 
maxChar("aaccccccccd")    ====  "c" 
maxChar("apple 123111")    ====  "1" 
*/

// Converting the string into object
let str = "Hello World";
let strObj = {};

for (let char of str) {
  // Tarnary
  //strObj[char] ? strObj[char]++ : (strObj[char] = 1);

  // Tarnary 2
  strObj[char] = strObj[char] + 1 || 1;
}

let maxChar = "";
let max = "";

for (let char in strObj) {
  if (strObj[char] > max) {
    max = strObj[char];
    maxChar = char;
  }
}

console.log(`max : ${max} , maxChar : ${maxChar}`);
