// Modern developers use async await for synchronous executions.
// To avoid callback hell
const delayFunction = (a, b) => { // this function upon which await is used should be of type promise.
     return new Promise((resolve) => {
         setTimeout(() => {
            resolve(a + b);
            }, 2000)
     });   
    /*setTimeout(() => {
        return (a + b);
    }, 2000)*/
}
const addFun = async() => { // await can be used on only async functions.
    const result = await delayFunction(23,34); // await keyword will make the controller wait at the line where it is called.
    console.log(result);
}
addFun();