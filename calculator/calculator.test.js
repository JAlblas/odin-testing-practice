const Calculator = require("./calculator");

test("calculator add", () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 3)).toBe(4);
});

test("calculator substract", () => {
  const calculator = new Calculator();
  expect(calculator.substract(4, 3)).toBe(1);
});

test("calculator multiply", () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 5)).toBe(10);
});

test("calculator divide", () => {
  const calculator = new Calculator();
  expect(calculator.divide(9, 3)).toBe(3);
});
