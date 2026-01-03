const capitalize = require("./capitalize");

test("capital first letter", () => {
  expect(capitalize("awesome")).toBe("Awesome");
});

test("capital all letters", () => {
  expect(capitalize("COOL")).toBe("COOL");
});

test("capital all except", () => {
  expect(capitalize("fIRE")).toBe("FIRE");
});
