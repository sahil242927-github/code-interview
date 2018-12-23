let fruits = ["banana", "apple", "Orange"];

for (let index = 0; index < fruits.length; index++) {
  (function(fruits, index) {
    setTimeout(() => {
      console.log(fruits[index]);
    }, index * 1000);
  })(fruits, index);
}
