function execA(callback) {
    setTimeout(() => {
        console.log('Task A is completed!');
        callback();
    }, 1000);
}

function execB(callback) {
    setTimeout(() => {
        console.log('Task B is completed!');
        callback();
    }, 1000);
}

function execC(callback) {
    setTimeout(() => {
        console.log('Task C is completed!');
        callback();
    }, 1000);
}

execA(function () {
    execB(function () {
        execC(function () {
            console.log('All tasks are completed!');
        });
    });
})