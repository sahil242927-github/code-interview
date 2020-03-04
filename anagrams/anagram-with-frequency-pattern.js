function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // loop over each string and add them to object with the respective occurance
  const strObj1 = {};
  const strObj2 = {};

  for (let val of str1) {
    let char = val.toLowerCase();
    strObj1[char] = strObj1[char] + 1 || 1;
  }
  for (let val of str2) {
    let char = val.toLowerCase();
    strObj2[char] = strObj2[char] + 1 || 1;
  }

  for (let key in strObj1) {
    if (!(key in strObj2)) {
      return false;
    } else if (strObj1[key] !== strObj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("qwerty", "qeywrt"));
