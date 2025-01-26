// find All pairs in an array that sum to a number
function pair(arr, target) {
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}
const arr = [1, 2, 3, 4, 5, 6, 8, -1];
const target = 7;
console.log(pair(arr, target));
