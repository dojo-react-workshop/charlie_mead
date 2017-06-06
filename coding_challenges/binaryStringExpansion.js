module.exports = function binStr(string, array = []) {
    const firstQuestionMarkLocation = string.indexOf('?');
    if (firstQuestionMarkLocation < 0) {
        array.push(string);
        return array;
    }

    const firstSlice = string.slice(0, firstQuestionMarkLocation);
    const secondSlice = string.slice(firstQuestionMarkLocation + 1);

    binStr(firstSlice + '1' + secondSlice, array);
    binStr(firstSlice + '0' + secondSlice, array);

    return array;
}