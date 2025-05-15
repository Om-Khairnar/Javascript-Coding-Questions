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


// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

//total	Required.->The initialValue, or the previously returned value of the function.
//currentValue	Required.-> The value of the current element.
//currentIndex	Optional.-> The index of the current element.
//arr	Optional.-> The array the current element belongs to.
