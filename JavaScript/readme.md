## Question:

Think yourself as an interviewer and let's say you have been provided with 100 students to evaluate and you have been told that all the students have javascript knowledge. Now, what will be the general questions that you will ask to evaluate the students?

## Answer:

The questions that are uncommon and not asked in general are the best questions to ask.

# JavaScript Interview Questions:

1. What is Closure in JavaScript?

Closure is a function that has access to the outer function's variables.

```javascript
function outer() {
  let x = 10;

  function inner() {
    x++;
    return x;
  }

  return inner;
}

let func = outer();
console.log(func());
```

2. What are callbacks?

- Callbacks are functions that are passed as arguments to other functions.
- Example: Give me a call when you are done.

Examples: setTimeout, setInterval, addEventListener, methods of arrays like map, filter, reduce, etc.

3. What is callback hell in JavaScript?

Callback hell is a situation when you have multiple nested callbacks.

```javascript
function execA(callback) {
  setTimeout(() => {
    console.log("Task A is completed!");
    callback();
  }, 1000);
}

function execB(callback) {
  setTimeout(() => {
    console.log("Task B is completed!");
    callback();
  }, 1000);
}

function execC(callback) {
  setTimeout(() => {
    console.log("Task C is completed!");
    callback();
  }, 1000);
}

execA(function () {
  execB(function () {
    execC(function () {
      console.log("All tasks are completed!");
    });
  });
});
```

4. What is a promise?

A promise is a object of an asynchronous operation that may be either resolved or rejected in the future.

```javascript
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
```

5. What is async/await?

Async/await is a new way to write asynchronous code in JavaScript. It is a combination of promises and generators.

```javascript
async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
}
```

6. What is the difference between let and var?

let:

- block-scoped
- introduced in ES6
- can be reassigned but cannot be redeclared
- hoisted but not initialized and cannot be accessed before the declaration

var:

- function-scoped
- available in JavaScript from the beginning
- can be reassigned and redeclared
- hoisted

7. What is the difference between == and ===?

==:

- checks only the value

===:

- checks the value and type

```javascript
console.log(10 == "10"); // true
console.log(10 === "10"); // false
```

8. What is the difference between null and undefined?

null:

- represents the intentional absence of any object value
- typeof null is object

undefined:

- represents the unintentional absence of any value
- typeof undefined is undefined

```javascript
let x;

console.log(x); // undefined
console.log(typeof x); // undefined

let y = null;

console.log(y); // null
console.log(typeof y); // object
```

9. What is hoisting in JavaScript?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before the code execution.

```javascript
console.log(x); // undefined

var x = 10;
```

10. What is the event loop, call stack and task queue in JavaScript?

- Call stack: It is a data structure that records the function calls. It is a LIFO structure. It is used to keep track of the function calls. It is a synchronous structure. It has only the function calls that are currently executing.
- Task queue: Stores the tasks that are ready to be executed.
- event loop: It is a mechanism that checks constantly the task queue and call stack. If the call stack is empty, it takes the tasks from the task queue and pushes them to the call stack for execution.

11. this keyword, class, object, constructor, prototype

- this: It is a reference to the object that is executing the current function.
- class: It is a blueprint for creating objects. It is also called as a collection of objects. It is also called as a template for creating objects.
- object: It is an instance of a class.
- constructor: It is a special method that is used to initialize the object. It gets called when the object to that class is created.
- prototype: It is a property of a function that is used to add properties and methods to the function.

12. What is the difference between call, apply, and bind?

- call: It is used to call a function with a given this value and arguments provided individually.
- apply: It is used to call a function with a given this value and arguments provided as an array.
- bind: It is used to create a new function that, when called, has its this keyword set to the provided value.

13. What is the difference between function declaration and function expression?

- function declaration: It is a function that is declared with the function keyword.
- function expression: It is a function that is assigned to a variable.

```javascript
// function declaration
function add(a, b) {
  return a + b;
}

// function expression
const add = function (a, b) {
  return a + b;
};
```

14. What is the difference between var, let, and const?

- var:
  - It is function-scoped and hoisted.
  - It can be redeclared and reassigned.
- let: It is block-scoped and hoisted.
  - It can be reassigned but cannot be redeclared.
- const: It is block-scoped and hoisted.
  - It cannot be reassigned and redeclared.

