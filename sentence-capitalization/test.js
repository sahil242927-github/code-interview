const capitalize = require("./sentence-capitalization");

describe("Sentence Capitalize", () => {
  it("Should return as -A Short Senetence", () => {
    const result = capitalize("a short sentence");
    expect(result).toBe("A Short Sentence");
  });
  it("Should return as -A Lazy Fox", () => {
    const result = capitalize("a lazy fox");
    expect(result).toBe("A Lazy Fox");
  });
  it("Should return as -Look, It Is Working", () => {
    const result = capitalize("look, it is working");
    expect(result).toBe("Look, It Is Working");
  });
});
