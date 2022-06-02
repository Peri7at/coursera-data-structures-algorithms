const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);
        console.log(getFibMod(n, m));
        process.exit();
    }
}


function getFibMod(n, m) {
    let a = 0
    let b = 1
    let c = 1
    let pisanoPeriod = 0; 
    let limit = 1
    for (let i = 0; i < limit; i++){
        c = (a + b) % m
        a = b
        b  = c
        if (a == 0 && b == 1) {
            pisanoPeriod = i + 1
        } else {
            limit = limit + 1
        }
    }

    let remainderFib = n%pisanoPeriod

    let fib = []
    fib[0]=0
    fib[1]=1
    for (let i=2; i<=remainderFib; i++) {
      fib[i] = (fib[i-1] + fib[i-2])%m
    }
    
    return fib[remainderFib]
    
}

module.exports = getFibMod;
