const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function findPair(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
}

rl.on('close', () => {
    // parse the input
    const numbers = userInput[0].split(' ').map(number => Number(number));
    const target = Number(userInput[1]);

    console.log(findPair(numbers, target));
});