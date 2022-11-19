//program-1
const arr = [10,20,30,40,50];
const mappedArr = arr.map((num, index, arr)=>{
    if(index < 5){
        return num * 10;
    }else{
        return num;
    }
})
console.log(mappedArr);

//program-2
const month = ['Jan','Feb','Mar','Apr'];
const mappedMonth = month.map((month, index, arr)=>{
    if(index < 2){
        return month;
    }
})
console.log(mappedMonth);
console.log(mappedMonth.toString());