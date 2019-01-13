function pyramid(n) {
  // columns must be greater than n
  let columns = 2 * n - 1;
  let midpoint = Math.floor(columns / 2);

  // Row Loop
  for (let row = 0; row < n; row++) {
    let level = "";

    // column Loop
    for (let i = 0; i < columns; i++) {
      if (midpoint - row <= i && midpoint + row >= i) {
        level += "#";
      } else {
        level += "-";
      }
    }
    console.log(level);
  }
}

pyramid(5);

/* 


midpoint - row <= column && midpoint + row >= column


 - - - - # - - - - 
 - - - # # # - - - 
 - - # # # # # - - 
 - # # # # # # # - 
 # # # # # # # # #


*/
