const SqRootNum = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       const num1 = 10;
       if(num1 != 0){
           result = num1 * num1 ;
           resolve(result);
       }else{
           reject("Error");
       }
   },1000)
}) 
const cubeNum = new Promise((resolve1,reject1)=>{
    setTimeout(()=>{
        const num2 = 20;
        result2 = num2 * num2 * num2;
        resolve1(result2);
    },2000)
})
const addNum = new Promise((resolve2, reject2)=>{
    setTimeout(()=>{
        num3 = 5, num4 = 5;
        result3 = num3 + num4;
        resolve2(result3);
    },3000)
})
Promise.all([SqRootNum,cubeNum,addNum]).then((finalResult)=>{
    console.log(`final Result after using promise.all is: ${finalResult}`);
}).catch((err)=>{
    console.error(err);
})