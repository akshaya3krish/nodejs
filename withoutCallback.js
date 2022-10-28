//function without callback
function add1 (a, b){
    setTimeout(() => {
        const res1 = a + b;
        return res1;
    }, 1000);
}
const result1 = add1 (10, 10);
console.log(result1);
if (result1 % 2 === 0){
    console.log("Result1 is even number");
}
else{
    console.log("Result1 is odd number");
}