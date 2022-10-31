function convertCase(text, callback){
    setTimeout(() => {
        text = text.toUpperCase();
        callback(text);
    }, 1000)
}
convertCase("nodejs-", (convertedText) => {
    console.log(convertedText);
    console.log(convertedText + "Batch3");
})