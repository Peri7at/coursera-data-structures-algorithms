const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(change(parseInt(line, 10)));
    process.exit();
}   

function change(m) {
  let count = 0
  while (m>0) {
    if (m>=10) {
      m -= 10
    } else if (m<10 && m>=5) {
      m -= 5
    } else {
      m -= 1
    }
    count += 1
  }
  return count
}

module.exports = change;
