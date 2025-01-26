function removeDuplicate(arr) {
  let a1 = arr.filter((item, index) => arr.indexOf(item) === index);
  return a1;
}
console.log(removeDuplicate([1, 3, 5, 6, 6, 7, 6, 7, 7, 7, 9]));
