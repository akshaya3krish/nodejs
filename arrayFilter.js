// Filter method is used if you want to filter the elements of an array based on a condition

const arr = [-1, -2, 4, 5, 7];
const filteredArr = arr.filter((num, index, arr) => {
    return num > 0
});

const filteredArrShort = arr.filter(num =>   num > 0);

console.log(filteredArr);
console.log(filteredArrShort);