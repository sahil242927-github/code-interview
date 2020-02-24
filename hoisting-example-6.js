var favouriteFood = "grapes";
var foodThoughts = () => {
  console.log("Original favourite food : " + favouriteFood);

  var favouriteFood = "sushi";
  console.log("New favourite food : " + favouriteFood);
};

foodThoughts();
