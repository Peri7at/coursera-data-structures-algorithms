const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    const arr = line.toString().split(' ').slice(1).map(Number);

    rl.once('line', line => {
        const keys = line.toString().split(' ').slice(1).map(Number);
        const result = [];

        for (let key of keys) {
            result.push(binarySearch(arr, key));
        }

        const res = result.join(' ');
        const maxLength = 50000;

        for (let i = 0; i < res.length; i += maxLength) {
            process.stdout.write(res.slice(i, i + maxLength));
        }

        process.stdout.write('\n');
        process.exit();
    })
});

function binarySearch(arr = [], key) {
    let start = 0; // 0 index based
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (arr[mid] === key) return mid;
        if (arr[mid]>key) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

module.exports = binarySearch;