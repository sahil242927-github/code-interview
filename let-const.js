var i = 10;
function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // returns 0, 1, 2, 3, 4
  }
  console.log("final ", i); // returns 10
}
loop();
