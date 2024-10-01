const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

rl.on('close', () => {
    const arr1 = userInput[0].split(' ').map(num => Number(num));
    const arr2 = userInput[1].split(' ').map(num => Number(num));

    const common = [];

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            if (!common.includes(arr2[i])) common.push(arr2[i]);
        }
    }

    console.log(common);
});