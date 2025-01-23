// Rotate the array from the kth position 

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;

  return arr.slice(-k).concat(arr.slice(0, n - k));
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArray(arr, k));
