import { LinkedListNode } from './linkedListstypes';


class Queue {
    private first: LinkedListNode;
    private last: LinkedListNode;
    private length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        let node: LinkedListNode = {
            value,
            next: null
        };

        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (this.length === 0) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }

        let node = this.first;
        this.first = this.first.next;
        this.length--;
        return node;
    }
    isEmpty(){
        return this.length === 0;
    }
}

const myQueue = new Queue();
console.log(myQueue.isEmpty())
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")
myQueue.dequeue()
console.log(myQueue)
console.log(myQueue.peek())
console.log(myQueue.isEmpty())
