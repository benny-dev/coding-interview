function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str === reverseString(str) ? true : false;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("goodbye"));
