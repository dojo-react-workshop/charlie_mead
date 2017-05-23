const array = [1,2,3,4,0];

const sum = array.reduce((currentSum, currentVal) => {
    return currentSum + currentVal;
});

console.log(sum);