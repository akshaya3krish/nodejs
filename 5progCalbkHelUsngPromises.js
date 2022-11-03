//program-1 --
const SqRootNum = (num1) =>{
    return new Promise((resolve, reject)=>{
        if(num1 != 0){
            result = num1 * num1 ;
            resolve(result);
        }else{
            reject("Error");
        }

    })
}
SqRootNum(10).then((result)=>{
    console.log(`Square root of the given number is: ${result}`);
    return new Promise((resolve1, reject1)=>{
        const newResult = result * 2;
        resolve1(newResult);
    })
}).then((newResult)=>{
    console.log(`New Result after multiplying the sqrt no with 2 is: ${newResult}`)
    return new Promise((resolve2, reject2)=>{
        const newSecResult = newResult / 2;
        resolve2(newSecResult);
    })
}).then((newSecResult)=>{
    console.log(`New Result after dividing the multiplied sqrt no with 2 is: ${newSecResult}`);
}).catch((err)=>{
    console.log(`Error happened: ${err}`);
})