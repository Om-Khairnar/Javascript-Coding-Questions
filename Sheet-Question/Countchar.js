function countChar(char) {
  let space = " ";
  let count = 0;
  for (i = 0; i < char.length; i++) {
    if (char[i] !== " ") {
      count++;
    }
  }
  return count;
}
console.log(countChar("HRr u90the way youma keco"));
