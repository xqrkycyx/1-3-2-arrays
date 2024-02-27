/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
  const minMax = [];

  // Check if the array has at least one element
  if (numbers.length >= 1) {
    // Sort in ascending order

    numbers.sort((a, b) => a - b);
    minMax.push(numbers[0]);
    minMax.push(numbers[numbers.length - 1]);
  }
  return minMax;
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(numbers) {
  if (numbers.length >= 1) {
    let min = numbers[0];
    let max = numbers[0];
    // Iterate through each number in the array
    numbers.forEach((number) => {
      if (number < min) {
        min = number;
      }
      // Update max if the current number is larger
      if (number > max) {
        max = number;
      }
    });
    return [min, max];
  }
  return [];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
