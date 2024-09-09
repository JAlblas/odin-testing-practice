const caesarCipher = require("./caesarCipher");

test("caesar regular", () => {
  expect(caesarCipher("test", 5)).toBe("yjxy");
});

test("caesar capital", () => {
  expect(caesarCipher("TEst", 5)).toBe("YJxy");
});
