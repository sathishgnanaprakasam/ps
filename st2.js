const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function isPalindrome(word) {
    // place the two pointers
    let s = 0;
    let e = word.length - 1;

    while (s < e) {
        if (word[s] !== word[e]) {
            return false;
        }

        s++;
        e--;
    }

    return true;
}

rl.on('close', () => {
    let word = userInput[0];

    if (isPalindrome(word)) {
        console.log('Palindrome');
    } else {
        console.log('Not a Palindrome');
    }
});