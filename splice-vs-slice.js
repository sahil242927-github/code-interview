/* 
  The difference between splice and splice is that splice function alter the original array where as slice function does not!
*/

//Slice: I want element from the given indexes
// it counts indexs from 0 to given range
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus); // ["Orange","Lemon"]

// it counts indexes till the entire range
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.splice(1, 3);
console.log(citrus); // ["Orange","Lemon","Apple"]
