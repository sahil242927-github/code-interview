let anagrams = require("./anagrams");

describe("Anagram", () => {
  it("Should return true => dormitory - dirty room", () => {
    const result = anagrams("dirty room", "dormitory");
    expect(result).toBeTruthy();
  });
  it("Should return true => eleven plus two – twelve plus one", () => {
    const result = anagrams("eleven plus two", "twelve plus one");
    expect(result).toBeTruthy();
  });
});
