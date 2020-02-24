const colorsArray = ["Yellow", "Green", "Blue"];
const colorsObj = { Yellow: "25%", Green: "15%", Blue: "5%" };

/* FOR-IN LOOP WORKS FOR BOTH ARRAY AND OBJECT */
// return the indexes => 0, 1, 2

/*for (let key in colorsArray) {
  console.log("color : => ", key);
}

// return the object's keys => "Yellow", "Green", "Blue"
for (let key in colorsObj) {
  console.log("color : => ", key);
}*/

/* FOR-OF LOOP WORKS ONLY FOR ARRAY!! */
// return array value => "Yellow", "Green", "Blue"
for (let key of colorsArray) {
  console.log("color : => ", key);
}

/* for-of => doesn't work with Object, give error */
/* for (let key of colorsObj) {
  console.log("color : => ", key);
} */
