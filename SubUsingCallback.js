function sub(a, b, callback){
    setTimeout(() => {
        const subResult = a - b;
        callback(subResult);
    }, 2000)
}
sub(30, 20, (result) => {
    console.log(result);
})