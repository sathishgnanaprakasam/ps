class Queue {
    constructor() {
        this.items = [];
        this.front = this.rear = -1;
    }

    enqueue(data) {
        if (this.isEmpty()) {
            this.items.push(data);
            this.front = this.rear = 0;
        } else {
            // if the queue is not empty
            // insert the data at the end of the queue
            this.items.push(data);

            // update the rear pointer
            this.rear++;
        }
    }

    isEmpty() {
        return (this.front === -1) && (this.rear === -1);
    }

    dequeue() {
        if (!this.isEmpty()) {
            // only when the queue is not empty, we should allow the deletion to take place
            // check if this is the only element
            if (this.front === 0 && this.rear === 0) {
                // queue has only one element
                this.items.shift();
                this.front = this.rear = -1;
            } else {
                // queue has definitely more than one element
                this.items.shift();
                // update the rear
                this.rear--;
            }
        }
    }

    Front() {
        if (!this.isEmpty()) return this.items[this.front];
    }
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(4);
// queue.dequeue();
// queue.dequeue();
queue.enqueue(6);
queue.dequeue();
queue.dequeue();

console.log(queue.Front());

console.log(queue);