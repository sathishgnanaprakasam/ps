// read the input from the user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

rl.on('close', () => {
    // handle the input
    // const number = parseInt(userInput[0]);
    const number = Number(userInput[0]);

    // find the remainder
    const remainder = number % 2;

    // check if the remainder is equal to 0 or not
    // if it is equal to 0, then it is an even number
    if (remainder === 0) {
        console.log('Even');
    } else {
        // else it is an odd number
        console.log('Odd');
    }
});