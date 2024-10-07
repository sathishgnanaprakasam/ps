// T(N) = N*(1/2) - 2 = O(N*1/2)
function findNumberOfFactors(N) {
    // intialize a variable to keep track of the numberOfFactors
    let numberOfFactors = 0;

    // Generate the divisors of N
    for (let divisor = 2; divisor < (N ** 0.5); divisor++) {
        // For every divisor <- divisor
        // Check if the divisor is a factor of N or not
        if (N % divisor === 0) {
            // if it is a factor of N, increment the numberOfFactors
            numberOfFactors++;
        }
    }

    // return the numberOfFactors
    return numberOfFactors;
}

// Get the input number N
let N = 19; // O(1)

// Find the number of factors of the number - subroutine <- numberOfFactors
let numberOfFactors = findNumberOfFactors(N); // O(N)

if (numberOfFactors === 0) {
    console.log('Prime');
} else {
    // Else if the number of factors is greater than 2, then print "Not Prime"
    console.log('Not Prime');
}