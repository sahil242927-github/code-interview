// Code before hoisting
console.log("1----");
console.log(teddy);
sing();
var teddy = "bear";
function sing() {
  console.log("la la la");
}

// Code after hoisting
console.log("1----");
var teddy = undefined;
function sing() {
  console.log("la la la");
}
sing();
