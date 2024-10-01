const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

rl.on('close', () => {
    console.log(userInput);
});