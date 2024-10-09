// const buffer = require('buffer');

// const buf = Buffer.from('hello world', 'utf8');

// console.log(buf);

// console.log(buf.toString('utf8'));

// example for readable stream

// const fs = require('fs');

// const readableStream = fs.createReadStream('input.txt');

// const streamedArray = [];

// readableStream.on('data', (chunk) => {
//     streamedArray.push(chunk);
// });

// readableStream.on('end', () => {
//     console.log(Buffer.concat(streamedArray).toString('utf8'));
// });

// readableStream.on('error', (err) => {
//     console.log(err);
// });

const fs = require('fs');

fs.readFile('input.txt', (err, data) => {

    if (err) {
        console.log(err);
    }

    console.log(data.toString('utf8').split('\n'));
});