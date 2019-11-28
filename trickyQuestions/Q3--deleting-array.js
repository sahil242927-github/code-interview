/* You can delete array with splice(index, howmany) */
let fruits = ["apple", "banana", "orange"];

let obj = {
  breakfast: fruits,
  lunch: "roti"
};

/* This will delete reference from the object */
//delete obj.breakfast

/* this will alter the origial array */
//delete obj["breakfast"].splice(1, 1);

// This will empty the array
delete obj["breakfast"].splice(0);
console.log(fruits); // []
