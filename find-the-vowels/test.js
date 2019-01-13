const vovels = require("./find-the-vowels");

describe("Vovels in a string", () => {
  it("Hi There! -- should return 3", () => {
    let result = vovels("Hi There!");
    expect(result).toBe(3);
  });
  it("Why do you ask! -- should return 4", () => {
    let result = vovels("Why do you ask!");
    expect(result).toBe(4);
  });
  it("Why! -- should return 0", () => {
    let result = vovels("Why!");
    expect(result).toBe(0);
  });
});
