const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function hasNoEntry(frequencyArrays, number) {
    return !(frequencyArrays.map(sub => sub[0]).includes(number));
}

rl.on('close', () => {
    const numbers = userInput[0].split(' ').map(num => Number(num));

    // create an empty object
    const frequency = {};

    // traverse through the array
    for (let i = 0; i < numbers.length; i++) {
        // for every element, create an entry into the frequency object
        frequency[numbers[i]] = 0;
    }

    // iterate the array one more time
    for (let i = 0; i < numbers.length; i++) {
        // increment each of their frequencies
        frequency[numbers[i]]++;
    }

    let frequencyArrays = [];

    for (let i = 0; i < numbers.length; i++) {
        if (hasNoEntry(frequencyArrays, numbers[i])) {
            frequencyArrays.push([numbers[i], frequency[numbers[i]]]);
        }
    }

    console.log(`{${frequencyArrays.map(sub => sub.join(': ')).join(', ')}}`);
});