/* Every string has a constructor function */

let x = "test";
// x[x]      ==   x.constructor  == function string()

/* whatever you pass to this function will return the same */

x[x](1); // rerturn 1

x.constructor(1); // return 1
