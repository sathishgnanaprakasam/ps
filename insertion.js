function insertionSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        // take the value pointed by i into temp box
        let temp = numbers[i];
        let box = i;

        for (let j = box - 1; j >= 0; j--) {
            if (temp < numbers[j]) {
                // do a shift
                numbers[box] = numbers[j];
                box = j;
            } else if (temp > numbers[j]) {
                break;
            }
        }

        // put the value from temp back to the box
        numbers[box] = temp;
    }
}

const numbers = [3, 1, 5, 7, 4, 6, 2];

insertionSort(numbers);

console.log(numbers);