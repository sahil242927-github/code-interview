let fruits = ["banana", "apple", "Orange"];

fruits.forEach((elem, i) => {
  var p = new Promise((resolve, reject) => {
    fruits[0] === "banana"
      ? setTimeout(() => {
          resolve(elem);
        }, i * 1000)
      : reject(new Error("Fruits cannot be bought"));
  });
  p.then(result => console.log(result)).catch(err => console.log(err.message));
});
