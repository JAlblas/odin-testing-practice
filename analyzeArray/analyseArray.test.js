const analyzeArray = require("./analyseArray");

test("average", () => {
  expect(analyzeArray([4, 8, 4, 6, 8]).average).toBe(6);
});

test("min", () => {
  expect(analyzeArray([4, 8, 4, 6, 8]).min).toBe(4);
});

test("max", () => {
  expect(analyzeArray([4, 8, 4, 6, 8]).max).toBe(8);
});

test("length", () => {
  expect(analyzeArray([4, 8, 4, 6, 8]).length).toBe(5);
});
