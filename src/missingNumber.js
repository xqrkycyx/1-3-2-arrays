/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
  for (let i = 1; i <= numbers.length + 1; i++) {
    let match = false;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === i) {
        match = true;
        break;
      }
    }
    if (!match) {
      return i;
    }
  }
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(numbers) {}

module.exports = { missingNumberBruteForce, missingNumberSum };
