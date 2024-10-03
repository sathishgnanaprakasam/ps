function selectionSort(numbers) {
    for (let ci = 0; ci < numbers.length - 1; ci++) {
        // find the minimum value index considering only the values from 
        // ci to numbers.length - 1
        let mi = ci;

        // validate the minimum index by iterating the array
        for (let j = ci + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[mi]) {
                mi = j;
            }
        }

        // swap the values at mi and ci
        let temp = numbers[mi];
        numbers[mi] = numbers[ci];
        numbers[ci] = temp;
    }
}

const numbers = [6, 3, 5, 1, 4, 2];

selectionSort(numbers);

console.log(numbers);