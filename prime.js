/*
    This function should return true if the divisor is a factor of N
    false otherwise
*/
function isFactor(N, divisor) {
    // check if the division of N with divisor leaves a remainder of 0
    if (N % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

/*
    This function should return the total number of factors
*/
function findNumberOfFactors(N) {
    // intialize a variable to keep track of the numberOfFactors
    let numberOfFactors = 0;

    // Generate the divisors of N
    for (let divisor = 1; divisor <= N; divisor++) {
        // For every divisor <- divisor
        // Check if the divisor is a factor of N or not
        if (isFactor(N, divisor)) {
            // if it is a factor of N, increment the numberOfFactors
            numberOfFactors++;
        }
    }

    // return the numberOfFactors
    return numberOfFactors;
}

// Get the input number N
let N = 1;

// Find the number of factors of the number - subroutine <- numberOfFactors
let numberOfFactors = findNumberOfFactors(N);

// If the number of factors is 2, then print "Prime"
if (numberOfFactors === 2) {
    console.log('Prime');
} else {
    // Else if the number of factors is greater than 2, then print "Not Prime"
    console.log('Not Prime');
}