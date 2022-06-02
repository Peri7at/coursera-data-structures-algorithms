const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(fib_partial_sum(a, b));
        process.exit();
    }
}

function fib_partial_sum(a, b) {
  let fib = []
  fib[0]=0
  fib[1]=1

  let pisanoPeriodForTen = 60
  let remainderFib = b%pisanoPeriodForTen
  let startFib = a%pisanoPeriodForTen

  for (let i=2; i<=pisanoPeriodForTen; i++) {
    fib[i] = (fib[i-1] + fib[i-2])%10
  }
  if (remainderFib === 0) return 0
  if (startFib<=remainderFib) {
    return fib.slice(startFib,remainderFib+1).reduce((sum, el) => sum + el)%10
  } else {
    let arrPart1 = fib.slice(0,remainderFib+1)
    let arrPart2 = fib.slice(startFib,pisanoPeriodForTen+1)
    return arrPart1.concat(arrPart2).reduce((sum, el) => sum + el)%10
  }
}

module.exports = fib_partial_sum;