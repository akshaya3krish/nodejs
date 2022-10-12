// syntax -  process.argv
/*The process.argv property is an inbuilt application programming interface of the process module 
which is used to get the arguments passed to the node.js process when run in the command line*/
//The first element is the process execution path and the second element is the path for the js file.

//sample program
/*const process = require('process');
var args = process.argv;
console.log("number of arguments is "+ args.length);
console.log(process.argv); */

/*const a = process.argv;
const b = a.slice(2,a.length);

let sum = 0;
let solution = b.forEach((value) => {
  // convert to a number
  sum += Number(value);
  return sum;
});

console.log("The sum = " + sum); */



let val1 = parseInt(process.argv[2]);
let val2 = parseInt(process.argv[3]);
let resAdd = (val1 + val2);
let resSub = (val1 - val2);
let resMul = (val1 * val2);
let resDiv = (val1 / val2);

console.log(resAdd, resSub, resMul, resDiv);

