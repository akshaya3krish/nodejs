function checkPrime(number, callback) {
  setTimeout(() => {
    callback(number);
  }, 1000)
}
checkPrime(11, num, (isPrime) =>{
    console.log(isPrime);
    if (num <= 1) {
      return false;
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return true;
    }
  
  })