15. What is the difference between map, filter, and reduce?

- map: It is used to create a new array with the results of calling a provided function on every element in the array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

- filter: It is used to create a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter((number) => number % 2 === 0);

console.log(even); // [2, 4]
```

- reduce: It is used to reduce the array to a single value.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, number) => acc + number, 0);

console.log(sum); // 15
```

16. What is the difference between window and document?

- window: It is the global object in the browser. It represents the browser window.
- document: It is a property of the window object. It represents the HTML document.

```javascript
console.log(window);

console.log(document);
```

17. What is the difference between local storage and session storage?

localStorage:

- It stores the data with no expiration date.
- The data will not be deleted when the browser is closed.
- The data will be deleted when the user clears the browser cache.
- The memory limit is 5MB.
- The data will be available across the tabs.

sessionStorage:

- It stores the data for one session.
- The data will be deleted when the browser is closed or the tab is closed.
- The data will be deleted when the user clears the browser cache.
- The memory limit is 5MB.
- The data will not be available across the tabs. It is tab-specific.

cookies:

- It stores the data with an expiration date.
- The data will not be deleted when the browser is closed.
- The data will be deleted when the expiration date is reached.
- The memory limit is 4KB.

18. What is the difference between cookies and local storage?

- cookies:
  - It stores the data with an expiration date.
  - The data will not be deleted when the browser is closed.
  - The data will be deleted when the expiration date is reached.
  - The memory limit is 4KB.
- local storage:
  - It stores the data with no expiration date.
  - The data will not be deleted when the browser is closed.
  - The data will be deleted when the user clears the browser cache.
  - The memory limit is 5MB.

19. Explain event delegation in JavaScript?

Event delegation is a technique where we attach an event listener to a parent element instead of attaching it to the child elements. This is useful when we have multiple child elements and we want to attach the same event listener to all the child elements. This will reduce the number of event listeners attached to the child elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event Delegation</title>
  </head>
  <body>
    <div>
      <button id="add">Add</button>
      <ul id="list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>

    <script src="index.js"></script>
  </body>
</html>
```

```javascript
// event delegation example
let parentList = document.getElementById("list");

parentList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.innerText);
  }
});
```

20. Explain about higher-order functions in JavaScript?

Higher-order functions are functions that take other functions as arguments or return functions as output.

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function calculator(operation, a, b) {
  return operation(a, b);
}

console.log(calculator(add, 10, 20)); // 30
console.log(calculator(subtract, 20, 10)); // 10
```

Here, `calculator` is a higher-order function that takes `add` and `subtract` functions as arguments. whereas, `add` and `subtract` are callback functions.

21. What is the difference between local scope and global scope.

local scope:

- It is the scope that is available within the function.
- The variables declared inside the function are available only within the function.

global scope:

- It is the scope that is available throughout the program.
- The variables declared outside the function are available throughout the program.

```javascript
let x = 10; // global scope

function add() {
  let y = 20; // local scope
  console.log(x); // 10
  console.log(y); // 20
}

add();
console.log(x); // 10
console.log(y); // ReferenceError: y is not defined
```

22. instanceof operator in JavaScript?

The instanceof operator is used to check whether an object is an instance of a class or not.

```javascript
class Person {}

let person = new Person();

console.log(person instanceof Person); // true
```

23. Promise Chaining

- Promise chaining is a mechanism where we can chain multiple promises together.
- It is used to handle multiple asynchronous operations one after the other.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
  });
```

24. Pure functions

- Pure functions are functions that always return the same output for the same input.
- They do not have any side effects.
- They only depend on the input parameters.
- They are helpful in testing and debugging.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(10, 20)); // 30

console.log(add(10, 20)); // 30
```

Impure functions:

```javascript
function add(a, b) {
  return a + b + Math.random();
}

console.log(add(10, 20)); // 30.123456

console.log(add(10, 20)); // 30.789012
```

one more example with side effects:

```javascript
let x = 10;

function add(a) {
  x = x + a;
}

add(20); // this will change the value of x (side effect)

console.log(x); // 30
```

25. Debouncing and Throttling

- Debouncing: It is a technique where we wait for some time before executing the function. It is used to limit the number of times a function is called. It will be executed only once after the last event.

```javascript
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}

function log() {
  console.log("Debouncing");
}

const debouncedLog = debounce(log, 1000);

window.addEventListener("resize", debouncedLog);
```

