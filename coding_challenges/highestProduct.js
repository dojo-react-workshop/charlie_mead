// Highest product of 3

// Given an array of integers, find the highest product you can get from three of the integers.

module.exports = function highestProduct(array) {
    if (array.length < 2) { console.log('here'); throw Error('Must have at least 3 vals') }
    const [first, second, third] = array;
    let highestProductOf2 = first * second;
    let lowestProductOf2 = first * second;
    let highest = Math.max(first, second);
    let lowest = Math.min(first, second);

    return array.reduce((highestProductOf3, val, index) => {
        if (index < 2) { return highestProductOf3; }

        highestProductOf3 = Math.max(
            highestProductOf3,
            highestProductOf2 * val,
            lowestProductOf2 * val
        );

        highestProductOf2 = Math.max(
            highestProductOf2,
            highest * val,
            lowest * val
        );

        lowestProductOf2 = Math.min(
            lowestProductOf2,
            lowest * val,
            highest * val
        );

        highest = Math.max(highest, val);
        lowest = Math.min(lowest, val);

        return highestProductOf3;



    }, first * second * third)
}