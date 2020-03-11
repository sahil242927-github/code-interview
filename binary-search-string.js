function binaryStringSearch(long, short) {
  const shortLength = short.length;
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < shortLength; j++) {
      // j will reset to 0 once break is happened
      if (short[j] !== long[i + j]) {
        break;
      } else {
        // if j is the last character then we found a match
        if (j === shortLength - 1) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(binaryStringSearch("lorie loled lo", "lo"));