- Throttling: It is a technique where we execute the function at regular intervals. It is used to limit the number of times a function is called. It will be executed at regular intervals only once each time.

```javascript
function throttle(func, delay) {
  let flag = true;
  return function () {
    if (flag) {
      func.apply(this, arguments);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

function log() {
  console.log("Throttling");
}

const throttledLog = throttle(log, 1000);

window.addEventListener("resize", throttledLog);
```

Example Use Cases:

- When the user is typing in the search box, we can use debouncing. So, if we want to execute the search function after the user has stopped typing, we can use debouncing.
- When the user is scrolling the page, we can use throttling. So, if we want to execute the scroll function at regular intervals, we can use throttling.

26. What are prototypes in JavaScript?

- Prototypes are used to add properties and methods to the function.
- They are used to share the properties and methods among the objects.
- They are used to reduce the memory usage.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

let person1 = new Person("John");
let person2 = new Person("Doe");

console.log(person1.getName()); // John
console.log(person2.getName()); // Doe
```

27. What is infinite currying in JavaScript?

currying:

- Currying is a technique where we convert a function that takes multiple arguments into a sequence of functions that take one argument.

```javascript
function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(10)(20)(30)()); // 60
```

infinite currying:

- Infinite currying is a technique where we can pass any number of arguments to the function.

```javascript
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

console.log(add(10)(20)(30).toString()); // 60
console.log(add(10)(20)(30)(40).toString()); // 100
```

28. WeakMap and WeakSet
29. Temporal dead zone

Temporal dead zone is a time between the variable creation and initialization. In this time, the variable is in the TDZ and cannot be accessed.

```javascript
console.log(x); // ReferenceError: Cannot access 'x' before initialization

let x = 10;
```

30. Write own polyfill for bind, call, and apply
31. Array buffer
32. Event capturing
33. Event bubbling
34. shallow copy and deep copy
35. querySelector

```javascript
document.querySelector(".class");
document.querySelector("#id");
document.querySelector("tag");
document.querySelector(".class tag");
```

36. generator functions

# React Interview Questions:

1. How is Virtual DOM created in react and painting is happening behind the scenes?

- Virtual DOM is a lightweight copy of the actual DOM.
- It is created by the React whenever the state or props of the component changes.
- It is used to compare the previous state of the component with the current state of the component.
- It is used to update only the changed part of the component in the actual DOM.

2. Data flow in React?

- Data flow in React is unidirectional.
- It flows from parent to child components.
- It is used to pass the data from parent to child components.

3. What is the difference between state and props?

- state:

  - It is used to store the internal data of the component.
  - It is mutable.
  - It is used to store the data that can be changed.
  - It's a component's memory.

- props:
  - It is used to pass the data from parent to child components.
  - It is immutable.
  - It is used to store the data that cannot be changed.

4. What is MVC architecture?

- MVC stands for Model-View-Controller.
- It is a software design pattern.
- It is used to separate the concerns of the application.
- It is used to divide the application into three parts: Model, View, and Controller.
- Model: It is used to store the data of the application.
- View: It is used to display the data to the user.
- Controller: It is used to control the flow of the application.

5. props drilling

- Props drilling is a technique where we pass the data from parent to child components through multiple levels of components.
- It is used to pass the data from the parent component to the child component.
- We can solve this problem by using context API or Redux.

6. what are side effects in React?

- Side effects are the operations that are performed outside the React component.
- They are used to perform the operations like data fetching, DOM manipulation, etc.
- In functional components, we use useEffect hook to perform the side effects.

7. Class components vs Functional components.
8. redux
9. hooks - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback, useLayoutEffect
10. useEffect and limitations.
11. fetch and axios
12. lifecycle methods - class components
13. Babel
14. error boundary
15. optimization techniques in React

# NodeJS Interview Questions:

1. Explain about streams and buffers in NodeJS?
2. What is a middleware in NodeJS?
3. What is a fork in NodeJS?
4. What is a single thread in NodeJS?
5. filesystem in NodeJS

# Databases - MySQL & MongoDB Interview Questions:

1. Aggregate in mongodb
2. populate in mongodb
3. joining data in mongodb
4. DDL & DML in mysql
5. table creation in mysql
6. CRUD operations in mysql
