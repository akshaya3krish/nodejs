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