//example-1
/*let val1, val2;
try{
    console.log("Try block starts:");
    val1 = 25;
    val2 = 0;
    result = val2/val1;
    console.log(result);
    console.log("Try block ends.");
}
catch(err){
    console.log("Error:");
}*/
//program - 2

const cubeArr = (arr) => {
    try{
        for(let i=0; i<arr.length;i++){
            //arr[i] = arr[i] * arr[i] * arr[i];
        }
        return arr;
    }catch(cubeError){
        console.log("Error Occured in cube try block");
    }
}
console.log(cubeArr(2,3,4,5));