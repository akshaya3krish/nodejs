// find out the cubes of the numbers.
const promiseTwo = (arr) => {
    return new Promise((resolve, reject) => {
        // code comes here
        try{
            for(let i =0; i < arr.length;i++){
                arr[i] = arr[i] * arr[i] * arr[i];
            }
            resolve(arr);
        } catch(err) {
            reject(`Exception has occured : ${err}`);
        }
    })
}

promiseTwo(null).then((result) => {
    console.log(`Final cubed array is : ${result}`);
}).catch((errResult) => {
    console.error(errResult);
});