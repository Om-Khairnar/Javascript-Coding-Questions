function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in right half
    } else {
      right = mid - 1; // Search in left half
    }
  }

  return -1; // Not found
}

const nums = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(nums, 7));  // Output: 3
console.log(binarySearch(nums, 4));  // Output: -1
