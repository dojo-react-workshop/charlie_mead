const matrixSearch = require('./matrixSearch');

test('it returns true if large matrix contains small matrix', () => {
    const largeMatrix = [
        [2, 61, 3, 61],
        [1, 6, 4, 5],
        [17, 3, 61, 5]
    ]

    const smallMatrix = [
        [3, 61],
        [4, 5]
    ]

    expect(matrixSearch(largeMatrix, smallMatrix)).toBe(true);
})

test('it returns false if large matrix lacks small matrix', () => {
    const largeMatrix = [
        [2, 61, 3, 61],
        [1, 6, 4, 5],
        [17, 3, 61, 5]
    ]

    const smallMatrix = [
        [3, 32],
        [4, 5]
    ]

    expect(matrixSearch(largeMatrix, smallMatrix)).toBe(false);
})