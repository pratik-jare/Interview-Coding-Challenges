function maxProfit(price: number[]): number {

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < price.length; i++) {
        if (price[i] < minPrice) {
            minPrice = price[i];
        } else {
            const profit = price[i] - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    console.log(minPrice,maxProfit)
    return maxProfit;
}


console.log(maxProfit([3,4,6,1,8,9]))
