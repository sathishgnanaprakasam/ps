function bubbleSort(numbers) {
    let numberOfTimes = numbers.length;
    // create a loop that runs for numbers.length number of times
    while (numberOfTimes--) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                // do a swap
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
            }
        }
    }
}

const numbers = [6, 3, 5, 1, 4, 2];

bubbleSort(numbers);

console.log(numbers);