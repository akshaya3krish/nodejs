// Map method is used to transform each and every element of any array.
// Map method returns the new array as length same as existing array.
const arr = [1,2,3,4,5];
const mappedArr = arr.map((num, index, arr) => {
    if (index === 2) 
        return num * 5;
    else 
        return num;
});

// const mappedArr = arr.map(num =>  num*5);

console.log(mappedArr);