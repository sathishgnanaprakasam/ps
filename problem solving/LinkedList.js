const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];

        let thead = this.head;

        // iterate the linked list
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    push(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head === null) {
            // list is empty
            this.head = newNode;
        } else {
            // list is not empty
            // it has already atleast one element
            let thead = this.head;

            // move the thead to the tail of the linked list
            while (thead.next !== null) {
                thead = thead.next;
            }

            thead.next = newNode;
        }
    }

    unshift(data) {
        // create a new node
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;
    }

    shift() {
        if (this.head != null) {
            this.head = this.head.next;
        }
    }

    map(cb) {
        let nodes = [];

        let thead = this.head;

        while (thead !== null) {
            nodes.push(cb(thead.data));
            thead = thead.next;
        }

        return nodes;
    }
}

module.exports = LinkedList;