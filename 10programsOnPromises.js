//program-1 -- program using promise
const SqRootNum = (num1) =>{
    return new Promise((resolve, reject)=>{
        if(num1 != 0){
            result = num1 * num1 ;
            resolve(`Square root of the number is: ${result}`);
        }else{
            reject("Error");
        }

    })
}
SqRootNum(10).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})

//program-2 --program using promise with try and catch block
const cubeNum = (number1) =>{
    return new Promise((resolve1, reject1) =>{
        try{
            for(let i=0; i<=0; i++){
                result = number1 * number1 * number1;
            }
            resolve1(result);
        }catch(err){
            reject1(`Error Occurred: ${err}`);
        }
    })
}
cubeNum(5).then((result) =>{
    console.log(`Cube of the number is: ${result}`);
}).catch((err) =>{
    console.log(err);
})

//program-3 -- cube program using try catch and timeout function
const cubeNum1 = (number2) =>{
    return new Promise((resolve2, reject2) => {
        setTimeout(() =>{
            try{
                for(let i=0; i<=0; i++){
                    result = number2 * number2 * number2;
                }
                resolve2(result);
            }catch(err){
                reject2(`Error Occurred: ${err}`);
            }
        }, 2000)
    })
}
cubeNum1(3).then((result) =>{
    console.log(`Cube of the number is: ${result}`);
}).catch((err) =>{
    console.log(err);
})

//program-4 -- program on reverse string using try catch and timeout function using promises
const reverseString = (str) => {
    return new Promise((resolve3, reject3) =>{
        setTimeout(() =>{
            try{
                let newString = "";
                for (let i = str.length - 1; i >= 0; i--){
                    newString += str[i];
                }
                resolve3(newString);
            }catch(err){
                reject3(`Error Occurred: ${err}`);
            }
        }, 2000)
    })
}
reverseString("NodeJs-3").then((result) =>{
    console.log(`Reverse String is: ${result}`);
}).catch((err) =>{
    console.log(err);
})

//program-5 --program on toString function using try catch timeout using promises
const toStringProgram = (arg) => {
    return new Promise((resolve4, reject4) =>{
        setTimeout(() => {
            try{
                if(arg !=0){
                    argResult = arg.toString();
                }
                resolve4(argResult);
            }catch(err){
                reject4(err);
            }
        }, 1000)
    })
}
toStringProgram([10,20,30,40,50,"NodeJS"]).then((argResult) =>{
    console.log(`After converting to String: ${argResult}`);
}).catch((err) =>{
    console.log(`Error: ${err}`);
})