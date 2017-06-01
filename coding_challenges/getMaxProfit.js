function max_price(arr = process.argv[2]) {

    if (arr.length < 2) {
        return console.log("Array not long enough")
    };

    var profit = arr[1] - arr[0];

    var buy = arr[0];

    for (i = 1; i < arr.length - 1; i++) {
        if (buy > arr[i]) {
            buy = arr[i];
        };
        if (profit < (arr[i + 1] - buy)) {
            profit = (arr[i + 1] - buy)
        };
    };

    return profit;
}

console.log(max_price([10,1,11]));