//let length = 16; //number
//let lastname = "John"; //string
//let x = {firstName:"John",lastName:"Doe"}; //object

let x = 16 + "Volvo"; // Result is "16Volvo".  When adding a number and a string, JavaScript will treat the number as a string.
console.log(x);

let y= "16" + "Volvo"; //Result is "16Volvo".  When adding a number and a string, JavaScript will treat the number as a string.
console.log(y);

let z = "Volvo" + 16; //Result is "Volvo16".  JavaScript evaluates expressions from left to right. Different sequences can produce different results:
console.log(z);

let a = 16 + 4 + "Volvo"; // Here adding the numbers and printed the string value. Result is "20Volvo". 
//In this example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
console.log(a);

let b = "Volvo" + 16 + 4; // Result is "Volvo164".  
//In this example, since the first operand is a string, all operands are treated as strings.
console.log(b);