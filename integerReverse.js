/* Reverse Number */

/* 
Math.sign(n) : if n is negative, it returns negative, 
               if n is positive, it returns positive 
*/

function reverseInt(n) {
  // if we pass -51, this code will return "51-"
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  // instead of this "if statement", we can use Math.sign() like this
  // handling the case if n is negative
  /* if (n < 0) {
    return parseInt(reversed) * -1;
  } */

  // parseInt will convert "51-" into 51
  // Math.sign(-51) will return -1 so
  // 51 * -1 === -51

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-51));
