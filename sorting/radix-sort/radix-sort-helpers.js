/* 
Functions used in Radix
=======================

The "Math.pow()" function returns the base to the exponent power, that is, base exponent.
Math.pow(5,2) // 25
Math.pow(5,3) // 125

The "Math.abs()" function returns the absolute value of a number Math.abs(-6) // 6
Math.abs(-2.4543) // 2.4543

The "Math.log10()" function returns the 10 to what power gives us this number
Math.log10(100) // 2  => 10^2 == 100
Math.log10(1000) // 3  => 10^3 == 1000
Math.log10(300) // 2.4771212  => 10^2.47 == 300
*/

/* it returns the "digit" of the given index of the number  
 Example : 
    getDigit(8765, 0) // 5
    getDigit(8765, 2) // 7
    getDigit(8765, 3) // 8
*/
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/* Returns the number of digits in num 
    Example:
     digitCount(1) // 1   
     digitCount(25) // 2   
     digitCount(314) // 3  
*/
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/* Given an array of numbers, returns the number of digits in 
the largest numbers in the list 

Example:
mostDigits(1234,56,7) // 4
mostDigits(1,1,11111,1) // 5
mostDigits(12,23,34,65) // 2
*/
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}
