function search(numbers, elementToSearch) {
    // iterate the array numbers
    for (let index = 0; index < numbers.length; index++) {
        // for every element numbers[index] at index
        if (numbers[index] === elementToSearch) {
            return true;
        }
    }
    return false;
}

const numbers = [5, 1, 3, 7, 43, 6, 2];
const elementToSearch = 4;

console.log(search(numbers, elementToSearch));