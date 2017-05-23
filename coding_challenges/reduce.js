Array.prototype.reduce = function (cb, accumulator) {
    let i = 0;

    if (accumulator === undefined) {
        accumulator = this[0];
        i = 1;
    }
    for (i; i < this.length; i += 1) {
        accumulator = cb(accumulator, this[i]);
    }

    return accumulator;
}