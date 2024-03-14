
const input = require("readline-sync");
let x = 12;
let y = 5;
let add = x + y;
let subtract = x - y;
let multiplication = x * y;
let divide = x / y;
let integerdivide = Math.floor(x / y); // Use Math.floor for integer division
let modulus = x % y;

console.log("Addition:", add);
console.log("Subtraction:", subtract);
console.log("Multiplication:", multiplication);
console.log("Division:", divide);
console.log("Integer Division:", integerdivide);
console.log("Modulus:", modulus);
