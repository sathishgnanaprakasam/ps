// var x = 10;

// // x = 25; // x is reassigned
// // let x = 25; // SyntaxError: Identifier 'x' has already been declared

// var x = 25; // var keywords allow redeclaration

// console.log(x);

// x = 25;

// let x; // does not support hoisting

// console.log(x);

// x = 25;

// var x; // var keywords does hoisting, it will be moved to the top of the

// console.log(x);

// scope: how a variable is accessible in a program

// for (let i = 1; i <= 10; i++);
// console.log(i); // ReferenceError: i is not defined

// for (var i = 1; i <= 10; i++);
// console.log(i); // 11

// x = 25;

// let x;

// console.log(x); // because x is not hoisted

// -------------------------------------------------------------------------------

// console.log('5' == 5); // true

// let x;

// console.log(x + 10); // NaN

// function hello(times) {
//     if (times === 0) return;

//     console.log('Hello World');
//     hello(times - 1);
// }

// hello(3);

// function hello() {
//     console.log(`Hello ${this.name}`);
// }

// class Student {
//     // special method that gets called when we create an object to this class
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         console.log(this); // print the current object
//     }
// }

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Student.prototype.job = 'Student';

// Student.prototype.printObject = function () {
//     console.log(this);
// }

// let studentX = new Student('Jane Doe', 30);
// let studentY = new Student('John Doe', 25);

// studentX.printObject();
// studentY.printObject();

// console.log(studentX.job);
// console.log(studentY.job);

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     printObject = function () {
//         console.log(this);
//     }
// }

// let studentX = new Student('Jane Doe', 30);
// let studentY = new Student('John Doe', 25);

// studentX.printObject();
// studentY.printObject();

// function Student(name, age) {
//     this.name = name;
//     this.age = age;

//     this.printObject = function (studentX) {
//         console.log(this);
//         console.log(studentX);
//     }
// }

// let studentX = new Student('Jane Doe', 30);
// let studentY = new Student('John Doe', 25);

// using call method
// studentX.printObject.call(studentY, studentX);

// using apply method
// studentX.printObject.apply(studentY, [studentX]);

// using bind method
// let printObject = studentX.printObject.bind(studentY, studentX);
// printObject();

// promise chaining
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// promise
//     .then((result) => {
//         console.log(result);
//         return result * 2;
//     })
//     .then(() => {
//         throw new Error('Something went wrong');
//     })
//     .then((result) => {
//         console.log(result);
//         return result * 2;
//     })
//     .then((result) => {
//         console.log(result);
//         return result * 2;
//     })
//     .catch((error) => {
//         console.log(error);
//         return 2;
//     })
//     .then((result) => {
//         console.log(result);
//     });


// function add(a) {
//     return function (b) {
//         if (b) {
//             return add(a + b);
//         }
//         return a;
//     };
// }

// console.log(add(10)(20)(30)()); // 60

function add(a) {
    let sum = a;

    function inner(b) {
        sum += b;
        return inner;
    }

    inner.toString = function () {
        return sum;
    };

    return inner;
}

console.log(add(10)(20).toString());
