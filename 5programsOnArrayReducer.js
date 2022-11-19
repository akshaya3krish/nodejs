//program-1
const num = [1, 2, 3, 4, 5];
const result = num.reduce((position, secNum)=>{
    return position * secNum;
})
console.log(result);

//program-2
const month = ['Jan','Feb','Mar','Apr'];
const monthResult = month.reduce((first, second)=>{
    return first + "," + second;
})
console.log(monthResult);
