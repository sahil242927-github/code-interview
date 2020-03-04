/* in this example we saved "one object space && 1 loop iteration" */

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // loop over each string and add them to object with the respective occurance
  const lookup = {};

  for (let val of str1) {
    let char = val.toLowerCase();
    lookup[char] = lookup[char] + 1 || 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(anagram("teest", "tsett"));
