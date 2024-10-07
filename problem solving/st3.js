const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function isAnagram(freqA, wordA, freqB, wordB) {

    if (wordA.length !== wordB.length) return false;

    for (let i = 0; i < wordA.length; i++) {
        if (freqA[wordA[i]] !== freqB[wordA[i]]) {
            return false;
        }
    }

    // for (let i = 0; i < wordB.length; i++) {
    //     if (freqA[wordB[i]] !== freqB[wordB[i]]) {
    //         return false;
    //     }
    // }

    return true;
}

rl.on('close', () => {
    let wordA = userInput[0];
    let wordB = userInput[1];

    // let frequencies = {};

    // for (let i = 0; i < word.length; i++) {
    //     frequencies[word[i]] = 0;
    // }

    // for (let i = 0; i < word.length; i++) {
    //     frequencies[word[i]]++;
    // }

    // // console.log(Object.entries(frequencies).map(sub => sub.join('')).join(''));

    // generate the frequencies of wordA
    let freqA = {};

    for (let i = 0; i < wordA.length; i++) {
        freqA[wordA[i]] = 0;
    }

    for (let i = 0; i < wordA.length; i++) {
        freqA[wordA[i]]++;
    }

    let freqB = {};

    for (let i = 0; i < wordB.length; i++) {
        freqB[wordB[i]] = 0;
    }

    for (let i = 0; i < wordB.length; i++) {
        freqB[wordB[i]]++;
    }

    if (isAnagram(freqA, wordA, freqB, wordB)) {
        console.log('Anagrams');
    } else {
        console.log('Not Anagrams');
    }
});