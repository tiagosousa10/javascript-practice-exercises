/* 
  write a javascript function to convert an amount to coins.
  example input: 46 and possible coins: 25,10,5,2,1
  output: 25,10,10,1
*/

const countCoins = (money, coins= [25,10,5,2,1]) => {
  const totalCoins = [];
  for(let i = 0; i < coins.length; i++) {
    const thisCoinNum = Math.floor(money / coins[i]); // money / 25 = 1, money / 10 = 4, money / 5 = 9, money / 2 = 19, money / 1 = 46
    for(let y = 0; y < thisCoinNum; y+=1) {
      totalCoins.push(coins[i])
    }
    money -= coins[i] * thisCoinNum;
  }

  return totalCoins;
}

console.log(countCoins(46))
