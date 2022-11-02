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
//program-6 -- palindrome program 
const palindromeCheck = (string, reverseString) => {
    return new Promise ((resolve5, reject5) => {
        setTimeout(()=>{
            try{
                if(string === reverseString) {
                     arrayValues = string.split('');
                     reverseArrayValues = arrayValues.reverse();
                     reverseString = reverseArrayValues.join('');
               } 
                resolve5(reverseString);   
            }catch(err){
                reject5(err);
            }
        }, 4000)
    })
}
palindromeCheck("mom").then((reverseString)=>{
    console.log(`It is a palindrome: ${reverseString}`);
}).catch((err)=>{
    console.log(`It is not a palindrome: ${err}`);
})
//program-7 --join string program
const joinFunction = (arr) =>{
    return new Promise ((resolve6, reject6) =>{
        setTimeout(() =>{
            try{
                arr = arr.join(" ");
                resolve6(arr);
            }
            catch(err){
                reject6(err);
            }
        },2000)
    })
}
joinFunction([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]).then((arr)=>{
    console.log(`Joined array is: ${arr}`);
}).catch((err)=>{
    console.log(`Error Occurred: ${err}`);
})

//program-8 --shift method program
const shiftFunction = (classNames) =>{
    return new Promise((resolve7, reject7) =>{
        setTimeout(()=>{
            try{
                className = classNames.shift();
                resolve7(classNames);
            }catch(err){
                reject7(err);
            }
        },2000)
    })
}
shiftFunction(["Akshaya", "Arun", "Faiz", "Roshan","Sakshi", "Yashwanth"]).then((result)=>{
    console.log(`After using shift method: ${result}`);
}).catch((err)=>{
    console.log(`Error occurred on shift method: ${err}`);
})

//program-9 -- primenumber check program using try catch finally, timeout using promises
const primeNumCheck = (number) =>{
    return new Promise((resolve8, reject8)=>{
        setTimeout(()=>{
            try{
                if (number <= 1) {
                    return false;
                  } else {
                    for (let i = 2; i < number; i++) {
                      if (number % i == 0) {
                        return false;
                      }
                    }
                    resolve8(number);
                  }
            }
            catch(err){
                reject8(err);
            }
            finally{
                console.log("Entered number is not a prime number");
            }
        },2000)
    })
}
primeNumCheck(10).then((result)=>{
    console.log(`Entered number is a prime number: ${result}`);
}).catch((err)=>{
    console.log(`Error occured while checking primenumber: ${err}`);
})

//program-10 --concatenation program using try catch timeout callback and using promises
const concat = (str1, str2, callback) =>{
    return new Promise((resolve9, reject9)=>{
        setTimeout(()=>{
            try{
                const newString = str1.concat(" ",str2);
                callback(newString);
                resolve9(newString);
            }catch(err){
                reject9(err);
            }
        },2000)
    })
}
concat("Akshaya", "Krishnan", (newString)=>{`callback: ${newString}`}).then((result)=>{
    console.log(`Concatenated string is: ${result}`);
}).catch((err)=>{
    console.log(`Error happened in concatenation: ${err}`);
})