const { listeners } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

let lines = []
let count = 0;
rl.on('line', line => {
  lines.push(line)
  const d = Number(lines[0])
  const m = Number(lines[1])
  const n = Number(lines[2])
  const gasStations = String(lines[3]).split(' ')

  if (++count >= 4) {
      console.log(fuelTheCar(d, m, n, gasStations));
      process.exit();
  }

});

function fuelTheCar(d, m, n, gasStations) {
  let location = 0;
  if (location + m >= d) return 0;
  if (gasStations.length === 0 || gasStations[0] - location > m) return Infinity;
  let lastStop = location;
  console.log('arr' + typeof gasStations)
  while (gasStations.length !== 0 && gasStations[0] - location <= m) {
    lastStop = gasStations[0]
    console.log('here'+lastStop)
    gasStations.shift()
  }
  return 1+fuelTheCar(d,m,n,lastStop)
}

module.exports = fuelTheCar;
