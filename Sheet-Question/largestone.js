function FindLargest(arr) {
  let largest = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(FindLargest([18, 52, 93, 49, 5, 6, 89]));

const arr1 = [-10, -20, -30, -5, -15];
const largestone = Math.max(...arr1);
console.log("Largest element in negative array is:", largestone);
