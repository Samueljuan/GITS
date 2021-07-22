function hello(n) {

   var result;

   if (n % 3 == 0 && n % 5 == 0) {
      result = "Hello World";
   } else if (n % 5 == 0) {
      result = "World";
   } else if (n % 3 == 0) {
      result = "Hello";
   } else {
      result = "Angka bukan kelipatan 3 dan atau 5";
   }
   return result;
}

console.log(hello(3));
console.log(hello(5));
console.log(hello(15));