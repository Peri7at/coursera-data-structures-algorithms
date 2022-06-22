// Input Format. Integer money.
// Output Format. The minimum number of coins with denominations 1, 3, 4 that changes money. 
// Constraints. 1 ≤ money ≤ 103.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', (line) => {
  const money = parseInt(line, 10);
  console.log(dp_money_change(money));
  process.exit();
});

function dp_money_change(money) {
  const coins = [1, 3, 4];
  let min_num_coins = [0];
  let num_coins = 0;
  for (let m = 1; m <= money; m++) {
    min_num_coins[m] = Infinity;
    for (let i = 0; i < coins.length; i++) {
      if (m>=coins[i]) {
        num_coins = min_num_coins[m-coins[i]]+1;
        if (num_coins < min_num_coins[m]) {
          min_num_coins[m] = num_coins;
        }
      }
    }
  } 
  return min_num_coins[money];
}

module.exports = dp_money_change;