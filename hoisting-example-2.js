console.log(teddy);
/* Iffi() function doesn't hoist so it will throw an error */
console.log(sing());
var teddy = "bear"(function sing() {
  console.log("la la la");
});
