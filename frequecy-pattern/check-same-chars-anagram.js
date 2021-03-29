const anagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;


  const frequencyCounter1 = {};

  for(let val of str1) {
      frequencyCounter1 = (frequencyCounter1[val] || 0) + 1
  }

}