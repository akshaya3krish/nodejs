//reverse function using loop
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log("Reverse string using loop method is:",reverseString('hello'));


//reverse string using function method
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse string using function method is:", reverseString("hello"))


//reverse string using inbuilt functions
const str = "Reverse String";
const resSplit = str.split('');
const resReverse = resSplit.reverse();
const resJoin = resReverse.join('');
console.log("Reverse string using inbuilt function is:",str);
console.log(resJoin);
