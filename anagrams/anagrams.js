/* ANAGRAMS */

/* 
EXAMPLES: BOTH THE STRING MUST HAVE EXACT SAME CHRACTERS

anagrams("rail safty", "fairy tales");  --> true
anagrams("RAILS SAFTY!", "fairy tales"); --> true
anagrams("Hi There", "By There");  --> false
*/

/* 
Replace anything in the string with "" except (characters, numbers, and underscore)
/[^\w]/g == [^A-Za-z0-9_]
*/

function anagrams(str1, str2) {
  return cleanSortString(str1) === cleanSortString(str2);
}

function cleanSortString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
module.exports = anagrams;
