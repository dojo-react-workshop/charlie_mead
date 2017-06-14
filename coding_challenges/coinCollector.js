module.exports = function (amount, denominations) {
    if (amount === 0 || denominations.length < 1) { return 0; }
    const memo = {};
    return recursivelyMakeChange(amount);

    function recursivelyMakeChange(amount, coinIdx = 0) {
        const memoKey = `${amount}-${coinIdx}`;

        if (memo[memoKey]) {
            return memo[memoKey];
        }

        if (amount < 0 || denominations.length === coinIdx) {
            return 0;
        }

        const currentCoin = denominations[coinIdx];
        let waysToMakeChange = 0;

        while (amount > 0) {
            waysToMakeChange += recursivelyMakeChange(amount, coinIdx + 1);
            amount -= currentCoin;
        }

        waysToMakeChange = (amount === 0) ? waysToMakeChange + 1 : waysToMakeChange;

        memo[memoKey] = waysToMakeChange;
        return waysToMakeChange;
    }
}