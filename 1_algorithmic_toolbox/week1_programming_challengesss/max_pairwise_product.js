const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    let max_index1 = -1;
    let max_index2 = -1;
    for (let i=0; i<arr.length; i++) {
        if (max_index1 === -1 || arr[max_index1]<arr[i]) {
            max_index1 = i
        }
    }
    for (let j=0; j<arr.length; j++) {
        if (max_index1 !== j && (max_index2 === -1 || arr[max_index2]<arr[j])) {
            max_index2 = j
        }
    }
    return arr[max_index1]*arr[max_index2]
}

module.exports = max;