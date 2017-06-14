const fetchChange = require('./coinCollector');

test('it returns the correct number of denominations', () => {
    const amount = 5;
    const denominations = [1, 2];
    expect(fetchChange(amount, denominations)).toBe(3);
    expect(fetchChange(5, [1, 3, 5])).toBe(3);
});

test('it returns 0 when amount is 0', () => {
    const amount = 0;
    const denominations = [1, 2, 3];
    expect(fetchChange(amount, denominations)).toBe(0);
});

test('it returns 0 when denominations are empty', () => {
    const amount = 5;
    const denominations = [];
    expect(fetchChange(amount, denominations)).toBe(0);
});

test('it returns 0 when making change is impossible', () => {
    const amount = 10;
    const denominations = [3, 8];
    expect(fetchChange(amount, denominations)).toBe(0);
});