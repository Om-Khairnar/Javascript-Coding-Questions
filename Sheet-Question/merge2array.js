// Merge 2 sorted Array
// function sorted(arr1,arr2){
//     const arr3 = arr1.concat(arr2);
//     arr3.sort((a,b)=> a - b);
//     return arr3;
// }
// console.log(sorted([1,2,5,6,7],[8,9,10,11]))

function sorted(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
console.log(sorted([1, 2, 5, 6, 7], [8, 9, 10, 11]));
