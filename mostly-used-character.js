/* 
Problem: Given a string, return the character that is most commonly used  in the string

----Examples: 
maxChar("aaccccccccd")    ====  "c" 
maxChar("apple 123111")    ====  "1" 
*/

// Converting the string into object
let str = "This is my fault".replace(/ /g, "").toLowerCase();
let strObj = {};

for (let char of str) {
  // Tarnary
  //strObj[char] ? strObj[char]++ : (strObj[char] = 1);

  // Tarnary 2
  strObj[char] = strObj[char] + 1 || 1;
}

console.log(strObj);

let maxChar = "";
let max = 0;

for (let key in strObj) {
  if (strObj[key] > max) {
    max = strObj[key];
    maxChar = key;
  }
}

console.log(`max : ${max} , maxChar : ${maxChar}`);
