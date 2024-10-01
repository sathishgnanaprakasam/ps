const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function exists(number, uniques) {
    for (let index = 0; index < uniques.length; index++) {
        if (uniques[index] === number) {
            return true;
        }
    }

    return false;
}

rl.on('close', () => {
    const numbers = userInput[0].split(' ').map(num => Number(num));

    // console.log(numbers.reduce((p, c) => {
    //     if (!p.includes(c)) {
    //         return [...p, c];
    //     } else {
    //         return p;
    //     }
    // }, []));

    const uniques = [];

    numbers.forEach(number => {
        if (!exists(number, uniques)) {
            uniques.push(number);
        }
    });

    console.log(uniques);
});