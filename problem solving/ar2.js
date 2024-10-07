const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

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

    console.log(frequency);
});