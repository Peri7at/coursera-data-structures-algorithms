const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    let fib = []
    fib[0]=0
    fib[1]=1

    let pisanoPeriodForTen = 60
    let remainderFib = n%pisanoPeriodForTen

    for (let i=2; i<=remainderFib; i++) {
      fib[i] = (fib[i-1] + fib[i-2])%10
    }
    if (remainderFib === 0) return 0
    return fib.reduce((sum, el) => sum + el)%10
}

module.exports = fib;