function Palindrom(string) {
  let palindrom = string.split("").reverse().join("");
  let pam = string;
  if (palindrom == pam) {
    return "Palindrom";
  } else {
    return "not palindrom";
  }
}
console.log(Palindrom("HEhiihEH"));
