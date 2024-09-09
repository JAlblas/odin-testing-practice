function analyzeArray(numbers) {
  return {
    average: numbers.reduce((a, b) => a + b, 0) / numbers.length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
}

module.exports = analyzeArray;
