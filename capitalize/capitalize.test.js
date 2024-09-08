const capitalize = require("./capitalize");

test("capital first letter", () => {
  expect(capitalize("awesome")).toBe("Awesome");
});
