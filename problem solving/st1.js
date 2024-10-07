const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

const userInput = [];

rl.on('line', (input) => {
    userInput.push(input);
});

function reverse(word) {
    // breaking condition
    if (word === '') {
        return word;
    }

    return reverse(word.slice(1,)) + word[0];
}

/*
    word = 'apple'

    reverse('apple')
        - reverse('pple')
            - reverse('ple')
                - reverse('le')
                    - reverse('e')
                        - reverse('')
                            - return
                        - print 'e' 
                    - print 'l'
                - print 'p' 
            - print 'p' 
        - print 'a' 



    reverse(apple)
        - 'a'
        - reverse('pple')
            - 'p'
            - reverse('ple')
                - 'p'
                - reverse('le')
                    - 'l'
                    - reverse('e')
                        - 'e'
                        - reverse('')


*/

function twoPointersReverse(word) {
    // convert the string into an array
    let chars = word.split('');

    // place two pointers
    let start = 0;
    let end = chars.length - 1;

    while (start < end) {
        // swap the chars at start and end indices
        let temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;

        // update the pointers
        start++;
        end--;
    }

    return chars.join('');
}

rl.on('close', () => {
    let word = userInput[0];

    // method 1:
    // console.log(word.split('').reverse().join(''));

    // method 2:
    // let reversed = '';
    // for (let index = word.length - 1; index >= 0; index--) {
    //     reversed += word[index];
    // }

    // console.log(reversed);

    // method 3:
    // let stack = [];
    // let result = '';

    // // traverse the string
    // for (let index = 0; index < word.length; index++) {
    //     stack.push(word[index]);
    // }

    // // until the stack is empty
    // while (stack.length > 0) {
    //     result += stack.pop();
    // }

    // console.log(result);

    // method 4: recursion
    // console.log(reverse(word));

    console.log(twoPointersReverse(word));
});