const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    if (capacity === 0 || weights.length === 0) return 0
    let maxValue = 0;
    let costs = [];
    let cost = 0;
    let maxCost = 0;
    for (let i=0; i<count; i++) {
        cost = values[i]/weights[i]
        costs.push(cost)
        if (maxCost < cost) {
            maxCost = cost
        }
    }
    let maxIndex = costs.indexOf(maxCost)
    if (weights[maxIndex]<capacity) {
        maxValue = values[maxIndex]
        capacity -= weights[maxIndex]
    } else {
        maxValue = maxCost * capacity
        capacity = 0
    }    

    values.splice(maxIndex,1)
    weights.splice(maxIndex,1)

    return maxValue + max(count, capacity, values, weights)
}

module.exports = max;
