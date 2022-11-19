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