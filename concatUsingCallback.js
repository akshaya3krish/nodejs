function concat(str1, str2, callback){
    setTimeout(() => {
        const newString = str1.concat(" ",str2);
        callback(newString);
    }, 2000)
}
concat("Akshaya", "krishnan", (result) => {
    console.log(result);
    console.log(result.length);
    if(result.length>10){
        console.log("Length of concatenated string is above 10 letters");
    }
    else{
        console.log("Length of concatenated string is below 10 letters");
    }
})
