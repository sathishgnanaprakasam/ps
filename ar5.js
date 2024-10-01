const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function compareFn(a, b) {
    if (a[1] < b[1]) {
        return 1;
    } else if (a[1] === b[1]) {
        return 0;
    } else {
        return -1;
    }
}

rl.on('close', () => {
    const numbers = userInput[0].split(' ').map(num => Number(num));

    let frequencies = {};

    for (let i = 0; i < numbers.length; i++) {
        frequencies[numbers[i]] = 0;
    }

    for (let i = 0; i < numbers.length; i++) {
        frequencies[numbers[i]]++;
    }

    console.log(Object.entries(frequencies));

    console.log(Object.entries(frequencies).sort(compareFn)[0][0]);
});