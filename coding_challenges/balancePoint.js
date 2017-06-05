/*
Write a function that returns whether the given
array has a balance point between indices,
where one side’s sum is equal to the other’s.
Example: [1, 2, 3, 4, 10]→ true(between 
indices 3 & 4), but [1, 2, 4, 2, 1]→ false.
*/

function balancePoint(array) {
    let sum1 = array.reduce(function (accum, val) {
        return accum + val;
    });

    let sum2 = 0;

    for (let i = 0; i < array.length; i += 1) {
        if (sum1 === sum2) { return true; }
        let current = array[i];
        sum2 += current;
        sum1 -= current;
    }

    return false;

}

console.log(balancePoint([20, -10, 10]))

