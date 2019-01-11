/* 
  The difference between splice and splice is that splice function alter the original array where as slice function does not!
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange","Lemon"]

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.splice(1, 3);
console.log(citrus); // ["Orange","Lemon","Apple"]
