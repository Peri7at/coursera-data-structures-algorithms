const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', (line) => {
    const n = parseInt(line);
    rl.once('line', (line) => {
        const integers = line.toString().split(' ').map(Number);
        console.log(majorityElement(n, integers));
        process.exit();
    });
});

function majorityElement(n, integers) {
  const sortedIntegers = integers.sort((a, b) => a - b);
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (sortedIntegers[i] === sortedIntegers[i + 1]) {
      count++;
    } else if (sortedIntegers[i] !== sortedIntegers[i + 1] && count < n / 2) {
      count = 1;
    }
  }

  return count > n / 2 ? 1 :  0;

}

module.exports = majorityElement;