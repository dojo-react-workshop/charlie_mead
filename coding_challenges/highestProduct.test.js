const highestProduct = require('./highestProduct');

test('it returns the highest product', () => {
    const arr = [1, 4, 0, 3, 5, 2];
    expect(highestProduct(arr)).toBe(60);
});

test('it works with negative numbers', () => {
    const arr = [1, 4, -3, 0, 5, 2, -10];
    expect(highestProduct(arr)).toBe(150);
});

test('it throws if fewer than 3 values', () => {
    expect(highestProduct([1, 2])).toThrow();
});

test('it works with all negatives', () => {
    expect(highestProduct([-5, -4, -3, -2, -1])).toBe(-6);
})