function isPalindrome(str) {
   str = str.toLowerCase();
   return str == str.split('').reverse().join('');
}

console.log(isPalindrome("Katak"));
console.log(isPalindrome('Ubi'));