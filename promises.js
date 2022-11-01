// promises are the another way to make your code go in synchronous way like callbacks.
// we can avoild callback hell using promises.
// we can handle exceptions well in promises.
const promiseOne = (num) => {
    return new Promise((resolve, reject) => {
        // one either resolve or reject will be called at any point in time
        // resolve will be called for success scenarios, reject will be called for failure scenarios
        if (num % 2 === 0) {
            resolve('Number is Even');
        } else {
            reject('Number is Odd');
        }
    })
}

promiseOne(30).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})