/* Reverse Number */

/* 
Math.sign(n) : if n is negative, it returns negative, 
               if n is positive, it returns positive 
*/

function reverseInt(n) {
  let reversed = n
    .toString()
    .split("")
    .reverse()
    .join("");

  // instead of this "if statement", we can use Math.sign() like this
  // handling the case if n ia negative
  /* if (n < 0) {
    return parseInt(reversed) * -1;
  } */

  return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-51));
