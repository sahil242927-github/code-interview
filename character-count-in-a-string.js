/* 
/[a-zA-Z0-9]/.test('&') // slow at performance
we can use Regular Expression for checking alphanumeri, but that is
slow at performance so we will use charCodeAt() function.*/
function alphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0 -9)
    !(code > 64 && code < 91) && // upper Alpha (A -Z)
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

function getCharCount(str) {
  const obj = {};
  for (let char of str) {
    if (alphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(getCharCount('hurry'));
