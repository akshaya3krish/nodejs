//program-1
const month = ['Jan','Feb','Mar','Apr','May', 'June'];
const filteredMonth = month.filter((month, index, arr)=>{
    if(index < 3){
        return month;
    }
})
console.log(filteredMonth);
console.log(filteredMonth.toString());

//program-2
const arr = [1000, 2000, 3000, -4000, -5000];
const filteredArr = arr.filter((num, index, arr) => {
    return num <= 1000;
});
console.log(filteredArr);
