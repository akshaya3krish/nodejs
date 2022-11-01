// find out the cubes of the numbers.
const functionTwo = (arr) => {
    // code comes here
    setTimeout(() => {
        try{
            for(let i =0; i < arr.length;i++){
                arr[i] = arr[i] * arr[i] * arr[i];
            }
            return arr;
        } catch(err) {
            return(`Exception has occured : ${err}`);
        }
    }, 2000)
}

//console.log(functionTwo([1,2,3]));

// Using promises

// find out the cubes of the numbers.
const promiseTwo = (arr) => {
    return new Promise((resolve, reject) => {
        // code comes here
        setTimeout(() => {
            try{
                for(let i =0; i < arr.length;i++){
                    arr[i] = arr[i] * arr[i] * arr[i];
                }
                resolve(arr);
            } catch(err) {
                reject(`Exception has occured : ${err}`);
            }
        }, 2000)
    })
}

promiseTwo(null).then((result) => {
    console.log(`Final cubed array is : ${result}`);
}).catch((errResult) => {
    console.error(errResult);
});