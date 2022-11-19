// Reducer will reduce array to a single element

const arr = [1,2,3,4,5];

const result = arr.reduce((preNum, currNum, index, arr) => {
    console.log(preNum, currNum);
    return preNum*currNum
});

console.log(result);

// Practise 5 programs on each concept of map, array and reducer.