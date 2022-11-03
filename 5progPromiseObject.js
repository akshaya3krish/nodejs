const SqRootNum = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       const num1 = 10;
       if(num1 != 0){
           result = num1 * num1 ;
           resolve(`Square root of the number is: ${result}`);
       }else{
           reject("Error");
       }
   },2000)
})   
SqRootNum.then((result)=>{
   console.log(result);
}).catch((err)=>{
   console.log(err);
})