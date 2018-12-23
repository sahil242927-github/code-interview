/*   
   HOC : A function that takes function as an argument or return a function 
   is called Higher Order Function
*/

/* let's use the sort() function as an higher order function */

let fruits = ["banana", "Apple", "Orange", "mango"];
//console.log(fruits.sort());

fruits.sort((a, b) => {
  let x = a.toLowerCase(),
    y = b.toLowerCase();

  if (x < y) return -1; // The first argument should come before
  if (y < x) return 1; // The second argument should come before
  return 0; // They are equal to one and another
});
console.log(fruits);
