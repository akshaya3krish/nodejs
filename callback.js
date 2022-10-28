//function with callback
function add (a, b, callback){
    setTimeout(() => {
        const res = a + b;
        callback(res);
    }, 1000)
}
add(5, 5, (result) => {
    console.log(result);
    if (result % 2 === 0){
        console.log("Result is even number");
    }
    else{
        console.log("Result is odd number");
    }
});

//function without callback
function add1 (a, b){
    setTimeout(() => {
        const res1 = a + b;
        return res1;
    }, 2000);
}
const result1 = add1 (10, 10);
console.log(result1);