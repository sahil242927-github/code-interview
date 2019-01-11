/* "+ sign" add 2 numbers. if the one of them is string, it concatinates them */

/* "- sign" subtract 2 numbers. if one of them is string, it converts the string into number as - sign only subtracts.*/

console.log(2 + "2"); // return 22
console.log(2 - "2"); // return 0

console.log("2" - []); // return 2  as array converts to string while type casting.

console.log("2" - {}); // return NaN
