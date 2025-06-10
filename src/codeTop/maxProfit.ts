/**
 * 买卖股票的最佳时机
 * @param prices
 * @returns
 */
function maxProfit(prices: number[]): number {
    let max = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // 如果当前价格比最小的价格小，说明价格更合适，更新最小的价格
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            max = Math.max(prices[i] - minPrice, max); // 比较当前值减去最小的价格，与最大的利润进行比较，看哪个利润最大
        }
    }
    return max;
}
