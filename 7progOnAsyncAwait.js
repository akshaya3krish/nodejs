//program-1 --cube number prog using async and await with try catch block
const cubeNum = (number) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            try{
                for(let i=0; i<=0; i++){
                    result = number * number * number;
                }
                resolve(result);
            }catch(err){
                reject(`Error Occurred: ${err}`);
            }
        }, 2000)
    })
}
const cubeNumFunc = async()=>{
    const result = await cubeNum(10);
    console.log(result);
}
cubeNumFunc();

//program-2 -- reverse string program using async and await with try catch block
const reverseString = (str) => {
    return new Promise((resolve2, reject2) =>{
        setTimeout(() =>{
            try{
                let newString = "";
                for (let i = str.length - 1; i >= 0; i--){
                    newString += str[i];
                }
                resolve2(newString);
            }catch(err){
                reject2(`Error Occurred: ${err}`);
            }
        }, 2000)
    })
}
const reverseStringFunc = async()=>{
    const result = await reverseString("NodeJs-3");
    console.log(`Reverse String is: ${result}`);
}
reverseStringFunc();

//program-3 --cube number prog using async and await
const cubeNum1 = (number) =>{
    return new Promise((resolve3) => {
        setTimeout(() =>{
                for(let i=0; i<=0; i++){
                    result = number * number * number;
                }
                resolve3(result);
        }, 2000)
    })
}
const cubeNumFunc1 = async()=>{
    const result = await cubeNum(3);
    console.log(result);
}
cubeNumFunc1();

//program-4 -- reverse string program using async and await
const reverseString2 = (str) => {
    return new Promise((resolve4) =>{
        setTimeout(() =>{
                let newString = "";
                for (let i = str.length - 1; i >= 0; i--){
                    newString += str[i];
                }
                resolve4(newString);
        }, 2000)
    })
}
const reverseStringFunc2 = async()=>{
    const result = await reverseString2("November");
    console.log(`Reverse String is: ${result}`);
}
reverseStringFunc2();