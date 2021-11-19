/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let currentNumber = n;
  let visitedNumbers = new Set();
  while (currentNumber !== 1) {
    if (visitedNumbers.has(currentNumber)) {
      return false;
    }
    visitedNumbers.add(currentNumber);
    let sum = 0;
    while (currentNumber) {
      sum += Math.pow(currentNumber % 10, 2);
      currentNumber = parseInt(currentNumber / 10);
    }
    currentNumber = sum;
  }
  return true;
};
