function intersection(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
console.log(intersection([1, 2, 3, 5, 6], [1, 3, 5, 9]));
