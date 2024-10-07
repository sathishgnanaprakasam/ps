class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    pop() {
        if (!this.isEmpty()) {
            this.items.pop();
            this.top--;
        }
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        if (!this.isEmpty()) return this.items[this.top];
    }
}

const stack = new Stack();

stack.push(4);

console.log(stack);