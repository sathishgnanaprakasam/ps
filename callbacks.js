let numbers = [1, 2, 3, 4, 5];

// squarer is a callback function
// because the squarer function is passed as an argument to the map function
function squarer(x) {
    return x ** 2;
}

let squares = numbers.map(squarer);

console.log(squares);