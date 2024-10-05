const LinkedList = require('./LinkedList');

let list = new LinkedList();

// push: insertAtTail()
list.push(3);
list.push(4);
list.push(5);
list.push(10);

list.unshift(11);
list.unshift(12);
list.push(15);

list.shift();
list.shift();

console.log(list.toArray());

console.log(list.map((data) => {
    return data ** 2;
}));