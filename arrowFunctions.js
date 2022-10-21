//addition program using arrow functions - program 1
const add = (a, b) => 
{
    const res = a + b;
    return res;
}
console.log(add(5,5));

//program on concatenation using arrow functions - program 2
const str = (a , b) =>
{
    const newString = a.concat(" ",b);
    return newString;
}
console.log(str("Nodejs", "Batch3"));

//program to change the string to uppercase - program 3
const text = (a) =>
{
    const newText = a.toUpperCase();
    return newText;
}
console.log(text("Hello welcome to Nodejs Batch-3"));

//program to change the string to lowercase - program 4
const txt = (a) =>
{
    const newText = a.toLowerCase();
    return newText;
}
console.log(txt("Hello welcome to Nodejs Batch-3"));