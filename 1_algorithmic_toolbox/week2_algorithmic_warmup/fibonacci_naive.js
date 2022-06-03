const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.on('line', readLine);

function readLine (line) {
    const n = parseInt(line);

    console.log(fibonacci(n));
    process.exit();
}

function fibonacci(n) {
  if (n<= 1) return n
  return fibonacci(n-1) + fibonacci(n-2)
}

module.exports = fibonacci;
