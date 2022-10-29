function sub(a, b, callback){
    setTimeout(() => {
        const resSub = a - b;
        callback(resSub);
    }, 1000)
}

function sub1 (num, type, callback){
    if (type === "Even") {
        num = num * 10;
        callback(num)
    }
    else{
        num = num * 5;
        callback(num);
    }
}
sub (100, 19, (result) => {
    console.log("Result is:", result);
    if(result % 2 === 0){
        console.log("Even Number");
        sub1(result, "Even", (resultEvenOrOdd) => {
            console.log(resultEvenOrOdd);
                if(result<0){
                    console.log("Number is below 0");
                    if(result<=0){
                        const newResult = result * 100 + "\n new result multiply by 100";
                        console.log(newResult);
                    }
                    else{
                        const newResult = result - 100 + "\n new result subtract with 100";
                        console.log(newResult);
                    }
                }
                else{
                    console.log("number is above 0");
                    if(result<=0){
                        const newResult = result * 100 + "\n new result multiply by 100";
                        console.log(newResult);
                    }
                    else{
                        const newResult = result - 100 + "new result subtract with 100";
                        console.log(newResult);
                    }
                }
        })
    }
    else{
        console.log("Odd Number");
        sub1(result, "Odd", (resultEvenOrOdd) => {
            console.log(resultEvenOrOdd);
            if(result<0){
                console.log("Number is below 0");
                if(result<=0){
                    const newResult = result * 100 + "\n new result multiply by 100";
                    console.log(newResult);
                }
                else{
                    const newResult = result - 100 + "\n new result subtract with 100";
                    console.log(newResult);
                }
            }
            else{
                console.log("number is above 0");
                if(result<=0){
                    const newResult = result * 100 + "\n new result multiply by 100";
                    console.log(newResult);
                }
                else{
                    const newResult = result - 100 + "\n new result subtract with 100";
                    console.log(newResult);
                }
            }
        })
    }
});