function firstMissingPositive(arr) {
  const n = arr.length;

  // Step 1: Move each positive number to its correct position (index = value - 1)
  for (let i = 0; i < n; i++) {
    while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
      // Swap the current element with the one at its target position
      const correctIndex = arr[i] - 1;
      [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    }
  }

  // Step 2: Find the first index where the value doesn't match the index + 1
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }

  // Step 3: If all positions are correct, return n + 1
  return n + 1;
}

// Example usage
const array = [3, 4, -1, 1];
console.log(firstMissingPositive(array)); // Output: 2
