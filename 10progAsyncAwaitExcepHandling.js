//program-1 -- toString program using async await with exception handling
const toStringProgram = (arg) => {
    return new Promise((resolve1, reject1) =>{
        setTimeout(() => {
            try{
                if(arg !=0){
                    argResult = arg.toString();
                }
                resolve1(argResult);
            }catch(err){
                reject1(err);
            }
        }, 1000)
    })
}
const toStringFunc = async()=>{
    const result = await toStringProgram([10,20,30,40,50,"NodeJS"]);
    return result;
}
toStringFunc().then((finalResult) =>{
    console.log(`After converting to String: ${finalResult}`);
}).catch((err) =>{
    console.log(`Error: ${err}`);
})

//program-2 -- toString program using async await with exception handling
const toStringProgram2 = (arg) => {
    return new Promise((resolve2) =>{
                if(arg !=0){
                    argResult2 = arg.toString();
                }
                resolve2(argResult2);
    })
}
const toStringFunc2 = async()=>{
    const result = await toStringProgram2([04,11,2022,"Fourth","November","Two Thousand Twenty Two"]);
    return result;
}
toStringFunc2().then((finalResult) =>{
    console.log(`After converting to String: ${finalResult}`);
}).catch((err) =>{
    console.log(`Error: ${err}`);
})

//program-3 -- palindrome program using async await with exception handling
const palindromeCheck = (string, reverseString) => {
    return new Promise ((resolve3) => {
                if(string != reverseString) {
                    reverseString = string.split("").reverse().join("");
               } 
                resolve3(reverseString);
    })
}
const palindromeCheckFunc = async()=>{
    const reverseString = await palindromeCheck("mom");
    return reverseString;
}
palindromeCheckFunc().then((reverseString)=>{
    console.log(`It is a palindrome: ${reverseString}`);
}).catch((err)=>{
    console.log(`It is not a palindrome: ${err}`);
})