const promise = new Promise((resolve, reject) => {
    // do something
    // generating random number
    const number = Math.floor(Math.random() * 10);
    if (number % 2 === 0) {
        resolve(number);
    } else {
        reject(number);
    }
});

promise
    .then((number) => {
        console.log(`Even number: ${number}`);
    })
    .catch((number) => {
        console.log(`Odd number: ${number}`);
    });