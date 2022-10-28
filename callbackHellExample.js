function add (a, b, callback) {
    setTimeout(() => {
        const res = a + b;
        callback(res);
    }, 1000)
}


function twoOrThree(num, type, callback) {
    if (type === 'Even') {
        num = num * 2;
        callback(num);
    } else {
        num = num * 3;
        callback(num);
    }
}

add(2, 3, (result) => {
    console.log('result : ',result);
    if (result % 2 === 0){
        console.log('Even num');
        twoOrThree(result, 'Even', (resultEvenOrOdd) => {
            console.log(resultEvenOrOdd);
        })
    }else{
        console.log('Odd num');
        twoOrThree(result, 'Odd', (resultEvenOrOdd) => {
            console.log(resultEvenOrOdd);
        })
    }
});