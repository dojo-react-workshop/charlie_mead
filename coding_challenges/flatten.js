function flattenArray(array) {
    const result = [];
    flatten(array, result);
    return result;

    function flatten(array, result) {
        let length = array.length;
        let idx = 0;

        while (length > 0) {
            let current = array[idx];
            idx += 1;
            if (Array.isArray(current)) {
                flatten(current, result);
            } else {
                result.push(current);
            }
        }
    }
}