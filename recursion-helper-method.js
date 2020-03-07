/* 
Slice() method => selects the elements starting at the given start argument, and ends at, "but does not include, the given end argument".

Note: The original array will not be changed
*/

function collectionOddValues(arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

console.log(collectionOddValues([1, 2, 3, 4, 5, 6, 7]));
