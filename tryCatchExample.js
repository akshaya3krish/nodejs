const addArr = (arr) => {
    try{
        for(let i=0;i<arr.length;i++)
        {
            arr[i] = arr[i]*arr[i];
        }
        return arr;
    }catch(err){
        console.log("Exception Handled");
        return "Exception Occured";
    }
}
console.log(addArr(10,3,4));