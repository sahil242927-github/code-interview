let fruits = ["banana", "apple", "Orange"];

/* function closerWithsettimeout() {
  return fruits.array.forEach((elem, i) => {
    return (closer = () => {
      setTimeout(() => {
        console.log(elem);
      }, i * 1000);
    });
  });
}
 */
function closerWithsettimeout() {
  return fruits.array.forEach((elem, i) => {
    return function closer() {
      setTimeout(() => {
        console.log(elem);
      }, i * 1000);
    };
  });
}
closerWithsettimeout();
