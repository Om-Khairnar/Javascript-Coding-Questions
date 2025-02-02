function ArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(ArraySum([1, 3, 5, -1]));

// using Reducer

function ArraySum(arr) {
  let sum = arr.reduce((total, item) => total + item);
  return sum;
}
console.log(ArraySum([1, 3, 5, -1]));
