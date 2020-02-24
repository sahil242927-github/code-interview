console.log("1----");

console.log(sing); // this will return undefined

/*  it will give reference error as "Let and Const" don't hoist
ReferenceError: Cannot access 'teddy' before initialization */
console.log(teddy);

/* at the time of creation phase, compiler doesn't know that it is a function
    it starts with a var so it will be undefined at initial phase
*/
//sing(); // TypeError: sing is not a function

let teddy = "bear";
var sing = () => {
  console.log("la la la");
};
