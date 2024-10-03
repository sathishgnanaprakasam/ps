function search(numbers, elementToSearch) {
    // define the starting index and the ending index
    let start = 0;
    let end = numbers.length - 1;

    while (start <= end) {
        // find the middle index
        let mid = Math.floor((end + start) / 2);

        // check if the middle value is the value we are searching for
        if (numbers[mid] === elementToSearch) {
            return true;
        } else if (elementToSearch > numbers[mid]) {
            start = mid + 1;
        } else if (elementToSearch < numbers[mid]) {
            end = mid - 1;
        }
    }

    return false;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const elementToSearch = 6;

// sort the array if an unsorted array is given
numbers.sort((a, b) => a - b);

console.log(search(numbers, elementToSearch));