//String manipulation in JS

let str = "Hello world";
let message = `${str},for oM`
console.log(message)
console.log(str.length);
console.log(str[1]); //e
console.log(str.charAt(0));//H

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0, 5)); //hello 
console.log(str.slice(-6)); //world

console.log(str.slice(0, 5)); //Hello

let text= "I LOVE Cats!";
console.log(text.replace("cats", "dog"));

let csv = "Apple,Banana,Cherry";
console.log(csv.split(","));

let padded = "   Hello!   ";
console.log(padded.trim()); // "Hello!"

console.log(str.indexOf("World")); // 7

console.log(str.lastIndexOf("o")); // 8

console.log(str.includes("Hello")); // true

console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

let greet = "Hello" + " " + "World!";
console.log(greet); // "Hello World!"

let greeta = "Hello".concat(" ", "World!");
console.log(greeta); // "Hello World!"

let num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0")); // "500"

let repeat = "Ha! ".repeat(3);
console.log(repeat); // "Ha! Ha! Ha! "

let age = 25;
console.log(`I am ${age} years old.`); // "I am 25 years old."

let str1 = "JavaScript";
let reversed = str1.split("").reverse().join("");
console.log(reversed); // "tpircSavaJ"

function isPalindrome(s) {
  let clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return clean === clean.split("").reverse().join("");
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

