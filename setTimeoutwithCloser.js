let fruits = ["banana", "apple", "Orange"];

function closerWithsettimeout() {
  return function() {
    fruits.forEach(function(elem, i) {
      setTimeout(() => {
        console.log(elem);
      }, 1000 * i);
    });
  };
}
closerWithsettimeout()();
