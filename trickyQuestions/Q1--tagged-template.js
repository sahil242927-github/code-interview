/*
Question 1.
-----------
Tagged template 
var sentence = a `hi`   =>  var sentence = a('h1');
*/

// what will be the output if this.
function a() {
  return "hello";
}
let sentence = a`hi`;

console.log(sentence); // it will return hello
