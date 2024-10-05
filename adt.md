# Data Structures

- Arrays and Strings are the built-in data structures.
- Abstract Data Types (ADTs) are the user-defined data structures.
  - The behavior, operations and properties of ADTs are defined by the user.
  - Examples: Stack, Queue, Linked List, Tree, Graph, etc.

## Stack

- A stack is an ADT that follows the Last-In-First-Out (LIFO) principle.
- The last element added to the stack is the first element to be removed.
- Operations:
  - `push()`: Add an element to the top of the stack.
  - `pop()`: Remove and return the top element of the stack.
  - `peek()`: Return the top element of the stack without removing it.
  - `isEmpty()`: Return true if the stack is empty, false otherwise.
  - `size()`: Return the number of elements in the stack.
- Stack can be implemented using arrays or linked lists.

## Queue

- A queue is an ADT that follows the First-In-First-Out (FIFO) principle.
- The first element added to the queue is the first element to be removed.
- Operations:
  - `enqueue()`: Add an element to the rear of the queue.
  - `dequeue()`: Remove and return the front element of the queue.
  - `peek()`: Return the front element of the queue without removing it.
  - `isEmpty()`: Return true if the queue is empty, false otherwise.
  - `size()`: Return the number of elements in the queue.
- Queue can be implemented using arrays or linked lists.

## Linked List

- A linked list is an ADT that consists of chain of nodes.
- Each node contains a data and a reference to the next node.
- Types of linked lists:
  - Singly Linked List: Each node has a reference to the next node.
  - Doubly Linked List: Each node has a reference to the next and previous nodes.
  - Circular Linked List: Last node has a reference to the first node.
