class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        //we need to buy low and sell high
        //figure out the best day to buy first.
        //then figure out the next time to sell.
        let min: number =100000;
        let max:number =0;
        let index:number =0;
        let maxProfit: number = 0;
        for(let i=0; i<prices.length; i++){
            if(prices[i]<min){
                min=prices[i];
                index=i;
            }
            
            //find time to sell. 
            let currentProfit = prices[i] - min;
            if(currentProfit > maxProfit){
                maxProfit = currentProfit;
            }
        }
        let result: number= maxProfit;
        if(result<=0){
            result=0;
        }
        return result;
    }
}
