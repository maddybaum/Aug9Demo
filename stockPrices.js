/*This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

The best function will be given an array of stock prices in the order they happened throughout the day.

It should return the maximum possible profit on the stock for that day.

For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
*/
function best(arr) {
    let newArr = [];
    for(let i = 0; i <arr.length; i++){
        if(arr[i] > arr[0]){
            newArr.push(arr[i])
        }
    } if (newArr.length === 0) {
        return "You will not make a profit today"
    }
    newArr.sort((a, b) => b - a)
    let profit = Math.abs(arr[0] - newArr[0]);
    return `for a profit of ${profit} dollars, you should buy at ${arr[0]} and sell at ${newArr[0]}`
}
console.log(best([5, 4 , 3, 2, 1]))