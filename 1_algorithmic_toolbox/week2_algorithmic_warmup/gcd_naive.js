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

        console.log(gcd(a, b));
        process.exit();
    }
}

function gcd(a, b) {
  let gcdnum = 0;
  for (let i=1;i<=a+b;i++) {
    if (a%i===0 && b%i===0) {
      gcdnum = i
    }
  }
  return gcdnum
}

module.exports = gcd;