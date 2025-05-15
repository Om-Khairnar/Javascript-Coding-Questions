function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("I love coding")); // Output: "coding love I"
console.log(reverseWords("Hello world!"));  // Output: "world! Hello"
